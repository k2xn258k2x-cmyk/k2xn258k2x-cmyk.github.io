---
layout: default
title: VaultBook AI
description: VaultBook AI learns how you think — surfacing the right note at the right moment, searching across everything you've written, and quietly shaping itself around the way you work.
body_class: ai-page
permalink: /vaultbook-ai/
---

<style>
/* ── AI Hero ─────────────────────────────────────────────────── */
.ai-hero{
  padding: 88px 0 72px;
  text-align: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, #0f0a1a 0%, #1a1028 35%, #0f0a1a 100%);
  color: #f0ecf6;
}
.ai-hero::before{
  content: '';
  position: absolute;
  width: 900px; height: 900px;
  border-radius: 50%;
  top: -400px; left: 50%;
  transform: translateX(-50%);
  background: radial-gradient(circle, rgba(206,147,216,.12) 0%, rgba(129,212,250,.06) 40%, transparent 68%);
  pointer-events: none;
}
.ai-hero::after{
  content: '';
  position: absolute;
  width: 600px; height: 600px;
  border-radius: 50%;
  bottom: -250px; right: -120px;
  background: radial-gradient(circle, rgba(128,203,196,.06) 0%, transparent 65%);
  pointer-events: none;
}
.ai-eyebrow{
  display: inline-block;
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: .14em;
  padding: 5px 14px;
  border-radius: 999px;
  background: linear-gradient(135deg, rgba(206,147,216,.15), rgba(129,212,250,.1));
  border: 1px solid rgba(206,147,216,.2);
  color: #ce93d8;
  margin-bottom: 22px;
  position: relative; z-index: 1;
}
.ai-hero-title{
  font-size: clamp(40px, 5.6vw, 64px);
  font-weight: 900;
  letter-spacing: -0.04em;
  line-height: 1.04;
  margin: 0;
  position: relative; z-index: 1;
}
.ai-hero-title em{
  font-style: normal;
  background: linear-gradient(135deg, #ce93d8, #81d4fa, #80cbc4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.ai-hero-sub{
  margin: 22px auto 0;
  max-width: 58ch;
  font-size: 18px;
  color: rgba(240,236,246,.55);
  line-height: 1.65;
  position: relative; z-index: 1;
}
.ai-hero-actions{
  display: flex; gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 36px;
  position: relative; z-index: 1;
}
.ai-hero .btn-primary{
  background: linear-gradient(135deg, #ce93d8, #81d4fa);
  color: #0f0a1a;
  border: none;
  font-weight: 800;
}
.ai-hero .btn-primary:hover{
  background: linear-gradient(135deg, #e1bee7, #b3e5fc);
  box-shadow: 0 8px 28px rgba(206,147,216,.25);
}
.ai-hero .btn-ghost{
  border-color: rgba(206,147,216,.3);
  color: #e1bee7;
}
.ai-hero .btn-ghost:hover{
  background: rgba(206,147,216,.08);
  border-color: rgba(206,147,216,.45);
}

/* ── Philosophy strip ────────────────────────────────────────── */
.ai-phil{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: rgba(206,147,216,.08);
  border-radius: 20px;
  overflow: hidden;
  margin-top: 56px;
  position: relative; z-index: 1;
}
.ai-phil-card{
  background: rgba(15,10,26,.92);
  backdrop-filter: blur(16px);
  padding: 32px 24px;
  text-align: center;
  transition: background .25s ease;
}
.ai-phil-card:hover{ background: rgba(26,16,40,.95); }
.ai-phil-ic{
  font-size: 28px;
  margin-bottom: 12px;
  display: block;
  opacity: .9;
}
.ai-phil-title{
  font-weight: 850;
  font-size: 15px;
  letter-spacing: -0.01em;
  color: #f0ecf6;
}
.ai-phil-text{
  margin-top: 6px;
  font-size: 13px;
  color: rgba(240,236,246,.42);
  line-height: 1.5;
  max-width: 30ch;
  margin-left: auto;
  margin-right: auto;
}

/* ── Narrative section ───────────────────────────────────────── */
.ai-narrative{
  max-width: 680px;
  margin: 0 auto;
  text-align: center;
}
.ai-narrative p{
  font-size: 17px;
  color: rgba(11,11,11,.6);
  line-height: 1.7;
  margin-top: 0;
}
.ai-narrative p + p{ margin-top: 16px; }

/* ── Feature showcase (big cards) ────────────────────────────── */
.ai-show{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  margin-top: 36px;
}
.ai-show-card{
  position: relative;
  background: rgba(255,255,255,.85);
  backdrop-filter: blur(16px) saturate(1.5);
  border: 1px solid rgba(206,147,216,.12);
  border-radius: 22px;
  padding: 34px 28px 28px;
  overflow: hidden;
  transition: transform .26s ease, box-shadow .26s ease;
}
.ai-show-card:hover{
  transform: translateY(-4px);
  box-shadow: 0 18px 48px rgba(206,147,216,.13), 0 2px 10px rgba(0,0,0,.04);
}
.ai-show-card::before{
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  border-radius: 22px 22px 0 0;
}
.ai-show-card:nth-child(1)::before{ background: linear-gradient(90deg, #ce93d8, #81d4fa); }
.ai-show-card:nth-child(2)::before{ background: linear-gradient(90deg, #81d4fa, #80cbc4); }
.ai-show-card.full{ grid-column: 1 / -1; }
.ai-show-card.full::before{ background: linear-gradient(90deg, #80cbc4, #ffcc80, #ce93d8); }
.ai-show-kicker{
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: .08em;
  color: rgba(11,11,11,.38);
  margin-bottom: 8px;
}
.ai-show-title{ font-weight: 900; font-size: 22px; letter-spacing: -0.02em; }
.ai-show-text{ margin-top: 10px; font-size: 15px; color: rgba(11,11,11,.58); line-height: 1.65; }
.ai-show-list{
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.ai-show-li{
  font-size: 14px;
  color: rgba(11,11,11,.68);
  display: flex;
  align-items: flex-start;
  gap: 10px;
  line-height: 1.45;
}
.ai-show-li::before{
  content: '';
  flex-shrink: 0;
  width: 7px; height: 7px;
  border-radius: 50%;
  margin-top: 6px;
  background: linear-gradient(135deg, #ce93d8, #81d4fa);
}

/* ── How-it-thinks (alternating rows) ────────────────────────── */
.ai-row{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  align-items: start;
  margin-top: 32px;
}
.ai-row.flip .ai-row-detail{ order: -1; }
.ai-row-card{
  background: rgba(255,255,255,.78);
  border: 1px solid rgba(206,147,216,.1);
  border-radius: 20px;
  padding: 28px 24px;
  position: relative;
  overflow: hidden;
  transition: transform .24s ease, box-shadow .24s ease;
}
.ai-row-card:hover{
  transform: translateY(-3px);
  box-shadow: 0 14px 36px rgba(206,147,216,.1);
}
.ai-row-card::before{
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  border-radius: 20px 20px 0 0;
  opacity: 0;
  transition: opacity .24s ease;
}
.ai-row-card:hover::before{ opacity: 1; }
.ai-row-kicker{
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: .08em;
  color: rgba(11,11,11,.38);
  margin-bottom: 6px;
}
.ai-row-title{ font-weight: 900; font-size: 20px; letter-spacing: -0.02em; }
.ai-row-text{ margin-top: 8px; font-size: 14.5px; color: rgba(11,11,11,.58); line-height: 1.6; }

.ai-row-detail{
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.ai-chip{
  background: rgba(255,255,255,.6);
  border: 1px solid rgba(206,147,216,.1);
  border-radius: 14px;
  padding: 16px 18px;
  transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
}
.ai-chip:hover{
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(206,147,216,.08);
  border-color: rgba(206,147,216,.2);
}
.ai-chip-title{ font-weight: 800; font-size: 14px; }
.ai-chip-text{ margin-top: 3px; font-size: 13px; color: rgba(11,11,11,.52); line-height: 1.45; }

/* section color theming */
.ai-sec-vision .ai-row-card::before{ background: linear-gradient(90deg, #ce93d8, #f48fb1); }
.ai-sec-index .ai-row-card::before{ background: linear-gradient(90deg, #81d4fa, #80cbc4); }
.ai-sec-learn .ai-row-card::before{ background: linear-gradient(90deg, #80cbc4, #a5d6a7); }

/* ── Comparison strip ────────────────────────────────────────── */
.ai-compare{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  margin-top: 36px;
  max-width: 760px;
  margin-left: auto;
  margin-right: auto;
}
.ai-cmp{
  border-radius: 20px;
  padding: 28px 24px;
  position: relative;
  overflow: hidden;
}
.ai-cmp::before{
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  border-radius: 20px 20px 0 0;
}
.ai-cmp-old{
  background: rgba(245,240,240,.8);
  border: 1px solid rgba(200,180,180,.15);
}
.ai-cmp-old::before{ background: rgba(180,160,160,.25); }
.ai-cmp-new{
  background: rgba(255,255,255,.88);
  border: 1px solid rgba(206,147,216,.15);
  box-shadow: 0 4px 18px rgba(129,212,250,.08);
}
.ai-cmp-new::before{ background: linear-gradient(90deg, #ce93d8, #81d4fa, #80cbc4); }
.ai-cmp-label{
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: .08em;
  margin-bottom: 14px;
}
.ai-cmp-old .ai-cmp-label{ color: rgba(11,11,11,.32); }
.ai-cmp-new .ai-cmp-label{ color: #7b1fa2; }
.ai-cmp-line{
  font-size: 14px;
  color: rgba(11,11,11,.55);
  line-height: 1.5;
  padding: 7px 0;
  border-bottom: 1px solid rgba(11,11,11,.05);
  display: flex;
  align-items: flex-start;
  gap: 8px;
}
.ai-cmp-line:last-child{ border-bottom: none; }
.ai-cmp-new .ai-cmp-line{ color: rgba(11,11,11,.72); }
.ai-cmp-dot{
  flex-shrink: 0;
  width: 6px; height: 6px;
  border-radius: 50%;
  margin-top: 7px;
}
.ai-cmp-old .ai-cmp-dot{ background: rgba(11,11,11,.15); }
.ai-cmp-new .ai-cmp-dot{ background: linear-gradient(135deg, #ce93d8, #81d4fa); }

/* ── Responsive ──────────────────────────────────────────────── */
@media (max-width: 900px){
  .ai-phil{ grid-template-columns: 1fr; }
  .ai-show{ grid-template-columns: 1fr; }
  .ai-show-card.full{ grid-column: auto; }
  .ai-row{ grid-template-columns: 1fr; }
  .ai-row.flip .ai-row-detail{ order: 0; }
  .ai-compare{ grid-template-columns: 1fr; max-width: 400px; }
}
</style>

<!-- ━━━ HERO ━━━ -->
<section class="ai-hero">
  <div class="container" data-reveal>
    <span class="ai-eyebrow">VaultBook AI</span>
    <h1 class="ai-hero-title">Your notes remember<br>so <em>you don't have to</em></h1>
    <p class="ai-hero-sub">
      VaultBook AI doesn't live on a server. It lives inside your library — learning your
      rhythms, surfacing what matters, and connecting ideas you forgot you had.
      No cloud, no prompts, no waiting. Just your second brain, always on.
    </p>
    <div class="ai-hero-actions">
      <a class="btn btn-primary" href="{{ '/get-started/' | relative_url }}">Get VaultBook</a>
      <a class="btn btn-ghost" href="{{ '/demo/' | relative_url }}">See it in action</a>
    </div>

    <div class="ai-phil" data-reveal>
      <div class="ai-phil-card">
        <span class="ai-phil-ic">🧠</span>
        <div class="ai-phil-title">Thinks like you do</div>
        <div class="ai-phil-text">Learns your reading patterns, your weekday habits, your preferred tools — and quietly adapts.</div>
      </div>
      <div class="ai-phil-card">
        <span class="ai-phil-ic">🔎</span>
        <div class="ai-phil-title">Finds what you mean</div>
        <div class="ai-phil-text">Ask in plain language. The AI searches titles, text, OCR, attachments — and ranks by what matters most to you.</div>
      </div>
      <div class="ai-phil-card">
        <span class="ai-phil-ic">🔒</span>
        <div class="ai-phil-title">Never leaves your device</div>
        <div class="ai-phil-text">Every AI feature runs locally in your browser. No API calls, no data sent anywhere. Your intelligence, your machine.</div>
      </div>
    </div>
  </div>
</section>

<!-- ━━━ OPENING NARRATIVE ━━━ -->
<section class="section">
  <div class="container">
    <header class="section-head" data-reveal>
      <h2 class="h2">AI that doesn't interrupt — it anticipates</h2>
    </header>
    <div class="ai-narrative" data-reveal>
      <p>
        Most AI tools demand your attention. They want you to type a prompt, wait for a response,
        and figure out if the answer is useful. VaultBook does the opposite. Its intelligence is
        ambient — woven into the fabric of the workspace so deeply that you stop noticing it's there.
        You just find the right note faster, see a connection you'd missed, or discover that
        the entry you need is already waiting at the top of the page.
      </p>
      <p>
        That's the design principle: AI should match the speed of thought. Not slower.
        Not louder. Not somewhere else. Right here, in the flow of your work, as fast as
        your fingers can move.
      </p>
    </div>
  </div>
</section>

<!-- ━━━ SPARKLE PAGER + SMART SEARCH (flagship) ━━━ -->
<section class="section tint">
  <div class="container">
    <header class="section-head" data-reveal>
      <h2 class="h2">Two engines. One workspace.</h2>
      <p class="muted">The Suggestions pager anticipates what you need next. Smart Search finds everything else.</p>
    </header>

    <div class="ai-show" data-reveal>
      <div class="ai-show-card">
        <div class="ai-show-kicker">✨ Suggestions Pager</div>
        <div class="ai-show-title">It knows your Monday<br>is different from your Thursday</div>
        <div class="ai-show-text">
          Open VaultBook and the Sparkle pager already knows what to show you.
          It analyzes the last 4 weeks of your reading patterns for the current day of the week,
          surfaces upcoming scheduled entries, and ranks your recently read notes, files, and tools
          by personalized relevance — not recency, not alphabetical order, but how
          <em>you</em> actually use your library.
        </div>
        <div class="ai-show-list">
          <div class="ai-show-li">4-page carousel: Suggestions, Recently Read, Recent Files, Recent Tools</div>
          <div class="ai-show-li">Top 3 entries for today's day-of-week over the last 4 weeks</div>
          <div class="ai-show-li">Upcoming scheduled entries surfaced within a 48-hour window</div>
          <div class="ai-show-li">Personalized relevance distribution learned from your usage</div>
        </div>
      </div>

      <div class="ai-show-card">
        <div class="ai-show-kicker">🔎 Smart Search &amp; QA</div>
        <div class="ai-show-title">Ask a question.<br>Get the answer, not a list.</div>
        <div class="ai-show-text">
          Type a question in natural language and VaultBook searches across everything
          you've ever written — titles, body text, labels, sections, inline OCR, attachment
          contents — with weighted scoring that puts the most relevant answer at the top.
          Not ten blue links. The answer.
        </div>
        <div class="ai-show-list">
          <div class="ai-show-li">Weighted scoring: titles (8×), labels (6×), OCR (5×), body (4×), sections (3×)</div>
          <div class="ai-show-li">Paginated results (6 per page) with prev/next navigation</div>
          <div class="ai-show-li">Typeahead dropdown with real-time suggestions as you type</div>
          <div class="ai-show-li">Past query suggestions for instant recall of previous searches</div>
        </div>
      </div>

      <div class="ai-show-card full">
        <div class="ai-show-kicker">💡 Related Entries</div>
        <div class="ai-show-title">The connection you didn't know existed</div>
        <div class="ai-show-text">
          When you open a note, VaultBook quietly scans your library for contextually similar entries
          and surfaces them in a fade-in panel. It's the moment where a project brief links to a
          research note from three months ago, or a meeting summary connects to a draft you never finished.
          Upvote the good matches, downvote the noise — your votes persist across sessions and the
          relevance model reshapes itself around your judgment.
        </div>
        <div class="ai-show-list" style="display:grid;grid-template-columns:1fr 1fr;gap:8px 24px;">
          <div class="ai-show-li">Contextual similarity computed across your full library</div>
          <div class="ai-show-li">Reddit-style upvote/downvote per pair</div>
          <div class="ai-show-li">Votes persist in repository and retrain relevance</div>
          <div class="ai-show-li">Paginated with smooth fade-in/out animation</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ━━━ VISION: OCR + DEEP INDEXING ━━━ -->
<section class="section">
  <div class="container">
    <header class="section-head" data-reveal>
      <h2 class="h2">It reads what you can't type</h2>
      <p class="muted">Photos, scans, PDFs, spreadsheets, presentations, emails — VaultBook extracts text from all of them and makes it searchable.</p>
    </header>

    <div class="ai-row ai-sec-vision" data-reveal>
      <div class="ai-row-card">
        <div class="ai-row-kicker">Inline OCR</div>
        <div class="ai-row-title">Every image becomes searchable text</div>
        <div class="ai-row-text">
          Paste a screenshot into a note. Attach a photo of a whiteboard. Drop in a scan of a receipt.
          VaultBook automatically runs OCR on every inline image, caches the extracted text per entry,
          and indexes it for search. The next time you search for a word that only exists inside a photo,
          VaultBook finds it — instantly, without you ever having to transcribe anything.
          The top 12 QA results also trigger background OCR warm-up if it hasn't been done yet,
          so search results get smarter the more you use them.
        </div>
      </div>
      <div class="ai-row-detail">
        <div class="ai-chip">
          <div class="ai-chip-title">Deep PDF indexing</div>
          <div class="ai-chip-text">Text layers are extracted from attached PDFs. Scanned pages are OCR'd — so even a photographed contract is fully searchable.</div>
        </div>
        <div class="ai-chip">
          <div class="ai-chip-title">Office document parsing</div>
          <div class="ai-chip-text">XLSX, XLSM, PPTX, and DOCX files are cracked open and their text content indexed. Embedded images inside these files are OCR'd too.</div>
        </div>
        <div class="ai-chip">
          <div class="ai-chip-title">ZIP &amp; MSG archives</div>
          <div class="ai-chip-text">Attach a zip file or an Outlook .msg email and VaultBook indexes every text-like file inside — plus deep-indexes attachments within those emails.</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ━━━ LEARNING ━━━ -->
<section class="section tint">
  <div class="container">
    <header class="section-head" data-reveal>
      <h2 class="h2">It learns by watching you work</h2>
      <p class="muted">No training step. No configuration. VaultBook's AI gets sharper every time you search, read, or vote.</p>
    </header>

    <div class="ai-row flip ai-sec-learn" data-reveal>
      <div class="ai-row-card">
        <div class="ai-row-kicker">Vote-Based Learning</div>
        <div class="ai-row-title">Your judgment reshapes the results</div>
        <div class="ai-row-text">
          Every time you upvote a search result or a related entry, VaultBook boosts it in future rankings.
          Every downvote pushes noise to the bottom. These votes persist across sessions in your repository,
          so the system compounds your preferences over weeks and months. The confirmation dialog teaches you how
          voting works the first time, then gets out of your way. An undo toast means nothing is permanent.
          Over time, the workspace stops showing you what's technically relevant and starts showing you
          what's actually useful — a distinction no static algorithm can make.
        </div>
      </div>
      <div class="ai-row-detail">
        <div class="ai-chip">
          <div class="ai-chip-title">Smart label suggestions</div>
          <div class="ai-chip-text">When you edit a note, VaultBook analyzes its content and suggests labels as pastel-colored chips — so tagging is a single click, not a memory exercise.</div>
        </div>
        <div class="ai-chip">
          <div class="ai-chip-title">Query memory</div>
          <div class="ai-chip-text">Past searches are remembered and suggested the next time you start typing, so recurring questions are answered in two keystrokes.</div>
        </div>
        <div class="ai-chip">
          <div class="ai-chip-title">Attachment warm-up</div>
          <div class="ai-chip-text">When you search, the top 12 results trigger background text extraction on their attachments — so the next search across those files is faster and deeper.</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ━━━ BEFORE / AFTER ━━━ -->
<section class="section">
  <div class="container">
    <header class="section-head" data-reveal>
      <h2 class="h2">What changes when AI lives in your workspace</h2>
      <p class="muted">Not a chatbot you visit. A layer of intelligence across everything you already do.</p>
    </header>

    <div class="ai-compare" data-reveal>
      <div class="ai-cmp ai-cmp-old">
        <div class="ai-cmp-label">Without VaultBook AI</div>
        <div class="ai-cmp-line"><span class="ai-cmp-dot"></span>Scroll through dozens of notes to find the right one</div>
        <div class="ai-cmp-line"><span class="ai-cmp-dot"></span>Manually tag every entry and hope you're consistent</div>
        <div class="ai-cmp-line"><span class="ai-cmp-dot"></span>Screenshots and scans are unsearchable dead weight</div>
        <div class="ai-cmp-line"><span class="ai-cmp-dot"></span>Forget what you worked on last Tuesday</div>
        <div class="ai-cmp-line"><span class="ai-cmp-dot"></span>PDF and spreadsheet content locked inside files</div>
        <div class="ai-cmp-line"><span class="ai-cmp-dot"></span>Search returns everything or nothing</div>
      </div>
      <div class="ai-cmp ai-cmp-new">
        <div class="ai-cmp-label">With VaultBook AI</div>
        <div class="ai-cmp-line"><span class="ai-cmp-dot"></span>The right note surfaces before you search for it</div>
        <div class="ai-cmp-line"><span class="ai-cmp-dot"></span>Labels suggested automatically from your content</div>
        <div class="ai-cmp-line"><span class="ai-cmp-dot"></span>Every image OCR'd and indexed — searchable instantly</div>
        <div class="ai-cmp-line"><span class="ai-cmp-dot"></span>Weekday patterns show what you were focused on</div>
        <div class="ai-cmp-line"><span class="ai-cmp-dot"></span>Text extracted from PDFs, XLSX, PPTX, ZIP, and emails</div>
        <div class="ai-cmp-line"><span class="ai-cmp-dot"></span>Weighted results that improve with every vote</div>
      </div>
    </div>
  </div>
</section>

<!-- ━━━ PRIVACY SECTION ━━━ -->
<section class="section tint">
  <div class="container">
    <header class="section-head" data-reveal>
      <h2 class="h2">AI that respects the boundary</h2>
      <p class="muted">Every computation happens in your browser tab. Nothing is sent, stored, or processed anywhere else.</p>
    </header>

    <div class="ai-row ai-sec-index" data-reveal>
      <div class="ai-row-card">
        <div class="ai-row-kicker">Privacy Architecture</div>
        <div class="ai-row-title">Zero network. Zero trust required.</div>
        <div class="ai-row-text">
          VaultBook AI is not a wrapper around a cloud API. There is no server. There is no model endpoint.
          Every feature — OCR, text extraction, relevance scoring, vote-based learning, pattern
          analysis, label suggestions — runs entirely inside your browser using local computation.
          Your notes, your votes, your reading patterns stay in a JSON file on your disk.
          If you disconnect your Wi-Fi and keep working, nothing changes. That's the test.
        </div>
      </div>
      <div class="ai-row-detail">
        <div class="ai-chip">
          <div class="ai-chip-title">No API keys</div>
          <div class="ai-chip-text">There's no OpenAI key to configure, no usage limits to monitor, no API bill at the end of the month. VaultBook's intelligence is self-contained.</div>
        </div>
        <div class="ai-chip">
          <div class="ai-chip-title">Your data format, your data</div>
          <div class="ai-chip-text">Notes are stored as Markdown sidecar files. Votes and metadata live in a single repository.json. Everything is portable, human-readable, and yours to move.</div>
        </div>
        <div class="ai-chip">
          <div class="ai-chip-title">Works offline forever</div>
          <div class="ai-chip-text">VaultBook doesn't phone home for updates, license checks, or feature flags. Once downloaded, it runs without a network connection — indefinitely.</div>
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
        <div class="cta-title">Ready to think faster?</div>
        <div class="muted">Download VaultBook and let your workspace start learning how you work.</div>
      </div>
      <div class="cta-actions">
        <a class="btn btn-primary" href="{{ '/get-started/' | relative_url }}">Get VaultBook</a>
        <a class="btn btn-ghost" href="{{ '/product/' | relative_url }}">Explore all features</a>
      </div>
    </div>
  </div>
</section>
