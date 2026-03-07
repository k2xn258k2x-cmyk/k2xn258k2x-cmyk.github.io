---
title: "How a Privacy Researcher Organizes 10 Years of Notes in VaultBook"
description: "A privacy researcher with a decade of accumulated notes - source communications, corporate surveillance dossiers, government document leaks, interview transcripts, and annotated regulatory filings - needed a vault that could match the sensitivity of the work itself. This is how that vault is built."
date: 2026-07-21 17:00:00 -0600
cover: /assets/img/feature-screenshot-placeholder.svg
---

There is a particular irony that lives inside the digital workflows of people who study privacy for a living. They spend their professional lives documenting how corporations harvest behavioral data, mapping the surveillance architectures built into everyday software, and explaining to judges, legislators, and the public why the tools people trust with their most sensitive communications are often deeply untrustworthy. And then they go back to their desks and take their research notes in Evernote.

Dr. Nadia Okonkwo knows this irony intimately. She is an independent privacy researcher affiliated with a digital rights organization, and for most of the last decade she studied corporate data collection practices, government access to private communications, biometric surveillance systems, and the regulatory frameworks - or conspicuous absence of them - that govern how technology companies use what they know about you. She has testified before legislative committees, contributed to regulatory comment filings, published peer-reviewed analysis, and collaborated with journalists on investigations that required the careful protection of source identities.

She has also, for most of that decade, kept her research notes in a succession of tools that she knew were architecturally incompatible with the sensitivity of her work. The irony was not lost on her. "I was writing detailed notes about how a major platform harvested user behavioral data," she says, "and saving those notes in the cloud product of a company whose business model is also behavioral data. I understood exactly what I was doing. I just hadn't found anything better yet."

What she has now is a VaultBook vault that holds ten years of accumulated research - migrated, consolidated, and organized - running entirely offline on her device, making zero background network requests, with the source communications, unpublished analysis, and sensitive source-adjacent documents that make up a decade of privacy research stored in AES-256-GCM encrypted entries that no third-party server has ever seen.

This is how that vault is structured, how it works, and what a decade of privacy research looks like organized inside a single local HTML file.

<!--more-->

## The Migration: Arriving With a Decade of Debris

Before understanding how the vault is organized now, it helps to understand what Dr. Okonkwo arrived with. Over ten years, her research notes had accumulated in four different applications, none of which talked to each other and each of which exported in a different format. There were approximately 2,400 notes in Evernote from 2015 to 2019, exported as ENEXfiles and then partially converted to Markdown. There were several hundred notes in Standard Notes from 2019 to 2023, which at least exported cleanly as Markdown. There were notes in Obsidian from 2023 to 2024, organized into a local vault with its own link structure. And there were several hundred text files and PDFs sitting in a folder hierarchy on her hard drive that had never been in any note-taking application at all.

The migration into VaultBook used the Import from Obsidian tool as the primary entry point for the Markdown-format material. The workflow was straightforward: she dropped her Obsidian vault's Markdown files directly into the Import from Obsidian tool, which parsed each `.md` file and created a corresponding VaultBook entry preserving the content, headings, and inline formatting. The Obsidian notes - approximately 600 of them - imported in a single session. The Standard Notes export, which was also Markdown, went through the same pipeline.

The Evernote material required more manual work - the ENEX conversion to Markdown had left some formatting artifacts - but the bulk of it came in cleanly. The physical folder of text files and PDFs became attachments to organized entries, processed through VaultBook's deep attachment indexing so their contents became immediately searchable.

The result, after roughly three weeks of migration and organization work, was a unified vault containing everything. A single search bar that could reach a 2016 note about an early facial recognition patent filing, a 2020 interview transcript, a 2023 regulatory analysis PDF, and a 2025 source communication - all from the same interface, without switching applications, and all on her local device.

## The Page Architecture: Research as a Living Map

