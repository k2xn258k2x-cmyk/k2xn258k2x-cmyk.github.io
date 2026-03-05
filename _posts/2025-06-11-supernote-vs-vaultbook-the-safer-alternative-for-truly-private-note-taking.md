---
title: "Supernote vs VaultBook: The Safer Alternative for Truly Private Note-Taking"
description: "Supernote is a beautifully designed e-ink device. But for professionals whose notes contain sensitive information, the question isn't how good the hardware is — it's where the data goes. Here's what that question reveals."
date: 2025-06-11 17:00:00 -0600
cover: /assets/img/feature-screenshot-placeholder.svg
---

There is a question that every professional who uses a note-taking device eventually needs to ask — not about the device's handwriting recognition, or its screen quality, or its battery life, but about something more fundamental.

Where does my data go?

For most users of consumer productivity devices, this question is academic. The notes they take are not sensitive. The documents they store are not regulated. The information they capture does not carry professional obligations, legal protections, or ethical duties that extend beyond their own convenience. For these users, cloud sync is a feature, not a risk — a mechanism that ensures their notes are available on every device, backed up automatically, and recoverable if a device is lost or damaged.

But for a different population of users — clinicians documenting patient care, lawyers capturing case notes, financial advisors managing client records, security professionals working with sensitive configurations, researchers handling confidential human subjects data — the question of where data goes is not academic. It is professional, ethical, and in many cases legal. The answer "your notes sync to our cloud servers" is not a reassuring feature description. It is the beginning of a compliance analysis.

Supernote is a thoughtfully made e-ink note-taking device with a devoted following among professionals who value its paper-like writing experience and focused, distraction-free design. It is a genuinely good device for the audience it was designed for. But for professionals in regulated or privacy-sensitive environments, understanding what Supernote's cloud architecture means for their data — and understanding what the alternative looks like — is essential before making a choice that may have consequences well beyond note-taking convenience.

VaultBook is that alternative. Not a device, but a workspace — one whose architecture answers the "where does my data go" question with complete finality: it stays on your machine. Always. Without exception.

<!--more-->

## The Architecture Question That Hardware Specs Cannot Answer

When professionals evaluate note-taking tools, they typically compare features: handwriting recognition quality, organizational capabilities, document management, file format support, search, battery life, screen quality. These are legitimate considerations, and for most professional use cases, they are the right considerations.

But for professionals handling sensitive data, there is a prior question that determines whether the features matter at all: what does the tool's architecture do with the information it stores?

This question does not appear on spec sheets. It is not addressed in most product reviews, which are written for general audiences who do not need to ask it. It requires reading terms of service, understanding data flow, and thinking carefully about the difference between what a company promises about data privacy and what its architecture structurally guarantees.

The distinction between promises and structural guarantees is the heart of the matter. A company can promise not to read your data, promise to encrypt it, promise to keep it secure — and all of those promises can be simultaneously true and insufficient. If the company's infrastructure has technical access to your data, then the promises are contingent on the company's continued good faith, continued security, and continued immunity from legal processes that could compel disclosure. Promises are revocable. Structural impossibility is not.

The most secure architecture for sensitive data is not one where a trustworthy company makes strong promises about how it handles your information. It is one where the question of how the company handles your information does not arise, because the company never receives your information in the first place.

Supernote's architecture involves cloud synchronization. Your notes move from the device to Supernote's servers. This is how the cross-device sync works, how the backup works, how the web access interface works. The company has access to that infrastructure. Their security practices determine what happens to your data on their end. Their response to legal process determines who else might access it. Their continued operation determines whether it remains available to you.

VaultBook's architecture involves no external infrastructure at all. VaultBook is a single HTML file that runs in your browser. It reads from and writes to a local folder on your machine. No data moves to any server. No company has access to any infrastructure through which your notes could be reached. The question of what VaultBook does with your data has a simple, permanent, structural answer: nothing, because VaultBook never receives it.

## What Cloud Sync Actually Means for Sensitive Notes

To understand the risk profile that cloud sync creates for sensitive professional work, it helps to trace specifically what happens to a note from the moment it is written on a Supernote device.

