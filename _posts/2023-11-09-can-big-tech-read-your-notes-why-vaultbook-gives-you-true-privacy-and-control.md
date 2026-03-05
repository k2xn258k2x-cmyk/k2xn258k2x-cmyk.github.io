---
title: "Can Big Tech Read Your Notes? Why VaultBook Gives You True Privacy and Control"
description: "The question sounds paranoid until you look at how cloud note apps actually work. Then it sounds reasonable. Then it sounds urgent. Here is the honest answer - and what to do about it."
date: 2023-11-09 17:00:00 -0600
cover: /assets/img/feature-screenshot-placeholder.svg
---

It is a question that sounds a little paranoid when you first ask it out loud.

Can Apple read my notes? Can Google? Can Notion?

The answer, when you look carefully at how these services are actually architected, is more complicated and more concerning than most users expect. And the complexity is not in the direction of reassurance.

The short answer is: yes, they technically can. Not necessarily as a matter of routine practice - these companies are not staffed by people who spend their workdays reading users' note archives for entertainment. But technically, structurally, as a consequence of the architecture that makes cloud note applications convenient: the companies that provide cloud note services have access to the infrastructure where your notes live, hold or can derive the keys needed to decrypt them, and are subject to legal processes that can compel them to produce user data to government agencies and law enforcement.

If you have never thought carefully about this, the realization tends to land in stages. First: of course they have server access - that is how cloud services work. Second: but they said it was encrypted - yes, but encrypted with whose key? Third: but surely they would not just read my notes - not routinely, no, but they would produce them in response to a subpoena, and their employees can technically access them for support and engineering purposes. Fourth: so when they say my data is private, what does that actually mean?

What it actually means is that your data is private from other users and from external attackers who might breach the servers. It is not private from the company operating the servers, and it is not private from legal processes served on that company.

For people who use cloud note applications to capture ideas, maintain to-do lists, and organize projects that carry no particular sensitivity - this reality is not meaningfully concerning. The harm from a Big Tech company having technical access to notes about grocery lists and meeting agendas is zero.

For people who use cloud note applications to document clinical encounters, manage legal strategy, hold financial client information, conduct sensitive research, or store any personal content that they genuinely need to be private from everyone, including large technology companies - this reality is the beginning of a serious problem that requires a serious answer.

VaultBook is that answer. Not a cloud service with better privacy policies. Not a cloud service with improved encryption. A workspace that is not a cloud service at all - one that runs entirely on your hardware, stores everything locally, makes zero network requests under any circumstances, and provides privacy that is architectural rather than promised.

<!--more-->

## How Cloud Note Privacy Actually Works

To understand what "Big Tech can technically read your notes" actually means in practice, it helps to trace the architecture of a cloud note application from the moment a note is written.

You open Apple Notes and begin typing. The note is processed by the application running on your device. When the device has an internet connection, iCloud Notes synchronizes the note to Apple's cloud infrastructure. This synchronization is the core feature of the product - it is how the same note appears on your iPhone, your iPad, and your Mac simultaneously, and how it is recoverable if you lose a device.

At the moment of synchronization, the note exists on Apple's servers. Apple's infrastructure has processed it. Apple's storage systems hold it. What protects the content from Apple's own access depends on how the encryption is implemented.

iCloud provides two different encryption models for different types of data. Standard encryption - which applies to most iCloud data including most Notes content in default configurations - means that Apple encrypts the data with keys that Apple also holds. Apple can decrypt this data. End-to-end encryption - which Apple has expanded in recent years and applies to certain categories of data when Advanced Data Protection is enabled - means that the encryption keys exist only on the user's devices, and Apple cannot decrypt the content.

The distinction is important. For data protected by standard encryption, Apple can technically access the plaintext. For data protected by end-to-end encryption, Apple cannot - the keys do not exist on Apple's infrastructure. Apple has expanded the end-to-end encrypted categories significantly, but the default configuration for most users still involves standard encryption for most data, and the technical capability for Apple to access content under standard encryption exists.