The organizational spine of Dr. Okonkwo's vault is a page hierarchy that maps the structure of her research practice. Pages in VaultBook function as hierarchical notebooks - infinitely nestable, drag-and-drop reorderable, each with its own color coding and icon to make navigation visually distinct. Hers are organized into four top-level research domains and a set of operational pages.

**Corporate Surveillance** is the largest domain and her longest-running research area. Its sub-pages include: Ad-Tech Ecosystem (covering data brokers, programmatic advertising infrastructure, identity resolution networks), Platform Behavioral Data (per-company investigations into how major platforms collect and monetize behavioral signals), Biometric Collection (facial recognition, voice recognition, gait analysis, and the companies building and deploying those systems), Location Data Markets (the ecosystem of SDKs, data brokers, and purchase networks that construct movement histories from mobile devices), and the catch-all Corporate Documents that holds the annotated filings, earnings calls, and internal documents obtained through regulatory proceedings.

**Government Access** covers the surveillance infrastructure on the state side of the ledger: Warrantless Access Programs (the legal frameworks and technical mechanisms through which governments access private communications without judicial oversight), International Frameworks (cross-border data access agreements, MLAT treaties, the legal architecture of international surveillance cooperation), Domestic Law Enforcement (the fusion center ecosystem, geofence warrant practices, cell-site simulator deployment), and the extraordinarily sensitive sub-page she simply labels Sources and Correspondence, which contains every note that touches on source relationships and is the only part of the vault where every single entry carries per-entry encryption.

**Regulatory and Legal** holds her analysis of the regulatory landscape: GDPR Enforcement Actions (annotated decisions, fine calculations, behavioral change analysis), US State Privacy Laws (the patchwork of state-level frameworks and their comparative coverage), Federal Proposals (bill text, markup analysis, industry comment letters), and Litigation Tracker (ongoing cases, court filings, decision summaries).

**Active Projects** is the operational layer: the research projects in various stages of active work, each with its own sub-page, containing the working notes, draft analysis, and literature that feed the current output. When a project concludes - whether as a published paper, a regulatory comment, or a piece of contributed journalism - it moves out of Active Projects and into the relevant domain archive.

The operational pages outside the research domains include Meeting Notes (every call, conference, and recorded conversation), Conference and Event Notes (from the academic and policy conferences where research circulates), and a page she calls The Pile - the landing zone where new information goes before it has been categorized and placed.

"The Pile is essential," she notes. "The instinct in knowledge management is to organize everything immediately. But in research, you often don't know yet where something belongs. The Pile lets me capture without organizing, and then I do a weekly pass to move things where they actually go."

## Encryption: The Architecture of Source Protection

For the Sources and Correspondence sub-page, encryption is not optional. Every single entry that contains a source communication, a source-adjacent document, a note about a source's identity or situation, or analysis derived from confidential information carries per-entry AES-256-GCM encryption with a unique password.

The per-entry encryption model - as opposed to a single password that unlocks the whole vault - is precisely what this use case requires. Different sources have different sensitivity levels. A communication from a corporate whistleblower at a company currently under regulatory investigation requires a higher protection tier than a background conversation with an academic whose expertise informs a published paper. Different entries can carry different passwords, and none of those passwords needs to be the same as any other. If one entry's password were somehow compromised, the others would remain protected.

In practice, the session password caching means the workflow is not cumbersome. When Dr. Okonkwo opens VaultBook and authenticates to her vault folder, she enters the passwords for the encrypted entries she intends to work with during that session. Those passwords are cached in the browser's memory for the duration of the session and not written to any file. She can open, read, and edit those entries throughout the work session without re-prompting. When the session ends and the browser closes, the session cache is gone.

The encrypted entries store only ciphertext in the vault files. The body of the note - the actual communication content, the source's identifying information, the analysis of what the source revealed - exists as plaintext only in browser memory after decryption, and only while the entry is open. It is never written to disk in plaintext form. The vault folder on her hard drive, if copied by someone without the per-entry passwords, contains PBKDF2-derived AES-256-GCM ciphertext. Without the passwords, there is nothing to read.

