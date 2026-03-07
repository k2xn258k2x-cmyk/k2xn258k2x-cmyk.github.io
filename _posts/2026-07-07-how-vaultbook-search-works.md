---
title: "How VaultBook Search Works: Semantic Q&A, OCR, and Attachment Indexing Explained"
description: "A complete technical walkthrough of every search layer inside VaultBook - from the real-time typeahead dropdown and multi-field relevance scoring to inline image OCR, deep attachment indexing across PDF, PPTX, XLSX, and MSG formats, vote-based reranking, scroll-aware Related Entries, and the AI Suggestions engine. All of it runs offline, in your browser, with zero network requests."
date: 2026-07-07 17:00:00 -0600
cover: /assets/img/feature-screenshot-placeholder.svg
---

Search is the most used feature in any note-taking application. Every other capability - the editor, the organization system, the attachments, the encryption - serves the fundamental goal of getting information into your vault so that it can be retrieved later. If retrieval fails, everything else fails with it. The research that took three hours to organize is only useful if you can find it six months from now. The meeting notes that captured a critical decision are only valuable if they surface when you need them. The clipped documents, scanned receipts, and saved PDFs are only an asset if their content is searchable.

This is where most note-taking applications fall short in ways that become apparent only after months of use. Keyword search that operates only on note titles misses the note whose title you can not remember. Search that ignores attachments makes your file archive invisible. Search that can not read text inside images leaves a whole category of captured information permanently unfindable. And search that requires a cloud index - where your content is sent to a vendor's servers for processing - means the act of making your notes searchable is also the act of exposing them.

VaultBook's search architecture was built to solve all of these problems simultaneously, entirely offline, inside the browser. This article explains exactly how every layer of that system works: the scoring algorithms, the OCR engine, the deep attachment indexing, the vote-based learning system, the scroll-aware related entries engine, and the AI suggestions carousel that anticipates what you want to read before you search for it. Every detail here is drawn directly from VaultBook's source code.

<!--more-->

## The Three Search Surfaces

VaultBook provides three distinct search interfaces, each designed for a different mode of retrieval. Understanding which surface to use - and what each one does under the hood - is the foundation for getting the most from VaultBook's search capabilities.

The **Top Search Bar** is the primary toolbar search. It operates in real time as you type, filtering and ranking the main entry list instantly. It is the fastest path to entries you roughly remember. As you type, a **typeahead dropdown** appears beneath the search box showing matching suggestions across titles, note body text, labels, and attachment file names - so you can navigate directly to a result without finishing the query.

The **Ask a Question (QA) panel** in the sidebar is a separate search interface designed for natural language queries. It runs the same relevance scoring pipeline as the top search but applies a different weight distribution tuned for question-style queries, adds paginated results with per-result voting, and can trigger background OCR and attachment text loading for candidates that have not yet been indexed. QA results in the sidebar are independent of the main entry list display, so you can browse the QA matches without disrupting your current view.

The **Related Entries panel** is not a search interface in the traditional sense - you do not type a query. Instead, it continuously monitors which note you are actively reading and surfaces semantically related entries in the sidebar automatically, using a scroll-aware reading detection system and a separate scoring algorithm optimized for contextual similarity rather than keyword lookup.

All three surfaces operate entirely locally. No content leaves the browser. No queries are sent to a server. No search index is maintained in the cloud. The entire search computation happens inside your browser on your device.

## The Top Search Bar: How Relevance Scoring Works

When you type in the top search bar and VaultBook filters and ranks the entry list, the ordering is not alphabetical and not simply "entries that contain the search term." It is a weighted relevance score computed for every entry in your vault against your query.

The scoring function works by first expanding your query through a process called term expansion, then matching each expanded term against multiple fields of each entry, accumulating a weighted score across fields.

**Term expansion** is how VaultBook makes search tolerant of the way people actually type queries - abbreviated, slightly misspelled, or using shorthand forms. The expansion process strips leading `#` characters so that `#meeting` searches for `meeting`. It handles compound alphanumeric codes: a query like `S3202` is expanded into both `store` and `3202`, so either component matches. It handles partial plurals: `schedulings` expands into `scheduling` and the root stem `schedul`. A query for `stre` is recognized as a likely abbreviation for `store`. Numeric prefixes and suffixes in codes are split so that both the letter and number components match independently. The result is that a slightly imprecise or abbreviated query finds the entries that a precisely typed version of the same query would find.

