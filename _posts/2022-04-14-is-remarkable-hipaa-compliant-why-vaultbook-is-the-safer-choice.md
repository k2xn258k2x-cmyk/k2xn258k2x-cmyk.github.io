---
title: "Is reMarkable HIPAA Compliant? Why VaultBook Is the Safer Choice for Healthcare Professionals"
description: "reMarkable's cloud-sync architecture creates real compliance risks for clinicians handling protected health information. Here's what healthcare professionals need to know — and why VaultBook is the alternative built for the way sensitive work actually gets done."
date: 2022-04-14 17:00:00 -0600
cover: /assets/img/feature-screenshot-placeholder.svg
---

There's a question that comes up in clinician forums, hospital IT threads, and healthcare startup Slack channels with surprising frequency: *Is reMarkable HIPAA compliant?*

It's an understandable question. The reMarkable tablet is genuinely beautiful. Its e-ink screen, handwriting-first interface, and minimalist aesthetic make it feel like the premium professional tool that doctors, therapists, and clinical administrators have been waiting for. It looks like the kind of device that belongs in a serious, privacy-conscious workplace.

But appearances and compliance are very different things. And when the question is whether a tool can legally touch protected health information — patient names, diagnoses, treatment notes, appointment records, insurance identifiers — the answer matters in a way that no amount of elegant hardware can override.

The short answer: **reMarkable is not HIPAA compliant.** The longer answer is that its architecture makes compliance structurally impossible without fundamental changes to how the device stores and transmits data — changes the company has not made and has not announced plans to make.

This article walks through exactly why that's the case, what it means in practice for healthcare professionals, and why VaultBook has emerged as the alternative that actually fits the demands of clinical environments.

<!--more-->

## What HIPAA Actually Requires — and Why It's Often Misunderstood

Before examining reMarkable's compliance status, it helps to be precise about what HIPAA compliance actually demands. Many professionals assume that if a tool encrypts data or requires a password, it's probably fine. That assumption is wrong, and it's one of the most common sources of inadvertent violations.

HIPAA compliance is not a single technical feature. It is a comprehensive legal and operational framework that covers administrative safeguards, physical safeguards, and technical safeguards simultaneously. A device can be fully encrypted and still be non-compliant. A cloud service can have excellent security practices and still be non-compliant. Compliance requires meeting all three categories of requirements and — critically — documenting that you have done so.

The cornerstone of HIPAA's business associate framework is the **Business Associate Agreement**, or BAA. When a covered entity (a hospital, clinic, private practice, or any healthcare provider) shares PHI with a third-party service provider, that provider must sign a BAA acknowledging their obligations under HIPAA. This isn't optional or a technicality — it is a federal requirement. Without a BAA, any sharing of PHI with a vendor is a violation, regardless of how secure that vendor's systems actually are.

HIPAA also requires **audit logging** — the ability to demonstrate who accessed PHI, when they accessed it, and what they did with it. It requires **access controls** that limit PHI exposure to authorized individuals. It requires **breach notification procedures** in the event of unauthorized access. And it requires the covered entity to maintain **demonstrable oversight** of where their data lives and who can reach it.

These requirements exist for a reason. When patient information is scattered across cloud services, third-party servers, and shared infrastructure, the risk of exposure grows — not just from external attackers, but from internal misuse, accidental sharing, and vendor-side incidents outside the healthcare provider's control. HIPAA's framework is designed to ensure accountability at every point in the chain.

reMarkable fails to meet this framework at multiple levels simultaneously.

## The BAA Problem: The Foundational Compliance Gap

The most fundamental issue with reMarkable is simple and unambiguous: **reMarkable does not offer a Business Associate Agreement.**

This is not a minor paperwork gap. In the absence of a BAA, any healthcare professional using reMarkable to write, store, or review PHI is in direct, documentable violation of HIPAA. It doesn't matter how carefully they use the device. It doesn't matter how the data is encrypted. The legal relationship between the covered entity and the tool vendor has not been formalized, and HIPAA requires that it be.

reMarkable's own documentation and terms of service make no mention of HIPAA compliance, healthcare-specific data handling, or BAA availability. The company designed the product for the general productivity market, not for regulated healthcare use. This isn't a criticism of reMarkable as a company — it's simply a description of what the product is and what it isn't.

