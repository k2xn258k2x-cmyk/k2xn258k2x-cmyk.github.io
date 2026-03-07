---
title: "Inside VaultBook's Encryption: How AES-GCM Protects Your Notes"
description: "A detailed technical walkthrough of how VaultBook encrypts your notes using AES-256-GCM and PBKDF2 key derivation - entirely inside your browser, with zero network requests. Understand what happens at every stage of the encryption process, why the design choices matter, and why browser-native cryptography is the right architecture for protecting sensitive personal knowledge."
date: 2026-07-03 17:00:00 -0600
cover: /assets/img/feature-screenshot-placeholder.svg
---

Most note-taking applications that advertise encryption are describing a property of their servers: your notes are encrypted in transit over HTTPS, or encrypted at rest on a database managed by the vendor. What those descriptions leave out is the critical question of who holds the key. If the vendor holds the key - and in most cloud note-taking applications, the vendor does hold the key, by necessity, because they need to index your notes for search or sync them across devices - then the encryption is a technical measure that does not protect your notes from the vendor, from the vendor's employees, from government requests served on the vendor, or from attackers who compromise the vendor's infrastructure.

VaultBook's encryption is different in kind, not just in degree. When you encrypt a note in VaultBook, the encryption happens inside your browser using the browser's own cryptographic hardware. The key is derived from a password you supply, which VaultBook never stores. The ciphertext is written to your local file system. VaultBook's server - there is no VaultBook server in the loop at any point in the operation. Not for key generation, not for encryption, not for storage, not for decryption when you return to the note. The cryptographic operation is entirely local, entirely private, and entirely yours.

This article explains exactly how that works: the algorithms involved, the design choices made at each step, and why those choices produce a level of protection that cloud-based note encryption cannot match.

<!--more-->

## The Foundation: Why Algorithm Choice Matters

Before describing VaultBook's specific implementation, it is worth understanding why the choice of encryption algorithm matters for the protection of personal notes.

Encryption is not a binary property - something either "encrypted" or "not encrypted." Different encryption schemes offer different security properties, and the differences matter. Some schemes are fast but offer no authentication guarantee: an attacker who intercepts the ciphertext can modify it in ways that will not be detected when it is decrypted, producing corrupted plaintext that the recipient has no way of distinguishing from the original. Some schemes use deterministic initialization - meaning the same plaintext encrypted with the same key always produces the same ciphertext - which leaks information about content patterns over time. Some schemes derive keys in ways that are vulnerable to brute-force attacks because the key derivation is fast enough to try millions of candidates per second on consumer hardware.

VaultBook's encryption addresses all of these vulnerabilities through a combination of two well-understood, well-audited standards: AES-GCM for the encryption itself, and PBKDF2 for deriving encryption keys from passwords. Understanding both - what they do, what properties they provide, and why they are the right tools for protecting personal notes - is the foundation for understanding what VaultBook's encryption actually protects you from.

## AES-GCM: What It Is and What It Provides

AES stands for Advanced Encryption Standard. It is a symmetric block cipher standardized by the National Institute of Standards and Technology (NIST) in 2001, following a multi-year public competition in which the Rijndael algorithm was selected from among fifteen candidates submitted by cryptographers worldwide. AES is used by the US government to protect classified information, by financial institutions to protect transaction data, and by virtually every secure communication protocol in use on the internet today. It is the most rigorously studied symmetric encryption algorithm in existence.

The "256" in AES-256 refers to the key length: 256 bits. AES supports three key lengths - 128, 192, and 256 bits. The 256-bit variant provides the highest security margin. At 256 bits, the key space is so large that exhaustive search - trying every possible key until you find the one that decrypts the ciphertext correctly - is computationally infeasible even against an adversary with the resources of a nation-state. To put this in perspective: a 256-bit key space contains approximately 10^77 possible keys. The number of atoms in the observable universe is estimated at approximately 10^80. Brute-forcing AES-256 would require more computational effort than is physically possible with any technology currently conceivable.

