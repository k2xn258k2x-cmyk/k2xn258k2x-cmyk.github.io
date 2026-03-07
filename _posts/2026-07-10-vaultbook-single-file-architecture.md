---
title: "VaultBook's Single-File Architecture: How a HTML File Replaced Five Apps"
description: "A technical deep-dive into how VaultBook's nearly 42,000-line single HTML file delivers a full-featured note-taking system, file manager, task calendar, PDF suite, and productivity toolkit - all running offline in the browser via the File System Access API, with zero network dependencies for core functionality. The architecture behind why VaultBook's entire application logic, UI, and tooling ships in one file."
date: 2026-07-10 17:00:00 -0600
cover: /assets/img/feature-screenshot-placeholder.svg
---

There is a software architecture decision at the center of VaultBook that most users never think about consciously but that shapes everything they experience when they use it. VaultBook is a single HTML file. Not a web application that loads from a server. Not an Electron app bundled with a runtime. Not a Progressive Web App that installs a service worker and caches resources across multiple files. A single HTML file - currently nearly 42,000 lines and approximately 1.3 megabytes - that you open in a browser, connect to a folder on your device, and use as a fully functional private knowledge management system.

This is an unusual architectural choice, and it is not the result of technical naivety. It is a deliberate design decision with specific and meaningful consequences for privacy, portability, durability, and the user relationship with the application. Understanding the single-file architecture - what it enables, how it works technically, and why it produces a better outcome for users than the alternatives - is the key to understanding what VaultBook actually is and why it behaves the way it does.

This article is a technical walkthrough of that architecture: how a single HTML file contains an application that replaces the functionality of five separate tool categories, how it connects to local storage through the browser's File System Access API, what the vault folder structure looks like on disk, and why this approach produces the most private, portable, and durable note-taking environment available.

<!--more-->

## What "Single-File Application" Actually Means

The phrase "single-file application" is worth unpacking precisely, because it means something specific in VaultBook's case that is different from how the term is sometimes used loosely.

VaultBook ships as a folder that contains `VaultBook.html` - the application itself - alongside a `libs/` subdirectory containing the JavaScript libraries that the application depends on at runtime. These libraries include jszip.min.js for ZIP and Office format parsing, xlsx.full.min.js for spreadsheet reading, mammoth.browser.min.js for Word document extraction, pdf.min.js and pdf.worker.min.js for PDF rendering, tesseract.min.js for offline OCR, msgreader.js for Outlook MSG parsing, marked.min.js for Markdown rendering, turndown.js for HTML-to-Markdown conversion, lunr.min.js for search indexing utilities, and DataStream.js as a binary parsing utility.

What makes the application "single-file" in the meaningful sense is that `VaultBook.html` contains the complete application: all HTML structure, all CSS styling, all application logic in JavaScript, all UI templates and tool implementations. Opening `VaultBook.html` in a browser without an internet connection gives you the full application - every feature, every tool, every UI component - operating entirely from local resources. There is no application server to query, no API to reach, no authentication endpoint to contact, no CDN to load scripts from. The application is self-contained on your device.

This is not the architecture of a website that has been made available offline. It is the architecture of a desktop application that happens to run in a browser. The browser is the runtime environment - providing the rendering engine, the JavaScript execution environment, the Web Crypto API, the File System Access API, and the hardware access interfaces - but the application itself is fully local.

## The Five App Categories in One File

The practical consequence of this architecture is that VaultBook's single file delivers capabilities that users of conventional tool stacks distribute across multiple separate applications. Mapping those capabilities onto their conventional equivalents makes the scope of what the single file contains concrete.

