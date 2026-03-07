---
title: "Our Security Philosophy: Why VaultBook Will Never Add Cloud Sync"
description: "This is not a product announcement. It is an explanation of a permanent architectural commitment - why VaultBook is designed the way it is, what we believe about privacy and software, and why we are certain that cloud sync will never be part of what VaultBook is."
date: 2026-07-31 17:00:00 -0600
cover: /assets/img/feature-screenshot-placeholder.svg
---

We want to be direct about something before this article begins: we are aware that cloud sync is the most-requested feature in VaultBook's feedback channels. We see it in every survey. We hear it from users who otherwise love the product and want to access their vault from a second device without managing a folder. We understand the request completely and we take it seriously as a signal about what people need.

And we are not going to add it.

This article explains why - not as a defensive response to feature requests, but as a genuine account of the philosophy that produced VaultBook's architecture in the first place. We think the reasoning is interesting, and we think users who rely on VaultBook for sensitive professional and personal material deserve to understand the commitments underneath the product they are trusting.

This is the security philosophy that guides everything we build.

<!--more-->

## What Cloud Sync Actually Does

Before explaining why we will not add cloud sync, it is worth being precise about what cloud sync actually is at a technical level - because the popular understanding of it, shaped by how cloud applications describe themselves in their marketing, obscures the most important facts.

When a note-taking application adds cloud sync, it establishes a continuous connection between the application running on your device and a server infrastructure operated by the application company. Every note you create generates a network request carrying the note's content to that server. Every edit you make generates another request. The server stores your notes in a database it controls, processes them through its own software, and makes them available for retrieval when you connect from another device.

This is not a description of something unusual or sinister. It is a description of how software works when the primary value proposition is access-from-anywhere. The server is the feature. Without the server, there is no sync.

What the server creates, as a necessary consequence of the architecture, is a third party in the relationship between you and your notes. That third party - the application company and its infrastructure partners - receives, stores, and processes the content of your notes. It exists between you and your data. And that existence creates a set of exposures that do not exist when your notes are a folder on your device:

**Legal process exposure.** A server is a legal target. Governments can serve search warrants or subpoenas on the company operating the server without notifying you in advance. The company is legally obligated to respond. Whatever your notes contain - your correspondence with a source, your clinical assessment of a patient, your attorney-client analysis, your financial strategy, your personal journal - becomes accessible to any jurisdiction with authority over the company or its infrastructure.

**Breach exposure.** A server containing the notes of thousands or millions of users is an attractive target for sophisticated attackers. A successful breach exposes every user's notes simultaneously. The security of your notes is no longer a function of your own device's security; it is a function of the security of a shared infrastructure that you did not design, cannot audit, and cannot control.

**Commercial exposure.** The company operating the server has ongoing commercial interests. Those interests may, at some point, include monetizing the behavioral signals available in your notes - the topics you write about, the frequency of your writing, the vocabulary you use. They may include training AI models on user content. They may include responding to advertising partnerships that involve sharing aggregate behavioral data. The content of your notes, once on a server, exists within the commercial reality of the company that owns that server.

**Acquisition and change exposure.** Companies are acquired. Products are discontinued. Terms of service change. A privacy commitment made by one management team is not binding on the next one. The notes you store in a cloud application today are subject to whatever the company that owns that server decides to do with them tomorrow.

None of these exposures require bad faith from the application company. They are structural properties of an architecture in which a third-party server holds your data. The company can have excellent intentions and strong privacy policies and still create all four of these exposure categories simply by building a cloud sync system.

There is a fifth exposure that is less often discussed: **infrastructure dependency chain exposure.** Cloud applications do not operate their own servers end to end. They run on cloud infrastructure providers - AWS, Google Cloud, Azure - and they typically use third-party services for authentication, email, analytics, error tracking, payment processing, and the supporting systems of a software business. Each of those providers is an additional party with access to some layer of the infrastructure that handles your data, and each is a separate legal target, a separate potential breach surface, and a separate entity whose terms of service and privacy practices you are implicitly accepting when you use the application. A cloud note-taking application's privacy policy covers that company's own practices. It does not fully describe the practices of every provider in the infrastructure chain. When your notes are a folder on your device, the infrastructure dependency chain is: you, your device, and the operating system. That is the complete list.