GCM stands for Galois/Counter Mode. It is a mode of operation - a method for applying the AES block cipher to data of arbitrary length - that provides two important properties simultaneously: confidentiality (the content of the plaintext cannot be determined from the ciphertext without the key) and authenticity (any modification of the ciphertext after encryption will be detected upon decryption). The second property, authenticity, is what distinguishes AES-GCM from simpler modes like AES-CBC or AES-CTR.

The authentication mechanism in GCM works by computing a tag - a cryptographic fingerprint - over the ciphertext using a separate authentication key derived from the encryption key. When the ciphertext is decrypted, the tag is recomputed and compared with the stored tag. If the ciphertext has been modified in any way since it was encrypted - even a single bit changed - the recomputed tag will not match the stored tag, and the decryption will fail with an explicit error rather than silently producing corrupted plaintext. This property is called Authenticated Encryption with Associated Data (AEAD), and it means that AES-GCM does not just protect the secrecy of your notes - it also guarantees their integrity.

For a note-taking application, integrity protection matters in a subtle but important way. In a local storage environment, the risk of ciphertext modification is low compared to a networked environment. But integrity protection provides a meaningful guarantee nonetheless: if your encrypted note data is ever corrupted - by a storage failure, by an attempted modification, or by any other mechanism - VaultBook will detect the corruption on decryption rather than presenting you with garbled plaintext that you might mistake for your actual note content.

## The Initialization Vector: Why Every Encryption Is Different

One of the design requirements for secure use of AES-GCM is that the initialization vector (IV) - a 12-byte value used to initialize the counter in the GCM mode - must never be reused with the same key. If the same key and IV combination is used to encrypt two different plaintexts, information about both plaintexts is leaked to an attacker who can observe both ciphertexts.

VaultBook eliminates this risk by generating a fresh, cryptographically random IV for every single encryption operation. Each time you encrypt a note - or re-encrypt it when you edit and save - VaultBook calls `crypto.getRandomValues()` to generate a new 12-byte IV from the browser's cryptographically secure random number generator. This IV is stored alongside the ciphertext and used during decryption. It is not a secret: an attacker who can see the ciphertext can also see the IV. The IV's function is not secrecy but uniqueness - ensuring that each encryption operation is independent of all others, even when the same password is used to encrypt multiple notes.

The practical consequence of fresh IVs for every encryption is that two notes encrypted with the same password will produce completely different ciphertexts, even if the note content is identical. There is no way to infer, from the ciphertexts alone, that two notes are the same or that the same password was used. Each encrypted note is cryptographically opaque and independent.

## PBKDF2: Converting Passwords Into Keys

AES-256 requires a 256-bit (32-byte) key. Passwords, which are short strings chosen by humans, do not directly provide 256 bits of entropy. A password like "journal2026" is far shorter than 256 bits and is vulnerable to dictionary attacks. The process of deriving a strong cryptographic key from a human-chosen password is called key derivation, and the quality of this process is critical to the security of password-based encryption.

VaultBook uses PBKDF2 - Password-Based Key Derivation Function 2 - to derive AES-256 keys from passwords. PBKDF2 is standardized in PKCS#5 (RFC 8018) and is supported natively in the Web Crypto API. Its security properties are well understood and it has been in widespread production use for decades.

PBKDF2 works by iteratively applying a pseudorandom function - in VaultBook's implementation, HMAC-SHA-256 - to the password and a salt, repeating the process a configurable number of times. The output of each iteration becomes the input of the next, chaining the computation so that the full derivation cannot be parallelized. The final output is a derived key of the requested length - 256 bits in VaultBook's case.

The security properties of PBKDF2 flow from two design elements: the salt and the iteration count.

**The salt** is a random value - 16 bytes in VaultBook's implementation, freshly generated for every encryption operation - that is mixed into the key derivation process. The salt ensures that two different notes encrypted with the same password will derive different encryption keys, even though the same password was used. Without a salt, an attacker could precompute a dictionary of derived keys for common passwords - a rainbow table attack - and use it to efficiently attack any number of encrypted notes. The random salt makes precomputed attacks infeasible: the attacker would need to build a separate rainbow table for every possible salt value, which is not computationally practical.

