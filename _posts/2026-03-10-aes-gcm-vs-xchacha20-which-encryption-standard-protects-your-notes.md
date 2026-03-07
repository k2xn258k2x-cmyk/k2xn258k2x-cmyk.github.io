---
title: "AES-GCM vs XChaCha20: Which Encryption Standard Actually Protects Your Notes?"
description: "Two encryption standards dominate privacy-focused note-taking apps today. AES-GCM and XChaCha20-Poly1305 are both strong - but they make different trade-offs in design, performance, and resistance to implementation error. Here is what actually separates them."
date: 2026-03-10 17:00:00 -0600
cover: /assets/img/feature-screenshot-placeholder.svg
---

When a note-taking application tells you your data is encrypted, you are expected to feel reassured and move on. Most people do. The word "encrypted" carries enough cultural weight that it functions as a full stop - a signal that the technical question has been handled, that professionals have made sound decisions, and that your information is safe in ways you do not need to examine further.

But encryption is not a single thing. It is a family of algorithms, each with its own design history, mathematical foundations, performance characteristics, implementation challenges, and conditions under which it remains strong. The difference between a well-chosen, well-implemented encryption standard and a poorly chosen or poorly implemented one is not academic. It is the difference between data that is computationally infeasible to access without authorization and data that may be vulnerable in ways that are invisible from the outside.

Two encryption standards dominate the current landscape of privacy-focused software - including note-taking applications that take security seriously. AES-GCM, the Advanced Encryption Standard in Galois/Counter Mode, is the established standard that underpins everything from national security infrastructure to your bank's online portal. XChaCha20-Poly1305 is the newer challenger, designed by some of the most respected cryptographers in the field, adopted by applications including Notesnook, and increasingly chosen for new security-critical systems.

If you are evaluating note-taking applications on the basis of their encryption - and you should be - understanding what these two standards actually are, how they differ, and what those differences mean for the protection of your notes is a substantive exercise worth doing carefully.

This guide covers both standards in enough technical depth to be genuinely useful, without requiring a background in cryptography to follow. By the end, you will be able to read an encryption specification, understand what it tells you and what it does not, and evaluate implementation quality rather than simply registering the presence of the word "encrypted."

<!--more-->

## The Foundation: What Both Standards Are Doing

Before comparing AES-GCM and XChaCha20-Poly1305, it helps to understand what both are trying to accomplish - because they are solving the same problem with different mathematical approaches.

Both standards are examples of authenticated encryption with associated data, commonly abbreviated AEAD. That phrase describes a specific category of cryptographic construction that provides two guarantees simultaneously: confidentiality and integrity.

Confidentiality means that the encrypted ciphertext reveals nothing about the plaintext to anyone who does not hold the key. Integrity means that any modification to the ciphertext - whether by an attacker attempting to manipulate the data or through storage corruption - will be detected when decryption is attempted. The decryption process will fail with an authentication error rather than producing corrupted plaintext silently.

The "with associated data" part refers to the ability to authenticate additional context information - metadata about a message, for example - that needs to be verified but not encrypted. Associated data is not encrypted but is included in the integrity check, meaning any modification to the associated data also causes authentication failure.

The combination of confidentiality and integrity in a single construction is important because separating them creates vulnerabilities. Encryption alone, without integrity checking, is vulnerable to chosen-ciphertext attacks, where an attacker can modify ciphertext in ways that cause the recipient to decrypt attacker-chosen content and behave in exploitable ways. Integrity checking alone, without encryption, is not encryption at all. AEAD schemes provide both properties together in a way that is difficult to implement incorrectly relative to combining separate encryption and authentication components.

AES-GCM and XChaCha20-Poly1305 are both AEAD constructions. They provide confidentiality through different underlying ciphers - AES in counter mode and ChaCha20 respectively - and they provide integrity through different authentication mechanisms - GHASH and Poly1305 respectively. The security goals are the same. The paths to those goals are different.

## AES-GCM: The Established Standard

