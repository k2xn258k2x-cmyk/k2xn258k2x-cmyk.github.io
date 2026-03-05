---
title: "Where Should You Keep Sensitive Notes? Why VaultBook Is the Safer, Smarter Choice"
description: "The question of where to store sensitive notes is deceptively simple. Most people reach for the nearest convenient tool and never fully examine what that choice means for their privacy. Here is what a careful examination reveals."
date: 2024-10-08 17:00:00 -0600
cover: /assets/img/feature-screenshot-placeholder.svg
---

Most people make the decision about where to store their sensitive notes the same way they make most low-stakes decisions: by reaching for the nearest available tool that seems roughly appropriate for the task. The note app already open on the phone. The cloud drive that everything else goes to. The encrypted archive tool a colleague once recommended. The lock feature in the app they already use for everything else.

These choices are made quickly, without much deliberation, because storing a note does not feel like a significant decision. It feels like an administrative action - a small logistical step that precedes the actual work of writing and thinking and remembering. The question "where should I keep this?" is usually answered by habit and convenience rather than by careful consideration of what the answer means for the note's security over time.

But for certain categories of notes, the question matters enormously. Notes that contain protected health information. Notes that document confidential client relationships. Notes that hold financial information that is not public. Notes that contain research findings whose premature disclosure could cause harm. Notes that hold personal information - passwords, account details, private correspondence - whose exposure would have direct consequences for the writer or the people they involve.

For these notes, the choice of storage is not an administrative detail. It is a privacy decision that determines who can access the information, under what circumstances, and for how long. Making that decision by habit and convenience - reaching for the cloud drive that everything else goes to, using the lock feature in the app that is already open - is making a significant privacy decision without recognizing that is what is being done.

VaultBook is built for people who have recognized that their sensitive notes require a considered privacy decision - and who want the tool whose architecture makes the right answer as simple as possible. This article examines what the right answer looks like, why the common alternatives fall short in specific and important ways, and why VaultBook's architecture provides something that no cloud-based or semi-local alternative can match.

<!--more-->

## Why "Good Enough" Storage Is Not Good Enough for Sensitive Notes

The phrase "good enough" is a reasonable standard for most storage decisions. Good enough for storing work documents. Good enough for keeping project files organized. Good enough for holding the notes from last week's meeting that will never be referenced again.

It is not a reasonable standard for sensitive notes, because the harm from inadequate storage of sensitive information is asymmetric and delayed. The harm from using a cloud service that exposes your grocery list is zero. The harm from using a cloud service that exposes your client's medical history, your legal strategy, your financial position, or your research findings is potentially severe - and it may not manifest immediately. Data exposed in a breach today may be used in ways that harm the subject months or years later. A privacy violation discovered in a compliance audit may trigger consequences that unfold over an extended period.

This asymmetry means that the acceptable storage standard for sensitive notes is not the same as the acceptable standard for ordinary notes. The ordinary standard - convenient, functional, reasonably secure - is appropriate for content whose exposure would cause no significant harm. For content whose exposure could cause significant harm, the standard must be higher: not just reasonably secure, but structurally private in ways that do not depend on the continued good faith and security practices of a third party.

Understanding why this higher standard is necessary requires examining what the common alternatives actually provide, as opposed to what they appear to provide.

## Cloud Notes: The Gap Between Appearance and Reality

Apple Notes, Google Keep, Microsoft OneNote, and similar cloud note applications are the default storage choice for most users because they are already present on devices people use for everything else. They are fast, convenient, well-designed, and capable of handling a wide range of content including text, images, attachments, and links. They synchronize automatically across devices, which makes the notes always available wherever the user is working.

For ordinary notes, these are genuine advantages. For sensitive notes, the synchronization that makes them convenient is the source of their fundamental privacy limitation.

When a note is written in Apple Notes, it synchronizes to iCloud. iCloud is a cloud service operated by Apple on Apple's infrastructure. Apple has the technical ability to access the content stored in iCloud - this is how iCloud can provide password recovery, account recovery, and support assistance that involves accessing account content. Apple encrypts data in transit and at rest, which protects it from external attackers who might breach their infrastructure, but does not protect it from Apple itself.