The lock screen feature adds another layer for situations where she steps away from her desk mid-session: the full-page blur overlay can be triggered to cover the interface completely, blocking both visual access and pointer interaction, while keeping the session alive so she does not need to re-authenticate when she returns.

"The encryption model matches how I actually think about sources," she explains. "It is not one big secret. It is a set of discrete relationships, each with its own confidentiality level. The per-entry model reflects that reality."

## Research Materials: The Deep Index

Over ten years of research, Dr. Okonkwo has accumulated a substantial library of attached documents: regulatory decisions, enforcement actions, academic papers, earnings call transcripts, congressional hearing records, court filings, technical reports, corporate transparency reports, and the occasional internal document obtained through legal process or provided by sources. These are not decorative attachments - they are the evidentiary basis of the research, the primary sources that analysis builds on, and the reference material that needs to be findable years after it was first attached.

VaultBook's deep attachment indexing is what makes this library searchable rather than merely stored.

PDF files - which represent the majority of the regulatory and legal documents - are indexed in two passes. The text layer is extracted via pdfjs, giving complete, accurate text for any PDF that was generated digitally (the majority of regulatory filings, court documents, and published reports). For PDFs that are scans - photographed documents, faxed materials, older filings that predate digital-first publishing - the OCR pipeline renders each page at 2x scale and runs Tesseract recognition, making even aged, slightly degraded document scans fully searchable.

Word documents, which show up frequently as shared working documents and draft analysis from collaborators, are indexed through mammoth's text layer extraction plus OCR of any embedded images, which catches diagrams, screenshots of interfaces, and scanned signatures that have been inserted into the document body.

Excel files - data sets, fine calculation tables, compliance tracking spreadsheets - are indexed through SheetJS cell extraction, making every cell value searchable. A spreadsheet tracking enforcement action outcomes across five years of GDPR decisions is queryable by any value in any cell.

MSG files, Outlook emails that she has archived from regulatory proceedings, are indexed via MSGReader with recursive extraction of nested attachments. A regulatory email chain with an attached PDF response that itself contains embedded images is indexed all the way down.

The Re-index button rebuilds the full attachment index across the entire vault - she runs it after importing a batch of new documents, and it runs through every attachment that does not yet have a cached index entry, extracting and storing text for each one. Subsequent searches immediately reach the newly indexed content.

"I filed a regulatory comment last year that drew on about forty documents spread across a decade of notes," she says. "The search found all of them. Some I had forgotten I had. The indexed attachment text surfaced them from searches I didn't know would find them."

## Screenshots as Evidence: OCR in Research Practice

Privacy research involves a particular category of primary source that text-heavy tools handle poorly: screenshots. Screenshots of advertising interfaces, data broker search results, app permission prompts, platform privacy settings, surveillance product marketing pages, and the behavioral observation systems visible in corporate demos - these are often the most direct visual evidence of the practices being studied, and they appear throughout a decade of research notes.

In a note-taking tool without OCR, screenshots are dead weight from a search perspective. You know you have a screenshot of a data broker's search interface showing what it can reveal about a person from a phone number alone, but searching for "phone number" or "data broker" will not find that screenshot unless you manually transcribed the text in the image. The screenshot sits in the vault as a visual record with no search footprint.

With VaultBook's inline OCR - running Tesseract locally on every inline image in every note - the text visible in every screenshot becomes part of the search index. A screenshot of a facial recognition vendor's sales presentation showing claimed accuracy rates across demographic groups becomes searchable by those specific numbers. A screenshot of an advertising platform's targeting interface showing the categories available for behavioral targeting is searchable by every targeting category visible on screen. A photo of a whiteboard from a conference session showing the architecture of a data pipeline is searchable by every label written on the whiteboard.

The preprocessing pipeline normalizes each image - upscaling small screenshots, filling transparent backgrounds with white, exporting at consistent resolution - before Tesseract runs recognition. The recognized text is stored in the vault's index directory as a cached file for that entry. In future sessions, the cached text loads instantly without re-running OCR.

