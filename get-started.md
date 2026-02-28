---
layout: default
title: Get Started
description: Download VaultBook and set up your secure, offline workspace in under a minute. Choose Plus or Pro.
body_class: get-started
permalink: /get-started/
---

<style>
/* ── Get Started: hero ───────────────────────────────────────── */
.gs-hero{
  padding: 72px 0 56px;
  text-align: center;
  background: linear-gradient(180deg, #faf8ff 0%, #fff 100%);
}
.gs-hero .eyebrow{ margin-bottom: 14px; }
.gs-hero-title{
  font-size: clamp(36px, 5.2vw, 56px);
  font-weight: 900;
  letter-spacing: -0.03em;
  line-height: 1.08;
  margin: 0;
}
.gs-hero-sub{
  margin: 16px auto 0;
  max-width: 54ch;
  font-size: 17px;
  color: rgba(11,11,11,.68);
  line-height: 1.55;
}
.gs-hero-note{
  margin-top: 18px;
  font-size: 13px;
  color: rgba(11,11,11,.48);
}

/* ── Plan download cards ─────────────────────────────────────── */
.gs-plans{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  margin-top: 40px;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
}
.gs-plan{
  position: relative;
  background: rgba(255,255,255,.92);
  backdrop-filter: blur(16px) saturate(1.5);
  border: 1px solid rgba(206,147,216,.15);
  border-radius: 20px;
  padding: 28px 24px 24px;
  text-align: left;
  transition: transform .22s ease, box-shadow .22s ease;
}
.gs-plan:hover{
  transform: translateY(-3px);
  box-shadow: 0 12px 36px rgba(206,147,216,.12), 0 2px 8px rgba(0,0,0,.04);
}
.gs-plan.featured{
  border-color: rgba(129,212,250,.35);
  box-shadow: 0 4px 18px rgba(129,212,250,.1);
}
.gs-plan.featured::before{
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  border-radius: 20px 20px 0 0;
  background: linear-gradient(90deg, #81d4fa, #ce93d8, #ffcc80);
}
.gs-plan-badge{
  display: inline-block;
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: .06em;
  padding: 3px 10px;
  border-radius: 8px;
  margin-bottom: 10px;
}
.gs-plan:not(.featured) .gs-plan-badge{
  background: linear-gradient(135deg, rgba(243,229,245,.5), rgba(225,245,254,.3));
  color: #7b1fa2;
}
.gs-plan.featured .gs-plan-badge{
  background: linear-gradient(135deg, #ce93d8, #81d4fa);
  color: #fff;
}
.gs-plan-name{
  font-size: 22px;
  font-weight: 900;
  letter-spacing: -0.02em;
}
.gs-plan-price{
  margin-top: 4px;
  font-size: 14px;
  color: rgba(11,11,11,.55);
}
.gs-plan-desc{
  margin-top: 10px;
  font-size: 14px;
  color: rgba(11,11,11,.65);
  line-height: 1.5;
}
.gs-plan-list{
  margin-top: 14px;
  display: flex;
  flex-direction: column;
  gap: 7px;
}
.gs-plan-list-item{
  font-size: 13.5px;
  color: rgba(11,11,11,.72);
  display: flex;
  align-items: flex-start;
  gap: 8px;
  line-height: 1.4;
}
.gs-plan-list-item::before{
  content: '✓';
  flex-shrink: 0;
  font-weight: 800;
  color: #00897b;
  font-size: 13px;
  margin-top: 1px;
}
.gs-plan .btn{
  width: 100%;
  margin-top: 18px;
  text-align: center;
  justify-content: center;
}

/* ── Steps ───────────────────────────────────────────────────── */
.gs-steps-grid{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  margin-top: 28px;
}
.gs-step{
  background: rgba(255,255,255,.7);
  border: 1px solid rgba(206,147,216,.12);
  border-radius: 18px;
  padding: 24px 20px;
  transition: transform .22s ease, box-shadow .22s ease;
}
.gs-step:hover{
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(206,147,216,.1);
}
.gs-step-num{
  width: 36px; height: 36px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  font-weight: 900;
  font-size: 15px;
  margin-bottom: 14px;
  transition: transform .2s ease;
}
.gs-step:hover .gs-step-num{ transform: scale(1.1); }
.gs-step:nth-child(1) .gs-step-num{ background: linear-gradient(135deg, rgba(206,147,216,.22), rgba(225,190,231,.15)); color: #7b1fa2; }
.gs-step:nth-child(2) .gs-step-num{ background: linear-gradient(135deg, rgba(129,212,250,.22), rgba(179,229,252,.15)); color: #0277bd; }
.gs-step:nth-child(3) .gs-step-num{ background: linear-gradient(135deg, rgba(128,203,196,.22), rgba(178,223,219,.15)); color: #00796b; }
.gs-step-title{ font-weight: 850; font-size: 16px; }
.gs-step-text{ margin-top: 6px; font-size: 14px; color: rgba(11,11,11,.62); line-height: 1.5; }

/* ── Feature highlights ──────────────────────────────────────── */
.gs-features{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  margin-top: 28px;
}
.gs-feat{
  background: rgba(255,255,255,.7);
  border: 1px solid rgba(206,147,216,.1);
  border-radius: 18px;
  padding: 24px 22px;
  transition: transform .22s ease, box-shadow .22s ease;
}
.gs-feat:hover{
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(206,147,216,.1);
}
.gs-feat-ic{
  width: 40px; height: 40px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  margin-bottom: 12px;
  transition: transform .2s ease;
}
.gs-feat:hover .gs-feat-ic{ transform: scale(1.08); }
.gs-feat:nth-child(1) .gs-feat-ic{ background: linear-gradient(135deg, rgba(206,147,216,.2), rgba(243,229,245,.2)); color: #7b1fa2; }
.gs-feat:nth-child(2) .gs-feat-ic{ background: linear-gradient(135deg, rgba(129,212,250,.2), rgba(179,229,252,.15)); color: #0288d1; }
.gs-feat:nth-child(3) .gs-feat-ic{ background: linear-gradient(135deg, rgba(128,203,196,.2), rgba(178,223,219,.15)); color: #00796b; }
.gs-feat:nth-child(4) .gs-feat-ic{ background: linear-gradient(135deg, rgba(255,204,128,.25), rgba(255,224,178,.18)); color: #e65100; }
.gs-feat:nth-child(5) .gs-feat-ic{ background: linear-gradient(135deg, rgba(244,143,177,.2), rgba(248,187,208,.15)); color: #c2185b; }
.gs-feat:nth-child(6) .gs-feat-ic{ background: linear-gradient(135deg, rgba(165,214,167,.2), rgba(200,230,201,.15)); color: #2e7d32; }
.gs-feat-title{ font-weight: 850; font-size: 17px; }
.gs-feat-text{ margin-top: 6px; font-size: 14px; color: rgba(11,11,11,.62); line-height: 1.55; }

/* ── Tools grid ──────────────────────────────────────────────── */
.gs-tools{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin-top: 28px;
}
.gs-tool{
  background: rgba(255,255,255,.65);
  border: 1px solid rgba(206,147,216,.1);
  border-radius: 14px;
  padding: 16px 14px;
  transition: transform .18s ease, box-shadow .18s ease, border-color .2s ease;
}
.gs-tool:hover{
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(206,147,216,.1);
  border-color: rgba(206,147,216,.22);
}
.gs-tool-emoji{ font-size: 22px; margin-bottom: 8px; display: block; }
.gs-tool-name{ font-weight: 800; font-size: 13.5px; }
.gs-tool-desc{ font-size: 12.5px; color: rgba(11,11,11,.55); margin-top: 3px; line-height: 1.4; }

/* ── Comparison table ────────────────────────────────────────── */
.gs-compare{
  margin-top: 28px;
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid rgba(206,147,216,.12);
  background: rgba(255,255,255,.7);
}
.gs-compare table{
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}
.gs-compare th{
  padding: 14px 18px;
  text-align: left;
  font-weight: 850;
  font-size: 15px;
  background: linear-gradient(135deg, rgba(243,229,245,.15), rgba(225,245,254,.1));
  border-bottom: 1px solid rgba(206,147,216,.1);
}
.gs-compare th:not(:first-child){ text-align: center; }
.gs-compare td{
  padding: 11px 18px;
  border-bottom: 1px solid rgba(206,147,216,.06);
  color: rgba(11,11,11,.72);
}
.gs-compare td:not(:first-child){ text-align: center; font-weight: 700; }
.gs-compare tr:last-child td{ border-bottom: 0; }
.gs-compare tr:hover td{ background: rgba(243,229,245,.08); }
.gs-check{ color: #00897b; font-weight: 800; }
.gs-dash{ color: rgba(11,11,11,.22); }

/* ── FAQ cards ───────────────────────────────────────────────── */
.gs-faq{
  max-width: 640px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

/* ── Responsive ──────────────────────────────────────────────── */
@media (max-width: 900px){
  .gs-plans{ grid-template-columns: 1fr; max-width: 420px; }
  .gs-steps-grid{ grid-template-columns: 1fr; }
  .gs-features{ grid-template-columns: 1fr; }
  .gs-tools{ grid-template-columns: 1fr 1fr; }
}
@media (max-width: 600px){
  .gs-tools{ grid-template-columns: 1fr; }
  .gs-compare{ font-size: 13px; }
  .gs-compare th, .gs-compare td{ padding: 10px 12px; }
}
</style>

<!-- ━━━ HERO ━━━ -->
<section class="gs-hero">
  <div class="container" data-reveal>
    <div class="eyebrow">GET STARTED WITH VAULTBOOK</div>
    <h1 class="gs-hero-title">Your workspace.<br>Your device. Your rules.</h1>
    <p class="gs-hero-sub">
      Download VaultBook, point it at any folder, and start building a private,
      searchable library of notes, files, and projects — entirely offline.
    </p>
    <p class="gs-hero-note">No account required. No cloud. Works in any modern browser.</p>

    <div class="gs-plans" data-reveal>
      <div class="gs-plan">
        <span class="gs-plan-badge">Core</span>
        <div class="gs-plan-name">VaultBook Plus</div>
        <div class="gs-plan-price">Start with Plus</div>
        <div class="gs-plan-desc">Everything you need to build a private, searchable workspace.</div>
        <div class="gs-plan-list">
          <div class="gs-plan-list-item">Unlimited notes, pages &amp; sections</div>
          <div class="gs-plan-list-item">Rich text editor with tables &amp; code blocks</div>
          <div class="gs-plan-list-item">File attachments &amp; full-text indexing</div>
          <div class="gs-plan-list-item">Labels &amp; favorites</div>
          <div class="gs-plan-list-item">Basic search &amp; typeahead</div>
        </div>
        <a class="btn btn-ghost" href="https://raw.githubusercontent.com/k2xn258k2x-cmyk/Note/main/VaultBook_Plus.zip" download>Download Plus</a>
      </div>

      <div class="gs-plan featured">
        <span class="gs-plan-badge">Recommended</span>
        <div class="gs-plan-name">VaultBook Pro</div>
        <div class="gs-plan-price">One-time purchase</div>
        <div class="gs-plan-desc">Full power — AI features, encryption, analytics, and priority support.</div>
        <div class="gs-plan-list">
          <div class="gs-plan-list-item">Everything in Plus</div>
          <div class="gs-plan-list-item">AI Suggestions, Smart Search &amp; QA</div>
          <div class="gs-plan-list-item">Related Entries &amp; vote-based learning</div>
          <div class="gs-plan-list-item">AES-256 per-entry encryption</div>
          <div class="gs-plan-list-item">Inline OCR, analytics &amp; timetable</div>
          <div class="gs-plan-list-item">Version history (60-day retention)</div>
        </div>
        <a class="btn btn-primary" href="https://raw.githubusercontent.com/k2xn258k2x-cmyk/Note/main/VaultBook_Pro.zip" download>Download Pro</a>
      </div>
    </div>
  </div>
</section>

<!-- ━━━ SETUP STEPS ━━━ -->
<section class="section">
  <div class="container">
    <header class="section-head" data-reveal>
      <h2 class="h2">Up and running in under a minute</h2>
      <p class="muted">No installers, no sign-ups. Just unzip, open, and start writing.</p>
    </header>

    <div class="gs-steps-grid" data-reveal>
      <div class="gs-step">
        <div class="gs-step-num">1</div>
        <div class="gs-step-title">Unzip &amp; open</div>
        <div class="gs-step-text">
          Download the zip above, extract it anywhere, and open <strong>VaultBook.html</strong> in
          Chrome, Edge, or any Chromium browser. That's the entire app — one file.
        </div>
      </div>
      <div class="gs-step">
        <div class="gs-step-num">2</div>
        <div class="gs-step-title">Connect your folder</div>
        <div class="gs-step-text">
          Click the 📁 button in the toolbar and select the folder you just extracted.
          VaultBook stores notes, attachments, and settings right there on your device.
        </div>
      </div>
      <div class="gs-step">
        <div class="gs-step-num">3</div>
        <div class="gs-step-title">Create your first note</div>
        <div class="gs-step-text">
          Hit <strong>Create Note</strong>, give it a title, and start writing.
          Add labels, attach files, organize into pages — your workspace grows with you.
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ━━━ FEATURES ━━━ -->
<section class="section tint">
  <div class="container">
    <header class="section-head" data-reveal>
      <h2 class="h2">Everything you need. Nothing you don't.</h2>
      <p class="muted">A complete workspace packed into a single, portable file.</p>
    </header>

    <div class="gs-features" data-reveal>
      <div class="gs-feat">
        <div class="gs-feat-ic">{% include icon.html name="spark" %}</div>
        <div class="gs-feat-title">AI Suggestions &amp; Smart Search</div>
        <div class="gs-feat-text">
          Ask questions in natural language and get ranked answers from your own library.
          The AI learns your reading patterns, surfaces upcoming tasks, and recommends
          related entries — all processed locally, never sent anywhere.
        </div>
      </div>

      <div class="gs-feat">
        <div class="gs-feat-ic">{% include icon.html name="lock" %}</div>
        <div class="gs-feat-title">Military-grade encryption</div>
        <div class="gs-feat-text">
          Protect sensitive entries with AES-256-GCM encryption and PBKDF2 key derivation.
          Each note gets its own password — decrypted text lives only in memory and never
          touches disk unencrypted.
        </div>
      </div>

      <div class="gs-feat">
        <div class="gs-feat-ic">{% include icon.html name="search" %}</div>
        <div class="gs-feat-title">Deep search &amp; inline OCR</div>
        <div class="gs-feat-text">
          Search across titles, note bodies, labels, sections, attachment names,
          and even text inside attached files. Inline OCR automatically extracts text
          from images within your notes and indexes it for search.
        </div>
      </div>

      <div class="gs-feat">
        <div class="gs-feat-ic">{% include icon.html name="folder" %}</div>
        <div class="gs-feat-title">Pages, labels &amp; sections</div>
        <div class="gs-feat-text">
          Organize notes into nested pages with drag-and-drop. Tag entries with
          color-coded labels. Break long notes into collapsible sections,
          each with its own rich editor and attachments.
        </div>
      </div>

      <div class="gs-feat">
        <div class="gs-feat-ic">{% include icon.html name="doc" %}</div>
        <div class="gs-feat-title">Rich editor with everything</div>
        <div class="gs-feat-text">
          Format with headings, tables, code blocks, callouts, lists, and inline images.
          Switch fonts, transform case, pick text and highlight colors — from a clean
          toolbar that stays out of your way.
        </div>
      </div>

      <div class="gs-feat">
        <div class="gs-feat-ic">{% include icon.html name="calendar" %}</div>
        <div class="gs-feat-title">Scheduling &amp; timetable</div>
        <div class="gs-feat-text">
          Set due dates, expiry dates, and repeat schedules on any entry.
          The built-in timetable gives you day and week views, and the AI
          surfaces what's coming up in your suggestions feed.
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ━━━ BUILT-IN TOOLS ━━━ -->
<section class="section">
  <div class="container">
    <header class="section-head" data-reveal>
      <h2 class="h2">12+ tools built right in</h2>
      <p class="muted">No extensions, no installs. Open any tool from the sidebar and get to work.</p>
    </header>

    <div class="gs-tools" data-reveal>
      <div class="gs-tool">
        <span class="gs-tool-emoji">📋</span>
        <div class="gs-tool-name">Kanban Board</div>
        <div class="gs-tool-desc">Labels &amp; hashtags become drag-and-drop columns automatically.</div>
      </div>
      <div class="gs-tool">
        <span class="gs-tool-emoji">📊</span>
        <div class="gs-tool-name">File Analyzer</div>
        <div class="gs-tool-desc">Visualize and analyze CSV and TXT data files.</div>
      </div>
      <div class="gs-tool">
        <span class="gs-tool-emoji">📰</span>
        <div class="gs-tool-name">RSS Reader</div>
        <div class="gs-tool-desc">Follow RSS and Atom feeds organized in folders.</div>
      </div>
      <div class="gs-tool">
        <span class="gs-tool-emoji">💬</span>
        <div class="gs-tool-name">Threads</div>
        <div class="gs-tool-desc">Chat-style notes in a focused overlay.</div>
      </div>
      <div class="gs-tool">
        <span class="gs-tool-emoji">🔗</span>
        <div class="gs-tool-name">URL → Entry</div>
        <div class="gs-tool-desc">Save any web page as a searchable note.</div>
      </div>
      <div class="gs-tool">
        <span class="gs-tool-emoji">🎵</span>
        <div class="gs-tool-name">MP3 Editor</div>
        <div class="gs-tool-desc">Cut, join, and trim silence from audio clips.</div>
      </div>
      <div class="gs-tool">
        <span class="gs-tool-emoji">📁</span>
        <div class="gs-tool-name">File Explorer</div>
        <div class="gs-tool-desc">Browse all attachments by type, entry, or page.</div>
      </div>
      <div class="gs-tool">
        <span class="gs-tool-emoji">🖼️</span>
        <div class="gs-tool-name">Media Explorer</div>
        <div class="gs-tool-desc">Scan and browse folders of photos and videos.</div>
      </div>
      <div class="gs-tool">
        <span class="gs-tool-emoji">🔑</span>
        <div class="gs-tool-name">Password Generator</div>
        <div class="gs-tool-desc">Generate strong passwords and copy instantly.</div>
      </div>
      <div class="gs-tool">
        <span class="gs-tool-emoji">💾</span>
        <div class="gs-tool-name">Folder Analyzer</div>
        <div class="gs-tool-desc">Visualize disk space and file sizes at a glance.</div>
      </div>
      <div class="gs-tool">
        <span class="gs-tool-emoji">📄</span>
        <div class="gs-tool-name">PDF Merge &amp; Split</div>
        <div class="gs-tool-desc">Combine or split PDFs without leaving VaultBook.</div>
      </div>
      <div class="gs-tool">
        <span class="gs-tool-emoji">📥</span>
        <div class="gs-tool-name">Obsidian Import</div>
        <div class="gs-tool-desc">Drop .md files and migrate your notes instantly.</div>
      </div>
    </div>
  </div>
</section>

<!-- ━━━ PLAN COMPARISON ━━━ -->
<section class="section tint">
  <div class="container">
    <header class="section-head" data-reveal>
      <h2 class="h2">Plus vs. Pro — side by side</h2>
      <p class="muted">Both editions are offline-first and run from a single HTML file.</p>
    </header>

    <div class="gs-compare" data-reveal>
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Plus</th>
            <th>Pro</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Unlimited notes, pages &amp; sections</td>
            <td><span class="gs-check">✓</span></td>
            <td><span class="gs-check">✓</span></td>
          </tr>
          <tr>
            <td>Rich text editor (tables, code, callouts)</td>
            <td><span class="gs-check">✓</span></td>
            <td><span class="gs-check">✓</span></td>
          </tr>
          <tr>
            <td>File attachments &amp; full-text indexing</td>
            <td><span class="gs-check">✓</span></td>
            <td><span class="gs-check">✓</span></td>
          </tr>
          <tr>
            <td>Labels &amp; favorites</td>
            <td><span class="gs-check">✓</span></td>
            <td><span class="gs-check">✓</span></td>
          </tr>
          <tr>
            <td>Multi-tab views</td>
            <td><span class="gs-dash">—</span></td>
            <td><span class="gs-check">✓</span></td>
          </tr>
          <tr>
            <td>12+ built-in tools (Kanban, PDF, Reader …)</td>
            <td><span class="gs-dash">—</span></td>
            <td><span class="gs-check">✓</span></td>
          </tr>
          <tr>
            <td>Sort, filter &amp; basic search</td>
            <td><span class="gs-check">✓</span></td>
            <td><span class="gs-check">✓</span></td>
          </tr>
          <tr>
            <td>AI Suggestions (sparkle pager)</td>
            <td><span class="gs-dash">—</span></td>
            <td><span class="gs-check">✓</span></td>
          </tr>
          <tr>
            <td>Smart Search &amp; QA (weighted scoring)</td>
            <td><span class="gs-dash">—</span></td>
            <td><span class="gs-check">✓</span></td>
          </tr>
          <tr>
            <td>Related Entries with vote-based learning</td>
            <td><span class="gs-dash">—</span></td>
            <td><span class="gs-check">✓</span></td>
          </tr>
          <tr>
            <td>Inline OCR (image → searchable text)</td>
            <td><span class="gs-dash">—</span></td>
            <td><span class="gs-check">✓</span></td>
          </tr>
          <tr>
            <td>AES-256-GCM per-entry encryption</td>
            <td><span class="gs-dash">—</span></td>
            <td><span class="gs-check">✓</span></td>
          </tr>
          <tr>
            <td>Timetable &amp; calendar views</td>
            <td><span class="gs-dash">—</span></td>
            <td><span class="gs-check">✓</span></td>
          </tr>
          <tr>
            <td>Analytics dashboards &amp; charts</td>
            <td><span class="gs-dash">—</span></td>
            <td><span class="gs-check">✓</span></td>
          </tr>
          <tr>
            <td>Version history (60-day retention)</td>
            <td><span class="gs-dash">—</span></td>
            <td><span class="gs-check">✓</span></td>
          </tr>
          <tr>
            <td>Smart label suggestions</td>
            <td><span class="gs-dash">—</span></td>
            <td><span class="gs-check">✓</span></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div style="display:flex; gap:14px; justify-content:center; flex-wrap:wrap; margin-top:28px;" data-reveal>
      <a class="btn btn-ghost" href="https://raw.githubusercontent.com/k2xn258k2x-cmyk/Note/main/VaultBook_Plus.zip" download>Download Plus</a>
      <a class="btn btn-primary" href="https://raw.githubusercontent.com/k2xn258k2x-cmyk/Note/main/VaultBook_Pro.zip" download>Download Pro</a>
    </div>
  </div>
</section>

<!-- ━━━ FAQ ━━━ -->
<section class="section">
  <div class="container">
    <header class="section-head" data-reveal>
      <h2 class="h2">Common questions</h2>
    </header>

    <div class="gs-faq" data-reveal>
      <div class="card">
        <div class="card-title">Do I need an internet connection?</div>
        <div class="card-text muted">
          No. VaultBook runs entirely in your browser from a local HTML file.
          Your data is stored in a folder you choose — nothing is uploaded or synced to any server.
        </div>
      </div>
      <div class="card">
        <div class="card-title">Which browsers are supported?</div>
        <div class="card-text muted">
          VaultBook works best in Chrome, Edge, Brave, and other Chromium-based browsers
          that support the File System Access API. Safari and Firefox have limited support
          for local file access features.
        </div>
      </div>
      <div class="card">
        <div class="card-title">Can I migrate from Obsidian or other apps?</div>
        <div class="card-text muted">
          Yes. Use the built-in Obsidian Import tool to drag and drop your .md files.
          Notes, titles, and content are converted and ready to search immediately.
        </div>
      </div>
      <div class="card">
        <div class="card-title">How do I back up my data?</div>
        <div class="card-text muted">
          Your entire workspace is a regular folder on your computer. Copy it, sync it with
          Dropbox, OneDrive, or Google Drive, or push it to a USB drive — whatever works for you.
        </div>
      </div>
      <div class="card">
        <div class="card-title">Is my data encrypted at rest?</div>
        <div class="card-text muted">
          With Pro, you can encrypt individual entries using AES-256-GCM. Each entry has its own
          password, and decrypted content is held only in memory — it's never written to disk unencrypted.
        </div>
      </div>
      <div class="card">
        <div class="card-title">What's the difference between Plus and Pro?</div>
        <div class="card-text muted">
          Plus gives you a solid note-taking workspace with rich editing, file attachments, labels,
          and search. Pro adds AI-powered features like smart search, related entries,
          inline OCR, per-entry encryption, analytics, timetable, version history, and all 12+ built-in tools.
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ━━━ FINAL CTA ━━━ -->
<section class="section tint">
  <div class="container">
    <div class="cta-band" data-reveal>
      <div>
        <div class="cta-title">Ready to take control of your workspace?</div>
        <div class="muted">Download VaultBook, unzip, and open. You'll be writing your first note in seconds.</div>
      </div>
      <div class="cta-actions">
        <a class="btn btn-primary" href="https://raw.githubusercontent.com/k2xn258k2x-cmyk/Note/main/VaultBook_Pro.zip" download>Download Pro</a>
        <a class="btn btn-ghost" href="https://raw.githubusercontent.com/k2xn258k2x-cmyk/Note/main/VaultBook_Plus.zip" download>Download Plus</a>
      </div>
    </div>
  </div>
</section>