For healthcare professionals evaluating tools, the absence of a BAA is the end of the evaluation. Everything else — the features, the interface, the experience — becomes irrelevant the moment you confirm that no BAA exists. Any clinical documentation that touches reMarkable is a compliance liability.

## Cloud Synchronization: Convenient for Consumers, Problematic for Clinicians

reMarkable's cloud infrastructure, the reMarkable Cloud, is central to how the device works. Notes sync across devices automatically. Backups are maintained on company servers. Files can be accessed through a browser interface from any computer. For a general consumer or a non-regulated professional, this is a genuine convenience. For a healthcare provider, it is a structural compliance problem.

HIPAA requires that covered entities maintain **exclusive data control** over PHI. When a device automatically syncs notes to third-party servers — even securely encrypted servers — that control is transferred. The healthcare provider no longer has sole authority over where their data lives or who can access it under the vendor's internal policies.

Even if reMarkable's cloud storage is technically secure, the data is accessible to the company's infrastructure team, subject to the company's data retention policies, and potentially subject to legal requests served to reMarkable as a company. From HIPAA's perspective, this is not data under the covered entity's control — it is data shared with a business associate, and without a BAA, that sharing is a violation.

There is also a subtler risk: **data residency**. HIPAA does not specify where data must physically reside, but covered entities are required to understand and document where their PHI lives. Notes synced to the reMarkable Cloud may traverse data centers in multiple jurisdictions. This creates compliance documentation challenges that are difficult to resolve without direct cooperation from reMarkable — cooperation the company has not offered in the form of healthcare-grade service agreements.

## Local Storage Alone Does Not Create Compliance

A reasonable response to the cloud sync concern is: *Can't I just disable cloud sync and use the device locally?*

It is technically possible to limit reMarkable's connectivity, but local storage alone does not create HIPAA compliance. This is a point that surprises many healthcare professionals when they first encounter it.

HIPAA compliance requires more than keeping data off the internet. It requires:

**Audit logs** — a verifiable record of who accessed which PHI, when, and from which device. reMarkable tablets do not generate the kind of audit trail that HIPAA requires. If a clinician accesses patient notes on their device, there is no system-level log that records that access in a retrievable, tamper-evident format.

**Access controls** — mechanisms to ensure that only authorized individuals can view PHI on the device. reMarkable has a device passcode, but it lacks the role-based access controls, session management, and identity verification features that enterprise HIPAA compliance requires.

**Breach notification readiness** — the ability to determine quickly and definitively whether a given piece of PHI was accessed or exposed in an unauthorized way. Without audit logging, this determination is essentially impossible on a reMarkable device.

**Physical safeguard documentation** — HIPAA requires covered entities to document physical safeguards for devices that contain PHI. For a portable, consumer-grade tablet, this creates its own complications. If the device is lost or stolen, the covered entity must be able to demonstrate that PHI on the device was protected. Without enterprise encryption management and remote wipe capabilities, this is difficult to document credibly.

In short, a reMarkable device with cloud sync disabled is still a reMarkable device — a consumer product without HIPAA-grade safeguards, without audit capabilities, and without any formal compliance framework.

## The Export Problem: How PHI Can Leak Without Anyone Noticing

One of reMarkable's most convenient features is its export capability. Notes can be exported as PDFs or images and sent via email, Google Drive, Dropbox, or other integrated services. For personal productivity, this is useful. For clinical documentation, it is a significant risk.

Every export pathway represents a potential PHI exposure point. Sending a clinical note as a PDF to a personal email account — even unintentionally, even in a moment of workflow convenience — is a reportable HIPAA breach if PHI is involved. Exporting a note to Google Drive or Dropbox without a valid BAA with those providers creates another layer of non-compliance.

The issue isn't that clinicians are careless. It's that reMarkable's export features are designed to be frictionless — to make it as easy as possible to share notes across services. In a consumer context, friction in sharing is a bug. In a clinical context, friction is often a feature. The guard rails that prevent accidental PHI exposure are exactly what a HIPAA-compliant tool needs to provide.

When a tool doesn't provide those guard rails, the burden of compliance falls entirely on the individual user. In a busy clinical environment — an emergency department, a therapy practice, a hospital administration office — that's an unrealistic expectation.

## What Multi-User Environments Require

reMarkable is fundamentally designed as a single-user device. This creates its own set of compliance challenges in any clinical environment with multiple staff members, shared devices, or team-based documentation workflows.

