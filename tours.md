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
.tr-tours{ max-width: 820px; margin: 0 auto; }
.tr-tour{
  border: 1px solid rgba(206,147,216,.1);
  border-radius: 18px;
  margin-bottom: 12px;
  background: rgba(255,255,255,.65);
  overflow: hidden;
  transition: border-color .25s ease, box-shadow .25s ease;
}
.tr-tour:hover{ border-color: rgba(206,147,216,.2); }
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
  display: inline-block; margin-left: 8px; font-size: 10px; font-weight: 750;
  padding: 2px 8px; border-radius: 999px; letter-spacing: .06em; vertical-align: middle;
}
.tr-tour-tier.plus{ background: rgba(129,212,250,.15); color: #0277bd; -webkit-text-fill-color: #0277bd; }
.tr-tour-tier.pro{ background: rgba(206,147,216,.15); color: #7b1fa2; -webkit-text-fill-color: #7b1fa2; }
.tr-tour-subtitle{ margin-top: 3px; font-size: 13px; color: rgba(11,11,11,.45); line-height: 1.4; }
.tr-tour-arrow{
  width: 28px; height: 28px; min-width: 28px; border-radius: 8px;
  background: linear-gradient(135deg, rgba(243,229,245,.3), rgba(225,245,254,.2));
  display: grid; place-items: center; font-size: 13px;
  color: #7b1fa2; -webkit-text-fill-color: #7b1fa2;
  transition: transform .25s ease;
}
.tr-tour[open] .tr-tour-arrow{ transform: rotate(90deg); }
.tr-body{ padding: 0 24px 24px 24px; border-top: 1px solid rgba(206,147,216,.08); }
.tr-body p{ font-size: 14.5px; color: rgba(11,11,11,.6); line-height: 1.65; margin: 16px 0 0; }
.tr-body p:first-child{ margin-top: 16px; }
.tr-step-label{
  display: inline-block; margin-top: 20px; margin-bottom: 6px;
  font-size: 11px; font-weight: 750; text-transform: uppercase;
  letter-spacing: .12em; color: rgba(11,11,11,.35);
}
.tr-steps{ list-style: none; padding: 0; margin: 0; counter-reset: step; }
.tr-steps li{
  display: flex; align-items: flex-start; gap: 12px; padding: 8px 0;
  font-size: 14px; color: rgba(11,11,11,.6); line-height: 1.55;
}
.tr-steps li::before{
  counter-increment: step; content: counter(step);
  min-width: 26px; height: 26px; border-radius: 9px;
  display: grid; place-items: center; font-size: 12px; font-weight: 800;
  color: #7b1fa2; -webkit-text-fill-color: #7b1fa2;
  background: linear-gradient(135deg, rgba(206,147,216,.12), rgba(129,212,250,.08));
  flex-shrink: 0;
}
.tr-note{
  margin-top: 14px; padding: 14px 16px; border-radius: 12px;
  background: linear-gradient(135deg, rgba(243,229,245,.12), rgba(225,245,254,.08));
  border-left: 3px solid rgba(206,147,216,.25);
  font-size: 13.5px; color: rgba(11,11,11,.55); line-height: 1.5;
}
.tr-note strong{ color: rgba(11,11,11,.7); }
.tr-cta{
  margin: 24px 0 64px; border: 1px solid rgba(206,147,216,.14); border-radius: 26px;
  background: linear-gradient(135deg, rgba(255,255,255,.94), rgba(243,229,245,.18) 40%, rgba(225,245,254,.12) 100%);
  padding: 40px 36px; box-shadow: 0 14px 44px rgba(206,147,216,.1), 0 2px 6px rgba(0,0,0,.03);
  text-align: center; position: relative; overflow: hidden;
}
.tr-cta::before{
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
  background: linear-gradient(90deg, #f48fb1, #ce93d8, #81d4fa, #80cbc4, #ffcc80); opacity: .55;
}
.tr-cta-title{ font-size: clamp(22px, 3vw, 30px); font-weight: 900; letter-spacing: -0.02em; margin: 0; }
.tr-cta-sub{ font-size: 16px; color: rgba(11,11,11,.55); margin: 10px 0 0; line-height: 1.55; }
.tr-cta-actions{ display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; margin-top: 28px; }
@media (max-width: 900px){ .tr-nav{ grid-template-columns: 1fr 1fr; } }
@media (max-width: 600px){
  .tr-nav{ grid-template-columns: 1fr; }
  .tr-tour summary{ padding: 16px 18px; }
  .tr-body{ padding: 0 18px 20px 18px; }
  .tr-tour-arrow{ display: none; }
}
</style>

<section class="tr-hero">
  <div class="container" data-reveal>
    <div class="tr-eyebrow">🗺️ Product Tours</div>
    <h1 class="tr-hero-title">Every feature,<br>step by step.</h1>
    <p class="tr-hero-sub">Guided walkthroughs of the entire VaultBook workspace — from creating your first note to training the AI with your votes. Click any tour below to expand the full guide.</p>
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

<section class="tr-section" id="getting-started"><div class="container">
  <div class="tr-section-head" data-reveal><div class="tr-eyebrow">🚀 Getting Started</div><h2 class="tr-section-title">Your first 5 minutes</h2><p class="tr-section-sub">How to download, connect a folder, and create your first note.</p></div>
  <div class="tr-tours" data-reveal>

    <details class="tr-tour"><summary><div class="tr-tour-ic">📥</div><div class="tr-tour-head"><div class="tr-tour-title">Download &amp; open VaultBook</div><div class="tr-tour-subtitle">Get up and running in under 60 seconds.</div></div><div class="tr-tour-arrow">→</div></summary><div class="tr-body">
      <p>VaultBook ships as a single file inside a ZIP. There's nothing to install — no app store, no sign-up. Just open a file in your browser.</p>
      <div class="tr-step-label">Walkthrough</div>
      <ol class="tr-steps">
        <li>Go to the <a href="/download/">Download page</a> and grab the Plus or Pro ZIP.</li>
        <li>Extract the ZIP. Inside you'll find <strong>VaultBook.html</strong> and a <strong>license file</strong>.</li>
        <li>Create a new folder anywhere on your computer — this is your VaultBook storage folder. Move the <strong>license file</strong> into it.</li>
        <li>Double-click <strong>VaultBook.html</strong> to open it in Chrome, Edge, Arc, or Brave. The workspace loads instantly.</li>
      </ol>
      <div class="tr-note"><strong>First-time users:</strong> VaultBook shows a quick storage tutorial guiding you through connecting your folder. Follow the prompts — it takes just a few seconds.</div>
    </div></details>

    <details class="tr-tour"><summary><div class="tr-tour-ic">📁</div><div class="tr-tour-head"><div class="tr-tour-title">Connect your storage folder</div><div class="tr-tour-subtitle">Link VaultBook to a folder on your computer for fully offline storage.</div></div><div class="tr-tour-arrow">→</div></summary><div class="tr-body">
      <p>VaultBook stores everything in a regular folder on your computer. No cloud, no account — just files in a directory you control.</p>
      <div class="tr-step-label">Walkthrough</div>
      <ol class="tr-steps">
        <li>When VaultBook opens for the first time, click <strong>"Connect Folder"</strong> in the welcome prompt.</li>
        <li>Your browser shows a folder picker. Select the folder where you placed the <strong>license file</strong>.</li>
        <li>Grant the permission prompt — this lets VaultBook read and write files in that one folder only.</li>
        <li>VaultBook sets up the folder automatically. You're ready to go.</li>
      </ol>
      <div class="tr-note"><strong>Your folder, your data:</strong> Everything lives in this folder — your notes, attachments, version history, and settings. Back up the folder, and you've backed up everything. Move it to another computer, and it works immediately.</div>
    </div></details>

    <details class="tr-tour"><summary><div class="tr-tour-ic">🗒️</div><div class="tr-tour-head"><div class="tr-tour-title">Create your first note</div><div class="tr-tour-subtitle">Use the floating action button or sidebar to create a new entry.</div></div><div class="tr-tour-arrow">→</div></summary><div class="tr-body">
      <p>Notes in VaultBook are called "entries." Each entry has a title, rich text body, labels, attachments, sections, and scheduling options.</p>
      <div class="tr-step-label">Walkthrough</div>
      <ol class="tr-steps">
        <li>Click the <strong>floating action button</strong> — the round button in the bottom-right — or the <strong>+</strong> in the sidebar.</li>
        <li>The editor opens. Type a <strong>title</strong> at the top.</li>
        <li>Write in the <strong>rich text body</strong> — use the toolbar for bold, italic, headings, lists, tables, code blocks, and more.</li>
        <li>Add <strong>labels</strong> (color-coded tags) and choose a <strong>page</strong> (notebook) to file it into.</li>
        <li>Click <strong>Save</strong>. Your entry appears in the main list and is immediately searchable.</li>
      </ol>
      <div class="tr-note"><strong>Autosave:</strong> VaultBook saves automatically in the background as you work. A status badge in the toolbar shows save state.</div>
    </div></details>

    <details class="tr-tour"><summary><div class="tr-tour-ic">🖥️</div><div class="tr-tour-head"><div class="tr-tour-title">The workspace layout</div><div class="tr-tour-subtitle">Where everything lives — sidebar, main area, and toolbar.</div></div><div class="tr-tour-arrow">→</div></summary><div class="tr-body">
      <p>VaultBook uses a clean sidebar + main content layout with a frosted glass aesthetic.</p>
      <div class="tr-step-label">What's where</div>
      <ol class="tr-steps">
        <li><strong>Sidebar (left):</strong> Pages tree, favorites, labels, time tabs (Recent / Due / Expiring / Tools), AI Suggestions carousel, analytics, and widgets.</li>
        <li><strong>Main area (right):</strong> Entry cards in a scrollable, paginated list. Each card shows title, labels, timestamps, attachment count, and action buttons.</li>
        <li><strong>Toolbar (top):</strong> Search bar with instant suggestions, sort controls, filter toggles, and the sidebar toggle.</li>
        <li><strong>Floating action button (bottom-right):</strong> Create a new entry from anywhere with one click.</li>
      </ol>
      <div class="tr-note"><strong>Responsive:</strong> On smaller screens, VaultBook stacks to a single-column layout so everything stays usable on tablets and narrow windows.</div>
    </div></details>

  </div>
</div></section>

<section class="tr-section" id="ai-search"><div class="container">
  <div class="tr-section-head" data-reveal><div class="tr-eyebrow">🧠 AI &amp; Search</div><h2 class="tr-section-title">Intelligence that learns from you</h2><p class="tr-section-sub">How VaultBook's smart features work and how you interact with them.</p></div>
  <div class="tr-tours" data-reveal>

    <details class="tr-tour"><summary><div class="tr-tour-ic">✨</div><div class="tr-tour-head"><div class="tr-tour-title">AI Suggestions carousel <span class="tr-tour-tier plus">PLUS</span></div><div class="tr-tour-subtitle">A 4-page carousel that predicts what you'll need next.</div></div><div class="tr-tour-arrow">→</div></summary><div class="tr-body">
      <p>The AI Suggestions carousel lives in the sidebar — four swipeable pages of personalized recommendations based on your habits. No cloud, no external AI — it learns entirely from your local activity.</p>
      <div class="tr-step-label">The 4 pages</div>
      <ol class="tr-steps">
        <li><strong>Suggestions:</strong> Entries you're likely to need — upcoming scheduled notes, plus entries you tend to read on this day of the week based on recent patterns.</li>
        <li><strong>Recently Read:</strong> Entries you've recently opened, listed with timestamps. Pick up where you left off.</li>
        <li><strong>Recent Files:</strong> Attachments and files you've recently viewed or interacted with.</li>
        <li><strong>Recent Tools:</strong> Built-in tools you've used most recently, for one-click access to your last workflow.</li>
      </ol>
      <div class="tr-step-label">How to use it</div>
      <ol class="tr-steps">
        <li>Find the carousel near the top of the sidebar. Swipe or click the page dots to browse.</li>
        <li>Click any suggested entry, file, or tool to open it directly.</li>
        <li>The more you use VaultBook, the more accurate the suggestions become.</li>
      </ol>
    </div></details>

    <details class="tr-tour"><summary><div class="tr-tour-ic">🔎</div><div class="tr-tour-head"><div class="tr-tour-title">Ask a Question (QA Search) <span class="tr-tour-tier plus">PLUS</span></div><div class="tr-tour-subtitle">Ask your library a question in plain English and get ranked answers.</div></div><div class="tr-tour-arrow">→</div></summary><div class="tr-body">
      <p>QA Search lets you ask your library a question in plain English. VaultBook looks through your titles, labels, note content, sections, attachments, and even text from images — then shows the most relevant results first.</p>
      <div class="tr-step-label">How to use it</div>
      <ol class="tr-steps">
        <li>Click the <strong>QA search icon</strong> in the sidebar (separate from the toolbar search bar).</li>
        <li>Type your question naturally — "What were the Q3 results?" or "meeting notes from December."</li>
        <li>Results appear in a paginated list (6 per page). Use prev/next to browse.</li>
        <li>Results respect any page or label filters you've set, so you can narrow your search to specific notebooks.</li>
        <li>Click any result to open that entry.</li>
      </ol>
      <div class="tr-note"><strong>Fast results:</strong> VaultBook pre-loads content for top results in the background — so opening a result feels instant, even for entries with lots of attachments.</div>
    </div></details>

    <details class="tr-tour"><summary><div class="tr-tour-ic">🔤</div><div class="tr-tour-head"><div class="tr-tour-title">Typeahead search &amp; query history <span class="tr-tour-tier plus">PLUS</span></div><div class="tr-tour-subtitle">Instant suggestions as you type, plus past query recall.</div></div><div class="tr-tour-arrow">→</div></summary><div class="tr-body">
      <p>The main toolbar search bar gives you instant results as you type and remembers your past searches.</p>
      <div class="tr-step-label">How to use it</div>
      <ol class="tr-steps">
        <li>Click into the <strong>search bar</strong> in the top toolbar and start typing.</li>
        <li>A dropdown appears instantly with matching entries.</li>
        <li>Below the live results, <strong>query suggestions</strong> from your search history appear — past searches matching what you're typing.</li>
        <li>Click any result to open it, or press Enter to filter the full entry list.</li>
      </ol>
      <div class="tr-note"><strong>Two search systems:</strong> Toolbar search filters your main entry list. QA Search (sidebar) is a separate, deeper search that understands questions. Both work independently.</div>
    </div></details>

    <details class="tr-tour"><summary><div class="tr-tour-ic">👁️</div><div class="tr-tour-head"><div class="tr-tour-title">Image text recognition <span class="tr-tour-tier plus">PLUS</span></div><div class="tr-tour-subtitle">Images in your notes become searchable text automatically.</div></div><div class="tr-tour-arrow">→</div></summary><div class="tr-body">
      <p>When you paste images into your notes — screenshots, whiteboard photos, scanned receipts — VaultBook automatically reads the text in those images and makes it searchable.</p>
      <div class="tr-step-label">How it works for you</div>
      <ol class="tr-steps">
        <li>Paste or drag an image into any entry's body. That's it.</li>
        <li>VaultBook detects the image and reads any visible text from it automatically.</li>
        <li>That text becomes searchable through both toolbar search and QA Search.</li>
        <li>Next time you search for a word that appeared in a photo, the entry containing that image shows up in your results.</li>
      </ol>
      <div class="tr-note"><strong>Automatic and saved:</strong> Text recognition runs once per image and the results are remembered, so search stays fast even with thousands of images in your library.</div>
    </div></details>

    <details class="tr-tour"><summary><div class="tr-tour-ic">🏷️</div><div class="tr-tour-head"><div class="tr-tour-title">Smart label suggestions <span class="tr-tour-tier plus">PLUS</span></div><div class="tr-tour-subtitle">VaultBook recommends labels based on what you've written.</div></div><div class="tr-tour-arrow">→</div></summary><div class="tr-body">
      <p>When editing an entry, VaultBook analyzes the content and suggests relevant labels — shown as pastel-colored chips near the label field.</p>
      <div class="tr-step-label">How to use it</div>
      <ol class="tr-steps">
        <li>Open any entry in the editor.</li>
        <li>Look near the labels area — <strong>suggestion chips</strong> appear based on what your note is about.</li>
        <li>Each chip shows a label name and how often that label appears in similar entries.</li>
        <li>Click a chip to add that label instantly.</li>
      </ol>
    </div></details>

  </div>
</div></section>

<section class="tr-section" id="editing"><div class="container">
  <div class="tr-section-head" data-reveal><div class="tr-eyebrow">✏️ Editing &amp; Notes</div><h2 class="tr-section-title">Rich editing, sections &amp; scheduling</h2><p class="tr-section-sub">Everything you can do inside an entry.</p></div>
  <div class="tr-tours" data-reveal>

    <details class="tr-tour"><summary><div class="tr-tour-ic">📝</div><div class="tr-tour-head"><div class="tr-tour-title">Rich text editor <span class="tr-tour-tier plus">PLUS</span></div><div class="tr-tour-subtitle">Tables, code blocks, callouts, headings, fonts, colors, and Markdown.</div></div><div class="tr-tour-arrow">→</div></summary><div class="tr-body">
      <p>VaultBook's editor gives you full formatting control with a toolbar at the top of every entry.</p>
      <div class="tr-step-label">What you can do</div>
      <ol class="tr-steps">
        <li><strong>Text formatting:</strong> Bold, italic, underline, strikethrough — with standard keyboard shortcuts.</li>
        <li><strong>Headings:</strong> H1 through H6 from a dropdown for structuring long notes.</li>
        <li><strong>Lists:</strong> Numbered and bullet lists with proper nesting.</li>
        <li><strong>Font &amp; case:</strong> Switch fonts and transform text to UPPERCASE, lowercase, Title Case, or Sentence case.</li>
        <li><strong>Colors:</strong> Text color and highlight color pickers for visual emphasis.</li>
        <li><strong>Tables:</strong> Pick a grid size and insert. Right-click cells to add or remove rows and columns.</li>
        <li><strong>Code blocks:</strong> Labeled code blocks with monospace formatting.</li>
        <li><strong>Callout blocks:</strong> Eye-catching accent boxes with a title and body — ideal for tips or warnings.</li>
        <li><strong>Images &amp; links:</strong> Embed images and hyperlinks directly in the body.</li>
        <li><strong>Markdown:</strong> Paste Markdown and it renders automatically.</li>
      </ol>
    </div></details>

    <details class="tr-tour"><summary><div class="tr-tour-ic">📂</div><div class="tr-tour-head"><div class="tr-tour-title">Sections (sub-entries) <span class="tr-tour-tier plus">PLUS</span></div><div class="tr-tour-subtitle">Break long notes into collapsible chapters, each with its own attachments.</div></div><div class="tr-tour-arrow">→</div></summary><div class="tr-body">
      <p>Sections let you divide a note into collapsible parts — each with its own title, rich text body, and file attachments.</p>
      <div class="tr-step-label">How to use sections</div>
      <ol class="tr-steps">
        <li>In the editor, click <strong>"Add Section."</strong></li>
        <li>Give the section a title. It gets its own rich text editor — same toolbar as the main body.</li>
        <li>Attach files directly to the section, separate from the main entry's attachments.</li>
        <li>Sections appear as collapsible accordions in the entry view — click to expand or collapse. A badge shows the attachment count.</li>
      </ol>
      <div class="tr-note"><strong>Fully searchable:</strong> Section content and section attachments are included in search results — nothing in a collapsed section is hidden from search.</div>
    </div></details>

    <details class="tr-tour"><summary><div class="tr-tour-ic">📅</div><div class="tr-tour-head"><div class="tr-tour-title">Due dates, expiry &amp; recurrence <span class="tr-tour-tier plus">PLUS</span></div><div class="tr-tour-subtitle">Schedule notes with deadlines, expiration, and repeat rules.</div></div><div class="tr-tour-arrow">→</div></summary><div class="tr-body">
      <div class="tr-step-label">How to use scheduling</div>
      <ol class="tr-steps">
        <li>In the editor, set a <strong>Due date</strong> — the entry appears in the sidebar's "Due" tab, sorted by deadline.</li>
        <li>Set an <strong>Expiry date</strong> — entries nearing expiry show in the "Expiring" tab with urgency cues.</li>
        <li>Enable <strong>Repeat</strong> for periodic notes — daily check-ins, weekly reviews, monthly reports.</li>
        <li>Upcoming entries also appear in the AI Suggestions carousel, so VaultBook reminds you before deadlines arrive.</li>
      </ol>
    </div></details>

  </div>
</div></section>

<section class="tr-section" id="organization"><div class="container">
  <div class="tr-section-head" data-reveal><div class="tr-eyebrow">📂 Organization</div><h2 class="tr-section-title">Pages, labels, favorites &amp; navigation</h2><p class="tr-section-sub">How to structure a library of hundreds or thousands of entries.</p></div>
  <div class="tr-tours" data-reveal>

    <details class="tr-tour"><summary><div class="tr-tour-ic">📚</div><div class="tr-tour-head"><div class="tr-tour-title">Pages (hierarchical notebooks) <span class="tr-tour-tier plus">PLUS</span></div><div class="tr-tour-subtitle">Nested folder tree with drag-and-drop reordering.</div></div><div class="tr-tour-arrow">→</div></summary><div class="tr-body">
      <p>Pages are VaultBook's folder system — nested notebooks that form a tree you can expand, collapse, and rearrange.</p>
      <div class="tr-step-label">How to use pages</div>
      <ol class="tr-steps">
        <li>In the sidebar, click any page to filter entries to that notebook.</li>
        <li><strong>Create:</strong> Right-click a page and select "New sub-page."</li>
        <li><strong>Nest:</strong> Pages hold child pages — click the arrow to expand or collapse.</li>
        <li><strong>Reorder:</strong> Drag and drop pages anywhere in the tree.</li>
        <li><strong>Customize:</strong> Add icons and color dots for quick visual identification.</li>
        <li><strong>"All Pages"</strong> at the top shows every entry in your library.</li>
      </ol>
      <div class="tr-note"><strong>Multi-page entries:</strong> A single entry can live in more than one page — useful for notes that belong to multiple projects.</div>
    </div></details>

    <details class="tr-tour"><summary><div class="tr-tour-ic">🏷️</div><div class="tr-tour-head"><div class="tr-tour-title">Labels, hashtags &amp; favorites <span class="tr-tour-tier plus">PLUS</span></div><div class="tr-tour-subtitle">Color-coded tags, inline hashtags, and a dedicated favorites panel.</div></div><div class="tr-tour-arrow">→</div></summary><div class="tr-body">
      <div class="tr-step-label">Labels</div>
      <ol class="tr-steps">
        <li>Color-coded tags that appear as pills on entry cards and in the sidebar.</li>
        <li>Assign them in the editor — pick one or more from the multi-select list.</li>
        <li>Click a label in the sidebar to filter entries to just that tag.</li>
      </ol>
      <div class="tr-step-label">Hashtags</div>
      <ol class="tr-steps">
        <li>Type <strong>#hashtag</strong> anywhere in an entry's body. VaultBook recognizes them automatically.</li>
        <li>Hashtags integrate with the Kanban Board (Pro) — each becomes a column.</li>
      </ol>
      <div class="tr-step-label">Favorites</div>
      <ol class="tr-steps">
        <li>Click the <strong>star icon</strong> on any entry card to favorite it.</li>
        <li>The sidebar <strong>Favorites panel</strong> gives one-click access to all starred entries.</li>
      </ol>
    </div></details>

    <details class="tr-tour"><summary><div class="tr-tour-ic">⏱️</div><div class="tr-tour-head"><div class="tr-tour-title">Sidebar time tabs <span class="tr-tour-tier plus">PLUS</span></div><div class="tr-tour-subtitle">Switch between Recent, Due, Expiring, and Tools views.</div></div><div class="tr-tour-arrow">→</div></summary><div class="tr-body">
      <ol class="tr-steps">
        <li><strong>Recent:</strong> Recently modified entries — your "what was I working on" view.</li>
        <li><strong>Due:</strong> Entries with upcoming due dates, sorted by deadline.</li>
        <li><strong>Expiring:</strong> Entries nearing expiry with visual urgency cues.</li>
        <li><strong>Tools:</strong> Quick-access list of all 14+ built-in tools (Pro). Plus shows available tools with upgrade options.</li>
      </ol>
    </div></details>

  </div>
</div></section>

<section class="tr-section" id="security"><div class="container">
  <div class="tr-section-head" data-reveal><div class="tr-eyebrow">🔒 Security &amp; Encryption</div><h2 class="tr-section-title">Protect your most sensitive notes</h2><p class="tr-section-sub">Per-note encryption and a lock screen that blocks everything.</p></div>
  <div class="tr-tours" data-reveal>

    <details class="tr-tour"><summary><div class="tr-tour-ic">🔐</div><div class="tr-tour-head"><div class="tr-tour-title">Per-entry encryption <span class="tr-tour-tier plus">PLUS</span></div><div class="tr-tour-subtitle">Lock individual notes with unique passwords — military-grade AES-256 encryption.</div></div><div class="tr-tour-arrow">→</div></summary><div class="tr-body">
      <p>VaultBook encrypts notes individually — each with its own password. Unlocking one note never exposes any others.</p>
      <div class="tr-step-label">How to encrypt a note</div>
      <ol class="tr-steps">
        <li>Open an entry in the editor and toggle the <strong>Protected</strong> switch.</li>
        <li>Set a <strong>password</strong> for this entry.</li>
        <li>Click Save. The entry appears locked — title and labels stay visible, but the body is fully encrypted.</li>
        <li>To read it, click the entry and type the password. The content decrypts in your browser only — it's <strong>never saved to disk</strong> in readable form.</li>
      </ol>
      <div class="tr-note"><strong>Session convenience:</strong> After unlocking an entry, VaultBook remembers the password for the current session. Closing the browser tab clears it completely.</div>
    </div></details>

    <details class="tr-tour"><summary><div class="tr-tour-ic">🔏</div><div class="tr-tour-head"><div class="tr-tour-title">Lock screen <span class="tr-tour-tier plus">PLUS</span></div><div class="tr-tour-subtitle">A full-page blur that blocks all interaction when you step away.</div></div><div class="tr-tour-arrow">→</div></summary><div class="tr-body">
      <ol class="tr-steps">
        <li>Trigger the lock screen manually or let it activate after inactivity.</li>
        <li>The entire page blurs — no text is readable, no buttons are clickable, and nothing can be selected or copied.</li>
        <li>Authenticate through the lock screen prompt to resume. Your session and unlocked entries remain available.</li>
      </ol>
    </div></details>

  </div>
</div></section>

<section class="tr-section" id="files"><div class="container">
  <div class="tr-section-head" data-reveal><div class="tr-eyebrow">📎 Files &amp; Deep Indexing</div><h2 class="tr-section-title">Attach anything, search everything</h2><p class="tr-section-sub">How VaultBook handles files and makes their contents discoverable.</p></div>
  <div class="tr-tours" data-reveal>

    <details class="tr-tour"><summary><div class="tr-tour-ic">📎</div><div class="tr-tour-head"><div class="tr-tour-title">Attachments <span class="tr-tour-tier plus">PLUS</span></div><div class="tr-tour-subtitle">Attach files to entries and sections — stored in your local folder.</div></div><div class="tr-tour-arrow">→</div></summary><div class="tr-body">
      <ol class="tr-steps">
        <li>In the editor, click the <strong>attachment button (📎)</strong> to add files to the entry.</li>
        <li>Inside sections, each section has its own attachment button for section-specific files.</li>
        <li>Right-click any attachment to open, rename, or remove it.</li>
        <li>Text content from your files is automatically made searchable.</li>
        <li>If anything gets out of sync, click the <strong>♻️ Reindex</strong> button to refresh the file list.</li>
      </ol>
    </div></details>

    <details class="tr-tour"><summary><div class="tr-tour-ic">🔬</div><div class="tr-tour-head"><div class="tr-tour-title">Deep file indexing <span class="tr-tour-tier pro">PRO</span></div><div class="tr-tour-subtitle">Search inside spreadsheets, presentations, PDFs, ZIPs, and emails.</div></div><div class="tr-tour-arrow">→</div></summary><div class="tr-body">
      <p>Pro reaches inside complex file formats and makes their content searchable — so you can find information buried in attachments as easily as searching your notes.</p>
      <div class="tr-step-label">What becomes searchable</div>
      <ol class="tr-steps">
        <li><strong>Spreadsheets (XLSX):</strong> Cell data from every sheet becomes searchable.</li>
        <li><strong>Presentations (PPTX):</strong> All slide text and speaker notes are included in search.</li>
        <li><strong>PDFs:</strong> Text from regular PDFs is picked up automatically. Scanned PDFs (image-only) are read using text recognition, so even those are searchable.</li>
        <li><strong>ZIP archives:</strong> VaultBook looks inside ZIPs and reads the text content of inner files — including any images inside.</li>
        <li><strong>Emails (MSG):</strong> Subject, sender, body, and attachments from Outlook files are all included.</li>
      </ol>
      <div class="tr-step-label">Images hidden inside documents</div>
      <ol class="tr-steps">
        <li>Images embedded in Word documents, Excel files, and ZIP archives are all read using text recognition automatically.</li>
        <li>Scanned PDF pages are read the same way — no extra steps needed.</li>
      </ol>
      <div class="tr-note"><strong>Just attach and search:</strong> Drop a file, and VaultBook handles the rest in the background. Next time you search, content from that file appears in your results.</div>
    </div></details>

  </div>
</div></section>

<section class="tr-section" id="tools"><div class="container">
  <div class="tr-section-head" data-reveal><div class="tr-eyebrow">🛠️ Built-in Tools</div><h2 class="tr-section-title">14+ tools, zero context-switching</h2><p class="tr-section-sub">Everything runs right inside VaultBook — no separate apps needed.</p></div>
  <div class="tr-tours" data-reveal>

    <details class="tr-tour"><summary><div class="tr-tour-ic">📋</div><div class="tr-tour-head"><div class="tr-tour-title">Kanban Board <span class="tr-tour-tier pro">PRO</span></div><div class="tr-tour-subtitle">Your labels and hashtags become drag-and-drop columns instantly.</div></div><div class="tr-tour-arrow">→</div></summary><div class="tr-body">
      <ol class="tr-steps">
        <li>Open <strong>Tools → Kanban Board</strong> from the sidebar.</li>
        <li>VaultBook automatically creates a column for each of your labels and #hashtags.</li>
        <li>Entries appear as cards in their columns.</li>
        <li>Drag a card to a different column to reassign its label — changes sync instantly.</li>
        <li>Create or edit entries directly from the board.</li>
      </ol>
    </div></details>

    <details class="tr-tour"><summary><div class="tr-tour-ic">📰</div><div class="tr-tour-head"><div class="tr-tour-title">RSS / Atom Reader <span class="tr-tour-tier pro">PRO</span></div><div class="tr-tour-subtitle">Subscribe to news feeds and save articles to your library.</div></div><div class="tr-tour-arrow">→</div></summary><div class="tr-body">
      <ol class="tr-steps">
        <li>Open <strong>Tools → Reader</strong> and paste a feed URL.</li>
        <li>Organize feeds into folders by topic or source.</li>
        <li>Browse articles in a clean reading view.</li>
        <li>Save any article as a VaultBook entry to keep it permanently and make it searchable.</li>
      </ol>
    </div></details>

    <details class="tr-tour"><summary><div class="tr-tour-ic">📑</div><div class="tr-tour-head"><div class="tr-tour-title">PDF Merge, Split &amp; Compress <span class="tr-tour-tier pro">PRO</span></div><div class="tr-tour-subtitle">Combine, split, or compress PDFs — all in your browser.</div></div><div class="tr-tour-arrow">→</div></summary><div class="tr-body">
      <ol class="tr-steps">
        <li>Open <strong>Tools → PDF Merge &amp; Split</strong> or <strong>PDF Compress</strong>.</li>
        <li><strong>Merge:</strong> Drop multiple PDFs and combine them in your chosen order.</li>
        <li><strong>Split:</strong> Enter page ranges (e.g., "1-5, 8, 12-20") and extract as a new file.</li>
        <li><strong>Compress:</strong> Drop a scanned PDF to reduce its file size.</li>
        <li>Download the result. No file ever leaves your computer.</li>
      </ol>
    </div></details>

    <details class="tr-tour"><summary><div class="tr-tour-ic">🎵</div><div class="tr-tour-head"><div class="tr-tour-title">MP3 Cutter &amp; Joiner <span class="tr-tour-tier pro">PRO</span></div><div class="tr-tour-subtitle">Trim, cut, and combine audio clips right in VaultBook.</div></div><div class="tr-tour-arrow">→</div></summary><div class="tr-body">
      <ol class="tr-steps">
        <li>Open <strong>Tools → MP3 Cutter &amp; Joiner</strong> and drop an audio file.</li>
        <li>Set start and end points visually and <strong>cut</strong> a clip.</li>
        <li><strong>Trim silence</strong> from the beginning and end automatically.</li>
        <li><strong>Join</strong> multiple audio files into one track.</li>
        <li>Download the processed audio. Everything happens locally.</li>
      </ol>
    </div></details>

    <details class="tr-tour"><summary><div class="tr-tour-ic">📈</div><div class="tr-tour-head"><div class="tr-tour-title">File &amp; Folder Analyzer <span class="tr-tour-tier pro">PRO</span></div><div class="tr-tour-subtitle">Visualize data files and audit disk space usage.</div></div><div class="tr-tour-arrow">→</div></summary><div class="tr-body">
      <ol class="tr-steps">
        <li><strong>File Analyzer:</strong> Drop a CSV or TXT file and see instant visualizations — column types, distributions, and statistics.</li>
        <li><strong>Folder Analyzer:</strong> Select any folder and see disk space usage by file type, size distribution, and largest files.</li>
      </ol>
    </div></details>

    <details class="tr-tour"><summary><div class="tr-tour-ic">🔧</div><div class="tr-tour-head"><div class="tr-tour-title">More tools <span class="tr-tour-tier pro">PRO</span></div><div class="tr-tour-subtitle">Threads, web clipping, password generator, file browsers, and Obsidian import.</div></div><div class="tr-tour-arrow">→</div></summary><div class="tr-body">
      <ol class="tr-steps">
        <li><strong>Threads:</strong> Chat-style notes in a centered overlay — great for brainstorming and quick idea capture.</li>
        <li><strong>Save URL → Entry:</strong> Paste any web page URL and VaultBook creates a note from it instantly.</li>
        <li><strong>Password Generator:</strong> Generate strong passwords with one click. Configure length and character types, then copy.</li>
        <li><strong>File Explorer:</strong> Browse all attachments by file type, entry, or page — a visual file manager.</li>
        <li><strong>Photo &amp; Video Explorer:</strong> Scan folders of photos and videos in a visual grid with previews.</li>
        <li><strong>Import from Obsidian:</strong> Drop your Obsidian notes and VaultBook converts them into entries, preserving content and structure.</li>
      </ol>
    </div></details>

  </div>
</div></section>

<section class="tr-section" id="pro"><div class="container">
  <div class="tr-section-head" data-reveal><div class="tr-eyebrow">⭐ Pro Exclusive</div><h2 class="tr-section-title">Vote-based learning, analytics &amp; more</h2><p class="tr-section-sub">Advanced intelligence and productivity features in the Pro tier.</p></div>
  <div class="tr-tours" data-reveal>

    <details class="tr-tour"><summary><div class="tr-tour-ic">📊</div><div class="tr-tour-head"><div class="tr-tour-title">Vote-based learning <span class="tr-tour-tier pro">PRO</span></div><div class="tr-tour-subtitle">Upvote and downvote results to train VaultBook over time.</div></div><div class="tr-tour-arrow">→</div></summary><div class="tr-body">
      <p>Pro unlocks a persistent learning system — every vote teaches VaultBook what's relevant to you, and those preferences carry across all future sessions.</p>
      <div class="tr-step-label">Voting on search results</div>
      <ol class="tr-steps">
        <li>Run a QA search. Each result shows <strong>👍 upvote</strong> and <strong>👎 downvote</strong> buttons.</li>
        <li>Upvote helpful results to push them higher in future similar searches.</li>
        <li>Downvote irrelevant results to sink them. An undo toast appears briefly if you change your mind.</li>
        <li>Click <strong>"Add to note"</strong> on any result to quickly capture the query as a new entry.</li>
      </ol>
      <div class="tr-step-label">Voting on related entries</div>
      <ol class="tr-steps">
        <li>Open any entry. The <strong>Related Entries</strong> panel shows notes VaultBook thinks are connected.</li>
        <li>Browse suggestions with prev/next navigation.</li>
        <li>Upvote or downvote each suggestion — upvoting strengthens that connection, downvoting weakens it.</li>
        <li>Over time, your votes build a personalized map of how your notes relate — unique to how you think.</li>
      </ol>
      <div class="tr-note"><strong>It keeps getting better:</strong> Votes persist forever across sessions. The more you vote, the more search and recommendations align with your priorities.</div>
    </div></details>

    <details class="tr-tour"><summary><div class="tr-tour-ic">📈</div><div class="tr-tour-head"><div class="tr-tour-title">Advanced analytics <span class="tr-tour-tier pro">PRO</span></div><div class="tr-tour-subtitle">Visual charts showing library composition, activity, and file breakdowns.</div></div><div class="tr-tour-arrow">→</div></summary><div class="tr-body">
      <ol class="tr-steps">
        <li><strong>Label utilization chart:</strong> See how entries are distributed across your tags.</li>
        <li><strong>14-Day activity chart:</strong> A daily line graph of entry creation and editing — your productivity heartbeat.</li>
        <li><strong>Pages utilization chart:</strong> Spot overstuffed or underused notebooks at a glance.</li>
        <li><strong>Monthly activity chart:</strong> Broader trends for long-term patterns.</li>
        <li><strong>File type breakdown:</strong> See how many PDFs, images, spreadsheets, and other types you have.</li>
      </ol>
      <div class="tr-note"><strong>Plus basics:</strong> Entry count, entries with files, total file count, and storage size are available on Plus. Pro adds the visual charts on top.</div>
    </div></details>

    <details class="tr-tour"><summary><div class="tr-tour-ic">📆</div><div class="tr-tour-head"><div class="tr-tour-title">Timetable / Calendar <span class="tr-tour-tier pro">PRO</span></div><div class="tr-tour-subtitle">Day and week views with a scrollable 24-hour timeline.</div></div><div class="tr-tour-arrow">→</div></summary><div class="tr-body">
      <ol class="tr-steps">
        <li>Click the <strong>Timetable button</strong> to open the calendar.</li>
        <li>Switch between <strong>Day view</strong> (24-hour scrollable timeline) and <strong>Week view</strong> (7-day grid).</li>
        <li>Scheduled entries appear as blocks. Click a block to open the entry.</li>
        <li>Click an empty time slot to create a new scheduled entry directly.</li>
        <li>Your calendar state saves between sessions — it's right where you left it.</li>
      </ol>
      <div class="tr-note"><strong>Sidebar ticker:</strong> A Timetable Ticker widget shows your next few upcoming events at a glance without opening the full calendar.</div>
    </div></details>

    <details class="tr-tour"><summary><div class="tr-tour-ic">⏳</div><div class="tr-tour-head"><div class="tr-tour-title">Version history <span class="tr-tour-tier pro">PRO</span></div><div class="tr-tour-subtitle">Browse and restore past versions of any entry, kept for 60 days.</div></div><div class="tr-tour-arrow">→</div></summary><div class="tr-body">
      <ol class="tr-steps">
        <li>Click the <strong>⏳ button</strong> on any entry card to open version history.</li>
        <li>Browse saved versions from newest to oldest.</li>
        <li>Click any version to preview what the entry looked like at that point.</li>
        <li>Restore a previous version with one click. The current version is saved first, so nothing is ever lost.</li>
      </ol>
      <div class="tr-note"><strong>60-day retention:</strong> Versions are kept for 60 days and cleaned up automatically after that.</div>
    </div></details>

    <details class="tr-tour"><summary><div class="tr-tour-ic">🗂️</div><div class="tr-tour-head"><div class="tr-tour-title">Multi-tab views &amp; advanced filters <span class="tr-tour-tier pro">PRO</span></div><div class="tr-tour-subtitle">Multiple entry lists at once with compound filtering.</div></div><div class="tr-tour-arrow">→</div></summary><div class="tr-body">
      <div class="tr-step-label">Multi-tab views</div>
      <ol class="tr-steps">
        <li>Click <strong>+</strong> in the tab strip to open a new tab with its own independent view.</li>
        <li>Each tab can have different page filters, label selections, and sort orders.</li>
        <li>Switch between tabs to compare different slices of your library.</li>
      </ol>
      <div class="tr-step-label">Advanced filters</div>
      <ol class="tr-steps">
        <li><strong>By file type:</strong> Show only entries with specific attachment types — match any or match all.</li>
        <li><strong>By date:</strong> Filter by created, updated, due, or expiry date with ranges like last 7 or 30 days.</li>
        <li><strong>Sort controls:</strong> Multiple sort fields with ascending/descending toggle.</li>
      </ol>
      <div class="tr-note"><strong>Random Note Spotlight:</strong> A 🎲 widget in the sidebar surfaces a random entry hourly — great for rediscovering forgotten notes and old ideas.</div>
    </div></details>

  </div>
</div></section>

<section class="tr-section" style="padding-bottom: 0;"><div class="container">
  <div class="tr-cta" data-reveal>
    <h2 class="tr-cta-title">Ready to try it yourself?</h2>
    <p class="tr-cta-sub">Download VaultBook and explore every feature first-hand. No account needed — just open the file.</p>
    <div class="tr-cta-actions">
      <a class="btn btn-primary" href="/download/">Download VaultBook</a>
      <a class="btn btn-ghost" href="/pricing/">See pricing</a>
      <a class="btn btn-ghost" href="https://t.me/VaultBook" target="_blank" rel="noopener">Buy on Telegram</a>
    </div>
  </div>
</div></section>