**App category 1: Note-taking and knowledge management.** VaultBook's core is a full-featured note-taking environment: a rich text editor with bold, italic, underline, strikethrough, headings H1 through H6, ordered and unordered lists, tables with context menus for row and column operations, code blocks with language labels, callout blocks with accent bars and titles, links, inline images, and Markdown rendering via marked.js. Notes have a full metadata model - titles, labels (multi-select tags), page paths for hierarchical organization in nested notebooks, favorites, due dates, expiry dates with recurrence, and created and updated timestamps. Notes support sections - collapsible sub-accordions within a note, each with its own rich text body and independent file attachments. This is the functionality of a dedicated note-taking application: Notion, Obsidian, Evernote, or Standard Notes, delivered within the single file.

**App category 2: Task management and scheduling.** The Pro tier includes a full Timetable/Calendar system with day and week views, a scrollable 24-hour timeline, and disk-backed persistence through `ttRehydrateFromDisk`. Notes carry due dates and expiry dates with repeat/recurrence support. The AI Suggestions panel surfaces notes with upcoming due dates in the next 48 hours. The sidebar Time Tabs show Recent, Due, and Expiring entries as filtered views. This is the functionality of a task manager - Things, Todoist, or TickTick - built into the same file as the note editor.

**App category 3: File and attachment management.** VaultBook stores file attachments per-note and per-section, indexed through an `index.txt` manifest in the `attachments/` directory. The Pro tier includes a File Explorer tool that browses attachments by type, entry, and page. The Photo and Video Explorer tool scans folders of photos and videos. The Folder Analyzer tool analyzes disk space and file sizes across the vault. File type classification buckets attachments by category - PDF, document, sheet, slide, image, video, text, archive, and other - with visual breakdown chips in the analytics panel. This is the functionality of a file manager and media browser, built into the same file.

**App category 4: PDF and document tools.** VaultBook includes a PDF Merge and Split tool that combines or separates PDF files, a PDF Compress tool for reducing the size of scanned PDFs, and uses pdf.js internally for PDF text extraction and page rendering. These tools open as popup windows from within the application. This is the functionality of a PDF utility suite - comparable to tools like PDF24, Smallpdf, or Adobe Acrobat features - operating entirely locally and offline.

**App category 5: Media, communication, and productivity tools.** The remaining built-in tools cover several more tool categories: an MP3 Cutter and Joiner for trimming silence, cutting clips, and joining audio segments; an Audio Transcriber for offline speech-to-text using Whisper; an RSS and Atom feed Reader with folder organization; a Threads tool for chat-style notes in a centered overlay; a Password Generator for creating and copying strong passwords; a Save URL to Entry tool for creating notes from web pages; a Kanban Board that converts labels and inline hashtags into drag-and-drop columns and cards; and an Import from Obsidian tool for migrating Markdown files. This is the functionality of an audio editor, a podcast transcription tool, an RSS reader like Feedly or Reeder, a messaging-style note format, a password utility, a web clipper, a project management board, and a migration assistant - all in one file.

The count of "five apps" in the article's title is conservative. The honest count is closer to fifteen to twenty discrete tool categories, all running from a single HTML file, all offline, all without requiring installation, account creation, or subscription authentication to function.

## The File System Access API: How the Single File Connects to Storage

The architectural challenge that a single-file application faces immediately is storage. A traditional web application stores data in a cloud database. An Electron app writes to the operating system's file system through Node.js APIs. A browser application without server infrastructure has historically been limited to `localStorage` or `IndexedDB` - storage mechanisms that are opaque to the user, not easily portable, and scoped to the browser origin.

VaultBook's storage architecture is built on the File System Access API - a W3C standard that allows a web application to request access to a specific folder on the user's local file system and read and write files within that folder directly. The API is supported in modern Chromium-based browsers (Chrome, Edge, Brave, Arc, and others) and provides genuine file system access that behaves like reading and writing files in a native application.