This matters because Apple responds to legal process. Apple's transparency reports document the number of legal requests the company receives from government agencies worldwide, and Apple's compliance with those requests. When Apple receives a legally valid request - a court order, a search warrant, a national security letter - Apple produces the data it has been asked for. For data under standard encryption, that means producing the decrypted content. For data under end-to-end encryption, Apple can produce encrypted data but cannot provide the key to decrypt it.

Google's architecture for Google Keep follows similar principles. Google encrypts user data, but Google holds the encryption keys for most user data. Google responds to legal process. Google's employees have access to infrastructure that contains user data for engineering and support purposes.

Notion, Evernote, OneNote, and other cloud-based note applications operate under broadly similar architectures - cloud storage, vendor-controlled encryption keys for most data, legal compliance with properly served process, vendor infrastructure access for engineering and support purposes.

None of this makes these companies bad actors. They are operating according to the legal and technical norms of cloud services, and they are providing genuine value in exchange for the privacy trade-off. The trade-off is real, and for most users and most content, it is reasonable.

For sensitive content - content whose exposure would cause real harm to the writer or the people the notes involve - the trade-off is not reasonable. And the first step toward a better answer is understanding exactly what the trade-off is.

## The Legal Process Reality: Subpoenas, Warrants, and Production Requirements

The clearest illustration of what "Big Tech can read your notes" means in practice is the legal process dimension - the circumstances under which companies are compelled to produce user data to government agencies, law enforcement, and parties in civil litigation.

Cloud service providers receive thousands of legal requests annually. Apple's most recent transparency reports show government information requests in the tens of thousands per reporting period, with compliance rates that reflect the company's legal obligations. Google's reports show similar volumes. Microsoft, which provides OneNote through its Microsoft 365 ecosystem, reports comparable numbers.

The requests come in several forms. Criminal investigations generate search warrants that require production of user account content. Civil litigation generates subpoenas that require production of relevant user data. National security investigations generate requests under various intelligence authorities. Each of these legal mechanisms, when properly served, creates a legal obligation for the cloud service provider to produce user data - including note content.

The types of cases that generate these requests are more varied than most users assume. Criminal defense investigations often involve subpoenas to cloud services for the prosecution's digital records. Civil litigation between businesses generates discovery requests that can include cloud service content. Employment disputes generate requests for employer-controlled cloud accounts and sometimes for personally held cloud content. Tax investigations generate requests for financial records stored in cloud services. Divorce proceedings generate requests for shared accounts and sometimes individual cloud content.

For a healthcare professional whose patient notes are in a cloud service, a legal proceeding involving one of their patients could generate a request for those notes that the cloud service would be obligated to satisfy. For a legal professional whose client communications include notes in a cloud service, opposing counsel's discovery process might reach those notes. For a financial professional whose client records are in cloud storage, regulatory investigations and client disputes can generate requests for that data.

The point is not that every user of cloud note services is at risk of having their notes subpoenaed. Most users are not. The point is that the legal infrastructure for compelling production of cloud-stored data is well-developed and routinely used, and users who store sensitive professional content in cloud services are subject to that infrastructure in ways that do not apply to content stored locally.

When your notes are on your device, encrypted with a key that exists only in your memory, and never transmitted to any server, the legal process infrastructure for compelling production reaches an obstacle: the cloud service has no data to produce, because the cloud service has never received the data. Compelled production of user data from a cloud service produces nothing if there is no data at the cloud service to produce.

VaultBook's architecture makes the cloud service production scenario structurally impossible. Not because VaultBook has strong legal protections. Because VaultBook has never received your data.

## What End-to-End Encryption Actually Means - and What It Does Not

The phrase "end-to-end encryption" has become a significant feature in the marketing of cloud services, to the point where its meaning and its implications are frequently misunderstood by users who rely on it as a privacy guarantee.

End-to-end encryption, in its proper meaning, means that data is encrypted on the sender's device before transmission and can only be decrypted on the recipient's device - with the encryption keys existing only on the endpoint devices and never on any server in between. For messaging applications, this means that messages are encrypted before leaving the sender's device and decrypted only on the recipient's device, with the service provider in between never having access to the plaintext.

