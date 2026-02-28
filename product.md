---
layout: default
title: Product
description: VaultBook is a secure, offline-first workspace with AI search, rich editing, per-entry encryption, and 12+ built-in tools — all in a single HTML file.
body_class: product-page
permalink: /product/
---

<style>
/* ── Product hero ────────────────────────────────────────────── */
.pd-hero{
  padding: 80px 0 64px;
  text-align: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, #faf8ff 0%, #f3f0fa 40%, #fff 100%);
}
.pd-hero::before{
  content: '';
  position: absolute;
  width: 720px; height: 720px;
  border-radius: 50%;
  top: -300px; left: 50%;
  transform: translateX(-50%);
  background: radial-gradient(circle, rgba(206,147,216,.1) 0%, rgba(129,212,250,.06) 50%, transparent 72%);
  pointer-events: none;
}
.pd-hero::after{
  content: '';
  position: absolute;
  width: 400px; height: 400px;
  border-radius: 50%;
  bottom: -160px; right: -80px;
  background: radial-gradient(circle, rgba(128,203,196,.08) 0%, transparent 70%);
  pointer-events: none;
}
.pd-hero .eyebrow{ margin-bottom: 14px; position: relative; z-index:1; }
.pd-hero-title{
  font-size: clamp(38px, 5.4vw, 60px);
  font-weight: 900;
  letter-spacing: -0.035em;
  line-height: 1.06;
  margin: 0;
  position: relative; z-index:1;
}
.pd-hero-sub{
  margin: 20px auto 0;
  max-width: 56ch;
  font-size: 17px;
  color: rgba(11,11,11,.62);
  line-height: 1.6;
  position: relative; z-index:1;
}
.pd-hero-actions{
  display: flex; gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 34px;
  position: relative; z-index:1;
}