The practical implications are specific and documented. Apple, like other major cloud providers, responds to legally valid requests from government agencies and law enforcement. When properly served with a court order or other legal process, Apple produces user data from iCloud. This is not a theoretical risk - it is a routine occurrence that Apple reports in its transparency reports. The content of iCloud Notes is among the categories of data that can be produced.

For users whose notes contain content that could become relevant to legal proceedings - a healthcare professional's patient notes, a lawyer's case documentation, a financial professional's client records - this means that "stored in iCloud Notes" is not the same as "privately held." The notes are held by Apple on Apple's terms, subject to Apple's response to legal process and Apple's own privacy policies, which can change over time.

Google Keep operates under similar architecture and similar implications. Google's infrastructure has access to note content. Google responds to legal process. Google's privacy policies govern what happens to the data over time. The convenience of Google Keep comes bundled with these structural realities, whether or not the user is aware of them when they choose to store sensitive content there.

The lock features that both Apple Notes and Google Keep offer - the ability to password-protect specific notes - address one specific threat: casual unauthorized access by someone with physical access to an unlocked device. They do not address the structural issue that the notes are stored on the vendor's servers and accessible to the vendor.

## Encrypted Archives: The Usability Trap

7-Zip, VeraCrypt, Cryptomator, and similar encryption tools represent a different approach to sensitive note storage - one that takes the encryption seriously and provides cryptographic protection that is genuinely strong. For users who need to store sensitive files and access them infrequently, these tools can be appropriate.

The problem for the specific use case of sensitive notes - content that is actively worked with, regularly updated, searched for and retrieved, organized and connected - is the workflow friction that these tools introduce.

VeraCrypt, for example, provides full-disk or container-based encryption that is cryptographically serious. To work with files in a VeraCrypt container, the user mounts the container, works with the files, and then dismounts the container when done. This workflow is acceptable for files that are accessed once and then closed. It is burdensome for a knowledge base that is actively used throughout a workday - a note system where the user might open and close entries dozens of times, search across the archive, follow a reference from one note to an attached file, return to a previous note, and so on.

The friction of the encrypt-mount-work-dismount cycle is not just a usability inconvenience. It creates behavioral pressure that leads users to leave containers mounted for extended periods rather than dismounting between each use - which reduces the security benefit significantly. A mounted VeraCrypt container is accessible in plaintext to anyone who accesses the filesystem. The encryption protects against someone who obtains the container file while it is not mounted. It does not protect against someone who accesses the machine while the container is mounted and the user has stepped away.

7-Zip encrypted archives have similar usability limitations. They are good for creating an encrypted bundle of files that is transmitted or stored somewhere. They are poorly suited for an actively used knowledge base where individual files are frequently opened, edited, and closed.

Cryptomator is designed for cloud storage encryption - it encrypts files before they are uploaded to a cloud drive - which solves the cloud privacy problem but introduces the complexity of managing a Cryptomator vault alongside the cloud storage. It is a valid approach for users who need encrypted cloud storage, but it adds a layer of tooling and complexity that most users do not maintain rigorously over time.

None of these encryption tools provides the combination of strong privacy protection and genuine usability that sensitive notes in active use require. They represent a trade-off between security and usability that VaultBook's architecture was specifically designed to avoid.

## Plain Local Files: The Illusion of Privacy

Plain text files or Markdown files stored locally on a device have an appealing simplicity. No vendor. No cloud. No account. The files are yours, on your machine, with no external involvement.

The privacy limitation is that local storage without encryption provides protection only against remote access - against an attacker who would need to breach a cloud service to reach the files. It does not provide protection against someone who gains physical access to the device or the drive. A laptop that is lost or stolen, a device that is submitted for repair, a drive that is copied while the machine is temporarily unattended - in any of these scenarios, locally stored plain text or Markdown notes are immediately readable.