Applied to note applications, end-to-end encryption should mean that notes are encrypted on the user's device before being transmitted to cloud storage, and decrypted only on the user's device when retrieved - with the service provider never having access to the plaintext or the decryption keys.

When implementations are genuine, this is a meaningful privacy protection. The service provider cannot read the content. Legal process served on the service provider cannot yield decrypted content, because the provider holds only encrypted data without the keys to decrypt it. This is a substantial improvement over standard cloud encryption.

The complications arise in implementation details that most users cannot easily evaluate. Key management is the most critical: where are the keys actually generated and stored? If the keys are derived from a password on the user's device and never transmitted to any server, the end-to-end encryption is genuine. If the keys are generated on the device but backed up to the cloud as part of account recovery features, the encryption is end-to-end in normal operation but not in the recovery scenario. If the provider has any mechanism for key recovery, they have some form of access to the keys.

Metadata is another dimension where end-to-end encryption has limitations. Even when note content is end-to-end encrypted, metadata - when notes were created and modified, which devices accessed them, what labels or organizational structures they belong to, how large they are - may not be encrypted and may be accessible to the provider. For some investigative and analytical purposes, metadata is as informative as content.

Device key storage is a third dimension. If the decryption key for end-to-end encrypted notes exists on a device that syncs to a cloud backup - an iPhone that backs up to iCloud, for instance - then the key may be in that backup, depending on how the backup is configured. A technically sophisticated actor with access to the backup has access to the key.

The point is not that end-to-end encryption is meaningless. For users whose threat model involves primarily external attackers rather than the service provider or legal process, end-to-end encryption is a meaningful protection. The point is that end-to-end encryption as implemented in cloud services is a specific, technically bounded protection - not the absolute privacy guarantee that the phrase implies to most users.

VaultBook's privacy model is different in kind rather than in degree. The question of whether VaultBook's encryption is end-to-end does not arise, because there is no "other end." The content is encrypted on the user's device, stored on the user's device, and never transmitted to any server. The encryption is not between the user's device and a server - it is between the user's device and the local storage on the same device. There is no transmission pathway to protect or to compromise.

## The Specific Vulnerability of Sensitive Professional Notes

The privacy concerns around cloud note applications are not equally distributed across all users and all content. For users whose notes contain sensitive professional information, the concerns are specific, concrete, and professionally consequential.

For healthcare professionals, clinical notes in cloud services create HIPAA exposure. HIPAA requires covered entities to maintain meaningful control over protected health information. PHI stored in a cloud service is under the cloud service's control - their security practices determine its protection, their legal compliance determines who can access it, their continued operation determines whether it remains available. Without a Business Associate Agreement with the cloud service, the storage of PHI there is a HIPAA violation regardless of the service's security quality. Even with a BAA, the structural exposure of PHI to cloud infrastructure represents a compliance posture that is legally adequate but not architecturally optimal.

For legal professionals, client communications and case notes in cloud services create potential privilege issues. The attorney-client privilege protects communications between attorney and client from disclosure to third parties. When those communications or notes about them are stored in cloud services, they are technically accessible to the cloud service - a third party. Courts have begun to scrutinize this in privilege disputes, and the question of whether attorney-client communications stored in cloud services retain their privileged status in the face of legal process directed at the cloud service is not fully resolved in all jurisdictions.

For financial professionals, client financial information in cloud services creates regulatory exposure. Financial data is subject to a range of regulatory frameworks that impose confidentiality obligations. Cloud storage of client financial records raises questions about data residency, vendor oversight requirements, and the adequacy of controls - questions that are simpler to answer when the data is locally held than when it depends on a cloud vendor's practices and policies.

For researchers handling sensitive human subjects data, cloud storage creates IRB compliance questions. Research involving human subjects is governed by ethical frameworks that impose obligations around data protection and confidentiality. Cloud storage of identifiable human subjects data requires careful evaluation of the cloud service's privacy practices and may require specific security configurations that are not the default.