**The iteration count** determines how much computation is required to derive the key from the password. VaultBook uses 100,000 iterations. On modern consumer hardware, 100,000 PBKDF2-SHA-256 iterations takes on the order of a fraction of a second - fast enough to be imperceptible to the user when unlocking a note, but slow enough to significantly impede brute-force password attacks. An attacker who wants to try 1 million password guesses against an encrypted note would need to perform 100 billion PBKDF2-SHA-256 iterations - a substantial computational cost that makes exhaustive password search practical only against very weak, short passwords.

The combination of a fresh random salt and 100,000 iterations means that VaultBook's key derivation is resistant to dictionary attacks, rainbow table attacks, and brute-force attacks for passwords of meaningful strength. The encryption of your notes is not weakened by the use of a human-chosen password: the PBKDF2 derivation process transforms that password into a full-strength 256-bit AES key in a way that is designed to resist the attacks that make password-based encryption vulnerable.

## The Complete Encryption Flow: Step by Step

With the individual components understood, it is worth tracing the complete flow of a VaultBook encryption operation from the moment you check the "Protected" checkbox and enter a password to the moment the ciphertext is written to your local storage.

**Step 1: Password entry.** You open the note editor, check the encryption toggle, and enter a password in the password field. VaultBook does not validate or store this password - it accepts whatever you provide. The security of the encrypted note depends entirely on the strength of the password you choose.

**Step 2: Salt generation.** VaultBook calls `crypto.getRandomValues(new Uint8Array(16))` to generate 16 cryptographically random bytes. This is the salt for the key derivation operation. It will be unique to this specific encryption of this specific note.

**Step 3: IV generation.** Immediately after generating the salt, VaultBook calls `crypto.getRandomValues(new Uint8Array(12))` again to generate 12 cryptographically random bytes. This is the initialization vector for the AES-GCM operation.

**Step 4: Key material import.** The password string is encoded as UTF-8 bytes and imported into the Web Crypto API as PBKDF2 key material via `crypto.subtle.importKey('raw', encodedPassword, 'PBKDF2', false, ['deriveKey'])`. The `false` parameter specifies that the key material itself is not extractable from the Web Crypto API - it cannot be read back out of the browser's cryptographic subsystem. Only its derived products can be used.

**Step 5: Key derivation.** VaultBook calls `crypto.subtle.deriveKey()` with the PBKDF2 key material, the random salt, 100,000 iterations, SHA-256 as the pseudorandom function, and a target specification of AES-GCM with a 256-bit key length. This call performs 100,000 HMAC-SHA-256 iterations inside the browser's cryptographic hardware and produces a CryptoKey object representing the derived AES-256 key. Like the key material, this CryptoKey is non-extractable - it exists inside the Web Crypto API and can be used to encrypt and decrypt, but it cannot be read out of the browser's cryptographic subsystem as raw bytes.

**Step 6: Encryption.** VaultBook calls `crypto.subtle.encrypt({name: 'AES-GCM', iv}, key, encodedPlaintext)` to encrypt the note content. The Web Crypto API returns an ArrayBuffer containing the ciphertext concatenated with the 16-byte GCM authentication tag.

**Step 7: Payload assembly.** VaultBook assembles the salt, IV, and ciphertext into a single payload object. All three components are base64-encoded for storage compatibility. The payload is the encrypted form of the note.

**Step 8: Local storage.** The payload is written to VaultBook's local storage structure - the repository.json file that lives in the vault folder on your device. The plaintext of the note is discarded from memory (the `_plain` field on the note object is cleared or never written to the stored state). Only the ciphertext payload is persisted.

At no point in this process does any data leave the browser. No network requests are made. No server is involved. The cryptographic operations execute entirely within the browser's Web Crypto API, which interfaces with the operating system's cryptographic subsystem on modern hardware with hardware-accelerated AES support.

## Decryption: The Return Journey

