---
title: "Looking for a Secure and Simple Note-Taking App? Meet VaultBook"
description: "If you have been using Google Keep for years because of its simplicity but now find yourself worrying about privacy, you are not alone. When your notes include private, professional, or regulated data, you need something offline, private, and built for real confidentiality. VaultBook is the secure, offline-first knowledge system that gives you total control without sacrificing usability."
date: 2025-03-07 17:00:00 -0600
cover: /assets/img/feature-screenshot-placeholder.svg
---

The realization arrives differently for everyone, but it always arrives. For some, it is the moment they type a client's social security number into a cloud-synced note and pause, wondering who else can see this. For others, it is the news article about a data breach at a major productivity platform, followed by the quiet mental inventory of everything they have stored in their own account on that platform. For still others, it is the enterprise security training that explains, in clinical detail, how cloud-stored content can be subpoenaed, how service provider employees can access user data for support purposes, and how the encryption that most cloud applications advertise protects against external attackers but not against the service provider itself.

Whatever the specific trigger, the realization is the same: the note-taking application that felt perfectly adequate for grocery lists and meeting reminders is architecturally incapable of protecting the sensitive content that has gradually accumulated within it. The client notes, the medical observations, the legal references, the financial calculations, the intellectual property, the personal reflections that should never be read by anyone else - all of it sitting in a database administered by a company whose business model depends on processing user data at scale.

The search for an alternative begins. And it quickly becomes frustrating, because the note-taking landscape presents a false choice. On one side are the simple, accessible tools - Google Keep, Apple Notes, Samsung Notes - that prioritize ease of use but store everything in the cloud with minimal privacy controls. On the other side are the powerful, complex tools - Obsidian, Logseq, Joplin - that offer local storage and technical flexibility but impose steep learning curves, require plugin ecosystems for essential functionality, and assume a level of technical comfort that many professionals simply do not have.

What is missing is the middle ground. A tool that is genuinely simple to use - as immediate and approachable as Google Keep - while being genuinely secure by architecture, not by policy. A tool that stores everything locally without requiring the user to configure servers, manage encryption plugins, or understand markdown syntax. A tool that protects sensitive professional content through real cryptographic engineering while presenting an interface that a first-time user can navigate in minutes.

VaultBook is that tool. And it is considerably more powerful than the middle ground description suggests, because the architectural decisions that make it secure also make it capable in ways that neither the simple cloud apps nor the complex local tools can match.

<!--more-->

## Why Cloud Note Apps Cannot Solve the Privacy Problem

The privacy limitations of cloud-connected note-taking applications are not implementation failures. They are structural consequences of the cloud architecture itself. Understanding why these limitations exist - and why no amount of feature updates or policy changes can eliminate them - is essential for any professional evaluating whether their current tool is adequate for their content.

Cloud note-taking applications store user content on servers operated by the service provider. When you create a note in Google Keep, the note is transmitted to Google's cloud infrastructure and stored on Google's servers. When you create a page in Notion, the content resides on Notion's cloud infrastructure. When you create a note in Evernote, the content lives on Evernote's servers. This is true regardless of whether the application also maintains a local cache on your device - the authoritative copy of your content exists on infrastructure you do not control.

This architecture means that the service provider has technical access to your content. They may encrypt it at rest, but the encryption keys are managed by their systems - which means their systems can decrypt it. They may restrict employee access through policies and access controls, but the access is technically possible because the architecture makes it possible. They may promise not to analyze your content for advertising purposes, but the content exists on their infrastructure in a form that their systems can process.

Legal processes add another dimension. A subpoena or court order directed at the service provider can compel the production of user content. The provider may notify you, or they may be legally prohibited from doing so depending on the jurisdiction and the nature of the legal process. Your content may be produced to a requesting party without your knowledge and without your consent, because the content resides on infrastructure where the provider's legal obligations override your privacy preferences.

For a professional whose notes contain privileged attorney-client communications, producing those notes in response to a subpoena directed at a cloud provider could waive the privilege that protects them. For a healthcare professional whose notes contain protected health information, storing that content on a cloud service without a Business Associate Agreement violates HIPAA regardless of whether a breach ever occurs. For a financial professional whose notes contain proprietary client analysis, the existence of that content on third-party infrastructure creates competitive exposure that the professional may not even be aware of.