The note is written. The device captures the handwriting, converts it to a digital representation, and stores it on the device. When the device connects to the internet, the note is synchronized to Supernote's cloud infrastructure. This synchronization is the mechanism through which Supernote delivers its multi-device access and backup capabilities — the features that make it convenient to access notes from a computer as well as the device, and to recover notes if the device is lost.

At the moment of synchronization, the note exists not only on the device but on Supernote's servers. It is in their infrastructure. Their systems have processed it. Their storage systems hold it. Their technical team has, in principle, the ability to access it — not necessarily by choice, not necessarily in practice, but technically and structurally.

For a note containing personal reflections, professional ideas, or general productivity content, this structural reality is not meaningfully concerning. Cloud storage is how most professional software works. The trade of some abstract privacy for meaningful convenience is a trade that most users make consciously and reasonably.

For a note containing a patient's name and diagnosis, a client's legal strategy, a client's financial position, or any other information that carries professional confidentiality obligations — this structural reality is the beginning of a compliance problem. The moment that information synchronizes to a third-party server without a documented authorization and appropriate protective agreements, the professional has potentially violated their obligations.

This is not a hypothetical. HIPAA enforcement actions have involved the use of non-compliant software for clinical documentation. Bar association disciplinary actions have involved the handling of client information through tools that transmit it to unauthorized third parties. The risks are documented, the obligations are real, and the architecture of the tool determines whether those obligations can be met.

## What VaultBook's Zero-Network Architecture Actually Means

VaultBook makes zero network requests. Not "limited network requests." Not "optional sync you can turn off." Zero. The application does not communicate with any external server under any circumstances during any operation.

This is not a setting. It is not a mode. It is the fundamental architecture of the application. VaultBook is a self-contained HTML file that runs entirely within your browser's local execution environment. It uses browser APIs to read from and write to a folder on your local filesystem. It uses locally-running code for all processing: indexing, search, encryption, OCR. There is no remote endpoint to call, because the application was designed from the beginning not to call any.

The practical verification of this is straightforward for anyone with basic technical curiosity: open VaultBook, open your browser's developer tools, switch to the Network tab, and work normally for an hour. Write notes. Attach files. Search. Browse your workspace. The Network tab will show nothing. Not a heartbeat. Not a telemetry event. Not a license check. Not a CDN resource load. The tab stays empty, because there is nothing for it to record.

This verifiability matters. For professionals whose trust in a tool is professional trust — trust they extend not just to themselves but implicitly to their clients, patients, or counterparties — the ability to verify a privacy claim rather than simply accept it is significant. VaultBook's privacy is not a statement in a terms of service. It is a property of the application's architecture that can be tested, confirmed, and demonstrated to anyone who needs to understand how their information is being handled.

For professionals in regulated industries who face compliance audits, data handling reviews, or professional responsibility examinations, the difference between "our vendor promises to protect your data" and "we can demonstrate that the data never left this device" is the difference between a defensible position and an uncomfortable one.

## The Encryption Model That Belongs to You

VaultBook's approach to protecting sensitive notes goes beyond the zero-network architecture. For notes that require encryption — clinical records, legal files, financial documents, any content that should be protected even from someone who gains physical access to the device — VaultBook provides AES-256-GCM encryption with a model that is fundamentally different from cloud-based encryption.

In cloud-based tools, encryption typically means that your data is encrypted on the vendor's servers, with the vendor holding the encryption keys. This protects your data from external attackers who might breach the server, but it does not protect it from the vendor itself, from legal processes served on the vendor, or from vendor-side security incidents that compromise key management. The encryption is real, but it is the vendor's encryption — protecting the vendor's infrastructure from external attack, not protecting your data from the vendor.

VaultBook's encryption is yours. The key is derived from your password in your browser session. The derivation happens locally. The password never leaves the session. The key is never stored anywhere. The encryption happens before anything is written to disk, and the decryption happens entirely in your browser session when you enter your password. When you close the tab, the decrypted content is cleared from memory.

What this means in structural terms is that someone who obtains your VaultBook folder — through device theft, through copying the drive, through any other means — cannot read the encrypted content without your password. There is no key to recover. There is no vendor to compel. There is no alternative decryption pathway. The protection is mathematical and unconditional.

