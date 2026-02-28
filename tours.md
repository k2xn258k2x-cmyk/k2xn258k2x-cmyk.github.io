---
layout: default
title: Product Tours
description: "Guided walkthroughs of every VaultBook feature — from your first note to AI-powered search, encryption, deep file indexing, and 14+ built-in tools."
body_class: tours-page
permalink: /tours/
---

<style>
/* ── Hero ────────────────────────────────────────────────────── */
.tr-hero{
  padding: 80px 0 64px;
  text-align: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, #faf8ff 0%, #f3f0fa 42%, #fff 100%);
}
.tr-hero::before{
  content: '';
  position: absolute;
  width: 800px; height: 800px;
  border-radius: 50%;
  top: -360px; left: 50%;
  transform: translateX(-50%);
  background: radial-gradient(circle, rgba(206,147,216,.12) 0%, rgba(129,212,250,.06) 50%, transparent 72%);
  pointer-events: none;
}
.tr-eyebrow{
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 750;
  text-transform: uppercase;
  letter-spacing: .16em;
  background: linear-gradient(135deg, rgba(243,229,245,.55), rgba(225,245,254,.35));
  border: 1px solid rgba(206,147,216,.18);
  border-radius: 999px;
  padding: 6px 18px;
  color: #7b1fa2;
  -webkit-text-fill-color: #7b1fa2;
  position: relative; z-index: 1;
  margin-bottom: 16px;
}
.tr-hero-title{
  font-size: clamp(36px, 5.4vw, 58px);
  font-weight: 900;
  letter-spacing: -0.035em;
  line-height: 1.06;
  margin: 0;
  position: relative; z-index: 1;
}
.tr-hero-sub{
  margin: 18px auto 0;
  max-width: 56ch;
  font-size: 17px;
  color: rgba(11,11,11,.6);
  line-height: 1.6;
  position: relative; z-index: 1;
}

/* ── Section ─────────────────────────────────────────────────── */
.tr-section{ padding: 64px 0; }
.tr-section + .tr-section{ padding-top: 0; }
.tr-section-head{ text-align: center; margin-bottom: 40px; }
.tr-section-title{
  font-size: clamp(26px, 3.8vw, 38px);
  font-weight: 900;
  letter-spacing: -0.03em;
  margin: 14px 0 0;
}
.tr-section-sub{
  font-size: 16px;
  color: rgba(11,11,11,.55);
  max-width: 54ch;
  margin: 12px auto 0;
  line-height: 1.55;
}

/* ── Quick-nav grid ──────────────────────────────────────────── */
.tr-nav{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  max-width: 860px;
  margin: 36px auto 0;
  position: relative; z-index: 1;
}
.tr-nav-item{
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 16px;
  background: rgba(255,255,255,.7);
  border: 1px solid rgba(206,147,216,.1);
  border-radius: 14px;
  text-decoration: none;
  color: inherit;
  font-size: 13.5px;
  font-weight: 700;
  transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
}
.tr-nav-item:hover{
  transform: translateY(-2px);
  box-shadow: 0 8px 22px rgba(206,147,216,.1);
  border-color: rgba(206,147,216,.22);
}
.tr-nav-ic{
  width: 34px; height: 34px;
  min-width: 34px;
  border-radius: 10px;
  display: grid; place-items: center;
  font-size: 16px;
  background: linear-gradient(135deg, rgba(243,229,245,.3), rgba(225,245,254,.2));
}

/* ── Tour blocks (expandable) ────────────────────────────────── */
.tr-tours{
  max-width: 820px;
  margin: 0 auto;
}
.tr-tour{
  border: 1px solid rgba(206,147,216,.1);
  border-radius: 18px;
  margin-bottom: 12px;
  background: rgba(255,255,255,.65);
  overflow: hidden;
  transition: border-color .25s ease, box-shadow .25s ease;
}
.tr-tour:hover{
  border-color: rgba(206,147,216,.2);
}
.tr-tour[open]{
  border-color: rgba(206,147,216,.25);
  box-shadow: 0 10px 30px rgba(206,147,216,.1);
}
.tr-tour summary{
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 24px;
  cursor: pointer;
  list-style: none;
  transition: background .2s ease;
}
.tr-tour summary::-webkit-details-marker{ display: none; }
.tr-tour summary:hover{ background: rgba(243,229,245,.06); }
.tr-tour-ic{
  width: 44px; height: 44px;
  min-width: 44px;
  border-radius: 14px;
  display: grid; place-items: center;
  font-size: 20px;
  transition: transform .22s ease;
}
.tr-tour:hover .tr-tour-ic{ transform: scale(1.06); }
.tr-tour:nth-of-type(12n+1) .tr-tour-ic{ background: linear-gradient(135deg, rgba(206,147,216,.18), rgba(243,229,245,.2)); }
.tr-tour:nth-of-type(12n+2) .tr-tour-ic{ background: linear-gradient(135deg, rgba(129,212,250,.18), rgba(179,229,252,.15)); }
.tr-tour:nth-of-type(12n+3) .tr-tour-ic{ background: linear-gradient(135deg, rgba(128,203,196,.18), rgba(178,223,219,.15)); }
.tr-tour:nth-of-type(12n+4) .tr-tour-ic{ background: linear-gradient(135deg, rgba(255,204,128,.22), rgba(255,224,178,.16)); }
.tr-tour:nth-of-type(12n+5) .tr-tour-ic{ background: linear-gradient(135deg, rgba(244,143,177,.18), rgba(248,187,208,.14)); }
.tr-tour:nth-of-type(12n+6) .tr-tour-ic{ background: linear-gradient(135deg, rgba(165,214,167,.18), rgba(200,230,201,.15)); }
.tr-tour:nth-of-type(12n+7) .tr-tour-ic{ background: linear-gradient(135deg, rgba(179,157,219,.18), rgba(209,196,233,.14)); }
.tr-tour:nth-of-type(12n+8) .tr-tour-ic{ background: linear-gradient(135deg, rgba(206,147,216,.18), rgba(243,229,245,.2)); }
.tr-tour:nth-of-type(12n+9) .tr-tour-ic{ background: linear-gradient(135deg, rgba(129,212,250,.18), rgba(179,229,252,.15)); }
.tr-tour:nth-of-type(12n+10) .tr-tour-ic{ background: linear-gradient(135deg, rgba(128,203,196,.18), rgba(178,223,219,.15)); }
.tr-tour:nth-of-type(12n+11) .tr-tour-ic{ background: linear-gradient(135deg, rgba(255,204,128,.22), rgba(255,224,178,.16)); }
.tr-tour:nth-of-type(12n+12) .tr-tour-ic{ background: linear-gradient(135deg, rgba(244,143,177,.18), rgba(248,187,208,.14)); }