VaultBook eliminates every one of these structural risks through a single architectural decision: the content never leaves the user's device. The application runs entirely offline, accessing a local folder through the browser's File System Access API. No content is transmitted to any server at any point during any operation. No network request is made during note creation, editing, searching, organizing, or any analytical computation. The application functions identically whether the device is connected to the internet or completely disconnected from all networks.

There is no server to subpoena because there is no server. There is no employee access to restrict because there is no employee with technical access to the content. There is no encryption key to manage on provider infrastructure because no provider infrastructure is involved. The privacy guarantee is architectural - enforced by the engineering of the system rather than by policies that can change, acquisitions that can alter corporate governance, or legal processes that can compel disclosure.

## The Simplicity of Google Keep Meets the Power of a Professional System

The reason Google Keep has hundreds of millions of users is not that it is the most powerful note-taking tool available. It is the most frictionless. Opening Google Keep and creating a note takes approximately the same amount of time as opening a physical notebook and picking up a pen. The interface is clean, unintimidating, and immediately comprehensible. There are no configuration decisions to make, no organizational frameworks to learn, and no feature complexity to navigate before the user can capture their first thought.

This frictionlessness is genuinely valuable, and most privacy-focused alternatives sacrifice it. They replace simplicity with configuration screens, plugin marketplaces, folder structure decisions, and documentation that assumes technical proficiency. The user who just wants to write something down and know it is safe finds themselves learning about YAML front matter, vault initialization procedures, community plugins, and sync conflict resolution before they have captured a single note.

VaultBook preserves the frictionlessness while providing the security. The first-time experience is this: open VaultBook in your browser, connect a local folder, and start writing. The storage tutorial explains the local architecture in plain language. The interface looks clean and inviting. The first note takes seconds to create. The experience feels like Google Keep - immediate, approachable, and free from the anxiety that complex tools produce.

But VaultBook is not Google Keep. It is a complete professional knowledge management system whose simplicity of surface conceals extraordinary depth of capability. The depth reveals itself gradually, as the user's needs grow, and it never requires the user to leave the application or install additional components to access it.

The perception that security and simplicity are opposing qualities - that a more secure tool must necessarily be more complex - is one of the most damaging misconceptions in productivity software. It persists because many local-first and privacy-focused tools have historically been built by and for technically sophisticated users, with interfaces that assume familiarity with file systems, configuration files, markup languages, and plugin ecosystems.

VaultBook rejects this trade-off entirely. The application presents an interface that a first-time user can navigate within minutes. You open VaultBook. You connect a local folder. You create notes. You attach files. You assign labels. You search. The fundamental workflow is as immediate and intuitive as Google Keep, because the design philosophy prioritizes the same quality that makes Google Keep appealing: the absence of friction between the intention to capture a thought and the completion of that capture.

The floating action button provides quick note creation from anywhere in the application. The light theme with CSS custom properties provides a clean, professional aesthetic that supports extended working sessions. Frosted glass effects and smooth transitions add visual refinement. The sidebar plus main content split provides organizational navigation alongside the editing workspace. Responsive design adapts from desktop to tablet to mobile, maintaining full functionality with the sidebar collapsing to a single column at appropriate breakpoints. The storage tutorial for first-time users explains the local folder architecture transparently. The close confirmation dialog prevents accidental loss of unsaved work.

But beneath this accessible surface lies capability that the simple cloud apps cannot approach and that the complex local tools achieve only through extensive plugin configuration.

## The Rich Text Editor: Professional Documentation Without Complexity

Google Keep provides a plain text field. It is fast and simple, but it cannot produce a formatted document, a structured table, a highlighted callout, or a hierarchically organized note. When the professional's content outgrows the limitations of plain text - when they need headings, emphasis, structured lists, comparison tables, or visually emphasized key findings - Google Keep has no answer.

VaultBook's rich text editor provides the full formatting capability that professional documentation requires, accessible through a visual toolbar that requires no knowledge of markdown syntax or configuration.

Bold, italic, underline, and strikethrough handle emphasis and editorial conventions. Ordered and unordered lists support structured content - action items, requirement lists, procedural steps, and reference compilations. Headings from H1 through H6 enable hierarchical document structure within a single entry. The font family selector supports typographic variety. Case transformation handles uppercase, lowercase, title case, and sentence case conversions. Text color and highlight color pickers provide visual emphasis and categorical annotation - highlighting key findings in one color and action items in another.