VaultBook has no "forgot password" option. This is sometimes perceived as an omission — a missing convenience feature. It is actually confirmation that the encryption model is working correctly. If password recovery existed, it would mean that some entity somewhere had enough information about your password to help you regain access — which would mean the encryption had a back door, however well-intentioned. The absence of password recovery is proof that there is no back door. The encryption belongs to you completely.

For professionals who need to be able to tell their clients, their licensing boards, or their audit teams exactly how their sensitive data is protected, VaultBook's encryption model provides an answer that is specific, verifiable, and unconditional: the data is encrypted with a key that only you hold, on a device that is in your physical possession, by a process that can be independently verified.

## Attaching and Searching the Full Range of Professional Files

Professionals in regulated industries do not work with text notes alone. Their documentation spans the full range of file types that professional information arrives in: PDFs of reports and assessments, Word documents of correspondence and memoranda, Excel spreadsheets of financial and operational data, email files from MSG and EML archives, presentations capturing strategic thinking and client communications, images of physical documents, handwritten notes, and annotated diagrams.

Managing this variety of file types across multiple applications — a PDF reader here, a document editor there, an email client, a spreadsheet application — creates the fragmentation that is one of the primary sources of professional inefficiency in knowledge-intensive work. Each application is another system to navigate, another potential exposure point if it has cloud features, another context switch that interrupts the flow of working with the underlying content.

VaultBook consolidates the full range of professional file types into a single workspace. Attach a PDF and VaultBook reads every page, including scanned pages through OCR. Attach a Word document and VaultBook indexes every paragraph. Attach an Excel spreadsheet and every cell from every sheet becomes searchable. Attach an MSG or EML email file and the message body, subject, and headers are indexed. Attach a ZIP archive and VaultBook opens it, reads the files inside, reads the images within those files.

Every attachment becomes searchable from VaultBook's unified search interface. A number in a spreadsheet attached to a note six months ago is as findable as a word in a note written this morning. A clause in a PDF contract attached to a project entry is as retrievable as the entry text itself. A commitment documented in an email file attached to a client note is as searchable as the client note.

And all of this indexing happens locally. No file is uploaded to any processing service. No OCR is performed on a remote server. No spreadsheet data is transmitted for indexing. The intelligence of the search — the ability to find content inside any attached file — is delivered entirely through local processing, preserving the privacy of every file's contents throughout the indexing process.

For professionals who routinely attach sensitive documents to their notes — clinical assessments, legal correspondence, financial analyses — this local indexing is not just convenient. It is the difference between an attachment feature that can be used with sensitive files and one that cannot.

## Organizing a Professional Knowledge Base

The organizational capabilities that professional knowledge work requires are more sophisticated than what most note apps provide by default. Work is organized by client, case, project, or patient — but also by status, by urgency, by document type, by compliance category, by workflow stage. These organizational dimensions interact in ways that a simple folder hierarchy does not accommodate well.

VaultBook's organizational model provides the necessary depth and flexibility. Pages create the primary organizational units — a page for each client, each project, each matter, each patient. Sections within pages create the secondary structure — a section for each phase of an engagement, each component of a case, each period of a treatment. This hierarchical structure can be as deep as the work requires.

Labels and hashtags provide the cross-cutting organizational layer. A label for document status — draft, reviewed, final, archived. A label for document type — correspondence, assessment, analysis, filing. A label for urgency or priority. A label for workflow stage — pending, in progress, resolved. These labels cut across the page hierarchy, allowing retrieval based on characteristics that the hierarchy cannot capture.

The Kanban view builds itself from labels without any configuration. If you use status labels, the Kanban view shows your entire workspace organized by status — every entry across every page sorted into columns that reflect where it is in the workflow. Drag an entry from one column to another and the label updates automatically. For managing active workloads across multiple clients or matters, the Kanban view provides an instant overview that requires no setup beyond the labels already in use.

The search integrates with the organizational structure to ensure that the organizational model does not have to be perfect to work. When a file or entry is not where you expect it to be in the hierarchy, search finds it through its content. The organization provides the structure; the search provides the rescue.

## Professional Roles That VaultBook Serves

The combination of zero-network architecture, client-side encryption, full-format attachment indexing, and flexible organization serves different professional roles in specific ways that are worth articulating directly.