AES stands for Advanced Encryption Standard. It is not actually a standard invented by a particular company or research group - it is a standard selected by the United States National Institute of Standards and Technology through a public, international competition that ran from 1997 to 2001. NIST solicited candidate algorithms from the global cryptographic research community, subjected all submissions to years of public analysis and attempted cryptanalysis, and selected the Rijndael algorithm, submitted by Belgian cryptographers Joan Daemen and Vincent Rijmen, as the winner. NIST published it as FIPS 197 in 2001.

AES operates as a block cipher. A block cipher takes a fixed-size block of plaintext - in AES's case, 128 bits - and transforms it into a ciphertext block of the same size using a key. AES is defined for three key lengths: 128, 192, and 256 bits, referred to as AES-128, AES-192, and AES-256. The key length determines how many rounds of transformation the algorithm applies and affects the computational cost of both encryption and brute-force attack. AES-256 applies 14 rounds; AES-128 applies 10.

The internals of AES involve a series of operations on a 4x4 matrix of bytes: substitution using a fixed lookup table (SubBytes), row shifting (ShiftRows), column mixing using Galois field multiplication (MixColumns), and key addition (AddRoundKey). These operations are repeated for the specified number of rounds, producing ciphertext that is designed to have no discernible relationship to the plaintext without the key.

AES by itself - as a block cipher transforming 128-bit blocks - is not an encryption scheme for arbitrary-length messages. To encrypt messages of arbitrary length, AES needs a mode of operation that defines how to apply the block cipher across multiple blocks. GCM is one such mode.

GCM stands for Galois/Counter Mode. Counter Mode (CTR) is the component that provides encryption: a counter value is combined with a nonce (a number used once - a unique value per encryption operation) and encrypted by AES to produce a keystream. The keystream is XORed with the plaintext to produce ciphertext. This converts AES from a block cipher into a stream cipher for purposes of the encryption operation - plaintext bits are XORed with keystream bits, and the ciphertext can be any length.

The Galois component provides the authentication. GHASH is a polynomial hash function over a Galois field (a finite mathematical structure with specific algebraic properties) that is computed over the ciphertext and the associated data to produce a 128-bit authentication tag. The tag is appended to the ciphertext and verified during decryption. If anything has changed, the tag verification fails.

AES-GCM has several properties that explain its dominant position in security-critical systems. It is standardized by NIST and used across essentially all major security protocols including TLS 1.3, IPsec, and SSH. It is supported by hardware acceleration on virtually every modern processor - Intel and AMD processors have included AES-NI (AES New Instructions) hardware acceleration since 2010, and ARM processors include equivalent hardware support. With hardware acceleration, AES-GCM is extremely fast - it can process data at speeds approaching memory bandwidth on modern hardware.

Its extensive analysis history is perhaps its most important property. AES has been subjected to the most intensive cryptanalytic scrutiny of any algorithm in history, by thousands of researchers, over decades. The best known attack against full AES is a related-key attack that reduces the security margin of AES-256 from the theoretical maximum slightly - but the attack is far outside the realm of practical exploitation and requires conditions (related keys) that do not apply in correctly implemented systems. For all practical purposes, AES is considered unbreakable given current computational capabilities.

## The Implementation Sensitivity of AES-GCM

Understanding AES-GCM's strengths requires also understanding the conditions under which it remains strong - because AES-GCM has properties that make certain implementation mistakes more consequential than with some alternative constructions.

The most critical implementation requirement in AES-GCM is nonce uniqueness. The nonce - the number used once - must be different for every encryption operation performed with the same key. The GCM construction assumes that the nonce is unique, and the security proof for GCM is conditioned on this assumption. If the same nonce is reused with the same key to encrypt two different messages, an attacker who observes both ciphertexts can potentially recover both plaintexts and the authentication key through a cryptographic operation that exploits the XOR relationship between the ciphertexts.

This nonce reuse attack is called a "forbidden attack" in the cryptographic literature, and it is a real implementation vulnerability. The standard mitigation is to generate nonces randomly - a random 96-bit (12-byte) nonce provides adequate uniqueness across a very large number of encryption operations, as the probability of collision remains negligible for practical usage volumes. Alternatively, nonces can be generated as counters, which guarantees uniqueness but requires careful state management to prevent counter reset scenarios.

A correctly implemented AES-GCM system generates a fresh random nonce for every encryption operation and never reuses nonces under any circumstances. When this requirement is met, AES-GCM provides its full security guarantees.