For most users, the likelihood of physical device compromise is lower than the likelihood of cloud service breach or legal process. But for users who work with genuinely sensitive content - clinical notes, legal files, financial records, proprietary research - the physical threat model is real enough to require protection. Devices are lost. Laptops are stolen. Drives are copied in circumstances that users do not anticipate.

Local files also have the search and organization limitations that make plain Markdown repositories inadequate as professional knowledge bases at scale. A few hundred Markdown files are manageable. A few thousand are not - not without a dedicated indexing and search infrastructure that most users do not build and maintain.

The combination of no encryption for physical threat protection and inadequate organizational capability for professional scale makes plain local files the right answer for a narrow set of use cases and the wrong answer for users who need both security and professional-grade knowledge management.

## The VaultBook Architecture: What It Actually Provides

VaultBook's privacy architecture is best understood by starting from what it does not do, because the list of what it does not do is what makes it structurally private rather than just privacy-promising.

VaultBook does not make network requests. Not when the application opens, not when a note is written, not when a file is attached, not when a search is performed, not when the application closes. There is no server to connect to, because there is no server. The application is a single HTML file that runs in a browser. It reads from and writes to a local folder. That is the complete infrastructure description.

VaultBook does not store passwords or encryption keys anywhere outside the active browser session. When you enter your password to unlock the workspace, the password is used locally to derive a decryption key, the content is decrypted in memory for the session, and when the session closes, both the password and the key are gone. There is no hash of your password on disk. There is no key escrow. There is no recovery pathway that requires any entity to have stored information about your credentials.

VaultBook does not run background services. There are no processes running on the operating system between sessions, no startup agents, no scheduled tasks, no system-level integrations that could be exploited. The application exists when the browser tab is open. It is not present when the tab is closed.

VaultBook does not use telemetry, analytics, or any form of usage tracking. No events are logged and transmitted. No feature usage is measured and reported. No error reports are sent to any server. The application's behavior is not observed by anyone outside the user's local environment.

What VaultBook does provide - within this architecture of structural absence - is a full-featured professional knowledge workspace. AES-256-GCM encryption for sensitive content, with locally derived keys. Complete attachment indexing across PDFs, Word documents, Excel spreadsheets, email files, presentation formats, and ZIP archives. Semantic search that finds relevant content across notes and attachments simultaneously. Version history for every note. Related Entries that surface connections between notes. An AI suggestions carousel that learns from local usage patterns. Data lifecycle controls including expiry and purge. A Kanban view built from existing labels. All of it running on local hardware, with no network dependency of any kind.

This is not a stripped-down offline mode. It is the full capability of the application, running where it was always designed to run - locally, on your hardware, without any external dependency.

## AES-256-GCM Encryption: The Right Standard for Sensitive Notes

The encryption that VaultBook provides for sensitive note content is worth understanding in some technical detail, because the difference between strong encryption and weak encryption is not visible to casual inspection and matters enormously for the privacy assurance the tool can actually provide.

AES-256 is the Advanced Encryption Standard with a 256-bit key length. It is the encryption standard used by the United States government for classified information up to the SECRET level. It is the standard recommended by the National Institute of Standards and Technology for sensitive data protection. At current computational capability and for the foreseeable future of classical computing, AES-256 is not practically breakable through direct cryptanalytic attack.

GCM - Galois/Counter Mode - is a mode of operation for AES that provides authenticated encryption. Authenticated encryption means that the decryption process verifies not only that the correct password was used but also that the encrypted content has not been tampered with since encryption. If any bit of the encrypted data has been modified, the authentication check fails and the decryption is rejected. This property protects against specific classes of attack that target encrypted data without breaking the encryption itself.

The key derivation in VaultBook uses your password as the input to produce the encryption key. The key derivation function makes brute-force attacks against the password significantly more expensive - each guess requires substantial computation, making systematic password guessing impractical at scale. The derived key is specific to your password and is not stored anywhere - it exists only in memory during the active session.