For all of these professional categories, the structural question is the same: does the architecture of the note storage tool provide the level of data control that professional obligations require? For cloud-based tools, the answer requires a careful evaluation of each tool's specific privacy practices, BAA availability, encryption implementation, and legal process response procedures. For VaultBook, the answer is structural: the data never leaves the device, so the professional controls the data directly and absolutely.

## VaultBook's Architecture: Why Zero Network Requests Is the Right Baseline

VaultBook's foundational design principle is that the application makes zero network requests under any circumstances during any operation. This is not a privacy mode or an optional setting. It is the architecture.

VaultBook is a single HTML file. It runs in a browser. It reads from a local folder containing note files, attachment files, index files, and version files. It writes to that same local folder. There is no network component because the application was designed from the beginning to have no network component - not as a constraint or limitation, but as a deliberate choice that enables the privacy guarantees the application provides.

The verification of this property is available to any user with basic technical curiosity. Open VaultBook. Open the browser's developer tools. Switch to the Network tab. Use the application normally for an extended session - write notes, attach files, search, navigate, use the Kanban view, browse version history. The Network tab will remain empty throughout. Nothing is transmitted. Not a heartbeat. Not an analytics event. Not a license check. Not an error report. The tab stays empty because there is nothing to record.

For users whose privacy requirements are professional and whose professional obligations require them to be able to verify the privacy properties of the tools they use, this verifiability is significant. The privacy of VaultBook is not a claim about server-side behavior that the user must accept on trust. It is a locally observable property of the application's behavior that the user can confirm directly, in real time, without any technical expertise beyond knowing how to open browser developer tools.

This verifiability extends to the encryption implementation. VaultBook is a single HTML file containing all of the application's code. A technically capable user can read the code that implements the encryption - the key derivation function, the AES-256-GCM encryption and decryption, the memory management that clears decrypted content when sessions close. The implementation is present in the file the user opens. There is no server-side component to trust without verification.

For security-conscious professionals, engineers, and technically sophisticated users who have learned to be skeptical of privacy claims that cannot be independently verified, VaultBook's transparency is the foundation of genuine trust rather than required faith.

## The Full Capability That Local-Only Architecture Delivers

A common assumption about offline-first applications is that they sacrifice capability for privacy - that the privacy comes at the cost of features that cloud services provide through their remote processing infrastructure. VaultBook's feature set is the refutation of this assumption.

The search capability in VaultBook is not a simplified local search. It is semantic search - search that understands conceptual content and returns results relevant to what you are looking for even when your query does not exactly match the document language. It operates across note text and the full indexed content of every attachment simultaneously, returning unified results from everywhere in the workspace in a single query. It improves over time on Pro through usage feedback, calibrating toward the user's specific vocabulary and organizational patterns. All of this runs locally, on the user's hardware, without any network dependency.

The attachment indexing covers the complete range of professional file formats: PDFs including scanned PDFs through locally-run OCR, Word and other text documents, Excel and other spreadsheet formats indexed cell by cell, email files in MSG and EML format, presentation files with slide text and speaker notes, ZIP archives with contents extracted and indexed. Every word of every attachment becomes part of the searchable workspace, processed locally on the user's hardware with no file transmitted anywhere.

The Related Entries feature builds a knowledge graph of connections between notes, adapting to the user's professional judgment about which connections are meaningful through upvote and downvote feedback. The AI Suggestions carousel learns from local usage patterns and surfaces the most relevant workspace content when it is most likely to be needed. Version history maintains every edit to every note, locally, with unlimited depth. Data lifecycle controls - expiry dates and the 60-day purge policy - allow active management of sensitive content retention.

All of these capabilities are present, fully functional, without any network dependency. They are not dependent on cloud processing, cloud storage, or any remote infrastructure. They run where VaultBook runs - locally, on the user's hardware, with the user's data.

## Organizing a Knowledge Base That Holds Sensitive Content Safely

The organizational challenge of sensitive note management is not just about keeping notes private. It is about keeping them accessible and useful - retrievable quickly when needed, organized in ways that reflect the structure of the work, connected to the related materials that give them context.

