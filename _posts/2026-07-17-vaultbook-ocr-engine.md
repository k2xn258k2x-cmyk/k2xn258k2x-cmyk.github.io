---
title: "VaultBook's OCR Engine: How We Read Text Inside Your Images, Completely Offline"
description: "A complete technical walkthrough of VaultBook's OCR pipeline - from inline screenshots in your notes to scanned PDFs, embedded images inside Word documents, and photos pasted into entries. Every character recognized locally, with zero cloud processing, zero uploads, and zero waiting."
date: 2026-07-17 17:00:00 -0600
cover: /assets/img/feature-screenshot-placeholder.svg
---

Paste a screenshot of a contract into a note. Attach a scanned invoice to an entry. Drag in a Word document with embedded product photos. Zip up a folder of research images and attach the archive. In VaultBook, every piece of text in every one of those images becomes fully searchable - found in the main search bar, surfaced by the Q&A panel, ranked by the Related entries engine - without a single pixel of your images leaving your device.

This is what genuinely offline OCR looks like in practice. Not "privacy-first" in the marketing sense of data that is encrypted before being sent to a cloud processor. Fully local, in the literal engineering sense: the entire optical character recognition pipeline runs inside your browser using a JavaScript port of one of the most capable open-source OCR engines in existence, against files that never touch a network socket under any circumstances.

This article walks through the entire OCR system in VaultBook from the ground up - the engine it is built on, the image preprocessing that runs before recognition begins, the full matrix of file formats it handles, the four distinct ways it finds images inside your notes, the intelligent caching architecture that means each image is only ever recognized once, and the way OCR results integrate into search scoring at every level. Every technical detail here is directly verifiable in the VaultBook source code.

<!--more-->

## The Engine: Tesseract.js Running Entirely in Your Browser

VaultBook's OCR is built on Tesseract.js, the JavaScript port of Tesseract - an open-source OCR engine originally developed at Hewlett-Packard in the 1980s, later open-sourced and maintained by Google, and now one of the most accurate and widely deployed OCR systems in the world. Tesseract is the same engine used by academic researchers, government document processors, and large-scale digitization projects. It handles printed text, stylized fonts, mixed languages, and degraded image quality with a robustness that has been refined over four decades of development.

VaultBook ships Tesseract.js as a local file: `./libs/tesseract.min.js`. It is loaded from the same folder as VaultBook.html itself, from your device, via a relative path. There is no CDN request. There is no version check against an external server. There is no telemetry reporting recognition results back to a service. The library is entirely self-contained once loaded.

When VaultBook calls `Tesseract.recognize(blob, 'eng', ocrOpts)`, that call executes entirely within the browser's JavaScript runtime and Web Worker pool. The image data - your screenshot, your scanned document page, your embedded photo - is processed in memory on your device by code that is already loaded locally. The result, a string of recognized text, is returned to the calling code and stored locally. Nothing in this pipeline involves a network request. Nothing is uploaded. Nothing is logged to any external system.

This is the baseline that everything else builds on. A cloud OCR system like Google Vision API, Amazon Textract, or Microsoft Azure Computer Vision all require you to send image data to a remote server. Some of these services offer strong privacy policies and data deletion guarantees, and many of them produce excellent results. But they have an architectural property that VaultBook deliberately avoids: your image data travels across a network to a server you do not control, and the recognition result travels back. With Tesseract.js running locally, neither leg of that journey exists. The image data starts on your device and stays there.

## Before Recognition: The Image Preprocessing Pipeline

OCR accuracy is not determined solely by the engine - it is heavily influenced by the quality of the image fed into it. A small, low-resolution screenshot fed to Tesseract will produce significantly worse results than the same image normalized to an appropriate size and cleaned up. VaultBook handles this preprocessing step before Tesseract ever sees the image, using a two-function pipeline: `sanitizeDataUrl()` and `dataUrlToOcrBlob()`.

### Sanitizing the Data URL

When images are stored inline in VaultBook notes - pasted directly as screenshots or embedded via Markdown - they are stored as data URLs: strings of the form `data:image/png;base64,...` where the base64 payload is the raw bytes of the image file. These strings can accumulate malformed content in several ways: whitespace and newline characters injected into the base64 payload during copy-paste operations, trailing characters accidentally captured when extracting the URL from HTML or Markdown syntax, and subtle encoding irregularities that would cause `atob()` to throw an error.