HIPAA requires covered entities to demonstrate **accountability** over PHI access. In a multi-user environment, this means knowing which staff member accessed which patient record, on which device, at what time. Without user-level audit logging and identity separation, this accountability is impossible to demonstrate.

Clinics, hospitals, and group practices often have shared devices and shared workflows. A device that doesn't support multi-user profiles, role-based permissions, or individual-level audit logging cannot function as a compliant documentation tool in these environments. It may work well as a personal productivity device, but personal productivity and clinical compliance are not the same problem.

The absence of multi-user management in reMarkable isn't an oversight — it reflects the product's design intent. reMarkable is a personal device for individual professionals. HIPAA compliance for clinical documentation requires institutional-grade controls that personal devices are simply not designed to provide.

## Vendor Dependency and the Risk of Data Control Loss

There is a longer-term risk with cloud-dependent tools that is worth examining: **vendor dependency**.

When your clinical documentation lives on a vendor's servers, your access to that data depends on the vendor's continued operation, continued policies, and continued relationship with you. If reMarkable changes its terms of service, experiences financial difficulty, modifies its cloud architecture, or makes pricing or feature changes, your access to your own clinical notes may be affected in ways you cannot control.

Under HIPAA, covered entities are required to maintain **ongoing oversight and control** over their PHI. A tool whose data architecture puts control in the vendor's hands is structurally at odds with this requirement. Even if the vendor is reliable and trustworthy today, the structure creates a dependency that HIPAA compliance doesn't accommodate.

This isn't a hypothetical risk. Consumer cloud services change policies, go offline, get acquired, and deprecate features. For personal notes, these are inconveniences. For clinical documentation — which may need to be retained for years and accessed reliably for patient care, billing, and legal purposes — they are serious operational and compliance risks.

## VaultBook: Why the Architecture Solves the Problem

Understanding why VaultBook is the right tool for healthcare professionals requires understanding one foundational design decision: **VaultBook makes zero network requests.**

Not "limited network requests." Not "optional sync you can disable." Zero. VaultBook runs entirely in your browser, processes everything locally on your machine, and sends nothing — not analytics, not license checks, not error reports, not any form of telemetry — to any server anywhere. Open your browser's developer tools while VaultBook is running and watch the network tab. It stays empty. Not quiet. Empty.

This design decision eliminates the entire category of compliance risk that makes reMarkable unsuitable for clinical use. When data never leaves the device, there is no third-party server to worry about. There is no BAA to negotiate because there is no vendor relationship involving your data. There is no cloud to fail, no terms of service to change, no data residency question to answer. The PHI in VaultBook is under your physical control, on your hardware, inside your chosen storage location, and nowhere else.

This isn't a promise or a policy — it's a structural reality. VaultBook *cannot* transmit your data because it has no mechanism to do so.

## Encryption That Actually Means Something

VaultBook's encryption model is worth examining in detail, because it represents a meaningful departure from how most tools handle security.

When a tool says "your data is encrypted," it often means: your data is encrypted on the vendor's servers, where the vendor holds the decryption keys. This is better than plaintext storage, but it means the vendor can theoretically access your data, can be compelled to provide it under legal order, and can expose it if their own security is breached.

VaultBook's encryption is different in a fundamental way. **The password never leaves your browser session.** When you encrypt a note, the AES-256-GCM encryption happens locally, using a key derived from your password, and the decrypted content is never stored anywhere persistent. When you close the tab, the decrypted content is cleared from memory. The encrypted data remains in your local folder, readable only with the correct password, with no server-side copy of that password anywhere on earth.

There is no "forgot password" flow in VaultBook. This sometimes surprises new users. But the reason there's no password recovery is that there's no server that stores your password — and therefore no mechanism to recover it. This is not a missing feature. It is proof that the encryption model is working as intended. If a password recovery option existed, it would mean a server somewhere knew something about your password. VaultBook's architecture makes that impossible.

For healthcare professionals, this encryption model is not just privacy-friendly — it is structurally aligned with HIPAA's requirement that PHI be protected by **real technical safeguards**, not just policy promises. The encryption is verifiable, local, and independent of any vendor's continued operation or continued good faith.

## The File That Holds Everything

One of the things that makes VaultBook's architecture uniquely suited to healthcare use is its physical structure. VaultBook is a single HTML file. You keep it on your machine. You point it at a folder where your data lives. Everything — notes, attachments, version histories, encryption keys derived at runtime — exists in that folder, under your control, in a location you chose.