## How VaultBook's Libraries Stay Local

The no-cloud-sync commitment is one expression of a broader architectural principle: wherever a decision exists between loading something from a remote server and bundling it locally, VaultBook chooses local. This principle extends all the way down to the JavaScript libraries that power the application's most capable features.

Every library VaultBook uses is bundled in a `./libs/` folder that lives alongside the application file on your device. This includes Tesseract.js for OCR, pdf.js and pdf.worker.js for PDF text extraction, mammoth.js for DOCX processing, SheetJS for XLSX and XLSM parsing, JSZip for ZIP and PPTX contents, MSGReader for Outlook MSG files, marked.js for Markdown rendering, turndown.js for HTML-to-Markdown conversion, and lunr.js for local full-text indexing. None of these are loaded from a CDN. None of them make outbound requests to their maintainers' servers when they initialize. They run, fully and completely, from the local `libs/` directory.

The reason this matters is that CDN-loaded libraries create a network dependency that can be weaponized. A CDN operator can, in principle, modify the library being served. A network-level observer can see which CDN endpoints your browser contacts and use that information to fingerprint which application you are using and which features you are accessing. A CDN request is, by definition, a record of your usage on a third party's log server. By bundling all libraries locally, VaultBook eliminates this entire surface.

The practical consequence is equally significant: VaultBook's full feature set operates completely offline. Tesseract-based OCR on inline images and attached documents, pdf.js full-text extraction from attached PDFs, SheetJS cell-value indexing from XLSX attachments, PPTX slide text extraction via JSZip - all of these require their respective libraries to run, and all of them run from local files. There is no scenario in which a feature stops working because a CDN is unreachable or because you are on an airplane.

When VaultBook does make network requests - and there are exactly three situations in which it does - those requests are user-initiated and explicit. The Save URL to Entry tool fetches a URL that the user has typed. The RSS Reader fetches the feed URLs that the user has configured. The Wikipedia lookup is triggered by a user action. In every case, the user is the one deciding to reach out to the internet, for a specific purpose, at a specific moment they chose. There is no background sync, no telemetry beacon, no library update check, no analytics ping. The network is quiet unless you tell it to move.

## The Save Pipeline and Data Minimization

The local-first commitment shapes not only where data is stored but how the save pipeline is designed - and the design reveals something important about the philosophy of minimization that underlies it.

When you save a note in VaultBook, two things are deliberately kept separate. The `repository.json` file - the index of your vault, storing note titles, labels, creation and modification timestamps, page assignments, and structural metadata - is kept as lean as possible. The `buildRepoPayload()` function that serializes this file explicitly strips out note body content, version history snapshots, and binary blob data before writing. The comment in the source code says it plainly: "Keep repository.json tiny." The intent is that the index file, which is read on every vault connection and written on every autosave cycle, carries only what it needs to carry. Body content lives in individual `details-{id}.md` sidecar files. Attachments live in the `attachments/` directory. Version snapshots live in the `versions/` directory.

This separation is data minimization applied at the architecture level rather than the policy level. Each file in the vault contains only what belongs to it. The repository index does not accumulate body content. The sidecar files do not contain attachment binaries. The attachment files do not duplicate body text. The result is a vault folder where the structure of the data reflects its nature, and no file carries more than it needs to.

The autosave system that writes `repository.json` runs every 60 seconds when the `dirty` flag is set - when something in the vault state has changed since the last save. The `__saving` guard prevents concurrent writes that could corrupt the file. The sidecar file for a note's body content is written before `repository.json` is updated, ensuring that if the session ends unexpectedly between the two writes, the body content is not lost. These are the concerns of a save system designed around file integrity on a local device, not the concerns of a sync system designed around conflict resolution between multiple connected clients. The architecture is built for the use case it serves.