When you open an encrypted note and enter the password to unlock it, VaultBook performs the inverse operation. The key derivation step - PBKDF2 with 100,000 iterations - is performed again using the password you provide and the salt stored in the ciphertext payload. If the derived key matches the key that was used to encrypt the note (which it will if and only if you entered the correct password), `crypto.subtle.decrypt()` succeeds and returns the plaintext. If you entered the wrong password, the GCM authentication tag verification will fail, and VaultBook will report a decryption error without producing any output.

The decrypted plaintext is held in memory in the note object's `_plain` field. It is available for display and editing during your session. It is not written back to the stored payload - the only thing written to disk is the ciphertext, and the ciphertext is only updated when you save the note again with an encryption password.

This memory-only plaintext architecture has an important practical consequence: closing VaultBook or navigating away from a note causes the decrypted plaintext to be discarded. The plaintext is not persisted in any session storage, local storage, or browser cache. The next time you open that note, you will need to enter the password again to decrypt it. The cost of this is a small friction on access; the benefit is that the plaintext of your encrypted notes is never written to any persistent storage layer - it exists in browser memory only for the duration of your active session with that note.

## Session Password Caching: Usability Without Compromise

One practical challenge with per-entry encryption is usability: if every encrypted note required you to re-enter the password every time you clicked on it during a working session, the friction would make encrypted notes impractical for regular use.

VaultBook addresses this with a session password cache - an in-memory Map that stores the password for an encrypted note during your current browser session. When you enter the password to unlock a note, that password is stored in the session cache associated with that note's ID. If you navigate away and return to the same note, VaultBook finds the cached password and decrypts the note automatically, without prompting you again.

The session cache is in-memory only. It is never written to disk. Closing the browser tab, refreshing the page, or closing the application clears the session cache entirely. The next time you open VaultBook and access an encrypted note, you will need to enter the password again. The session cache is a usability convenience that operates within the security boundary of your browser session - it does not create a persistent access path to your encrypted notes outside of an active session.

This design reflects a considered tradeoff between usability and security. The session cache makes encrypted notes practical to work with during an active session - you enter the password once per session rather than once per access. The session boundary ensures that the cache cannot be used to access encrypted notes after your session ends. The result is a user experience that feels smooth and responsive while maintaining the security property that encrypted notes cannot be accessed without the password in a new session.

## Per-Entry vs. Global Encryption: Why VaultBook's Architecture Is More Granular

Some encrypted note-taking applications use a global vault password: you enter a single password when you open the application, and that password encrypts and decrypts all your notes. This is simpler to use but has a meaningful security limitation: all your notes share the same encryption key, and anyone who knows (or guesses) the global password has access to everything.

VaultBook's encryption is per-entry: each note that you choose to encrypt has its own password and its own derived key. An encrypted note's password is completely independent of every other note's password. You can encrypt different notes with different passwords - using a stronger password for the most sensitive content, a simpler password for notes you access frequently, and no encryption at all for notes that contain nothing sensitive.

This granularity has several practical benefits. It allows you to share access to specific encrypted notes by sharing only the password for that note, without revealing any other note's password. It means that a compromised password for one encrypted note does not compromise any other encrypted note in your vault. It allows you to organize your security posture around the actual sensitivity of your content rather than treating all notes as uniformly sensitive or uniformly accessible.

The per-entry model does require you to manage multiple passwords if you choose to encrypt many notes with different passwords. VaultBook's session password cache reduces the practical burden of this: once you have entered a password for a note in a session, you do not need to re-enter it for that session. For users who prefer a simpler model, using the same password for all encrypted notes is entirely valid - the encryption of each note is still independent, with its own random salt and IV, so the shared password does not introduce the cross-note correlation vulnerability that a true global vault password would create.

## The Zero-Network Guarantee: Why Locality Matters for Encryption

VaultBook makes a strong architectural guarantee that is unusual among browser-based applications: it makes zero network requests during normal operation. No data is sent to any server. No telemetry is collected. No sync operations run in the background. The application is a single HTML file that, once loaded, operates entirely within your browser using only local file system access.