The authentication tag in GCM is also sensitive to timing side-channels if implemented carelessly. Tag verification must be performed in constant time - that is, the verification must take the same amount of time regardless of whether the comparison succeeds or fails, and regardless of how many bytes match before the first mismatch. Non-constant-time comparison allows timing attacks that can leak information about the tag value. Correctly implemented GCM uses constant-time comparison for tag verification.

These implementation requirements are well-understood in the cryptographic engineering community and are addressed by standard, high-quality cryptographic libraries. They are not problems with AES-GCM as a design - they are the normal engineering discipline required to implement any cryptographic scheme correctly. A correctly implemented AES-GCM system does not have these vulnerabilities.

## XChaCha20-Poly1305: The Modern Challenger

ChaCha20 was designed by Daniel Bernstein, a highly influential cryptographer at the University of Illinois Chicago and TU Eindhoven. Bernstein has produced several widely deployed cryptographic constructions, including Curve25519 (the dominant elliptic curve for key exchange) and Ed25519 (a widely deployed signature scheme). His work tends to be characterized by careful design for implementation safety alongside strong security properties.

ChaCha20 is a stream cipher, in contrast to AES which is fundamentally a block cipher. It generates a keystream from the key and nonce directly, without the block-then-mode-of-operation structure of AES-GCM. The keystream is XORed with plaintext to produce ciphertext, and XORed with ciphertext to produce plaintext - the encryption and decryption operations are identical.

The internal structure of ChaCha20 is based on the ARX design philosophy - operations composed of Addition, Rotation, and XOR. The algorithm operates on a 4x4 matrix of 32-bit words, applying 20 rounds of mixing operations (hence the "20" in the name). Bernstein's design choice to use only ARX operations, rather than the lookup tables (S-boxes) used in AES, has specific implications for implementation security.

Poly1305 is the authentication component, also designed by Bernstein. It is a one-time polynomial authenticator that produces a 128-bit tag over the ciphertext and associated data. Combined with ChaCha20 as an AEAD scheme, ChaCha20-Poly1305 was standardized by IETF in RFC 7539 in 2015 and has been incorporated into TLS 1.3, QUIC (the transport protocol underlying HTTP/3), WireGuard (the modern VPN protocol), and Signal (the messaging protocol used by WhatsApp, Signal, and others).

XChaCha20-Poly1305 is an extended-nonce variant of ChaCha20-Poly1305. The "X" prefix indicates an extended 192-bit (24-byte) nonce, compared to the 96-bit (12-byte) nonce in standard ChaCha20-Poly1305. The nonce is extended using a construction called HChaCha20, which derives a subkey from the first 128 bits of the nonce and the original key, then uses the remaining 64 bits of the nonce as the nonce for the actual ChaCha20 operation.

The practical significance of the extended nonce is that it allows nonces to be generated randomly with negligible collision probability even for very large numbers of messages. With a 96-bit nonce, random generation is safe for up to roughly 2^32 (about 4 billion) messages before collision probability becomes non-negligible. With a 192-bit nonce, random generation is safe for vastly more messages - the probability of a nonce collision becomes negligible across any plausible real-world usage volume. This makes random nonce generation essentially unconditionally safe, simplifying implementation and eliminating the nonce management considerations that apply to shorter-nonce variants.

## Side-Channel Resistance: Where the Designs Differ Most

The most substantive security-relevant difference between AES-GCM and XChaCha20-Poly1305 is their relative resistance to timing side-channel attacks in software implementations without hardware acceleration.

AES's S-box - the substitution operation in SubBytes - is implemented as a lookup table in most software implementations. Lookup table accesses can leak timing information because modern processors have cache hierarchies: accessing data already in cache is faster than accessing data that requires loading from main memory. An attacker who can measure the time required for encryption operations (or execute code in the same processor environment, as in cloud multi-tenant scenarios) may be able to infer information about the key based on timing variations correlated with which cache lines were accessed.

This attack class is called a cache-timing attack. It is not theoretical - it has been demonstrated against real implementations of AES. Defending against it requires implementing AES using constant-time techniques that avoid data-dependent memory accesses, which is technically complex and somewhat slower than table-based implementations.