The connection flow works as follows. You click the folder icon in VaultBook's toolbar. VaultBook calls `window.showDirectoryPicker({ id: 'vaultbook-root' })` - the File System Access API's directory picker function. The browser presents a native OS file dialog asking you to choose a folder. You select your vault folder - which you can place anywhere on your device: the Desktop, a Documents subfolder, a cloud sync folder, an external drive. The browser then requests read and write permission to that specific folder. Once granted, VaultBook receives a `FileSystemDirectoryHandle` - a reference to the folder that persists across browser sessions through the browser's permission grant mechanism.

With the directory handle in hand, VaultBook obtains handles for the four subdirectories it needs - `attachments/`, `index/`, `versions/` - creating them if they do not exist, via `root.getDirectoryHandle('attachments', { create: true })`. It then opens or creates `repository.json` and `license.json` in the root. The `license.json` is read and verified at connection time to confirm your license. The `repository.json` is read to load the saved vault state.

From that point forward, every save operation writes through the File System Access API handles. When you save a note, VaultBook writes `repository.json` for the metadata and the note's body sidecar file to the `attachments/` directory. When you attach a file, it is written into `attachments/`. When a version snapshot is created, it is written into `versions/`. When attachment text is indexed, it is written into `index/`. All of this is ordinary file writing to your chosen local folder, mediated through the browser's File System Access API.

The directory handle and permission grant persist in the browser. When you close VaultBook and reopen it later, the browser remembers the permission you granted and reconnects to the vault folder without requiring you to go through the picker again - the reconnection happens automatically on startup.

## The Vault Folder: What Lives on Your Disk

Understanding what VaultBook writes to your disk is important for anyone evaluating the architecture from a data ownership, backup, or portability perspective. The vault folder has a clear, documented structure.

**`repository.json`** is the main state file. It contains the full structure of your vault: the page hierarchy (your notebook tree), all entry metadata (titles, labels, page paths, due dates, expiry dates, recurrence, favorites, encryption status, timestamps, attachment manifests, section metadata), and your vote data from search reranking. The design of `repository.json` is deliberately lean: note body text is stripped from the JSON before saving (the key comment in the source reads "Keep repository.json tiny: never persist blobs or extracted text"). The `detailsPlain` field is deleted before serialization. Versions are stored only on disk. Attachment binary data is never inlined. The result is that `repository.json` stays small and fast to read and write even for large vaults.

**`license.json`** is the license file that VaultBook reads to verify your access tier. It lives in the vault root alongside `repository.json`.

**`attachments/`** is the subdirectory where three categories of content live together. First, actual file attachments - every file you attach to a note is stored here, named by a hash of the file's content (providing automatic deduplication: attaching the same file to multiple notes stores only one copy). Second, note body sidecar files: every note's body text is stored as `details-{id}.md` - a Markdown file named by the note's ID. The source comment describes these accurately as "source of truth on cold connect," meaning that when VaultBook reconnects to a vault after a session, it reads the body content from these sidecar files rather than from the JSON. Third, section body sidecars for notes that use the sections accordion system follow the same pattern. An `index.txt` file in this directory serves as the attachment manifest - a JSON index of all attachment metadata including file names, hashes, sizes, and associated note IDs.

**`index/`** is the subdirectory where extracted text from attachments and OCR results are stored. Each indexed attachment has a file keyed by its attachment hash. Each OCR-processed note has a file keyed by `inline-{id}`. These index files are the persistence layer for VaultBook's search system - they allow attachment text and OCR results computed in one session to be available in the next session without re-processing.

**`versions/`** is the subdirectory where version history snapshots are stored. Each time you save a note that has been modified, VaultBook writes a version snapshot file into this directory. Snapshots have a 60-day time-to-live (`VERSION_TTL_MS = 60 * 24 * 60 * 60 * 1000`): the pruning function runs on each save and removes snapshots older than 60 days. Version files are named with the note ID and a timestamp, making them identifiable and sortable. The version history UI reads these files from disk when you open a note's history modal.