For encryption, this guarantee matters in a way that goes beyond the cryptographic algorithm. Even a correctly implemented encryption scheme can be undermined by network-layer leakage. Consider an application that encrypts notes with AES-256-GCM but also sends metadata - note titles, timestamps, label names, file attachment names - to a cloud service for indexing or sync. An adversary who can observe that metadata learns a great deal about your notes even without being able to decrypt the note bodies. The pattern of when notes are created, what they are titled, how large they are, and what files are attached to them constitutes a metadata profile that can reveal sensitive information without any cryptographic attack.

VaultBook's zero-network architecture eliminates this metadata leakage entirely. No titles, no timestamps, no label names, no file names, no usage patterns - none of this information is transmitted anywhere. The entirety of your vault's data - metadata and encrypted content alike - is on your device. The only information that leaves your device is what you deliberately choose to share.

This is the deeper meaning of "private note-taking" that marketing descriptions of encryption often obscure. Encryption protects content. Zero-network architecture protects metadata. VaultBook provides both, which is why its privacy guarantee is more complete than that of any cloud-based application regardless of how those applications describe their encryption.

## The Web Crypto API: Browser-Native Cryptography

VaultBook's encryption is implemented using the Web Crypto API - a W3C standard that provides cryptographic operations natively within the browser. The Web Crypto API is not a JavaScript library that VaultBook downloads from a CDN. It is part of the browser itself, implemented in the browser's native code, typically accelerated by hardware AES instructions on modern processors.

This architecture has several important implications.

**No external dependencies.** VaultBook's cryptographic operations do not depend on any third-party JavaScript library. There is no risk that a malicious or compromised cryptography library is loaded from an external server. The implementation of AES-GCM and PBKDF2 that VaultBook uses is the same implementation used by your bank's website, by your messaging applications, and by every HTTPS connection your browser makes.

**Hardware acceleration.** Modern processors from Intel, AMD, and ARM include hardware instructions specifically for AES operations (AES-NI on x86, the Cryptography Extensions on ARM). The Web Crypto API exposes these hardware instructions to browser applications. AES-GCM encryption and decryption in VaultBook runs at hardware speed - typically gigabytes per second - making it imperceptible for note-sized content.

**Side-channel resistance.** A known vulnerability of software-implemented cryptography is timing side-channels: attackers who can precisely measure how long cryptographic operations take can sometimes infer information about the key or plaintext from timing variations. Hardware AES implementations are designed to execute in constant time regardless of the key or plaintext, eliminating timing side-channels. By using the Web Crypto API, VaultBook inherits this side-channel resistance from the hardware implementation.

**Auditability.** The Web Crypto API is a public standard with a published specification. Its security properties are well understood. The specific function calls VaultBook makes - `importKey`, `deriveKey`, `encrypt`, `decrypt`, `getRandomValues` - are all documented operations with known, specified behavior. There is no proprietary cryptographic implementation that users must take on trust.

## What AES-GCM Does Not Protect: Honest Scope

A technically honest explanation of VaultBook's encryption should include a clear statement of what the encryption protects and what it does not.

AES-GCM encrypts the body content of the notes you choose to encrypt. It does not encrypt note titles, labels, or metadata fields such as creation timestamps and modification timestamps, which remain visible in your vault for any note whether or not its body is encrypted. If your note's title is itself sensitive - if you have a note titled with the name of a confidential source, or a draft document name you want to keep private - the title is not protected by encryption. Encrypting the body protects the content; the title field remains unencrypted.

For users who need to protect both content and titles, VaultBook's zero-network architecture means that all unencrypted fields - including titles - remain on your local device and are never transmitted to any server. The confidentiality of unencrypted titles in VaultBook depends on the physical security of your device, not on the security of a cloud service. This is a materially different threat model than that of a cloud-based application, where unencrypted metadata is accessible to the cloud provider, to anyone who obtains the provider's data, and to government agencies that serve legal process on the provider.

The strength of the encryption for the note body is also dependent on password quality. PBKDF2 with 100,000 iterations provides strong key stretching, but it cannot compensate for a trivially guessable password like "123456" or "password." Users who encrypt sensitive notes should use strong, unique passwords - a password manager can help with this. The encryption algorithm does its job; the human element of password choice remains the user's responsibility.

