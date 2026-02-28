---
layout: default
title: Privacy Policy
description: VaultBook's privacy policy — how we handle (and don't handle) your data. Offline-first, zero collection, zero tracking.
body_class: privacy-page
permalink: /privacy/
---

<style>
.pv-hero{
  padding: 72px 0 52px;
  text-align: center;
  background: linear-gradient(180deg, #faf8ff 0%, #f3f0fa 40%, #fff 100%);
  position: relative;
  overflow: hidden;
}
.pv-hero::before{
  content: '';
  position: absolute;
  width: 600px; height: 600px;
  border-radius: 50%;
  top: -240px; left: 50%;
  transform: translateX(-50%);
  background: radial-gradient(circle, rgba(206,147,216,.08) 0%, transparent 70%);
  pointer-events: none;
}
.pv-hero .eyebrow{ margin-bottom: 14px; position: relative; z-index:1; }
.pv-hero-title{
  font-size: clamp(34px, 5vw, 52px);
  font-weight: 900;
  letter-spacing: -0.03em;
  line-height: 1.08;
  margin: 0;
  position: relative; z-index:1;
}
.pv-hero-sub{
  margin: 16px auto 0;
  max-width: 52ch;
  font-size: 16.5px;
  color: rgba(11,11,11,.6);
  line-height: 1.55;
  position: relative; z-index:1;
}
.pv-hero-meta{
  margin-top: 20px;
  font-size: 13px;
  color: rgba(11,11,11,.4);
  position: relative; z-index:1;
}
.pv-highlights{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  margin-top: 36px;
  position: relative; z-index:1;
}
.pv-hi{
  text-align: center;
  padding: 22px 14px;
  background: rgba(255,255,255,.72);
  border: 1px solid rgba(206,147,216,.1);
  border-radius: 16px;
  transition: transform .2s ease, box-shadow .2s ease;
}
.pv-hi:hover{
  transform: translateY(-2px);
  box-shadow: 0 8px 22px rgba(206,147,216,.1);
}
.pv-hi-val{
  font-size: 28px;
  font-weight: 900;
  letter-spacing: -0.03em;
  background: linear-gradient(135deg, #7b1fa2, #0288d1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.pv-hi-label{
  margin-top: 3px;
  font-size: 12.5px;
  color: rgba(11,11,11,.46);
  font-weight: 650;
}
.pv-body{
  max-width: 720px;
  margin: 0 auto;
}
.pv-body h2{
  font-size: 22px;
  font-weight: 900;
  letter-spacing: -0.02em;
  margin: 44px 0 14px;
  padding-top: 8px;
}
.pv-body h3{
  font-size: 17px;
  font-weight: 850;
  margin: 28px 0 10px;
}
.pv-body p{
  font-size: 15.5px;
  color: rgba(11,11,11,.72);
  line-height: 1.7;
  margin: 0 0 14px;
}
.pv-body a{
  color: var(--blue, #1f6feb);
  text-decoration: underline;
  text-underline-offset: 3px;
}
.pv-divider{
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(206,147,216,.18), rgba(129,212,250,.15), transparent);
  margin: 40px 0;
  border: none;
}
.pv-callout{
  margin: 24px 0;
  padding: 20px 24px;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(243,229,245,.14), rgba(225,245,254,.1));
  border: 1px solid rgba(206,147,216,.12);
  position: relative;
  overflow: hidden;
}
.pv-callout::before{
  content: '';
  position: absolute;
  top: 0; left: 0; bottom: 0;
  width: 4px;
  background: linear-gradient(180deg, #ce93d8, #81d4fa);
}
.pv-callout p{ margin: 0; }
.pv-callout p + p{ margin-top: 10px; }
.pv-callout-title{
  font-weight: 850;
  font-size: 15px;
  color: rgba(11,11,11,.82);
  margin-bottom: 6px;
}
.pv-table{
  width: 100%;
  margin: 20px 0;
  border-collapse: collapse;
  font-size: 14px;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid rgba(206,147,216,.1);
}
.pv-table th{
  text-align: left;
  padding: 12px 16px;
  font-weight: 850;
  font-size: 13.5px;
  background: linear-gradient(135deg, rgba(243,229,245,.15), rgba(225,245,254,.1));
  border-bottom: 1px solid rgba(206,147,216,.1);
}
.pv-table td{
  padding: 10px 16px;
  border-bottom: 1px solid rgba(206,147,216,.05);
  color: rgba(11,11,11,.68);
  line-height: 1.5;
}
.pv-table tr:last-child td{ border-bottom: 0; }
.pv-table tr:hover td{ background: rgba(243,229,245,.06); }
.pv-check{ color: #00897b; font-weight: 800; }
.pv-cross{ color: rgba(11,11,11,.2); }
.pv-toc{
  margin: 0 0 36px;
  padding: 22px 24px;
  border-radius: 16px;
  background: rgba(255,255,255,.6);
  border: 1px solid rgba(206,147,216,.1);
}
.pv-toc-title{
  font-weight: 850;
  font-size: 14px;
  color: rgba(11,11,11,.55);
  text-transform: uppercase;
  letter-spacing: .06em;
  margin-bottom: 12px;
}
.pv-toc-list{
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.pv-toc-list a{
  font-size: 14px;
  color: rgba(11,11,11,.65);
  text-decoration: none;
  font-weight: 600;
  transition: color .2s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}
.pv-toc-list a::before{
  content: '';
  width: 6px; height: 6px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ce93d8, #81d4fa);
  flex-shrink: 0;
  opacity: .5;
}
.pv-toc-list a:hover{ color: #7b1fa2; }
.pv-toc-list a:hover::before{ opacity: 1; }
@media (max-width: 900px){
  .pv-highlights{ grid-template-columns: 1fr 1fr; }
}
@media (max-width: 600px){
  .pv-highlights{ grid-template-columns: 1fr; max-width: 280px; margin-left: auto; margin-right: auto; }
  .pv-body h2{ font-size: 20px; }
  .pv-table th, .pv-table td{ padding: 8px 12px; font-size: 13px; }
}
</style>


<!-- ━━━ HERO ━━━ -->
<section class="pv-hero">
  <div class="container" data-reveal>
    <div class="eyebrow">PRIVACY POLICY</div>
    <h1 class="pv-hero-title">Your data stays on your device.<br>Full stop.</h1>
    <p class="pv-hero-sub">
    VaultBook is architected so that your notes, files, and personal information
    never leave your computer. This policy explains exactly what we collect (almost nothing),
    what we don't (everything else), and why.
    </p>
    <p class="pv-hero-meta">Last updated: February 28, 2026 · Effective: February 28, 2026</p>
    <div class="pv-highlights">
      <div class="pv-hi">
        <div class="pv-hi-val">Zero</div>
        <div class="pv-hi-label">Personal data collected</div>
      </div>
      <div class="pv-hi">
        <div class="pv-hi-val">Zero</div>
        <div class="pv-hi-label">Network requests made</div>
      </div>
      <div class="pv-hi">
        <div class="pv-hi-val">Zero</div>
        <div class="pv-hi-label">Third-party trackers</div>
      </div>
      <div class="pv-hi">
        <div class="pv-hi-val">100%</div>
        <div class="pv-hi-label">Local processing</div>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="pv-body">
      <div class="pv-toc" data-reveal>
        <div class="pv-toc-title">Contents</div>
        <div class="pv-toc-list">
          <a href="#scope">1. Scope of This Policy</a>
          <a href="#architecture">2. Architectural Overview</a>
          <a href="#data-we-do-not-collect">3. Data We Do Not Collect</a>
          <a href="#data-stored-locally">4. Data Stored Locally on Your Device</a>
          <a href="#encryption">5. Encryption &amp; Security</a>
          <a href="#website">6. VaultBook Website (reportmedic.github.io)</a>
          <a href="#cookies">7. Cookies &amp; Local Storage</a>
          <a href="#third-party">8. Third-Party Services</a>
          <a href="#children">9. Children's Privacy</a>
          <a href="#data-retention">10. Data Retention &amp; Deletion</a>
          <a href="#data-portability">11. Data Portability</a>
          <a href="#international">12. International Users</a>
          <a href="#your-rights">13. Your Rights</a>
          <a href="#breach">14. Breach Notification</a>
          <a href="#changes">15. Changes to This Policy</a>
          <a href="#contact">16. Contact</a>
        </div>
      </div>

<h2 id="scope" data-reveal>1. Scope of This Policy</h2>

  <p>This Privacy Policy applies to the VaultBook desktop application (the "Application"), the VaultBook website at reportmedic.github.io (the "Website"), and any related services, documentation, or communications provided by VaultBook Labs ("we," "us," "our").</p>

  <p>The Application is a browser-based, offline-first workspace distributed as a single HTML file. It is designed to operate entirely on your local device without requiring an internet connection, user account, or server-side infrastructure. This architecture is central to our privacy model.</p>

  <hr class="pv-divider">

  <h2 id="architecture" data-reveal>2. Architectural Overview</h2>

  <p>Understanding VaultBook's architecture is essential to understanding our privacy posture. The Application runs entirely within your web browser. It does not communicate with any remote server, API endpoint, analytics service, or third-party provider during operation.</p>

  <div class="pv-callout" data-reveal>
    <div class="pv-callout-title">Key architectural facts</div>
    <p>The Application ships as a single HTML file containing all code, styles, and assets. It uses the browser's File System Access API to read and write data to a local folder that you explicitly select. No data is transmitted over any network connection. All AI features, search indexing, OCR processing, encryption, and analytics run locally in your browser's JavaScript runtime.</p>
  </div>

  <p>Because the Application has no backend, there is no server that receives, processes, stores, or has access to your content. We have no technical ability to access your notes, attachments, search queries, encryption passwords, or any other data you create or store in VaultBook.</p>

  <hr class="pv-divider">

  <h2 id="data-we-do-not-collect" data-reveal>3. Data We Do Not Collect</h2>

  <p>The following categories of data are never collected, transmitted, or accessible to VaultBook Labs at any point during your use of the Application:</p>

  <table class="pv-table" data-reveal>
    <thead>
      <tr>
        <th>Data category</th>
        <th style="text-align:center; width:120px;">Collected?</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Note content (titles, bodies, sections)</td><td style="text-align:center;"><span class="pv-cross">✕ No</span></td></tr>
      <tr><td>File attachments and their contents</td><td style="text-align:center;"><span class="pv-cross">✕ No</span></td></tr>
      <tr><td>Search queries and QA questions</td><td style="text-align:center;"><span class="pv-cross">✕ No</span></td></tr>
      <tr><td>Encryption passwords, keys, or salts</td><td style="text-align:center;"><span class="pv-cross">✕ No</span></td></tr>
      <tr><td>Labels, tags, or page structures</td><td style="text-align:center;"><span class="pv-cross">✕ No</span></td></tr>
      <tr><td>Vote data (upvotes / downvotes)</td><td style="text-align:center;"><span class="pv-cross">✕ No</span></td></tr>
      <tr><td>OCR-extracted text from images</td><td style="text-align:center;"><span class="pv-cross">✕ No</span></td></tr>
      <tr><td>Timetable or scheduling data</td><td style="text-align:center;"><span class="pv-cross">✕ No</span></td></tr>
      <tr><td>Analytics or usage metrics</td><td style="text-align:center;"><span class="pv-cross">✕ No</span></td></tr>
      <tr><td>IP addresses from the Application</td><td style="text-align:center;"><span class="pv-cross">✕ No</span></td></tr>
      <tr><td>Device identifiers or fingerprints</td><td style="text-align:center;"><span class="pv-cross">✕ No</span></td></tr>
      <tr><td>Browser type, OS, or screen resolution</td><td style="text-align:center;"><span class="pv-cross">✕ No</span></td></tr>
      <tr><td>Geolocation data</td><td style="text-align:center;"><span class="pv-cross">✕ No</span></td></tr>
      <tr><td>Contact lists, email addresses, or names</td><td style="text-align:center;"><span class="pv-cross">✕ No</span></td></tr>
      <tr><td>Behavioral, clickstream, or telemetry data</td><td style="text-align:center;"><span class="pv-cross">✕ No</span></td></tr>
    </tbody>
  </table>

  <p>This is not a selective list. We do not collect any data from the Application whatsoever. The Application makes zero network requests during its entire lifecycle — from the moment you open the HTML file to the moment you close the browser tab.</p>

  <hr class="pv-divider">

  <h2 id="data-stored-locally" data-reveal>4. Data Stored Locally on Your Device</h2>

  <p>When you use VaultBook, data is created and stored exclusively in a local folder on your device that you explicitly grant access to via the browser's File System Access API. This data never leaves your device. The following files and directories are created within your chosen folder:</p>

  <h3>4.1 Repository file</h3>

  <p><strong>repository.json</strong> — a single JSON file containing your page hierarchy, entry metadata (titles, labels, timestamps, scheduling data, favorite status), and vote data for search and related entries. Entry body content for entries exceeding a certain size is stored as separate sidecar files (see 4.2).</p>

  <h3>4.2 Entry body files</h3>

  <p><strong>/attachments/details-&lt;id&gt;.md</strong> — Markdown or HTML sidecar files containing the full body content of individual entries. These are plain-text files readable by any text editor.</p>

  <h3>4.3 Attachments</h3>

  <p><strong>/attachments/</strong> — a directory containing all files you attach to entries or sections. An <strong>index.txt</strong> manifest (JSON) maps attachment keys to file metadata. Text is extracted from attachment contents and indexed locally for search.</p>

  <h3>4.4 Version history</h3>

  <p><strong>/versions/</strong> — a directory containing per-entry version snapshots. Versions are retained for 60 days by default and are automatically pruned.</p>

  <h3>4.5 License file</h3>

  <p><strong>license.json</strong> — a file containing your license tier and activation status. This file is stored locally in your workspace folder and is not transmitted to any server.</p>

  <h3>4.6 Timetable data</h3>

  <p>Calendar and timetable entries are persisted to disk within your workspace folder and rehydrated on application load. This data is never transmitted externally.</p>

  <div class="pv-callout" data-reveal>
    <div class="pv-callout-title">You own your data files</div>
    <p>Every file VaultBook creates is a standard file format (JSON, Markdown, or the original format of your attachments) stored in a regular folder on your file system. You can inspect, copy, back up, version-control, or delete any of these files at any time using your operating system's native file tools. There are no proprietary binary formats and no database engines.</p>
  </div>

  <hr class="pv-divider">

  <h2 id="encryption" data-reveal>5. Encryption &amp; Security</h2>

  <h3>5.1 Per-entry encryption</h3>

  <p>VaultBook Pro includes optional per-entry encryption using AES-256-GCM, a symmetric encryption algorithm widely regarded as industry standard for data-at-rest protection. Key derivation uses PBKDF2 with 100,000 iterations of SHA-256. Each encrypted entry receives a unique random 16-byte salt and 12-byte initialization vector (IV).</p>

  <h3>5.2 Password handling</h3>

  <p>Encryption passwords are set per entry (not globally). Passwords are never stored on disk in any form — plaintext, hashed, or otherwise. During an active session, passwords may be cached in memory to avoid re-prompting when switching between encrypted entries. This session cache is cleared when you close the browser tab or navigate away.</p>

  <h3>5.3 Decrypted content</h3>

  <p>When you unlock an encrypted entry, the decrypted plaintext is held exclusively in the browser's JavaScript runtime memory (the <code>_plain</code> field). It is never written to disk in unencrypted form. When you navigate away from the entry or close the application, the decrypted content is released from memory.</p>

  <h3>5.4 Lock screen</h3>

  <p>VaultBook includes a lock screen that applies a full-page blur overlay, blocks all pointer events, and prevents text selection. This prevents casual visual access to your workspace when you step away.</p>

  <h3>5.5 What we cannot do</h3>

  <p>Because encryption keys are derived from passwords you set and are never transmitted to us, we have no ability to decrypt your encrypted entries. If you forget an entry's password, we cannot recover it. We strongly recommend keeping secure backups of your encryption passwords.</p>

  <hr class="pv-divider">

  <h2 id="website" data-reveal>6. VaultBook Website</h2>

  <p>The VaultBook marketing website (reportmedic.github.io) is a static site hosted on GitHub Pages. It contains no server-side logic, no databases, and no application code that processes personal data.</p>

  <h3>6.1 Hosting</h3>

  <p>The Website is hosted by GitHub, Inc. via GitHub Pages. GitHub may collect standard server logs (IP addresses, request timestamps, user agents) as part of its infrastructure. This data is governed by <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener">GitHub's Privacy Statement</a>. We do not have access to GitHub's raw server logs.</p>

  <h3>6.2 Analytics</h3>

  <p>We do not use Google Analytics, Mixpanel, Hotjar, Segment, or any third-party analytics, tracking, or advertising service on the Website. We do not embed tracking pixels, social media widgets, or retargeting scripts.</p>

  <h3>6.3 Forms and user input</h3>

  <p>The Website does not contain forms that collect personal information. Contact is facilitated through Telegram (t.me/VaultBook), which is a third-party service governed by <a href="https://telegram.org/privacy" target="_blank" rel="noopener">Telegram's Privacy Policy</a>. Any information you share with us via Telegram is subject to Telegram's data handling practices in addition to our commitment to treating your communications confidentially.</p>

  <h3>6.4 Download links</h3>

  <p>Application download links point to files hosted on GitHub (raw.githubusercontent.com). Downloading a file may be logged by GitHub's infrastructure. We do not add tracking parameters, redirects, or analytics wrappers to download URLs.</p>

  <hr class="pv-divider">

  <h2 id="cookies" data-reveal>7. Cookies &amp; Local Storage</h2>

  <h3>7.1 The Application</h3>

  <p>The VaultBook Application does not set cookies. It does not use the browser's <code>localStorage</code>, <code>sessionStorage</code>, or <code>IndexedDB</code> APIs for persistent data storage. All persistent data is stored via the File System Access API in the folder you explicitly select. In-session state is held in JavaScript runtime memory and is released when the tab closes.</p>

  <h3>7.2 The Website</h3>

  <p>The VaultBook Website does not set first-party cookies. It does not use local storage or session storage. GitHub Pages may set technical cookies as part of its hosting infrastructure; these are governed by GitHub's policies and are outside our control.</p>

  <hr class="pv-divider">

  <h2 id="third-party" data-reveal>8. Third-Party Services</h2>

  <p>The following third-party services are involved in the VaultBook ecosystem. None of these services have access to the content you create or store in the Application.</p>

  <table class="pv-table" data-reveal>
    <thead>
      <tr>
        <th>Service</th>
        <th>Purpose</th>
        <th>Data shared</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>GitHub Pages</strong></td>
        <td>Website hosting &amp; file downloads</td>
        <td>Standard HTTP request data (IP, user agent) per GitHub's policy</td>
      </tr>
      <tr>
        <td><strong>Telegram</strong></td>
        <td>Customer contact channel</td>
        <td>Only what you voluntarily send us via Telegram</td>
      </tr>
      <tr>
        <td><strong>Google Fonts</strong></td>
        <td>Web font delivery for the Website</td>
        <td>Standard HTTP request data per Google's policy</td>
      </tr>
    </tbody>
  </table>

  <p>The Application itself makes zero network requests and therefore has no third-party service dependencies during operation. All JavaScript libraries (marked.js, Tesseract for OCR, etc.) are bundled inline within the HTML file and loaded locally.</p>

  <hr class="pv-divider">

  <h2 id="children" data-reveal>9. Children's Privacy</h2>

  <p>VaultBook is a general-purpose productivity tool not directed at children under the age of 13 (or the applicable age of digital consent in your jurisdiction). Because the Application does not collect any personal data, there is no mechanism by which children's data could be collected, stored, or processed by us.</p>

  <p>If you are a parent or guardian and believe a child has provided personal information to us through our Telegram contact channel, please contact us and we will promptly delete any such information.</p>

  <hr class="pv-divider">

  <h2 id="data-retention" data-reveal>10. Data Retention &amp; Deletion</h2>

  <h3>10.1 Application data</h3>

  <p>All data created by the Application is stored on your device and is retained for as long as the files exist on your file system. We have no copy of your data and therefore cannot retain or delete it. You may delete your entire VaultBook workspace at any time by deleting the folder you selected.</p>

  <h3>10.2 Version history</h3>

  <p>Version snapshots are stored in the <code>/versions</code> directory within your workspace. Versions older than 60 days are automatically pruned by the Application. You may manually delete version files at any time.</p>

  <h3>10.3 Telegram communications</h3>

  <p>If you contact us via Telegram, message content is retained within the Telegram platform per Telegram's data retention policies. You may delete your messages at any time using Telegram's built-in deletion features. We do not export, archive, or store Telegram conversations in any external system.</p>

  <hr class="pv-divider">

  <h2 id="data-portability" data-reveal>11. Data Portability</h2>

  <p>VaultBook is designed for complete data portability. Your workspace consists entirely of standard file formats:</p>

  <table class="pv-table" data-reveal>
    <thead>
      <tr>
        <th>File</th>
        <th>Format</th>
        <th>Readable by</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>repository.json</td><td>JSON</td><td>Any text editor, JSON viewer, or programming language</td></tr>
      <tr><td>details-*.md</td><td>Markdown / HTML</td><td>Any text editor or Markdown renderer</td></tr>
      <tr><td>index.txt</td><td>JSON</td><td>Any text editor or JSON parser</td></tr>
      <tr><td>Attachments</td><td>Original formats</td><td>Their native applications</td></tr>
      <tr><td>Version snapshots</td><td>JSON / Markdown</td><td>Any text editor</td></tr>
    </tbody>
  </table>

  <p>There is no export step, no data request process, and no proprietary format to convert from. Your data is already in portable, open formats stored in a regular folder on your file system. You can copy it, back it up, sync it with any cloud drive, or migrate it to another tool at any time without our involvement.</p>

  <hr class="pv-divider">

  <h2 id="international" data-reveal>12. International Users</h2>

  <h3>12.1 GDPR (European Economic Area)</h3>

  <p>Because the Application does not collect, process, or transmit personal data to any server, there is no "data controller" or "data processor" relationship between VaultBook Labs and Application users in the context of GDPR. Your data remains entirely under your control on your local device. The Website's hosting on GitHub Pages may involve data processing by GitHub in accordance with their GDPR compliance commitments.</p>

  <h3>12.2 CCPA (California)</h3>

  <p>VaultBook Labs does not sell personal information. We do not collect personal information from the Application. California residents have the right to know what personal information is collected — in VaultBook's case, the answer is none.</p>

  <h3>12.3 PIPEDA (Canada)</h3>

  <p>The Application does not collect personal information from Canadian users. Interactions with the Website are limited to standard HTTP request data processed by GitHub's infrastructure.</p>

  <h3>12.4 Other jurisdictions</h3>

  <p>Because VaultBook's architecture does not involve collection or cross-border transfer of personal data, the Application is compatible with data residency and data sovereignty requirements in any jurisdiction. Your data physically resides wherever your device is located.</p>

  <hr class="pv-divider">

  <h2 id="your-rights" data-reveal>13. Your Rights</h2>

  <p>Regardless of your jurisdiction, you have the following rights with respect to your VaultBook data:</p>

  <div class="pv-callout" data-reveal>
    <p><strong>Right to access</strong> — All your data is stored in a folder on your device in open formats. You can access it at any time without requesting it from us.</p>
    <p><strong>Right to rectification</strong> — You can edit any entry, label, page, or attachment directly within VaultBook or by editing the underlying files.</p>
    <p><strong>Right to erasure</strong> — You can delete individual entries within VaultBook or delete the entire workspace folder from your file system. We have no copy to retain.</p>
    <p><strong>Right to portability</strong> — Your data is already stored in portable, open formats (JSON, Markdown, original attachment formats). No export process is needed.</p>
    <p><strong>Right to restrict processing</strong> — All processing occurs locally on your device. You can stop processing at any time by closing the browser tab.</p>
    <p><strong>Right to object</strong> — Because there is no remote processing, there is no processing to object to.</p>
  </div>

  <hr class="pv-divider">

  <h2 id="breach" data-reveal>14. Breach Notification</h2>

  <p>Because VaultBook Labs does not store, transmit, or have access to user data, a traditional data breach affecting your VaultBook content through our systems is not possible. There is no server to compromise, no database to exfiltrate, and no backups under our control.</p>

  <p>If a security vulnerability is discovered in the Application's code that could affect the integrity or confidentiality of locally stored data, we will disclose the vulnerability promptly on our Website and through our Telegram channel, along with remediation steps and an updated version of the Application.</p>

  <hr class="pv-divider">

  <h2 id="changes" data-reveal>15. Changes to This Policy</h2>

  <p>We may update this Privacy Policy from time to time to reflect changes in the Application's features, our business practices, or applicable law. When we make material changes, we will update the "Last updated" date at the top of this page and, where appropriate, notify users through our Website or Telegram channel.</p>

  <p>Because VaultBook's core architecture is offline-first with zero data collection, we do not anticipate material changes to the fundamental privacy posture described in this policy. If a future version of VaultBook were to introduce any network connectivity or data collection, that change would be prominently disclosed before implementation and would require explicit user consent.</p>

  <hr class="pv-divider">

  <h2 id="contact" data-reveal>16. Contact</h2>

  <p>If you have questions about this Privacy Policy, wish to report a security concern, or want to exercise any of your data rights, you can reach us through Telegram:</p>

  <p><strong>Telegram:</strong> <a href="https://t.me/VaultBook" target="_blank" rel="noopener">t.me/VaultBook</a></p>

  <p><strong>Entity:</strong> VaultBook Labs, Chicago, Illinois, United States.</p>

  <p>We aim to respond to all privacy-related inquiries within 72 hours.</p>

</div>
</div>
</section>

<!-- ━━━ FINAL CTA ━━━ -->
<section class="section tint">
  <div class="container">
    <div class="cta-band" data-reveal>
      <div>
        <div class="cta-title">Questions about privacy?</div>
        <div class="muted">Reach out on Telegram — or just download VaultBook and see for yourself.</div>
      </div>
      <div class="cta-actions">
        <a class="btn btn-primary" href="{{ '/get-started/' | relative_url }}">Get started</a>
        <a class="btn btn-ghost" href="{{ '/contact/' | relative_url }}">Contact us</a>
      </div>
    </div>
  </div>
</section>