Hardware AES acceleration (AES-NI) solves this problem entirely. The hardware implementation performs AES operations in dedicated silicon that does not involve cache-line-dependent lookups. On processors with AES-NI - which includes essentially every x86 processor built since 2010 and most modern ARM processors - AES-GCM has no timing side-channel vulnerability from the S-box, because the S-box is implemented in hardware.

ChaCha20's ARX construction avoids lookup tables entirely. Addition, rotation, and XOR are operations that can be implemented without data-dependent memory accesses, making ChaCha20 inherently resistant to cache-timing attacks in software implementation. This property makes ChaCha20 particularly valuable on processors without hardware AES acceleration - older hardware, some IoT devices, and some constrained embedded systems - where table-based AES would require careful constant-time implementation to be safe.

For applications running in modern desktop or server environments on contemporary hardware, this distinction is largely moot. AES-NI handles the cache-timing concern for AES. Both algorithms are safe in their target environments when correctly implemented.

For applications targeting a wide range of hardware - including mobile devices, older systems, and potentially constrained environments - ChaCha20's software-based constant-time property provides a more uniform security guarantee across the full hardware range without requiring AES-NI. This is one reason why ChaCha20-Poly1305 was added to TLS 1.3 alongside AES-GCM: to provide a safe alternative on hardware where AES-NI is absent.

## Performance Characteristics

Performance is a secondary consideration relative to security when choosing an encryption standard, but it affects the feasibility of encrypting everything - including large attachments, frequent autosaves, and background processing - in a way that does not degrade the user experience.

On hardware with AES-NI acceleration, AES-GCM is exceptionally fast. Modern Intel and AMD processors can perform AES-GCM encryption at speeds of several gigabytes per second on a single core, making the encryption overhead negligible for virtually any practical workload. Encrypting a large document attachment takes milliseconds.

ChaCha20-Poly1305 is also fast - it was designed partly with performance in mind, and its ARX operations are efficient on modern CPUs. On hardware without AES-NI, ChaCha20 is typically faster than table-based AES, which is part of its original motivation. On hardware with AES-NI, ChaCha20 is generally somewhat slower than AES-GCM in raw throughput, though the difference is small enough to be imperceptible in most applications.

For note-taking applications performing per-entry encryption on individual note bodies, the performance difference between the two standards is not meaningful in any practical sense. Notes are not gigabytes in size. The encryption operation on any individual entry completes in a time that is not perceptible to the user regardless of which standard is used. Performance considerations become relevant only when encrypting large volumes of data continuously, as in full-disk encryption or bulk file transfer scenarios.

## GHASH vs. Poly1305: The Authentication Layer Compared

The authentication components of the two standards warrant specific attention, because the authentication guarantee is what prevents ciphertext manipulation attacks.

GHASH, the authentication component of GCM, is based on polynomial multiplication over GF(2^128) - the Galois field of size 2^128. The security of GHASH depends on the authentication key being kept secret and used only once per encryption operation. The authentication key in GCM is derived by encrypting a zero block with the cipher key, making it tied to the cipher key.

GHASH has a known weakness in the sense that if the authentication key is ever recovered, it can be used to forge authentication tags for arbitrary ciphertexts. The authentication key is protected by the secrecy of the cipher key and the uniqueness of nonces, but this structure means that nonce reuse does not merely allow decryption - it can allow forgery, which is a stronger attack. A forgery attack means an attacker can produce ciphertexts that will pass authentication verification with a specific tag value, potentially allowing manipulation of decrypted content.

Poly1305, the authentication component of ChaCha20-Poly1305, is also a polynomial MAC (message authentication code), but it uses a per-message key generated fresh for each message. The per-message key is derived from the ChaCha20 keystream at the beginning of each encryption operation, which is inherently tied to the nonce. The structure means that even if the nonce is somehow reused, the per-message Poly1305 key is different for each ChaCha20-based encryption operation - providing slightly better nonce-reuse degradation properties than GHASH.

In practice, correctly implemented systems with proper nonce generation never experience nonce reuse, making this distinction largely academic for applications using high-quality random nonce generation. Both authentication constructions are considered secure in their intended use conditions.

## Key Sizes and Security Margins