The practical meaning of these technical properties is straightforward: a VaultBook entry that you have encrypted is protected by cryptography that cannot be practically broken. Someone who obtains a copy of your VaultBook folder - through device theft, through copying the drive, through any other means - cannot read the encrypted content without your password. The protection does not depend on the security of the storage medium. It depends on the mathematics of AES-256-GCM and the secrecy of your password.

For users who need to be able to tell themselves, their clients, their regulators, or their legal counsel exactly how their sensitive notes are protected, VaultBook's encryption provides a specific, technically grounded, externally verifiable answer: AES-256-GCM with locally derived keys that exist only in memory during active sessions, providing cryptographic protection that does not depend on any third party's security practices or good faith.

## Organizing Sensitive Knowledge With the Depth It Deserves

Sensitive notes are rarely simple. A healthcare professional's patient documentation spans assessments, treatment plans, session notes, correspondence, and research references. A legal professional's case files include correspondence, filings, research memoranda, strategy notes, and client communications. A financial professional's client records hold analysis, correspondence, regulatory filings, and internal notes. A researcher's project files contain literature, data, draft findings, and methodological notes.

Managing this complexity in a single flat list or a simple folder hierarchy is insufficient. The knowledge has structure - hierarchical structure reflecting how topics and subtopics relate, and cross-cutting structure reflecting how a given piece of content might be relevant to multiple categories simultaneously. Both types of structure need to be representable, and both need to be navigable quickly.

VaultBook's organizational model provides both. Pages create the primary organizational unit - a page for each client, patient, matter, project, or research topic. Sections within pages create the secondary structure - phases of a project, document types within a case, periods of a treatment relationship, components of a research program. This hierarchy can be as deep as the content requires.

Labels provide the cross-cutting organization. A label for document type - note, assessment, correspondence, research, filing, reference. A label for status - active, pending, resolved, archived. A label for sensitivity - routine, sensitive, confidential. A label for action required - review, respond, follow up. These labels apply across pages, making it possible to filter the entire workspace to show all pending items, or all documents requiring review, or all correspondence, regardless of which page they belong to.

The Kanban view builds itself from labels without any configuration. If you use status labels, opening the Kanban view immediately shows the workspace organized by status - entries sorted into columns, draggable between columns with automatic label updates. For managing a caseload, a patient roster, or a research project pipeline, the Kanban view provides the workflow visibility that a hierarchical note structure alone cannot deliver.

The search ties the organizational model together. When the hierarchy does not capture exactly where a piece of knowledge is, and when the label filtering is too broad, the semantic search finds it by content. A search that crosses note text and all attachment content simultaneously, that understands concepts rather than just exact strings, that improves over time with usage feedback - this is the search that makes a large, complex knowledge base navigable rather than merely stored.

## The Attachment Capability That Completes the Knowledge Picture

Sensitive notes rarely exist in isolation from the files that give them context. A clinical note relates to the assessment that preceded the session it describes. A case strategy note relates to the correspondence that established the facts it analyzes. A financial analysis note relates to the spreadsheet data that supports its conclusions. A research note relates to the literature it synthesizes.

Storing the note without the related file creates an incomplete knowledge record - one that is technically preserved but practically difficult to use, because the context that makes the note meaningful requires locating a file that is stored somewhere else. VaultBook's attachment capability closes this incompleteness by allowing every file type that professional knowledge arrives in to be attached to the note that contextualizes it - and indexing the content of every attachment so that the file's content becomes part of the searchable workspace.

PDFs including scanned PDFs through locally run OCR. Word documents indexed paragraph by paragraph. Excel spreadsheets indexed cell by cell across every sheet. Email files in MSG and EML format with message body and headers indexed. Presentation files with slide text and speaker notes indexed. ZIP archives with contents extracted and indexed. Every format, every word, fully searchable - all processed locally on the user's hardware with no file transmitted to any external service.

The combination of note organization and attachment indexing creates a workspace where the full knowledge picture for any topic is both stored and searchable in a single place. The sensitive note and the sensitive files that inform it are together, organized by the same hierarchy, searchable through the same interface, protected by the same encryption, held on the same local hardware. The knowledge is complete and the privacy is consistent across all of it.