`sanitizeDataUrl()` handles all of these edge cases. It trims whitespace from the full string, strips all internal whitespace and newline characters from the base64 payload, and then extracts only the valid data URL content using a precise regular expression: `^data:image\/[a-zA-Z0-9.+-]+;base64,[A-Za-z0-9+/=]+`. Finally, it runs a sanity check by calling `atob()` on the extracted payload and catching any errors. If the data URL cannot be decoded, the function returns an empty string and that image is silently skipped rather than causing a recognition error. The result is a clean, valid data URL that can be reliably rendered into an image element.

### Normalizing to the Right Resolution

Once the data URL is clean, `dataUrlToOcrBlob()` handles the geometric normalization. This function creates an `Image` object, loads the data URL into it, and then draws it onto a canvas at a precisely calculated target size.

The target width calculation embodies a careful design trade-off. Images that are too small produce poor OCR results because individual characters may be only a few pixels wide, and the recognizer cannot distinguish letterforms reliably. Images that are too large consume excessive memory and take longer to process. VaultBook's formula is: `Math.max(1000, Math.min(1800, img.width < 800 ? img.width * 2.0 : img.width))`.

This means: if the image is smaller than 800 pixels wide, double it (up to 1800px maximum). If it is already 800px or wider, keep its natural width - but clamp it to 1800px if it would otherwise be extremely large. The minimum is 1000px, so even a tiny 200x100 thumbnail ends up at 1000px wide. In practice, this upscaling of small images is the single most important preprocessing step for improving recognition accuracy on screenshots and mobile photos, where small text in interfaces would otherwise be barely legible to the engine.

Two additional steps run on the canvas before the blob is exported. First, the canvas is filled with a white background before the image is drawn. This matters because PNG files frequently have transparent backgrounds - especially interface screenshots with transparent or alpha-composited areas. When Tesseract processes an image with transparent regions, those regions appear as black in some configurations, making white text invisible against them. White-filling the background before drawing ensures that any transparent areas become white, which is the standard paper color that Tesseract's models are trained against. Second, the canvas is exported as a PNG file at 0.95 quality via `canvas.toBlob()`. PNG is lossless (the 0.95 parameter applies only to the compression level hint, not to image data fidelity), so no character information is degraded during export.

The result of these two preprocessing steps is a clean, appropriately sized, white-backgrounded PNG blob ready for Tesseract.

## Four Ways VaultBook Finds Images in Your Notes

The OCR pipeline for inline notes - images embedded directly in note content - needs to handle the several ways an image can appear in a VaultBook entry. Notes can contain images in Markdown syntax, in HTML, referenced via attachment paths, or embedded as raw data URL strings. The `ocrInlineImagesForItem()` function handles all four.

### Method 1: Markdown Inline Images

The most common case in VaultBook notes is the standard Markdown image syntax: `![alt text](data:image/png;base64,...)`. When you paste a screenshot into the editor, VaultBook typically stores it using this syntax with the full base64 data URL as the source. The extraction logic uses a regular expression that is carefully designed to handle the real-world variations that appear in this syntax: optional whitespace between the closing bracket and the opening parenthesis, whitespace inside the parentheses, and multiline data URLs where the base64 payload may span multiple lines. Matched data URLs are collected into a `Set` to automatically deduplicate any image that appears more than once in the note.

### Method 2: HTML Image Tags

Notes that contain HTML content - either because they were imported from an HTML source or because the rich text editor produced HTML output - may store images as `<img src="data:image/...">` tags. VaultBook handles this by creating a temporary `div` element, setting its `innerHTML` to the raw note content, and then using `querySelectorAll('img[src^="data:image/"]')` to find all image elements with data URL sources. This DOM-based approach correctly handles the full variety of HTML attribute quoting and whitespace that can appear in real-world HTML content.

### Method 3: Attachment References