This has an important implication for compliance documentation. When HIPAA requires you to demonstrate where your PHI lives, the answer is specific, verifiable, and entirely within your control: *It lives in this folder, on this machine, encrypted with this method.* There are no data centers to ask about, no vendor infrastructure to audit, no cross-regional server pathways to trace. The data is where you put it.

For backup and retention purposes — which HIPAA also addresses — VaultBook's folder-based storage means your backup strategy is your existing backup strategy. Whether you use Time Machine, an external drive, an encrypted cloud backup service with a BAA, or institutional backup infrastructure, VaultBook's data integrates naturally into whatever compliant backup system you already have.

## Every Attachment Becomes Searchable Knowledge

In clinical environments, documentation rarely consists of plain text alone. Notes reference images. Reports are attached as PDFs. Scanned referral letters arrive as image files. Lab results come as spreadsheets. The challenge of clinical documentation is not just capturing information — it is being able to retrieve it when you need it, across all the formats it arrives in.

VaultBook transforms every attachment into searchable content. Attach a spreadsheet and VaultBook reads every cell from every sheet. Attach a PDF — including a scanned PDF with no selectable text — and VaultBook reads the pages. Attach a presentation and it extracts slide text and speaker notes. Drop in a ZIP archive and it looks inside, reading the files and images within.

For a clinician building a patient record, this means that every document attached to a note becomes part of the searchable workspace. A lab result attached six months ago is as findable as a note you wrote this morning. A scanned referral letter from a specialist is indexed the same way as text you typed yourself. The information doesn't become lost simply because it arrived in an inconvenient format.

And because all of this indexing happens locally — because VaultBook is reading your files on your machine, not uploading them to a cloud service for processing — none of this content ever leaves your environment. The convenience of full-text search across all file types is delivered without any of the compliance risk that cloud-based document processing would create.

## AI-Powered Search Without Cloud Exposure

Search in VaultBook is not keyword matching. It is semantic, contextual, and adaptive — and it runs entirely on your device.

When you search for a concept rather than a specific phrase, VaultBook understands what you're looking for. If you search "follow-up after procedure," VaultBook finds notes that discuss post-operative care even if they don't contain those exact words. If you search for a patient by a half-remembered detail rather than a name, VaultBook surfaces what you actually need rather than returning nothing because the keyword wasn't exact.

This is significant in a clinical context for a practical reason: clinicians don't always remember exactly what they wrote. Memory works associatively, and clinical documentation is often written quickly, in varied language, across different sessions. A search system that only matches exact keywords creates unnecessary friction. VaultBook's semantic search means you can find what you documented even when you can't remember precisely how you documented it.

On Pro, VaultBook's search improves through use. When you upvote a result that was helpful, VaultBook remembers that signal. When a result wasn't what you needed, a downvote adjusts future ranking. Over time, the search system learns how your mind organizes information — what connections matter to you, what context is relevant — and the results get better with each use.

All of this happens locally. No search queries are transmitted anywhere. No usage patterns are analyzed on remote servers. The intelligence accumulates in your local workspace, for your benefit, entirely within your environment.

## Related Entries: A Knowledge Graph That Builds Itself

One of VaultBook's most powerful features for knowledge-intensive work — and clinical documentation is deeply knowledge-intensive — is the Related Entries system.

Open any note and VaultBook suggests other notes it believes are connected. These suggestions are based on content relationships that VaultBook has identified across your entire workspace. A note about a patient's treatment protocol might surface a related note from months earlier about a drug interaction you researched. A note from a case conference might connect to a note from a clinical reference you saved to VaultBook as an attachment.

What makes this feature particularly valuable is that it adapts to your judgment. Upvote a suggested relationship and VaultBook strengthens that connection in its understanding of your workspace. Downvote an irrelevant suggestion and it learns not to make that connection again. Over time, VaultBook builds a map of relationships between your notes — a knowledge graph — that reflects how *you* think about *your* information.

This is not something that a generic algorithm can produce. The connections between clinical concepts, case notes, and reference materials are highly contextual and personal. VaultBook's feedback-driven approach means the system becomes more useful the more you use it, without requiring you to set up tags, folders, or organizational schemes in advance.

## Built-In Tools That Stay Inside the Workspace