AES-256-GCM uses a 256-bit key. ChaCha20-Poly1305 and XChaCha20-Poly1305 use a 256-bit key. In this respect, the two standards are equivalent: both derive their encryption strength from a 256-bit key, and both provide the same nominal security level.

What does a 256-bit security level actually mean? It means that an attacker attempting to brute-force the key by trying all possible values would need to perform 2^256 key tests to guarantee finding the correct key. For context, 2^256 is a number with 77 digits. The number of atoms in the observable universe is estimated at roughly 10^80, which is about 2^266. Exhaustively searching a 256-bit key space is not merely difficult - it is physically impossible with any technology that obeys the laws of thermodynamics as we understand them, because the energy required to perform 2^256 bit operations exceeds the energy available in the observable universe.

The security of both standards in practice is therefore not limited by the feasibility of brute force - it is limited by the security of the implementation, the security of the key derivation process, and the security of the password chosen by the user. A 256-bit key derived from a weak 8-character password is only as strong as the password, because an attacker can attack the password rather than the key directly. This is why key derivation function design - specifically, making key derivation computationally expensive through iterated hashing - matters as much as key length.

## How Quantum Computing Affects Both Standards

The question of whether quantum computing threatens current encryption standards comes up frequently, and the answer requires some care to give accurately.

Grover's algorithm is a quantum algorithm that provides a quadratic speedup for search problems. Applied to symmetric encryption key search, it effectively halves the security level: a quantum computer running Grover's algorithm against AES-256 would need to perform roughly 2^128 operations to find the key, rather than 2^256. This reduces the security level from 256 bits to 128 bits in a quantum adversary model.

128 bits of quantum security is still considered secure against any foreseeable quantum computer. A quantum computer capable of running Grover's algorithm against AES-256 would need to maintain quantum coherence across 2^128 operations on a very large register - a capability that is many orders of magnitude beyond any quantum hardware that exists or is expected to exist in the near term.

The same analysis applies to ChaCha20's 256-bit key - Grover's algorithm would reduce it to approximately 128-bit quantum security.

Shor's algorithm, which provides an exponential speedup for factoring and discrete logarithm problems, does threaten asymmetric (public-key) cryptography. RSA and elliptic curve cryptography, used for key exchange and digital signatures, are vulnerable to Shor's algorithm on a sufficiently capable quantum computer. Both AES-GCM and ChaCha20-Poly1305, as symmetric AEAD schemes, are not directly threatened by Shor's algorithm.

The practical conclusion is that both AES-256-GCM and XChaCha20-Poly1305 are considered quantum-resistant for symmetric encryption purposes, with a conservative security margin that remains strong even under the quantum adversary model. Neither standard requires replacement for quantum resistance reasons in the current or near-future threat environment.

## Real-World Deployment: Where Each Standard Is Used

The deployment history of both standards provides meaningful context about their maturity, scrutiny, and confidence level in the security community.

AES-GCM is used in TLS 1.2 and 1.3 (the foundation of HTTPS), IPsec (enterprise VPN infrastructure), SSH (remote server access), BitLocker (Windows full-disk encryption), FileVault (macOS full-disk encryption), WPA3 (Wi-Fi security), and a very large fraction of all security-critical software deployed in enterprise, government, and financial contexts. It is the NIST-approved standard and is required for compliance under FIPS 140-3, the US government cryptographic standard that applies to agencies and contractors. The volume of data encrypted with AES-GCM globally is immeasurable - it almost certainly exceeds exabytes.

ChaCha20-Poly1305 (and its XChaCha20 variant) is used in TLS 1.3 (as an alternative cipher suite), QUIC/HTTP/3 (the next-generation web transport protocol), WireGuard (the modern VPN protocol that has largely displaced OpenVPN and IPsec in new deployments), the Signal Protocol (underlying secure messaging in Signal, WhatsApp, and others), libsodium (the widely used high-level cryptographic library), and increasingly in new security-critical applications designed over the past decade.

The deployment profile of ChaCha20-Poly1305 reflects both its relative newness and its adoption trajectory. It is the preferred choice of many modern cryptographic engineers for new systems because of its implementation safety properties and because its design has received extensive scrutiny since Bernstein first published it. The fact that it is in TLS 1.3, WireGuard, and the Signal Protocol - three of the most security-critical and carefully reviewed protocol designs of the past decade - represents significant validation.