VaultBook's organizational model provides the depth and flexibility that sensitive professional knowledge requires. Pages create the primary organizational units - organized by client, patient, matter, project, or any other top-level category that the user's work demands. Sections within pages create the secondary structure. The hierarchy can be as deep as the work requires, without any imposed limit.

Labels provide the cross-cutting organizational layer. A label for document status. A label for sensitivity level. A label for document type. A label for action required. A label for workflow stage. These labels apply across the page hierarchy, making it possible to retrieve all high-sensitivity documents across all clients, or all documents requiring review regardless of which project they belong to, in a single label query.

The Kanban view builds itself from labels without configuration. If you use status labels to track the lifecycle of documents - draft, reviewed, current, archived - the Kanban view shows the workspace organized by status, with entries draggable between columns and labels updating automatically. For managing caseloads, patient rosters, research project pipelines, or any workflow where document status matters, the Kanban view provides workflow visibility without setup overhead.

The search integrates with the organizational model to ensure navigability at scale. When the hierarchy does not capture exactly where something is, and when label filtering is too broad, the semantic search finds it through content - reaching into notes and attachments simultaneously, returning relevant results even when the query language does not match the document language exactly.

For users building sensitive knowledge bases that will grow over years - clinical archives, legal case files, research repositories, financial client records - the combination of organizational depth, label flexibility, and semantic search creates a workspace that remains navigable as it grows, rather than becoming progressively harder to navigate as most flat note systems do.

## Protecting the Notes That Protect Others

There is a dimension of note privacy that extends beyond the professional and personal interests of the note writer - the interests of the people whose information the notes contain.

A clinical note is not just the clinician's record. It is a record of something a patient disclosed in the specific protection of the therapeutic or clinical relationship. The patient's expectation of privacy in what they disclosed is part of the basis of the clinical relationship itself. They shared information they might not share in any other context because the clinical relationship carries a specific privacy protection that most other relationships do not.

A legal note is not just the attorney's work product. It is, in many cases, a record of what a client shared with their attorney in the protection of the attorney-client privilege - information shared on the understanding that it would remain private to the representation. The client's expectation of that privacy is the foundation of effective legal representation.

An academic research note involving human subjects is not just the researcher's data. It contains information about research participants who consented to the research under specific confidentiality assurances. Their expectation of those assurances is part of what makes informed consent meaningful.

When the notes that document these relationships are stored in cloud services, the privacy expectation of the patients, clients, and research participants who provided the information - the expectation that was the basis for sharing it - is being carried by the cloud service's privacy practices and legal compliance procedures, rather than by the professional's direct control.

VaultBook moves the responsibility for that privacy back where it belongs - to the professional who holds the relationship and the obligation. When clinical notes are on the clinician's locally encrypted device, the clinician is directly protecting their patient's privacy, not delegating it to Apple or Google. When legal notes are in a local encrypted workspace, the attorney is directly protecting their client's privilege, not relying on a cloud service's BAA to do it. The privacy obligation and the privacy architecture are aligned.

This alignment between professional obligation and architectural reality is, for many of VaultBook's users in sensitive professional roles, the most important thing the application provides. Not the features - though the features are comprehensive and capable. The alignment: a workspace whose architecture matches the weight of what it holds.

## Optional Sync That Preserves the Privacy Architecture

For users who work across multiple devices - a work laptop and a home machine, a desktop and a laptop carried to meetings, a personal computer and a secure workstation - the fully local default of VaultBook raises the question of how the same workspace is accessible on multiple machines.

VaultBook's approach to this question is consistent with its privacy architecture: sync is deliberate, user-controlled, and implemented through whatever mechanism the user chooses. VaultBook's data lives in a folder on the local machine. That folder can be synchronized to any location using any tool - Syncthing for peer-to-peer sync with no cloud intermediary, an enterprise cloud storage service with appropriate privacy agreements for the user's professional context, a NAS on the local network, or a manually carried encrypted drive.