## Comparing VaultBook's Encryption to Cloud-Based Alternatives

The technical depth of VaultBook's encryption implementation becomes most meaningful when compared to how cloud-based note-taking applications handle encryption.

Most mainstream cloud note-taking services do not offer end-to-end encryption for note content. Evernote, Google Keep, and Microsoft OneNote store note content in a form that the vendor can read - this is necessary for the features they provide, such as server-side search indexing, optical character recognition in the cloud, and cross-device sync that processes notes on vendor infrastructure. When these services describe their security, they are typically describing encryption of data in transit (HTTPS) and encryption of data at rest on their servers - but in both cases, the encryption keys are held by the vendor, not the user.

Some more privacy-focused services have introduced user-side encryption for specific features. Evernote has offered note-level encryption for selected text, though not for full notes, and the implementation has been criticized for weak key derivation. The services that do offer more complete end-to-end encryption - Notesnook, Standard Notes - typically do so in architectures that still involve cloud storage of the ciphertext and cloud sync operations, meaning metadata is transmitted to and processed by their servers even when the note content is encrypted.

VaultBook's architecture is distinct from all of these: encryption performed entirely in the browser, using well-established algorithms with well-understood parameters, with zero network transmission at any stage. The ciphertext is generated locally, stored locally, and decrypted locally. There is no server that holds the ciphertext, no vendor infrastructure that could be compelled by legal process, no cloud account that could be compromised by credential theft.

This is not a claim that VaultBook's approach is more sophisticated - AES-256-GCM and PBKDF2-SHA-256 are the same algorithms used by many other applications. The distinction is architectural: by combining correctly implemented encryption with a zero-network, local-only storage model, VaultBook provides end-to-end encryption in the literal sense - from your keyboard to your local file system, with no endpoints in between.

## The File System Access API: Where Ciphertext Lives

VaultBook stores your vault - including any encrypted note payloads - in a local folder on your device using the browser's File System Access API. The File System Access API is a W3C standard that allows web applications to read and write files in specific folders that the user explicitly grants access to. It is not a cloud storage API - it is a direct interface to your local file system.

When you grant VaultBook access to your vault folder, the application reads and writes files in that folder directly. The main vault state - including the encrypted payloads of your encrypted notes - is stored in a file called `repository.json` in that folder. This is an ordinary JSON file on your device, as readable and manageable through your operating system's file manager as any other file. You can copy it, move it, back it up to a USB drive, inspect it with a text editor, or include it in your backup system - all through normal file management operations, without any special VaultBook-specific tooling.

The ciphertext stored in `repository.json` is what the File System Access API writes to disk. The plaintext of encrypted notes never touches the disk - it is held in browser memory only for the duration of the session. The file that persists is the ciphertext payload: the salt, the IV, and the encrypted content, all base64-encoded. Anyone who obtains this file - through physical access to your device, through a backup that is shared without your consent, or through any other means - sees only ciphertext. Recovering the note content from that ciphertext without the password requires breaking AES-256-GCM, which is not computationally feasible.

## Practical Guidance: Getting the Most From VaultBook's Encryption

Understanding the encryption architecture enables you to use it more effectively. Several practical principles follow directly from the technical design.

**Password quality determines encryption strength.** PBKDF2 with 100,000 iterations is strong key stretching, but it is not a substitute for a strong password. A password consisting of a few common words provides meaningful resistance to casual access but would not hold against a sophisticated attacker with substantial computing resources. For notes containing genuinely sensitive information - privileged communications, financial records, health information, source identities - use passwords that are long, random, and unique to that note. A password manager makes this practical.

**Separate passwords for different sensitivity tiers.** Because VaultBook's encryption is per-entry, you can use different passwords for different notes based on their sensitivity. Notes containing highly sensitive content warrant stronger passwords and passwords you have not used elsewhere. Notes encrypted primarily for convenience rather than serious threat resistance can use simpler passwords. The per-entry model gives you this flexibility without any architectural compromise.