"I have a note from 2018 with a screenshot of an advertising platform's targeting options," Dr. Okonkwo says. "There are maybe two hundred targeting categories visible in the screenshot. I can search for any one of them and find that note. Without OCR, that screenshot is invisible to search. With OCR, it's part of the corpus."

## The Search Experience: Reaching Across a Decade

The search experience in a vault of several thousand entries spanning ten years of research is what separates a knowledge management system from a document archive. In a document archive, you have to remember roughly where something is. In a knowledge management system, you can find things you forgot you had.

VaultBook's main search operates across the full text of every entry: titles, note bodies, labels, attachment index text, and inline OCR text from images - all weighted by a relevance scoring formula that surfaces the most relevant results first. The typeahead dropdown begins suggesting results as the first characters are typed, drawing on title matches and entry content to show the most likely destinations immediately.

The Q&A panel operates differently from the main search. Where the main search returns entries matching search terms, the Q&A panel accepts natural-language questions and scores entries on their likely relevance to the question. Asking "which platform has the most expansive location data retention policy" returns a ranked list of entries with location-data-adjacent content, with the scoring weighted heavily toward inline OCR text and attachment index content - the substance of the research materials, not just the metadata.

The warm-up mechanism serves researchers well: when a Q&A query is submitted, the top 12 scoring candidates trigger background OCR warm-up if their inline images have not yet been processed in the current session. Once the OCR completes - typically within seconds for typical screenshots - the Q&A results update automatically. The first search on a newly loaded vault may improve in the seconds after initial scoring as OCR warm-up surfaces text that was not yet in memory.

The vote-based reranking, part of the Pro feature set, lets Dr. Okonkwo train the search to reflect her research judgment over time. When a search result is the right answer, upvoting it adds a million-point boost to that entry's score for that query. When a result is consistently wrong - a note that happens to contain a search term but is never the right answer - downvoting it removes it from the top of results. Over months and years of use, the search results reflect the accumulated judgment of the researcher, not just the mechanical scoring formula. The votes are stored in the repository and persist across sessions.

The search history feature, which retains up to 200 past queries, surfaces query suggestions using a Levenshtein-distance-based fuzzy matching algorithm. When a query has been run before, the typeahead suggests it from history. This means that the specific, idiosyncratic query strings that experienced researchers develop - the precise combinations of terms that reliably surface a particular category of notes - are available as instant suggestions without having to reconstruct them from memory.

## Related Entries: Connecting the Research

One of the most valuable capabilities in a large research vault is the ability to surface connections that were not apparent when the notes were created. Research conducted in 2017 on data broker identity resolution practices may be directly relevant to a 2024 investigation into connected television advertising. Notes taken at a 2019 conference session may contain observations about a technical approach that reappears in a different context five years later. In a siloed document archive, making those connections requires either excellent memory or exhaustive manual review.

VaultBook's Related Entries panel surfaces these connections automatically. When an entry is open and being read, the Related engine scores the full vault against the content of the current entry - matching on title tokens, note body text, inline OCR text, labels, and attachment index content - and presents the most similar entries in a panel that fades in and updates as you scroll through the entry. The related results are paginated, allowing browsing of the full set of connected notes.

The scoring gives OCR text substantial weight - 10 points per matching token, compared to 14 for body text and 12 for sections. This means that if two notes both contain screenshots that mention the same surveillance vendor, those notes will surface as related to each other even if the vendor name does not appear in either note's typed body text. The visual evidence in the screenshots creates the connection.

The Related panel also supports vote-based training. Over time, voting entries in the Related panel as "yes, this is genuinely related" or "no, this match is coincidental" refines the relevance model for the specific entry. The votes persist in the repository. A note that receives consistent upvotes in relation to a specific entry will always surface near the top of that entry's Related panel in future sessions.