For **clinicians** — physicians, nurses, therapists, psychiatrists, social workers — VaultBook provides a workspace where clinical notes and patient documentation are genuinely private in the structural sense: stored locally, encrypted locally, never transmitted to any external server. The clinical record lives on the clinician's device, accessible only with their password, protected by encryption that no vendor can reverse. For solo practitioners and small practices that need HIPAA-appropriate documentation without enterprise healthcare IT infrastructure, VaultBook provides the privacy architecture that clinical work requires.

For **legal professionals** — attorneys, paralegals, legal consultants, in-house counsel — VaultBook provides a workspace where attorney-client privileged communications are protected architecturally rather than just by policy. Every case note, every correspondence file, every client document lives in an encrypted local vault that no third party can access. The attorney-client privilege, which protects communications from disclosure to parties outside the representation, is structurally upheld by an architecture that prevents any transmission to any external party.

For **financial professionals** — advisors, analysts, auditors, investment managers — VaultBook provides a workspace where client financial information and proprietary analyses are protected from the cloud exposure that creates regulatory and confidentiality risks. Client portfolio information, financial planning notes, internal analyses, and correspondence stay in a local encrypted workspace that no external party can access without physical possession of the device and knowledge of the password.

For **security and IT professionals** — penetration testers, security researchers, IT architects, incident responders — VaultBook provides a workspace whose architecture matches the security standards that these professionals apply to their clients' systems. Zero-network operation, client-side encryption, and air-gap compatibility mean that sensitive engagement data, vulnerability findings, and proprietary research exist in a workspace that can be evaluated with the same rigor that these professionals apply to any system they assess.

For **executives and strategic advisors** handling confidential business information — competitive intelligence, merger and acquisition analysis, strategic planning, board communications — VaultBook provides a workspace where sensitive business information is not routed through cloud infrastructure that creates exposure to competitor intelligence operations, insider trading concerns, or unauthorized disclosure.

In each case, the common thread is the same: professionals whose work creates legal, ethical, or commercial obligations around information confidentiality need a workspace whose architecture upholds those obligations structurally, not just through policy.

## The Optional Sync That Stays Under Your Control

One of the practical concerns about offline-first tools is the question of cross-device access. A note-taking workflow that requires all notes to live on a single device creates a real operational constraint for professionals who work across a laptop, a desktop, a home machine, and potentially a secure workstation in a different facility.

VaultBook addresses this concern directly without compromising its zero-network architecture. VaultBook's data lives in a folder on your machine — a folder containing note files, attachment files, index files, and metadata in standard formats. That folder can be synchronized to any location using any tool you choose, on your schedule, under your control.

If your organization uses a private server, your VaultBook folder can live there and be accessed from multiple machines. If you use an encrypted backup service with appropriate agreements for your professional context, your VaultBook folder can be included in that backup. If you work across two personal machines and use a cloud service you trust for personal data, you can sync the folder there.

The critical distinction from Supernote's cloud sync is intentionality and control. Supernote's sync happens automatically, continuously, to Supernote's servers, under Supernote's terms. VaultBook sync happens when you decide, to a destination you choose, using tools you control. The data does not move without your deliberate action. Where it goes is entirely your decision.

For professionals in regulated environments where data storage locations must be documented and approved, this model of deliberate, controlled sync is a compliance feature. You know exactly where your VaultBook data is, because you put it there. The answer to "where is this data stored?" is specific, accurate, and fully within your control to determine and document.

## Data Lifecycle Controls for Compliance-Sensitive Work

Professional information has a lifecycle. Clinical records must be retained for defined periods and then properly disposed of. Legal files have document retention requirements that vary by matter type. Financial records are subject to regulatory retention schedules. Sensitive project files should not persist indefinitely after the project they belong to has concluded.

Most note-taking tools have no meaningful data lifecycle management. Notes accumulate indefinitely. Deleted notes remain in a trash folder indefinitely. The tool's retention of your data is governed by its own infrastructure and policies, not by your professional obligations.

VaultBook includes built-in data lifecycle controls that put retention management in your hands. Expiry limits can be set on specific notes or attachments, ensuring that time-limited sensitive material is automatically managed without requiring manual tracking. A note flagged as temporary — a working note for a project phase that should not persist after that phase closes — can be set to expire at the appropriate point.