Images can also be stored as attachments in the vault's `attachments/` folder and referenced from notes via their relative path - either in Markdown syntax `![alt](attachments/filename)` or in HTML `<img src="attachments/filename">`. These are handled separately from data URL images because they require reading the actual file from disk rather than decoding an inline string. VaultBook collects these attachment paths into a separate `Set` and then, for each path, calls `getAttachment()` to retrieve the file via the File System Access API. The retrieved `File` object is then passed directly to `Tesseract.recognize()` without the preprocessing step, since file-based images are typically already at natural resolution.

### Method 4: Catch-All Regex Scan

For note content that does not match the expected syntactic patterns - unusual embedding, stripped syntax, legacy formats - there is a catch-all phase that runs only when the first two methods have found no data URLs. This phase strips fenced code blocks and HTML `<pre>` and `<code>` elements from the content (to avoid false positives from base64-encoded data in code samples) and then applies a broad regular expression to find any string matching the data URL pattern `data:image\/[a-z0-9.+-]+;base64,[a-z0-9+/=\s]+`. This sweep is bounded to a maximum of 8 images to prevent unbounded processing time on notes with many embedded images.

### The In-Flight Guard

A concurrency guard ensures that OCR for a given item is never run twice simultaneously. The `_inlineOcrInFlight` flag on each item object is set to `true` at the start of `ocrInlineImagesForItem()` and cleared at the end. Any subsequent call while recognition is in progress immediately returns the current `inlineOcrText` value rather than launching a duplicate recognition job. This matters because the function can be triggered from several code paths - the item being scrolled into view, a search being run, the QA panel scoring candidates - and without this guard, the same image could be sent to Tesseract multiple times in parallel, consuming unnecessary memory and CPU.

## The Caching Layer: Every Image Recognized Exactly Once

Running Tesseract on every note every time VaultBook starts would be impractically slow. For a vault with hundreds of notes containing screenshots, the recognition phase would add minutes of startup time. VaultBook solves this with a persistence layer that writes OCR results to the vault folder itself.

When `ocrInlineImagesForItem()` completes for a given note, it calls `setIndexText(`inline-${it.id}`)` to write the recognized text to a file in the vault's `index/` directory. The filename is `att-inline-{id}.txt` where `id` is the note's identifier. This file is stored alongside the vault's other index files on your local device.

On subsequent sessions, when VaultBook renders the note list or a search result, it calls `getIndexText(`inline-${it.id}`)` to check whether a cached result exists before running recognition. If the file is found, its contents are loaded into `it.inlineOcrText` directly - Tesseract is not invoked at all. The note's images were recognized once, the text was written to disk, and every future session simply reads that text file.

For attachment-based OCR (see the next section), the same pattern applies. Attachment OCR results are stored under `att-{hash}.txt` in the index directory, keyed by the file's content hash. If you attach the same PDF to multiple notes, it is only OCR'd once because both notes reference the same attachment hash and both find the same cached index file.

The `reindexAll()` function, accessible through the interface's "Re-index" button and the entry context menu, allows you to rebuild the entire index for all items. Calling `reindexAll(true)` with `force = true` bypasses the cache check and re-runs recognition on all attachments and inline images. This is useful when you want to update OCR results after library improvements or after adding images to existing notes. Calling `reindexAll()` without the force flag is incremental - it skips anything that already has a cached index entry and only processes new or missing items.

## The Deep Index: OCR Inside Every File Type

The inline OCR of pasted screenshots is the most visible part of the system, but the deeper and more powerful part is the OCR of embedded images inside attached files. A Word document might have scanned product specifications embedded as images inside the `.docx` container. A PowerPoint might contain photographs of a whiteboard session. A PDF might be entirely image-based with no selectable text layer. A ZIP archive might contain a folder of photographed receipts. VaultBook reads the text from all of these, completely offline.

The `extractTextFromAttachment()` function handles each file type in sequence, and for every format that can contain embedded images, it additionally runs `ocrZipMediaImages()` or `ocrPdfPages()` to recognize the visual content.

### Images: Direct Recognition

For standalone image files - PNG, JPEG, GIF, BMP, WebP, and TIFF - the file object is passed directly to `Tesseract.recognize(file, 'eng', ocrOpts)`. This branch runs regardless of the Pro/Plus tier, since basic image OCR is considered a core capability rather than an advanced feature. The recognized text is normalized and stored in the index.

### DOCX: Text Extraction Plus Embedded Image OCR