The version history that runs alongside this system stores per-entry snapshots in the `versions/` directory with 60-day retention. Each snapshot is a file. The pruning that removes snapshots older than 60 days runs as a local cleanup pass. There is no server-side retention policy to negotiate, no storage quota imposed by a cloud vendor, no question about whether old versions are truly deleted or merely hidden from the user interface while remaining on a remote server. The versions directory contains the versions. Deleting a file from it deletes that version. The relationship between the data and its storage is direct and unmediated.

## Why End-to-End Encryption Does Not Resolve This

The most common objection to the argument above is: "But what about end-to-end encryption? If my notes are encrypted before they reach the server, none of this matters."

This objection is well-intentioned but incomplete, and it is worth addressing carefully because several privacy-focused note-taking applications use end-to-end encryption as their answer to the concerns we have described. We have deep respect for those applications and for the genuine privacy improvements that E2EE provides over unencrypted cloud storage. But E2EE-with-sync is not the same as local-first, and the differences matter.

End-to-end encryption addresses one of the four exposures we described: it significantly reduces breach exposure for note content, because a server that holds only ciphertext cannot expose plaintext note content even if it is compromised. This is meaningful and important.

It does not address the other three.

**Metadata survives encryption.** Even when note content is encrypted, the metadata of your note-taking activity travels to the server in plaintext: which notes were created when, how frequently you edited which notes, the timestamps of your activity, the size of your notes, and often the structure of your organizational hierarchy. This metadata can be highly revealing. Knowing that someone created a new note and edited it twenty-three times over a three-day period tells you something about the significance of what they were working on, even without knowing what they wrote. Legal process can compel disclosure of this metadata. Breach exposure still exists for the metadata layer.

**Key management creates its own exposures.** End-to-end encrypted cloud systems require a key management infrastructure. Your encryption keys need to be stored somewhere accessible from multiple devices - otherwise, there is no sync. The way most E2EE applications handle this is to derive keys from your master password and store a wrapped version on the server, or to use a dedicated key escrow service. This is cleverly designed, but it means the security of your encryption is ultimately bound to the security of the key management system. If that system is compromised - through a breach, through a legal order compelling key disclosure, or through a design flaw - your encrypted content may become decryptable.

**The server still exists as a legal target for the ciphertext.** An attorney, investigator, or government agency with appropriate legal authority can compel the cloud company to preserve and produce the encrypted data, even without being able to read it immediately. The existence of the data on the server creates a legal exposure that does not exist when the data never leaves your device.

**Policy can change.** An E2EE cloud application can decide to change its encryption architecture, its key management system, or its privacy commitments. The promise of end-to-end encryption in a cloud system is contingent on the company maintaining that commitment over time. A local file on your device is not contingent on anyone's continued commitment to anything.

We are not arguing that E2EE cloud note-taking applications are bad. We are arguing that they solve a subset of the privacy problem, and that the full solution - the one that eliminates all four exposure categories rather than addressing one of them - is local-first architecture with no server in the loop at all.

## The Architecture We Built Instead

VaultBook's architecture was designed from the start to eliminate, rather than mitigate, the exposures that cloud sync creates. Understanding how that architecture works helps explain why adding cloud sync would not be an extension of what VaultBook is - it would be a fundamental change to what VaultBook is.

When you connect VaultBook to a vault folder, the application calls `window.showDirectoryPicker()` - the browser's native folder picker API. The browser asks your operating system to present a folder selection dialog. You select a folder on your local device. The browser grants VaultBook read and write access to that folder. This is the entire connection infrastructure. There is no server. There is no account. There is no authentication call to a remote system. There is no session token. There is no user identifier transmitted anywhere.