Tables with size picker and context menu operations handle structured data - comparison matrices, tracking tables, reference grids, and analytical frameworks. Code blocks with language labels and syntax formatting serve technical professionals who document alongside code. Callout blocks with accent bars and title headers provide visual emphasis for critical observations, important warnings, or key decisions that the reader's future self must not overlook. Links and inline images are fully supported. Markdown rendering through the marked.js library supports professionals who prefer plain-text composition with formatted output.

This formatting capability exists within the same clean, approachable interface that makes VaultBook feel simple. The toolbar is visible. The formatting options are intuitive. There is no configuration step, no plugin installation, and no learning curve beyond the basic familiarity with rich text editing that every computer user already possesses.

## Organization That Grows From Simple to Sophisticated

Google Keep offers labels and colors. That is the extent of its organizational system. For ten or twenty notes, labels and colors are sufficient. For a hundred notes, they begin to strain. For a thousand notes accumulated over years of professional work, they are hopelessly inadequate.

VaultBook's organizational architecture scales from the simplest use case to the most complex, using the same intuitive building blocks at every level of sophistication.

Pages provide hierarchical notebook organization with unlimited nesting depth. A user who wants the simplicity of Google Keep can create a few flat pages - Work, Personal, Health, Finance - and place entries directly within them. A user whose organizational needs grow more complex can create nested child pages within each top-level page - Work might gain child pages for individual projects, clients, or functional areas. The nesting depth is unlimited, and the disclosure arrows, drag-and-drop reordering, page context menus, page icons, and color dots provide intuitive navigation and management at every level of complexity.

Activity-based sorting surfaces the pages receiving the most current attention, ensuring that active organizational areas are accessible without deep navigation. The All Pages root view provides a comprehensive overview of the complete organizational structure.

Labels provide the cross-cutting categorical dimension that pages alone cannot supply. Color-coded label pills in the sidebar enable instant filtering by any combination of categories. A professional might label entries by urgency - "critical," "routine," "archived" - while also labeling by domain - "legal," "financial," "personal," "medical." Because labels operate independently of the page hierarchy, the same entry is simultaneously accessible through its page location and through multiple label-based filters.

Inline hashtags within entry content provide an additional organizational layer that emerges naturally from the writing process. These hashtags are used by the Kanban Board tool to auto-generate workflow columns, creating visual pipeline management from the professional's natural writing habits without requiring a separate project management tool.

Favorites provide a dedicated quick-access panel in the sidebar for entries consulted most frequently. The sidebar time tabs organize entries along temporal dimensions - the Recent tab for recently modified entries, the Due tab for entries with approaching deadlines, the Expiring tab for entries nearing their expiry dates.

Pagination with configurable items per page keeps the interface responsive regardless of how large the knowledge base grows. A professional with five thousand entries over a decade of accumulation navigates as efficiently as a new user with five entries.

## Sections: Internal Structure for Complex Entries

Google Keep entries are flat blocks of text. VaultBook entries can contain multiple sections, each with its own title, its own rich text body, and its own independent attachments. Sections collapse and expand as accordions with clip count badges indicating attachment density.

A medical professional's patient note might contain sections for presenting complaint, examination findings, assessment, plan, and follow-up. A legal professional's case file entry might contain sections for facts, legal analysis, strategy, and correspondence. A financial professional's client note might contain sections for current position, recommended actions, risk factors, and meeting notes. Each section is independently navigable - the professional returning to the entry months later can expand just the section they need without scrolling through the entire document.

Entry fields extend beyond title and body. Labels provide multi-select categorical tagging. Due dates support deadline tracking. Expiry dates enable data retention compliance - time-sensitive information can be marked with expiration dates that surface in the sidebar's Expiring tab. Repeat and recurrence settings handle recurring documentation tasks. Created-at and updated-at timestamps provide the temporal record that audit-ready documentation requires. Protected status indicates encrypted entries. The favorite toggle enables quick-access starring.

## Search That Makes Every Note Findable

Google Keep's search queries text content. VaultBook's search queries everything - text content, section content, attachment names, attachment contents, OCR-extracted text from images, and deep-indexed text from attached documents - with intelligent weighted scoring that surfaces the most relevant results first.