Word documents are processed in two passes. First, `mammoth.extractRawText({ arrayBuffer })` extracts all the typed text from the document's text layer using the locally loaded mammoth.js library. Second, the same array buffer is passed to `ocrZipMediaImages(buf, /^word\/media\//i)`.

The reason for the second pass is that `.docx` files are ZIP archives, and the `word/media/` directory inside the ZIP contains any images embedded in the document - screenshots, scanned forms, photographs, diagrams. `ocrZipMediaImages()` loads the array buffer as a ZIP archive using JSZip, filters the contained files to those matching the media path regex and an image extension regex (`/\.(png|jpe?g|gif|bmp|webp|tiff?)$/i`), and then calls `Tesseract.recognize()` on each image blob, up to the `MAX_EMBED_IMAGES` limit (default 5 per attachment). The recognized text from all embedded images is concatenated with the text-layer extraction and stored together in a single index entry.

This means that a Word document containing a scanned form embedded as an image - something that would be invisible to text-only extraction - is fully indexed. The text you typed in the document and the text in the embedded scan both become searchable.

### XLSX and XLSM: Cells Plus Embedded Spreadsheet Images

Excel spreadsheets are handled similarly. SheetJS reads the cells and converts each sheet to CSV text via `XLSX.utils.sheet_to_csv()`, giving you all the cell values as searchable text. Then `ocrZipMediaImages(buf, /^xl\/media\//i)` processes the `xl/media/` directory inside the XLSX ZIP archive, where Excel stores chart images, embedded photos, and scanned data that has been inserted as pictures into cells. A financial model with a scanned signature or a product spreadsheet with embedded photos will have all of that visual content recognized and indexed.

### PPTX: Slide Text Plus Embedded Presentation Images

PowerPoint files are handled with JSZip, which opens the PPTX archive and reads each `ppt/slides/slideN.xml` file. The XML text is stripped of tags to extract the slide text content. Then `ocrZipMediaImages(buf, /^ppt\/media\//i)` runs against the `ppt/media/` directory, where PowerPoint stores all images inserted into slides. A slide deck with photographs, charts, or embedded screenshots will have both the typed text on each slide and the text within every image recognized and added to the search index.

### PDF: Text Layer Plus Scanned Page OCR

PDF handling uses a two-stage pipeline that addresses the two fundamental types of PDF files: those with a selectable text layer and those that are purely image-based scans.

For the text layer, VaultBook uses `pdfjsLib.getDocument()` to load the PDF and then iterates through every page, calling `page.getTextContent()` to extract the text items. This gives complete, perfectly accurate text for PDFs that were generated from typed documents (which is the majority of PDFs in most workflows - exported reports, generated invoices, typed contracts).

For pages that are scans - images converted to PDF without a text layer, photographed documents, faxes - the `ocrPdfPages()` function handles recognition. It renders each page to a canvas at `scale: 2.0` using pdfjs's render pipeline. This 2x scale factor is the same upscaling principle as the inline image preprocessing: it doubles the pixel dimensions of the page, giving Tesseract larger, clearer character representations to work with. The rendered canvas is exported as a PNG blob and passed to `Tesseract.recognize()`. This process is bounded by `MAX_PDF_PAGES_OCR` (default 5) to keep indexing time reasonable for large multi-page PDFs.

The result of combining text-layer extraction with OCR rendering is that VaultBook can index virtually any PDF, whether it was created by a digital tool or produced by scanning a physical document.

### ZIP Archives: Text Files Plus Inner Image OCR

ZIP archives trigger two forms of content extraction. First, VaultBook iterates through all files inside the ZIP matching a text-file extension list - `.txt`, `.csv`, `.json`, `.yaml`, `.xml`, `.md`, `.log`, `.sql`, `.py`, `.js`, `.ts`, `.css`, `.html`, `.r`, `.sh`, `.bat`, `.ps1` - and reads their text content up to a 200,000-character cap. Second, `ocrZipMediaImages(buf, /^.*$/i)` scans the entire archive for image files matching the standard image extension list and OCRs each one.

A ZIP of a research project folder might contain Markdown notes, CSV data files, Python scripts, and photographs of physical documents. VaultBook indexes all of it - the structured text files and the visual content alike.

