---
title: "VaultBook's New \"Related Posts\" Makes Secure, Offline Notes Instantly Discoverable"
description: "When your work lives in sensitive documents - medical reports, legal briefs, financial models - you cannot trade privacy for convenience. VaultBook was built for power users who need both. And now, the new Related Posts feature stitches your knowledge together automatically, so answers find you faster without anything ever leaving your device."
date: 2025-11-09 17:00:00 -0600
cover: /assets/img/feature-screenshot-placeholder.svg
---

There is a specific kind of frustration that serious knowledge workers know well. You are looking at a note you wrote three months ago - a well-organized entry with a good summary, solid labels, and several attached files. You know there are other entries in the vault that relate to this one. You remember writing something relevant during a different project thread, or attaching a PDF that covers the same terrain from a different angle. But finding those connections requires you to stop what you are doing, switch to search, construct a query, sift through results, and try to reconstruct a mental map of what exists and where.

The knowledge is there. The vault holds it. But the connections between pieces of knowledge - the tissue that turns a collection of notes into an integrated understanding - have to be rebuilt manually every time you need them.

VaultBook's new Related Posts feature changes this. It surfaces the connections automatically, right where you are working, without any manual query, without any cloud processing, and without anything leaving your device. Open a note and the related entries appear - contextually matched to what you are reading, ranked by relevance to your current organizational context, and navigable without breaking the flow of the work.

For professionals in regulated environments - healthcare, legal, finance, research - who have always had to choose between the discoverability of cloud-connected tools and the privacy of offline-first systems, Related Posts removes that tradeoff. You get the intelligent surfacing of relevant knowledge that cloud tools promise, delivered entirely on your own device, with no internet connection required and no external processing involved.

This article covers what Related Posts does, how it fits into VaultBook's broader architecture, and why the combination of offline security, deep file search, professional organization, and now intelligent connection surfacing makes VaultBook the most capable private knowledge system available for serious professional work.

<!--more-->

## Why Discoverability Has Always Been the Hidden Cost of Privacy

The argument for offline-first, local-only tools is straightforward and well-established: sensitive professional content - patient records, client communications, unpublished research, privileged legal materials, proprietary financial models - should not pass through cloud infrastructure controlled by third parties. The privacy architecture of a truly local tool protects against data breaches at the vendor level, eliminates the exposure created by cloud sync, and ensures that the professional retains full control over who can access their content.

The argument has always been sound. The tradeoff has always been real. Cloud-connected knowledge tools invest heavily in the discovery layer - the suggestion engines, the semantic similarity systems, the automatically generated connections between content - precisely because discoverability is one of the most valuable things a large knowledge base needs. When notes are stored in the cloud, the vendor can run computationally intensive matching algorithms across the full corpus at any time, surface unexpected connections, and deliver a kind of ambient intelligence that makes large archives genuinely navigable.

Offline tools have historically had to concede this dimension. The search is powerful, but you have to know what to search for. The organization is deep, but you have to maintain it actively. The connections between notes exist, but you have to find them yourself.

VaultBook's Related Posts feature is the answer to this tradeoff. All the matching, scoring, and contextual ranking runs locally on your machine - no cloud processing, no internet connection, no transmission of any content to any external system. The intelligence operates entirely on-device, which means the discoverability that cloud tools achieve through privacy compromise is now available through an architecture that never compromises privacy at all.

This is not a minor incremental improvement. For professionals who have accepted reduced discoverability as the necessary cost of working privately, Related Posts changes the calculus entirely.

## What Related Posts Does: The Detail

Related Posts dynamically surfaces other vault entries that share key phrases, labels, or structural context with the entry you are currently viewing. As you open a note, VaultBook reads its title, labels, and content locally, scores similarities against entries in your current page and its hierarchical neighbors, and presents a compact, ranked list of related entries - right where you are working, in a panel that does not require you to leave the current entry.

### Zero-Internet Intelligence

Every component of the Related Posts matching process runs on your device. The title analysis, the label matching, the content similarity scoring, the hierarchical context weighting - none of it involves a network call, an API request, or any transmission of content outside the local vault. Your content never leaves your device during the Related Posts process.

