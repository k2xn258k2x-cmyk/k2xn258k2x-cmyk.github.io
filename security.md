---
layout: default
title: Security
description: How VaultBook protects your data — offline architecture, AES-256-GCM encryption, zero network surface, and full local control.
body_class: security-page
permalink: /security/
---

<style>
.sc-hero{
  padding: 72px 0 52px;
  text-align: center;
  background: linear-gradient(180deg, #faf8ff 0%, #f3f0fa 40%, #fff 100%);
  position: relative;
  overflow: hidden;
}
.sc-hero::before{
  content: '';
  position: absolute;
  width: 600px; height: 600px;
  border-radius: 50%;
  top: -240px; left: 50%;
  transform: translateX(-50%);
  background: radial-gradient(circle, rgba(206,147,216,.08) 0%, transparent 70%);
  pointer-events: none;
}
.sc-hero .eyebrow{ margin-bottom: 14px; position: relative; z-index:1; }
.sc-hero-title{
  font-size: clamp(34px, 5vw, 52px);
  font-weight: 900;
  letter-spacing: -0.03em;
  line-height: 1.08;
  margin: 0;
  position: relative; z-index:1;
}
.sc-hero-sub{
  margin: 16px auto 0;
  max-width: 54ch;
  font-size: 16.5px;
  color: rgba(11,11,11,.6);
  line-height: 1.55;
  position: relative; z-index:1;
}
.sc-hero-meta{
  margin-top: 20px;
  font-size: 13px;
  color: rgba(11,11,11,.4);
  position: relative; z-index:1;
}
.sc-highlights{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  margin-top: 36px;
  position: relative; z-index:1;
}
.sc-hi{
  text-align: center;
  padding: 22px 14px;
  background: rgba(255,255,255,.72);
  border: 1px solid rgba(206,147,216,.1);
  border-radius: 16px;
  transition: transform .2s ease, box-shadow .2s ease;
}
.sc-hi:hover{
  transform: translateY(-2px);
  box-shadow: 0 8px 22px rgba(206,147,216,.1);
}
.sc-hi-val{
  font-size: 28px;
  font-weight: 900;
  letter-spacing: -0.03em;
  background: linear-gradient(135deg, #7b1fa2, #0288d1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.sc-hi-label{
  margin-top: 3px;
  font-size: 12.5px;
  color: rgba(11,11,11,.46);
  font-weight: 650;
}
.sc-body{
  max-width: 720px;
  margin: 0 auto;
}
.sc-body h2{
  font-size: 22px;
  font-weight: 900;
  letter-spacing: -0.02em;
  margin: 44px 0 14px;
  padding-top: 8px;
}
.sc-body h3{
  font-size: 17px;
  font-weight: 850;
  margin: 28px 0 10px;
}
.sc-body p{
  font-size: 15.5px;
  color: rgba(11,11,11,.72);
  line-height: 1.7;
  margin: 0 0 14px;
}
.sc-body a{
  color: var(--blue, #1f6feb);
  text-decoration: underline;
  text-underline-offset: 3px;
}
.sc-body code{
  font-family: 'SF Mono', 'Fira Code', 'Consolas', monospace;
  font-size: 13.5px;
  background: rgba(206,147,216,.07);
  border: 1px solid rgba(206,147,216,.1);
  border-radius: 6px;
  padding: 2px 7px;
}
.sc-divider{
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(206,147,216,.18), rgba(129,212,250,.15), transparent);
  margin: 40px 0;
  border: none;
}
.sc-callout{
  margin: 24px 0;
  padding: 20px 24px;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(243,229,245,.14), rgba(225,245,254,.1));
  border: 1px solid rgba(206,147,216,.12);
  position: relative;
  overflow: hidden;
}
.sc-callout::before{
  content: '';
  position: absolute;
  top: 0; left: 0; bottom: 0;
  width: 4px;
  background: linear-gradient(180deg, #ce93d8, #81d4fa);
}
.sc-callout p{ margin: 0; }
.sc-callout p + p{ margin-top: 10px; }
.sc-callout-title{
  font-weight: 850;
  font-size: 15px;
  color: rgba(11,11,11,.82);
  margin-bottom: 6px;
}
.sc-table{
  width: 100%;
  margin: 20px 0;
  border-collapse: collapse;
  font-size: 14px;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid rgba(206,147,216,.1);
}
.sc-table th{
  text-align: left;
  padding: 12px 16px;
  font-weight: 850;
  font-size: 13.5px;
  background: linear-gradient(135deg, rgba(243,229,245,.15), rgba(225,245,254,.1));
  border-bottom: 1px solid rgba(206,147,216,.1);
}
.sc-table td{
  padding: 10px 16px;
  border-bottom: 1px solid rgba(206,147,216,.05);
  color: rgba(11,11,11,.68);
  line-height: 1.5;
}
.sc-table tr:last-child td{ border-bottom: 0; }
.sc-table tr:hover td{ background: rgba(243,229,245,.06); }
.sc-check{ color: #00897b; font-weight: 800; }
.sc-cross{ color: rgba(11,11,11,.2); }
.sc-toc{
  margin: 0 0 36px;
  padding: 22px 24px;
  border-radius: 16px;
  background: rgba(255,255,255,.6);
  border: 1px solid rgba(206,147,216,.1);
}
.sc-toc-title{
  font-weight: 850;
  font-size: 14px;
  color: rgba(11,11,11,.55);
  text-transform: uppercase;
  letter-spacing: .06em;
  margin-bottom: 12px;
}
.sc-toc-list{
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.sc-toc-list a{
  font-size: 14px;
  color: rgba(11,11,11,.65);
  text-decoration: none;
  font-weight: 600;
  transition: color .2s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}
.sc-toc-list a::before{
  content: '';
  width: 6px; height: 6px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ce93d8, #81d4fa);
  flex-shrink: 0;
  opacity: .5;
}
.sc-toc-list a:hover{ color: #7b1fa2; }
.sc-toc-list a:hover::before{ opacity: 1; }
.sc-shield-grid{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  margin: 24px 0;
}
.sc-shield{
  padding: 20px 18px;
  background: rgba(255,255,255,.6);
  border: 1px solid rgba(206,147,216,.1);
  border-radius: 16px;
  text-align: center;
  transition: transform .2s ease, box-shadow .2s ease;
}
.sc-shield:hover{
  transform: translateY(-2px);
  box-shadow: 0 8px 22px rgba(206,147,216,.1);
}
.sc-shield-icon{
  font-size: 28px;
  margin-bottom: 8px;
}
.sc-shield-label{
  font-weight: 850;
  font-size: 14px;
  color: rgba(11,11,11,.78);
  margin-bottom: 4px;
}
.sc-shield-desc{
  font-size: 13px;
  color: rgba(11,11,11,.5);
  line-height: 1.45;
}
@media (max-width: 900px){
  .sc-highlights{ grid-template-columns: 1fr 1fr; }
  .sc-shield-grid{ grid-template-columns: 1fr 1fr; }
}
@media (max-width: 600px){
  .sc-highlights{ grid-template-columns: 1fr; max-width: 280px; margin-left: auto; margin-right: auto; }
  .sc-shield-grid{ grid-template-columns: 1fr; max-width: 340px; margin-left: auto; margin-right: auto; }
  .sc-body h2{ font-size: 20px; }
  .sc-table th, .sc-table td{ padding: 8px 12px; font-size: 13px; }
}
</style>


<!-- ━━━ HERO ━━━ -->
<section class="sc-hero">
  <div class="container" data-reveal>
    <div class="eyebrow">SECURITY</div>
    <h1 class="sc-hero-title">Security through architecture,<br>not promises.</h1>
    <p class="sc-hero-sub">
    VaultBook doesn't ask you to trust our servers — there are none.
    Your data never leaves your device, and every security measure operates
    locally under your control.
    </p>
    <p class="sc-hero-meta">Last updated: February 28, 2026 · Effective: February 28, 2026</p>
    <div class="sc-highlights">
      <div class="sc-hi">
        <div class="sc-hi-val">AES-256</div>
        <div class="sc-hi-label">GCM encryption standard</div>
      </div>
      <div class="sc-hi">
        <div class="sc-hi-val">Zero</div>
        <div class="sc-hi-label">Network attack surface</div>
      </div>
      <div class="sc-hi">
        <div class="sc-hi-val">100K</div>
        <div class="sc-hi-label">PBKDF2 iterations</div>
      </div>
      <div class="sc-hi">
        <div class="sc-hi-val">Local</div>
        <div class="sc-hi-label">All processing on-device</div>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="sc-body">
      <div class="sc-toc" data-reveal>
        <div class="sc-toc-title">Contents</div>
        <div class="sc-toc-list">
          <a href="#philosophy">1. Security Philosophy</a>
          <a href="#architecture">2. Architecture &amp; Attack Surface</a>
          <a href="#encryption">3. Encryption</a>
          <a href="#key-derivation">4. Key Derivation &amp; Password Handling</a>
          <a href="#data-at-rest">5. Data at Rest</a>
          <a href="#data-in-transit">6. Data in Transit</a>
          <a href="#browser-sandbox">7. Browser Sandbox &amp; Isolation</a>
          <a href="#file-system">8. File System Access &amp; Permissions</a>
          <a href="#lock-screen">9. Lock Screen &amp; Session Protection</a>
          <a href="#version-history">10. Version History &amp; Recovery</a>
          <a href="#threat-model">11. Threat Model</a>
          <a href="#supply-chain">12. Supply Chain &amp; Dependencies</a>
          <a href="#what-we-cannot-do">13. What We Cannot Do</a>
          <a href="#best-practices">14. User Best Practices</a>
          <a href="#vulnerability-disclosure">15. Vulnerability Disclosure</a>
          <a href="#incident-response">16. Incident Response</a>
          <a href="#compliance">17. Compliance &amp; Standards</a>
          <a href="#contact">18. Contact</a>
        </div>
      </div>

<h2 id="philosophy" data-reveal>1. Security Philosophy</h2>

  <p>Most applications ask you to trust that their servers are secure, that their employees won't access your data, and that their infrastructure won't be breached. VaultBook takes a fundamentally different approach: we eliminate the need for trust by eliminating the server.</p>

  <p>VaultBook's security model is based on three principles:</p>

  <div class="sc-shield-grid" data-reveal>
    <div class="sc-shield">
      <div class="sc-shield-icon">🏗️</div>
      <div class="sc-shield-label">Security by architecture</div>
      <div class="sc-shield-desc">Threats are eliminated by design, not by adding defensive layers on top of a vulnerable foundation.</div>
    </div>
    <div class="sc-shield">
      <div class="sc-shield-icon">🔒</div>
      <div class="sc-shield-label">Zero-trust networking</div>
      <div class="sc-shield-desc">The Application makes zero network requests. No network means no network-based attacks.</div>
    </div>
    <div class="sc-shield">
      <div class="sc-shield-icon">👤</div>
      <div class="sc-shield-label">User sovereignty</div>
      <div class="sc-shield-desc">You hold the keys, the data, and the control. We cannot access, override, or revoke any of it.</div>
    </div>
  </div>

  <p>This page documents, in detail, how these principles are implemented across every layer of VaultBook's design — from cryptographic primitives to file system permissions to session management.</p>

  <hr class="sc-divider">

  <h2 id="architecture" data-reveal>2. Architecture &amp; Attack Surface</h2>

  <h3>2.1 Single-file application</h3>

  <p>VaultBook is distributed as a single, self-contained HTML file. All application code (JavaScript), styles (CSS), and bundled libraries are embedded directly within this file. There is no installer, no background service, no daemon, and no system-level process. The Application runs inside a standard browser tab.</p>

  <h3>2.2 No server-side component</h3>

  <p>VaultBook has no backend server, no API endpoints, no database server, and no cloud infrastructure. This architectural decision eliminates entire categories of security threats that affect traditional web applications:</p>

  <table class="sc-table" data-reveal>
    <thead>
      <tr>
        <th>Threat category</th>
        <th style="text-align:center; width:140px;">Applies to VaultBook?</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Server-side data breaches</td><td style="text-align:center;"><span class="sc-cross">✕ No server</span></td></tr>
      <tr><td>SQL injection / NoSQL injection</td><td style="text-align:center;"><span class="sc-cross">✕ No database</span></td></tr>
      <tr><td>API key leakage or abuse</td><td style="text-align:center;"><span class="sc-cross">✕ No API</span></td></tr>
      <tr><td>Man-in-the-middle attacks on user data</td><td style="text-align:center;"><span class="sc-cross">✕ No transmission</span></td></tr>
      <tr><td>Server-side request forgery (SSRF)</td><td style="text-align:center;"><span class="sc-cross">✕ No server</span></td></tr>
      <tr><td>Credential stuffing / brute-force login</td><td style="text-align:center;"><span class="sc-cross">✕ No accounts</span></td></tr>
      <tr><td>Privilege escalation via authentication bypass</td><td style="text-align:center;"><span class="sc-cross">✕ No auth layer</span></td></tr>
      <tr><td>Third-party analytics / tracking data harvesting</td><td style="text-align:center;"><span class="sc-cross">✕ No analytics</span></td></tr>
      <tr><td>Cloud provider infrastructure compromise</td><td style="text-align:center;"><span class="sc-cross">✕ No cloud</span></td></tr>
      <tr><td>DNS hijacking of application endpoints</td><td style="text-align:center;"><span class="sc-cross">✕ No endpoints</span></td></tr>
    </tbody>
  </table>

  <h3>2.3 Minimal attack surface</h3>

  <p>VaultBook's attack surface is limited to the local runtime environment: the browser's JavaScript engine, the File System Access API, and the integrity of the HTML file itself. This is a dramatically smaller surface than any cloud-connected application, and all residual risks are addressed in the sections below.</p>

  <hr class="sc-divider">

  <h2 id="encryption" data-reveal>3. Encryption</h2>

  <h3>3.1 Algorithm</h3>

  <p>VaultBook Pro uses <strong>AES-256-GCM</strong> (Advanced Encryption Standard with 256-bit keys in Galois/Counter Mode) for per-entry encryption. AES-256-GCM is an authenticated encryption algorithm, meaning it provides both confidentiality (data cannot be read without the key) and integrity (any tampering with the ciphertext is detected upon decryption).</p>

  <div class="sc-callout" data-reveal>
    <div class="sc-callout-title">Why AES-256-GCM?</div>
    <p>AES-256-GCM is the gold standard for symmetric data-at-rest encryption. It is used by governments, financial institutions, and security-critical applications worldwide. The 256-bit key length provides a security margin that is considered resistant to all known classical and quantum computing attacks for the foreseeable future. GCM mode adds authentication, ensuring that if even a single bit of ciphertext is altered, decryption will fail — preventing silent data corruption or manipulation.</p>
  </div>

  <h3>3.2 Per-entry granularity</h3>

  <p>Encryption in VaultBook is applied at the individual entry level, not globally. This means you can choose exactly which entries to protect with encryption, leaving others unencrypted for faster access. Each encrypted entry can have its own unique password, allowing you to compartmentalize sensitive information with independent access controls.</p>

  <h3>3.3 Cryptographic parameters</h3>

  <p>Every encryption operation generates fresh cryptographic parameters to ensure that no two encrypted entries share key material, even if the same password is used:</p>

  <table class="sc-table" data-reveal>
    <thead>
      <tr>
        <th>Parameter</th>
        <th>Value</th>
        <th>Purpose</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Salt</strong></td>
        <td>16 bytes, cryptographically random</td>
        <td>Ensures identical passwords produce different derived keys across entries</td>
      </tr>
      <tr>
        <td><strong>Initialization vector (IV)</strong></td>
        <td>12 bytes, cryptographically random</td>
        <td>Ensures identical plaintext produces different ciphertext across encryptions</td>
      </tr>
      <tr>
        <td><strong>Key length</strong></td>
        <td>256 bits</td>
        <td>Maximum key strength for the AES family</td>
      </tr>
      <tr>
        <td><strong>Authentication tag</strong></td>
        <td>128 bits (GCM default)</td>
        <td>Detects any tampering or corruption of the ciphertext</td>
      </tr>
    </tbody>
  </table>

  <p>The salt and IV are generated using the browser's <code>crypto.getRandomValues()</code> API, which provides cryptographically secure pseudorandom numbers sourced from the operating system's entropy pool.</p>

  <hr class="sc-divider">

  <h2 id="key-derivation" data-reveal>4. Key Derivation &amp; Password Handling</h2>

  <h3>4.1 PBKDF2 key derivation</h3>

  <p>VaultBook derives encryption keys from your passwords using <strong>PBKDF2</strong> (Password-Based Key Derivation Function 2) with the following parameters:</p>

  <table class="sc-table" data-reveal>
    <thead>
      <tr>
        <th>Parameter</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Hash function</td><td>SHA-256</td></tr>
      <tr><td>Iteration count</td><td>100,000</td></tr>
      <tr><td>Output key length</td><td>256 bits</td></tr>
      <tr><td>Salt</td><td>16 bytes, unique per entry</td></tr>
    </tbody>
  </table>

  <p>The high iteration count (100,000) is deliberately chosen to make brute-force and dictionary attacks computationally expensive. Each guess an attacker makes requires running the full PBKDF2 derivation with 100,000 rounds of SHA-256, making large-scale password cracking impractical against reasonably strong passwords.</p>

  <h3>4.2 Password storage — there is none</h3>

  <p>VaultBook never stores your encryption passwords in any form — not in plaintext, not as a hash, not in an encrypted vault, and not in browser storage. Passwords exist only in memory during the active session and are discarded when the tab closes or you navigate away.</p>

  <h3>4.3 Session password cache</h3>

  <p>For usability, VaultBook caches decrypted passwords in JavaScript runtime memory during an active session, so you are not prompted to re-enter a password each time you revisit an encrypted entry within the same session. This cache is held exclusively in the browser's heap memory and is released when the tab is closed, the page is refreshed, or the lock screen is activated.</p>

  <div class="sc-callout" data-reveal>
    <div class="sc-callout-title">Important</div>
    <p>The session cache is a convenience feature, not a security bypass. If you step away from your computer, use VaultBook's lock screen to clear the visual display and block interactions. For maximum security, close the browser tab entirely to purge all in-memory data including cached passwords.</p>
  </div>

  <h3>4.4 Password recovery — not possible</h3>

  <p>Because passwords are never transmitted to or stored by VaultBook Labs, we have absolutely no ability to recover, reset, or retrieve a lost encryption password. If you forget the password for an encrypted entry, the encrypted data is permanently inaccessible. We strongly recommend keeping secure, independent records of your encryption passwords.</p>

  <hr class="sc-divider">

  <h2 id="data-at-rest" data-reveal>5. Data at Rest</h2>

  <h3>5.1 Storage location</h3>

  <p>All VaultBook data is stored in a local folder on your device that you explicitly select through the browser's File System Access API permission dialog. VaultBook does not use <code>localStorage</code>, <code>sessionStorage</code>, <code>IndexedDB</code>, or cookies for persistent data storage. This means your data resides in regular files on your file system, fully under your control and fully visible to your operating system's file management tools.</p>

  <h3>5.2 File formats</h3>

  <p>VaultBook stores data exclusively in standard, human-readable file formats:</p>

  <table class="sc-table" data-reveal>
    <thead>
      <tr>
        <th>File</th>
        <th>Format</th>
        <th>Security note</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>repository.json</code></td>
        <td>JSON</td>
        <td>Contains page hierarchy, entry metadata, and vote data. Encrypted entry bodies are stored as ciphertext within this file or in sidecar files.</td>
      </tr>
      <tr>
        <td><code>details-*.md</code></td>
        <td>Markdown / HTML</td>
        <td>Entry body content. Encrypted entries store ciphertext here; the plaintext is never written to disk.</td>
      </tr>
      <tr>
        <td><code>index.txt</code></td>
        <td>JSON</td>
        <td>Attachment manifest mapping keys to file metadata.</td>
      </tr>
      <tr>
        <td><code>license.json</code></td>
        <td>JSON</td>
        <td>License tier and activation status. Validated locally; never transmitted.</td>
      </tr>
      <tr>
        <td><code>/versions/*</code></td>
        <td>JSON / Markdown</td>
        <td>Version snapshots. Automatically pruned after 60 days.</td>
      </tr>
      <tr>
        <td><code>/attachments/*</code></td>
        <td>Original formats</td>
        <td>Files you attach retain their original format. Attachment content is indexed locally for search.</td>
      </tr>
    </tbody>
  </table>

  <h3>5.3 Disk-level encryption recommendation</h3>

  <p>For users who want full-disk encryption beyond VaultBook's per-entry encryption, we recommend enabling your operating system's built-in disk encryption: BitLocker on Windows, FileVault on macOS, or LUKS on Linux. This provides an additional layer of protection for all files on your device, including your VaultBook Workspace, in the event of physical device theft or loss.</p>

  <hr class="sc-divider">

  <h2 id="data-in-transit" data-reveal>6. Data in Transit</h2>

  <h3>6.1 Application: no transit</h3>

  <p>The VaultBook Application makes zero network requests during its entire lifecycle. From the moment you open the HTML file to the moment you close the browser tab, no data is sent or received over any network connection. There is no telemetry, no analytics ping, no license check, no update poll, and no background sync. This is verifiable using your browser's Network DevTools tab.</p>

  <div class="sc-callout" data-reveal>
    <div class="sc-callout-title">Verify it yourself</div>
    <p>Open your browser's Developer Tools (F12 or Cmd+Shift+I), switch to the Network tab, and use VaultBook normally. You will observe zero network requests. This is the most transparent security guarantee we can offer — you can confirm it independently at any time.</p>
  </div>

  <h3>6.2 Website &amp; downloads</h3>

  <p>The VaultBook Website and download links are served over HTTPS via GitHub Pages, providing TLS encryption for all data in transit between your browser and GitHub's servers. Download integrity can be verified by comparing the file hash against published checksums.</p>

  <hr class="sc-divider">

  <h2 id="browser-sandbox" data-reveal>7. Browser Sandbox &amp; Isolation</h2>

  <h3>7.1 Browser security model</h3>

  <p>VaultBook runs inside the browser's security sandbox, which provides robust isolation from your operating system and other browser tabs. The browser sandbox enforces memory isolation (each tab runs in its own process), prevents direct file system access (except through explicitly granted APIs), and blocks cross-origin data leakage.</p>

  <h3>7.2 Same-origin policy</h3>

  <p>Because VaultBook runs from a local <code>file://</code> URI or a trusted origin, it is subject to the browser's same-origin policy. This prevents other websites or browser tabs from accessing VaultBook's in-memory state, DOM content, or File System Access API handles.</p>

  <h3>7.3 Content Security Policy</h3>

  <p>VaultBook operates as a self-contained file with no external resource loading. All JavaScript, CSS, fonts, and library code are embedded inline. This inherently prevents cross-site scripting (XSS) via external script injection, as there are no external scripts to inject or tamper with.</p>

  <h3>7.4 No eval or dynamic code execution</h3>

  <p>VaultBook does not use <code>eval()</code>, <code>Function()</code> constructors, or <code>innerHTML</code> with unsanitized user input for code execution. Rich text content is rendered through controlled DOM manipulation and sanitized rendering paths.</p>

  <hr class="sc-divider">

  <h2 id="file-system" data-reveal>8. File System Access &amp; Permissions</h2>

  <h3>8.1 Explicit user consent</h3>

  <p>VaultBook accesses your file system exclusively through the browser's File System Access API, which requires explicit user consent via a native operating system dialog. You choose which folder VaultBook can read from and write to. The browser does not grant VaultBook access to any other folder, file, or directory on your system.</p>

  <h3>8.2 Scoped permissions</h3>

  <p>File System Access API permissions are scoped to the specific directory you select and its subdirectories. VaultBook cannot read, write, or enumerate files outside this scope. Permissions are also tab-scoped — they do not persist across browser tabs or sessions unless you explicitly re-grant access.</p>

  <h3>8.3 Permission revocation</h3>

  <p>You can revoke VaultBook's file system access at any time by closing the browser tab, clearing site permissions in your browser settings, or simply declining the permission prompt on your next visit. Revoking access does not affect your files — they remain on disk in their original formats.</p>

  <hr class="sc-divider">

  <h2 id="lock-screen" data-reveal>9. Lock Screen &amp; Session Protection</h2>

  <h3>9.1 Visual lock</h3>

  <p>VaultBook includes a lock screen feature that instantly applies a full-page Gaussian blur overlay across the entire interface. When active, the lock screen blocks all pointer events (clicks, scrolls, drags), disables text selection, and prevents visual access to any displayed content.</p>

  <h3>9.2 Activation</h3>

  <p>The lock screen can be activated manually when you step away from your device. It provides immediate visual protection against casual observation — sometimes called "shoulder surfing" — without requiring you to close VaultBook or lose your session state.</p>

  <h3>9.3 Limitations</h3>

  <p>The lock screen is a visual protection measure, not a cryptographic barrier. It does not encrypt in-memory data, and a technically sophisticated user with access to your device could potentially inspect browser memory or use Developer Tools to view application state. For situations requiring stronger protection, close the browser tab entirely to purge all in-memory data, or use your operating system's native screen lock.</p>

  <hr class="sc-divider">

  <h2 id="version-history" data-reveal>10. Version History &amp; Recovery</h2>

  <h3>10.1 Automatic snapshots</h3>

  <p>VaultBook automatically creates version snapshots of your entries as you work. These snapshots are stored in the <code>/versions</code> directory within your Workspace and provide a safety net against accidental edits, deletions, or data corruption.</p>

  <h3>10.2 Retention &amp; pruning</h3>

  <p>Version snapshots are retained for 60 days by default. Versions older than 60 days are automatically pruned by the Application to manage disk space. You may manually delete version files at any time using your file manager.</p>

  <h3>10.3 Encrypted entry versions</h3>

  <p>Version snapshots for encrypted entries store the ciphertext, not the plaintext. This means version history does not create an unencrypted copy of your protected entries on disk.</p>

  <hr class="sc-divider">

  <h2 id="threat-model" data-reveal>11. Threat Model</h2>

  <p>The following table summarizes VaultBook's security posture against common threat vectors:</p>

  <table class="sc-table" data-reveal>
    <thead>
      <tr>
        <th>Threat</th>
        <th>Mitigation</th>
        <th style="text-align:center; width:100px;">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Remote data breach</td>
        <td>No server, no remote data storage, no network transmission</td>
        <td style="text-align:center;"><span class="sc-check">✓ Eliminated</span></td>
      </tr>
      <tr>
        <td>Man-in-the-middle (MITM) interception</td>
        <td>Application makes zero network requests; no data in transit to intercept</td>
        <td style="text-align:center;"><span class="sc-check">✓ Eliminated</span></td>
      </tr>
      <tr>
        <td>Credential theft / account takeover</td>
        <td>No user accounts, no passwords stored remotely, no authentication server</td>
        <td style="text-align:center;"><span class="sc-check">✓ Eliminated</span></td>
      </tr>
      <tr>
        <td>Third-party analytics data harvesting</td>
        <td>No analytics, no tracking, no third-party scripts in the Application</td>
        <td style="text-align:center;"><span class="sc-check">✓ Eliminated</span></td>
      </tr>
      <tr>
        <td>Physical device theft (unencrypted entries)</td>
        <td>OS-level disk encryption recommended; per-entry encryption available</td>
        <td style="text-align:center;"><strong>Mitigated</strong></td>
      </tr>
      <tr>
        <td>Physical device theft (encrypted entries)</td>
        <td>AES-256-GCM with PBKDF2; ciphertext unreadable without password</td>
        <td style="text-align:center;"><span class="sc-check">✓ Protected</span></td>
      </tr>
      <tr>
        <td>Shoulder surfing / visual observation</td>
        <td>Lock screen with full-page blur and event blocking</td>
        <td style="text-align:center;"><strong>Mitigated</strong></td>
      </tr>
      <tr>
        <td>Malicious browser extension</td>
        <td>User responsibility to audit extensions; browser sandbox limits cross-tab access</td>
        <td style="text-align:center;"><strong>User scope</strong></td>
      </tr>
      <tr>
        <td>Tampered HTML file (supply chain)</td>
        <td>Downloads served over HTTPS; file integrity verifiable via checksums</td>
        <td style="text-align:center;"><strong>Mitigated</strong></td>
      </tr>
      <tr>
        <td>Accidental data loss</td>
        <td>Version history (60-day retention); user-managed backups recommended</td>
        <td style="text-align:center;"><strong>Mitigated</strong></td>
      </tr>
    </tbody>
  </table>

  <hr class="sc-divider">

  <h2 id="supply-chain" data-reveal>12. Supply Chain &amp; Dependencies</h2>

  <h3>12.1 Bundled libraries</h3>

  <p>All third-party libraries used by VaultBook are bundled inline within the HTML file at build time. There are no runtime CDN fetches, no dynamic imports from external servers, and no package manager downloads at execution time. The libraries bundled in VaultBook include:</p>

  <table class="sc-table" data-reveal>
    <thead>
      <tr>
        <th>Library</th>
        <th>Purpose</th>
        <th>Loaded from</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>marked.js</strong></td>
        <td>Markdown rendering</td>
        <td>Embedded inline</td>
      </tr>
      <tr>
        <td><strong>Tesseract.js</strong></td>
        <td>Optical character recognition (OCR)</td>
        <td>Embedded inline</td>
      </tr>
    </tbody>
  </table>

  <p>Because these libraries are embedded at build time, their code is fixed and auditable within the HTML file. A supply chain attack against a CDN or npm registry would not affect already-distributed copies of VaultBook.</p>

  <h3>12.2 Web Crypto API</h3>

  <p>All cryptographic operations (AES-256-GCM encryption, PBKDF2 key derivation, random value generation) are performed using the browser's built-in <strong>Web Crypto API</strong>, not a third-party JavaScript cryptography library. The Web Crypto API is implemented natively in the browser engine (C++ in Chromium, Rust in Firefox) and undergoes rigorous security auditing as part of the browser's own development process.</p>

  <hr class="sc-divider">

  <h2 id="what-we-cannot-do" data-reveal>13. What We Cannot Do</h2>

  <p>VaultBook's architecture means that there are certain things VaultBook Labs is structurally unable to do, regardless of intent, legal order, or request:</p>

  <div class="sc-callout" data-reveal>
    <p><strong>Access your data</strong> — We have no server, no database, and no mechanism to receive, store, or view your Content.</p>
    <p><strong>Decrypt your entries</strong> — Encryption keys are derived from passwords you set and are never transmitted to us. We cannot decrypt your entries, and we cannot help you recover a forgotten password.</p>
    <p><strong>Remotely disable VaultBook</strong> — The Application runs locally from a file on your device. We have no remote kill switch, no license server, and no ability to modify or revoke your installed copy.</p>
    <p><strong>Monitor your usage</strong> — There is no telemetry, no analytics, and no usage tracking. We do not know how many entries you have, how often you use VaultBook, or what you write about.</p>
    <p><strong>Comply with data requests about you</strong> — If a government or third party were to request your VaultBook data from us, we would have nothing to produce. We do not have your data.</p>
    <p><strong>Push updates without your consent</strong> — There is no auto-update mechanism. You choose whether to download a new version.</p>
  </div>

  <hr class="sc-divider">

  <h2 id="best-practices" data-reveal>14. User Best Practices</h2>

  <p>While VaultBook's architecture provides strong baseline security, the following practices will help you maximize the protection of your data:</p>

  <table class="sc-table" data-reveal>
    <thead>
      <tr>
        <th>Practice</th>
        <th>Why it matters</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Use strong, unique encryption passwords</strong></td>
        <td>PBKDF2 slows brute-force attacks, but a weak password (e.g., "password123") can still be guessed. Use passphrases with 4+ random words or 16+ character mixed strings.</td>
      </tr>
      <tr>
        <td><strong>Store passwords in a dedicated password manager</strong></td>
        <td>VaultBook cannot recover lost encryption passwords. A password manager (1Password, Bitwarden, KeePass, etc.) ensures you never lose access to encrypted entries.</td>
      </tr>
      <tr>
        <td><strong>Enable OS-level disk encryption</strong></td>
        <td>BitLocker (Windows), FileVault (macOS), or LUKS (Linux) encrypts your entire disk, protecting all files — including unencrypted VaultBook entries — if your device is stolen.</td>
      </tr>
      <tr>
        <td><strong>Maintain regular backups</strong></td>
        <td>Your Workspace is a regular folder. Copy it to an external drive, cloud storage, or version control repository on a regular schedule. VaultBook's version history covers 60 days, but backups protect against hardware failure.</td>
      </tr>
      <tr>
        <td><strong>Keep your browser updated</strong></td>
        <td>VaultBook relies on the browser's security sandbox, Web Crypto API, and File System Access API. Browser updates include security patches that protect these foundations.</td>
      </tr>
      <tr>
        <td><strong>Audit your browser extensions</strong></td>
        <td>Malicious or overly permissive browser extensions could theoretically read page content. Periodically review installed extensions and remove any you don't actively trust and use.</td>
      </tr>
      <tr>
        <td><strong>Use the lock screen when stepping away</strong></td>
        <td>Even in a trusted environment, the lock screen prevents casual visual access to your workspace. For maximum protection, close the browser tab entirely.</td>
      </tr>
      <tr>
        <td><strong>Verify download integrity</strong></td>
        <td>Download VaultBook only from the official Website (reportmedic.github.io) or the published GitHub repository. Compare file hashes against published checksums when available.</td>
      </tr>
    </tbody>
  </table>

  <hr class="sc-divider">

  <h2 id="vulnerability-disclosure" data-reveal>15. Vulnerability Disclosure</h2>

  <h3>15.1 Reporting a vulnerability</h3>

  <p>If you discover a security vulnerability in VaultBook, we encourage responsible disclosure. Please report vulnerabilities through our Telegram channel:</p>

  <p><strong>Telegram:</strong> <a href="https://t.me/VaultBook" target="_blank" rel="noopener">t.me/VaultBook</a></p>

  <p>When reporting, please include as much detail as possible: the affected version of VaultBook, the browser and operating system you are using, a description of the vulnerability, step-by-step reproduction instructions, and an assessment of the potential impact.</p>

  <h3>15.2 Our commitment</h3>

  <div class="sc-callout" data-reveal>
    <p><strong>Acknowledgment</strong> — We will acknowledge receipt of your report within 72 hours.</p>
    <p><strong>Assessment</strong> — We will assess the reported vulnerability and determine its severity, scope, and remediation path.</p>
    <p><strong>Remediation</strong> — We will develop and release a patched version of VaultBook as promptly as the severity warrants.</p>
    <p><strong>Disclosure</strong> — Once a fix is available, we will publicly disclose the vulnerability along with remediation guidance on our Website and Telegram channel.</p>
    <p><strong>Credit</strong> — With your permission, we will credit you as the discoverer of the vulnerability in our public disclosure.</p>
  </div>

  <h3>15.3 Scope</h3>

  <p>We consider the following in scope for vulnerability reports: the VaultBook Application (all editions), the VaultBook Website (reportmedic.github.io), cryptographic implementation issues, File System Access API misuse, and any mechanism that could compromise the confidentiality, integrity, or availability of user data.</p>

  <p>We consider the following out of scope: vulnerabilities in the underlying browser engine (report these to the browser vendor), vulnerabilities in your operating system, social engineering attacks, and physical access attacks on unlocked, unencrypted workspaces (these are addressed by user best practices).</p>

  <hr class="sc-divider">

  <h2 id="incident-response" data-reveal>16. Incident Response</h2>

  <h3>16.1 No server breach scenario</h3>

  <p>Because VaultBook Labs does not operate servers that store, process, or transmit user data, a traditional server-side data breach is not possible. There is no database to exfiltrate, no user credentials to leak, and no backup tapes to compromise.</p>

  <h3>16.2 Application-level vulnerability</h3>

  <p>If a security vulnerability is discovered in the Application's code that could affect the confidentiality, integrity, or availability of locally stored data, we will take the following steps:</p>

  <div class="sc-callout" data-reveal>
    <p><strong>Immediate assessment</strong> — Determine severity, affected versions, and exploitation requirements.</p>
    <p><strong>Rapid patching</strong> — Develop and test a remediated version of the Application.</p>
    <p><strong>Public disclosure</strong> — Publish a security advisory on our Website and Telegram channel describing the vulnerability, affected versions, potential impact, and remediation steps.</p>
    <p><strong>Updated download</strong> — Make the patched version available for download with a clear version indicator.</p>
    <p><strong>Guidance</strong> — Provide specific instructions for users to determine whether they are affected and what actions to take.</p>
  </div>

  <h3>16.3 Website compromise</h3>

  <p>If the VaultBook Website or download infrastructure (hosted on GitHub Pages) were compromised, we would immediately notify users via our Telegram channel, work with GitHub to remediate the compromise, verify the integrity of all hosted files, and publish verified checksums for clean downloads.</p>

  <hr class="sc-divider">

  <h2 id="compliance" data-reveal>17. Compliance &amp; Standards</h2>

  <p>VaultBook's offline-first, zero-collection architecture naturally aligns with the data protection principles of major regulatory frameworks:</p>

  <table class="sc-table" data-reveal>
    <thead>
      <tr>
        <th>Framework</th>
        <th>Alignment</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>GDPR</strong> (EU)</td>
        <td>No personal data is collected, processed, or transmitted to any server. There is no data controller/processor relationship for Application data. Data minimization and purpose limitation are satisfied by design — zero collection.</td>
      </tr>
      <tr>
        <td><strong>CCPA</strong> (California)</td>
        <td>No personal information is collected or sold. California residents' rights to know, delete, and opt-out are structurally satisfied — there is no data to know about, delete, or opt out of.</td>
      </tr>
      <tr>
        <td><strong>PIPEDA</strong> (Canada)</td>
        <td>No personal information is collected from Canadian users through the Application.</td>
      </tr>
      <tr>
        <td><strong>HIPAA</strong> (US healthcare)</td>
        <td>While VaultBook is not specifically designed as a HIPAA-compliant tool, its zero-transmission, local-only architecture means that Protected Health Information (PHI) stored in VaultBook is never transmitted to or accessible by VaultBook Labs. Organizations subject to HIPAA should evaluate VaultBook's suitability within their own compliance framework.</td>
      </tr>
      <tr>
        <td><strong>Data residency laws</strong></td>
        <td>Your data physically resides wherever your device is located. There is no cross-border data transfer because there is no data transfer of any kind.</td>
      </tr>
    </tbody>
  </table>

  <p>For complete details on our data handling practices, please see our <a href="{{ '/privacy/' | relative_url }}">Privacy Policy</a>. For license and usage terms, see our <a href="{{ '/terms/' | relative_url }}">Terms of Service</a>.</p>

  <hr class="sc-divider">

  <h2 id="contact" data-reveal>18. Contact</h2>

  <p>If you have questions about VaultBook's security architecture, wish to report a vulnerability, or need guidance on securing your Workspace, you can reach us through Telegram:</p>

  <p><strong>Telegram:</strong> <a href="https://t.me/VaultBook" target="_blank" rel="noopener">t.me/VaultBook</a></p>

  <p><strong>Entity:</strong> VaultBook Labs, San Francisco, California, United States.</p>

  <p>We aim to respond to all security-related inquiries within 72 hours.</p>

</div>
</div>
</section>

<!-- ━━━ FINAL CTA ━━━ -->
<section class="section tint">
  <div class="container">
    <div class="cta-band" data-reveal>
      <div>
        <div class="cta-title">See VaultBook's security for yourself</div>
        <div class="muted">Open DevTools, check the Network tab — zero requests. That's the proof.</div>
      </div>
      <div class="cta-actions">
        <a class="btn btn-primary" href="{{ '/get-started/' | relative_url }}">Get started</a>
        <a class="btn btn-ghost" href="{{ '/contact/' | relative_url }}">Contact us</a>
      </div>
    </div>
  </div>
</section>
