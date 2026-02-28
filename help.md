---
layout: default
title: Help Center
description: Everything you need to know about VaultBook — setup, notes, search, encryption, tools, scheduling, and troubleshooting.
body_class: help-page
permalink: /help/
---

<style>
/* ── Help hero ───────────────────────────────────────────────── */
.hp-hero{
  padding: 72px 0 52px;
  text-align: center;
  background: linear-gradient(180deg, #faf8ff 0%, #f3f0fa 40%, #fff 100%);
  position: relative;
  overflow: hidden;
}
.hp-hero::before{
  content: '';
  position: absolute;
  width: 620px; height: 620px;
  border-radius: 50%;
  top: -260px; left: 50%;
  transform: translateX(-50%);
  background: radial-gradient(circle, rgba(206,147,216,.09) 0%, transparent 70%);
  pointer-events: none;
}
.hp-hero .eyebrow{ margin-bottom: 14px; position: relative; z-index:1; }
.hp-hero-title{
  font-size: clamp(34px, 5vw, 52px);
  font-weight: 900;
  letter-spacing: -0.03em;
  line-height: 1.08;
  margin: 0;
  position: relative; z-index:1;
}
.hp-hero-sub{
  margin: 16px auto 0;
  max-width: 50ch;
  font-size: 16.5px;
  color: rgba(11,11,11,.6);
  line-height: 1.55;
  position: relative; z-index:1;
}

/* ── Quick links grid ────────────────────────────────────────── */
.hp-quick{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  margin-top: 36px;
  position: relative; z-index:1;
}
.hp-quick-card{
  background: rgba(255,255,255,.72);
  border: 1px solid rgba(206,147,216,.1);
  border-radius: 16px;
  padding: 20px 16px;
  text-align: center;
  text-decoration: none;
  color: inherit;
  transition: transform .22s ease, box-shadow .22s ease, border-color .22s ease;
}
.hp-quick-card:hover{
  transform: translateY(-3px);
  box-shadow: 0 10px 28px rgba(206,147,216,.12);
  border-color: rgba(206,147,216,.22);
}
.hp-quick-emoji{ font-size: 26px; display: block; margin-bottom: 10px; }
.hp-quick-name{ font-weight: 800; font-size: 14px; }
.hp-quick-desc{ font-size: 12.5px; color: rgba(11,11,11,.48); margin-top: 3px; line-height: 1.4; }

/* ── Body content ────────────────────────────────────────────── */
.hp-body{
  max-width: 740px;
  margin: 0 auto;
}
.hp-body h2{
  font-size: 24px;
  font-weight: 900;
  letter-spacing: -0.02em;
  margin: 48px 0 16px;
  padding-top: 8px;
}
.hp-body h3{
  font-size: 17px;
  font-weight: 850;
  margin: 28px 0 10px;
}
.hp-body p{
  font-size: 15.5px;
  color: rgba(11,11,11,.72);
  line-height: 1.7;
  margin: 0 0 14px;
}
.hp-body a{
  color: var(--blue, #1f6feb);
  text-decoration: underline;
  text-underline-offset: 3px;
}
.hp-body code{
  font-size: 13.5px;
  background: rgba(206,147,216,.08);
  padding: 2px 7px;
  border-radius: 6px;
  font-family: 'SF Mono', 'Fira Code', monospace;
}
.hp-divider{
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(206,147,216,.18), rgba(129,212,250,.15), transparent);
  margin: 44px 0;
  border: none;
}
.hp-callout{
  margin: 20px 0;
  padding: 18px 22px;
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(243,229,245,.14), rgba(225,245,254,.1));
  border: 1px solid rgba(206,147,216,.12);
  position: relative;
  overflow: hidden;
}
.hp-callout::before{
  content: '';
  position: absolute;
  top: 0; left: 0; bottom: 0;
  width: 4px;
  background: linear-gradient(180deg, #ce93d8, #81d4fa);
}
.hp-callout p{ margin: 0; }
.hp-callout p + p{ margin-top: 8px; }
.hp-callout-title{
  font-weight: 850;
  font-size: 14.5px;
  color: rgba(11,11,11,.82);
  margin-bottom: 5px;
}

/* Step blocks */
.hp-steps{
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.hp-step{
  display: flex;
  gap: 14px;
  align-items: flex-start;
  padding: 16px 18px;
  background: rgba(255,255,255,.55);
  border: 1px solid rgba(206,147,216,.08);
  border-radius: 14px;
  transition: transform .18s ease, box-shadow .18s ease;
}
.hp-step:hover{
  transform: translateY(-1px);
  box-shadow: 0 4px 14px rgba(206,147,216,.08);
}
.hp-step-num{
  width: 32px; height: 32px;
  min-width: 32px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  font-weight: 900;
  font-size: 14px;
  background: linear-gradient(135deg, rgba(206,147,216,.18), rgba(225,190,231,.12));
  color: #7b1fa2;
}
.hp-step-body{ flex: 1; }
.hp-step-title{ font-weight: 800; font-size: 14.5px; }
.hp-step-text{ margin-top: 3px; font-size: 13.5px; color: rgba(11,11,11,.58); line-height: 1.5; }

/* FAQ accordion */
.hp-faq{
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.hp-faq-item{
  background: rgba(255,255,255,.6);
  border: 1px solid rgba(206,147,216,.1);
  border-radius: 14px;
  overflow: hidden;
  transition: box-shadow .2s ease;
}
.hp-faq-item:hover{
  box-shadow: 0 4px 14px rgba(206,147,216,.08);
}
.hp-faq-q{
  padding: 16px 20px;
  font-weight: 800;
  font-size: 15px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;
}
.hp-faq-q::after{
  content: '+';
  font-size: 20px;
  font-weight: 300;
  color: rgba(11,11,11,.3);
  transition: transform .2s ease;
}
.hp-faq-item.open .hp-faq-q::after{
  transform: rotate(45deg);
}
.hp-faq-a{
  display: none;
  padding: 0 20px 16px;
  font-size: 14.5px;
  color: rgba(11,11,11,.65);
  line-height: 1.65;
}
.hp-faq-item.open .hp-faq-a{
  display: block;
}

/* Section index cards */
.hp-index{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  margin-top: 32px;
}
.hp-index-card{
  background: rgba(255,255,255,.65);
  border: 1px solid rgba(206,147,216,.1);
  border-radius: 16px;
  padding: 20px 18px;
  text-decoration: none;
  color: inherit;
  transition: transform .22s ease, box-shadow .22s ease, border-color .22s ease;
  position: relative;
  overflow: hidden;
}
.hp-index-card::before{
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  border-radius: 16px 16px 0 0;
  opacity: 0;
  transition: opacity .24s ease;
}
.hp-index-card:hover{
  transform: translateY(-3px);
  box-shadow: 0 10px 28px rgba(206,147,216,.1);
  border-color: rgba(206,147,216,.2);
}
.hp-index-card:hover::before{ opacity: 1; }
.hp-index-card:nth-child(1)::before{ background: linear-gradient(90deg, #ce93d8, #81d4fa); }
.hp-index-card:nth-child(2)::before{ background: linear-gradient(90deg, #81d4fa, #80cbc4); }
.hp-index-card:nth-child(3)::before{ background: linear-gradient(90deg, #80cbc4, #ffcc80); }
.hp-index-card:nth-child(4)::before{ background: linear-gradient(90deg, #ffcc80, #f48fb1); }
.hp-index-card:nth-child(5)::before{ background: linear-gradient(90deg, #f48fb1, #ce93d8); }
.hp-index-card:nth-child(6)::before{ background: linear-gradient(90deg, #a5d6a7, #81d4fa); }
.hp-index-card:nth-child(7)::before{ background: linear-gradient(90deg, #ce93d8, #ffcc80); }
.hp-index-card:nth-child(8)::before{ background: linear-gradient(90deg, #81d4fa, #f48fb1); }
.hp-index-card:nth-child(9)::before{ background: linear-gradient(90deg, #80cbc4, #ce93d8); }
.hp-index-emoji{ font-size: 22px; display: block; margin-bottom: 10px; }
.hp-index-name{ font-weight: 850; font-size: 15px; }
.hp-index-desc{ font-size: 13px; color: rgba(11,11,11,.48); margin-top: 4px; line-height: 1.4; }

@media (max-width: 900px){
  .hp-quick{ grid-template-columns: 1fr 1fr; }
  .hp-index{ grid-template-columns: 1fr 1fr; }
}
@media (max-width: 600px){
  .hp-quick{ grid-template-columns: 1fr; max-width: 300px; margin-left: auto; margin-right: auto; }
  .hp-index{ grid-template-columns: 1fr; }
  .hp-body h2{ font-size: 20px; }
}
</style>


<script>
document.addEventListener('DOMContentLoaded',function(){
  document.querySelectorAll('.hp-faq-q').forEach(function(q){
    q.addEventListener('click',function(){
      this.parentElement.classList.toggle('open');
    });
  });
});
</script>

<!-- ━━━ HERO ━━━ -->
<section class="hp-hero">
  <div class="container" data-reveal>
    <div class="eyebrow">HELP CENTER</div>
    <h1 class="hp-hero-title">How can we help?</h1>
    <p class="hp-hero-sub">
    Everything you need to set up, use, and get the most out of VaultBook — from first launch to advanced workflows.
    </p>
    <div class="hp-quick">
      <a class="hp-quick-card" href="#getting-started">
      <span class="hp-quick-emoji">🚀</span>
      <div class="hp-quick-name">Getting Started</div>
      <div class="hp-quick-desc">Install &amp; first workspace</div>
      </a>
      <a class="hp-quick-card" href="#search-ai">
      <span class="hp-quick-emoji">🔎</span>
      <div class="hp-quick-name">Search &amp; AI</div>
      <div class="hp-quick-desc">Smart search, QA, OCR</div>
      </a>
      <a class="hp-quick-card" href="#encryption">
      <span class="hp-quick-emoji">🔒</span>
      <div class="hp-quick-name">Encryption</div>
      <div class="hp-quick-desc">Lock &amp; protect entries</div>
      </a>
      <a class="hp-quick-card" href="#troubleshooting">
      <span class="hp-quick-emoji">🛠️</span>
      <div class="hp-quick-name">Troubleshooting</div>
      <div class="hp-quick-desc">Common fixes</div>
      </a>
    </div>
  </div>
</section>

<!-- ━━━ TOPIC INDEX ━━━ -->
<section class="section">
  <div class="container">
    <header class="section-head" data-reveal>
      <h2 class="h2">Browse by topic</h2>
      <p class="muted">Jump to the section that matches what you need.</p>
    </header>
    <div class="hp-index" data-reveal>
      <a class="hp-index-card" href="#getting-started">
      <span class="hp-index-emoji">🚀</span>
      <div class="hp-index-name">Getting Started</div>
      <div class="hp-index-desc">Download, install, connect a folder, and create your first note.</div>
      </a>
      <a class="hp-index-card" href="#notes-editing">
      <span class="hp-index-emoji">✏️</span>
      <div class="hp-index-name">Notes &amp; Editing</div>
      <div class="hp-index-desc">Rich text, sections, version history, and Markdown.</div>
      </a>
      <a class="hp-index-card" href="#organization">
      <span class="hp-index-emoji">📂</span>
      <div class="hp-index-name">Organization</div>
      <div class="hp-index-desc">Pages, labels, favorites, tabs, filters, and sort.</div>
      </a>
      <a class="hp-index-card" href="#search-ai">
      <span class="hp-index-emoji">🔎</span>
      <div class="hp-index-name">Search &amp; AI</div>
      <div class="hp-index-desc">QA search, AI suggestions, related entries, OCR, and votes.</div>
      </a>
      <a class="hp-index-card" href="#encryption">
      <span class="hp-index-emoji">🔒</span>
      <div class="hp-index-name">Encryption &amp; Security</div>
      <div class="hp-index-desc">AES-256-GCM, passwords, lock screen, and best practices.</div>
      </a>
      <a class="hp-index-card" href="#files-attachments">
      <span class="hp-index-emoji">📎</span>
      <div class="hp-index-name">Files &amp; Attachments</div>
      <div class="hp-index-desc">Attach, index, browse, and search across files.</div>
      </a>
      <a class="hp-index-card" href="#scheduling">
      <span class="hp-index-emoji">📅</span>
      <div class="hp-index-name">Scheduling &amp; Calendar</div>
      <div class="hp-index-desc">Due dates, expiry, repeat, timetable, and analytics.</div>
      </a>
      <a class="hp-index-card" href="#tools">
      <span class="hp-index-emoji">🧰</span>
      <div class="hp-index-name">Built-in Tools</div>
      <div class="hp-index-desc">Kanban, PDF, RSS, media explorer, and 8 more.</div>
      </a>
      <a class="hp-index-card" href="#troubleshooting">
      <span class="hp-index-emoji">🛠️</span>
      <div class="hp-index-name">Troubleshooting</div>
      <div class="hp-index-desc">Common issues, browser tips, and data recovery.</div>
      </a>
    </div>
  </div>
</section>

<!-- ━━━ HELP BODY ━━━ -->
<section class="section tint">
  <div class="container">
    <div class="hp-body">
      <!-- ─── GETTING STARTED ─── -->
      <h2 id="getting-started" data-reveal>🚀 Getting Started</h2>

      <h3>System requirements</h3>

      <p>VaultBook runs in any Chromium-based browser — Chrome, Edge, Brave, Arc, Opera, or Vivaldi. It requires support for the <strong>File System Access API</strong>, which is available in all Chromium browsers on Windows, macOS, and Linux. Safari and Firefox have limited support for local file access features.</p>

      <p>There is nothing to install. VaultBook is a single HTML file. No runtime, no framework, no dependencies.</p>

      <h3>Download &amp; setup</h3>

      <div class="hp-steps" data-reveal>
        <div class="hp-step">
          <div class="hp-step-num">1</div>
          <div class="hp-step-body">
            <div class="hp-step-title">Download VaultBook</div>
            <div class="hp-step-text">Go to the <a href="/get-started/">Get Started page</a> and download VaultBook Plus (free) or VaultBook Pro. The download is a .zip file.</div>
          </div>
        </div>
        <div class="hp-step">
          <div class="hp-step-num">2</div>
          <div class="hp-step-body">
            <div class="hp-step-title">Extract the zip</div>
            <div class="hp-step-text">Unzip the file to any location on your computer — your Desktop, Documents, a USB drive, or a cloud-synced folder like Dropbox or OneDrive.</div>
          </div>
        </div>
        <div class="hp-step">
          <div class="hp-step-num">3</div>
          <div class="hp-step-body">
            <div class="hp-step-title">Open VaultBook.html</div>
            <div class="hp-step-text">Double-click <code>VaultBook.html</code> to open it in your default browser. If it doesn't open in a Chromium browser, right-click and choose "Open with" to pick Chrome or Edge.</div>
          </div>
        </div>
        <div class="hp-step">
          <div class="hp-step-num">4</div>
          <div class="hp-step-body">
            <div class="hp-step-title">Connect your folder</div>
            <div class="hp-step-text">Click the 📁 folder button in the toolbar. Select the folder you extracted. VaultBook will create <code>repository.json</code> and an <code>/attachments</code> directory to store your workspace data.</div>
          </div>
        </div>
        <div class="hp-step">
          <div class="hp-step-num">5</div>
          <div class="hp-step-body">
            <div class="hp-step-title">Create your first note</div>
            <div class="hp-step-text">Click the floating ✚ button or the "Create Note" button. Add a title, start writing, attach files, and add labels. Your workspace is ready.</div>
          </div>
        </div>
      </div>

      <div class="hp-callout" data-reveal>
        <div class="hp-callout-title">First-time storage tutorial</div>
        <p>If this is your first time opening VaultBook, a short tutorial will guide you through connecting a folder. Follow the prompts — it takes about 15 seconds.</p>
      </div>

      <h3>Saving your work</h3>

      <p>VaultBook autosaves your work as you type, with debouncing to prevent excessive writes. A sync indicator badge shows the current save state. You can also click the manual save button at any time. A concurrent-write guard prevents data races if autosave and manual save overlap.</p>

      <hr class="hp-divider">

      <!-- ─── NOTES & EDITING ─── -->
      <h2 id="notes-editing" data-reveal>✏️ Notes &amp; Editing</h2>

      <h3>The rich text editor</h3>

      <p>Every note opens in a full-featured rich text editor. The toolbar gives you access to:</p>

      <p><strong>Text formatting</strong> — bold, italic, underline, strikethrough, and case transformation (UPPER, lower, Title, Sentence).</p>

      <p><strong>Headings</strong> — H1 through H6, accessible via the toolbar dropdown.</p>

      <p><strong>Lists</strong> — ordered (numbered) and unordered (bulleted) lists.</p>

      <p><strong>Tables</strong> — insert tables using the visual size picker. Once inserted, right-click any cell for a context menu with options to add/remove rows and columns.</p>

      <p><strong>Code blocks</strong> — insert code blocks with language labels. Code is displayed with syntax-aware formatting.</p>

      <p><strong>Callout blocks</strong> — accent-bar blocks with a title header and body content, ideal for tips, warnings, or summaries.</p>

      <p><strong>Colors</strong> — pick text colors and highlight colors from the color palette in the toolbar.</p>

      <p><strong>Fonts</strong> — switch between available font families via the font selector dropdown.</p>

      <p><strong>Links &amp; images</strong> — insert hyperlinks and inline images directly into the note body.</p>

      <p><strong>Markdown</strong> — VaultBook supports Markdown rendering via the marked.js library. You can write in Markdown and see it rendered in the editor.</p>

      <h3>Entry fields</h3>

      <p>Each note has the following fields: <strong>Title</strong>, <strong>Body</strong> (rich text), <strong>Labels</strong> (multi-select tags), <strong>Page path</strong> (which notebook the note belongs to), <strong>Attachments</strong>, <strong>Sections</strong> (sub-entries), <strong>Favorite</strong> toggle, <strong>Protected/encrypted</strong> status, <strong>Due date</strong>, <strong>Expiry date</strong>, <strong>Repeat/recurrence</strong> schedule, and auto-generated <strong>Created at</strong> / <strong>Updated at</strong> timestamps.</p>

      <h3>Sections (sub-entries)</h3>

      <p>Sections let you break a long note into collapsible parts. Each section has its own title, rich text body, and dedicated file attachments. Sections appear as accordions you can expand or collapse. A clip count badge shows how many attachments each section has.</p>

      <h3>Version history</h3>

      <p>VaultBook Pro automatically creates version snapshots of your entries. Versions are stored in the <code>/versions</code> directory and retained for 60 days. Open the history modal from any entry to browse snapshots from newest to oldest and restore a previous version.</p>

      <hr class="hp-divider">

      <!-- ─── ORGANIZATION ─── -->
      <h2 id="organization" data-reveal>📂 Organization</h2>

      <h3>Pages (hierarchical notebooks)</h3>

      <p>Pages are VaultBook's primary organizational layer. You can create nested pages in a parent/child tree structure, reorder them with drag-and-drop, and assign color dots and icons. Right-click any page for a context menu with rename, delete, and move options. The "All Pages" root view shows every note regardless of page. A pages utilization pie chart in the analytics panel shows how your notes are distributed.</p>

      <h3>Labels (tags)</h3>

      <p>Labels are color-coded tags you attach to entries. Use them to categorize notes across different pages. Filter your entry list by one or more labels from the sidebar. The analytics panel includes a label utilization pie chart. When editing an entry, VaultBook Pro suggests relevant labels based on content analysis.</p>

      <h3>Inline hashtags</h3>

      <p>You can write <code>#hashtags</code> directly into your note content. These hashtags are picked up by the built-in Kanban Board tool, which auto-generates columns from them — turning your notes into a drag-and-drop project board.</p>

      <h3>Favorites</h3>

      <p>Star any entry to add it to your favorites. The sidebar has a dedicated Favorites panel with a compact scrollable list for quick access.</p>

      <h3>Multi-tab views</h3>

      <p>Open multiple entry list tabs simultaneously using the + button in the tab strip. Each tab maintains its own independent view state — including sort order, active filters, and pagination — so you can compare or work across different sets of notes.</p>

      <h3>Filters</h3>

      <p>Filter entries by: active page, active label(s), file type (match any or match all), date field, and date range (any, 7 days, 30 days). Filters combine, so you can view entries on a specific page with a specific label that have PDF attachments from the last 7 days.</p>

      <h3>Sort controls</h3>

      <p>Sort your entry list by multiple fields using the dropdown. Toggle between ascending and descending order. Use checkbox options for additional filtering behavior.</p>

      <h3>Pagination</h3>

      <p>Configure items per page using the pagination controls. Navigate with Prev/Next buttons. A total count is always displayed so you know where you are in your library.</p>

      <hr class="hp-divider">

      <!-- ─── SEARCH & AI ─── -->
      <h2 id="search-ai" data-reveal>🔎 Search &amp; AI</h2>

      <h3>Main toolbar search</h3>

      <p>The search bar in the toolbar finds matches across titles, note bodies, labels, attachment names, and extracted attachment text. Results appear instantly. A typeahead dropdown shows real-time suggestions as you type, and query history suggests past searches for quick repeat access.</p>

      <h3>Ask a Question (QA search)</h3>

      <p>The QA sidebar is a separate search engine designed for natural-language questions. It searches across your entire library with weighted scoring: titles carry the highest weight (8×), followed by labels (6×), inline OCR text (5×), body content (4×), sections (3×), main attachments (2×), and section attachments (1×). Results are paginated (6 per page) with prev/next navigation. The system respects your active page and label filters.</p>

      <h3>Vote-based learning</h3>

      <p>Both QA search results and Related Entries support upvote/downvote. Upvoting a result pushes it toward the top for that query in future searches. Downvoting pushes it down. Votes are persistent — they're saved in <code>state.userVotes</code> and survive across sessions. A confirmation dialog with educational tips appears the first time you vote (you can disable it). An undo toast appears after each vote in case of mistakes.</p>

      <h3>AI Suggestions (sparkle pager)</h3>

      <p>The ✨ sparkle button opens a 4-page carousel. <strong>Page 1 (Suggestions)</strong> shows upcoming scheduled entries and your weekday reading patterns — the top 3 entries you've read on the current day of the week over the past 4 weeks. <strong>Page 2</strong> shows recently read entries (up to 100, deduped, with timestamps). <strong>Page 3</strong> shows recently opened files and attachments. <strong>Page 4</strong> shows your recently used tools. The suggestions engine learns a personalized relevance distribution across your library over time.</p>

      <h3>Related Entries</h3>

      <p>When you're viewing a note, VaultBook shows contextually similar entries. These appear with fade-in/out animations and are paginated with prev/next navigation. You can upvote or downvote each related pair (Reddit-style) to train the relevance model. Votes persist and improve ordering over time.</p>

      <h3>Inline OCR</h3>

      <p>Images embedded within your notes are automatically processed with OCR (via Tesseract). The extracted text is cached per entry in the <code>inlineOcrText</code> field and indexed for search. When you run a QA query, the top 12 candidates trigger background OCR processing if it hasn't been done yet — so search gets smarter the more you use it.</p>

      <h3>Smart label suggestions</h3>

      <p>When editing a note in VaultBook Pro, the label picker shows AI-generated suggestions based on the entry's content. Suggestions appear as pastel-colored chips with counts, making it easy to tag consistently without breaking your writing flow.</p>

      <hr class="hp-divider">

      <!-- ─── ENCRYPTION ─── -->
      <h2 id="encryption" data-reveal>🔒 Encryption &amp; Security</h2>

      <h3>How encryption works</h3>

      <p>VaultBook Pro uses AES-256-GCM — the same encryption standard used by governments and financial institutions. Key derivation uses PBKDF2 with 100,000 iterations of SHA-256. Each encrypted entry gets a unique random 16-byte salt and 12-byte initialization vector (IV), ensuring that even identical content encrypts to different ciphertext.</p>

      <h3>Setting a password</h3>

      <p>To encrypt an entry, open it for editing and enable the "Protected" toggle. You'll be prompted to set a password. This password is specific to that entry — each entry can have a different password. Passwords are never stored on disk in any form.</p>

      <h3>Unlocking entries</h3>

      <p>When you open an encrypted entry, VaultBook prompts for the password. Once unlocked, the decrypted content is held in memory only (the <code>_plain</code> field) and is never written to disk unencrypted. If you've already unlocked an entry during the current session, VaultBook's session cache remembers the password so you don't need to re-enter it until you close the tab.</p>

      <h3>Lock screen</h3>

      <p>Enable the lock screen to blur the entire application and block all pointer events and text selection. This is useful when stepping away from your computer. The lock screen requires re-authentication to dismiss.</p>

      <div class="hp-callout" data-reveal>
        <div class="hp-callout-title">Important: password recovery is impossible</div>
        <p>VaultBook has no backend and no knowledge of your passwords. If you forget an entry's password, we cannot recover it. Store your passwords in a secure password manager or the built-in Password Generator tool.</p>
      </div>

      <hr class="hp-divider">

      <!-- ─── FILES & ATTACHMENTS ─── -->
      <h2 id="files-attachments" data-reveal>📎 Files &amp; Attachments</h2>

      <h3>Attaching files</h3>

      <p>You can attach files to entries and to individual sections within entries. Files are stored in the <code>/attachments</code> directory via the File System Access API. An <code>index.txt</code> manifest keeps track of all attachment metadata in JSON format.</p>

      <h3>Attachment indexing</h3>

      <p>VaultBook extracts text from attached files and indexes it for search. This means you can find a note by searching for words that appear inside an attached PDF, text file, or other supported document. Background warm-up automatically loads indexed text for the top search candidates so results stay fast.</p>

      <h3>Browsing attachments</h3>

      <p>The File Explorer tool lets you browse all attachments across your entire workspace — by file type, by entry, or by page. Right-click any attachment for a context menu with additional options. The sidebar attachment ticker shows recent attachment activity.</p>

      <h3>File type filtering</h3>

      <p>Filter your entry list by the types of files they have attached. Choose "match any" to find entries with at least one matching file type, or "match all" to find entries that have all the specified types.</p>

      <h3>Reindexing</h3>

      <p>If your attachment index ever gets out of sync, click the ♻️ reindex button to rebuild it from the <code>/attachments</code> directory. This scans all files and regenerates the <code>index.txt</code> manifest.</p>

      <hr class="hp-divider">

      <!-- ─── SCHEDULING ─── -->
      <h2 id="scheduling" data-reveal>📅 Scheduling &amp; Calendar</h2>

      <h3>Due dates, expiry, and repeat</h3>

      <p>Any entry can have a <strong>due date</strong>, an <strong>expiry date</strong>, and a <strong>repeat/recurrence</strong> schedule. Set these fields when editing the entry. The sidebar shows three dedicated time tabs: <strong>Recent</strong> (recently modified entries), <strong>Due</strong> (upcoming due dates), and <strong>Expiring</strong> (entries approaching expiry).</p>

      <h3>Timetable &amp; calendar</h3>

      <p>Open the timetable from the toolbar for a full calendar modal with day and week views. The timeline is scrollable across 24 hours. Calendar data is backed to disk and rehydrated on load, so your schedule persists across sessions. The AI suggestions pager integrates with the timetable, surfacing entries due in the next 48 hours.</p>

      <h3>Analytics</h3>

      <p>The analytics panel in the sidebar shows: entry count, entries with files, total file count, total storage size, and a file type breakdown. Three Canvas-rendered charts visualize your workspace: a label utilization pie chart, a last-14-days activity line chart, and a pages utilization pie chart. Strength metrics appear as inline pills with expandable details.</p>

      <h3>Random note spotlight</h3>

      <p>The 🎲 widget in the sidebar shows a random note that refreshes every hour. A "New pick" indicator lets you know when a fresh suggestion is available. It's a lightweight way to rediscover old ideas.</p>

      <hr class="hp-divider">

      <!-- ─── BUILT-IN TOOLS ─── -->
      <h2 id="tools" data-reveal>🧰 Built-in Tools</h2>

      <p>All tools open directly inside VaultBook from the sidebar — no extensions, no new tabs, no installs.</p>

      <h3>Kanban Board</h3>
      <p>Your labels and inline <code>#hashtags</code> automatically become columns. Entries are cards you can drag and drop between buckets. Changes sync back to your notes.</p>

      <h3>File Analyzer</h3>
      <p>Drop a CSV or TXT file and get instant visualizations and analysis of your data.</p>

      <h3>RSS / Atom Reader</h3>
      <p>Follow your favorite feeds organized in folders. Content updates when you refresh.</p>

      <h3>Threads</h3>
      <p>A chat-style note-taking interface in a focused centered overlay. Great for quick thoughts, meeting notes, or brainstorm sessions.</p>

      <h3>Save URL → Entry</h3>
      <p>Paste any web URL and VaultBook creates a new entry from the page content, making it searchable in your library.</p>

      <h3>MP3 Cutter &amp; Joiner</h3>
      <p>Trim silence, cut clips to specific timestamps, and join multiple audio segments — all within the browser.</p>

      <h3>File Explorer</h3>
      <p>Browse every attachment in your workspace organized by file type, parent entry, or page hierarchy.</p>

      <h3>Photo &amp; Video Explorer</h3>
      <p>Point it at a folder of photos and videos and browse them in a visual gallery interface.</p>

      <h3>Password Generator</h3>
      <p>Generate strong, random passwords with configurable length and character sets. Copy to clipboard instantly.</p>

      <h3>Folder Analyzer</h3>
      <p>Analyze disk space and file sizes for any folder on your system. Useful for understanding storage usage.</p>

      <h3>PDF Merge &amp; Split</h3>
      <p>Combine multiple PDFs into one, or split a single PDF into separate files — without leaving VaultBook.</p>

      <h3>PDF Compress</h3>
      <p>Reduce the file size of PDF documents, including scanned PDFs with embedded images.</p>

      <h3>Import from Obsidian</h3>
      <p>Drag and drop your <code>.md</code> files from Obsidian (or any Markdown source) and VaultBook converts them into searchable entries instantly.</p>

      <hr class="hp-divider">

      <!-- ─── TROUBLESHOOTING ─── -->
      <h2 id="troubleshooting" data-reveal>🛠️ Troubleshooting</h2>

      <div class="hp-faq" data-reveal>
        <div class="hp-faq-item">
          <div class="hp-faq-q">VaultBook opens as plain text or source code</div>
          <div class="hp-faq-a">Your browser isn't recognizing the file as HTML. Right-click the file, choose "Open with," and select Chrome, Edge, or another Chromium browser. On macOS, you may need to change the default application for .html files in Finder → Get Info.</div>
        </div>

        <div class="hp-faq-item">
          <div class="hp-faq-q">The folder button doesn't work or I can't connect a folder</div>
          <div class="hp-faq-a">The File System Access API is only available in Chromium-based browsers (Chrome, Edge, Brave, Arc). If you're using Safari or Firefox, this feature is not supported. Also check that you're opening the file from your local disk, not from within a zip archive — extract it first.</div>
        </div>

        <div class="hp-faq-item">
          <div class="hp-faq-q">My notes disappeared after reopening VaultBook</div>
          <div class="hp-faq-a">VaultBook loads from the folder you connect. If you opened VaultBook without reconnecting to your folder, your notes won't appear until you click the 📁 button and select the same folder. Your data is safe — it's all in the folder where you left it.</div>
        </div>

        <div class="hp-faq-item">
          <div class="hp-faq-q">Search isn't finding results I expect</div>
          <div class="hp-faq-a">Make sure you're searching in the right mode — the main toolbar search and the QA sidebar are separate engines with different scoring. If you're looking for text inside attachments, the text needs to be indexed first. Click the ♻️ reindex button to rebuild the attachment index. For OCR text, open the entry once so OCR processing runs on its inline images.</div>
        </div>

        <div class="hp-faq-item">
          <div class="hp-faq-q">I forgot the password for an encrypted entry</div>
          <div class="hp-faq-a">VaultBook does not store passwords and has no backend that can recover them. If you've lost the password, the encrypted content cannot be decrypted. We strongly recommend storing entry passwords in a dedicated password manager.</div>
        </div>

        <div class="hp-faq-item">
          <div class="hp-faq-q">Autosave doesn't seem to be working</div>
          <div class="hp-faq-a">Check the sync indicator badge in the toolbar. If it shows an error, the browser may have lost permission to write to the folder. Click the 📁 button and re-select your folder to restore write access. This can happen if you moved, renamed, or disconnected the folder.</div>
        </div>

        <div class="hp-faq-item">
          <div class="hp-faq-q">Attachments aren't showing up or are marked as pending</div>
          <div class="hp-faq-a">Pending states can occur if the write was interrupted (e.g., by closing the tab during upload). Try clicking the ♻️ reindex button to rebuild the attachment manifest. If individual files are missing from the <code>/attachments</code> directory, they may need to be re-attached.</div>
        </div>

        <div class="hp-faq-item">
          <div class="hp-faq-q">The timetable isn't saving my schedule</div>
          <div class="hp-faq-a">Timetable data is persisted to disk inside your workspace folder. Make sure you've connected your folder before adding timetable entries. If the data still isn't persisting, check your browser permissions for the folder.</div>
        </div>

        <div class="hp-faq-item">
          <div class="hp-faq-q">How do I move VaultBook to a new computer?</div>
          <div class="hp-faq-a">Copy your entire workspace folder (the one with <code>repository.json</code>, <code>/attachments</code>, and <code>/versions</code>) to the new computer. Open <code>VaultBook.html</code> in a Chromium browser and connect to the copied folder. Everything — notes, attachments, history, and settings — will be exactly as you left it.</div>
        </div>

        <div class="hp-faq-item">
          <div class="hp-faq-q">Can I use VaultBook on mobile or tablet?</div>
          <div class="hp-faq-a">VaultBook's UI is responsive and adapts to smaller screens at 900px and 720px breakpoints. However, the File System Access API is primarily available on desktop Chromium browsers. Mobile browsers have limited or no support for local folder access, so some features may not work on phones or tablets.</div>
        </div>

      </div>

      <hr class="hp-divider">

      <!-- ─── FAQ ─── -->
      <h2 id="faq" data-reveal>❓ General FAQ</h2>

      <div class="hp-faq" data-reveal>
        <div class="hp-faq-item">
          <div class="hp-faq-q">Is VaultBook really completely offline?</div>
          <div class="hp-faq-a">Yes. VaultBook makes zero network requests. All AI features, search, OCR, encryption, and analytics run locally in your browser. You can disconnect from the internet entirely and everything works.</div>
        </div>

        <div class="hp-faq-item">
          <div class="hp-faq-q">What's the difference between Plus and Pro?</div>
          <div class="hp-faq-a">Plus is free and includes unlimited notes, rich editing, file attachments, labels, all 12+ built-in tools, and basic search. Pro adds AI suggestions, weighted QA search, related entries, vote-based learning, inline OCR, per-entry encryption, timetable and calendar, analytics dashboards, version history, and smart label suggestions. See the <a href="/get-started/">Get Started page</a> for a full comparison.</div>
        </div>

        <div class="hp-faq-item">
          <div class="hp-faq-q">How do I back up my data?</div>
          <div class="hp-faq-a">Your workspace is a regular folder. Copy it, sync it with Dropbox/OneDrive/Google Drive, push it to a USB drive, or add it to a Git repository. No special export process is needed.</div>
        </div>

        <div class="hp-faq-item">
          <div class="hp-faq-q">Can I use VaultBook with Obsidian vaults?</div>
          <div class="hp-faq-a">Yes. The built-in Obsidian Import tool accepts .md files. Drag and drop them into VaultBook and they're converted into full entries. Note that VaultBook stores data in its own format after import — it doesn't modify your original Obsidian vault.</div>
        </div>

        <div class="hp-faq-item">
          <div class="hp-faq-q">How do I get updates?</div>
          <div class="hp-faq-a">Download the latest version from the <a href="/get-started/">Get Started page</a>. Replace your old <code>VaultBook.html</code> file with the new one. Your data is stored in the workspace folder, not in the HTML file, so updates never touch your notes or attachments. VaultBook shows an update banner when a new version is available.</div>
        </div>

        <div class="hp-faq-item">
          <div class="hp-faq-q">I need help with something not listed here</div>
          <div class="hp-faq-a">Message us on Telegram at <a href="https://t.me/VaultBook" target="_blank" rel="noopener">t.me/VaultBook</a>. A real person will reply, usually within a few hours. Screenshots and screen recordings are welcome — Telegram handles them natively.</div>
        </div>

      </div>

    </div>
  </div>
</section>

<!-- ━━━ FINAL CTA ━━━ -->
<section class="section">
  <div class="container">
    <div class="cta-band" data-reveal>
      <div>
        <div class="cta-title">Still have questions?</div>
        <div class="muted">Message us on Telegram — we reply to every message, usually within a few hours.</div>
      </div>
      <div class="cta-actions">
        <a class="btn btn-primary" href="https://t.me/VaultBook" target="_blank" rel="noopener">Message us on Telegram</a>
        <a class="btn btn-ghost" href="/get-started/">Get started — free</a>
      </div>
    </div>
  </div>
</section>