For regulated industries where even the metadata of what you are working on can be sensitive - where a healthcare professional cannot expose which patient records they are cross-referencing, or a legal professional cannot reveal which matter files they are connecting - the zero-internet architecture is not just a privacy preference but a compliance requirement. Related Posts meets that requirement by design.

### Contextual Matching That Understands Your Organization

The Related Posts matching is not a simple keyword frequency count across the entire vault. It uses your organizational structure - your Pages, your Labels, your hierarchical arrangement of the vault - as first-class inputs to the relevance scoring. Entries that are in the same Page or in closely related neighboring pages are weighted toward relevance. Entries that share labels with the current note are elevated in the ranking. The connections that Related Posts surfaces reflect not just textual similarity but organizational proximity - the relationships that your deliberate structure has already encoded.

This means that the organization you have invested in VaultBook pays compound dividends through Related Posts. The more carefully you have structured your vault - the more precisely your Pages reflect the actual architecture of your projects, the more consistently your Labels encode the thematic categories of your work - the more precisely Related Posts can identify genuine connections versus superficially similar but contextually unrelated entries.

The practical effect is an experience that feels genuinely intelligent rather than mechanically approximate. When you are working on a patient case note and Related Posts surfaces lab PDFs, prior visit summaries, and medication logs that mention the same clinical concepts - rather than surfacing unrelated entries that happen to share a common word - the feature is serving you the way an expert colleague with perfect memory of your entire archive would serve you.

### Side-by-Side Navigation Without Breaking Flow

The Related Posts panel presents a compact list of relevant entries and attached files that you can open, compare, or preview without leaving the current note. Keyboard navigation allows movement between connected entries. The panel is designed to complement the flow of working in the vault rather than interrupt it - you do not have to abandon your current context to follow a connection, and you can return to your original entry without retracing your navigation steps.

For professionals doing complex analytical or synthesis work - where the insight comes from holding multiple pieces of related evidence in mind simultaneously - the ability to navigate between connected entries without losing the starting context is not a convenience feature. It is the difference between a workflow that supports deep thinking and one that fragments it.

### Upvote and Downvote Learning: Relevance That Improves Over Time

Related Posts integrates with VaultBook Pro's vote-based learning system. For each pair of entries that Related Posts suggests, you can upvote the connection to confirm it as genuinely relevant or downvote it to dismiss it as spurious. The votes persist in the vault's local repository and influence the relevance scoring for future suggestions - confirmed pairs are favored in future matching, dismissed pairs are deprioritized.

Over time, as the vote history accumulates, the Related Posts suggestions become increasingly precise - calibrated not just to generic textual and structural similarity but to the specific relevance patterns that matter for your particular work. A legal professional whose practice emphasizes a specific area of law trains the system toward the connection patterns of that practice. A clinical researcher whose notes follow specific protocols trains the system toward the connection patterns of that research framework.

The learning is entirely local - the votes are stored in the repository on your device, and the calibration improves without any external training data, without any sharing of your engagement patterns with a vendor, and without any dependency on a cloud-based model that might change or be discontinued.

## The Architecture That Makes Related Posts Possible: VaultBook's Foundation

Related Posts does not exist in isolation. It is the newest layer of an intelligence architecture that VaultBook has been developing across the full feature set - a coherent system of search, discovery, suggestion, and organizational tools that transform a private local vault into an actively intelligent knowledge environment.

### The QA Natural Language Search Foundation

VaultBook's Ask a Question natural language search is the search foundation that Related Posts builds on. QA processes queries across the vault with a weighted relevance model: entry titles carry the highest signal weight, followed by labels, then inline OCR text from embedded images, then body and details content, then section text, and finally attachment content from main and section-level attached files.

Results are paginated at six per page with previous and next navigation. The top twelve candidates for any query trigger background warm-up of attachment text - ensuring that the indexed contents of attached files contribute to result quality for the most relevant candidates.

Where QA search requires you to formulate a query - to articulate what you are looking for in language - Related Posts operates without any query formulation at all. You open a note and the connections appear. The two systems are complementary: QA search for when you know roughly what you are looking for, Related Posts for when you want to discover what connects to what you are already reading.