### MSG: Email Plus Recursive Deep Indexing

Outlook `.msg` files receive the most sophisticated treatment in the entire pipeline. The MSGReader library extracts the email's subject, sender name, sender email, and body text (preferring the plain-text version, with HTML stripping as a fallback). Attachment names are always indexed even when the attachment bytes are not accessible.

For Pro users, VaultBook goes further: it attempts to extract the raw bytes of each attachment embedded in the MSG file and then calls `extractTextFromAttachment()` recursively on each one. This recursion is bounded to a depth of 2 (so a MSG with an attached ZIP containing PDFs will be indexed, but a MSG with an attached MSG with an attached ZIP will not recurse infinitely). A forwarded email chain in MSG format, with attached PDFs, embedded images, and scanned documents, can be thoroughly indexed in a single attachment operation.

The recursive attachment extraction supports up to 8 nested attachments per MSG (`VB_MSG_MAX_ATTACH`), with a 60,000-character cap per attachment text and a 200,000-character cap on the total MSG output.

## The Normalizer: Fixing What OCR Gets Wrong

Raw Tesseract output is good but not perfect. Two artifacts are particularly common and would degrade search quality if left uncorrected.

The first is spaced-letter OCR output. When Tesseract encounters text with tight letter spacing or unusual fonts, it sometimes produces output like `"F r o n t   E n d"` instead of `"FrontEnd"`. A search for "Frontend" would fail to match this. The `normalizeForIndex()` function detects these spaced-letter runs using a regular expression that identifies sequences of two or more consecutive single-letter words separated by whitespace, and collapses them: `m.replace(/\s+/g, '')`. This converts `"F r o n t   E n d"` back to `"FrontEnd"` before the text is stored.

The second artifact is compound token fragmentation. A filename like `quarterly-report_2025.pdf` might be OCR'd correctly, but searching for just `quarterly` or just `report` or just `2025` would not match the compound string. The normalizer splits tokens on `_`, `-`, and `/` delimiters, adding each component as a separate searchable token. Similarly, file extensions are split out: `030014.mp4` generates both `030014` and `mp4` as tokens. A store code like `S3202` might appear in an OCR'd document alongside the word `Store` - the normalizer ensures both forms are indexed.

The normalizer also globally deduplicates all tokens case-insensitively before writing them to the index file. If the word "Confidential" appears 47 times on a scanned document, it is stored exactly once in the index. This prevents index files from growing to enormous sizes for repetitive documents and keeps the index token set lean and fast to load.

## When OCR Runs: The Four Trigger Points

Understanding when OCR is triggered helps clarify why search results improve over time and how to get the best results when adding new image-heavy content.

### Trigger 1: Opening or Editing a Note

When you expand a note in the main list or open it in the editor, VaultBook checks whether `item.inlineOcrText` is populated. If it is empty and the item has an ID, `ocrInlineImagesForItem(item)` is called as a fire-and-forget Promise (it does not block the editor from opening). Once recognition completes, `renderItems()` is called with `animate: false` so the updated search index is immediately active. This means that the first time you open a note with pasted screenshots, those screenshots are queued for recognition right away.

### Trigger 2: Background Warm-Up During Search

When you type a query in the search bar, VaultBook scores all items and renders the top results. For the Q&A panel, it additionally warms up the top 12 scoring candidates. For each candidate whose `inlineOcrText` is not yet populated, `ocrInlineImagesForItem()` is called as a background Promise. When recognition completes, a 120ms debounced timer re-runs the Q&A query (`runQA({ mirrorMain: false })`) so that newly recognized text can surface results that were not visible in the initial scoring pass. This warm-up is sidebar-only - it does not re-render the main entry list and does not interrupt your interaction with the interface.

### Trigger 3: Scrolling Through the Entry List

During `renderItems()`, each item in the visible list triggers a background chain: `loadDetailsIfNeeded()` and `loadSectionBodiesIfNeeded()` ensure the note bodies are loaded, and then if `inlineOcrText` is empty, `ocrInlineImagesForItem()` is queued. A `scheduleRepaint()` call refreshes the display once recognition completes. This means that as you scroll through your notes, OCR is progressively running on any image-containing entries you scroll past, building up the index organically through normal use.