Clinical professionals, like all knowledge workers, frequently need to work with files in specific ways: merging PDFs, reviewing attachments, managing documents. The typical response is to open a web tool — a browser tab that asks you to upload a file to process it on a remote server.

For PHI, this is unacceptable. Uploading a clinical document to a random web tool for processing is a PHI exposure the moment the upload completes.

VaultBook includes 14+ tools built directly into the workspace — and all of them run locally. A PDF merger and splitter. An audio cutter and joiner. A file analyzer. A password generator. A Kanban board. An RSS reader. They are all inside VaultBook, they all process files on your device, and none of them transmit data anywhere.

For clinicians, the practical implication is significant: you can process, merge, split, and analyze clinical documents without ever sending them outside your local environment. The tools you need are available without the compliance risk that web-based tools create.

The Kanban board deserves particular mention. It doesn't require configuration. You don't create columns or set up a structure. You open it, and your existing labels and hashtags become columns automatically, with your notes sorted into cards. If you use labels for patient status, case type, or workflow stage, the Kanban view is already organized around those categories the moment you open it. Drag a card to a new column and the label on that note updates automatically.

It is the kind of feature that feels like it required extensive setup — and then you realize it required none.

## Version History: Every Revision, Always Recoverable

Clinical documentation has unique revision requirements. A note that was written, updated, corrected, or amended needs a complete and accurate history. HIPAA doesn't explicitly mandate note versioning for all documentation, but audit trails and documentation integrity are core compliance requirements, and the ability to demonstrate what a record said at a given point in time is frequently essential in clinical, legal, and billing contexts.

VaultBook maintains complete version histories for every note. Every edit creates a new version. Every version is stored locally alongside the current content. You can navigate back to any previous version and see exactly what the note said at that point in time.

This isn't just a safety net for accidental edits — though it is that too. It is a documentation integrity feature that supports the kind of auditability that clinical environments require. When you need to demonstrate what a record said before a correction was made, or when you need to reconstruct the sequence of updates to a patient note, VaultBook's version history makes that straightforward.

And because version histories are stored locally in the same folder as your notes, they are covered by whatever backup and retention policies you apply to the rest of your VaultBook data. There is no separate system to manage, no additional storage service to configure.

## The AI Suggestions Carousel: A Workspace That Orients You Instantly

One small feature in VaultBook has an outsized impact on the rhythm of clinical work: the AI Suggestions carousel.

When you open VaultBook, the carousel shows you the notes you tend to work with at that time of day or that day of the week, files you recently accessed, tools you recently used, and items with approaching deadlines. It doesn't require you to configure a schedule or set up reminders. It learns from your actual usage patterns and uses them to orient you at the start of each session.

In a clinical context, where a practitioner might be managing dozens of active cases and switching between administrative work, patient documentation, and reference materials throughout the day, this kind of intelligent orientation is not a luxury. It is a genuine time-saver. Instead of spending the first minutes of a session remembering where you left off, the workspace tells you.

And because this pattern learning happens locally — because VaultBook is observing your navigation patterns within your local workspace, not on a cloud server — none of this behavioral data leaves your device.

## Total Data Ownership: Retention, Pruning, and Long-Term Control

HIPAA's requirements around data retention are specific: clinical records must be maintained for a defined period (typically six years for HIPAA documentation, though state law often extends this for actual medical records). At the same time, data that no longer needs to be retained should be properly disposed of.

VaultBook gives you complete control over both sides of this equation. Because all data is stored locally in a folder you choose, your retention policy is your own. You decide how long to keep versions, when to prune older notes, and when to archive or delete specific content. There are no vendor-imposed retention policies to navigate, no minimum storage periods dictated by a cloud service's terms, no data that persists on a remote server because the vendor hasn't gotten around to deleting it.

This level of data sovereignty is, in practical terms, what HIPAA's control requirements point toward. The covered entity is responsible for PHI. For that responsibility to be meaningful, the covered entity needs actual control — not delegated control managed on their behalf by a third party, but direct, physical, operational control over where data lives and how long it persists.

VaultBook's folder-based architecture delivers that control as a structural reality, not as a feature you have to activate or a configuration you have to get right.

## The Peace of Mind That Comes From Structural Privacy

There is a qualitative dimension to privacy-respecting tools that is worth naming directly: peace of mind.