Every file in this structure is an ordinary file in an ordinary folder on your device. There is no proprietary database format, no opaque binary blob, no application-specific format that requires VaultBook to read. The `repository.json` is plain JSON. The sidecar files are Markdown. The index files are plain text. The attachment files are the original files you attached. The version snapshots are JSON. You can open any of these files with a text editor, copy them with a file manager, include them in any backup system, and inspect them with any tool that reads standard formats.

This is what data ownership actually means in practice: not a claim in a privacy policy, but a folder on your device containing readable files that you control completely.

## The Save System: Dirty Flag, Autosave, and Concurrent Write Protection

The save architecture in a single-file application without a server backend needs to handle several problems that server-backed applications delegate to the backend: preventing data loss from unsaved changes, preventing corruption from concurrent writes, and keeping the UI responsive during save operations.

VaultBook's save system uses three interlocking mechanisms.

The **dirty flag** is a boolean variable (`dirty`) that is set to `true` whenever any state change occurs that has not yet been persisted to disk. Every mutation - adding a note, editing a note, attaching a file, changing a label, reordering a page - sets `dirty = true`. The dirty flag drives the status indicator in the UI, which shows an unsaved changes indicator when `dirty` is true. A `window.dirty` accessor is defined through `Object.defineProperty` so that the dirty state is accessible for the close confirmation dialog - when you try to close VaultBook with `dirty = true`, you are prompted to save first.

The **autosave system** uses a debounced timer. When a state change sets the dirty flag, a timer starts. If no further changes occur within the debounce window, the autosave fires. If another change occurs before the timer expires, the timer resets. This prevents a burst of rapid edits from triggering multiple sequential writes - only the final state after the burst completes gets written. The autosave timer uses a separate variable (`autosaveTimer`) that is cleared and reset on each change.

The **`__saving` guard** prevents concurrent writes. The save function checks `if (__saving) return` at the top and sets `__saving = true` before beginning the write operation, clearing it in a `finally` block when the write completes. This ensures that if a save is already in progress when another save is triggered (by autosave or by the user clicking the save button), the second save is skipped rather than attempting to write simultaneously with the first. Simultaneous writes to the same `FileSystemFileHandle` can corrupt the file; the guard prevents this.

The save process itself follows a specific order: for each modified note, the body sidecar file is written to `attachments/details-{id}.md` first (this is the "source of truth" for body content on reconnect), then section sidecars are written, then `repository.json` is written with the updated metadata. Writing the sidecar before the JSON means that even if the application is interrupted between the sidecar write and the JSON write, the body content is safe in the sidecar and will be read correctly on the next reconnect.

## The Application Itself: Nearly 42,000 Lines in One File

The scale of what the single file contains is worth making concrete. At nearly 42,000 lines of code, `VaultBook.html` is a substantial application by any measure. The file contains CSS that would fill dozens of stylesheets, JavaScript that would span hundreds of modules, and HTML templates for every UI surface the application presents.

The structure of the file broadly follows the natural HTML document structure: `<head>` containing all CSS in `<style>` blocks and all external library `<script src>` references pointing to the local `libs/` folder, followed by `<body>` containing the application HTML and all application JavaScript in inline `<script>` blocks.

The CSS section alone is thousands of lines, covering the complete design system: CSS custom properties for theming via `--bg`, `--panel`, `--ink`, `--sub`, and related variables; layout rules for the sidebar and main content split; component styles for every UI element including buttons, modals, accordions, tables, code blocks, callouts, charts, and tool-specific layouts; responsive breakpoints at 900px and 720px that collapse the two-column layout to single column for mobile use; frosted glass effects using `backdrop-filter: blur` and `saturate`; and animation keyframes for transitions and the AI Suggestions carousel.

The JavaScript section implements the full application in a single execution scope: state management, the rich text editor and its toolbar, the page hierarchy tree and drag-and-drop, the three search surfaces (top search with typeahead, QA panel with voting, and related entries), the full encryption system using the Web Crypto API, the File System Access API connection and permission management, the save system with dirty flag and autosave, the analytics engine with four canvas-rendered charts, the version history system, the Timetable/Calendar, and all fifteen-plus built-in tools.