### Trigger 4: Manual Re-Index

The "Re-index" button and the per-entry context menu option both call `reindexAll()`. This is the explicit batch operation that walks every item in the vault, processes every attachment through `extractTextFromAttachment()`, and runs `ocrInlineImagesForItem()` on every item. Running this after adding a batch of image-heavy attachments, or after importing a large set of notes, ensures that everything is indexed immediately rather than waiting for the progressive background warm-up to cover each item individually. The `force = true` variant re-processes every attachment even if a cached index entry already exists, which is useful when upgrading to a new version with improved OCR logic.

## How OCR Text Integrates into Search Scoring

Once OCR text is stored in `it.inlineOcrText`, it participates in every level of VaultBook's search system.

In the main search (`relevanceScore()`), matching an OCR term adds 2 points to the relevance score. The full scoring hierarchy is: title match (+8), label match (+4), body match (+3), sections match (+2), OCR match (+2), attachment index match (+1). OCR text is positioned at the same priority level as note sections - it is substantive content evidence, weighted more heavily than peripheral file metadata.

In the Q&A panel, OCR text is weighted even more prominently. The QA scoring function assigns: title (+8), labels (+6), inline OCR (+5), body (+4), sections (+3), main attachment text (+2), section attachment text (+1). Here, OCR text ranks third - behind only title and labels, and ahead of the typed body of the note. This reflects the Q&A panel's intent: when you ask a question of your vault and an answer exists in a screenshot or a scanned document, that answer should surface as readily as answers in typed text. The QA warm-up mechanism that runs Tesseract on the top 12 candidates is directly in service of this scoring: it ensures that even items not yet OCR'd get their images processed before the final Q&A ranking is produced.

In the Related Entries engine, `VBrel_scoreItem()` weights inline OCR text at 10 points per token hit. The full Related scoring hierarchy is: title (up to 52 points per token), body (+14), sections (+12), OCR (+10), labels (+8), attachments (+4). OCR text ranks third in the Related engine too, placing visual content recognition in the core relevance calculation rather than treating it as a supplementary signal.

This consistent positioning of OCR text across all three scoring systems reflects a deliberate design decision: text that exists in your notes as images is text. It should be treated with the same relevance weight as text you typed, not discarded or downgraded simply because it was captured visually rather than typed.

## The Supported Format Matrix: What Gets OCR'd and When

To make the coverage concrete, here is the complete matrix of what VaultBook's OCR engine processes and how each format is handled.

**Standalone image attachments** (PNG, JPEG, GIF, BMP, WebP, TIFF) - direct `Tesseract.recognize()` call on the file object. Runs for all users regardless of tier.

**Inline images in notes** (data URL embedded via paste or Markdown, or referenced via attachment path) - the full `ocrInlineImagesForItem()` pipeline with sanitization, upscaling, and white-background normalization before recognition. Runs for all users.

**DOCX** - mammoth text layer extraction plus `ocrZipMediaImages()` on `word/media/*` for embedded images. Pro feature.

**XLSX / XLSM** - SheetJS cell extraction plus `ocrZipMediaImages()` on `xl/media/*` for embedded chart and photo images. Pro feature.

**PPTX** - JSZip slide XML text extraction plus `ocrZipMediaImages()` on `ppt/media/*` for slide images. Pro feature.

**PDF** - pdfjs `getTextContent()` for text-layer PDFs plus `ocrPdfPages()` at 2x scale for scanned pages. Pro feature.

**ZIP archives** - text-like file contents (up to 200,000 characters) plus `ocrZipMediaImages()` on any image in the archive, regardless of folder depth. Pro feature.

**MSG (Outlook email)** - MSGReader subject/from/body extraction plus recursive `extractTextFromAttachment()` on nested attachments, bounded to depth 2 and 8 attachments per MSG. Pro feature.

**Text-like files** (TXT, CSV, JSON, YAML, XML, Markdown, log files, SQL, Python, JavaScript, TypeScript, CSS, HTML, shell scripts) - direct text reading, no OCR needed. Runs for all users.

The distinction between features that run for all users and Pro-gated features maps cleanly to complexity: basic image recognition and inline note scanning are available to every VaultBook user, while deep indexing of complex multi-format office documents, scanned PDFs, and recursive email attachment chains are part of the Pro capability set.