VaultBook Pro's QA Actions extend the search system with the same vote-based reranking that Related Posts uses - upvoting results that prove genuinely relevant, downvoting results that prove spurious, with votes persisting and influencing future result ranking. The vote-based learning is shared across QA search and Related Posts, so the relevance calibration you build through search engagement also benefits the Related Posts suggestions and vice versa.

### Typeahead Search: Instant Access as You Type

The main search bar delivers real-time typeahead suggestions as you type - searching across entry titles, body content, labels, attachment names, and attachment contents simultaneously. For the professional who remembers a fragment of a phrase from a note written months ago, typeahead search delivers the relevant entries in seconds without requiring navigation through the organizational hierarchy.

Typeahead and QA search together provide the query-driven discovery layer that Related Posts complements with passive, ambient discovery - covering the full spectrum from deliberate search to serendipitous connection surfacing.

### The AI Suggestions Carousel: Contextual Relevance Without Any Query

The VaultBook AI Suggestions carousel - the Sparkle pager - provides a four-page rotating display of contextually relevant vault content based on the professional's own engagement patterns.

The first page surfaces Suggestions: the upcoming scheduled entry if any, plus the top three entries for the current day of the week based on weekday engagement patterns over the preceding four weeks. If specific entries are regularly opened on specific days - the briefing notes that are consistently reviewed before Monday morning meetings, the project status entries that are updated every Friday - VaultBook learns these patterns and surfaces the relevant entries before the professional thinks to search for them.

The second page shows Recently Read entries, up to one hundred deduplicated entries with timestamps, providing immediate return access to content engaged with earlier in the work session. The third page shows recently opened files and attachments, covering the most actively referenced supporting documents. The fourth page shows recently used tools, providing quick re-access to the workflow tools most actively in current use.

Together, the Suggestions carousel, QA search, typeahead search, and Related Posts create a layered discovery architecture that covers every mode of access: proactive surfacing of what the work pattern suggests is needed, ambient connection surfacing from Related Posts as notes are opened, query-driven search when specific content needs to be found, and real-time typeahead for fast fragment-based access.

## Deep File Search: Every Attachment Is Part of the Knowledge Corpus

Related Posts surfaces connections between notes. What makes those connections most valuable is the depth of what the notes contain - and VaultBook's attachment architecture ensures that attached files are not passive storage but active, indexed, searchable components of the knowledge corpus.

### Pro Deep Attachment Indexing

VaultBook Pro's deep attachment indexing extracts searchable text from a comprehensive range of file formats, making the contents of every attached document available to both the QA search system and the Related Posts matching logic.

PDF files with a text layer are fully indexed via pdf.js text extraction. Scanned PDFs without a text layer - the photocopied archival documents, the signed contracts scanned to PDF, the handwritten forms converted to digital files - are indexed through OCR of rendered pages, capturing the content that would otherwise be invisible to search.

XLSX and XLSM spreadsheets are indexed via SheetJS text extraction, making the labels, headers, and text content of data files searchable alongside the notes that reference them. PPTX presentations are indexed via JSZip slide text extraction, so the contents of presentation decks contribute to search results. ZIP archives are indexed for text-based inner files. MSG files - exported Outlook emails - are fully parsed including subject line, sender, and body text, with deep indexing of any files attached within the email.

DOCX files with embedded images are handled with OCR of the embedded visuals, capturing the content of figures, diagrams, and photographs in attached Word documents. XLSX files with embedded images receive the same treatment - chart labels, annotation text, and diagram content inside spreadsheets are captured and indexed. ZIP archives that contain images are processed with OCR of those images.

For healthcare professionals with patient records that include scanned forms and photographed documentation, for legal professionals with matter files that include MSG email archives and annotated PDFs, for financial professionals with models that include complex spreadsheets and presentation decks - the deep indexing means that Related Posts is drawing on the full content of the professional's knowledge base, not just the text of the notes themselves.

### Inline OCR: Images Embedded in Notes Are Searchable Too

Beyond attached files, VaultBook processes inline images embedded directly within entry bodies through the inline OCR pipeline. Screenshots of reference material, whiteboard diagrams photographed after a meeting, handwritten note crops, book page photographs, scan extracts pasted directly into entries - the text content of all these embedded images is automatically extracted, cached per entry, and included in the search index.