**Backup includes the ciphertext.** Your vault folder - the folder you connected VaultBook to via the File System Access API - contains your encrypted notes as ciphertext in `repository.json`. Backing up this folder backs up your encrypted notes. The backup is secure in the sense that the ciphertext cannot be decrypted without your passwords. However, if you lose the passwords, the ciphertext cannot be recovered. Back up your passwords with the same care you apply to backing up your vault folder.

**Session cache is your working memory.** Within a session, VaultBook's session password cache means you enter a password once and have fluent access to an encrypted note for the rest of the session. This is by design: the session is a security boundary that the cache respects. When you close the tab or the browser, the cache is cleared. Starting a new session requires re-entering passwords. This session boundary protects your encrypted notes if someone else accesses your device after you have closed the browser.

**Unencrypted notes are not in scope for the encryption guarantee.** VaultBook's encryption applies only to notes you have explicitly encrypted by checking the protection toggle and setting a password. Notes without encryption are stored as plaintext in `repository.json`. The zero-network architecture means this plaintext never leaves your device - but it is accessible to anyone who can access your device and open VaultBook. For notes whose confidentiality you care about, use the encryption feature.

## Why This Approach Represents the Right Architecture for Private Notes

The question of how to protect the private intellectual content of your life - journals, research, professional work, personal records - is a design question before it is a cryptography question. The most sophisticated cryptographic algorithm in the world does not help if it is applied on a server owned by a third party, accessible to that party's employees and systems, subject to legal process in jurisdictions whose privacy laws may not match your expectations, and vulnerable to the full range of risks that attend any networked cloud infrastructure.

VaultBook's encryption architecture starts with the right design: the data lives on your device, the cryptography runs in your browser, and nothing is transmitted to any server. The choice of AES-256-GCM for encryption and PBKDF2-SHA-256 for key derivation reflects the standard choices that professional cryptographers recommend for this kind of application - proven, well-audited algorithms with known security properties, implemented in the browser's own cryptographic subsystem rather than in third-party code.

The result is an encryption system whose security properties are verifiable by anyone who understands the Web Crypto API. The algorithms are public standards. The parameters - 256-bit AES, GCM mode, PBKDF2 with 100,000 iterations and SHA-256, random 16-byte salts, random 12-byte IVs - are all visible in VaultBook's code. There is no proprietary cryptographic implementation that users must trust without being able to verify. The security model is the security model of the underlying standards, applied correctly with parameters that reflect current best practice.

This transparency is itself a security property. Cryptographic systems that rely on secrecy of their implementation - "security through obscurity" - provide no meaningful protection once the implementation is known. Systems built on public standards provide protection that is independent of whether the implementation details are known, because the security comes from the mathematical hardness of the underlying problem (breaking AES-256) rather than from the secrecy of how the code works.

## The Broader Context: Encryption as One Layer of a Privacy Architecture

Encryption is a powerful tool, but it is one layer of a complete privacy architecture. VaultBook's encryption protects the body content of notes you choose to encrypt. VaultBook's zero-network architecture protects all your vault data - encrypted and unencrypted - from server-side exposure. VaultBook's local file system storage means your data is subject to the access controls of your operating system rather than the access controls of a cloud provider.

These three layers - encryption, zero-network architecture, and local storage - work together to provide a privacy guarantee that is qualitatively different from cloud note-taking applications with encryption. Each layer addresses a different threat:

- Encryption addresses the threat of someone who can access the ciphertext (your local storage or a backup) but does not know your password.
- Zero-network architecture addresses the threat of server-side access, legal process against a cloud provider, and network-level metadata observation.
- Local file system storage addresses the threat of vendor business failure, service discontinuation, or policy changes that would affect access to your notes.

No other layer compensates for the absence of another. An application with strong encryption but cloud storage still exposes your encrypted notes to legal process against the cloud provider. An application with local storage but no encryption leaves note content exposed to anyone who can access the device. An application with encryption and local storage but network telemetry still leaks usage metadata to whoever receives the telemetry. VaultBook's architecture provides all three layers because private note-taking requires all three.