## The Language Question: Why English, and What That Means

VaultBook's OCR calls pass `'eng'` as the language parameter to `Tesseract.recognize()`. This instructs Tesseract to use its English-trained recognition model, which is optimized for Latin-script text with English vocabulary priors. For the majority of knowledge workers writing in English, this is the right default - the model has been trained on millions of English documents and achieves strong accuracy on printed text, sans-serif interfaces, and most printed fonts.

Tesseract's trained data files for other languages are separate downloadable assets rather than being bundled with the core engine. VaultBook ships the English model as part of the local Tesseract.js package. The `ocrOpts` parameter that is passed to every `Tesseract.recognize()` call is drawn from `window.OCR_OPTS`, which is an extension point that can be set to customize recognition behavior.

For technical content, mixed alphanumeric strings like product codes, reference numbers, store identifiers, version strings, and invoice numbers - all common in professional documents - Tesseract's character recognition at the glyph level is language-independent. A product code like `SKU-2847-XL` or a reference number like `INV-2025-0441` will be recognized correctly regardless of the surrounding language, because these are character sequences rather than vocabulary words. The post-processing in `normalizeForIndex()` further helps by splitting compound tokens, ensuring that both the full compound string and its components are independently searchable.

## What the Search Experience Feels Like

The best way to understand VaultBook's OCR system is not as a technical implementation but as a user experience: the experience of never having to remember whether you stored something as typed text or as an image.

Before OCR was integrated into note-taking tools, the workflow required a choice at capture time: do I type this out so it becomes searchable, or do I save it as an image and accept that I will never find it except by scrolling? That friction led to two bad outcomes - either people avoided attaching images (losing the fidelity of the original) or they attached images and then lost them in the vault.

With VaultBook's background OCR, that choice disappears. You paste the screenshot. You attach the scanned PDF. You drag in the Word document with embedded diagrams. The indexing happens behind the scenes, triggered by the first time you view the item or explicitly when you run Re-index. After that, searching for any word visible in any of those images just works.

A screenshot of a software error message is searchable by the exact error code. A photograph of a whiteboard planning session is searchable by every word written on the board. A scanned agreement is searchable by every clause number and every party name. An attached Excel spreadsheet with a photograph of a physical measurement form inserted into a cell is searchable by the handwritten values in that photograph. An Outlook email with a nested PDF attachment that contains a scanned signature page is indexed all the way down.

The experience from the user's perspective is simple: search everything, find everything. The OCR engine is the infrastructure that makes that experience possible, running silently in the background, completely on your device, every time you need it.

## The Performance Design: Bounded, Non-Blocking, and Incremental

OCR is computationally expensive compared to text matching, and VaultBook's design reflects a careful approach to managing that cost without degrading the interactive experience.

Every operation that could be slow is made non-blocking. `ocrInlineImagesForItem()` returns immediately if called while recognition is already in progress for that item. The QA warm-up loop launches all 12 candidate recognition jobs as Promises without awaiting each one - they run in parallel in the background and each triggers a debounced re-render when it completes. The `renderItems()` path launches OCR as a fire-and-forget Promise that calls `scheduleRepaint()` on completion rather than blocking the initial render. The main interface remains interactive throughout.

Processing is bounded at every level. A single note's inline OCR is limited to 8 images via the catch-all path. A single attached file is limited to 5 embedded images and 5 PDF pages for OCR. A single MSG file is limited to 8 nested attachments with a total output cap of 200,000 characters. These limits are designed to keep individual indexing operations within a time budget that does not noticeably affect interface responsiveness, while still covering the practically significant image content in almost every real-world document.

Caching makes the cost one-time rather than recurring. Once an image has been recognized and its text written to the `index/` directory, that image is never sent to Tesseract again in future sessions. The first indexing pass over a vault full of image-heavy attachments may take several minutes on slower hardware. Every subsequent session loads pre-computed text from files in milliseconds. The long-term steady state is a vault where all attachments are fully indexed and every search is just text matching against the cached index.

## The Privacy Dimension: Why Local OCR Matters