The tool implementations are particularly notable for their scope. The Kanban Board is a full drag-and-drop project management board that reads labels and inline hashtags from your notes to automatically populate columns and cards, and writes changes back to VaultBook entries. The RSS Reader is a complete feed reader with folder organization. The Threads tool implements a chat-style message interface with its own message model, attachment support, and conversation threading. The MP3 Cutter and Joiner loads a LAME MP3 encoder from the local `libs/` folder to re-encode trimmed audio. The Audio Transcriber uses Whisper Web, loading a speech-to-text model from local files. Each of these would be a standalone application in a conventional tool stack. In VaultBook, each is a function call that opens a popup window rendered from HTML template strings generated inside the single file.

## The Libs Folder: Local Dependencies, No CDN

A deliberate architectural constraint in VaultBook is that all JavaScript dependencies - every library the application uses - must be available locally. The `libs/` folder contains every third-party library VaultBook depends on. No library is loaded from a CDN. No script tag points to an external URL. Every `<script src>` tag in `VaultBook.html` references a path inside `./libs/`.

This constraint directly enables the zero-network-dependency guarantee for core functionality. If VaultBook loaded Tesseract.js from a CDN, OCR would fail without an internet connection. If it loaded SheetJS from a CDN, spreadsheet indexing would fail without a network. If it loaded pdf.js from Mozilla's servers, PDF text extraction would fail. By bundling every dependency locally, every capability of the application is available in any environment regardless of network availability.

The local libs architecture also eliminates the supply-chain attack vector that CDN-loaded libraries introduce. An application that loads scripts from `cdn.example.com` is trusting that CDN to deliver the correct, unmodified script every time. A CDN compromise - DNS hijacking, cache poisoning, or a breach of the CDN provider - can result in malicious scripts being delivered to users without the application developer's knowledge or consent. VaultBook's local lib loading means the scripts that execute are the scripts that were distributed in the application package, not scripts fetched from a network at runtime.

The full local library list confirms the breadth of capabilities bundled into the application package: `turndown.js` (HTML to Markdown), `marked.min.js` (Markdown to HTML), `lunr.min.js` (full-text search indexing), `jszip.min.js` (ZIP file handling for DOCX, XLSX, PPTX parsing), `xlsx.full.min.js` (spreadsheet reading via SheetJS), `mammoth.browser.min.js` (Word document extraction), `pdf.min.js` and `pdf.worker.min.js` (PDF rendering and text extraction via pdf.js), `DataStream.js` (binary stream parsing), `msgreader.js` (Outlook MSG email parsing), and `tesseract.min.js` (offline OCR via Tesseract). Each of these is a significant library in its own right. Together they give VaultBook's single file the processing capabilities of a document intelligence pipeline.

## Portability: The Vault Goes Where You Go

The single-file architecture produces a portability property that cloud-based applications cannot match: your entire working environment - the application, your vault, and all your data - is a folder on your device that you can move, copy, and access anywhere.

Moving VaultBook to a different computer is a folder copy operation. Drag the vault folder and `VaultBook.html` (with its `libs/` directory) to the new machine, open `VaultBook.html` in a browser, connect to the vault folder through the File System Access API picker, and you are working in the exact same environment as before - same notes, same attachments, same search index, same version history, same labels, same page hierarchy. No migration tool required. No export and import. No account transfer. No waiting for sync to complete. A folder copy is the migration.

Backing up your vault is equally simple. Your vault folder is a directory of ordinary files. Any backup tool - Time Machine, rsync, robocopy, Backblaze, a simple drag-and-drop to an external drive - backs up your vault completely. The backup is a complete, self-sufficient copy: the backed-up vault folder can be connected to VaultBook on any machine and will work identically. There is no dependency on a cloud service being available for the backup to function as a restore point.