"I opened a note about a 2017 location data investigation last month," Dr. Okonkwo describes, "and the Related panel surfaced a note I'd written in 2022 about a completely different company, which I had completely forgotten about, that contained a reference to the same technical intermediary. That connection is in a paper I'm working on now. I would not have made it without the Related panel."

## Version History: Preserving the Research Record

Published research conceals the analytical process that produced it. A regulatory comment or academic paper represents the final, polished position - not the false starts, the discarded analytical frameworks, the arguments tried and rejected, or the gradual movement toward the eventual conclusions. For a researcher, that process record has value beyond the final output.

VaultBook's version history preserves per-entry snapshots with a 60-day retention window, stored in the `versions/` directory of the vault folder. Every significant edit creates a new snapshot. The history UI presents versions in reverse chronological order - newest to oldest - in a modal accessible from the entry's history button. Any version can be reviewed; returning to an earlier state of an analytical note is a matter of clicking back through the history.

For Dr. Okonkwo's research practice, version history serves three distinct purposes.

The first is intellectual archaeology - going back to see what the analytical position was before new information changed it. In a multi-year investigation, the original hypothesis and the eventual conclusion can be substantially different, and understanding why they diverged is often important for characterizing the strength of the final argument.

The second is recovering discarded directions. Research notes under active development often contain analytical threads that are explored and then set aside because a more promising direction emerged. Occasionally, the discarded direction turns out to be the right one after all, or becomes relevant in a new context. The version history makes those discarded threads retrievable.

The third is documentation for the research process itself - a record that analysis was developed independently over time rather than retrofitted after the fact. In the context of regulatory proceedings or legal testimony, demonstrating that a position was formed through a documented process of analysis rather than post-hoc rationalization has evidentiary value.

## The Kanban Board: Research Projects in Motion

Research projects have a lifecycle: initial scoping, literature review, primary source collection, analysis, drafting, review, and eventual submission or publication. Managing multiple projects simultaneously - some in early scoping, some in active analysis, some in final drafting - requires a project management layer above the organizational note structure.

The Kanban Board, accessible via the Pro Tools panel, reads from the labels applied to entries throughout the vault and organizes them into drag-and-drop columns. Dr. Okonkwo's research kanban uses labels that correspond to project phases: `sourcing` for entries being gathered and evaluated, `analysis` for entries under active analytical work, `draft` for entries feeding an active writing process, `review` for entries in the review or fact-checking phase, and `published` for entries whose research has been incorporated into a final output.

The board updates automatically as labels are changed on entries throughout the vault. Changing an entry's label from `analysis` to `draft` moves its card to the Draft column on the board. The board view provides a cross-project status overview that the page hierarchy - organized by research topic - does not: a horizontal view of everything in the analysis phase, regardless of which research domain it belongs to.

The board also uses inline hashtags embedded in note content to create additional card categorization. A note body that includes `#urgent` automatically surfaces in the board's urgency filter. This lets her cross-reference project phase with urgency in a single view.

## Threads: Capture During Calls and Interviews

Research involves a continuous flow of conversations that need to be captured in real time: phone calls, video interviews, conference sessions, informal briefings, and the rapid-fire exchanges at the end of a panel where someone says something important and the recording has stopped. The Threads tool provides a centered overlay that functions as a rapid-capture scratchpad, independent of the main entry management interface.

During a call or interview, Dr. Okonkwo opens Threads in a separate window and types as the conversation proceeds - names, quotes, references mentioned, follow-up questions to ask, connections to existing research that surface during the exchange. The Threads interface is minimal by design: a clean chat-style layout that stays out of the way while something important is being said.

After the call, she moves the Threads content into the appropriate Meeting Notes entry - editing the raw capture into a structured note with sections for key quotes, follow-up actions, and connections to ongoing research. The Threads content persists both in localStorage as a fallback and in a dedicated file in the vault's `attachments/` directory as the primary storage, so nothing captured during a call is lost even if the browser closes unexpectedly before she has organized it.