## Data Lifecycle: Sensitive Notes Should Not Live Forever

One of the least-examined dimensions of sensitive note storage is the question of how long the notes should be retained. Most users keep notes indefinitely - they are written, they accumulate, and unless there is a specific reason to delete something, it stays in the system indefinitely.

For ordinary notes, indefinite retention is harmless. For sensitive notes, it is not. Clinical records that are retained beyond their required retention period are a residual liability - a store of sensitive health information that serves no current clinical purpose but continues to create breach and disclosure risk. Legal files retained beyond their professional necessity hold privileged information that should not persist indefinitely. Financial records, proprietary research, and personal confidential information all have natural endpoints beyond which their retention is a privacy risk rather than a benefit.

VaultBook's data lifecycle controls address this directly. Expiry dates can be set on individual notes or attachments, flagging content for deletion when it has exceeded its useful life. The 60-day purge policy ensures that deleted content is permanently removed from the workspace after the purge period - not retained in a soft-deleted state where it is hidden from normal view but remains recoverable. After the purge period, the deleted content is gone from the local workspace completely.

For users with professional retention obligations - clinical records, legal files, financial records - these controls allow the retention policy to be implemented directly in the note system rather than requiring manual tracking of what should be deleted when. For users without formal retention obligations - individuals holding personal sensitive information that should not persist indefinitely - the controls provide the mechanism to give sensitive content a defined lifetime rather than accumulating indefinitely.

The lifecycle management is entirely local. There are no vendor retention policies overriding the user's decisions. No content is preserved on vendor infrastructure after the user has deleted it. The data is on the user's hardware, and the user's decisions about retention are the authoritative ones.

## Optional Sync That Stays Under Your Control

The fully offline model that VaultBook provides addresses the privacy requirements of sensitive notes completely. But it also raises a practical question for users who work across multiple devices - a work laptop and a home machine, a desktop and a laptop taken to client meetings, a personal machine and a secured workstation.

VaultBook's answer to this question is consistent with the privacy architecture: sync is optional, and when it happens, it happens through mechanisms the user chooses and controls. VaultBook's data lives in a folder on the local machine. That folder can be synchronized to any location using any tool the user selects - Syncthing for peer-to-peer sync with no cloud intermediary, an enterprise-grade cloud storage service with appropriate privacy agreements, a NAS on the local network, or a manually carried encrypted external drive.

The critical property is intentionality. VaultBook does not automatically synchronize to any service. Data moves when the user deliberately moves it, to a destination the user has chosen, through a mechanism the user controls. There are no automatic background uploads. There is no VaultBook sync service to subscribe to. The sync architecture is entirely the user's to design and implement according to their own privacy requirements and organizational policies.

For professionals in regulated environments - where data storage locations must be documented and approved - this intentional sync model is a compliance feature. The answer to "where is this data stored?" is specific and accurate: in this folder, on this machine, potentially also on this other machine through this synchronization mechanism, with no cloud components that have not been deliberately chosen and authorized.

## The Transparent Architecture That Technical Users Can Verify

One of VaultBook's architectural properties that is particularly valuable for security-conscious users - engineers, IT professionals, security researchers, technically sophisticated practitioners in regulated industries - is that the application is verifiable.

VaultBook is a single HTML file. The HTML file contains all of the application's code, including the encryption implementation, the indexing logic, the search algorithm, and every other component. A user who wants to verify that VaultBook does not make network requests, does not store passwords, and uses AES-256-GCM encryption with the properties described can read the relevant code directly. There is no compiled binary to reverse-engineer. There is no server-side component that requires trust without verification. The implementation is present in the file the user opens.

This transparency is a security property in itself. An application whose complete implementation can be read and verified provides a different kind of assurance than an application whose privacy claims depend on trusting the developer's assertions about server-side behavior that users cannot observe. For users who are capable of reading and understanding the relevant code, VaultBook's privacy properties can be confirmed through direct inspection rather than accepted on faith.