Working without an internet connection is the default state for VaultBook, not a special offline mode. The application is always offline-native. There is no sync to wait for, no "working offline" indicator, no risk of sync conflicts when you reconnect. What you write while disconnected is what you have when you reconnect - because nothing was ever going to sync anywhere.

The File System Access API permission model means the vault can live in any location you find appropriate: a local folder for maximum access speed, a folder inside a cloud sync service (Dropbox, iCloud Drive, OneDrive, Google Drive) for cross-device availability through those services' sync mechanisms, or an encrypted volume for additional security. VaultBook is indifferent to where the vault folder lives because it accesses the folder through the operating system's file system regardless of location. The choice of storage location is yours, not VaultBook's.

## Durability: The Application That Outlasts Its Vendor

Software durability - the ability of a software tool to remain functional and accessible over a long time horizon - is an underappreciated property that most users only begin to care about when a tool they depend on is discontinued, acquired, or radically changed.

The history of note-taking applications is not reassuring on this front. Evernote's decline from market leader to survival mode is documented in public. Google has deprecated and shut down note-taking products multiple times. Smaller applications - SimpleNote competitors, specialized knowledge management tools, many of the note-taking apps from the 2010s - have simply disappeared, taking user data with them or making migration to other tools an urgent emergency rather than a planned transition.

VaultBook's single-file architecture provides a durability guarantee that no cloud application can match. `VaultBook.html` is a file. Files persist. A file that works today on Chrome 125 will work - barring deliberate breaking changes in browser standards, which W3C governance processes make extremely unlikely for established APIs - on future browsers for years and decades. The File System Access API, Web Crypto API, and the other browser standards VaultBook depends on are mature, widely implemented standards that browsers have strong backwards compatibility commitments to.

Even in the most pessimistic scenario - VaultBook as a company ceases to exist, the website goes offline, no further updates are released - every user who has `VaultBook.html` on their device continues to have a working application. The file they have is the application. It requires nothing from the vendor's infrastructure to function. The vault folder on their device contains all their data in open formats (JSON, Markdown, the original attachment files). Nothing is locked in a proprietary cloud database that becomes inaccessible if the vendor disappears.

This is the strongest possible durability guarantee for a software tool: the application works forever as long as the browser standard it runs on exists, and the data is in formats readable without the application at all.

## Responsive Design: One File, Every Screen Size

A single HTML file that runs in a browser inherits the responsive design capabilities of the web platform. VaultBook uses CSS media queries to adapt the layout across device sizes. The primary responsive breakpoints are at 900px viewport width - where the two-column sidebar-plus-main-content layout transitions to a stacked single-column layout - and at 720px, where the edit modal and other fixed-width components adjust their widths to fit narrower viewports. Tool-specific layouts inside popup windows have their own responsive rules, typically also at 960px and 900px.

The responsive design means that VaultBook's single file works on a large desktop monitor, a laptop, and a tablet - without requiring separate application builds for different screen sizes, without the complexity of native mobile application distribution, and without the maintenance overhead of keeping multiple platform-specific codebases synchronized. One file accommodates all screen sizes through CSS.

## The Analytics Engine: Vault Intelligence Without Telemetry

Among the capabilities packed into the single file is a full analytics subsystem that gives you a data-driven view of your own vault - without sending any of that data anywhere. The analytics panel, rendered in the sidebar, computes and visualizes four distinct metrics from your local vault state.

The label utilization pie chart shows how your labels are distributed across entries, rendered on a canvas element. This makes it immediately visible which labels are heavily used and which were created but rarely applied - actionable information for refining your organizational taxonomy. The last 14 days activity line chart traces your note creation and modification frequency over the two most recent weeks, giving you a rhythm-of-work view without requiring any external time-tracking tool. The pages utilization pie chart shows which pages in your notebook hierarchy contain the most entries, surfacing where your vault is densest. The month activity chart provides a longer time horizon view of your note-taking patterns.