From that moment, every read and every write is a File System Access API operation on your local folder. When you create a note and save it, `saveRepoOnly()` calls `fh.createWritable()` on the local file handle and writes `repository.json` to your folder. When you save a note with substantial body content, the body is written to a `details-{id}.md` sidecar file in the `attachments/` subdirectory of your vault folder. When VaultBook creates a version history snapshot, it writes a file to the `versions/` subdirectory. When the OCR system indexes an inline image, it writes the recognized text to the `index/` subdirectory.

Every operation in this pipeline writes to a file on your device. The autosave timer - which runs every 60 seconds and writes `repository.json` if the dirty flag is set - writes to your device. The `__saving` guard that prevents concurrent writes is coordinating access to local files, not to a network endpoint. There is no network endpoint. The architecture does not have one.

This means that the network tab in your browser's developer tools, while you are using VaultBook, does not grow. No requests appear for note creation, note editing, note retrieval, search, version history, encryption, or any core note-taking operation. You can verify this yourself in under two minutes with the browser's developer tools open. What you will see is the local file loads when the page opens, and silence thereafter for everything that matters.

Adding cloud sync to this architecture would not be writing a new feature in an existing codebase. It would be introducing a new fundamental component - a server, an account system, an authentication layer, a sync protocol, an API - that does not currently exist anywhere in VaultBook's design. Every property that makes VaultBook's privacy architecture what it is would need to be renegotiated against the requirements of that new component.

We have thought about this carefully. The answer is no.

## The Threat Models We Are Designed For

Different tools are designed for different threat models - different assumptions about who might try to access your notes and through what vector. Understanding VaultBook's threat model makes the no-cloud-sync commitment make more sense as a design decision rather than an ideological position.

VaultBook is designed for users whose threat model includes at least one of the following:

**Professional confidentiality obligations.** Attorneys working under attorney-client privilege. Therapists and clinical social workers bound by HIPAA and professional ethics codes. Journalists protecting source identities. Medical professionals handling patient health information. Financial advisors managing client data under regulatory frameworks. For all of these users, the confidentiality of their notes is not a personal preference - it is a professional and legal obligation. A tool that stores their notes on a third-party server is not compliant with that obligation regardless of the server's security properties, because the obligation requires that the data be under the professional's control.

**Source and whistleblower protection.** Journalists, researchers, human rights investigators, and anyone who receives sensitive information from people taking personal or professional risk by providing it. For these users, the threat model includes sophisticated, well-resourced adversaries - corporations with legal teams, governments with surveillance authorities - who could potentially compel disclosure from a cloud vendor. The only reliable protection for source relationships is architecture that does not create a compellable server-side record in the first place.

**Personal privacy in high-stakes contexts.** People going through divorce proceedings, custody disputes, employment terminations, or other adversarial processes where their personal communications and records could become subject to legal discovery. People who write about topics that might be sensitive in their jurisdiction or professional context. People who simply believe, as a matter of principle, that the content of their private thoughts and records belongs to them alone.

**Long-term data sovereignty.** People who have experienced the anxiety of a cloud application shutting down, changing its terms, or being acquired, and who have decided that the ongoing existence and accessibility of their notes should not depend on the continued goodwill of any company. People who want to know that in twenty years, their notes will still be there, in plain files, on a device they control, readable with any text editor.

For all of these users, cloud sync is not a feature they want with some privacy caveats. It is incompatible with why they are using VaultBook at all.

This does not mean cloud sync is wrong for everyone. For users whose notes contain no professionally sensitive material, who face no adversarial legal process, and who prioritize access-from-anywhere over local control, cloud sync is a reasonable choice and there are many well-designed applications that offer it. VaultBook is not designed for every use case. It is designed deeply and specifically for the use cases where local control is not a preference but a requirement.

## What Local-First Enables

The no-cloud-sync commitment is not only about what we prevent. It is also about what it enables - the properties that become possible specifically because there is no server in the architecture.