.tr-tour-head{ flex: 1; }
.tr-tour-title{ font-weight: 850; font-size: 17px; }
.tr-tour-tier{
  display: inline-block;
  margin-left: 8px;
  font-size: 10px;
  font-weight: 750;
  padding: 2px 8px;
  border-radius: 999px;
  letter-spacing: .06em;
  vertical-align: middle;
}
.tr-tour-tier.plus{ background: rgba(129,212,250,.15); color: #0277bd; -webkit-text-fill-color: #0277bd; }
.tr-tour-tier.pro{ background: rgba(206,147,216,.15); color: #7b1fa2; -webkit-text-fill-color: #7b1fa2; }
.tr-tour-subtitle{
  margin-top: 3px;
  font-size: 13px;
  color: rgba(11,11,11,.45);
  line-height: 1.4;
}
.tr-tour-arrow{
  width: 28px; height: 28px;
  min-width: 28px;
  border-radius: 8px;
  background: linear-gradient(135deg, rgba(243,229,245,.3), rgba(225,245,254,.2));
  display: grid; place-items: center;
  font-size: 13px;
  color: #7b1fa2;
  -webkit-text-fill-color: #7b1fa2;
  transition: transform .25s ease;
}
.tr-tour[open] .tr-tour-arrow{ transform: rotate(90deg); }

/* Expanded body */
.tr-body{
  padding: 0 24px 24px 24px;
  border-top: 1px solid rgba(206,147,216,.08);
}
.tr-body p{
  font-size: 14.5px;
  color: rgba(11,11,11,.6);
  line-height: 1.65;
  margin: 16px 0 0;
}
.tr-body p:first-child{ margin-top: 16px; }
.tr-step-label{
  display: inline-block;
  margin-top: 20px;
  margin-bottom: 6px;
  font-size: 11px;
  font-weight: 750;
  text-transform: uppercase;
  letter-spacing: .12em;
  color: rgba(11,11,11,.35);
}
.tr-steps{
  list-style: none;
  padding: 0;
  margin: 0;
  counter-reset: step;
}
.tr-steps li{
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 8px 0;
  font-size: 14px;
  color: rgba(11,11,11,.6);
  line-height: 1.55;
}
.tr-steps li::before{
  counter-increment: step;
  content: counter(step);
  min-width: 26px; height: 26px;
  border-radius: 9px;
  display: grid; place-items: center;
  font-size: 12px;
  font-weight: 800;
  color: #7b1fa2;
  -webkit-text-fill-color: #7b1fa2;
  background: linear-gradient(135deg, rgba(206,147,216,.12), rgba(129,212,250,.08));
  flex-shrink: 0;
}
.tr-note{
  margin-top: 14px;
  padding: 14px 16px;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(243,229,245,.12), rgba(225,245,254,.08));
  border-left: 3px solid rgba(206,147,216,.25);
  font-size: 13.5px;
  color: rgba(11,11,11,.55);
  line-height: 1.5;
}
.tr-note strong{
  color: rgba(11,11,11,.7);
}
.tr-tech-pills{
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-top: 14px;
}
.tr-tech{
  font-size: 11px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 8px;
  background: rgba(11,11,11,.04);
  color: rgba(11,11,11,.45);
  -webkit-text-fill-color: rgba(11,11,11,.45);
}

/* ── Bottom CTA ──────────────────────────────────────────────── */
.tr-cta{
  margin: 24px 0 64px;
  border: 1px solid rgba(206,147,216,.14);
  border-radius: 26px;
  background: linear-gradient(135deg, rgba(255,255,255,.94), rgba(243,229,245,.18) 40%, rgba(225,245,254,.12) 100%);
  padding: 40px 36px;
  box-shadow: 0 14px 44px rgba(206,147,216,.1), 0 2px 6px rgba(0,0,0,.03);
  text-align: center;
  position: relative; overflow: hidden;
}
.tr-cta::before{
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; height: 3px;
  background: linear-gradient(90deg, #f48fb1, #ce93d8, #81d4fa, #80cbc4, #ffcc80);
  opacity: .55;
}
.tr-cta-title{ font-size: clamp(22px, 3vw, 30px); font-weight: 900; letter-spacing: -0.02em; margin: 0; }
.tr-cta-sub{ font-size: 16px; color: rgba(11,11,11,.55); margin: 10px 0 0; line-height: 1.55; }
.tr-cta-actions{ display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; margin-top: 28px; }

/* ── Responsive ──────────────────────────────────────────────── */
@media (max-width: 900px){
  .tr-nav{ grid-template-columns: 1fr 1fr; }
}
@media (max-width: 600px){
  .tr-nav{ grid-template-columns: 1fr; }
  .tr-tour summary{ padding: 16px 18px; }
  .tr-body{ padding: 0 18px 20px 18px; }
  .tr-tour-arrow{ display: none; }
}
</style>

<!-- ════════════════════════════════════════════════════════════════
     HERO
     ════════════════════════════════════════════════════════════════ -->
<section class="tr-hero">
  <div class="container" data-reveal>
    <div class="tr-eyebrow">🗺️ Product Tours</div>
    <h1 class="tr-hero-title">Every feature,<br>step by step.</h1>
    <p class="tr-hero-sub">
      Guided walkthroughs of the entire VaultBook workspace — from creating your first note
      to training the AI with your votes. Click any tour below to expand the full walkthrough.
    </p>

    <div class="tr-nav">
      <a class="tr-nav-item" href="#getting-started"><div class="tr-nav-ic">🚀</div> Getting Started</a>
      <a class="tr-nav-item" href="#ai-search"><div class="tr-nav-ic">🧠</div> AI &amp; Search</a>
      <a class="tr-nav-item" href="#editing"><div class="tr-nav-ic">✏️</div> Editing &amp; Notes</a>
      <a class="tr-nav-item" href="#organization"><div class="tr-nav-ic">📂</div> Organization</a>
      <a class="tr-nav-item" href="#security"><div class="tr-nav-ic">🔒</div> Security</a>
      <a class="tr-nav-item" href="#files"><div class="tr-nav-ic">📎</div> Files &amp; Indexing</a>
      <a class="tr-nav-item" href="#tools"><div class="tr-nav-ic">🛠️</div> Built-in Tools</a>
      <a class="tr-nav-item" href="#pro"><div class="tr-nav-ic">⭐</div> Pro Features</a>
    </div>
  </div>
</section>

<!-- ════════════════════════════════════════════════════════════════
     GETTING STARTED
     ════════════════════════════════════════════════════════════════ -->
<section class="tr-section" id="getting-started">
  <div class="container">
    <div class="tr-section-head" data-reveal>
      <div class="tr-eyebrow">🚀 Getting Started</div>
      <h2 class="tr-section-title">Your first 5 minutes</h2>
      <p class="tr-section-sub">How to download, connect a folder, and create your first note.</p>
    </div>

    <div class="tr-tours" data-reveal>

      <details class="tr-tour">
        <summary>
          <div class="tr-tour-ic">📥</div>
          <div class="tr-tour-head">
            <div class="tr-tour-title">Download &amp; open VaultBook</div>
            <div class="tr-tour-subtitle">Get VaultBook running in under 60 seconds.</div>
          </div>
          <div class="tr-tour-arrow">→</div>
        </summary>
        <div class="tr-body">
          <p>VaultBook ships as a single HTML file inside a ZIP archive. There's nothing to install — no app store, no installer wizard, no Electron wrapper. You just open a file.</p>
          <div class="tr-step-label">Walkthrough</div>
          <ol class="tr-steps">
            <li>Go to the <a href="/download/">Download page</a> and grab the Plus or Pro ZIP for your platform (macOS, Windows, or Linux — the file is the same, it's just a browser app).</li>
            <li>Extract the ZIP. Inside you'll find <strong>VaultBook.html</strong> and a <strong>license.json</strong> file.</li>
            <li>Create a new folder anywhere on your computer — this will be your VaultBook storage folder. Move <strong>license.json</strong> into this folder.</li>
            <li>Double-click <strong>VaultBook.html</strong> to open it in your browser (Chrome, Edge, Arc, or Brave). You'll see the VaultBook workspace load instantly.</li>
          </ol>
          <div class="tr-note"><strong>First-time users:</strong> VaultBook will show a storage tutorial guiding you through connecting your folder. Follow the prompts — it only takes a few seconds.</div>
          <div class="tr-tech-pills"><span class="tr-tech">Single HTML File</span><span class="tr-tech">Zero Dependencies</span><span class="tr-tech">Chromium Browsers</span></div>
        </div>
      </details>

      <details class="tr-tour">
        <summary>
          <div class="tr-tour-ic">📁</div>
          <div class="tr-tour-head">
            <div class="tr-tour-title">Connect your storage folder</div>
            <div class="tr-tour-subtitle">Link VaultBook to a local folder using the File System Access API.</div>
          </div>
          <div class="tr-tour-arrow">→</div>
        </summary>
        <div class="tr-body">
          <p>VaultBook stores everything in a regular folder on your computer. No cloud, no account, no database — just JSON files and your attachments in a directory you control.</p>
          <div class="tr-step-label">Walkthrough</div>
          <ol class="tr-steps">
            <li>When VaultBook opens for the first time, click <strong>"Connect Folder"</strong> in the welcome prompt.</li>
            <li>Your browser will show a folder picker. Select the folder where you placed <strong>license.json</strong>.</li>
            <li>Grant the permission prompt — this lets VaultBook read and write files in that folder only.</li>
            <li>VaultBook creates <strong>repository.json</strong> (your notes database) and an <strong>/attachments</strong> directory automatically.</li>
          </ol>
          <div class="tr-note"><strong>What's in the folder:</strong> <code>license.json</code> (your license), <code>repository.json</code> (pages, items, votes), <code>/attachments/</code> (files + sidecar .md bodies + index.txt manifest), and <code>/versions/</code> (Pro: version snapshots).</div>
          <div class="tr-tech-pills"><span class="tr-tech">File System Access API</span><span class="tr-tech">repository.json</span><span class="tr-tech">index.txt Manifest</span></div>
        </div>
      </details>

      <details class="tr-tour">
        <summary>
          <div class="tr-tour-ic">🗒️</div>
          <div class="tr-tour-head">
            <div class="tr-tour-title">Create your first note</div>
            <div class="tr-tour-subtitle">Use the floating action button or sidebar to create a new entry.</div>
          </div>
          <div class="tr-tour-arrow">→</div>
        </summary>
        <div class="tr-body">
          <p>Notes in VaultBook are called "entries." Each entry has a title, rich text body, labels, attachments, sections, due dates, and more. Here's how to create one.</p>
          <div class="tr-step-label">Walkthrough</div>
          <ol class="tr-steps">
            <li>Click the <strong>floating action button (FAB)</strong> — the round button in the bottom-right corner — or use the <strong>+ button</strong> in the sidebar.</li>
            <li>The entry editor modal opens. Type a <strong>title</strong> at the top.</li>
            <li>Write in the <strong>rich text body</strong> below — you can use the toolbar for bold, italic, headings, lists, code blocks, tables, callout blocks, and more.</li>
            <li>Add <strong>labels</strong> by clicking the label selector — these are color-coded tags that help you filter and organize.</li>
            <li>Choose a <strong>page</strong> (notebook) from the page path selector to file the entry into a specific location.</li>
            <li>Click <strong>Save</strong>. Your entry appears in the main list and is immediately searchable.</li>
          </ol>
          <div class="tr-note"><strong>Autosave:</strong> VaultBook autosaves in the background with dirty-flag debouncing. A sync status badge in the toolbar shows save state. You can also manually save at any time.</div>
          <div class="tr-tech-pills"><span class="tr-tech">FAB</span><span class="tr-tech">contentEditable</span><span class="tr-tech">Autosave</span><span class="tr-tech">Dirty Flag Debounce</span></div>
        </div>
      </details>

      <details class="tr-tour">
        <summary>
          <div class="tr-tour-ic">🖥️</div>
          <div class="tr-tour-head">
            <div class="tr-tour-title">The workspace layout</div>
            <div class="tr-tour-subtitle">Sidebar, main area, toolbar, and responsive behavior.</div>
          </div>
          <div class="tr-tour-arrow">→</div>
        </summary>
        <div class="tr-body">
          <p>VaultBook uses a sidebar + main content split with frosted glass effects. The sidebar holds navigation, tools, and intelligence features. The main area shows your entry list.</p>
          <div class="tr-step-label">What's where</div>
          <ol class="tr-steps">
            <li><strong>Sidebar (left):</strong> Pages tree, Favorites panel, Labels list, Sidebar Time Tabs (Recent / Due / Expiring / Tools), AI Suggestions pager, Analytics panel, and Random Note Spotlight.</li>
            <li><strong>Main area (right):</strong> Entry cards in a scrollable list with pagination (configurable items per page). Each card shows title, labels, timestamps, attachment count, and action buttons.</li>
            <li><strong>Toolbar (top):</strong> Search bar with typeahead, sort controls, filter toggles, and the sidebar toggle button to hide/show the sidebar.</li>
            <li><strong>Floating Action Button (bottom-right):</strong> Quick-create a new entry from anywhere in the app.</li>
            <li><strong>Responsive:</strong> At 900px the layout stacks to a single column. At 720px, compact mobile optimizations activate.</li>
          </ol>
          <div class="tr-tech-pills"><span class="tr-tech">Frosted Glass</span><span class="tr-tech">backdrop-filter</span><span class="tr-tech">CSS Custom Properties</span><span class="tr-tech">Responsive 900px/720px</span></div>
        </div>
      </details>

    </div>
  </div>
</section>

<!-- ════════════════════════════════════════════════════════════════
     AI & SEARCH
     ════════════════════════════════════════════════════════════════ -->
<section class="tr-section" id="ai-search">
  <div class="container">
    <div class="tr-section-head" data-reveal>
      <div class="tr-eyebrow">🧠 AI &amp; Search</div>
      <h2 class="tr-section-title">Intelligence that learns from you</h2>
      <p class="tr-section-sub">How VaultBook's AI features work and how you interact with them.</p>
    </div>

    <div class="tr-tours" data-reveal>

      <details class="tr-tour">
        <summary>
          <div class="tr-tour-ic">✨</div>
          <div class="tr-tour-head">
            <div class="tr-tour-title">AI Suggestions pager <span class="tr-tour-tier plus">PLUS</span></div>
            <div class="tr-tour-subtitle">A 4-page carousel that learns your behavior and predicts what you'll need.</div>
          </div>
          <div class="tr-tour-arrow">→</div>
        </summary>
        <div class="tr-body">
          <p>The AI Suggestions pager lives in the sidebar — a swipeable 4-page carousel powered by your reading habits. It doesn't use external APIs; it learns from your local activity.</p>
          <div class="tr-step-label">The 4 pages</div>
          <ol class="tr-steps">
            <li><strong>Suggestions:</strong> Shows your next scheduled entry (upcoming due/expiry) and your top 3 weekday reading patterns — entries you tend to open on this day of the week, analyzed over the last 4 weeks.</li>
            <li><strong>Recently Read:</strong> Up to 100 recently opened entries, deduplicated, with timestamps showing when you last viewed each one.</li>
            <li><strong>Recent Files:</strong> Attachments and files you've recently opened or interacted with across entries.</li>
            <li><strong>Recent Tools:</strong> Built-in tools you've used most recently (Pro), giving you one-click access back to your last workflow.</li>
          </ol>
          <div class="tr-step-label">How to use it</div>
          <ol class="tr-steps">
            <li>Look at the sidebar — the pager appears near the top with page dots below it.</li>
            <li>Swipe or click the dots to navigate between the 4 pages.</li>
            <li>Click any suggested entry to open it directly.</li>
          </ol>
          <div class="tr-note"><strong>How it learns:</strong> The pager analyzes your personalized relevance distribution across your library. The more you use VaultBook, the more accurate the suggestions become — all computed locally.</div>
        </div>
      </details>

      <details class="tr-tour">
        <summary>
          <div class="tr-tour-ic">🔎</div>
          <div class="tr-tour-head">
            <div class="tr-tour-title">Ask a Question (QA Search) <span class="tr-tour-tier plus">PLUS</span></div>
            <div class="tr-tour-subtitle">Natural-language search across 7 weighted content layers.</div>
          </div>
          <div class="tr-tour-arrow">→</div>
        </summary>
        <div class="tr-body">
          <p>QA Search lets you ask your library a question in plain English. VaultBook scores results across 7 distinct content layers, each with a different weight reflecting its importance.</p>
          <div class="tr-step-label">The 7 content layers</div>
          <ol class="tr-steps">
            <li><strong>Titles (weight 8):</strong> The entry title is the strongest signal — a title match almost always means high relevance.</li>
            <li><strong>Labels (weight 6):</strong> Your tags and categories, which represent intentional classification.</li>
            <li><strong>Inline OCR text (weight 5):</strong> Text extracted from images embedded in entries via the OCR engine.</li>
            <li><strong>Body / details (weight 4):</strong> The main rich text content of the entry.</li>
            <li><strong>Sections text (weight 3):</strong> Content inside sub-sections (accordion entries within a note).</li>
            <li><strong>Main attachments + names (weight 2):</strong> File names and extracted text from attached documents.</li>
            <li><strong>Section attachments (weight 1):</strong> Files attached to individual sections within entries.</li>
          </ol>
          <div class="tr-step-label">How to use it</div>
          <ol class="tr-steps">
            <li>Click the <strong>QA search icon</strong> in the sidebar (separate from the toolbar search bar).</li>
            <li>Type your question naturally — "What were the Q3 results?" or "meeting notes from December."</li>
            <li>Results appear paginated (6 per page) with prev/next navigation.</li>
            <li>VaultBook automatically warm-loads indexed text for the top 12 candidates, including triggering background OCR if it hasn't been done yet.</li>
            <li>Results respect any active page or label filters you've set.</li>
          </ol>
          <div class="tr-tech-pills"><span class="tr-tech">Multi-Field Scoring</span><span class="tr-tech">Pagination</span><span class="tr-tech">OCR Warm-up</span><span class="tr-tech">Filter-Aware</span></div>
        </div>
      </details>

      <details class="tr-tour">
        <summary>
          <div class="tr-tour-ic">🔤</div>
          <div class="tr-tour-head">
            <div class="tr-tour-title">Typeahead search &amp; query history <span class="tr-tour-tier plus">PLUS</span></div>
            <div class="tr-tour-subtitle">Real-time suggestions as you type in the search bar.</div>
          </div>
          <div class="tr-tour-arrow">→</div>
        </summary>
        <div class="tr-body">
          <p>The main toolbar search bar provides instant typeahead results and remembers your past queries.</p>
          <div class="tr-step-label">How it works</div>
          <ol class="tr-steps">
            <li>Click into the <strong>search bar</strong> in the top toolbar.</li>
            <li>Start typing — a dropdown appears instantly with matching entries based on titles, details, labels, attachment names, and content.</li>
            <li>Below the live results, you'll see <strong>query suggestions</strong> from your search history — previously typed queries that match what you're typing now.</li>
            <li>Click any result to open the entry, or press Enter to run a full search and see the filtered entry list.</li>
          </ol>
          <div class="tr-note"><strong>Two search systems:</strong> The toolbar search filters the main entry list. QA Search (sidebar) is a separate natural-language engine with weighted scoring and pagination. Both work independently.</div>
        </div>
      </details>

      <details class="tr-tour">
        <summary>
          <div class="tr-tour-ic">👁️</div>
          <div class="tr-tour-head">
            <div class="tr-tour-title">Inline OCR <span class="tr-tour-tier plus">PLUS</span></div>
            <div class="tr-tour-subtitle">Automatic text extraction from images inside your entries.</div>
          </div>
          <div class="tr-tour-arrow">→</div>
        </summary>
        <div class="tr-body">
          <p>When you embed images in your notes (screenshots, photos of whiteboards, scanned receipts), VaultBook automatically OCRs them and makes the extracted text searchable.</p>
          <div class="tr-step-label">How it works</div>
          <ol class="tr-steps">
            <li>Paste or insert an image into any entry's rich text body.</li>
            <li>VaultBook detects the new image and runs OCR automatically via the <code>ocrInlineImagesForItem</code> function.</li>
            <li>Extracted text is cached per-item in the <code>inlineOcrText</code> field — so OCR only runs once per image unless it changes.</li>
            <li>The OCR text is indexed at <strong>weight 5</strong> in QA Search — higher than body text — making image content highly discoverable.</li>
            <li>For search performance, the top 12 QA result candidates trigger background OCR warm-up if OCR hasn't been run yet.</li>
          </ol>
          <div class="tr-tech-pills"><span class="tr-tech">Per-Item OCR Cache</span><span class="tr-tech">Background Warm-up</span><span class="tr-tech">Weight 5 in QA</span></div>
        </div>
      </details>

      <details class="tr-tour">
        <summary>
          <div class="tr-tour-ic">🏷️</div>
          <div class="tr-tour-head">
            <div class="tr-tour-title">Smart label suggestions <span class="tr-tour-tier plus">PLUS</span></div>
            <div class="tr-tour-subtitle">Content-aware tag recommendations in the edit modal.</div>
          </div>
          <div class="tr-tour-arrow">→</div>
        </summary>
        <div class="tr-body">
          <p>When you're editing an entry, VaultBook analyzes the content and suggests labels that might be relevant — surfaced as pastel-styled chips with frequency counts.</p>
          <div class="tr-step-label">How to use it</div>
          <ol class="tr-steps">
            <li>Open any entry in the edit modal.</li>
            <li>Look near the labels field — you'll see <strong>suggestion chips</strong> appear based on the entry's content analysis.</li>
            <li>Each chip shows a label name and a count indicating how often that label appears in similar entries.</li>
            <li>Click a chip to add that label to the current entry. The chip disappears from suggestions and moves to the active labels list.</li>
          </ol>
        </div>
      </details>

    </div>
  </div>
</section>

<!-- ════════════════════════════════════════════════════════════════
     EDITING & NOTES
     ════════════════════════════════════════════════════════════════ -->
<section class="tr-section" id="editing">
  <div class="container">
    <div class="tr-section-head" data-reveal>
      <div class="tr-eyebrow">✏️ Editing &amp; Notes</div>
      <h2 class="tr-section-title">Rich editing, sections &amp; scheduling</h2>
      <p class="tr-section-sub">Everything you can do inside an entry.</p>
    </div>

    <div class="tr-tours" data-reveal>

      <details class="tr-tour">
        <summary>
          <div class="tr-tour-ic">📝</div>
          <div class="tr-tour-head">
            <div class="tr-tour-title">Rich text editor <span class="tr-tour-tier plus">PLUS</span></div>
            <div class="tr-tour-subtitle">Tables, code blocks, callouts, headings, fonts, colors, and more.</div>
          </div>
          <div class="tr-tour-arrow">→</div>
        </summary>
        <div class="tr-body">
          <p>VaultBook's editor is built on contentEditable with a full formatting toolbar. It stores content as HTML (or plain text if you prefer) and supports rich structures like tables and code blocks.</p>
          <div class="tr-step-label">Toolbar features</div>
          <ol class="tr-steps">
            <li><strong>Text formatting:</strong> Bold, italic, underline, strikethrough. Keyboard shortcuts work as expected.</li>
            <li><strong>Headings:</strong> H1 through H6 via dropdown. Use these to structure long notes.</li>
            <li><strong>Lists:</strong> Ordered (numbered) and unordered (bullet) lists with proper nesting.</li>
            <li><strong>Font selector:</strong> Switch between font families for different sections of text.</li>
            <li><strong>Case transforms:</strong> Convert selected text to UPPERCASE, lowercase, Title Case, or Sentence case.</li>
            <li><strong>Colors:</strong> Text color picker and highlight/background color picker for emphasis.</li>
            <li><strong>Tables:</strong> Click the table button, pick a grid size (rows × columns), and insert. Right-click any cell to add/delete rows and columns.</li>
            <li><strong>Code blocks:</strong> Insert a code block with a language label. Syntax is displayed with monospace formatting.</li>
            <li><strong>Callout blocks:</strong> Accent-bar blocks with a title header and body — perfect for warnings, tips, or highlighted content.</li>
            <li><strong>Links and images:</strong> Insert hyperlinks and inline images directly into the body.</li>
            <li><strong>Markdown:</strong> If you paste Markdown, VaultBook renders it via marked.js. You can write in Markdown and see it formatted.</li>
          </ol>
        </div>
      </details>

      <details class="tr-tour">
        <summary>
          <div class="tr-tour-ic">📂</div>
          <div class="tr-tour-head">
            <div class="tr-tour-title">Sections (sub-entries) <span class="tr-tour-tier plus">PLUS</span></div>
            <div class="tr-tour-subtitle">Accordion sub-entries with their own editor and attachments.</div>
          </div>
          <div class="tr-tour-arrow">→</div>
        </summary>
        <div class="tr-body">
          <p>Sections let you break a single note into collapsible sub-entries — each with its own title, rich text body, and file attachments. Think of them as chapters within a note.</p>
          <div class="tr-step-label">How to use sections</div>
          <ol class="tr-steps">
            <li>Inside the edit modal, scroll to the <strong>Sections</strong> area and click <strong>"Add Section."</strong></li>
            <li>Give the section a title. Each section gets its own full rich text editor — same toolbar as the main body.</li>
            <li>Attach files to individual sections. Each section maintains its own attachment list, separate from the entry's main attachments.</li>
            <li>Sections display as collapsible accordions in the entry view — click to expand/collapse. A <strong>clip count badge</strong> shows how many attachments each section has.</li>
            <li>Section content is indexed at <strong>weight 3</strong> in QA Search, and section attachments at <strong>weight 1</strong>.</li>
          </ol>
        </div>
      </details>

      <details class="tr-tour">
        <summary>
          <div class="tr-tour-ic">📅</div>
          <div class="tr-tour-head">
            <div class="tr-tour-title">Due dates, expiry &amp; recurrence <span class="tr-tour-tier plus">PLUS</span></div>
            <div class="tr-tour-subtitle">Schedule entries with due dates, expiry dates, and repeat rules.</div>
          </div>
          <div class="tr-tour-arrow">→</div>
        </summary>
        <div class="tr-body">
          <p>Every entry can have scheduling fields that integrate with the sidebar time tabs and AI Suggestions.</p>
          <div class="tr-step-label">How to use scheduling</div>
          <ol class="tr-steps">
            <li>In the edit modal, set a <strong>Due date</strong> — the entry will appear in the sidebar's "Due" tab sorted by deadline.</li>
            <li>Set an <strong>Expiry date</strong> — entries approaching expiry show in the "Expiring" tab with urgency indicators.</li>
            <li>Enable <strong>Repeat / recurrence</strong> for entries that need periodic attention.</li>
            <li>Entries with upcoming dates appear in the AI Suggestions pager (Page 1) as "upcoming in next 48 hours," bridging scheduling and intelligent surfacing.</li>
          </ol>
        </div>
      </details>

    </div>
  </div>
</section>

<!-- ════════════════════════════════════════════════════════════════
     ORGANIZATION
     ════════════════════════════════════════════════════════════════ -->
<section class="tr-section" id="organization">
  <div class="container">
    <div class="tr-section-head" data-reveal>
      <div class="tr-eyebrow">📂 Organization</div>
      <h2 class="tr-section-title">Pages, labels, favorites &amp; navigation</h2>
      <p class="tr-section-sub">How to structure a library of hundreds or thousands of entries.</p>
    </div>

    <div class="tr-tours" data-reveal>

      <details class="tr-tour">
        <summary>
          <div class="tr-tour-ic">📚</div>
          <div class="tr-tour-head">
            <div class="tr-tour-title">Pages (hierarchical notebooks) <span class="tr-tour-tier plus">PLUS</span></div>
            <div class="tr-tour-subtitle">Nested folder tree with drag-and-drop reordering.</div>
          </div>
          <div class="tr-tour-arrow">→</div>
        </summary>
        <div class="tr-body">
          <p>Pages are VaultBook's folder system. They form a nested tree — like notebooks that contain sub-notebooks — and every entry lives in a page path.</p>
          <div class="tr-step-label">How to use pages</div>
          <ol class="tr-steps">
            <li>In the sidebar, find the <strong>Pages tree</strong>. Click a page to filter the main list to entries in that page.</li>
            <li><strong>Create a page:</strong> Right-click (or use the context menu) on any page and select "New sub-page."</li>
            <li><strong>Nest pages:</strong> Pages can have children — click the disclosure arrow to expand/collapse the tree.</li>
            <li><strong>Reorder:</strong> Drag and drop pages to rearrange them. The tree supports full reordering.</li>
            <li><strong>Customize:</strong> Pages can have icons and color dots for visual identification.</li>
            <li><strong>"All Pages"</strong> at the top shows every entry regardless of page — your root view.</li>
          </ol>
          <div class="tr-note"><strong>Data model:</strong> Each entry stores a <code>pagePath</code> (hierarchy trail) and can exist in multiple pages via <code>pagePaths</code>. Activity-based sorting options let you see most-active pages first.</div>
        </div>
      </details>

      <details class="tr-tour">
        <summary>
          <div class="tr-tour-ic">🏷️</div>
          <div class="tr-tour-head">
            <div class="tr-tour-title">Labels, hashtags &amp; favorites <span class="tr-tour-tier plus">PLUS</span></div>
            <div class="tr-tour-subtitle">Color-coded tags, inline hashtags, and the favorites panel.</div>
          </div>
          <div class="tr-tour-arrow">→</div>
        </summary>
        <div class="tr-body">
          <div class="tr-step-label">Labels</div>
          <ol class="tr-steps">
            <li>Labels are color-coded tags displayed as pills on entry cards and in the sidebar.</li>
            <li>Assign labels in the edit modal — select one or more from the multi-select tag list.</li>
            <li>Click any label in the sidebar to filter the entry list to only entries with that label.</li>
            <li>Labels also power the Kanban Board tool (Pro) — each label becomes a column automatically.</li>
          </ol>
          <div class="tr-step-label">Hashtags</div>
          <ol class="tr-steps">
            <li>Type <strong>#hashtag</strong> inline in any entry body. VaultBook parses these automatically.</li>
            <li>Hashtags create additional Kanban Board columns (Pro) alongside labels.</li>
          </ol>
          <div class="tr-step-label">Favorites</div>
          <ol class="tr-steps">
            <li>Click the <strong>star icon</strong> on any entry card to mark it as a favorite.</li>
            <li>The sidebar has a dedicated <strong>Favorites panel</strong> — a compact scrollable list of all starred entries for quick access.</li>
          </ol>
        </div>
      </details>

      <details class="tr-tour">
        <summary>
          <div class="tr-tour-ic">⏱️</div>
          <div class="tr-tour-head">
            <div class="tr-tour-title">Sidebar time tabs <span class="tr-tour-tier plus">PLUS</span></div>
            <div class="tr-tour-subtitle">Recent, Due, Expiring, and Tools tabs for quick access.</div>
          </div>
          <div class="tr-tour-arrow">→</div>
        </summary>
        <div class="tr-body">
          <p>The sidebar features tabbed panels that sort your entries by temporal relevance — what's recent, what's due, and what's expiring.</p>
          <div class="tr-step-label">The 4 tabs</div>
          <ol class="tr-steps">
            <li><strong>Recent:</strong> Recently modified entries sorted by last update time. Your "what was I working on" view.</li>
            <li><strong>Due:</strong> Entries with upcoming due dates, sorted by deadline. Shows how much time remains.</li>
            <li><strong>Expiring:</strong> Entries approaching their expiry date with urgency indicators.</li>
            <li><strong>Tools:</strong> Quick-access list of built-in tools. On Plus, this shows an upgrade prompt since tools are Pro-only. On Pro, it lists all 14+ tools for one-click launch.</li>
          </ol>
        </div>
      </details>

    </div>
  </div>
</section>

<!-- ════════════════════════════════════════════════════════════════
     SECURITY
     ════════════════════════════════════════════════════════════════ -->
<section class="tr-section" id="security">
  <div class="container">
    <div class="tr-section-head" data-reveal>
      <div class="tr-eyebrow">🔒 Security &amp; Encryption</div>
      <h2 class="tr-section-title">Per-entry encryption &amp; lock screen</h2>
      <p class="tr-section-sub">How VaultBook protects your most sensitive notes.</p>
    </div>

    <div class="tr-tours" data-reveal>

      <details class="tr-tour">
        <summary>
          <div class="tr-tour-ic">🔐</div>
          <div class="tr-tour-head">
            <div class="tr-tour-title">Per-entry encryption <span class="tr-tour-tier plus">PLUS</span></div>
            <div class="tr-tour-subtitle">AES-256-GCM with PBKDF2 key derivation — individual passwords per note.</div>
          </div>
          <div class="tr-tour-arrow">→</div>
        </summary>
        <div class="tr-body">
          <p>VaultBook encrypts entries individually — not with a master password, but with a unique password per entry. This means compromising one entry's password doesn't expose any others.</p>
          <div class="tr-step-label">How to encrypt an entry</div>
          <ol class="tr-steps">
            <li>Open an entry in the edit modal and toggle the <strong>Protected / Encrypted</strong> switch.</li>
            <li>Enter a <strong>password</strong> for this specific entry. VaultBook derives an encryption key using PBKDF2 with SHA-256, 100,000 iterations, and a random 16-byte salt.</li>
            <li>The entry body is encrypted with <strong>AES-256-GCM</strong> using a random 12-byte IV — a new salt and IV are generated on every save.</li>
            <li>Click Save. The encrypted entry shows as locked in the entry list — title and labels remain visible, but the body is encrypted ciphertext.</li>
            <li>To open it, click the entry and type the password. VaultBook decrypts in memory (the <code>_plain</code> field) — decrypted text is <strong>never written to disk</strong>.</li>
          </ol>
          <div class="tr-note"><strong>Session caching:</strong> After you unlock an entry, VaultBook caches the password for the current session so you don't have to re-enter it every time. Closing the tab or triggering the lock screen clears the cache.</div>
          <div class="tr-tech-pills"><span class="tr-tech">AES-256-GCM</span><span class="tr-tech">PBKDF2</span><span class="tr-tech">100k Iterations</span><span class="tr-tech">Random Salt + IV</span><span class="tr-tech">Web Crypto API</span></div>
        </div>
      </details>

      <details class="tr-tour">
        <summary>
          <div class="tr-tour-ic">🔏</div>
          <div class="tr-tour-head">
            <div class="tr-tour-title">Lock screen <span class="tr-tour-tier plus">PLUS</span></div>
            <div class="tr-tour-subtitle">Full-page blur overlay that blocks all interaction.</div>
          </div>
          <div class="tr-tour-arrow">→</div>
        </summary>
        <div class="tr-body">
          <p>When you step away, VaultBook's lock screen activates — a full-page CSS blur overlay that blocks pointer events and text selection. Your workspace becomes unreadable and untouchable.</p>
          <div class="tr-step-label">How it works</div>
          <ol class="tr-steps">
            <li>The lock screen can be triggered manually or after inactivity.</li>
            <li>When active, the <code>html.vb-blur</code> class is applied — applying a heavy blur filter over the entire page and blocking all pointer events.</li>
            <li>User selection is disabled — you can't select and copy text through the blur.</li>
            <li>To unlock, authenticate through the lock screen prompt. Session password caches for encrypted entries are preserved.</li>
          </ol>
        </div>
      </details>

    </div>
  </div>
</section>

<!-- ════════════════════════════════════════════════════════════════
     FILES & INDEXING
     ════════════════════════════════════════════════════════════════ -->
<section class="tr-section" id="files">
  <div class="container">
    <div class="tr-section-head" data-reveal>
      <div class="tr-eyebrow">📎 Files &amp; Deep Indexing</div>
      <h2 class="tr-section-title">Attachments, indexing &amp; document parsing</h2>
      <p class="tr-section-sub">How VaultBook handles files and makes them searchable.</p>
    </div>

    <div class="tr-tours" data-reveal>

      <details class="tr-tour">
        <summary>
          <div class="tr-tour-ic">📎</div>
          <div class="tr-tour-head">
            <div class="tr-tour-title">Attachments &amp; file management <span class="tr-tour-tier plus">PLUS</span></div>
            <div class="tr-tour-subtitle">Per-entry and per-section file attachments with indexing.</div>
          </div>
          <div class="tr-tour-arrow">→</div>
        </summary>
        <div class="tr-body">
          <p>Every entry and every section within an entry can have file attachments. Files are stored in the <code>/attachments</code> directory in your local folder and tracked via an <code>index.txt</code> JSON manifest.</p>
          <div class="tr-step-label">How to attach files</div>
          <ol class="tr-steps">
            <li>In the edit modal, click the <strong>attachment button</strong> (📎) to add files to the main entry.</li>
            <li>Inside a section, each section has its own attachment button for section-specific files.</li>
            <li>Files are stored in <code>/attachments/</code> with unique keys. The manifest (<code>index.txt</code>) maps each file to its entry and metadata.</li>
            <li>Right-click any attachment for a context menu — open, rename, or remove.</li>
            <li>If the attachment index gets out of sync, click the <strong>♻️ Reindex button</strong> to rebuild it from the directory.</li>
            <li>Text-based attachments are automatically extracted for search indexing. Image attachments get OCR treatment.</li>
          </ol>
        </div>
      </details>

      <details class="tr-tour">
        <summary>
          <div class="tr-tour-ic">🔬</div>
          <div class="tr-tour-head">
            <div class="tr-tour-title">Deep file indexing <span class="tr-tour-tier pro">PRO</span></div>
            <div class="tr-tour-subtitle">XLSX, PPTX, PDF, ZIP, and MSG text extraction for full searchability.</div>
          </div>
          <div class="tr-tour-arrow">→</div>
        </summary>
        <div class="tr-body">
          <p>Pro's deep indexing pipeline reaches inside complex file formats to extract their text content, making every document fully searchable — even if it's a spreadsheet inside a ZIP archive.</p>
          <div class="tr-step-label">Supported formats</div>
          <ol class="tr-steps">
            <li><strong>XLSX / XLSM (via SheetJS):</strong> Cell data from every sheet is extracted and indexed. Formulas resolve to their display values.</li>
            <li><strong>PPTX (via JSZip):</strong> VaultBook opens the PPTX archive, reads the XML slide files, and extracts all slide text including speaker notes.</li>
            <li><strong>PDF (via pdf.js):</strong> Text layer extraction for native PDFs. For scanned PDFs, pages are rendered and OCR'd.</li>
            <li><strong>ZIP archives:</strong> VaultBook opens the ZIP, indexes text-like inner files, and runs OCR on embedded images — all without extracting to disk.</li>
            <li><strong>MSG (Outlook emails):</strong> Subject line, sender, body text, and nested attachments are extracted and deep-indexed.</li>
          </ol>
          <div class="tr-step-label">Cross-format OCR</div>
          <ol class="tr-steps">
            <li>Images embedded inside DOCX files (<code>word/media/*</code>) are OCR'd.</li>
            <li>Images inside XLSX files (<code>xl/media/*</code>) are OCR'd.</li>
            <li>Images inside ZIP archives are OCR'd.</li>
            <li>Scanned PDF pages are rendered as images and OCR'd.</li>
          </ol>
          <div class="tr-note"><strong>Background processing:</strong> Deep indexing runs in the background. For search, VaultBook warms up attachment text for the top candidates — so results feel instant even with thousands of indexed documents.</div>
          <div class="tr-tech-pills"><span class="tr-tech">SheetJS</span><span class="tr-tech">JSZip</span><span class="tr-tech">pdf.js</span><span class="tr-tech">Tesseract.js</span><span class="tr-tech">Web Workers</span></div>
        </div>
      </details>

    </div>
  </div>
</section>

<!-- ════════════════════════════════════════════════════════════════
     BUILT-IN TOOLS
     ════════════════════════════════════════════════════════════════ -->
<section class="tr-section" id="tools">
  <div class="container">
    <div class="tr-section-head" data-reveal>
      <div class="tr-eyebrow">🛠️ Built-in Tools</div>
      <h2 class="tr-section-title">14+ tools, zero context-switching</h2>
      <p class="tr-section-sub">Every tool that lives inside VaultBook and how to use it.</p>
    </div>

    <div class="tr-tours" data-reveal>

      <details class="tr-tour">
        <summary>
          <div class="tr-tour-ic">📋</div>
          <div class="tr-tour-head">
            <div class="tr-tour-title">Kanban Board <span class="tr-tour-tier pro">PRO</span></div>
            <div class="tr-tour-subtitle">Labels and hashtags become drag-and-drop columns automatically.</div>
          </div>
          <div class="tr-tour-arrow">→</div>
        </summary>
        <div class="tr-body">
          <p>The Kanban Board reads your labels and inline #hashtags and auto-creates columns from them. Each entry becomes a card, and you can drag cards between columns.</p>
          <div class="tr-step-label">How to use it</div>
          <ol class="tr-steps">
            <li>Open <strong>Tools → Kanban Board</strong> from the sidebar Tools tab.</li>
            <li>VaultBook scans your entries and creates a column for each label and inline #hashtag it finds.</li>
            <li>Entries appear as cards in their respective columns. Entries with multiple labels appear in multiple columns.</li>
            <li>Drag a card to a different column to reassign its label — the change syncs back to the entry's data.</li>
            <li>The board updates in real time as you create or edit entries.</li>
          </ol>
        </div>
      </details>

      <details class="tr-tour">
        <summary>
          <div class="tr-tour-ic">📰</div>
          <div class="tr-tour-head">
            <div class="tr-tour-title">RSS / Atom Reader <span class="tr-tour-tier pro">PRO</span></div>
            <div class="tr-tour-subtitle">Subscribe to feeds, organize into folders, pull articles into your workspace.</div>
          </div>
          <div class="tr-tour-arrow">→</div>
        </summary>
        <div class="tr-body">
          <div class="tr-step-label">How to use it</div>
          <ol class="tr-steps">
            <li>Open <strong>Tools → Reader</strong> from the sidebar.</li>
            <li>Paste an RSS or Atom feed URL and subscribe.</li>
            <li>Organize feeds into folders for different topics or sources.</li>
            <li>Browse articles in a clean reading view. Click any article to read the full content.</li>
            <li>Save articles directly as VaultBook entries to keep them in your library permanently.</li>
          </ol>
        </div>
      </details>

      <details class="tr-tour">
        <summary>
          <div class="tr-tour-ic">📑</div>
          <div class="tr-tour-head">
            <div class="tr-tour-title">PDF Merge, Split &amp; Compress <span class="tr-tour-tier pro">PRO</span></div>
            <div class="tr-tour-subtitle">Combine, extract pages from, or compress PDF files locally.</div>
          </div>
          <div class="tr-tour-arrow">→</div>
        </summary>
        <div class="tr-body">
          <div class="tr-step-label">How to use it</div>
          <ol class="tr-steps">
            <li>Open <strong>Tools → PDF Merge &amp; Split</strong> or <strong>PDF Compress</strong> from the sidebar.</li>
            <li><strong>Merge:</strong> Drop multiple PDF files and VaultBook combines them into a single PDF.</li>
            <li><strong>Split:</strong> Choose a PDF, specify page ranges (e.g., 1-5, 8, 12-end), and extract them as a new file.</li>
            <li><strong>Compress:</strong> Drop a scanned PDF and reduce its file size — processed entirely in the browser.</li>
            <li>Download the resulting PDF directly. No upload, no server, no waiting.</li>
          </ol>
        </div>
      </details>

      <details class="tr-tour">
        <summary>
          <div class="tr-tour-ic">🎵</div>
          <div class="tr-tour-head">
            <div class="tr-tour-title">MP3 Cutter &amp; Joiner <span class="tr-tour-tier pro">PRO</span></div>
            <div class="tr-tour-subtitle">Trim, cut, and join audio clips — voice memos, interviews, podcasts.</div>
          </div>
          <div class="tr-tour-arrow">→</div>
        </summary>
        <div class="tr-body">
          <div class="tr-step-label">How to use it</div>
          <ol class="tr-steps">
            <li>Open <strong>Tools → MP3 Cutter &amp; Joiner</strong>.</li>
            <li>Drop an audio file. A waveform-style interface lets you set start and end points visually.</li>
            <li><strong>Cut:</strong> Select a region and extract it as a new clip.</li>
            <li><strong>Trim silence:</strong> Automatically detect and remove silence from the beginning and end.</li>
            <li><strong>Join:</strong> Drop multiple audio files and combine them into a single track in your chosen order.</li>
            <li>Download the processed audio. Everything runs via the Web Audio API — no server processing.</li>
          </ol>
        </div>
      </details>

      <details class="tr-tour">
        <summary>
          <div class="tr-tour-ic">📈</div>
          <div class="tr-tour-head">
            <div class="tr-tour-title">File Analyzer &amp; Folder Analyzer <span class="tr-tour-tier pro">PRO</span></div>
            <div class="tr-tour-subtitle">Visualize CSV/TXT data files and audit disk space usage.</div>
          </div>
          <div class="tr-tour-arrow">→</div>
        </summary>
        <div class="tr-body">
          <div class="tr-step-label">File Analyzer</div>
          <ol class="tr-steps">
            <li>Open <strong>Tools → File Analyzer</strong> and drop a CSV or TXT file.</li>
            <li>VaultBook parses the data and shows instant visualizations — column types, value distributions, and summary statistics.</li>
          </ol>
          <div class="tr-step-label">Folder Analyzer</div>
          <ol class="tr-steps">
            <li>Open <strong>Tools → Folder Analyzer</strong> and select a folder.</li>
            <li>VaultBook scans all files and displays disk space usage by file type, size distribution, and largest files.</li>
          </ol>
        </div>
      </details>

      <details class="tr-tour">
        <summary>
          <div class="tr-tour-ic">🔧</div>
          <div class="tr-tour-head">
            <div class="tr-tour-title">More tools <span class="tr-tour-tier pro">PRO</span></div>
            <div class="tr-tour-subtitle">Threads, Save URL, Password Generator, File Explorer, Photo Explorer, and Obsidian Import.</div>
          </div>
          <div class="tr-tour-arrow">→</div>
        </summary>
        <div class="tr-body">
          <div class="tr-step-label">All remaining tools</div>
          <ol class="tr-steps">
            <li><strong>Threads:</strong> A chat-style note interface in a centered overlay. Type conversational notes in a thread format — perfect for brainstorming or quick captures.</li>
            <li><strong>Save URL → Entry:</strong> Paste any URL and VaultBook creates a structured note from the page content — instant web clipping directly into your library.</li>
            <li><strong>Password Generator:</strong> Generate cryptographically strong passwords with configurable length, character sets, and copy-to-clipboard.</li>
            <li><strong>File Explorer:</strong> Browse all attachments across your library by type, entry, or page — a visual file manager for your workspace.</li>
            <li><strong>Photo &amp; Video Explorer:</strong> Scan folders of photos and videos in a visual grid. Browse, preview, and manage media files.</li>
            <li><strong>Import from Obsidian:</strong> Drop your Obsidian .md files and VaultBook migrates them into entries instantly, preserving content and structure.</li>
          </ol>
        </div>
      </details>

    </div>
  </div>
</section>

<!-- ════════════════════════════════════════════════════════════════
     PRO FEATURES
     ════════════════════════════════════════════════════════════════ -->
<section class="tr-section" id="pro">
  <div class="container">
    <div class="tr-section-head" data-reveal>
      <div class="tr-eyebrow">⭐ Pro Exclusive</div>
      <h2 class="tr-section-title">Vote-based learning, analytics &amp; more</h2>
      <p class="tr-section-sub">Advanced intelligence and workflow features in the Pro tier.</p>
    </div>

    <div class="tr-tours" data-reveal>

      <details class="tr-tour">
        <summary>
          <div class="tr-tour-ic">📊</div>
          <div class="tr-tour-head">
            <div class="tr-tour-title">Vote-based reranking &amp; Related Entries <span class="tr-tour-tier pro">PRO</span></div>
            <div class="tr-tour-subtitle">Train VaultBook's search and recommendations with upvotes and downvotes.</div>
          </div>
          <div class="tr-tour-arrow">→</div>
        </summary>
        <div class="tr-body">
          <p>Pro unlocks VaultBook's persistent learning system — every vote you cast reshapes how search and recommendations work for you personally.</p>
          <div class="tr-step-label">QA Search voting</div>
          <ol class="tr-steps">
            <li>Run a QA search. Each result card shows <strong>upvote (👍)</strong> and <strong>downvote (👎)</strong> buttons.</li>
            <li>Upvote a result — it gets +1M added to its score, pushing it toward the top for similar future queries.</li>
            <li>Downvote a result — it gets −1M, sinking it down the rankings. An undo toast appears briefly if you change your mind.</li>
            <li>Votes are stored persistently in <code>state.userVotes.search</code> keyed by query and target entry ID — they survive across sessions.</li>
            <li>A confirmation dialog with educational tips appears on your first vote (can be disabled).</li>
            <li><strong>Add-to-note:</strong> Each result also has an "add to note" button that prefills a new entry body with the query text for quick capture.</li>
          </ol>
          <div class="tr-step-label">Related Entries voting</div>
          <ol class="tr-steps">
            <li>Open any entry. The <strong>Related Entries</strong> panel shows contextual similarity suggestions — notes VaultBook thinks are connected.</li>
            <li>Related entries appear with a fade-in animation and are paginated with prev/next buttons.</li>
            <li>Each suggestion pair has Reddit-style <strong>upvote/downvote</strong> buttons. Upvoting trains VaultBook to surface that connection more often; downvoting reduces its weight.</li>
            <li>Votes are stored in <code>state.userVotes.related</code> keyed by base entry ID and target ID — building a persistent relevance map unique to your knowledge base.</li>
          </ol>
          <div class="tr-tech-pills"><span class="tr-tech">userVotes Schema</span><span class="tr-tech">+1M / −1M Scoring</span><span class="tr-tech">Persistent Learning</span><span class="tr-tech">Undo Toast</span></div>
        </div>
      </details>

      <details class="tr-tour">
        <summary>
          <div class="tr-tour-ic">📈</div>
          <div class="tr-tour-head">
            <div class="tr-tour-title">Advanced analytics <span class="tr-tour-tier pro">PRO</span></div>
            <div class="tr-tour-subtitle">Canvas-rendered charts, file type breakdowns, and activity graphs.</div>
          </div>
          <div class="tr-tour-arrow">→</div>
        </summary>
        <div class="tr-body">
          <p>Pro upgrades the basic analytics panel with interactive, canvas-rendered charts that visualize your library's composition and activity.</p>
          <div class="tr-step-label">Available charts</div>
          <ol class="tr-steps">
            <li><strong>Label utilization pie chart:</strong> Shows distribution of entries across your labels — reveals which categories dominate your library.</li>
            <li><strong>Last 14 Days Activity line chart:</strong> Daily entry creation/modification over two weeks — your productivity heartbeat.</li>
            <li><strong>Pages utilization pie chart:</strong> Distribution of entries across pages — helps identify overstuffed or underused notebooks.</li>
            <li><strong>Month activity chart:</strong> Broader monthly trends for long-term patterns.</li>
            <li><strong>Attachment type chips:</strong> File type breakdown showing how many PDFs, images, spreadsheets, etc. are attached across your library.</li>
          </ol>
          <div class="tr-note"><strong>Plus analytics:</strong> Entry count, entries with files, total file count, and total storage size are available on Plus. Pro adds the visual charts and type breakdowns on top.</div>
        </div>
      </details>

      <details class="tr-tour">
        <summary>
          <div class="tr-tour-ic">📆</div>
          <div class="tr-tour-head">
            <div class="tr-tour-title">Timetable / Calendar <span class="tr-tour-tier pro">PRO</span></div>
            <div class="tr-tour-subtitle">Day and week views with 24-hour scrollable timeline.</div>
          </div>
          <div class="tr-tour-arrow">→</div>
        </summary>
        <div class="tr-body">
          <p>Pro adds a full calendar/timetable system that surfaces your scheduled entries in visual day and week layouts.</p>
          <div class="tr-step-label">How to use it</div>
          <ol class="tr-steps">
            <li>Click the <strong>Timetable button</strong> in the sidebar or toolbar to open the calendar modal.</li>
            <li>Switch between <strong>Day view</strong> (single day, 24-hour scrollable timeline) and <strong>Week view</strong> (7-day grid).</li>
            <li>Entries with due dates or scheduled times appear as blocks on the timeline.</li>
            <li>Click a block to open the entry. Create new scheduled entries directly from the calendar by clicking a time slot.</li>
            <li>The timetable persists to disk via <code>ttRehydrateFromDisk</code> — so your calendar state survives between sessions.</li>
            <li>The sidebar <strong>Timetable Ticker</strong> widget shows your next few upcoming events at a glance.</li>
          </ol>
        </div>
      </details>

      <details class="tr-tour">
        <summary>
          <div class="tr-tour-ic">⏳</div>
          <div class="tr-tour-head">
            <div class="tr-tour-title">Version history <span class="tr-tour-tier pro">PRO</span></div>
            <div class="tr-tour-subtitle">60-day per-entry snapshots with a history browser.</div>
          </div>
          <div class="tr-tour-arrow">→</div>
        </summary>
        <div class="tr-body">
          <p>Pro saves snapshots of your entries over time, stored in the <code>/versions</code> directory with a 60-day retention window.</p>
          <div class="tr-step-label">How to use it</div>
          <ol class="tr-steps">
            <li>Look for the <strong>⏳ button</strong> on any entry card — this opens the version history modal.</li>
            <li>The modal shows a list of saved versions sorted from newest to oldest.</li>
            <li>Click any version to preview what the entry looked like at that point in time.</li>
            <li>Restore a previous version if the current one has issues. The current version becomes a new snapshot so nothing is ever truly lost.</li>
            <li>Versions older than 60 days are automatically cleaned up to manage storage.</li>
          </ol>
          <div class="tr-tech-pills"><span class="tr-tech">/versions Directory</span><span class="tr-tech">60-Day TTL</span><span class="tr-tech">Per-Entry Snapshots</span></div>
        </div>
      </details>

      <details class="tr-tour">
        <summary>
          <div class="tr-tour-ic">🗂️</div>
          <div class="tr-tour-head">
            <div class="tr-tour-title">Multi-tab views &amp; advanced filters <span class="tr-tour-tier pro">PRO</span></div>
            <div class="tr-tour-subtitle">Work with multiple independent entry lists, advanced sorting, and compound filters.</div>
          </div>
          <div class="tr-tour-arrow">→</div>
        </summary>
        <div class="tr-body">
          <div class="tr-step-label">Multi-tab views</div>
          <ol class="tr-steps">
            <li>In the main entry list area, click the <strong>+ button</strong> in the tab strip to open a new tab.</li>
            <li>Each tab maintains independent view state — different page filters, different label selections, different sort orders.</li>
            <li>Switch between tabs to compare different views of your library side by side.</li>
          </ol>
          <div class="tr-step-label">Advanced filters</div>
          <ol class="tr-steps">
            <li><strong>File type filter:</strong> Filter entries by attachment type (images, PDFs, spreadsheets, etc.) with match-any or match-all logic.</li>
            <li><strong>Date filters:</strong> Filter by date field (created, updated, due, expiry) and range (any time, last 7 days, last 30 days).</li>
            <li><strong>Sort controls:</strong> Multiple sort fields via dropdown with ascending/descending toggle and checkbox options for additional filtering.</li>
          </ol>
          <div class="tr-note"><strong>Random Note Spotlight:</strong> The sidebar also features a 🎲 widget that surfaces a random entry from your library — refreshed hourly with a "New pick" indicator. Great for rediscovering forgotten notes.</div>
        </div>
      </details>

    </div>
  </div>
</section>

<!-- ════════════════════════════════════════════════════════════════
     BOTTOM CTA
     ════════════════════════════════════════════════════════════════ -->
<section class="tr-section" style="padding-bottom: 0;">
  <div class="container">
    <div class="tr-cta" data-reveal>
      <h2 class="tr-cta-title">Ready to try it yourself?</h2>
      <p class="tr-cta-sub">Download VaultBook and explore every feature first-hand. No account needed — just open the file.</p>
      <div class="tr-cta-actions">
        <a class="btn btn-primary" href="/download/">Download VaultBook</a>
        <a class="btn btn-ghost" href="/pricing/">See pricing</a>
        <a class="btn btn-ghost" href="https://t.me/VaultBook" target="_blank" rel="noopener">Buy on Telegram</a>
      </div>
    </div>
  </div>
</section>