When you use a tool that makes zero network requests, you don't have to wonder whether your data is being transmitted. You don't have to check settings to verify that sync is disabled. You don't have to trust that the vendor is doing what they promised. You know, structurally, that the data cannot leave your device because the tool has no mechanism to send it anywhere.

For healthcare professionals, who carry a professional and ethical obligation to protect patient information — and a legal obligation under HIPAA — this structural certainty is genuinely valuable. It is the difference between privacy as a promise and privacy as a verifiable fact.

VaultBook's zero-network architecture is not a claim that requires trust. It is a design decision that can be verified by anyone with access to browser developer tools. The network tab stays empty. The data stays local. The certainty is complete.

## An Honest Comparison

When reMarkable is evaluated as a consumer productivity device, it deserves its reputation. It is an excellent e-ink tablet with a beautiful handwriting experience and thoughtful design. For professionals whose work doesn't involve regulated data — consultants, writers, executives, students — it is a genuinely compelling product.

But healthcare professionals are not evaluating tools in a general productivity context. They are evaluating tools in a compliance context. And in that context, the question is not *Is this a good tool?* but *Can this tool legally handle PHI?*

The answer for reMarkable is no. The absence of a BAA, the cloud-sync architecture, the lack of audit logging, the absence of access controls for multi-user environments, and the export pathways that create uncontrolled PHI transmission risks all point to the same conclusion: reMarkable was not built for HIPAA-regulated clinical use.

VaultBook was not designed specifically for healthcare — it was designed for anyone who needs a private, powerful, offline workspace. But the design decisions that make it exceptional for privacy-sensitive work — zero network requests, local-only storage, real AES-256-GCM encryption, version history, full-text search across all attachment types, and complete data ownership — map directly onto what healthcare professionals need from a documentation tool.

The result is a workspace that can handle PHI not because it has been HIPAA-certified (healthcare-specific audit logging and BAA infrastructure are handled at the organizational level), but because its architecture eliminates the structural compliance risks that make so many other tools unsuitable. There is no data to intercept because there is no data in transit. There is no server to breach because there is no server. There is no vendor controlling your retention policy because the data never left your possession.

## What Healthcare Professionals Should Look For

The reMarkable question is a useful example of a broader evaluation challenge that faces any healthcare professional shopping for productivity tools. The checklist that matters is not about features — it's about architecture.

**Does the tool make network requests?** If yes, what data is transmitted, to where, and under what terms? If the answer involves any PHI, a BAA is required.

**Is encryption client-side or server-side?** Client-side encryption — where the key never leaves the user's device — is structurally more secure than server-side encryption, where the vendor holds decryption capability.

**Who controls data retention?** If a vendor's terms of service govern how long your data is kept, that is a compliance risk. You need direct control over retention.

**Is audit logging available?** For multi-user clinical environments, this is a requirement. For individual practitioners, it is still valuable for demonstrating compliance to auditors and insurers.

**What happens if the vendor changes?** Data that depends on a vendor's continued operation, API availability, or pricing is data that is not fully under your control.

VaultBook satisfies each of these criteria. Zero network requests means no transmission to audit. Client-side AES-256-GCM encryption means no server-side key access. Local folder storage means retention policy is entirely yours. Version history provides a documentation trail. And single-file architecture means there is no vendor dependency — VaultBook.html works today the same way it will work in ten years, regardless of what happens to any cloud service.

## Conclusion: The Tool That Gets Out of the Way

The right documentation tool for a healthcare professional is one that lets them focus entirely on their work. It shouldn't require them to think about whether their notes are syncing somewhere they shouldn't be. It shouldn't create background anxiety about cloud exposure or vendor policy changes. It shouldn't generate compliance decisions at every step of the workflow.

VaultBook gets out of the way. You open the file. You work. Your notes are where you left them, encrypted with your password, on your machine, indexed and searchable across every format you've ever attached. The AI understands what you're looking for even when you can't remember exactly how you wrote it. The Related Entries system builds a picture of how your cases and references connect. The version history is there if you need to look back. The built-in tools are there if you need to process a file.

Nothing is transmitted. Nothing is stored remotely. Nothing depends on anyone else's infrastructure.

For healthcare professionals who have been searching for a documentation workspace that takes their compliance obligations as seriously as they do — a tool that is private by design rather than private by policy — the moment VaultBook opens for the first time has a particular quality to it.

It's the moment the anxiety goes away.