The critical property is that synchronization is the user's action, not VaultBook's. No data moves automatically. No background process transmits the workspace folder to any service. The data is on the local machine until the user deliberately moves it, to a destination they have chosen, through a mechanism they control.

For professionals in regulated environments where data storage locations must be documented and authorized, this intentional sync model is directly supportive of compliance documentation. The answer to "where is this data stored?" is specific, complete, and entirely within the user's knowledge and control. No cloud component has been added to the data path without the user's deliberate choice.

For users who choose cloud storage as their sync mechanism - because they trust a particular service or because their organization has approved it - the VaultBook data in that cloud storage is encrypted. The content of the notes and attachments is protected by AES-256-GCM encryption with locally derived keys. If the cloud storage is accessed by the vendor, by legal process, or by an attacker who breaches the storage, the content is ciphertext - protected by the same encryption that protects the local copy.

## The Knowledge Archive That Is Structurally Yours

The privacy question about cloud note applications is not only about who can access your notes today. It is about who controls your accumulated knowledge over the full arc of time during which you will need it.

Cloud-based knowledge archives are conditional. They are accessible while the service operates, while the account is active, while the vendor's terms of service remain compatible with your privacy needs, and while the vendor's security remains intact. These conditions are usually met. They are also outside your control.

The implications of this conditionality are most visible in scenarios that are individually unlikely but collectively significant. A major cloud service experiences a security breach that exposes user data including clinical notes or legal communications. A technology company is acquired by an entity with different privacy practices, and the terms governing data handling change. A government requests bulk data from a cloud service in a national security context that affects users of that service regardless of individual culpability. A service becomes financially unsustainable and shuts down on short notice.

Each of these scenarios has precedent. Cloud services are breached, acquired, subject to legal process, and discontinued. For users with sensitive professional archives in cloud services, each scenario represents a potential loss of control over content that they have professional and ethical obligations to protect.

VaultBook's knowledge archive is unconditional. The workspace is a folder on the user's hardware. It persists independently of any vendor's operation. It is not subject to any vendor's terms of service. It is not affected by any acquisition, policy change, or security incident at any cloud company. It exists exactly as the user has maintained it, on hardware they control, for as long as they choose to keep it.

For professionals who are building knowledge archives that represent years of sensitive work - clinical records that must be retained for defined periods, legal files that may need to be referenced in future matters, research data that underlies published findings - this unconditional durability is not an abstract benefit. It is the assurance that the archive they are investing in building will remain exactly what they built, under their control, as long as they need it.

## The Privacy Conversation That Is Overdue

The question "can Big Tech read my notes?" reflects a broader shift in how people think about the tools they use for their most private and professionally sensitive work. The default acceptance of cloud storage as the normal, appropriate way to hold digital content is giving way to a more careful examination of what cloud storage actually means for data sovereignty, professional obligations, and personal privacy.

This examination is overdue. Cloud services have been the default for over a decade. The privacy trade-offs that come with cloud storage have been present throughout that period - they have not changed, but the awareness of them is growing. Users who are examining those trade-offs carefully are discovering that the convenience of cloud sync, the accessibility of cloud storage, and the automatic backup that cloud services provide come bundled with structural realities that many of them would not have chosen if they had understood those realities from the beginning.

VaultBook exists for users who have arrived at that examination and are looking for the alternative - the workspace that provides the full capability of a professional knowledge management system without the privacy trade-offs of cloud architecture. Not a simpler, less capable tool that happens to be offline. A full-featured professional workspace whose architecture was designed from the beginning for the specific requirements of users whose notes contain content that must remain private not just from external attackers but from the infrastructure that hosts them.

The answer to "can Big Tech read your notes?" is: if your notes are in their cloud, yes - under the right circumstances, they technically can. VaultBook's answer to that reality is structural: if your notes are in VaultBook, they are on your device. The question of whether any company can access them has a clear, verifiable, architectural answer.

Your notes should be private. Not promised-to-be-private. Architecturally private. That is what VaultBook provides - and it is the standard that sensitive professional work has always deserved.