Neither standard is obscure, experimental, or poorly analyzed. Both have received the kind of extensive cryptographic scrutiny that produces confidence in long-term security. The choice between them in a note-taking application is not a choice between proven and unproven - it is a choice between two thoroughly vetted options with different design philosophies and different historical contexts.

## Per-Entry Encryption: Why Granularity Matters

Beyond the question of which cipher standard is used, the architecture of encryption within a note-taking application significantly affects the practical protection it provides. A critical but often overlooked dimension is the granularity of encryption - specifically, whether the application encrypts the entire vault with a single key, or whether individual entries can be encrypted independently.

Vault-level encryption protects all notes with a single credential. The benefit is simplicity - one password protects everything. The limitation is that protecting particularly sensitive notes requires no additional mechanism, and accessing the vault for routine notes implicitly decrypts the sensitive ones as well. If the vault password is compromised, all notes are exposed simultaneously.

Per-entry encryption allows individual notes to be encrypted with distinct passwords, independent of each other and independent of any global vault credential. A note containing privileged legal strategy can be encrypted with a password that is different from and unknown to anyone who has the vault password. A note with patient information can be encrypted separately from notes that do not require the same protection level. Access to the vault does not imply access to any specific encrypted entry - each entry's protection requires its own credential.

This granularity transforms the encryption from a single layer of protection into a layered access control system. The vault represents one layer - access to the vault folder, protected by file system permissions or physical device security. Individual encrypted entries represent a second layer - access to each entry's content, protected by its specific encryption password. The combination means that even an attacker who gains access to the vault folder and can read all the unencrypted entries has no access to the encrypted entries' content without the specific per-entry passwords.

The key derivation applied per entry - rather than once for the whole vault - also means that different entries have cryptographically independent keys. Compromising one entry's password does not provide any information about any other entry's password or key. Each entry's PBKDF2-derived key is computed from its own password with its own random salt, making the keys mathematically unrelated.

## PBKDF2 and the Key Derivation Layer: Equally Important as the Cipher

Discussions of note-taking encryption that focus exclusively on the cipher standard often underemphasize the importance of key derivation - how the user's password is transformed into the encryption key. Key derivation is arguably as important as cipher selection, because the security of any AEAD scheme is limited by the quality of the key.

A 256-bit key derived from the string "password123" is far weaker than a 256-bit key derived from a strong, randomly generated passphrase. The 256-bit key space is not what is being searched by an attacker - the password space is. Key derivation functions are designed to make searching the password space expensive, but the cost must be high enough relative to both the difficulty of the passwords and the computational resources available to an attacker.

PBKDF2 (Password-Based Key Derivation Function 2) applies a pseudorandom function - typically HMAC-SHA256 - to the password and salt, then iterates the process a specified number of times. The iteration count directly determines the computational cost per password test. With 100,000 iterations of HMAC-SHA256, a single password test requires 100,000 HMAC-SHA256 computations. On a modern CPU, this requires on the order of tens of milliseconds. An attacker testing millions of candidate passwords would find the attack proceeding at thousands of candidates per second rather than billions, multiplying the effective time required by many orders of magnitude.

The random salt - generated fresh for each encryption operation and stored alongside the ciphertext - ensures that precomputed attacks are infeasible. Without a salt, an attacker could precompute a table of common passwords and their PBKDF2 outputs, then look up any derived key in the table directly. With a unique random salt per entry, every entry requires independent computation. There is no table to build that would accelerate attacks across multiple entries.

The combination of a strong AEAD cipher like AES-256-GCM, a proper key derivation function like PBKDF2 with 100,000 iterations, random salts per encryption operation, and random nonces per encryption operation represents the complete implementation stack required for genuinely strong note encryption. Each component addresses a different layer of the security requirement. The cipher provides the mathematical guarantee. The key derivation translates the human-memorable password into a strong key. The salt prevents precomputed attacks. The nonce prevents ciphertext comparison attacks.

## VaultBook's Encryption Implementation in Detail