The 60-day purge policy ensures that deleted content is permanently removed from the workspace after the retention period ends. Deletion in VaultBook is not soft deletion that preserves content in a recoverable state indefinitely. After the purge period, deleted content is gone — not archived, not cached, not retained in vendor infrastructure outside your visibility. For professionals who need to demonstrate to auditors or regulators that their data disposal practices match their documented policies, this definitive deletion is a meaningful capability.

Combined with VaultBook's local storage model — where all data is in a folder you control, on infrastructure you manage — these lifecycle controls give professionals the active management of their data retention that compliance work requires. You are not relying on a vendor's retention policies to align with your professional obligations. You are directly managing the lifecycle of your data according to your own documented practices.

## The Workspace That Grows Smarter Over Time

VaultBook's intelligence grows as your workspace grows — and all of that growth happens locally, derived from your behavior, accumulating in your workspace without any of it leaving your device.

The search system learns from your feedback. On Pro, when you mark a search result as relevant, VaultBook incorporates that signal into future rankings for similar queries. When a result is not what you needed, downvoting adjusts the system. Over time, the search reflects how your mind organizes information — which results are actually useful for the way you work — rather than a generic ranking algorithm.

The Related Entries feature builds a map of how the knowledge in your workspace is connected. Open any entry and VaultBook suggests other entries it believes are related based on content analysis across your workspace. A clinical note might surface a research paper that addresses the same presentation. A legal memorandum might connect to a precedent note from a different matter. Over time, as you confirm and reject the suggestions through upvotes and downvotes, VaultBook builds a knowledge graph that reflects your professional judgment about how your notes and materials connect.

The AI Suggestions carousel learns your usage patterns — which entries you tend to work with at which times, which files you return to most frequently, which parts of your workspace need attention based on approaching deadlines and unresolved labels. When you open VaultBook, the carousel orients you immediately to the most relevant parts of your workspace without requiring you to navigate there.

All of this accumulated intelligence — the search calibration, the relationship map, the usage patterns — lives in your local workspace. It is not derived from aggregate analysis of other users' behavior. It is not processed on any external server. It is built entirely from your own usage of your own workspace, accumulated locally, for your benefit, without any external involvement. The more you use VaultBook, the more precisely it reflects how you work — and the more valuable that accumulated workspace becomes.

## Air-Gap Ready: A Workspace That Works Where Networks Don't

There are professional environments where internet connectivity is not just unavailable — it is structurally prohibited. Secure government facilities. Classified research environments. Hospital networks with strict segmentation policies. Legal firms working on matters that require isolation from external networks. Financial institutions conducting internal investigations under strict data segregation requirements.

In all of these environments, tools that depend on cloud sync, license verification servers, or any form of external connectivity simply cannot function. They are designed to require the network they cannot reach. An offline mode, if it exists at all, is a degraded substitute for the full experience — a subset of features that functions when connectivity is absent, designed around the assumption that connectivity will eventually return.

VaultBook's relationship to network connectivity is categorically different. The application was not designed for connectivity and adapted to work without it. It was designed from the beginning to operate entirely without network connectivity — and that design is complete and fully functional. Every feature available in a connected environment is equally available in an air-gapped one. The search runs locally. The attachment indexing runs locally. The AI suggestions run locally. The encryption runs locally. The Kanban view, the Related Entries, the version history — all local, all fully functional regardless of whether the device they run on has ever been connected to the internet.

For professionals who regularly work in both connected and air-gapped environments — security researchers moving between standard workstations and isolated test environments, clinicians moving between general hospital networks and secure ward systems, legal professionals working in facilities with varying connectivity policies — this consistent behavior is operationally significant. The tool works the same everywhere. There is no mode to switch, no feature set to adapt to, no connectivity assumption that breaks the workflow in secure environments.

This air-gap compatibility is not an additional feature bolted onto a cloud-native architecture. It is the natural consequence of building an application that never required connectivity in the first place. VaultBook does not work in air-gapped environments despite being designed for connected ones. It works in air-gapped environments because connectivity was never part of the design.

## The Knowledge Archive That Is Truly Yours

There is a long-term dimension to the choice of a professional workspace that feature comparisons do not capture: what happens to your accumulated knowledge over time, and who controls access to it.