**Per-entry encryption with local key management.** VaultBook's encryption system uses AES-256-GCM with PBKDF2 key derivation at 100,000 iterations, a random 16-byte salt, and a random 12-byte IV, all implemented through the browser's Web Crypto API. The key derivation and all cryptographic operations happen locally. The encryption password exists only in your memory and in your browser's session cache - it is never transmitted anywhere. The ciphertext is written to your local vault folder. There is no key escrow, no key management service, no master password recovery mechanism. If you forget your entry password, that entry's content is not recoverable - not by us, not by anyone. This is only possible because there is no server that needs to participate in key management for sync purposes. The moment you add sync, you need a key management infrastructure. The moment you have a key management infrastructure, you have a new attack surface and a new set of policy dependencies.

**Version history without a cloud database.** VaultBook maintains per-entry version snapshots with a 60-day retention window (`VERSION_TTL_MS = 60 * 24 * 60 * 60 * 1000`) stored in the `versions/` directory of your vault folder. These snapshots are files on your device. The version history UI reads from those files locally. The pruning that removes snapshots older than 60 days runs locally. The entire version control system has zero server involvement. You own every version of every note you have ever written. The history is yours to keep, copy, or delete as you choose.

**A vault that is just a folder.** The VaultBook vault folder contains: `repository.json` for note metadata and page structure, `details-{id}.md` sidecar files for note bodies, the `attachments/` directory for attached files, the `index/` directory for OCR and attachment index text, and the `versions/` directory for version history. Every one of these is a standard file or directory that can be read with any text editor or file browser. Copying the folder to a backup drive migrates the vault. Moving the folder to a new device moves the vault. The folder can be opened from an external drive on any computer that has VaultBook.html. There is no export step, no migration tool, no account transfer, no vendor involvement. The vault is yours in the most literal sense of the word: it is a folder on your storage device that you control completely.

**Zero-telemetry operation.** Because VaultBook has no server infrastructure for sync, it has no backend to send telemetry to. There is no usage analytics. There is no feature adoption tracking. There is no behavioral data collection that tells us which notes you write, how often you open the application, which features you use, or anything else about how you use the product. The survey data in previous articles on this blog came from users who chose to respond to a voluntary survey, not from server-side usage logs. We genuinely do not know what you do in VaultBook. We designed it that way.

**Full offline operation.** VaultBook works on an airplane, in a remote location, on a device that has never been connected to the internet, and in any context where network access is unavailable. Not "works offline with local cache" - works offline because it has never required network access for any core operation. The offline capability is not a mode or a fallback. It is the default state of the application.

## What This Means for Features Users Have Asked For

The no-cloud-sync commitment has specific implications for some of the features that users request alongside cloud sync - features that depend on a server being in the architecture.

**Multi-device access** is the most common request paired with cloud sync. Users want to open their vault on their phone, their work computer, and their home machine. We understand this desire completely. Our answer is that VaultBook's vault folder is designed to be accessed from any device by putting the folder somewhere all those devices can reach - a local network share, an external drive, or a file synchronization service that the user controls and configures. This is a different model from cloud sync: the user manages the folder placement rather than delegating it to VaultBook's infrastructure. It requires more configuration, and we recognize that is a real cost. The benefit is that the sync layer remains entirely under the user's control, operating under the user's chosen security model, rather than under ours.

**Automatic mobile access** follows the same logic. A native mobile application that syncs to VaultBook's servers would require us to build server infrastructure, account management, and a sync protocol - everything that makes VaultBook's privacy properties what they are would be contingent on the security of that infrastructure. VaultBook running in a mobile browser with a vault folder accessible via a home server or network share is a different experience from a native app, but it is the experience that maintains the architecture's integrity.

**Real-time collaboration** is not something VaultBook will add in its current form. Collaborative editing requires a coordination server. A coordination server means a third party in the loop. That is not compatible with the architecture we have built.

We say these things not to be dismissive of the requests - they reflect genuine needs that we take seriously - but to be honest that the no-server commitment has real costs alongside its real benefits. Users who need these features as primary requirements should evaluate whether VaultBook's architecture serves their use case. We would rather be honest about the trade-off than add features that undermine the foundation of what users who rely on VaultBook for sensitive material are trusting.

