---
layout: default
title: Terms of Service
description: VaultBook's terms of service — clear, fair rules for using our offline-first workspace. No surprises, no hidden clauses.
body_class: terms-page
permalink: /terms/
---

<style>
.ts-hero{
  padding: 72px 0 52px;
  text-align: center;
  background: linear-gradient(180deg, #faf8ff 0%, #f3f0fa 40%, #fff 100%);
  position: relative;
  overflow: hidden;
}
.ts-hero::before{
  content: '';
  position: absolute;
  width: 600px; height: 600px;
  border-radius: 50%;
  top: -240px; left: 50%;
  transform: translateX(-50%);
  background: radial-gradient(circle, rgba(206,147,216,.08) 0%, transparent 70%);
  pointer-events: none;
}
.ts-hero .eyebrow{ margin-bottom: 14px; position: relative; z-index:1; }
.ts-hero-title{
  font-size: clamp(34px, 5vw, 52px);
  font-weight: 900;
  letter-spacing: -0.03em;
  line-height: 1.08;
  margin: 0;
  position: relative; z-index:1;
}
.ts-hero-sub{
  margin: 16px auto 0;
  max-width: 54ch;
  font-size: 16.5px;
  color: rgba(11,11,11,.6);
  line-height: 1.55;
  position: relative; z-index:1;
}
.ts-hero-meta{
  margin-top: 20px;
  font-size: 13px;
  color: rgba(11,11,11,.4);
  position: relative; z-index:1;
}
.ts-highlights{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  margin-top: 36px;
  position: relative; z-index:1;
}
.ts-hi{
  text-align: center;
  padding: 22px 14px;
  background: rgba(255,255,255,.72);
  border: 1px solid rgba(206,147,216,.1);
  border-radius: 16px;
  transition: transform .2s ease, box-shadow .2s ease;
}
.ts-hi:hover{
  transform: translateY(-2px);
  box-shadow: 0 8px 22px rgba(206,147,216,.1);
}
.ts-hi-val{
  font-size: 28px;
  font-weight: 900;
  letter-spacing: -0.03em;
  background: linear-gradient(135deg, #7b1fa2, #0288d1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.ts-hi-label{
  margin-top: 3px;
  font-size: 12.5px;
  color: rgba(11,11,11,.46);
  font-weight: 650;
}
.ts-body{
  max-width: 720px;
  margin: 0 auto;
}
.ts-body h2{
  font-size: 22px;
  font-weight: 900;
  letter-spacing: -0.02em;
  margin: 44px 0 14px;
  padding-top: 8px;
}
.ts-body h3{
  font-size: 17px;
  font-weight: 850;
  margin: 28px 0 10px;
}
.ts-body p{
  font-size: 15.5px;
  color: rgba(11,11,11,.72);
  line-height: 1.7;
  margin: 0 0 14px;
}
.ts-body a{
  color: var(--blue, #1f6feb);
  text-decoration: underline;
  text-underline-offset: 3px;
}
.ts-divider{
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(206,147,216,.18), rgba(129,212,250,.15), transparent);
  margin: 40px 0;
  border: none;
}
.ts-callout{
  margin: 24px 0;
  padding: 20px 24px;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(243,229,245,.14), rgba(225,245,254,.1));
  border: 1px solid rgba(206,147,216,.12);
  position: relative;
  overflow: hidden;
}
.ts-callout::before{
  content: '';
  position: absolute;
  top: 0; left: 0; bottom: 0;
  width: 4px;
  background: linear-gradient(180deg, #ce93d8, #81d4fa);
}
.ts-callout p{ margin: 0; }
.ts-callout p + p{ margin-top: 10px; }
.ts-callout-title{
  font-weight: 850;
  font-size: 15px;
  color: rgba(11,11,11,.82);
  margin-bottom: 6px;
}
.ts-table{
  width: 100%;
  margin: 20px 0;
  border-collapse: collapse;
  font-size: 14px;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid rgba(206,147,216,.1);
}
.ts-table th{
  text-align: left;
  padding: 12px 16px;
  font-weight: 850;
  font-size: 13.5px;
  background: linear-gradient(135deg, rgba(243,229,245,.15), rgba(225,245,254,.1));
  border-bottom: 1px solid rgba(206,147,216,.1);
}
.ts-table td{
  padding: 10px 16px;
  border-bottom: 1px solid rgba(206,147,216,.05);
  color: rgba(11,11,11,.68);
  line-height: 1.5;
}
.ts-table tr:last-child td{ border-bottom: 0; }
.ts-table tr:hover td{ background: rgba(243,229,245,.06); }
.ts-check{ color: #00897b; font-weight: 800; }
.ts-cross{ color: rgba(11,11,11,.2); }
.ts-toc{
  margin: 0 0 36px;
  padding: 22px 24px;
  border-radius: 16px;
  background: rgba(255,255,255,.6);
  border: 1px solid rgba(206,147,216,.1);
}
.ts-toc-title{
  font-weight: 850;
  font-size: 14px;
  color: rgba(11,11,11,.55);
  text-transform: uppercase;
  letter-spacing: .06em;
  margin-bottom: 12px;
}
.ts-toc-list{
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.ts-toc-list a{
  font-size: 14px;
  color: rgba(11,11,11,.65);
  text-decoration: none;
  font-weight: 600;
  transition: color .2s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}
.ts-toc-list a::before{
  content: '';
  width: 6px; height: 6px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ce93d8, #81d4fa);
  flex-shrink: 0;
  opacity: .5;
}
.ts-toc-list a:hover{ color: #7b1fa2; }
.ts-toc-list a:hover::before{ opacity: 1; }
@media (max-width: 900px){
  .ts-highlights{ grid-template-columns: 1fr 1fr; }
}
@media (max-width: 600px){
  .ts-highlights{ grid-template-columns: 1fr; max-width: 280px; margin-left: auto; margin-right: auto; }
  .ts-body h2{ font-size: 20px; }
  .ts-table th, .ts-table td{ padding: 8px 12px; font-size: 13px; }
}
</style>


<!-- ━━━ HERO ━━━ -->
<section class="ts-hero">
  <div class="container" data-reveal>
    <div class="eyebrow">TERMS OF SERVICE</div>
    <h1 class="ts-hero-title">Fair terms for a product<br>that respects you.</h1>
    <p class="ts-hero-sub">
    VaultBook is built on transparency. These terms are written to be read — not to hide behind.
    They govern your use of the VaultBook application, website, and related services.
    </p>
    <p class="ts-hero-meta">Last updated: February 28, 2026 · Effective: February 28, 2026</p>
    <div class="ts-highlights">
      <div class="ts-hi">
        <div class="ts-hi-val">Yours</div>
        <div class="ts-hi-label">Your data, your ownership</div>
      </div>
      <div class="ts-hi">
        <div class="ts-hi-val">Clear</div>
        <div class="ts-hi-label">Plain-language terms</div>
      </div>
      <div class="ts-hi">
        <div class="ts-hi-val">Fair</div>
        <div class="ts-hi-label">No predatory clauses</div>
      </div>
      <div class="ts-hi">
        <div class="ts-hi-val">Local</div>
        <div class="ts-hi-label">Everything stays on-device</div>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="ts-body">
      <div class="ts-toc" data-reveal>
        <div class="ts-toc-title">Contents</div>
        <div class="ts-toc-list">
          <a href="#agreement">1. Agreement to Terms</a>
          <a href="#definitions">2. Definitions</a>
          <a href="#eligibility">3. Eligibility</a>
          <a href="#license">4. License &amp; Access</a>
          <a href="#tiers">5. License Tiers</a>
          <a href="#data-ownership">6. Data Ownership</a>
          <a href="#acceptable-use">7. Acceptable Use</a>
          <a href="#intellectual-property">8. Intellectual Property</a>
          <a href="#third-party">9. Third-Party Services</a>
          <a href="#disclaimer">10. Disclaimer of Warranties</a>
          <a href="#limitation">11. Limitation of Liability</a>
          <a href="#indemnification">12. Indemnification</a>
          <a href="#termination">13. Termination</a>
          <a href="#updates">14. Updates &amp; Modifications</a>
          <a href="#governing-law">15. Governing Law &amp; Dispute Resolution</a>
          <a href="#severability">16. Severability</a>
          <a href="#entire-agreement">17. Entire Agreement</a>
          <a href="#changes">18. Changes to These Terms</a>
          <a href="#contact">19. Contact</a>
        </div>
      </div>

<h2 id="agreement" data-reveal>1. Agreement to Terms</h2>

  <p>By downloading, installing, opening, or otherwise using the VaultBook application (the "Application") or accessing the VaultBook website at reportmedic.github.io (the "Website"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you must not use the Application or Website.</p>

  <p>These Terms constitute a legally binding agreement between you ("you," "your," "user") and VaultBook Labs ("we," "us," "our"), a company based in San Francisco, California, United States. Your continued use of the Application or Website following any changes to these Terms constitutes your acceptance of those changes.</p>

  <div class="ts-callout" data-reveal>
    <div class="ts-callout-title">Plain-language summary</div>
    <p>Using VaultBook means you agree to these terms. We have written them to be readable and fair. If you disagree with anything here, you are free to stop using VaultBook at any time — and because all your data is stored locally in open formats, you can take everything with you.</p>
  </div>

  <hr class="ts-divider">

  <h2 id="definitions" data-reveal>2. Definitions</h2>

  <p>The following definitions apply throughout these Terms:</p>

  <table class="ts-table" data-reveal>
    <thead>
      <tr>
        <th style="width:180px;">Term</th>
        <th>Definition</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Application</strong></td>
        <td>The VaultBook desktop application, distributed as a self-contained HTML file that runs locally in a web browser. This includes both VaultBook Plus and VaultBook Pro editions.</td>
      </tr>
      <tr>
        <td><strong>Website</strong></td>
        <td>The VaultBook marketing and documentation website located at reportmedic.github.io, including all pages, blog posts, downloads, and documentation hosted there.</td>
      </tr>
      <tr>
        <td><strong>Services</strong></td>
        <td>Collectively, the Application, the Website, and any associated support, documentation, or communications provided by VaultBook Labs.</td>
      </tr>
      <tr>
        <td><strong>Workspace</strong></td>
        <td>The local folder on your device that you designate for VaultBook data storage via the File System Access API, including all files and subdirectories created within it.</td>
      </tr>
      <tr>
        <td><strong>Content</strong></td>
        <td>Any data you create, import, store, or process using the Application, including notes, attachments, labels, pages, sections, timetable entries, and metadata.</td>
      </tr>
      <tr>
        <td><strong>License Key</strong></td>
        <td>The license.json file stored in your Workspace that determines your license tier and feature entitlements.</td>
      </tr>
    </tbody>
  </table>

  <hr class="ts-divider">

  <h2 id="eligibility" data-reveal>3. Eligibility</h2>

  <p>You must be at least 13 years of age (or the applicable age of digital consent in your jurisdiction) to use VaultBook. If you are between 13 and the age of legal majority in your jurisdiction, you represent that a parent or legal guardian has reviewed and agreed to these Terms on your behalf.</p>

  <p>By using VaultBook, you represent and warrant that you have the legal capacity to enter into a binding agreement and are not barred from doing so under any applicable law. If you are using VaultBook on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.</p>

  <hr class="ts-divider">

  <h2 id="license" data-reveal>4. License &amp; Access</h2>

  <h3>4.1 Grant of license</h3>

  <p>Subject to your compliance with these Terms, VaultBook Labs grants you a limited, non-exclusive, non-transferable, revocable license to download, install, and use the Application for personal or internal business purposes. This license does not include the right to sublicense, redistribute, modify, decompile, reverse-engineer, or create derivative works of the Application.</p>

  <h3>4.2 Scope of use</h3>

  <p>You may install and use the Application on any number of devices that you personally own or control. The Application operates entirely on your local device and does not require or establish a connection to any VaultBook Labs server. Accordingly, we do not monitor, limit, or restrict your access to the Application once it has been downloaded.</p>

  <h3>4.3 Offline operation</h3>

  <p>The Application is designed to function entirely offline. No internet connection is required after the initial download. All features — including search, AI suggestions, OCR processing, encryption, analytics, and built-in tools — execute locally within your browser's JavaScript runtime. This offline architecture is a fundamental design principle, not a temporary limitation.</p>

  <div class="ts-callout" data-reveal>
    <div class="ts-callout-title">What this means for you</div>
    <p>Once you download VaultBook, it works without any dependency on our servers. We cannot remotely disable, restrict, or modify the copy of VaultBook on your device. Your ability to use VaultBook is not contingent on the continued operation of VaultBook Labs, our website, or any third-party service.</p>
  </div>

  <hr class="ts-divider">

  <h2 id="tiers" data-reveal>5. License Tiers</h2>

  <p>VaultBook is available in two editions, each providing a different level of features and capability:</p>

  <table class="ts-table" data-reveal>
    <thead>
      <tr>
        <th>Edition</th>
        <th>Access</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>VaultBook Plus</strong></td>
        <td>Paid</td>
        <td>The core edition of VaultBook, including note-taking, organization, search, attachments, and local storage.</td>
      </tr>
      <tr>
        <td><strong>VaultBook Pro</strong></td>
        <td>Licensed</td>
        <td>The premium edition with advanced features, including per-entry AES-256-GCM encryption, extended AI capabilities, and additional productivity tools.</td>
      </tr>
    </tbody>
  </table>

  <h3>5.1 VaultBook Plus</h3>

  <p>VaultBook Plus requires a valid License Key. License terms, including duration and pricing, are specified at the time of purchase. You may use VaultBook Plus without registration or the creation of an account. There are no usage limits, no feature time-bombs, and no forced upgrades.</p>

  <h3>5.2 VaultBook Pro</h3>

  <p>VaultBook Pro requires a valid License Key. License terms, including duration and pricing, are specified at the time of purchase. Your License Key is stored locally in your Workspace as a license.json file and is validated entirely on-device — no server check or internet connection is required for license validation.</p>

  <h3>5.3 Trial periods</h3>

  <p>VaultBook Pro may include a trial period during which you can evaluate Pro features before purchasing a license. Trial duration is specified in the Application. When a trial expires, the Application gracefully reverts to VaultBook Plus functionality. No data is lost, removed, or made inaccessible upon trial expiry.</p>

  <hr class="ts-divider">

  <h2 id="data-ownership" data-reveal>6. Data Ownership</h2>

  <h3>6.1 You own your data</h3>

  <p>All Content you create, import, or store using VaultBook is and remains exclusively your property. VaultBook Labs does not claim any ownership, license, or interest in your Content. These Terms do not grant us any right to access, view, use, analyze, sell, or share your Content.</p>

  <h3>6.2 No data collection</h3>

  <p>The Application does not transmit your Content, metadata, usage patterns, search queries, or any other data to VaultBook Labs or any third party. There is no server-side component and no telemetry. For complete details on our data practices, please see our <a href="{{ '/privacy/' | relative_url }}">Privacy Policy</a>.</p>

  <h3>6.3 Data portability</h3>

  <p>Your Workspace consists entirely of standard, open file formats — JSON, Markdown, HTML, and original attachment formats. There is no proprietary database, no vendor lock-in, and no export process required. You can copy, back up, sync, or migrate your data at any time using your operating system's native file management tools.</p>

  <h3>6.4 Data responsibility</h3>

  <p>Because your Content is stored exclusively on your local device and we have no access to it, you are solely responsible for maintaining backups of your Workspace. We strongly recommend regular backups to an external drive, cloud storage, or version control system. VaultBook Labs is not responsible for data loss resulting from hardware failure, accidental deletion, file system corruption, or any other cause outside our control.</p>

  <div class="ts-callout" data-reveal>
    <div class="ts-callout-title">Our philosophy on data ownership</div>
    <p>We believe that note-taking and knowledge management are deeply personal activities. Your thoughts, research, and files belong to you — period. We designed VaultBook so that the question of data ownership never becomes ambiguous. You don't need to request an export, file a deletion request, or trust us with your data. It is already on your device, in formats you can read without VaultBook.</p>
  </div>

  <hr class="ts-divider">

  <h2 id="acceptable-use" data-reveal>7. Acceptable Use</h2>

  <h3>7.1 Permitted uses</h3>

  <p>You may use VaultBook for any lawful purpose, including personal note-taking, professional knowledge management, academic research, project planning, file organization, and any other productivity workflow that the Application supports.</p>

  <h3>7.2 Restrictions</h3>

  <p>You agree not to engage in any of the following activities:</p>

  <div class="ts-callout" data-reveal>
    <p><strong>Reverse engineering</strong> — Decompile, disassemble, reverse-engineer, or attempt to derive the source code of the Application, except to the extent that such activity is expressly permitted by applicable law notwithstanding this limitation.</p>
    <p><strong>Redistribution</strong> — Redistribute, sublicense, lease, rent, or lend the Application to third parties, or make the Application available over a network where it could be used by multiple devices simultaneously, except as permitted under Section 4.2.</p>
    <p><strong>Modification</strong> — Modify, adapt, translate, or create derivative works based on the Application without prior written consent from VaultBook Labs.</p>
    <p><strong>Circumvention</strong> — Attempt to bypass, disable, or circumvent any license validation, feature gating, trial period mechanism, or other technical measure within the Application.</p>
    <p><strong>Misrepresentation</strong> — Falsely represent VaultBook Labs, the Application, or your relationship with VaultBook Labs, or use VaultBook trademarks or branding without authorization.</p>
    <p><strong>Unlawful activity</strong> — Use the Application in connection with any activity that violates applicable local, state, national, or international law or regulation.</p>
  </div>

  <h3>7.3 Content responsibility</h3>

  <p>Because the Application processes and stores Content exclusively on your device, you are solely responsible for the legality, appropriateness, and integrity of the Content you create and store. VaultBook Labs does not and cannot monitor, review, or moderate Content created or stored within the Application.</p>

  <hr class="ts-divider">

  <h2 id="intellectual-property" data-reveal>8. Intellectual Property</h2>

  <h3>8.1 VaultBook intellectual property</h3>

  <p>The Application, Website, and all associated materials — including source code, object code, design, layout, user interface, graphics, icons, documentation, and branding — are the exclusive property of VaultBook Labs and are protected by copyright, trademark, trade secret, and other intellectual property laws. These Terms do not transfer any intellectual property rights to you beyond the limited license granted in Section 4.</p>

  <h3>8.2 Trademarks</h3>

  <p>"VaultBook," "VaultBook Plus," "VaultBook Pro," "VaultBook Labs," and associated logos and marks are trademarks of VaultBook Labs. You may not use these marks without our prior written consent, except to accurately refer to VaultBook in contexts such as reviews, editorial commentary, or compatibility statements.</p>

  <h3>8.3 Third-party components</h3>

  <p>The Application may incorporate open-source software components and third-party libraries. Each such component is licensed under its respective license terms, which are preserved in the Application's source code. Your use of these components is governed by their respective licenses in addition to these Terms.</p>

  <h3>8.4 Feedback</h3>

  <p>If you provide suggestions, feature requests, bug reports, or other feedback to VaultBook Labs through our Telegram channel or any other medium ("Feedback"), you grant us a non-exclusive, royalty-free, perpetual, irrevocable license to use, modify, and incorporate such Feedback into the Application or Services without restriction or obligation to you. This license applies only to the Feedback itself and does not extend to your Content.</p>

  <hr class="ts-divider">

  <h2 id="third-party" data-reveal>9. Third-Party Services</h2>

  <p>The VaultBook ecosystem involves a limited number of third-party services. These services do not have access to your Content.</p>

  <table class="ts-table" data-reveal>
    <thead>
      <tr>
        <th>Service</th>
        <th>Role</th>
        <th>Governed by</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>GitHub Pages</strong></td>
        <td>Website hosting and file downloads</td>
        <td><a href="https://docs.github.com/en/site-policy/github-terms/github-terms-of-service" target="_blank" rel="noopener">GitHub Terms of Service</a></td>
      </tr>
      <tr>
        <td><strong>Telegram</strong></td>
        <td>Customer support and communication</td>
        <td><a href="https://telegram.org/tos" target="_blank" rel="noopener">Telegram Terms of Service</a></td>
      </tr>
      <tr>
        <td><strong>Google Fonts</strong></td>
        <td>Web font delivery for the Website</td>
        <td><a href="https://developers.google.com/terms" target="_blank" rel="noopener">Google API Terms</a></td>
      </tr>
    </tbody>
  </table>

  <p>Your use of these third-party services is subject to their respective terms and privacy policies. VaultBook Labs is not responsible for the practices, content, or availability of third-party services.</p>

  <p>The Application itself makes zero network requests during operation. All bundled libraries (including marked.js, Tesseract.js for OCR, and others) are embedded directly in the HTML file and execute locally. There are no runtime dependencies on third-party servers, CDNs, or APIs.</p>

  <hr class="ts-divider">

  <h2 id="disclaimer" data-reveal>10. Disclaimer of Warranties</h2>

  <p>THE APPLICATION AND SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE. TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, VAULTBOOK LABS DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.</p>

  <p>Without limiting the foregoing, VaultBook Labs does not warrant that:</p>

  <div class="ts-callout" data-reveal>
    <p>The Application will meet all of your requirements or expectations.</p>
    <p>The Application will be uninterrupted, timely, secure, or error-free.</p>
    <p>The results obtained from the Application will be accurate, reliable, or complete.</p>
    <p>Any defects in the Application will be corrected within a specific timeframe.</p>
    <p>The Application will be compatible with all browsers, operating systems, or hardware configurations.</p>
  </div>

  <p>You acknowledge that the Application relies on the File System Access API provided by your browser. Browser support, behavior, and limitations for this API are outside the control of VaultBook Labs. You are responsible for using a supported browser environment.</p>

  <hr class="ts-divider">

  <h2 id="limitation" data-reveal>11. Limitation of Liability</h2>

  <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL VAULTBOOK LABS, ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:</p>

  <div class="ts-callout" data-reveal>
    <p>Your use of or inability to use the Application or Services.</p>
    <p>Loss or corruption of data stored in your Workspace, regardless of cause.</p>
    <p>Unauthorized access to your device or Workspace by third parties.</p>
    <p>The loss of encryption passwords that you set within the Application.</p>
    <p>Any interruption, suspension, or discontinuation of the Website or download services.</p>
    <p>Any third-party conduct, content, or services referenced in or linked from the Website.</p>
    <p>Any bugs, viruses, or other harmful components that may be transmitted through the Website or download files.</p>
  </div>

  <p>IN NO EVENT SHALL THE TOTAL AGGREGATE LIABILITY OF VAULTBOOK LABS FOR ALL CLAIMS ARISING FROM OR RELATED TO THESE TERMS OR THE SERVICES EXCEED THE AMOUNT YOU PAID TO VAULTBOOK LABS IN THE TWELVE (12) MONTHS IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO THE CLAIM, OR FIFTY U.S. DOLLARS ($50.00), WHICHEVER IS GREATER.</p>

  <p>Some jurisdictions do not allow the exclusion or limitation of certain damages. In such jurisdictions, our liability shall be limited to the greatest extent permitted by law.</p>

  <hr class="ts-divider">

  <h2 id="indemnification" data-reveal>12. Indemnification</h2>

  <p>You agree to indemnify, defend, and hold harmless VaultBook Labs and its officers, directors, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, costs, and expenses (including reasonable attorneys' fees) arising from or related to:</p>

  <div class="ts-callout" data-reveal>
    <p>Your use of the Application or Services in violation of these Terms.</p>
    <p>Your Content, including any claim that your Content infringes or violates any third-party intellectual property, privacy, or other right.</p>
    <p>Your violation of any applicable law, regulation, or third-party right.</p>
    <p>Any dispute between you and any third party arising from your use of the Application.</p>
  </div>

  <hr class="ts-divider">

  <h2 id="termination" data-reveal>13. Termination</h2>

  <h3>13.1 By you</h3>

  <p>You may stop using VaultBook at any time for any reason. Because the Application operates entirely on your device and does not require an account, there is no account to close or cancellation process to complete. You may simply stop using the Application. Your Workspace and Content remain on your device in standard file formats and are fully accessible with or without VaultBook.</p>

  <h3>13.2 By us</h3>

  <p>VaultBook Labs reserves the right to terminate or suspend your license to use the Application if you materially breach these Terms. Given the Application's offline architecture, enforcement of termination is limited to revocation of license entitlements for VaultBook Pro. We have no ability to remotely delete your data, disable your installed copy of the Application, or otherwise restrict your access to Content already stored on your device.</p>

  <h3>13.3 Effect of termination</h3>

  <p>Upon termination or expiration of your license, your right to use VaultBook Pro features ceases, but your Workspace and all Content remain on your device. You may continue to access your data using any compatible application, text editor, or file manager. Sections 6 (Data Ownership), 8 (Intellectual Property), 10 (Disclaimer), 11 (Limitation of Liability), 12 (Indemnification), and 15 (Governing Law) survive termination.</p>

  <hr class="ts-divider">

  <h2 id="updates" data-reveal>14. Updates &amp; Modifications</h2>

  <h3>14.1 Application updates</h3>

  <p>VaultBook Labs may release updated versions of the Application from time to time. Because VaultBook is a self-contained HTML file with no auto-update mechanism, updates are never installed without your knowledge or consent. You choose whether and when to download a new version. Older versions of the Application will continue to function with your existing Workspace.</p>

  <h3>14.2 Backward compatibility</h3>

  <p>We are committed to maintaining backward compatibility with existing Workspaces when releasing new versions. If a future update were to introduce a breaking change to the data format, we would provide clear documentation, migration guidance, and advance notice before the change takes effect.</p>

  <h3>14.3 Feature changes</h3>

  <p>We reserve the right to add, modify, or remove features in future versions of the Application. Changes to features in VaultBook Plus will not affect existing installed copies. Changes to VaultBook Pro features may be reflected in updated License Key terms for new or renewed licenses.</p>

  <hr class="ts-divider">

  <h2 id="governing-law" data-reveal>15. Governing Law &amp; Dispute Resolution</h2>

  <h3>15.1 Governing law</h3>

  <p>These Terms shall be governed by and construed in accordance with the laws of the State of Illinois, United States, without regard to its conflict of law provisions. Any legal proceedings arising from or related to these Terms shall be brought exclusively in the state or federal courts located in Cook County, Illinois.</p>

  <h3>15.2 Informal resolution</h3>

  <p>Before initiating any formal legal proceedings, you agree to first attempt to resolve any dispute informally by contacting us via Telegram at <a href="https://t.me/VaultBook" target="_blank" rel="noopener">t.me/VaultBook</a>. We will endeavor to resolve disputes in good faith within thirty (30) days of receiving your notice. Most concerns can be resolved quickly and amicably through direct communication.</p>

  <h3>15.3 Waiver of class actions</h3>

  <p>To the fullest extent permitted by applicable law, you agree that any dispute resolution proceedings will be conducted on an individual basis and not as part of a class, consolidated, or representative action. You waive any right to participate in a class action lawsuit or class-wide arbitration against VaultBook Labs.</p>

  <hr class="ts-divider">

  <h2 id="severability" data-reveal>16. Severability</h2>

  <p>If any provision of these Terms is found to be unenforceable, invalid, or illegal by a court of competent jurisdiction, that provision shall be modified to the minimum extent necessary to make it enforceable, or if modification is not possible, it shall be severed from these Terms. The remaining provisions shall continue in full force and effect. The unenforceability of any provision shall not affect the enforceability of any other provision.</p>

  <hr class="ts-divider">

  <h2 id="entire-agreement" data-reveal>17. Entire Agreement</h2>

  <p>These Terms, together with our <a href="{{ '/privacy/' | relative_url }}">Privacy Policy</a> and any applicable License Key terms, constitute the entire agreement between you and VaultBook Labs regarding the use of the Application and Services. These Terms supersede all prior or contemporaneous agreements, communications, and proposals, whether oral or written, between you and VaultBook Labs regarding the subject matter herein.</p>

  <p>No waiver of any term or condition of these Terms shall be deemed a further or continuing waiver of such term or any other term. Our failure to assert any right or provision under these Terms shall not constitute a waiver of such right or provision.</p>

  <hr class="ts-divider">

  <h2 id="changes" data-reveal>18. Changes to These Terms</h2>

  <p>We may update these Terms from time to time to reflect changes in the Application, our business practices, or applicable law. When we make material changes, we will update the "Last updated" date at the top of this page and, where appropriate, notify users through our Website or Telegram channel.</p>

  <p>Because VaultBook operates offline and has no mechanism for push notifications or forced updates, it is your responsibility to periodically review these Terms. Your continued use of the Application or Website following the posting of revised Terms constitutes your acceptance of those revisions.</p>

  <div class="ts-callout" data-reveal>
    <div class="ts-callout-title">Our commitment</div>
    <p>We do not anticipate material changes to the core principles expressed in these Terms — in particular, your ownership of your data, the Application's offline architecture, and the absence of data collection. If a future version of VaultBook were to fundamentally change any of these principles, we would provide prominent advance notice and require explicit user consent.</p>
  </div>

  <hr class="ts-divider">

  <h2 id="contact" data-reveal>19. Contact</h2>

  <p>If you have questions about these Terms of Service, need clarification on any provision, or wish to report a concern, you can reach us through Telegram:</p>

  <p><strong>Telegram:</strong> <a href="https://t.me/VaultBook" target="_blank" rel="noopener">t.me/VaultBook</a></p>

  <p><strong>Entity:</strong> VaultBook Labs, San Francisco, California, United States.</p>

  <p>We aim to respond to all inquiries within 72 hours.</p>

</div>
</div>
</section>

<!-- ━━━ FINAL CTA ━━━ -->
<section class="section tint">
  <div class="container">
    <div class="cta-band" data-reveal>
      <div>
        <div class="cta-title">Ready to get started?</div>
        <div class="muted">Download VaultBook and experience a workspace that puts you first.</div>
      </div>
      <div class="cta-actions">
        <a class="btn btn-primary" href="{{ '/get-started/' | relative_url }}">Get started</a>
        <a class="btn btn-ghost" href="{{ '/contact/' | relative_url }}">Contact us</a>
      </div>
    </div>
  </div>
</section>