The main toolbar search queries across titles, details content, labels, attachment names, and attachment contents. The Ask a Question feature in the QA sidebar provides natural-language query capability with weighted scoring where titles carry a weight of eight, labels carry a weight of six, inline OCR text carries a weight of five, body and details content carry a weight of four, section text carries a weight of three, main attachment names and content carry a weight of two, and section attachment content carries a weight of one.

This weighted scoring ensures that entries primarily about the searched concept surface before entries that merely mention it incidentally. A professional searching for "compliance audit" finds entries titled with that phrase before entries where it appears in the body of an unrelated document attachment.

Paginated results with six entries per page and navigable controls prevent information overload. Attachment text warm-up automatically loads indexed text for the top twelve candidate results. Typeahead search provides real-time dropdown suggestions as the user types. Query suggestions from history surface recurring retrieval patterns.

Vote-based reranking allows the professional to upvote useful results and downvote irrelevant ones. Over time, the search engine learns which entries are most important for the professional's actual work. All votes are stored locally and persist across sessions.

Related Entries surface contextual similarity suggestions when browsing any entry. A professional reading a client note might see related entries suggesting similar cases, relevant reference materials, or prior correspondence records. Each suggestion can be upvoted or downvoted to refine the similarity model, creating a knowledge discovery experience that becomes more accurate with use.

Smart Label Suggestions analyze entry content and suggest relevant labels, presented as pastel-styled chips with frequency counts. The professional writing about a regulatory finding might receive automatic suggestions for labels like "compliance," "audit," and the specific regulation identifier.

Inline OCR processes images within entries automatically, extracting text that is cached per item and indexed for search. A screenshot of a document, a photograph of a whiteboard, or an image of a handwritten note becomes searchable text content. The OCR warm-up feature triggers automatically for top QA search candidates containing unprocessed images.

## Deep File Indexing: Every Document Becomes Searchable

Google Keep does not index attachments. VaultBook indexes the full text of every common professional file format.

PDF text layer extraction via pdf.js handles contracts, reports, specifications, medical forms, legal filings, and academic papers. XLSX and XLSM text extraction via SheetJS handles spreadsheets containing financial data, client records, research datasets, and operational reports. PPTX slide text extraction via JSZip handles presentation materials from meetings, conferences, and briefings. ZIP archive contents indexing handles compressed document collections. MSG parsing extracts subject, sender, body, and deep attachment content from Outlook email files, making preserved correspondence fully searchable.

OCR of embedded images extends indexing to visual content within documents. Images inside ZIP archives are OCR-processed. Rendered pages from scanned PDFs - the kind containing page images rather than text layers - are OCR-processed so that legacy scanned documents become searchable. Images embedded inside DOCX files and XLSX files are OCR-processed. A scanned contract, a specification with embedded diagrams containing text labels, or a decades-old archived document becomes searchable text within the vault.

Background warm-up ensures attachment text for top search results is pre-loaded. File extension bucketing groups attachments by type. The entire document ecosystem - contracts, spreadsheets, presentations, correspondence, scanned records - becomes a unified searchable corpus.

The practical consequence for the professional migrating from Google Keep is transformative. In Google Keep, an attached PDF is an opaque blob - visible as an attachment icon but unsearchable in its content. In VaultBook, every word in every attached PDF, spreadsheet, presentation, email, and image is indexed and discoverable through the same search system that handles note text. The professional who attaches a hundred-page specification to a project entry and later searches for a specific technical term buried on page sixty-seven finds it instantly - because VaultBook has already extracted and indexed every word on every page.

This deep indexing operates entirely locally. No document content is transmitted to any cloud OCR service, any cloud indexing system, or any external text extraction API. The professional's attached contracts, medical records, financial spreadsheets, and legal correspondence remain on the local device throughout every indexing operation. The combination of deep indexing breadth and complete local privacy is a capability that no cloud-based note-taking application can match, because cloud applications must choose between indexing content on their servers (which creates privacy exposure) or not indexing it at all (which limits search functionality).

## Encryption That Protects What Matters Most

VaultBook's per-entry encryption uses AES-256-GCM with PBKDF2 key derivation at one hundred thousand iterations of SHA-256. Each encryption operation generates a random sixteen-byte salt and a twelve-byte initialization vector, ensuring unique key material for every encrypted entry. The encryption is per-entry rather than per-vault, meaning that the professional can encrypt individual entries containing the most sensitive content while leaving less sensitive entries unencrypted for faster access.