## Verification Without a Server: How the Architecture Proves Itself

One of the questions we receive from technically curious users is: if VaultBook makes no server calls, how does license verification work? It is a fair question, because license verification is typically the most obvious reason a local application might "phone home" - to confirm with a central server that the license key is valid.

VaultBook does not do this. The license verification that runs when you connect to a vault folder reads a `license.json` file from the vault root and verifies its signature locally using the Web Crypto API's `crypto.subtle.verify()` function with RSA-PSS/SHA-256 against a public key that is embedded directly in the application file. The verification is a mathematical operation performed entirely on your device between the license file and the embedded public key. There is no server request. There is no "call home." The license is either cryptographically valid against the embedded public key or it is not, and the check is complete before any note data is accessed.

This design choice - cryptographic verification with an embedded public key rather than server-side validation - reflects the same philosophy that underlies the rest of the architecture. A server-side license check would establish a channel between your device and a server that activates every time you open your vault. It would create a usage log. It would create a dependency on network availability. It would mean that using VaultBook in an air-gapped environment, on a device without internet access, or in a jurisdiction where the licensing server might be unreachable would require special handling. The local cryptographic verification eliminates all of these issues simultaneously.

This is also, incidentally, the kind of detail that distinguishes a privacy philosophy applied consistently throughout a product from a privacy position applied selectively to the most visible features. It would have been considerably simpler to implement license verification as a server call. Choosing the more complex local implementation because it is more consistent with the architecture's values is the kind of decision that users cannot see directly but can verify: the network tab remains quiet even during vault connection, even during license verification, even at every moment that a conventional application would establish server contact.

The same local-intelligence design governs the behavioral features that make VaultBook feel attentive to how you actually work. The AI Suggestions panel that learns your weekday reading patterns and surfaces relevant entries on the matching days of the week builds its model from a read log stored in `localStorage` on your device. The search history that surfaces past queries and corrects near-miss searches stores up to 200 queries in `localStorage`. The vote records that train Q&A and Related Entries results over time are persisted to the vault's `repository.json` alongside your notes. The recently read list that lets you pick up where you left off across sessions is stored in `localStorage`. None of this behavioral data leaves your device. The intelligence VaultBook accumulates about how you work is yours alone - a model of your habits that exists only in your browser and in your vault folder, not in any profile on any server.

## The Principles Underneath the Architecture

Architecture is downstream of philosophy. The specific technical decisions in VaultBook - the File System Access API instead of IndexedDB or cloud storage, the per-entry encryption with no key escrow, the local Tesseract instance instead of a cloud OCR API, the local library files instead of CDN-loaded dependencies - all follow from a set of underlying beliefs about what software should do and what it should never do.

**Your data belongs to you.** Not in the sense of a legal provision in a terms of service, but in the literal sense of physical custody. A note you write should be on your device, under your control, readable to you without anyone else's infrastructure being operational. This is what "belongs to you" means if it means anything. Software that stores your data on its servers has custody of your data. You have access to it through the software, contingent on the software continuing to operate and the company continuing to honor its commitments. That is not ownership. It is tenancy.

**Privacy is an architecture, not a policy.** A privacy policy is a legal commitment about how existing data will be handled. It is meaningful and worth having. But a privacy policy can be changed, and a company that has your data can be compelled, acquired, or compromised in ways that supersede any policy. Architecture is different. An architecture that does not transmit your data to a server does not need a policy prohibiting that transmission, because the technical mechanism for the transmission does not exist. VaultBook's privacy guarantee is not that we promise not to misuse your data. It is that we have built an application in which there is no data to misuse, because the data never reaches us.