For many VaultBook users, OCR is not just a convenience feature - it is a privacy requirement. Consider what cloud OCR actually entails. When an application sends an image to Google Vision API, Amazon Textract, or a similar service, the image - potentially containing a scanned contract, a medical document, a legal notice, financial statements, or a confidential communication - is transmitted to and processed on a remote server operated by a company with its own infrastructure, access policies, and legal obligations.

These companies maintain strong data policies and most offer contractual commitments about data retention. But the fundamental fact remains: the image has left your device. It has been transmitted across a network. It has been processed by software running on hardware you do not control. Depending on the service, it may be retained for logging, quality improvement, or debugging purposes for some period after processing.

VaultBook's offline OCR architecture removes this entire category of concern. A photograph of a signed contract, a screenshot of a private conversation, a scan of a medical diagnosis, a photo of a whiteboard covered in business strategy - all are processed locally. The image never leaves the browser environment. The recognized text never travels to a server. The act of making an image searchable within your vault is entirely contained within your device.

For professionals working under confidentiality obligations - attorneys, therapists, physicians, journalists, financial advisors - this is not a philosophical nicety. It is a practical requirement. Client documents cannot be sent to a cloud processor. Patient images cannot be uploaded to a third-party API. Source communications cannot leave the journalist's device. VaultBook's offline OCR means these professionals can build a fully searchable vault of confidential materials without creating a single cloud dependency or a single regulatory exposure.

## What This Looks Like in Practice

A research vault accumulated over years might contain: handwritten meeting notes photographed on a phone, scanned academic papers with no text layer, PDF exports from a citation manager, PowerPoint decks received from collaborators, Word documents with figures and diagrams embedded as images, and Excel spreadsheets with charts and annotated screenshots inserted into cells.

With VaultBook, the workflow is: attach the files, run Re-index, and search everything. The photographed meeting notes are recognized by Tesseract and their text is stored in the inline OCR index. The scanned PDFs are rendered page by page at 2x scale and OCR'd. The DOCX files yield their typed text through mammoth and their embedded image text through the ZIP media extraction. The PPTX files yield their slide text plus their image content. The XLSX files yield their cell values plus their embedded chart images. Every piece of text that exists anywhere in this corpus, whether typed or photographed or scanned, is in the same unified search index.

A search for a phrase that appeared in a photograph of a whiteboard from two years ago will find that note. A Q&A query asking about a topic that was only discussed in an attached scanned memo will surface the right entry. The Related Entries panel reading your current note will recommend other entries that mention the same concepts, even if those concepts exist only in embedded images.

All of this runs on your device, from a single HTML file, with no installation, no cloud account, and no data ever leaving your vault.

## Comparing to Cloud OCR: An Architecture Summary

The differences between VaultBook's local OCR and the cloud-based OCR used by other applications are worth stating plainly.

Cloud OCR applications send image data to a remote server, receive text results back, and typically store both the original image and the recognized text in cloud storage that is indexed for search. The recognized text is immediately searchable because it lives in a centralized index. Processing speed is fast because the remote server has dedicated hardware. The application developer receives no information about what you are recognizing (with proper privacy-by-design), but the cloud processor sees your image data.

VaultBook processes image data locally using Tesseract.js. Recognition runs in your browser's JavaScript runtime. Results are written to local files in your vault folder. Processing speed depends on your device's CPU - modern hardware handles typical screenshots in under a second. No image data leaves your device. No remote processor handles your visual content. The search index is a set of local text files that are read back at query time.

The architectural trade-off is clear: you get complete privacy and data sovereignty in exchange for processing happening on your own hardware. For note-taking applications, where the images being OCR'd are typically screenshots, pasted photos, and attached documents rather than large-volume batch processing tasks, the local approach is not only viable - it is the better design.

VaultBook's OCR is not offline because cloud OCR is too expensive or too complicated to integrate. It is offline because keeping your images - and everything that can be read from them - on your device is the right design for an application whose central commitment is that your data belongs to you.

Every screenshot you paste into a note. Every scanned document you attach. Every PDF, DOCX, XLSX, PPTX, ZIP, and MSG you add to your vault. All of it becomes fully searchable text, entirely within your browser, with nothing sent anywhere. That is what a genuinely offline OCR engine looks like.

VaultBook - your personal digital vault. Searchable, private, and entirely yours.