VaultBook implements AES-256-GCM encryption with PBKDF2 key derivation, configured with the specific parameters that represent current best practice: 100,000 iterations of SHA-256, a random 16-byte (128-bit) salt generated per encryption operation, and a random 12-byte (96-bit) initialization vector generated per encryption operation.

The choice of AES-256-GCM is grounded in the extensive deployment and analysis history of both components. AES has been the global standard for symmetric encryption for over two decades, has been subjected to more cryptanalytic scrutiny than any other cipher in history, has no known practical weaknesses in correctly implemented systems, and benefits from hardware acceleration on every modern processor in common use. GCM is the authenticated mode that provides both confidentiality and integrity in a single pass, is NIST-standardized, and is the authenticated encryption mode required by FIPS 140-3 compliance.

For an application designed to run entirely within a browser using standard Web Cryptography API primitives, AES-256-GCM has another significant advantage: it is a first-class operation in the Web Crypto API, the browser's built-in cryptographic library. The Web Crypto API implements AES-GCM using the browser's optimized, security-audited cryptographic implementation rather than a JavaScript-level library. Browser vendors implement AES operations using platform AES-NI hardware acceleration where available, and their implementations are reviewed and maintained by security teams with deep expertise. Using the Web Crypto API for AES-256-GCM means VaultBook's encryption is performed by the same cryptographic primitives used to secure HTTPS connections in the same browser.

The per-entry encryption architecture means each note that requires protection has its own password and its own AES-256-GCM key derived from that password. The keys for different entries are mathematically independent - they are derived from different passwords with different random salts. Even if an attacker somehow determined one entry's password and derived key, this information provides no computational advantage for attacking any other entry.

Session password caching allows an authenticated session to access previously unlocked entries without re-entering the password for each access, while maintaining the protection that the password is required at the start of each session. The decrypted plaintext is held in memory only during active access, in the application's runtime state, and is not persisted to the local file system in unencrypted form. The ciphertext stored in the vault file is the authoritative stored form of the note's content.

The full-page lock screen engages the application-level access control layer - blocking all interface interaction including pointer events and content selection - ensuring that physical access to an unlocked device does not automatically grant access to vault content in an unguarded moment.

## What Notesnook's XChaCha20 Choice Tells Us

Notesnook, a privacy-focused note-taking application that uses XChaCha20-Poly1305, made its cipher choice explicitly and documented it publicly, including providing a verification tool called Vericrypt that allows users to decrypt their exported notes using the published cryptographic specification independently.

The choice of XChaCha20-Poly1305 by Notesnook reflects a design preference for the software-level constant-time properties of ChaCha20, the extended nonce of the X variant, and the overall design philosophy of the Bernstein-designed construction. These are defensible engineering choices made by a security-conscious team.

For users comparing the two standards, the honest assessment is that both choices reflect professional-quality cryptographic engineering. AES-256-GCM and XChaCha20-Poly1305 are both AEAD constructions providing 256-bit key security, both have been extensively analyzed, both are deployed in TLS 1.3, and the security difference between a correctly implemented AES-256-GCM system and a correctly implemented XChaCha20-Poly1305 system is not practically meaningful for note-taking use cases.

The more relevant questions for evaluating note-taking encryption are: Is the cipher correctly implemented? Are nonces generated randomly and uniquely? Is the key derivation function applied with adequate parameters? Is the encryption applied at the right granularity? Is the key held by the user or the service? These implementation and architecture questions distinguish strong encryption from weak encryption far more decisively than the choice between two high-quality, well-analyzed cipher standards.

## The Complete Encryption Stack: A Practical Checklist

When evaluating a note-taking application's encryption claims, a practical checklist helps distinguish genuine protection from marketing language:

**Cipher standard:** Is it AES-256-GCM, XChaCha20-Poly1305, or another well-analyzed AEAD construction? Or is it a weaker construction, an older standard like 3DES, or unspecified? The cipher should be named specifically.

**Key derivation function:** Is it PBKDF2, bcrypt, scrypt, or Argon2? Or is the key used directly from the password without a derivation step? The KDF and its parameters should be documented.

**Iteration count:** For PBKDF2, is the iteration count at least 100,000? Lower counts reduce protection against brute-force attacks. NIST guidelines have progressively increased recommended iteration counts as hardware has accelerated.