**Trust should be verifiable.** We encourage every VaultBook user to open the browser's Network tab while using the application and watch what happens. During a normal working session - creating notes, editing them, running searches, encrypting entries, managing attachments - the network tab is quiet. No requests leave the browser for any core operation. The empty network tab is the verifiable evidence of the privacy guarantee, not a statement we ask you to take on faith. This verifiability is itself a design goal. We believe tools that handle sensitive information should be inspectable, and VaultBook is.

**Local intelligence is better than cloud intelligence for private tools.** VaultBook's AI Suggestions learn from your reading patterns, which entries you access on which days, what you work on before what. The Related Entries panel builds a model of conceptual connections across your vault. The search vote system trains result quality to reflect your specific research domain and vocabulary. None of this requires sending your behavioral data to a server. All of it is computed locally, from behavioral metadata stored in your browser's localStorage, against content stored in your vault folder. A tool can be intelligent without being extractive. Local computation over local data is not a second-best substitute for server-side intelligence - it is better for private tools, because the intelligence stays where the data is.

**Permanence matters more than convenience.** A vault that exists as a folder on your device will still exist in twenty years, on a device of your choosing, readable with any software that can open a text file, regardless of what happens to VaultBook as a company. A vault that exists on a cloud service will exist as long as the service exists, as long as your subscription is current, as long as the company decides to maintain backward compatibility with your data format, and as long as the legal and commercial environment around the company remains stable. We think the twenty-year guarantee of a local folder is worth the setup overhead of managing a folder.

## The Commitment

The title of this article is not an aspiration. It is a statement of permanent architectural commitment.

We will not add cloud sync because cloud sync requires a server, and a server means a third party in the relationship between you and your notes, and a third party creates exposures - legal, commercial, breach, and policy - that cannot be engineered away regardless of how much encryption is applied around them. The only way to eliminate those exposures is to eliminate the server. We eliminated the server.

We will not add optional cloud sync as an opt-in feature, because adding the infrastructure for cloud sync changes what VaultBook is as a product. It means maintaining server infrastructure, an account system, and a sync protocol alongside the local-first architecture. The security of the entire product becomes contingent on the security of that infrastructure. The privacy properties of the local-first path become conditional rather than absolute - contingent on users choosing the local option rather than the cloud option. The moment optional cloud sync exists, VaultBook is a different kind of product than the one that exists today.

We will not add cloud sync through an acquisition or partnership that handles the server infrastructure on our behalf, because the identity of the server operator does not change the structural properties of having a server in the loop. A third party's server is still a third party's server regardless of how it is branded.

What we will continue to do is build the local-first product more deeply. Better search, driven by smarter relevance scoring and better training mechanisms. More capable deep attachment indexing as new file formats become relevant. More tools that serve the professional workflows of the people who rely on VaultBook. Better multi-device workflows that work within the local-first architecture rather than circumventing it. More powerful organization features. A richer timetable and scheduling integration. More expressive encryption options.

All of it local. All of it yours. None of it on our servers.

That is the commitment. It is not a feature we are withholding until the business case is right. It is the product we have decided to build, and it is the product we will keep building.

## Why We Wrote This

The strategy value of this kind of post is that it positions us as thinkers rather than just sellers. That is true, and we are aware of it. But the more important reason we wrote it is that the users who depend on VaultBook for genuinely sensitive material - for clinical notes, for source communications, for legal work, for research that carries personal risk for the people whose information is in the notes - deserve to understand what they are trusting.

When a therapist encrypts a clinical note in VaultBook, they are trusting not just that today's version of the product handles their data correctly, but that the architecture makes it impossible for the data to be handled incorrectly. When a journalist documents a source relationship in an encrypted entry, they are trusting that the architecture eliminates the server-side record rather than protecting it. When an attorney saves client-adjacent analysis to a local vault, they are trusting that the tool was built with their professional confidentiality obligations as a first-order design constraint rather than a box to check.

Those trusts require more than correct behavior from today's product. They require a commitment about what the product will never become. That is what this article is.

VaultBook is a personal digital vault. Private by architecture, permanent by design, and entirely under your control - today and for as long as it exists.

We will not change that.