For off-the-record conversations where the identity of the person needs to be protected in the note, the resulting meeting note entry goes into the Sources and Correspondence page with per-entry encryption. The Threads capture - which exists only in the clear before she organizes it - is converted to an encrypted entry as part of the post-call workflow.

## AI Suggestions: What Surfaced Last Tuesday

The AI Suggestions panel - the sparkle icon that opens a four-page carousel - has become part of Dr. Okonkwo's daily research routine in ways she did not anticipate when she started using it.

Page 1 of the carousel shows Suggestions: the entries the system predicts are most relevant to the current moment, based on upcoming due dates in the next 48 hours and a weekday reading pattern built from the last four weeks of session activity. The weekday pattern component is the one that has changed her workflow. VaultBook observes, in browser local storage, which entries she has read on each day of the week over the last 28 days, identifies which entries she reads most consistently on Tuesdays, which on Thursdays, and so on, and surfaces those entries as likely relevant on the matching day. The entries that she consistently reads on regulatory meeting days surface on those days. The entries she tends to review before weekly strategy calls surface on those mornings.

"It surfaces things I meant to look at that I forgot I meant to look at," she says. "I don't configure it. It just learns from what I do."

Page 2 shows the 100 most recently read entries, deduplicated and timestamped. In a vault of several thousand entries, this list is the practical working set - the notes that have been active in recent sessions, which she can return to without searching. Page 3 shows recently opened attachments - the PDFs, court filings, and regulatory documents that have been active in the current research period. Page 4 shows recently used tools, making it fast to return to the Kanban board, the File Explorer, or any other tool she has been using frequently.

The Suggestions panel does all of this computation locally, from behavioral metadata stored in the browser's localStorage on her device. No usage pattern data leaves VaultBook. The personalization is entirely on-device, from data that exists nowhere outside her browser.

## File Explorer: Navigating a Decade of Attachments

After ten years and thousands of research documents, the attachment collection in Dr. Okonkwo's vault is substantial. The File Explorer tool provides a visual interface for browsing attachments by type, by entry, and by page - the three organizational dimensions that matter most for navigating a large attachment collection.

The by-type view groups every attachment in the vault by file extension and shows counts and sizes for each type. She can see at a glance how many PDFs are in the vault, how many DOCXfiles, how many XLSXfiles, and what their aggregate storage footprint is. From the type view, she can drill into the list of all PDFs and browse them directly.

The by-entry view shows every entry that has attachments, with the attachment list for each entry. This is the view she uses when she knows an attachment is associated with a specific note but cannot remember the attachment filename.

The by-page view organizes attachments according to the page hierarchy - all attachments under the Corporate Surveillance page, all attachments under the Regulatory and Legal page - which makes reviewing the document collection for a specific research domain straightforward.

The File Explorer also surfaces recent attachment activity - the files that have been opened, added, or referenced most recently - which overlaps with but extends the AI Suggestions panel's recent files view.

## Analytics: Understanding the Shape of the Research

The analytics panel in the sidebar gives Dr. Okonkwo a running picture of the vault's shape: total entry count, entries with attached files, total file count, and total storage size. For a researcher who has accumulated material over a decade, these aggregate numbers have practical significance - they indicate whether the vault is growing in proportion to the work it is serving, and they flag when the attachment storage is approaching the point where she needs to manage it.

The Pro analytics extend into four canvas-rendered charts: a label utilization pie chart showing the distribution of her organizational labels across the vault (useful for seeing whether certain labels have grown disproportionately and may need to be split), a 14-day activity line chart showing edit and access activity over the last two weeks, a pages utilization pie chart showing how the note volume is distributed across top-level research domains, and a month activity chart showing the rolling month's pattern of vault activity.

The 14-day activity chart has become her most-used analytical view during active project periods - it shows at a glance whether a particular research area has had a period of activity followed by neglect, which is often a signal that a thread was opened and then dropped. A spike in the activity chart followed by a gap is the pattern she looks for as an indicator that something needs to be picked up again.

## The Timetable: Research Has Deadlines