There is no master key. There is no recovery mechanism. There is no server holding any part of the key material. The decrypted plaintext exists only in browser memory while the entry is actively viewed or edited and is never written to persistent storage in unencrypted form.

Session password caching prevents repeated password prompts during a single working session. The lock screen provides full-page blur with pointer-event blocking and user-selection prevention when the professional steps away. The combination of per-entry encryption granularity and the complete absence of cloud infrastructure creates a protection architecture that satisfies the requirements of HIPAA for healthcare content, privilege protection for legal content, and confidentiality obligations for financial content.

## The Built-In Tools Suite: A Complete Working Environment

Google Keep provides notes and reminders. VaultBook provides thirteen built-in professional tools that handle the workflow tasks surrounding note-taking, all operating within the vault's local architecture.

The Kanban Board auto-generates from vault labels and inline hashtags, providing visual workflow management directly from note content. The File Analyzer processes CSV and TXT data files locally. The Reader tool manages RSS and Atom feeds with folder organization, bringing information monitoring inside the vault. The Threads tool provides chat-style sequential capture for rapid real-time documentation. The Save URL to Entry tool captures web content as vault entries.

The PDF Merge and Split and PDF Compress tools handle document operations locally. The MP3 Cutter and Joiner handles audio editing. The File Explorer navigates vault attachments by type, entry, or page. The Photo and Video Explorer scans media folders. The Password Generator creates strong credentials locally. The Folder Analyzer provides disk space visibility. The Import from Obsidian tool migrates markdown notes from other systems.

Every tool operates entirely within the local architecture. No content processed by any tool leaves the device.

Google Keep provides reminders. VaultBook provides a Timetable with day and week calendar views, a scrollable twenty-four-hour timeline, disk-backed persistence, and integration with the AI Suggestions carousel. Google Keep provides colored labels. VaultBook provides color-coded hierarchical pages, multidimensional labels, inline hashtags, favorites, and sidebar time tabs with Recent, Due, and Expiring views. Google Keep provides a single flat list of notes. VaultBook provides Multi-Tab Views with multiple simultaneous entry list tabs, each maintaining independent page filter, label filter, search state, and sort configuration. The professional who needs to cross-reference entries from different domains navigates across concurrent views without losing context in any of them.

Google Keep provides no version history. VaultBook creates per-entry snapshots in a local versions directory with a sixty-day retention period, presented in a modal from newest to oldest, stored as standard markdown files that are independently readable, archivable, and producible for audit purposes. Google Keep provides no analytics. VaultBook provides four canvas-rendered charts - Last Fourteen Days Activity, Month Activity, Label Utilization, and Pages Utilization - plus file type breakdown chips and strength metric pills, all computed locally and visible only within the vault.

The comparison is not between two similar tools at different capability levels. It is between a simple capture tool and a comprehensive knowledge management system that happens to be equally simple to start using.

## AI Intelligence That Learns Locally

VaultBook's AI Suggestions feature adapts to the professional's working patterns through entirely local computation. The four-page suggestions carousel surfaces contextually relevant content based on usage patterns. The first page shows suggestions based on upcoming scheduled entries and weekday reading patterns - which entries the professional tends to access on the current day of the week over the preceding four weeks. The second page shows recently read entries with timestamps. The third page shows recently opened files and attachments. The fourth page shows recently used tools.

The intelligence learns the professional's personalized relevance distribution across their library. Over time, the suggestions become increasingly attuned to actual working patterns - entirely within the local repository, never transmitted to any external service. No cloud AI processes the professional's content. No usage data feeds a vendor's machine learning pipeline. The AI understands the professional's knowledge base intimately, and nobody else has access to that understanding.

## Version History, Timetable, and Advanced Navigation

VaultBook's version history creates per-entry snapshots stored in a local versions directory with a sixty-day retention period. The history interface presents versions from newest to oldest in a modal accessible through the clock button on entry cards. Each snapshot is a complete record of the entry at the point of save. The version files are standard markdown, readable with any text editor and independently archivable for audit purposes.

The Timetable provides day and week calendar views with a scrollable twenty-four-hour timeline and disk-backed persistence. Integration with the AI Suggestions carousel surfaces upcoming scheduled events alongside relevant vault content. The Timetable Ticker shows upcoming events in the sidebar. For professionals managing deadlines across multiple active matters, the timetable keeps temporal structure visible.