Below the charts, the analytics panel shows numerical summaries: total entry count, entries with file attachments, total file count, and total storage size. Attachment type breakdown chips classify your attached files by format - PDF, document, sheet, slide, image, video, text, archive - so you can see at a glance what kinds of files make up your attachment archive.

All of this computation happens locally, reading from `state.items` - the in-memory representation of your vault that was loaded from `repository.json` on startup. No data is transmitted. No analytics service is contacted. The insights are yours, derived from your data, displayed inside the same file that manages your vault.

For users who have been told by other productivity tools that "we need to collect usage data to improve your experience" - and have accepted this as an inevitable cost of intelligent features - the VaultBook analytics engine demonstrates the alternative: intelligence that comes from understanding your own data, rather than from surrendering it.

## The Encryption Layer: Security Baked Into the File, Not Added On

The security architecture of a single-file application deserves attention because the "single file" framing can suggest, to some readers, a toy or prototype rather than a production-quality secure tool. VaultBook's encryption is implemented using the Web Crypto API - the same cryptographic subsystem used by your bank's website and by every HTTPS connection your browser makes - with parameters chosen to reflect current security best practice.

Per-entry AES-256-GCM encryption with PBKDF2 key derivation at 100,000 iterations is not "encryption added on top" of the application as a feature checkbox. It is integrated into the save and load flow at the point where note bodies are read from and written to disk. The encrypted payload - containing a random 16-byte salt, a random 12-byte initialization vector, and the ciphertext produced by AES-256-GCM - is what gets written to the `details-{id}.md` sidecar file for encrypted notes. The decrypted plaintext is held in memory in the `_plain` field only for the duration of an active session, never written to any persistent storage layer.

The per-entry encryption model - where each encrypted note has its own password and its own derived key - integrates naturally with the single-file architecture. There is no master vault password to manage, no global decryption step on startup, no unlock screen that gates access to the entire application. The vault opens immediately, unencrypted notes are accessible immediately, and encrypted notes prompt for their individual passwords when you open them. The granularity of this model means you can apply strong encryption selectively - to the most sensitive content - without making the entire vault slower to open or requiring a global credential.

The lock screen feature - a full-page blur overlay that blocks all pointer events and user selection - can be applied as a session-level privacy screen without engaging the entry-level encryption. This is useful in shared physical spaces where you want to prevent casual viewing of vault content without the overhead of encrypting and decrypting entries. The lock screen is a UI layer over the already-running application; entry-level encryption is a cryptographic layer over the stored data. Both mechanisms are present in the same file, serving different aspects of the privacy model.

## What the Single-File Architecture Rules Out

Being precise about the single-file architecture requires being honest about what it is designed to do and what falls outside its scope.

VaultBook's single-file architecture is optimized for private, local-first, offline-capable knowledge management. It is not optimized for real-time collaboration between multiple users editing the same note simultaneously - that use case requires server infrastructure for conflict resolution and synchronization. VaultBook is a personal knowledge vault, not a shared workspace.

The File System Access API that makes local file storage possible is fully supported in Chromium-based browsers (Chrome, Edge, Brave) and in desktop Safari (with slightly different behavior for some permission flows). Firefox currently implements the API with limitations. Users who prefer Firefox will find that the File System Access API features that VaultBook depends on may not behave identically to Chromium-based browsers. The application is best experienced in a Chromium-based browser.

The tools that involve fetching external content - the Save URL to Entry tool, which retrieves a web page to create a note from it, and the Reverse Image Search tool, which performs a reverse image lookup - make network requests when explicitly invoked by the user for that purpose. These are user-initiated actions that are inherently network-dependent because they retrieve external content. They are the exception in an architecture where all core functionality - note editing, searching, encrypting, organizing, file management, and all the built-in tools that operate on local files - runs entirely from local resources.