For the Related Posts system, this means that an entry whose body includes a pasted screenshot of a clinical form, a photograph of a scanned document, or an image of a whiteboard diagram is indexed on the text content of those images - making the visual content of notes as discoverable as their typed text.

### Basic Attachment Indexing for Plus Users

VaultBook Plus users benefit from basic attachment indexing that covers text extraction from text-based attachments and OCR of attached images. For professionals whose attachment corpus is primarily composed of text-based files and photographs, the Plus indexing provides strong search coverage across the attached file corpus alongside the full note content search.

## Organization That Gives Related Posts Its Context

The precision of Related Posts depends on the quality of the organizational structure it draws on. VaultBook's organizational architecture is designed to make that structure as expressive and as easy to maintain as possible.

### Pages and Nested Sub-Pages: Hierarchy That Mirrors Your Work

VaultBook organizes entries into a hierarchical tree of Pages and nested sub-pages, with full support for unlimited nesting depth, drag-and-drop reordering, contextual right-click menus for rename, delete, and move operations, page icons and color dots for visual navigation, and activity-based sorting.

For a legal practice, this might mean top-level Pages for each client matter, nested sub-pages for each phase of the matter, and further nested pages for specific document types within each phase. For a healthcare professional, top-level Pages for patient categories or clinic areas, with nested sub-pages for specific cases or protocols. For a financial analyst, top-level Pages for coverage areas or client relationships, with nested pages for specific models or reporting cycles.

Related Posts uses this hierarchy as a contextual weighting factor - entries that are organizationally proximate to the current note are elevated in relevance scoring. The investment you make in organizing your vault thoughtfully is returned through more contextually precise Related Posts suggestions.

### Labels and Smart Label Suggestions: Cross-Cutting Discovery Paths

Labels operate independently of the Page hierarchy, providing cross-cutting organizational dimensions that allow a single entry to belong to multiple thematic categories simultaneously. Color-coded label pills in the sidebar enable filtering the entire vault by any label, surfacing every entry in that category regardless of which Page hierarchy it belongs to.

Smart Label Suggestions make the labeling process intelligent: when creating or editing an entry, VaultBook analyzes the content and suggests labels from the existing vocabulary, displayed as pastel-styled suggestion chips with usage counts. For large vaults where the labeling vocabulary has developed organically over years of use, the suggestions guide new entries into the existing categorical structure without requiring manual recall of every label in the system.

For Related Posts, shared labels between entries are a primary relevance signal. Entries that carry the same labels as the current note are strong candidates for suggestion - the shared thematic category encodes a human judgment about their relatedness that the system draws on directly.

### Sections Within Entries: Structure That Feeds Richer Matching

VaultBook's per-entry Sections system allows each entry to contain multiple collapsible sub-sections, each with its own title, rich text body, and attached files. A patient case note might have Sections for the presenting complaint, the examination findings, the treatment plan, and the follow-up schedule. A legal matter note might have Sections for the factual background, the legal issues, the strategy, and the correspondence record. A financial model note might have Sections for the assumptions, the outputs, the sensitivities, and the review history.

The text content of all Sections is indexed and searchable - and it contributes to the Related Posts matching logic. An entry with richly structured Sections provides more surface area for the similarity matching to work with, generating more precise and more contextually appropriate suggestions than a flat, undifferentiated text block.

The Sections accordion UI keeps complex entries navigable - each Section is independently collapsible, so the full depth of a complex research record or case note can be maintained without the entry becoming an overwhelming wall of text. Clip count indicators show at a glance how many attachments each Section carries.

## Retention, Expiry, and Policy-Grade Privacy Controls

For regulated environments where content has defined retention requirements - where certain categories of sensitive data should not be kept beyond a specified period - VaultBook provides per-entry expiry controls that bring retention policy directly into the note-taking workflow.

### Due Dates, Expiry Dates, and the Sidebar Time Tabs

Every VaultBook entry can carry a due date and an expiry date. The sidebar's time tabs surface entries by these temporal dimensions: the Due tab shows entries with upcoming due dates, the Expiring tab shows entries approaching their expiry. For professionals managing content with defined review cycles or mandatory purge requirements, the sidebar time tabs keep the temporal obligations of the knowledge base visible during normal vault work without requiring a separate compliance tracking system.