Once the expanded terms are available, the scoring applies the following field weights per matched term:

- **Title match: +8 points.** The highest weight. A term found anywhere in a note's title contributes 8 points to that note's score per term. Notes whose titles directly match your query float to the top.
- **Label match: +4 points.** Labels - the multi-tag classification system attached to notes - are a strong relevance signal. If you tagged a set of notes with a specific label and your query matches that label, those notes score highly.
- **Body match: +3 points.** The full note body, including rich text content and any markdown that has been rendered, is searched and contributes 3 points per term match.
- **Sections text match: +2 points.** Notes that use the sections accordion system - sub-entries within a note, each with their own title and rich text body - have their section content searched as a separate field contributing 2 points.
- **Inline OCR match: +2 points.** Text extracted from inline images within a note by VaultBook's OCR engine is a separate searchable field weighted at 2 points per match.
- **Attachment match: +1 point.** File names and extracted text content from attached files contribute 1 point per term match.

The result is a ranked list that puts the most relevant entries first: entries where your search terms appear in the title rank above entries where the same terms only appear in the body, which rank above entries where the terms only appear in attached documents. The weighting reflects the natural hierarchy of how people name and organize their notes.

## The Ask a Question Panel: A Tuned Scoring Variant

The QA sidebar uses the same underlying tokenization and field-scanning approach as the top search but applies a different weight distribution that favors different fields. The QA weights are:

- **Title: +8 points** per token (same as top search - titles are always the strongest signal)
- **Labels: +6 points** per token (higher than top search's +4 - labels are weighted more heavily in the QA context, reflecting that natural-language queries about topics are well-served by label matches)
- **Inline OCR text: +5 points** per token (significantly higher than the +2 in the top search - for QA-style queries, text found in embedded images is treated as near-equivalent to body text)
- **Body text: +4 points** per token
- **Sections text: +3 points** per token
- **Main attachment text: +2 points** per token (file names and extracted content from primary attachments)
- **Section attachment text: +1 point** per token (attachments nested inside note sections)

The QA pipeline has one additional behavior that the top search does not: it runs a background warm-up pass on the top 12 scored results. For each of those candidates, if inline OCR has not yet been computed for that note's embedded images, VaultBook starts the OCR process asynchronously while displaying the initial results. When the OCR completes and reveals new text that changes the relevance score, the QA results update automatically - with a 120-millisecond debounce to prevent flickering. The same warm-up applies to attachment text: the top 12 QA candidates each have their attachment text pre-fetched (up to four attachments per note), so subsequent refinements of the same query benefit from the now-loaded attachment content.

The QA results are paginated at six results per page, with previous and next navigation. The total result count is shown alongside the current page position. Results below the fold on page one are accessible through pagination rather than requiring you to scroll through a long list.

A critical design detail: the QA panel uses a separate vote-adjusted score from the base relevance score. The base score determines whether an entry appears in results at all - only entries with a positive base relevance score are included. The vote adjustment affects only the sort order. This means that even a heavily downvoted entry will still appear in results if it is genuinely relevant to your query - you are telling VaultBook "rank this lower for this query" rather than "never show this." Entries with a base score of zero are filtered out entirely, regardless of votes.

## The Typeahead Dropdown: Search as You Type

As you type in the top search bar, before you press Enter, VaultBook populates a dropdown beneath the input with live matching suggestions. This typeahead system is a distinct component from the main search - it does not filter the entry list, it provides clickable shortcut suggestions that let you navigate directly to a specific entry without completing the query.

The typeahead draws from four data types, each labeled in the dropdown:

- **TITLE suggestions** - entries whose title contains the current query text. Clicking a title suggestion puts the full title into the search box and immediately updates the entry list.
- **DETAILS suggestions** - entries whose body text contains the query. For these suggestions, VaultBook shows a two-line context window around the matching portion of the body text rather than showing the full body. This gives you enough context to identify the note without overwhelming the dropdown. Clicking a DETAILS suggestion puts the entry's title into the search bar.
- **LABEL suggestions** - labels in your vault that match the query. Clicking a label suggestion puts the label name into the search bar, effectively filtering by that label.
- **FILE suggestions** - attachment file names that contain the query. This makes it possible to find a note by the name of a file attached to it without knowing which note the file is attached to.

The typeahead shows up to 12 suggestions at a time and deduplicates across matches so you do not see the same result twice. The DETAILS context uses a helper that extracts a two-line window centered on the matching text, giving you enough surrounding content to identify what the note is about without requiring you to open it.

The typeahead also loads attachment text for all entries before building suggestions, ensuring that FILE-type suggestions include the indexed content of attached documents and not just their file names. This pre-loading happens each time the typeahead renders, so the suggestions are always based on the most current indexed state of your vault.

## Search History and Fuzzy Query Correction

VaultBook maintains a persistent search history of up to 200 queries. Every query you type in the top search bar is added to this history after a 650-millisecond debounce - the delay prevents every half-typed query from being recorded. The history is stored locally in your vault and persists across sessions.

The history serves two purposes. First, it is used by the QA panel's query suggestion feature, which can surface past queries relevant to what you are currently looking for. Second, it powers a fuzzy query correction system that can suggest corrected versions of queries that appear to be typos or abbreviated versions of queries you have made before.

The fuzzy correction uses a Levenshtein edit distance algorithm. When you type a query, the system compares it against your history using a combined score: the raw edit distance minus a token overlap bonus (0.6 points per shared token) minus a numeric match bonus (2 points per shared number - important for finding notes by store or task numbers). A history match is suggested as a correction when the combined score is 2.5 or below for short queries, or 4.0 or below for queries longer than ten characters. This threshold is calibrated to suggest corrections for genuine typos while not over-correcting intentional queries that happen to be similar to past ones.

The normalization applied before comparison strips `#` and `_` characters, collapses special characters to spaces, and lowercases everything. This means a past query of `#project-alpha` will match a current query of `project alpha` correctly despite the difference in punctuation and casing.

## The Inline OCR Engine: Reading Text Inside Your Images

One of the most powerful capabilities in VaultBook's search architecture is the ability to find notes by text that appears inside images embedded in those notes. Scanned documents, screenshots, photos of whiteboards, images containing diagrams with labels - all of this visual text becomes searchable through VaultBook's inline OCR engine.

VaultBook uses Tesseract.js, a JavaScript port of the Tesseract OCR engine, which runs entirely inside the browser with no network requests. Tesseract is one of the most widely used open-source OCR engines in existence, and its JavaScript implementation in VaultBook brings the same character recognition capability to the browser environment.

When OCR runs on a note's inline images, the function processes each image embedded in the note's content. The recognized text from each image is combined into a single OCR text cache stored on the note object under `inlineOcrText`. This cache is also persisted to disk under the key `inline-<id>` in VaultBook's index storage, so OCR does not need to re-run on subsequent sessions for notes whose images have already been processed.

The OCR system operates on a warm-up model rather than a blocking model. When you submit a query that returns results, VaultBook immediately scores and displays results using whatever OCR text has already been cached. Then, for the top 12 scored results that do not yet have OCR text, VaultBook starts OCR processing asynchronously in the background. When OCR completes for any of those candidates, if the recognized text changes the relevance ranking, the QA results update automatically. This architecture means the first query result is fast - you do not wait for OCR before seeing results - and subsequent uses of the same query benefit from the now-populated OCR cache.

The OCR warm-up also happens when you open a note: viewing a note that has inline images and has not yet been OCR-processed triggers background OCR, so by the time you search for content you were just reading, the OCR cache is likely already populated.

## Deep Attachment Indexing: Making Your Files Searchable

Attachment indexing is where VaultBook's search architecture separates itself most dramatically from conventional note-taking search. Most applications treat attached files as opaque objects that are searchable by name but not by content. VaultBook indexes the text content of attached files so that a search for a phrase finds the note that has a file attached to it containing that phrase - even if the note body itself contains no mention of the phrase.

The indexing system handles each file type through a dedicated extraction path.

**PDF files** are processed using pdf.js, Mozilla's open-source PDF rendering engine, which runs inside the browser. VaultBook calls `getTextContent()` on each page of the PDF to extract the text layer. This extraction works on PDFs that contain a real text layer - meaning PDFs created from word processors, exported from presentation software, or generated programmatically. Each page's text content is concatenated into a single searchable string and stored in VaultBook's local index.

**XLSX and XLSM spreadsheets** are processed using SheetJS, a JavaScript library for reading spreadsheet formats. VaultBook reads the workbook, iterates through sheets, and extracts all cell values as text. This makes spreadsheet data fully searchable: a note with a budget spreadsheet attached becomes findable by any number, label, or category that appears in the spreadsheet's cells.

**PPTX presentation files** are processed through the underlying ZIP structure of the file format using JSZip. VaultBook identifies slide XML files matching the pattern `ppt/slides/slideN.xml`, parses each slide's XML, and extracts the text content of all text elements. Every bullet point, title, body text block, and text box in every slide of an attached presentation becomes part of the searchable index for the note it is attached to.

**DOCX word processing documents** are handled through mammoth, a JavaScript library for extracting content from Word documents, supplemented by JSZip for processing images embedded in the document. The text content of the document body is extracted and indexed. Images embedded in the document - stored in the `word/media/` directory within the DOCX file's ZIP structure - are passed through the Tesseract OCR engine, so scanned text pasted as images into a Word document is still discoverable.

**ZIP archives** are opened using JSZip and their contents iterated. Text-like inner files - files with plain text, CSV, or similar formats - have their content extracted and indexed. Images found inside ZIP archives are OCR-processed so that a ZIP of scanned documents produces a searchable text index. This makes compressed archives of mixed content fully indexable.

**MSG files** - Microsoft Outlook email messages exported as .msg files - are handled through MSGReader, a JavaScript library for parsing the Outlook MSG format. VaultBook extracts the email subject, sender, and body text. Attachments embedded within the MSG file are then recursively indexed using the same pipeline as direct attachments: a PDF attached to an email attached to a VaultBook note has its text layer extracted and added to the searchable index. This recursive depth means that an email archive attached to a VaultBook note becomes fully searchable, including the content of documents attached to those emails.

**OCR of embedded images in documents** is a cross-cutting capability that applies to multiple document types. Images embedded inside DOCX files (in `word/media/`), images inside XLSX files (in `xl/media/`), images inside ZIP archives, and rendered pages of scanned PDFs - all of these are passed through Tesseract OCR when the document is indexed. This means that a scanned PDF where pages are stored as images rather than as a text layer, which would produce no output from a text-layer extraction approach, is still indexed by reading the rendered pages as images.

The extracted text from all these sources is normalized before storage. The normalization process fixes spaced-letter runs (converting OCR artifacts like `F r o n t   E n d` into `FrontEnd`), splits compound tokens on underscore, hyphen, and slash characters so that `project-alpha` is indexed as both `project-alpha` and its components, and deduplicates tokens so the index is compact. The resulting normalized text is stored in VaultBook's local index directory under per-attachment keys and loaded into memory as `_textMem` on each attachment object when that attachment is needed for search scoring.

## Vote-Based Reranking: Teaching Search What You Care About

The QA search panel includes a reranking system that lets you teach VaultBook which results are most useful for each of your queries. Each result in the QA panel has upvote and downvote arrows - a pattern familiar from comment ranking systems. Clicking the upvote arrow on a result for a given query tells VaultBook that this entry is more relevant to this query than its base score would suggest. Clicking downvote tells VaultBook that this entry is less relevant.

The vote mechanics are deliberately dramatic in their effect on sort order: an upvoted result receives a bonus of 1,000,000 points to its sort score, and a downvoted result receives a penalty of 1,000,000 points. This ensures that voted results always sort above or below unvoted results regardless of their base relevance scores. The intention is that your expressed preferences override the algorithmic ranking, not just nudge it.

The base relevance score - the score computed purely from term frequency and field weights - is preserved separately from the vote-adjusted sort score. The filter that determines whether an entry appears in results at all uses only the base score. This separation means you can downvote an entry into last place without removing it from the results entirely, and you can distinguish between "this entry is genuinely relevant but I prefer to see it later" and "this entry is not relevant."

Votes are stored in `state.userVotes` under a two-level structure: a `search` scope keyed by normalized query string, with each query mapping to a dictionary of entry ID to vote value (+1 or -1). Votes persist across sessions because they are saved as part of the vault's repository state on disk. When you return to a query you have voted on in the past, your previous votes are immediately applied to the sort order. The vote display in the results also shows a summary at the bottom: how many results in the full result set have upvotes and how many have downvotes.

A vote can be applied, removed by clicking the same arrow again, or switched by clicking the opposite arrow. Each vote action shows an undo toast that lets you reverse it immediately. When a vote is applied or undone, the QA results are re-rendered instantly to reflect the new sort order, so the effect of voting is immediately visible.

The query normalization applied before vote storage ensures that minor variations of the same query map to the same vote bucket. Votes made for `project alpha` and `Project Alpha` are stored under the same normalized key and apply to the same result ordering.

## Related Entries: Contextual Discovery While You Read

Related Entries is a fundamentally different kind of search: instead of responding to a query you type, it continuously monitors what you are reading and surfaces thematically connected entries from your vault in the sidebar. The feature operates on a scroll-aware reading detection model that identifies which note is currently at your reading position on the screen.

The reading detection uses a "reading line" placed at 33% of the viewport height - the position where a reader's eyes typically rest when scanning a page. As you scroll through the entry list, an animation-frame-throttled scroll handler watches for changes in which note's accordion is at the reading line. When the note at the reading line changes, the system identifies the new note, scores all other notes in the vault for similarity to it, and updates the Related Entries list in the sidebar.

The similarity scoring in Related Entries uses a different weight structure than both the top search and the QA search. It is optimized for contextual overlap - for finding notes that discuss the same topics, reference the same entities, or contain related concepts - rather than for finding notes that exactly match a query term.

The scoring per matched token in Related Entries is:

- **Body text (main): +14 points** per matching token. Body content is the strongest signal for thematic relatedness - two notes that discuss the same concepts in their bodies are highly related.
- **Sections body: +12 points** per matching token. Section content is treated nearly as highly as main body content.
- **Inline OCR text: +10 points** per matching token. Recognized text from embedded images is a strong contextual signal.
- **Labels: +8 points** per matching token. Shared labels indicate intentional categorization overlap.
- **Attachment text: +4 points** per token hit across all attachments. Document content is a secondary relatedness signal.
- **Title: position-aware scoring.** Title matches receive a base of 40 points plus a positional bonus from 12 down to 0 based on how early in the title the matching token appears. Earlier matches score higher. For numeric tokens (three or more digits), the match is checked as a substring of the title rather than an exact token match, with a base of 65 points plus an early-position bonus, recognizing that identifiers like project numbers are strong relatedness signals even when they appear as components of longer tokens.

Before scoring, the Related Entries algorithm extracts tokens from the currently-viewed note and from any active search queries (both the top search and the QA input contribute tokens). It applies a stopword filter that removes common function words (`a`, `an`, `the`, `and`, `or`, `is`, `are`, etc.) so that relatedness is computed on content-bearing words rather than grammatical connectives that appear in nearly every note.

The Related Entries system also respects explicit user interaction: if you click on the Related Entries list or vote on a related entry, the panel locks to the current note and stops updating as you scroll, so you can interact with the results without them changing underneath you. The pin is released when you move to a different note.

Related Entries also uses the same attachment pre-fetch mechanism as the QA warm-up: for each scored candidate, up to four attachment texts are loaded into memory so that attachment-based relatedness is factored into the scoring.

## VaultBook AI Suggestions: Personalized, Session-Aware Recommendations

The VaultBook AI Suggestions panel - accessible from the sparkle icon in the sidebar - provides proactive recommendations that do not require a search query at all. It operates as a four-page carousel, each page surfacing a different dimension of what is likely to be relevant to you right now.

**Page 1: AI Suggestions** - this page combines two signals. The first is scheduled entries: if you have any notes with a due date in the next 48 hours, the upcoming entry is surfaced at the top of the suggestions with its date. This acts as a lightweight reminder system that surfaces relevant notes at the right time without requiring you to check a calendar.

The second signal on Page 1 is your weekday reading pattern. VaultBook tracks a read log - a timestamped record of which entries you have opened and when. Using the last 28 days of this log, the system builds a weekday histogram: for each day of the week, which entries have you most frequently opened on that day? On Monday, the three entries you most typically read on Mondays are surfaced. On Friday, the three entries you most typically read on Fridays appear. This pattern-based surfacing reflects the recurring rhythms of how you actually use your vault - the weekly reports you check every Monday, the project notes you review every Thursday before a standing meeting, the reference entries that are part of your regular routine.

The tooltip for this feature describes it accurately as estimating intent from your session context and applying probabilistic scoring that learns a personalized relevance distribution over your library. It is not a large language model generating text - it is a behavioral pattern detector that uses your actual access history to predict what you are likely to want.

**Page 2: Recently Read** - up to 100 recently read entries, deduplicated, with timestamps, in reverse chronological order. This is the fastest way to return to something you were reading in a previous session without remembering its title or content.

**Page 3: Recent Files** - recently opened file attachments. If you have been working with a specific document - a PDF, a spreadsheet, a presentation - and want to return to it, this page surfaces the most recently accessed attachments directly, without requiring you to find the note they are attached to.

**Page 4: Recently Used Tools** - the built-in tools you have used most recently. Returning to the File Analyzer, the Kanban Board, the PDF Merge tool, or any other built-in tool is one click from this page.

The suggestions carousel is designed around the principle that a good note-taking system should reduce the cognitive overhead of orientation - the time and mental energy spent figuring out where you were and what you were working on. By surfacing the right entries at the right time based on schedules, patterns, and recent history, VaultBook AI Suggestions reduces the cost of returning to context.

## The Index Storage System: How Attachment Text Is Persisted

The attachment text extracted by the deep indexing system is stored in a local index alongside your vault's main data. Each indexed attachment has a key derived from its attachment key (`attKey`), and the extracted normalized text is stored under that key in an index directory in your vault folder.

When attachment text is needed for search scoring, VaultBook first checks the in-memory `_textMem` field on the attachment object. If that field is already populated from a previous load, the stored text is used immediately without any file system read. If `_textMem` is empty, VaultBook reads the index file for that attachment key from disk and populates `_textMem`. This two-level caching - in-memory for active sessions, disk for persistence across sessions - means that attachment text does not need to be re-extracted every time you search; extraction is a one-time operation per attachment per indexing run, and subsequent searches use the persisted index.

Inline OCR text has its own persistence path: it is stored in the index under `inline-<id>` for each note that has been OCR-processed. The `inlineOcrText` field on the note object is populated from this persisted index at startup for notes that have already been processed. New inline images added to a note trigger OCR on the next warm-up cycle.

A reindex button (the recycling arrows icon) is available in the interface to rebuild the full attachment index. This is useful after adding large numbers of attachments, after changing files outside of VaultBook, or when the index has become inconsistent. The reindex operation processes all attachments through their respective extraction paths - PDF text layer, XLSX cells, PPTX slides, DOCX content, ZIP contents, MSG recursive extraction - and updates the persisted index files.

## Smart Label Suggestions: Search-Informed Organization

An often-overlooked dimension of VaultBook's search capability is how it feeds back into organization. When you are editing a note, VaultBook analyzes the note's content - its title, body text, and existing labels - and suggests relevant labels from your existing label vocabulary. These suggestions are displayed as pastel-styled chips showing the label name and how many other entries carry that label.

The label suggestion system uses the same token-overlap analysis as the relevance scoring system: it identifies which of your existing labels have the most conceptual overlap with the note's content and surface those as suggestions. Applying a suggested label takes one click and immediately makes the note discoverable through label-based filtering. This creates a virtuous cycle where the search system's understanding of your content actively helps you apply the organizational metadata that makes future search more precise.

## QA Actions: From Search Result to New Note

The QA panel is not just a read-only retrieval surface - it includes actions that let you act on what you find without leaving the search context. The most useful of these is the Add-to-Note action: a button on each QA result that pre-fills the note editor's body field with the current query text. This is designed for the specific workflow where a search reveals a gap - you searched for something, found partial coverage, and want to create a new note capturing the remaining insight while the query is still visible.

The confirmation dialog that appears when you vote on a QA result includes educational tips about the voting system that can be disabled once you are familiar with the behavior. The dialog explains that upvoting lifts items you want to see sooner for a given query, and downvoting pushes less relevant items down. It also confirms that consistent votes across sessions improve ordering over time - not just for the current session but for all future searches using similar queries.

The QA panel also coordinates with the main entry list view. When you submit a question in the QA input, the main list updates to show the same result set ranked by the same relevance algorithm, giving you the full entry view alongside the QA panel's compact result list. Background warm-up reruns triggered by OCR or attachment text loading use a flag (`mirrorMain: false`) to update the sidebar results without collapsing the main list view - so the main entry display does not reset while OCR is processing in the background.

## Multi-Tab Views and Per-Tab Search State

VaultBook's multi-tab view system, available in the Pro tier, gives search an additional dimension: each open tab maintains its own independent view state, including its own search query, filter settings, and sort order. You can have one tab showing all entries matching a label filter, another tab showing results for a specific keyword search, and a third tab showing an unfiltered page view - all simultaneously, switching between them without losing any search state.

This architecture is particularly powerful for research and comparison workflows where you want to hold multiple search contexts open at once. The tab system's independence means that a search refinement in one tab has no effect on the others, and the vote-based reranking you apply in one session carries through consistently across all tabs because votes are stored at the vault level, not at the tab level.

## Zero-Network Search: Privacy as Architecture

Every search operation described in this article - the relevance scoring, the OCR processing, the attachment text extraction, the vote storage, the reading pattern analysis, the related entries computation - runs inside the browser with no network requests of any kind. No search query is sent to a server. No attachment content is uploaded for cloud processing. No reading pattern data is transmitted for analysis. No index is maintained on a remote service.

This is not merely a privacy preference - it is a structural property of VaultBook's architecture that has practical consequences for reliability as well as privacy. VaultBook's search works offline, on a flight, in a location with no internet connection, or in an environment where network access is restricted. There is no dependency on a cloud service being available, on an API being responsive, or on a network connection being stable. Search is as fast as your local hardware and as reliable as your device.

For users who work with sensitive content - professional notes, client information, research under development, confidential communications - the zero-network architecture means that the act of searching your vault does not create a metadata trail of what you searched for. Cloud-based search systems log queries as a matter of operational necessity. VaultBook's local search logs nothing because there is nothing to log to.

The attachment content that VaultBook indexes - the spreadsheet figures, the PDF text, the presentation slides, the email bodies in MSG files - is content that would be transmitted to a cloud service for indexing in any server-side search architecture. In VaultBook, that content is read by your browser, processed by libraries running in your browser, and stored in your local index on your device. At no point does any of this content touch a server.

## Why This Search Architecture Is Genuinely Different

The combination of capabilities described in this article - multi-field weighted scoring, inline OCR with background warm-up, deep attachment indexing across seven file formats with embedded-image OCR, vote-based reranking that persists and compounds across sessions, scroll-aware contextual related entries, and session-learned AI suggestions - is not a collection of independent features. It is a unified architecture designed around the principle that a private knowledge base should be fully, deeply searchable without requiring any of that content to leave your device.

Most note-taking applications offer one or two of these capabilities. Cloud-based applications can offer deep attachment indexing because they have server infrastructure to process files, but they sacrifice privacy to do so. Offline-first applications protect privacy but often sacrifice search depth because they lack the indexing infrastructure. VaultBook resolves this tradeoff by running the full indexing pipeline - including OCR and multi-format extraction - inside the browser using JavaScript implementations of the same libraries that server-side indexing systems use.

The result is a search capability that finds what you are looking for across the full surface area of your vault: note bodies, section content, labels, embedded images, attached PDFs, spreadsheets, presentations, Word documents, ZIP archives, and Outlook emails - all locally, all privately, all without any dependency on a network connection or a vendor's cloud infrastructure.

The query you type finds everything relevant to it. The notes you read surface everything related to them. And the patterns of how you use your vault anticipate what you will want next, before you even ask.

VaultBook - your personal digital vault. Private, encrypted, and always under your control.