For users who are not capable of auditing the code directly, the verifiability through network observation remains available. Open the browser's developer tools. Switch to the Network tab. Use VaultBook for an extended session - write notes, attach files, search, navigate. Observe that the Network tab shows nothing. This observation confirms, without any code reading required, that VaultBook makes no network requests. The privacy claim is verified by behavior rather than by trust.

## The Knowledge Base That Stays Yours Permanently

There is a long-term dimension to the sensitive note storage question that extends beyond the privacy of individual notes to the durability and ownership of the entire knowledge archive over time.

Cloud-based note applications create a form of sensitive data storage that is conditional on the relationship with the vendor continuing. The notes are accessible while the account is active, while the vendor continues to operate and maintain the service, while the vendor's terms of service do not change in ways that affect data handling, and while the vendor's security is not compromised in ways that expose stored content.

Most of the time, these conditions are met. Cloud vendors are generally reliable, and the catastrophic scenarios are unlikely in any given period. But the conditions are external - they are outside the user's control. A change in the vendor's terms of service, a business acquisition that brings different privacy practices, a legal process that requires production of user data, a security breach - any of these could affect the accessibility or privacy of stored sensitive notes in ways the user cannot prevent or predict.

VaultBook's knowledge archive is not conditional. The workspace is a folder on the user's hardware. It persists without any external dependency. It does not change when vendor terms change. It does not become inaccessible when subscriptions lapse. It does not require the vendor's continued operation. The sensitive notes and the knowledge they represent belong to the user, completely and permanently, because they are physically on the user's hardware and the user holds the encryption keys.

For users who have built substantial sensitive knowledge archives over years - clinical records, legal case files, research findings, personal documentation - this unconditional ownership is not an abstract benefit. It is the assurance that the archive remains accessible and private over the full arc of its use, not just for as long as a vendor relationship remains in good standing.

## Who Needs a Workspace Like VaultBook

The characteristics that make VaultBook the right answer for sensitive note storage describe a specific type of user - not one defined by profession or industry, but by a relationship to information that makes privacy a genuine requirement rather than a preference.

Healthcare professionals whose patient documentation carries legal and ethical obligations of confidentiality. Legal professionals whose case notes hold attorney-client privileged communications. Financial professionals whose client records contain non-public information. Security researchers whose findings include vulnerability details that require careful handling before disclosure. Academic researchers whose human subjects work involves sensitive personal information that participants trusted to the research relationship. Corporate professionals whose notes hold strategic, competitive, or proprietary information that belongs to the organization but is most efficiently documented in a personal workspace.

And beyond these professional categories: individuals who document personal medical information that they have reason to want private from any cloud service. People managing personal financial information that is sensitive. Anyone who has had a privacy violation experience and has developed a serious view of where their personal information should and should not reside.

For all of these users, the common thread is the same: the notes they need to keep contain information whose privacy matters in a real, consequential way. The tool they use to keep those notes should match that reality with an architecture that provides structural privacy - not promises, not policies, not "we take your privacy seriously" - but a workspace that keeps sensitive information on your hardware, encrypted with your key, in a folder only you control, without any third party in the data path.

## Conclusion: The Answer to "Where Should I Keep This?" Has an Architecture

The question "where should I keep my sensitive notes?" deserves a more careful answer than most people give it. The answer is not the nearest convenient tool. The answer is the tool whose architecture provides the specific properties that sensitive notes require: local storage that keeps data off vendor servers, encryption that belongs to the user rather than the vendor, zero network transmission that eliminates the cloud exposure risk, complete functionality without connectivity, and data lifecycle controls that allow sensitive content to be managed according to the user's obligations rather than a vendor's defaults.

VaultBook's architecture was built to provide exactly these properties. Not as a list of features, but as structural consequences of a design decision made at the beginning: everything runs locally, everything stays on your hardware, everything is under your control.

The answer to "where should I keep my sensitive notes?" is: in a workspace whose architecture makes the question easy to answer. In a workspace where the data is yours, the encryption is yours, the retention decisions are yours, and the privacy is structural rather than promised.

That workspace is VaultBook. And the answer it provides is the only one that fully satisfies the question.