/* ── Stat strip ──────────────────────────────────────────────── */
.pd-stats{
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 14px;
  margin-top: 44px;
  position: relative; z-index:1;
}
.pd-stat{
  text-align: center;
  padding: 20px 10px;
  background: rgba(255,255,255,.7);
  border: 1px solid rgba(206,147,216,.1);
  border-radius: 16px;
  transition: transform .2s ease, box-shadow .2s ease;
}
.pd-stat:hover{
  transform: translateY(-2px);
  box-shadow: 0 8px 22px rgba(206,147,216,.1);
}
.pd-stat-val{
  font-size: 28px;
  font-weight: 900;
  letter-spacing: -0.03em;
  background: linear-gradient(135deg, #7b1fa2, #0288d1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.pd-stat-label{
  margin-top: 3px;
  font-size: 12.5px;
  color: rgba(11,11,11,.48);
  font-weight: 650;
}

/* ── Flagship feature card (big) ─────────────────────────────── */
.pd-flagship{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  margin-top: 32px;
}
.pd-flag-card{
  position: relative;
  background: rgba(255,255,255,.85);
  backdrop-filter: blur(16px) saturate(1.5);
  border: 1px solid rgba(206,147,216,.12);
  border-radius: 22px;
  padding: 32px 28px 28px;
  overflow: hidden;
  transition: transform .26s ease, box-shadow .26s ease;
}
.pd-flag-card:hover{
  transform: translateY(-4px);
  box-shadow: 0 16px 44px rgba(206,147,216,.12), 0 2px 10px rgba(0,0,0,.04);
}
.pd-flag-card::before{
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  border-radius: 22px 22px 0 0;
}
.pd-flag-card:nth-child(1)::before{ background: linear-gradient(90deg, #ce93d8, #81d4fa, #80cbc4); }
.pd-flag-card:nth-child(2)::before{ background: linear-gradient(90deg, #81d4fa, #80cbc4, #ffcc80); }
.pd-flag-ic{
  width: 48px; height: 48px;
  border-radius: 16px;
  display: grid;
  place-items: center;
  margin-bottom: 16px;
  transition: transform .22s ease;
}
.pd-flag-card:hover .pd-flag-ic{ transform: scale(1.1); }
.pd-flag-card:nth-child(1) .pd-flag-ic{ background: linear-gradient(135deg, rgba(206,147,216,.2), rgba(243,229,245,.22)); color: #7b1fa2; }
.pd-flag-card:nth-child(2) .pd-flag-ic{ background: linear-gradient(135deg, rgba(129,212,250,.2), rgba(179,229,252,.16)); color: #0288d1; }
.pd-flag-kicker{
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: .08em;
  color: rgba(11,11,11,.4);
  margin-bottom: 6px;
}
.pd-flag-title{ font-weight: 900; font-size: 22px; letter-spacing: -0.02em; }
.pd-flag-text{ margin-top: 10px; font-size: 15px; color: rgba(11,11,11,.58); line-height: 1.6; }
.pd-flag-list{
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.pd-flag-li{
  font-size: 14px;
  color: rgba(11,11,11,.68);
  display: flex;
  align-items: flex-start;
  gap: 9px;
  line-height: 1.45;
}
.pd-flag-li::before{
  content: '';
  flex-shrink: 0;
  width: 7px; height: 7px;
  border-radius: 50%;
  margin-top: 6px;
  background: linear-gradient(135deg, #ce93d8, #81d4fa);
}

/* ── Feature rows (alternating card + detail) ────────────────── */
.pd-row{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  align-items: start;
  margin-top: 32px;
}
.pd-row.flip .pd-row-detail{ order: -1; }
.pd-row-card{
  background: rgba(255,255,255,.78);
  border: 1px solid rgba(206,147,216,.1);
  border-radius: 20px;
  padding: 28px 24px;
  transition: transform .24s ease, box-shadow .24s ease;
  position: relative;
  overflow: hidden;
}
.pd-row-card:hover{
  transform: translateY(-3px);
  box-shadow: 0 14px 36px rgba(206,147,216,.1);
}
.pd-row-card::before{
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  border-radius: 20px 20px 0 0;
  opacity: 0;
  transition: opacity .24s ease;
}
.pd-row-card:hover::before{ opacity: 1; }
.pd-row-ic{
  width: 44px; height: 44px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  margin-bottom: 14px;
  transition: transform .22s ease;
}
.pd-row-card:hover .pd-row-ic{ transform: scale(1.1); }
.pd-row-kicker{
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: .08em;
  color: rgba(11,11,11,.38);
  margin-bottom: 6px;
}
.pd-row-title{ font-weight: 900; font-size: 20px; letter-spacing: -0.02em; }
.pd-row-text{ margin-top: 8px; font-size: 14.5px; color: rgba(11,11,11,.58); line-height: 1.6; }

.pd-row-detail{
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.pd-detail-chip{
  background: rgba(255,255,255,.6);
  border: 1px solid rgba(206,147,216,.1);
  border-radius: 14px;
  padding: 16px 18px;
  transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
}
.pd-detail-chip:hover{
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(206,147,216,.08);
  border-color: rgba(206,147,216,.2);
}
.pd-chip-title{ font-weight: 800; font-size: 14px; }
.pd-chip-text{ margin-top: 3px; font-size: 13px; color: rgba(11,11,11,.52); line-height: 1.45; }

/* color theming per section */
.pd-sec-search .pd-row-card::before{ background: linear-gradient(90deg, #80cbc4, #81d4fa); }
.pd-sec-search .pd-row-ic{ background: linear-gradient(135deg, rgba(128,203,196,.2), rgba(178,223,219,.15)); color: #00796b; }
.pd-sec-org .pd-row-card::before{ background: linear-gradient(90deg, #ffcc80, #f48fb1); }
.pd-sec-org .pd-row-ic{ background: linear-gradient(135deg, rgba(255,204,128,.25), rgba(255,224,178,.18)); color: #e65100; }
.pd-sec-edit .pd-row-card::before{ background: linear-gradient(90deg, #f48fb1, #ce93d8); }
.pd-sec-edit .pd-row-ic{ background: linear-gradient(135deg, rgba(244,143,177,.2), rgba(248,187,208,.15)); color: #c2185b; }
.pd-sec-sec .pd-row-card::before{ background: linear-gradient(90deg, #ce93d8, #81d4fa); }
.pd-sec-sec .pd-row-ic{ background: linear-gradient(135deg, rgba(206,147,216,.2), rgba(243,229,245,.2)); color: #7b1fa2; }
.pd-sec-time .pd-row-card::before{ background: linear-gradient(90deg, #a5d6a7, #81d4fa); }
.pd-sec-time .pd-row-ic{ background: linear-gradient(135deg, rgba(165,214,167,.2), rgba(200,230,201,.15)); color: #2e7d32; }

/* ── Tools grid ──────────────────────────────────────────────── */
.pd-tools{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin-top: 32px;
}
.pd-tool{
  background: rgba(255,255,255,.65);
  border: 1px solid rgba(206,147,216,.1);
  border-radius: 16px;
  padding: 18px 16px;
  transition: transform .18s ease, box-shadow .18s ease, border-color .2s ease;
}
.pd-tool:hover{
  transform: translateY(-2px);
  box-shadow: 0 8px 22px rgba(206,147,216,.1);
  border-color: rgba(206,147,216,.22);
}
.pd-tool-emoji{ font-size: 24px; margin-bottom: 10px; display: block; }
.pd-tool-name{ font-weight: 800; font-size: 14px; }
.pd-tool-desc{ font-size: 12.5px; color: rgba(11,11,11,.52); margin-top: 4px; line-height: 1.45; }

/* ── Architecture strip ──────────────────────────────────────── */
.pd-arch{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 32px;
}
.pd-arch-card{
  text-align: center;
  padding: 30px 20px;
  background: rgba(255,255,255,.7);
  border: 1px solid rgba(206,147,216,.1);
  border-radius: 20px;
  transition: transform .22s ease, box-shadow .22s ease;
  position: relative;
  overflow: hidden;
}
.pd-arch-card::before{
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  border-radius: 20px 20px 0 0;
  opacity: 0;
  transition: opacity .24s ease;
}
.pd-arch-card:hover{
  transform: translateY(-3px);
  box-shadow: 0 12px 32px rgba(206,147,216,.1);
}
.pd-arch-card:hover::before{ opacity: 1; }
.pd-arch-card:nth-child(1)::before{ background: linear-gradient(90deg, #ce93d8, #81d4fa); }
.pd-arch-card:nth-child(2)::before{ background: linear-gradient(90deg, #81d4fa, #80cbc4); }
.pd-arch-card:nth-child(3)::before{ background: linear-gradient(90deg, #80cbc4, #ffcc80); }
.pd-arch-emoji{ font-size: 32px; margin-bottom: 14px; display: block; }
.pd-arch-title{ font-weight: 900; font-size: 18px; letter-spacing: -0.01em; }
.pd-arch-text{ margin-top: 8px; font-size: 14px; color: rgba(11,11,11,.55); line-height: 1.55; max-width: 28ch; margin-left: auto; margin-right: auto; }

/* ── Responsive ──────────────────────────────────────────────── */
@media (max-width: 900px){
  .pd-stats{ grid-template-columns: repeat(3, 1fr); }
  .pd-flagship{ grid-template-columns: 1fr; }
  .pd-row{ grid-template-columns: 1fr; }
  .pd-row.flip .pd-row-detail{ order: 0; }
  .pd-tools{ grid-template-columns: 1fr 1fr; }
  .pd-arch{ grid-template-columns: 1fr; max-width: 380px; margin-left: auto; margin-right: auto; }
}
@media (max-width: 600px){
  .pd-stats{ grid-template-columns: 1fr 1fr; }
  .pd-tools{ grid-template-columns: 1fr; }
}
</style>

<!-- ━━━ HERO ━━━ -->
<section class="pd-hero">
  <div class="container" data-reveal>
    <div class="eyebrow">THE VAULTBOOK WORKSPACE</div>
    <h1 class="pd-hero-title">One file. Every tool.<br>Complete privacy.</h1>
    <p class="pd-hero-sub">
      VaultBook is a full-featured, AI-powered workspace that runs entirely from a single
      HTML file on your device. Notes, search, encryption, project boards, PDF tools, a calendar,
      and a dozen more utilities — all offline, all private, all yours.
    </p>
    <div class="pd-hero-actions">
      <a class="btn btn-primary" href="{{ '/get-started/' | relative_url }}">Get VaultBook</a>
      <a class="btn btn-demo" href="{{ '/demo/' | relative_url }}">Request a demo</a>
    </div>

    <div class="pd-stats" data-reveal>
      <div class="pd-stat">
        <div class="pd-stat-val">1</div>
        <div class="pd-stat-label">HTML file</div>
      </div>
      <div class="pd-stat">
        <div class="pd-stat-val">12+</div>
        <div class="pd-stat-label">Built-in tools</div>
      </div>
      <div class="pd-stat">
        <div class="pd-stat-val">256</div>
        <div class="pd-stat-label">Bit encryption</div>
      </div>
      <div class="pd-stat">
        <div class="pd-stat-val">0</div>
        <div class="pd-stat-label">Cloud dependencies</div>
      </div>
      <div class="pd-stat">
        <div class="pd-stat-val">∞</div>
        <div class="pd-stat-label">Notes &amp; pages</div>
      </div>
    </div>
  </div>
</section>

<!-- ━━━ AI & EDITOR — FLAGSHIP ━━━ -->
<section class="section">
  <div class="container">
    <header class="section-head" data-reveal>
      <h2 class="h2">Intelligence that stays on your device</h2>
      <p class="muted">VaultBook's AI features learn from your library and habits — without phoning home.</p>
    </header>

    <div class="pd-flagship" data-reveal>
      <div class="pd-flag-card">
        <div class="pd-flag-ic">{% include icon.html name="spark" %}</div>
        <div class="pd-flag-kicker">AI Engine</div>
        <div class="pd-flag-title">Suggestions that know how you work</div>
        <div class="pd-flag-text">
          The AI Suggestions pager learns your weekday reading patterns, surfaces upcoming tasks,
          tracks recently read entries and files, and keeps your most-used tools within reach —
          all personalized to your library's unique shape.
        </div>
        <div class="pd-flag-list">
          <div class="pd-flag-li">4-page carousel: Suggestions, Recently Read, Recent Files, Recent Tools</div>
          <div class="pd-flag-li">Weekday pattern analysis over the last 4 weeks</div>
          <div class="pd-flag-li">Upcoming scheduled entries surfaced automatically</div>
          <div class="pd-flag-li">Personalized relevance ranking across your full library</div>
        </div>
      </div>

      <div class="pd-flag-card">
        <div class="pd-flag-ic">{% include icon.html name="search" %}</div>
        <div class="pd-flag-kicker">Smart Search</div>
        <div class="pd-flag-title">Ask questions, get answers</div>
        <div class="pd-flag-text">
          Type a natural-language question and VaultBook searches across everything — titles,
          note bodies, labels, sections, OCR text, attachment contents — with weighted scoring
          that puts the best answer at the top.
        </div>
        <div class="pd-flag-list">
          <div class="pd-flag-li">Weighted scoring: titles (8×), labels (6×), OCR (5×), body (4×), sections (3×)</div>
          <div class="pd-flag-li">Vote-based reranking — upvote or downvote results to retrain relevance</div>
          <div class="pd-flag-li">Background text warm-up for top 12 attachment candidates</div>
          <div class="pd-flag-li">Respects active page and label filters</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ━━━ SEARCH & OCR ━━━ -->
<section class="section tint">
  <div class="container">
    <header class="section-head" data-reveal>
      <h2 class="h2">Find anything in milliseconds</h2>
      <p class="muted">Two search engines, inline OCR, and full attachment indexing — all running locally.</p>
    </header>

    <div class="pd-row pd-sec-search" data-reveal>
      <div class="pd-row-card">
        <div class="pd-row-ic">{% include icon.html name="search" %}</div>
        <div class="pd-row-kicker">Search &amp; Discovery</div>
        <div class="pd-row-title">Deep search across your entire library</div>
        <div class="pd-row-text">
          The main toolbar search finds matches in titles, details, labels, attachment names,
          and extracted attachment text. The QA sidebar is a separate, natural-language engine
          with weighted scoring and vote-based learning. Typeahead gives you real-time dropdown
          suggestions as you type, while query history remembers your past searches for one-tap recall.
        </div>
      </div>
      <div class="pd-row-detail">
        <div class="pd-detail-chip">
          <div class="pd-chip-title">Inline OCR</div>
          <div class="pd-chip-text">Images inside your notes are automatically OCR'd. Extracted text is cached per entry and indexed, so you can search for words that only exist inside a photo or scan.</div>
        </div>
        <div class="pd-detail-chip">
          <div class="pd-chip-title">Attachment indexing</div>
          <div class="pd-chip-text">Text is extracted from attached files and indexed for search. The system warms up text for top candidates in the background — no waiting, no manual steps.</div>
        </div>
        <div class="pd-detail-chip">
          <div class="pd-chip-title">Related Entries</div>
          <div class="pd-chip-text">Contextual similarity suggestions appear when browsing any note. Upvote or downvote pairs to train the model, and your votes persist across sessions.</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ━━━ RICH EDITING ━━━ -->
<section class="section">
  <div class="container">
    <header class="section-head" data-reveal>
      <h2 class="h2">A rich editor that stays out of your way</h2>
      <p class="muted">Everything you'd expect from a modern editor — and a few things you wouldn't.</p>
    </header>

    <div class="pd-row flip pd-sec-edit" data-reveal>
      <div class="pd-row-card">
        <div class="pd-row-ic">{% include icon.html name="doc" %}</div>
        <div class="pd-row-kicker">Rich Text Editor</div>
        <div class="pd-row-title">Write the way you think</div>
        <div class="pd-row-text">
          VaultBook's editor gives you headings (H1–H6), bold, italic, underline, strikethrough,
          ordered and unordered lists, tables with a visual size picker and context menus, code blocks
          with language labels, callout blocks with accent bars, inline images, links, font switching,
          case transformation, and text and highlight color pickers — all from a clean, collapsible toolbar.
          Markdown rendering is built in via marked.js for people who prefer writing in plain text.
        </div>
      </div>
      <div class="pd-row-detail">
        <div class="pd-detail-chip">
          <div class="pd-chip-title">Sections</div>
          <div class="pd-chip-text">Break long notes into collapsible sub-entries. Each section has its own title, rich text body, and dedicated file attachments — perfect for research with multiple chapters.</div>
        </div>
        <div class="pd-detail-chip">
          <div class="pd-chip-title">Version history</div>
          <div class="pd-chip-text">Every edit creates a snapshot stored in the /versions directory with 60-day retention. Browse history in a modal from newest to oldest and restore any point in time.</div>
        </div>
        <div class="pd-detail-chip">
          <div class="pd-chip-title">Smart label suggestions</div>
          <div class="pd-chip-text">When editing, VaultBook analyzes your content and suggests relevant labels as pastel chips — speeding up tagging without breaking your flow.</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ━━━ ORGANIZATION ━━━ -->
<section class="section tint">
  <div class="container">
    <header class="section-head" data-reveal>
      <h2 class="h2">Structure that scales with your thinking</h2>
      <p class="muted">Pages, labels, tabs, filters — every layer of organization you need, none of the clutter.</p>
    </header>

    <div class="pd-row pd-sec-org" data-reveal>
      <div class="pd-row-card">
        <div class="pd-row-ic">{% include icon.html name="folder" %}</div>
        <div class="pd-row-kicker">Organization</div>
        <div class="pd-row-title">Nest, tag, filter, sort — your way</div>
        <div class="pd-row-text">
          Create hierarchical pages with unlimited nesting, drag-and-drop reordering, and color dots.
          Tag entries with color-coded labels that double as Kanban columns. Star your favorites for a
          dedicated quick-access panel. Open multiple independent tab views at once to compare notes
          side by side. Filter by page, label, file type, or date range — and combine them all.
        </div>
      </div>
      <div class="pd-row-detail">
        <div class="pd-detail-chip">
          <div class="pd-chip-title">Hierarchical pages</div>
          <div class="pd-chip-text">Nested parent/child tree with disclosure arrows, right-click context menus, page icons, activity-based sorting, and a utilization pie chart.</div>
        </div>
        <div class="pd-detail-chip">
          <div class="pd-chip-title">Multi-tab views</div>
          <div class="pd-chip-text">Open as many list tabs as you need — each with its own independent sort, filter, and pagination state. Add new tabs with the + button.</div>
        </div>
        <div class="pd-detail-chip">
          <div class="pd-chip-title">Inline hashtags → Kanban</div>
          <div class="pd-chip-text">Drop #hashtags into your notes and the Kanban Board tool auto-generates columns from them — drag-and-drop cards that stay in sync with your entries.</div>
        </div>
        <div class="pd-detail-chip">
          <div class="pd-chip-title">File type filtering</div>
          <div class="pd-chip-text">Filter entries by the types of files they have attached — match any or match all — to surface exactly the notes with the assets you need.</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ━━━ SECURITY ━━━ -->
<section class="section">
  <div class="container">
    <header class="section-head" data-reveal>
      <h2 class="h2">Privacy isn't a feature — it's the architecture</h2>
      <p class="muted">Your data lives on your device. Sensitive entries get their own password and military-grade encryption.</p>
    </header>

    <div class="pd-row flip pd-sec-sec" data-reveal>
      <div class="pd-row-card">
        <div class="pd-row-ic">{% include icon.html name="lock" %}</div>
        <div class="pd-row-kicker">Encryption</div>
        <div class="pd-row-title">AES-256-GCM, per entry, on your terms</div>
        <div class="pd-row-text">
          Each encrypted entry gets its own password, its own random 16-byte salt, and its own
          12-byte initialization vector. Key derivation uses PBKDF2 with 100,000 iterations of SHA-256.
          Decrypted plaintext is held in memory only — it never touches your disk unencrypted. Session
          caching avoids re-prompting when you switch between locked entries during a session.
          A full-page blur lock screen blocks all interaction until you authenticate.
        </div>
      </div>
      <div class="pd-row-detail">
        <div class="pd-detail-chip">
          <div class="pd-chip-title">Zero network access</div>
          <div class="pd-chip-text">VaultBook has no backend, no API calls, no telemetry. It runs in your browser from a local HTML file — nothing is ever sent over the network.</div>
        </div>
        <div class="pd-detail-chip">
          <div class="pd-chip-title">Password per entry</div>
          <div class="pd-chip-text">Unlike global vault passwords, each entry has its own independent password — compromising one doesn't expose the rest.</div>
        </div>
        <div class="pd-detail-chip">
          <div class="pd-chip-title">Lock screen</div>
          <div class="pd-chip-text">Walk away from your desk and the lock screen blurs the entire app, blocks pointer events and text selection — nothing is visible or interactable until you unlock.</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ━━━ SCHEDULING & ANALYTICS ━━━ -->
<section class="section tint">
  <div class="container">
    <header class="section-head" data-reveal>
      <h2 class="h2">Know what's due, what's expiring, and where your time goes</h2>
      <p class="muted">A built-in timetable, analytics dashboard, and sidebar timeline keep you oriented.</p>
    </header>

    <div class="pd-row pd-sec-time" data-reveal>
      <div class="pd-row-card">
        <div class="pd-row-ic">{% include icon.html name="calendar" %}</div>
        <div class="pd-row-kicker">Time &amp; Analytics</div>
        <div class="pd-row-title">Scheduling, charts, and a bird's-eye view</div>
        <div class="pd-row-text">
          Set due dates, expiry dates, and repeat schedules on any entry. The sidebar shows
          Recent, Due, and Expiring tabs so nothing slips. Open the full timetable for day and
          week views on a scrollable 24-hour timeline — all backed to disk so nothing disappears.
          The AI suggestions pager surfaces entries coming up in the next 48 hours.
          The analytics panel gives you entry counts, file breakdowns, storage usage, and three
          Canvas-rendered charts: label utilization, 14-day activity, and page distribution.
        </div>
      </div>
      <div class="pd-row-detail">
        <div class="pd-detail-chip">
          <div class="pd-chip-title">Day &amp; week calendar</div>
          <div class="pd-chip-text">Scrollable 24-hour timeline with tabbed day and week views. Disk-backed persistence means your schedule survives refreshes and sessions.</div>
        </div>
        <div class="pd-detail-chip">
          <div class="pd-chip-title">Analytics charts</div>
          <div class="pd-chip-text">Three Canvas-rendered visualizations: label utilization pie chart, last 14 days activity line chart, and pages utilization pie — all computed locally.</div>
        </div>
        <div class="pd-detail-chip">
          <div class="pd-chip-title">Random note spotlight</div>
          <div class="pd-chip-text">The 🎲 sidebar widget surfaces a random note every hour — a gentle way to rediscover old ideas and keep your library alive.</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ━━━ BUILT-IN TOOLS ━━━ -->
<section class="section">
  <div class="container">
    <header class="section-head" data-reveal>
      <h2 class="h2">12+ productivity tools, zero installs</h2>
      <p class="muted">Every tool opens inside VaultBook from the sidebar. No extensions, no tabs, no context switching.</p>
    </header>

    <div class="pd-tools" data-reveal>
      <div class="pd-tool">
        <span class="pd-tool-emoji">📋</span>
        <div class="pd-tool-name">Kanban Board</div>
        <div class="pd-tool-desc">Labels and inline hashtags become drag-and-drop columns, auto-synced with your notes.</div>
      </div>
      <div class="pd-tool">
        <span class="pd-tool-emoji">📊</span>
        <div class="pd-tool-name">File Analyzer</div>
        <div class="pd-tool-desc">Drop a CSV or TXT and visualize your data instantly.</div>
      </div>
      <div class="pd-tool">
        <span class="pd-tool-emoji">📰</span>
        <div class="pd-tool-name">RSS Reader</div>
        <div class="pd-tool-desc">Follow RSS and Atom feeds organized in folders.</div>
      </div>
      <div class="pd-tool">
        <span class="pd-tool-emoji">💬</span>
        <div class="pd-tool-name">Threads</div>
        <div class="pd-tool-desc">Chat-style notes in a focused centered overlay.</div>
      </div>
      <div class="pd-tool">
        <span class="pd-tool-emoji">🔗</span>
        <div class="pd-tool-name">URL → Entry</div>
        <div class="pd-tool-desc">Save any web page as a searchable note.</div>
      </div>
      <div class="pd-tool">
        <span class="pd-tool-emoji">🎵</span>
        <div class="pd-tool-name">MP3 Editor</div>
        <div class="pd-tool-desc">Cut clips, trim silence, and join audio segments.</div>
      </div>
      <div class="pd-tool">
        <span class="pd-tool-emoji">📁</span>
        <div class="pd-tool-name">File Explorer</div>
        <div class="pd-tool-desc">Browse all attachments by type, entry, or page.</div>
      </div>
      <div class="pd-tool">
        <span class="pd-tool-emoji">🖼️</span>
        <div class="pd-tool-name">Media Explorer</div>
        <div class="pd-tool-desc">Scan and browse folders of photos and videos.</div>
      </div>
      <div class="pd-tool">
        <span class="pd-tool-emoji">🔑</span>
        <div class="pd-tool-name">Password Generator</div>
        <div class="pd-tool-desc">Generate strong passwords and copy with one click.</div>
      </div>
      <div class="pd-tool">
        <span class="pd-tool-emoji">💾</span>
        <div class="pd-tool-name">Folder Analyzer</div>
        <div class="pd-tool-desc">Visualize disk space and file sizes at a glance.</div>
      </div>
      <div class="pd-tool">
        <span class="pd-tool-emoji">📄</span>
        <div class="pd-tool-name">PDF Tools</div>
        <div class="pd-tool-desc">Merge, split, and compress PDFs — including scanned documents.</div>
      </div>
      <div class="pd-tool">
        <span class="pd-tool-emoji">📥</span>
        <div class="pd-tool-name">Obsidian Import</div>
        <div class="pd-tool-desc">Drop .md files to migrate your Obsidian vault instantly.</div>
      </div>
    </div>
  </div>
</section>

<!-- ━━━ ARCHITECTURE ━━━ -->
<section class="section tint">
  <div class="container">
    <header class="section-head" data-reveal>
      <h2 class="h2">How VaultBook works</h2>
      <p class="muted">No installer. No runtime. No backend. Just a browser and a folder.</p>
    </header>

    <div class="pd-arch" data-reveal>
      <div class="pd-arch-card">
        <span class="pd-arch-emoji">📦</span>
        <div class="pd-arch-title">One HTML file</div>
        <div class="pd-arch-text">The entire application ships as a single portable HTML file. Open it in any Chromium browser — that's the install.</div>
      </div>
      <div class="pd-arch-card">
        <span class="pd-arch-emoji">📂</span>
        <div class="pd-arch-title">File System Access API</div>
        <div class="pd-arch-text">Point VaultBook at any folder. Your notes, attachments, versions, and settings are stored as plain files you own and control.</div>
      </div>
      <div class="pd-arch-card">
        <span class="pd-arch-emoji">🔒</span>
        <div class="pd-arch-title">Zero network, zero trust</div>
        <div class="pd-arch-text">No API calls, no telemetry, no analytics pings. VaultBook never opens a network connection. Your data never leaves your device.</div>
      </div>
    </div>

    <div style="max-width:620px; margin:28px auto 0; display:flex; flex-direction:column; gap:12px;" data-reveal>
      <div class="pd-detail-chip">
        <div class="pd-chip-title">repository.json</div>
        <div class="pd-chip-text">Your pages, entries, labels, votes, and metadata — stored as a single JSON file you can inspect, back up, or version-control.</div>
      </div>
      <div class="pd-detail-chip">
        <div class="pd-chip-title">/attachments</div>
        <div class="pd-chip-text">All attached files live here alongside an index.txt manifest. Entry bodies are stored as sidecar Markdown files (details-&lt;id&gt;.md) for easy reading outside VaultBook.</div>
      </div>
      <div class="pd-detail-chip">
        <div class="pd-chip-title">Autosave + manual save</div>
        <div class="pd-chip-text">Changes are autosaved with debouncing and a dirty flag. A concurrent-write guard prevents data races. The status badge shows sync state in real time.</div>
      </div>
    </div>
  </div>
</section>

<!-- ━━━ FINAL CTA ━━━ -->
<section class="section">
  <div class="container">
    <div class="cta-band" data-reveal>
      <div>
        <div class="cta-title">Ready to try VaultBook?</div>
        <div class="muted">Download, unzip, and open. You'll be writing your first note in under a minute.</div>
      </div>
      <div class="cta-actions">
        <a class="btn btn-primary" href="{{ '/get-started/' | relative_url }}">Get started</a>
        <a class="btn btn-ghost" href="{{ '/demo/' | relative_url }}">Request a demo</a>
      </div>
    </div>
  </div>
</section>