Multi-Tab Views allow multiple entry list tabs open simultaneously, each maintaining independent page filter, label filter, search state, and sort configuration. The professional cross-referencing entries from different domains navigates freely across concurrent views without losing context.

Advanced Filters provide compound query dimensions - by file type with match-any or match-all logic, by date field and date range. Sort controls give complete control over presentation. The Random Note Spotlight surfaces a randomly selected entry hourly, providing serendipitous rediscovery of older content.

## Analytics: Understanding Your Knowledge Base

VaultBook's analytics provide visibility into the vault's composition and usage patterns. The basic analytics sidebar shows total entry count, entries with attached files, total file count, and total storage size. Strength metric pills provide health indicators with expandable detail views.

The four canvas-rendered analytics charts extend to behavioral and organizational insight. The Last Fourteen Days Activity line chart reveals documentation rhythm. The Month Activity chart extends to three months. The Label Utilization pie chart shows categorical distribution. The Pages Utilization pie chart shows entry distribution across organizational areas. File type breakdown chips show attachment corpus composition. All analytics are computed locally and visible only within the vault.

## The Storage Architecture: Open, Portable, and Yours

VaultBook's storage architecture provides the transparency that trust requires. The vault is a local folder. Repository state lives in a single repository.json file as human-readable JSON. Entry bodies are stored as sidecar markdown files readable with any text editor. Attachments are stored as files in original formats with a JSON manifest in index.txt. Version history snapshots are standard markdown.

Every piece of data is in a standard, open format. The professional can inspect vault contents with a file manager. They can read entries with a text editor. They can back up the vault by copying the folder. They can migrate to a different device by transferring the folder. They can archive to external storage for long-term retention. No proprietary format creates vendor lock-in.

The save system protects content through autosave with dirty flag tracking and debouncing, a concurrent-write guard preventing corruption, a status badge confirming save state, and a close confirmation dialog preventing accidental loss.

For multi-device access, the vault folder can be placed inside a Dropbox, OneDrive, iCloud, or organizational server directory. VaultBook itself never initiates synchronization. The professional controls when, how, and through what channel their data moves.

## The Simple, Secure Tool That Does Everything

The search for a note-taking application that is both simple and secure does not need to end in compromise. VaultBook provides the approachability of Google Keep - an immediate, intuitive interface where capturing a thought takes seconds - with the architectural security of a system designed from the ground up for sensitive professional content. No cloud dependency. No third-party data access. No complex configuration. No plugin ecosystem. No learning curve that requires a weekend of tutorials.

Just a clean, fast, organized, deeply searchable, strongly encrypted, comprehensively equipped knowledge system that runs entirely on your device, stores everything in open formats you control, and protects your most sensitive content with the same cryptographic standard that intelligence agencies use.

For the healthcare professional who needs HIPAA-ready note management. For the attorney who needs privilege-protected case documentation. For the financial professional who needs confidential client records. For the corporate professional who needs secure internal documentation. For the student who needs private study organization. For the researcher who needs protected intellectual property management. For every person whose notes contain content that deserves genuine privacy rather than the contractual approximation of privacy that cloud services provide - VaultBook is the application that proves simplicity and security were never in opposition.

The storage architecture reinforces this with transparency at every level. The vault is a local folder that any file manager can browse. Repository state lives in a single repository.json file as human-readable JSON that any text editor can inspect. Entry bodies are sidecar markdown files. Attachments are stored in their original formats. Version history snapshots are standard markdown. Nothing is hidden behind proprietary encoding. Nothing requires VaultBook to be running to access. The professional who wants to verify exactly what their vault contains, back it up by copying a folder, migrate it by transferring a folder, or archive it to external storage for long-term retention can do all of these things with standard file system operations and no vendor dependency whatsoever.

The save system protects content through autosave with dirty flag tracking and debouncing, a concurrent-write guard preventing data corruption from overlapping save operations, a status badge confirming save state, and a close confirmation dialog preventing accidental loss of unsaved work. For multi-device access, the vault folder can be placed inside a Dropbox, OneDrive, iCloud, or organizational server directory. VaultBook itself never initiates synchronization - the professional controls when, how, and through what channel their data moves between devices.

Your notes deserve real privacy. VaultBook is built to provide it.