Research also has a calendar. Comment periods close. Hearings are scheduled. Filing deadlines are fixed. Interviews need to be confirmed. Papers have submission windows. The Timetable - a Pro feature with day and week calendar views and a 24-hour scrollable timeline - integrates deadline and scheduling management directly into the vault.

Entries with due dates appear in the Timetable automatically. A regulatory comment filing with a due date set in the entry appears on the Timetable on that date. The upcoming entry list in the AI Suggestions carousel pulls from due dates within the next 48 hours, creating a link between the scheduling system and the active note suggestions. An entry scheduled for tomorrow will appear in today's Suggestions page alongside the weekday pattern recommendations.

The Timetable's sidebar ticker shows upcoming scheduled items in a compact widget, so the deadline view is always visible without opening the full Timetable modal. For a researcher managing multiple simultaneous deadlines, the ticker provides a persistent ambient awareness of what is coming without requiring active calendar checking.

## Labels and Cross-Cutting Organization

The page hierarchy organizes notes topically - where a note lives in the taxonomy of the research. Labels organize notes behaviorally - what a note is, what it is doing, what state it is in. The two organizational systems are complementary and neither replaces the other.

Dr. Okonkwo's label vocabulary has evolved over the years of using VaultBook into a set that reflects the actual categories that matter in her research workflow. Some labels are status markers: `draft` (analysis under active development), `published` (research incorporated into a final output), `to-review` (notes flagged for a second read before acting on them), `source-adjacent` (entries that touch on source relationships and should be handled carefully). Some labels are type markers: `primary-source` (original documents, filings, communications), `secondary-source` (analysis of primary sources), `interview` (notes from a recorded or in-person conversation), `data-set` (entries containing or linking to structured data). Some are urgency markers: `urgent`, `deadline`, and a label she calls `do-not-forget` for the category of insight that experience has taught her is most vulnerable to being lost in a large corpus.

The sidebar label panel makes filtering by label instantaneous - clicking a label shows all entries carrying it, regardless of which page they live on. A search for everything labeled `source-adjacent` shows her every note in the vault that she has flagged as needing careful handling, cutting across the topical page structure to give her a security-oriented view of the vault.

The label match mode toggle - match any vs. match all - provides compound filtering. Filtering for entries that carry both `primary-source` and `Corporate Surveillance` shows her the original documents in that research domain, not the secondary analysis. Filtering for both `to-review` and `urgent` shows the short list of items that need immediate attention. The label system scales as well: applying a new label to a set of entries and then filtering by it creates an instant cross-cutting view that did not exist in the organizational scheme before.

The Smart Label Suggestions feature helps maintain label consistency across a large vault. When editing an entry, the suggestion chips that appear below the label field analyze the entry's content and surface labels that have been used on similar content elsewhere in the vault. An entry about a new data broker investigation automatically suggests the labels that appear most frequently on existing data broker entries. This prevents the label vocabulary from drifting - ensures that similar content carries similar labels, which keeps the filtered views coherent even as the vault grows.

The analytics panel's label utilization pie chart shows the distribution of label use across the full vault, giving her a macro view of the organizational system's shape. A label that has accumulated an unusually large share of the vault is often a signal that it has been used too broadly - that what started as a useful category has become a catch-all that needs to be subdivided. The chart makes this visible before it becomes a problem.

## The Sections Architecture: Research Notes With Depth

A research note is rarely a flat document. An entry about a regulatory enforcement action might need to contain: a summary of the decision for quick reference, the full annotated text of the finding, a section for the procedural history, a section for the technical analysis of the company's data practices, a section for the implications for future enforcement, a section for the related cases and cross-references, and a section for the researcher's own analytical commentary that should be kept clearly separate from the summary of the decision itself.

In a flat note, all of this material competes for visual space and requires scrolling to navigate. In a VaultBook entry with sections, each of these components lives in its own collapsible accordion - independently expandable, independently editable, each with its own rich text body and its own file attachments.