## Encrypted Notes and Version History: How History Works With Encryption

One question that arises naturally for users of per-entry encryption is how version history interacts with encrypted notes. VaultBook maintains version snapshots for notes - stored in a `/versions` directory in your vault folder, with a 60-day retention window. These version snapshots capture the state of a note at each save point, allowing you to review the history of a note and restore earlier versions.

For encrypted notes, the version history stores ciphertext snapshots, not plaintext snapshots. Each time you save an encrypted note, VaultBook writes a new version snapshot containing the ciphertext payload generated from that save - including its own unique random salt and IV. The note body at that historical point is encrypted with the same password as the current version (the password you provided at save time). To view a historical version of an encrypted note, you would need the password that was used when that version was saved.

This architecture means the version history of encrypted notes inherits the security of the encryption itself. Historical versions of your most sensitive notes are stored as ciphertext that is inaccessible without the password - not as a plaintext archive that circumvents the encryption you applied to the current version. The version history is a feature that enhances your ability to recover from accidental edits or deletions; for encrypted notes, it does so without creating a plaintext backdoor.

The 60-day retention window and local-only storage of version snapshots mean that historical versions of your notes, like the current versions, never leave your device. The version archive is part of your local vault folder and subject to the same zero-network guarantee as the rest of VaultBook's storage.

## Deep Attachment Indexing and Encryption: Keeping the Full Archive Private

VaultBook's deep attachment indexing is one of its most powerful features for knowledge workers who accumulate large archives of documents, spreadsheets, PDFs, and other file types alongside their notes. The indexing system - which extracts searchable text from XLSX files via SheetJS, from PPTX slides via JSZip, from PDF text layers via pdf.js, from ZIP archives, and from Outlook MSG files - runs entirely locally, with no cloud processing of any kind.

This local-only processing matters especially for users who attach sensitive documents to encrypted notes. A common pattern for a security-conscious user might be: a note that is encrypted, with body content describing a sensitive project, and attachments containing the underlying source documents. The encrypted note body is protected by AES-256-GCM. The attached documents are stored as ordinary files in the `/attachments` directory of the vault folder - they are not themselves encrypted at the file system level, but they never leave the device.

For users who need to protect attachments as well as note bodies, the relevant security layer is device-level encryption - full-disk encryption provided by the operating system (FileVault on macOS, BitLocker on Windows, LUKS on Linux). VaultBook's zero-network architecture ensures that attachments are never transmitted; device-level encryption ensures that they cannot be accessed from the file system without the device's authentication credentials. The combination of VaultBook's local storage and operating system disk encryption provides a comprehensive protection model for the full vault archive, including both notes and attachments.

The inline OCR feature - which indexes text from images embedded in notes and from images embedded within DOCX and XLSX files - similarly runs entirely locally. OCR processing that reads text from images inside encrypted-note attachments does not require decrypting the note body. The attachment indexing and the note body encryption are independent systems that coexist without conflict: your attachments are deeply indexed for search while your note body remains protected as ciphertext until you explicitly unlock it with the password.

The encryption inside VaultBook is not a marketing feature - it is a specific, verifiable implementation of well-understood cryptographic standards, executed entirely within your browser, with no server involvement at any stage.

AES-256-GCM provides authenticated encryption with a 256-bit key that is computationally infeasible to brute-force. PBKDF2 with 100,000 iterations and a random 16-byte salt derives that key from your password in a way that resists dictionary attacks and precomputed attacks. A random 12-byte IV ensures that every encryption operation is cryptographically independent. The browser's Web Crypto API implements these operations in hardware-accelerated, constant-time native code that inherits the security properties of your processor's AES instructions.

Your password is never stored. Your key is never transmitted. Your ciphertext is written to your local file system and nowhere else. The person who holds the key to your notes is you - because you chose the password, and no one else knows it.

That is what encryption means when it is implemented with the right architectural assumptions: not a property of a server that you trust, but a property of mathematics that you can verify.

VaultBook - your personal digital vault. Private, encrypted, and always under your control.