**Salt:** Is a unique random salt generated for each encryption operation? Or is a fixed or predictable salt used? The salt should be random and per-operation.

**Nonce/IV:** Is a unique random nonce generated for each encryption operation? For AES-GCM specifically, nonce uniqueness is a hard requirement.

**Key custody:** Is the key derived from a user password that never leaves the device? Or does the service hold the key, either because the user's password is transmitted to derive the key server-side, or because the service generates and manages keys on the user's behalf?

**Encryption granularity:** Does the application encrypt individual entries, or only the vault as a whole? Per-entry encryption allows more granular access control.

**Decrypted state handling:** Is decrypted content held only in memory during active access, or is it persisted to disk in decrypted form?

**Implementation source:** Is the cryptographic implementation using a well-maintained, reviewed library (browser Web Crypto API, libsodium, BouncyCastle) or a custom implementation? Custom cryptographic implementations are a significant risk factor.

An application that can answer each of these questions specifically, with technically accurate answers reflecting current best practices, has done the engineering work that strong encryption requires. An application that says "bank-level encryption" without specifics has provided marketing language, not security documentation.

## Why Architecture Matters as Much as Algorithm

Even the strongest cipher standard, applied with the best key derivation parameters and the most careful nonce management, does not compensate for an architectural decision that sends the encryption key to a server.

This point deserves emphasis because it is easy to be reassured by cipher specifications without examining the system architecture in which the cipher operates. A service can genuinely use AES-256-GCM with PBKDF2 at 100,000 iterations - correctly and competently - and still expose your content to the service if the password is transmitted to the service's server for key derivation, if the derived key is sent to the server for storage or synchronization, or if the plaintext is ever transmitted to the service for search indexing or other processing.

The question "who holds the key?" is more fundamental than the question "which cipher is used?" Both questions matter. Both should be asked. But the key custody question determines whether the encryption protects you from the service, while the cipher question determines how well the encryption protects you from external attackers who have acquired the ciphertext.

An application that holds neither the key nor the ciphertext - because the application is entirely local, runs without a server component, stores data in local files, and makes zero network requests - provides the strongest possible protection on both dimensions simultaneously. There is no key to expose to the service because the service is not involved in key derivation or storage. There is no ciphertext to acquire from a server breach because there is no server.

## Evaluating "Best" Encryption for Notes

Returning to the original question - which encryption standard actually protects your notes - the answer requires being precise about what "best" means.

If "best" means "most widely deployed and longest-analyzed," AES-256-GCM has a multi-decade advantage and is embedded in more security infrastructure than any other cipher.

If "best" means "most resistant to implementation error without hardware acceleration," XChaCha20-Poly1305's ARX design and extended nonce provide implementation safety properties that matter in constrained or heterogeneous hardware environments.

If "best" means "most relevant to the security of my notes in practice," the cipher choice is less decisive than the key derivation configuration, the nonce handling, the key custody architecture, and whether the application stores data locally or on a server.

The encryption standard that actually protects your notes is the one that is correctly implemented, applied with proper key derivation, using user-held keys, in an architecture that does not expose your content to the service provider. Both AES-256-GCM and XChaCha20-Poly1305, correctly implemented in a local, zero-network architecture with proper PBKDF2 key derivation, provide protection that is far beyond what any practical attacker can defeat.

The choice between them, for a user evaluating note-taking applications, should be made on the basis of implementation quality, architectural security (local vs. cloud), and the application's overall privacy design - not on the basis of which cipher appears in the specification.

What matters most is that you are dealing with a note-taking application whose developers understand the difference between encryption in transit, encryption at rest, and end-to-end encryption with user-held keys. Whose developers have implemented a complete encryption stack with a strong cipher, proper key derivation, correct nonce handling, and local key custody. Whose architecture does not introduce server-side exposure surfaces that the cipher specification cannot protect against.

That is the encryption standard that actually protects your notes. And understanding why allows you to evaluate any application's claims accurately - beyond the word "encrypted," to the specific implementation decisions that determine whether the encryption is genuinely protecting you.

VaultBook - your personal digital vault. Private, encrypted, and always under your control.