The sixty-day purge policy - marking sensitive entries with an expiry that triggers cleanup - is directly supported by the entry-level expiry date field and the sidebar Expiring view. Entries that should not persist beyond their useful period can be marked at creation with the appropriate expiry, and the Expiring panel surfaces them for review and disposal when that period approaches.

### Version History: A Complete Audit Trail

VaultBook Pro's version history provides per-entry snapshots stored as time-stamped markdown files in the vault's local versions directory, with a sixty-day retention window. Every time an entry is saved, a snapshot of the previous state is captured, building a complete record of how the entry's content developed over time.

For regulated workflows where the development of a record has evidentiary or compliance significance - the progression of a clinical assessment, the revision history of a legal document, the evolution of a financial analysis as underlying assumptions changed - the version history provides the locally stored, independently auditable record that audit trails require. The snapshots are standard markdown files readable with any text editor, making them independently accessible without requiring VaultBook to be running.

The history interface presents snapshots newest-to-oldest in a modal view, with the ability to view or restore any prior version within the sixty-day window. The retention window itself aligns with the sixty-day purge policy that sensitive content may require.

## Security Architecture: Private by Design

VaultBook's security is architectural - built into the storage model and the data flow of the application rather than added as a feature layer on top of a cloud-connected system.

### Per-Entry AES-256-GCM Encryption

Entries requiring cryptographic protection beyond the vault's local-only architecture can be individually encrypted using AES-256-GCM with PBKDF2 key derivation at 100,000 iterations with SHA-256 hashing. Each encrypted entry uses a randomly generated sixteen-byte salt and a twelve-byte initialization vector, so the ciphertext is unique for every entry even when the same password is used. The password is per-entry rather than global, allowing different sensitivity levels within the vault to use different credentials.

Session password caching avoids repeated re-prompting during an active work session, while ensuring that decrypted content is held only in memory and never written to disk in unencrypted form. The lock screen - a full-page blur overlay with pointer events blocked - provides physical security protection in open office environments or shared workspaces where shoulder-surfing is a concern.

### Local-First Storage: Complete Control

The vault is a local folder on your device, accessed through the browser's File System Access API. The repository is stored as a standard JSON file. Entry body content is stored as markdown sidecar files. Attachments are stored in a standard directory with a JSON manifest index.

Nothing in this architecture requires a network connection, an account credential, or a vendor's continued operation. The vault was readable before VaultBook existed - its files are open, standard formats - and it will remain readable regardless of any change in VaultBook's commercial situation. The backup strategy is duplicating the folder. The migration strategy is moving the folder. The permanence of the knowledge base is not contingent on any external dependency.

For teams that want to work across multiple devices, VaultBook's local folder architecture supports optional sync through any preferred cloud provider - on the team's own terms, with the team's chosen service, covering only the scopes and devices the team designates. VaultBook does not run its own sync infrastructure or transmit any data by default. The sync is entirely within the team's control.

## The Full Built-In Tools Suite: Professional Workflow Without Leaving the Vault

VaultBook Pro's built-in tools suite handles the broader professional workflow needs that arise alongside note-taking, keeping sensitive work within the private vault environment rather than requiring context switches to external applications.

The Kanban Board auto-generates from vault labels and inline hashtags, creating a project management view directly from note content. For teams tracking matter stages, case phases, or project workflow, the Kanban view provides immediate visibility into the distribution of work across stages without any separate tool. The Threads tool provides a chat-style sequential capture interface - a running stream of timestamped entries for real-time documentation of meetings, procedures, or any workflow where sequential capture is more natural than structured entry creation.

The Reader tool manages RSS and Atom feeds with folder organization, bringing publication monitoring inside the vault. The Save URL to Entry tool captures web content as vault entries from URLs, closing the gap between web research and vault integration. The File Analyzer processes CSV and TXT data locally. The MP3 Cutter and Joiner handles audio file editing for recorded session content. The PDF Merge and Split and PDF Compress tools handle document operations locally.

The File Explorer navigates vault attachments by type, entry, or page - providing direct access to the attachment corpus independent of the entry hierarchy. The Photo and Video Explorer scans folders of visual media. The Password Generator creates strong passwords locally. The Folder Analyzer provides disk space and file size visibility. The Import from Obsidian tool migrates existing markdown notes directly into the vault structure.