Most cloud-based tools create a form of knowledge accumulation that is conditional. The knowledge is accessible as long as the subscription is active, as long as the vendor's platform continues to operate, as long as the vendor's terms of service do not change in ways that affect your access, and as long as the vendor's infrastructure is not subject to a security incident that compromises your data. These conditions are usually met. But they are conditions — the knowledge is yours subject to circumstances outside your control.

VaultBook's knowledge accumulation is unconditional. Your workspace lives in a folder on your machine. That folder is yours. It does not disappear if you stop paying for a service. It does not become inaccessible if the vendor is acquired, changes direction, or discontinues the product. It does not change if the terms of service are revised. It persists for as long as you choose to keep it, on hardware you own, in formats that are readable by the application you have already downloaded.

For professionals building knowledge bases that represent years of accumulated professional expertise — clinical understanding developed across thousands of patient encounters, legal pattern recognition built across hundreds of matters, security knowledge accrued across dozens of engagements — this permanence and unconditional ownership is not a minor consideration. It is the assurance that the investment in documentation has lasting value, that the workspace built today will be available and useful in five years and ten years, that the knowledge is genuinely yours rather than licensed access to your own information.

A workspace that is structurally yours — local, portable, encrypted with your key, dependent on nothing external — is a workspace worth investing in deeply. Every attachment, every note, every search signal, every relationship you confirm in Related Entries contributes to a knowledge base that grows in value precisely because it is permanent, private, and unconditionally yours.

## Why the Right Question Is Architectural

The conversation about Supernote and VaultBook could be framed as a feature comparison. Supernote offers a handwriting-first experience on a dedicated e-ink device. VaultBook offers a software workspace with powerful attachment indexing, semantic search, and privacy-first architecture. These are different tools serving overlapping but not identical needs.

But the most important difference between them for professionals in regulated or privacy-sensitive environments is not a feature difference. It is an architectural difference. Supernote's data model involves cloud synchronization. VaultBook's data model involves no external servers under any circumstances. This architectural difference determines the answer to the question that matters most for privacy-sensitive professional work: where does the data go?

For Supernote, the answer is: to Supernote's cloud infrastructure, under Supernote's terms of service, accessible to Supernote's systems, subject to Supernote's response to legal process.

For VaultBook, the answer is: nowhere. It stays on your device. Always. Structurally. Without exception.

This is not a criticism of Supernote as a product. It is a description of what its architecture does — an architecture that is entirely appropriate for the users it was designed for and inappropriate for the specific subset of users whose professional obligations make cloud sync a compliance risk rather than a convenience feature.

Understanding this architectural difference is what allows professionals in healthcare, law, finance, security, and other sensitive domains to make an informed choice — not based on feature lists or hardware aesthetics, but based on the foundational question of how each tool handles the information they are trusting it to protect.

## A Workspace Designed for the Work That Demands Privacy

There is a version of professional note-taking that is purely about productivity — capturing information efficiently, organizing it effectively, retrieving it quickly. For this version of the problem, many tools work well, and the choice between them turns on features, design preferences, and workflow compatibility.

There is another version of professional note-taking where productivity is necessary but not sufficient — where the work that generates the notes carries obligations that extend beyond the individual professional's own interests to the people and institutions they serve. This is the version of the problem that healthcare, legal, financial, and security professionals face every time they open a note and begin to type.

For this version of the problem, the architecture of the workspace is not secondary to the features. It is the primary consideration. A workspace with powerful features and an architecture that exposes sensitive information to third parties is not a professional tool for regulated work. It is a liability. A workspace with an architecture that keeps sensitive information entirely within the professional's control, encrypted with keys only the professional holds, processed entirely on local hardware, and never transmitted to any external system — that is the foundation on which professional note-taking for sensitive work should be built.

VaultBook is that foundation. Not because it made a promise, but because its architecture made a promise structurally impossible to break.

When professionals ask "can the company read my data?" — the question that opened this piece — VaultBook's answer is the only answer that completely satisfies the question. No. Because VaultBook never receives your data. It stays where you put it, on your machine, under your control, for as long as you choose to keep it there.

That is what truly private note-taking looks like. The architecture has to say it before the marketing can mean it.