## The Architecture as a Privacy Statement

The single-file local architecture is not primarily a technical preference - it is a privacy commitment made concrete through engineering. Every alternative architecture that VaultBook could have chosen would have introduced a server into some part of the flow: a sync server for cross-device access, an API server for search indexing, a cloud database for backup, an authentication server for license verification. Each of these servers would represent a point at which user data - note content, file attachments, search queries, usage patterns - would be transmitted to or processed by infrastructure outside the user's device.

VaultBook's architecture eliminates all of those server touchpoints for core functionality. The application runs from a local file. The storage is a local folder. The search index is built and stored locally. The encryption operates in the browser's Web Crypto API. The document processing - OCR, PDF extraction, spreadsheet parsing, email parsing - runs in JavaScript libraries loaded from the local `libs/` folder. License verification reads `license.json` from the vault folder.

Nothing about this architecture requires trust in VaultBook's infrastructure for the privacy of your notes. The privacy guarantee follows from the architecture, not from a vendor's privacy policy.

## Why This Architecture Produces a Better User Experience

The practical user experience consequences of the single-file architecture are felt in ways that become more apparent over time.

**Speed.** There is no network latency in VaultBook's core operations. Opening a note, searching your vault, encrypting content, extracting attachment text - all of this runs at local hardware speed. The application loads when you open the file, not when a server responds to a request. Searches execute in milliseconds because they query an in-memory structure, not a remote API. The responsiveness of a local application is qualitatively different from the responsiveness of a cloud application, and after using VaultBook for a while, returning to a cloud-based note-taking tool makes the latency noticeable in a way that it was not before.

**Reliability.** VaultBook works in a coffee shop without wifi, on an airplane, in a building with blocked network access, and at home when your internet service provider is having problems. Cloud-based tools that "support offline mode" typically support a limited subset of functionality while offline and require sync when reconnecting. VaultBook has no sync to do because it was never online in the first place.

**Trust.** The architecture is auditable. The application is a file you can open in a text editor and read. The libraries are files in a `libs/` folder you can inspect. The vault folder contains ordinary files you can examine with standard tools. There is no hidden server-side processing, no opaque telemetry pipeline, no black-box cloud component. What you see is what runs.

**Ownership.** Your notes, attachments, version history, search index, and vault structure are a folder on your device. They were always a folder on your device. Moving, backing up, or accessing them requires no special tool, no vendor cooperation, and no account. The folder is yours in the simplest possible sense: it is a directory on your local file system.

## Conclusion: The File Is the Application

Nearly 42,000 lines. Approximately 1.3 megabytes. Five app categories - and more - in a single self-contained HTML document that requires no installation, no account, no internet connection, and no trust in anyone's server for its core functionality.

The single-file architecture is the foundation from which every other VaultBook capability derives its character. The zero-network privacy guarantee is possible because the application is local. The durability guarantee is possible because the application is a file. The portability is possible because the vault is a folder. The offline capability is possible because all dependencies are bundled locally.

This is not a compromise architecture that trades capability for simplicity. It is a full-featured knowledge management environment that delivers rich text editing, semantic search, AES-256-GCM encryption, deep attachment indexing, inline OCR, version history, a calendar and task system, a project management board, a PDF suite, an audio editor, an RSS reader, and a dozen more tools - all from one file, all on your device, all under your control.

Open the file. Connect a folder. Start writing. Everything else is already there.

The single-file architecture is also an invitation to inspect. Advanced users and developers who want to understand precisely how any VaultBook feature works can open the file in a text editor and read the implementation. The search scoring weights, the encryption parameters, the save system's concurrent write protection, the attachment indexing pipeline, the analytics computation - all of it is there to read. No minification, no obfuscation, no server-side mystery. The file is the application, and the application is readable.

VaultBook - your personal digital vault. Private, encrypted, and always under your control.