Every tool operates within the vault's local, private architecture. No content processed by any of the built-in tools is transmitted to any external service.

## The Analytics Dimension: Private Insight Into Your Knowledge Practice

VaultBook's analytics provide genuine intelligence about the composition and usage patterns of your knowledge base - computed entirely from local repository metadata and visible only within your own vault.

VaultBook Plus provides structural metrics in the analytics sidebar: total entry count, entries with attached files, total file count, and total vault storage size. For large professional vaults, these metrics support storage planning and organizational maintenance decisions.

VaultBook Pro extends the analytics to four canvas-rendered charts computed from the vault's local repository data. The Last 14 Days Activity line chart shows the day-by-day documentation rhythm over the preceding two weeks. The Month Activity bar chart extends this to a three-month window. The Label utilization pie chart shows how the thematic label vocabulary distributes across the vault. The Pages utilization pie chart shows how entries distribute across the major organizational areas.

The behavioral patterns these charts surface are visible only to you - computed locally, displayed locally, never transmitted. The intelligence that commercial platforms extract and retain for vendor use simply does not exist in any external form in VaultBook's architecture.

## The Timetable, Multi-Tab Views, and Advanced Filters: Completing the Pro Environment

VaultBook Pro's Timetable and Calendar tools bring scheduling inside the vault - day and week views with a scrollable twenty-four-hour timeline, disk-backed persistence, and integration with the AI Suggestions carousel so upcoming scheduled events surface alongside relevant vault content. The Timetable Ticker in the sidebar keeps upcoming events visible during normal vault work. The Random Note Spotlight - a sidebar widget refreshing hourly - provides serendipitous rediscovery of older entries, occasionally surfacing a connection or insight from earlier in the project that proves newly relevant to a current question.

Multi-Tab Views allow multiple entry list tabs open simultaneously, each maintaining independent page filter, label filter, search state, and sort configuration. For professionals doing synthesis work that draws on multiple organizational areas simultaneously, multi-tab navigation supports the multi-threaded attention that serious synthesis requires.

Advanced Filters add filter dimensions beyond text search: by file type with match-any or match-all logic, by date field and date range covering the last seven days, last thirty days, or any custom range, and in combined states. Filtering for all entries with attached PDFs modified in the last thirty days that carry a specific label is a single compound filter operation - the kind of targeted query that regulatory review workflows or periodic compliance audits require.

## Getting Started With Related Posts

Starting with Related Posts requires no configuration. Open any vault entry and the related entries panel appears automatically, surfacing contextually matched connections based on the entry's content, labels, and organizational position in your page hierarchy.

The first step is simply building the vault - adding your notes, attaching your supporting files, organizing with Pages and Labels, and working normally. Related Posts becomes more valuable as the vault grows, because the corpus it draws on for matching expands with every entry added. The connections surfaced for a vault of a hundred entries are useful. The connections surfaced for a vault of a thousand entries, built up over years of serious professional work, are genuinely indispensable.

The vote feedback - upvoting connections that prove genuinely relevant, downvoting connections that prove spurious - is optional but worthwhile. Each vote refines the relevance model for your specific vault and your specific work patterns. Over time, the Related Posts suggestions become increasingly calibrated to what your work actually considers connected - a personalized intelligence built from your own engagement, running entirely on your own device.

## The Bottom Line: Discovery Without Compromise

The argument for offline knowledge management has always been sound but has always come with a cost - the cost of reduced discoverability, of connections that have to be found manually rather than surfaced automatically, of a vault that is private but passive rather than active.

Related Posts changes this. The discoverability that cloud tools achieve through privacy compromise is now available through an architecture that never compromises privacy. The intelligent connection surfacing that makes large knowledge bases genuinely navigable is now a feature of VaultBook's fully local, fully offline, fully encrypted vault.

Combined with the QA natural language search, the AI Suggestions carousel, the typeahead search, the deep attachment indexing, the hierarchical organizational architecture, the per-entry encryption, the version history, the retention controls, and the complete built-in tools suite - Related Posts completes a professional knowledge system that delivers everything serious knowledge workers need without asking them to give up the privacy their work requires.

Your content stays local. Your structure scales. Your answers surface when - and only when - you need them.