Dr. Okonkwo's enforcement action notes follow a standard sections template: Decision Summary as the main entry body, followed by sections for Procedural History, Technical Findings, Regulatory Implications, Related Cases, and Researcher Analysis. The Decision Summary and Researcher Analysis sections carry the most editorial content. The Procedural History and Technical Findings sections are primarily factual and reference-heavy, often with the original enforcement document attached to the section directly rather than to the main entry.

Per-section attachments are a key part of this structure. Attaching the enforcement document to the Technical Findings section - rather than to the entry as a whole - signals the relationship between the document and the content that analyzes it. The File Explorer's by-entry view shows attachment structure at the section level, so she can see which document is attached to which section of which entry without opening each entry individually.

The sections architecture is what makes a single entry serve as a complete research dossier for a topic, rather than requiring either a very long flat document (hard to navigate) or multiple separate entries (hard to keep coherent). An enforcement action note with eight sections is still one entry in the vault - one search target, one version history chain, one encryption context if it needs to be protected - but it has the internal structure of a working reference document.

"The sections model changed how I think about what an entry is," Dr. Okonkwo says. "An entry isn't a note. It's a file folder with internal structure. One entry per subject, organized internally with sections, rather than one entry per document. It took me a while to internalize that, but once I did, the vault became much more navigable."

## Portability: A Research Vault That Belongs to the Researcher

After ten years of research accumulated in commercial cloud applications, the portability of the VaultBook vault represents something qualitatively different from what any previous tool offered. The vault is a folder on her hard drive. Inside that folder: `repository.json` holding the note metadata and page structure, a collection of `details-{id}.md` sidecar files holding the note bodies, an `attachments/` directory holding every attached file, an `index/` directory holding the OCR and attachment index text, and a `versions/` directory holding the version snapshots.

That folder can be copied to a backup drive with a standard file copy command. It can be moved to a new device by copying the folder. It can be opened from an external drive on any computer that has VaultBook.html. It requires no migration tool, no export/import process, no account transfer, and no vendor involvement of any kind.

For a privacy researcher whose work includes documenting how cloud vendors retain and handle user data, this portability is not a technical nicety. It is the essential property that makes the tool trustworthy. The content of the vault - the source communications, the analysis built over a decade, the sensitive documents at the heart of ongoing investigations - is owned, held, and controlled by the researcher, on hardware the researcher controls, in file formats that can be read with a text editor if VaultBook itself ceased to exist.

"I've watched multiple cloud applications shut down in the middle of research projects," she says. "I've watched export tools fail, export formats become unreadable, account access get lost, and data that felt permanent turn out to be dependent on a company's continued operation. The VaultBook vault is a folder. I control that folder. That's not a feature. That's the whole point."

## Ten Years in One Place

What Dr. Okonkwo has now is not a perfect research system. There is no such thing. A decade of notes migrated from four different applications will always have rough edges: formatting inconsistencies from the import process, organizational choices made in 2016 that do not fit the structure evolved by 2026, entries that need cleanup, attachments that were added before the deep indexing era and whose content has not been fully extracted.

What she has is a unified, searchable, private corpus that reflects the full span of a research career, organized according to the logic of her actual practice, with the sensitive material protected by encryption that runs locally without any cloud key management service, and with the computational intelligence - search scoring, related entries, OCR of visual evidence, AI suggestions - that makes a large archive navigable rather than merely large.

The search can reach a 2016 note about an early patent filing, a screenshot from a 2019 surveillance product demo, a PDF from a 2022 regulatory proceeding, and a 2024 source communication - all from the same search bar, on the same device, without any of that content ever having been processed by a cloud service.

For a privacy researcher, the design of a tool is never just a practical question. It is an ethical one. The tool you use to document surveillance tells you something about what you actually believe about surveillance. After a decade of noting the irony in others' tool choices, Dr. Okonkwo has resolved it in her own.

VaultBook - your personal digital vault. Private, searchable, and entirely under your control.
