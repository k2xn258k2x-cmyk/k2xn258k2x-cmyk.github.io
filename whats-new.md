---
layout: default
title: What's New
description: "VaultBook 3.0 — the most intelligent offline workspace ever built. AI Suggestions, neural search, vote-based learning, deep document intelligence, and 14+ built-in tools — all running locally in your browser."
body_class: wn-page
permalink: /whats-new/
---

<style>
/* ── Hero ────────────────────────────────────────────────────── */
.wn-hero{
  padding: 80px 0 64px;
  text-align: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, #0d0d1a 0%, #1a1a2e 40%, #12121f 100%);
  color: #fff;
}
.wn-hero::before{
  content: '';
  position: absolute;
  width: 900px; height: 900px;
  border-radius: 50%;
  top: -400px; left: 50%;
  transform: translateX(-50%);
  background: radial-gradient(circle, rgba(206,147,216,.15) 0%, rgba(129,212,250,.08) 40%, transparent 70%);
  pointer-events: none;
}
.wn-hero::after{
  content: '';
  position: absolute;
  width: 500px; height: 500px;
  border-radius: 50%;
  bottom: -200px; right: -100px;
  background: radial-gradient(circle, rgba(128,203,196,.08) 0%, transparent 70%);
  pointer-events: none;
}
.wn-eyebrow{
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 750;
  text-transform: uppercase;
  letter-spacing: .16em;
  background: rgba(206,147,216,.12);
  border: 1px solid rgba(206,147,216,.2);
  border-radius: 999px;
  padding: 6px 18px;
  color: #ce93d8;
  -webkit-text-fill-color: #ce93d8;
  position: relative; z-index: 1;
  margin-bottom: 18px;
}
.wn-hero-title{
  font-size: clamp(38px, 5.6vw, 64px);
  font-weight: 900;
  letter-spacing: -0.04em;
  line-height: 1.04;
  margin: 0;
  position: relative; z-index: 1;
  background: linear-gradient(135deg, #fff 0%, #ce93d8 50%, #81d4fa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.wn-hero-sub{
  margin: 20px auto 0;
  max-width: 56ch;
  font-size: 17px;
  color: rgba(255,255,255,.55);
  -webkit-text-fill-color: rgba(255,255,255,.55);
  line-height: 1.6;
  position: relative; z-index: 1;
}
.wn-hero-actions{
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 34px;
  position: relative; z-index: 1;
}
.wn-hero .btn-primary{
  background: linear-gradient(135deg, #ce93d8, #81d4fa);
  color: #0d0d1a;
  -webkit-text-fill-color: #0d0d1a;
  border-color: transparent;
}
.wn-hero .btn-primary:hover{ background: linear-gradient(135deg, #ba68c8, #4fc3f7); }
.wn-hero .btn-ghost{
  border-color: rgba(255,255,255,.15);
  color: rgba(255,255,255,.7);
  -webkit-text-fill-color: rgba(255,255,255,.7);
  background: rgba(255,255,255,.05);
}
.wn-hero .btn-ghost:hover{ background: rgba(255,255,255,.1); border-color: rgba(255,255,255,.25); }

/* ── Version badge ───────────────────────────────────────────── */
.wn-version{
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: 40px;
  padding: 10px 22px;
  border-radius: 999px;
  background: rgba(255,255,255,.06);
  border: 1px solid rgba(255,255,255,.08);
  font-size: 13px;
  color: rgba(255,255,255,.45);
  -webkit-text-fill-color: rgba(255,255,255,.45);
  font-weight: 600;
  position: relative; z-index: 1;
}
.wn-version-dot{
  width: 8px; height: 8px;
  border-radius: 50%;
  background: #80cbc4;
  animation: wn-pulse 2s ease-in-out infinite;
}
@keyframes wn-pulse{
  0%,100%{ opacity: 1; transform: scale(1); }
  50%{ opacity: .5; transform: scale(1.3); }
}

/* ── Section layout (light bg) ───────────────────────────────── */
.wn-section{
  padding: 72px 0;
}
.wn-section.dark{
  background: linear-gradient(180deg, #0d0d1a, #1a1a2e);
  color: #fff;
}
.wn-section + .wn-section{ padding-top: 0; }
.wn-section-eyebrow{
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
}
.wn-section-head{
  text-align: center;
  margin-bottom: 40px;
}
.wn-section-title{
  font-size: clamp(28px, 4vw, 42px);
  font-weight: 900;
  letter-spacing: -0.03em;
  margin: 14px 0 0;
}
.wn-section-sub{
  font-size: 16px;
  color: rgba(11,11,11,.55);
  max-width: 52ch;
  margin: 12px auto 0;
  line-height: 1.55;
}

/* ── Flagship feature cards ──────────────────────────────────── */
.wn-flagship{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
.wn-flag{
  position: relative;
  background: rgba(255,255,255,.85);
  backdrop-filter: blur(16px) saturate(1.5);
  border: 1px solid rgba(206,147,216,.14);
  border-radius: 24px;
  padding: 34px 28px 28px;
  overflow: hidden;
  transition: transform .26s cubic-bezier(.16,1,.3,1), box-shadow .26s ease;
}
.wn-flag:hover{
  transform: translateY(-5px);
  box-shadow: 0 18px 48px rgba(206,147,216,.14), 0 3px 10px rgba(0,0,0,.04);
}
.wn-flag::before{
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  opacity: 0;
  transition: opacity .26s ease;
}
.wn-flag:hover::before{ opacity: 1; }
.wn-flag:nth-child(1)::before{ background: linear-gradient(90deg, #ce93d8, #81d4fa); }
.wn-flag:nth-child(2)::before{ background: linear-gradient(90deg, #81d4fa, #80cbc4); }
.wn-flag:nth-child(3)::before{ background: linear-gradient(90deg, #80cbc4, #a5d6a7); }
.wn-flag:nth-child(4)::before{ background: linear-gradient(90deg, #ffcc80, #f48fb1); }
.wn-flag.wide{
  grid-column: 1 / -1;
}
.wn-flag-ic{
  width: 48px; height: 48px;
  border-radius: 16px;
  display: grid; place-items: center;
  font-size: 22px;
  margin-bottom: 18px;
  transition: transform .25s ease;
}
.wn-flag:hover .wn-flag-ic{ transform: scale(1.1); }
.wn-flag:nth-child(1) .wn-flag-ic{ background: linear-gradient(135deg, rgba(206,147,216,.18), rgba(243,229,245,.2)); }
.wn-flag:nth-child(2) .wn-flag-ic{ background: linear-gradient(135deg, rgba(129,212,250,.18), rgba(179,229,252,.15)); }
.wn-flag:nth-child(3) .wn-flag-ic{ background: linear-gradient(135deg, rgba(128,203,196,.18), rgba(178,223,219,.15)); }
.wn-flag:nth-child(4) .wn-flag-ic{ background: linear-gradient(135deg, rgba(255,204,128,.22), rgba(255,224,178,.16)); }
.wn-flag-title{ font-weight: 900; font-size: 20px; letter-spacing: -0.02em; }
.wn-flag-text{ margin-top: 8px; font-size: 15px; color: rgba(11,11,11,.56); line-height: 1.6; }
.wn-flag-tag{
  display: inline-block;
  margin-top: 14px;
  font-size: 11px;
  font-weight: 750;
  text-transform: uppercase;
  letter-spacing: .12em;
  padding: 4px 12px;
  border-radius: 999px;
  background: linear-gradient(135deg, rgba(206,147,216,.12), rgba(129,212,250,.08));
  color: #7b1fa2;
  -webkit-text-fill-color: #7b1fa2;
}

/* ── Neural grid (3-col feature tiles) ───────────────────────── */
.wn-neural{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
.wn-tile{
  border: 1px solid rgba(206,147,216,.1);
  border-radius: 20px;
  padding: 24px 20px;
  background: linear-gradient(180deg, #fff 0%, rgba(243,229,245,.06) 100%);
  position: relative;
  overflow: hidden;
  transition: transform .24s ease, box-shadow .24s ease, border-color .24s ease;
}
.wn-tile:hover{
  transform: translateY(-4px);
  box-shadow: 0 12px 34px rgba(206,147,216,.12);
  border-color: rgba(206,147,216,.22);
}
.wn-tile-ic{
  width: 40px; height: 40px;
  border-radius: 12px;
  display: grid; place-items: center;
  font-size: 18px;
  margin-bottom: 14px;
  transition: transform .22s ease;
}
.wn-tile:hover .wn-tile-ic{ transform: scale(1.08); }
.wn-tile:nth-child(6n+1) .wn-tile-ic{ background: linear-gradient(135deg, rgba(206,147,216,.18), rgba(243,229,245,.2)); }
.wn-tile:nth-child(6n+2) .wn-tile-ic{ background: linear-gradient(135deg, rgba(129,212,250,.18), rgba(179,229,252,.15)); }
.wn-tile:nth-child(6n+3) .wn-tile-ic{ background: linear-gradient(135deg, rgba(128,203,196,.18), rgba(178,223,219,.15)); }
.wn-tile:nth-child(6n+4) .wn-tile-ic{ background: linear-gradient(135deg, rgba(255,204,128,.22), rgba(255,224,178,.16)); }
.wn-tile:nth-child(6n+5) .wn-tile-ic{ background: linear-gradient(135deg, rgba(244,143,177,.18), rgba(248,187,208,.14)); }
.wn-tile:nth-child(6n+6) .wn-tile-ic{ background: linear-gradient(135deg, rgba(165,214,167,.18), rgba(200,230,201,.15)); }
.wn-tile-title{ font-weight: 850; font-size: 16px; }
.wn-tile-text{ margin-top: 6px; font-size: 13.5px; color: rgba(11,11,11,.52); line-height: 1.5; }

/* ── Changelog timeline ──────────────────────────────────────── */
.wn-log{
  max-width: 680px;
  margin: 0 auto;
}
.wn-entry{
  display: flex;
  gap: 20px;
  padding: 24px 0;
  border-bottom: 1px solid rgba(206,147,216,.08);
}
.wn-entry:last-child{ border-bottom: 0; }
.wn-entry-date{
  min-width: 80px;
  font-size: 13px;
  font-weight: 750;
  color: #7b1fa2;
  -webkit-text-fill-color: #7b1fa2;
  padding-top: 2px;
}
.wn-entry-body{ flex: 1; }
.wn-entry-title{ font-weight: 850; font-size: 17px; }
.wn-entry-text{ margin-top: 6px; font-size: 14.5px; color: rgba(11,11,11,.55); line-height: 1.55; }
.wn-entry-tags{ display: flex; gap: 6px; flex-wrap: wrap; margin-top: 10px; }
.wn-tag{
  font-size: 11px;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 999px;
  letter-spacing: .04em;
}
.wn-tag.ai{ background: rgba(206,147,216,.12); color: #7b1fa2; -webkit-text-fill-color: #7b1fa2; }
.wn-tag.search{ background: rgba(129,212,250,.15); color: #0277bd; -webkit-text-fill-color: #0277bd; }
.wn-tag.tools{ background: rgba(128,203,196,.12); color: #00796b; -webkit-text-fill-color: #00796b; }
.wn-tag.security{ background: rgba(244,143,177,.12); color: #c2185b; -webkit-text-fill-color: #c2185b; }
.wn-tag.ux{ background: rgba(255,204,128,.18); color: #e65100; -webkit-text-fill-color: #e65100; }
.wn-tag.indexing{ background: rgba(165,214,167,.15); color: #2e7d32; -webkit-text-fill-color: #2e7d32; }

/* ── Vision band (dark) ──────────────────────────────────────── */
.wn-vision{
  padding: 72px 0;
  background: linear-gradient(180deg, #0d0d1a 0%, #1a1a2e 100%);
  color: #fff;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.wn-vision::before{
  content: '';
  position: absolute;
  width: 600px; height: 600px;
  border-radius: 50%;
  top: -200px; left: 50%;
  transform: translateX(-50%);
  background: radial-gradient(circle, rgba(206,147,216,.1) 0%, transparent 70%);
  pointer-events: none;
}
.wn-vision-title{
  font-size: clamp(28px, 4vw, 44px);
  font-weight: 900;
  letter-spacing: -0.03em;
  margin: 0;
  position: relative; z-index: 1;
  background: linear-gradient(135deg, #fff 0%, #ce93d8 60%, #81d4fa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.wn-vision-sub{
  margin: 16px auto 0;
  max-width: 52ch;
  font-size: 16px;
  color: rgba(255,255,255,.5);
  -webkit-text-fill-color: rgba(255,255,255,.5);
  line-height: 1.6;
  position: relative; z-index: 1;
}
.wn-vision-grid{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 40px;
  position: relative; z-index: 1;
}
.wn-vcard{
  background: rgba(255,255,255,.04);
  border: 1px solid rgba(255,255,255,.06);
  border-radius: 20px;
  padding: 28px 22px;
  text-align: left;
  transition: transform .24s ease, box-shadow .24s ease, border-color .24s ease;
}
.wn-vcard:hover{
  transform: translateY(-4px);
  border-color: rgba(206,147,216,.2);
  box-shadow: 0 12px 36px rgba(206,147,216,.1);
}
.wn-vcard-ic{
  font-size: 28px;
  margin-bottom: 14px;
}
.wn-vcard-title{
  font-weight: 850;
  font-size: 17px;
  color: #fff;
  -webkit-text-fill-color: #fff;
}
.wn-vcard-text{
  margin-top: 6px;
  font-size: 13.5px;
  color: rgba(255,255,255,.4);
  -webkit-text-fill-color: rgba(255,255,255,.4);
  line-height: 1.5;
}

/* ── CTA band ────────────────────────────────────────────────── */
.wn-cta{
  margin: 0 0 64px;
  border: 1px solid rgba(206,147,216,.14);
  border-radius: 26px;
  background: linear-gradient(135deg, rgba(255,255,255,.94), rgba(243,229,245,.18) 40%, rgba(225,245,254,.12) 100%);
  padding: 40px 36px;
  box-shadow: 0 14px 44px rgba(206,147,216,.1), 0 2px 6px rgba(0,0,0,.03);
  text-align: center;
  position: relative;
  overflow: hidden;
}
.wn-cta::before{
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: linear-gradient(90deg, #f48fb1, #ce93d8, #81d4fa, #80cbc4, #ffcc80);
  opacity: .55;
}
.wn-cta-title{
  font-size: clamp(22px, 3vw, 30px);
  font-weight: 900;
  letter-spacing: -0.02em;
  margin: 0;
}
.wn-cta-sub{
  font-size: 16px;
  color: rgba(11,11,11,.55);
  margin: 10px 0 0;
  line-height: 1.55;
}
.wn-cta-actions{
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 28px;
}

/* ── Responsive ──────────────────────────────────────────────── */
@media (max-width: 900px){
  .wn-flagship{ grid-template-columns: 1fr; }
  .wn-flag.wide{ grid-column: auto; }
  .wn-neural{ grid-template-columns: 1fr 1fr; }
  .wn-vision-grid{ grid-template-columns: 1fr; max-width: 440px; margin-left: auto; margin-right: auto; }
}
@media (max-width: 600px){
  .wn-neural{ grid-template-columns: 1fr; }
  .wn-entry{ flex-direction: column; gap: 6px; }
  .wn-entry-date{ min-width: auto; }
}
</style>

<!-- ════════════════════════════════════════════════════════════════
     HERO — DARK
     ════════════════════════════════════════════════════════════════ -->
<section class="wn-hero">
  <div class="container" data-reveal>
    <div class="wn-eyebrow">🚀 What's new</div>
    <h1 class="wn-hero-title">Intelligence that<br>lives where you do.</h1>
    <p class="wn-hero-sub">
      VaultBook 3.0 brings machine learning, neural search, and adaptive AI — all running locally
      in your browser. No servers. No latency. No compromise. Your workspace now thinks with you.
    </p>
    <div class="wn-hero-actions">
      <a class="btn btn-primary" href="/download/">Download VaultBook 3.0</a>
      <a class="btn btn-ghost" href="/product/">See all features</a>
    </div>
    <div class="wn-version">
      <span class="wn-version-dot"></span>
      VaultBook 3.0 — Released February 2026
    </div>
  </div>
</section>

<!-- ════════════════════════════════════════════════════════════════
     FLAGSHIP AI FEATURES
     ════════════════════════════════════════════════════════════════ -->
<section class="wn-section">
  <div class="container">
    <div class="wn-section-head" data-reveal>
      <div class="wn-section-eyebrow">🧠 AI &amp; Machine Learning</div>
      <h2 class="wn-section-title">Your notes now learn from you</h2>
      <p class="wn-section-sub">Every interaction teaches VaultBook what matters to you — and it remembers, adapts, and surfaces the right thing at the right time.</p>
    </div>

    <div class="wn-flagship" data-reveal>
      <div class="wn-flag">
        <div class="wn-flag-ic">✨</div>
        <div class="wn-flag-title">AI Suggestions Pager</div>
        <div class="wn-flag-text">
          A 4-page adaptive carousel that learns your behavior. Page one predicts what you'll need next based on upcoming scheduled entries and weekday reading patterns across the last 4 weeks. Pages two through four surface recently read entries, recently opened files, and recently used tools — a personalized command center built from your own neural pathways through your library.
        </div>
        <div class="wn-flag-tag">Adaptive ML</div>
      </div>
      <div class="wn-flag">
        <div class="wn-flag-ic">🔎</div>
        <div class="wn-flag-title">Neural QA Search</div>
        <div class="wn-flag-text">
          Ask your library a question in plain English. VaultBook's weighted scoring engine searches across 7 content layers — titles (weight 8), labels (6), inline OCR text (5), body content (4), sections (3), main attachments (2), and section attachments (1) — then ranks results through a multi-field scoring pipeline that gets smarter with every vote.
        </div>
        <div class="wn-flag-tag">Deep NLP</div>
      </div>
      <div class="wn-flag">
        <div class="wn-flag-ic">🔗</div>
        <div class="wn-flag-title">Related Entries with Similarity Learning</div>
        <div class="wn-flag-text">
          When you open any note, VaultBook's contextual similarity engine finds entries you didn't know were connected. Reddit-style upvote/downvote on each pair trains a persistent relevance model — your votes reshape the neural map of your knowledge base over time. The system learns the associations that matter to you, not just keyword overlaps.
        </div>
        <div class="wn-flag-tag">Reinforcement Learning</div>
      </div>
      <div class="wn-flag">
        <div class="wn-flag-ic">📊</div>
        <div class="wn-flag-title">Vote-Based Reranking</div>
        <div class="wn-flag-text">
          Every QA search result can be upvoted (+1M) or downvoted (-1M), persistently stored in the userVotes schema. Over sessions, your feedback creates a personalized relevance layer that sits on top of the scoring engine — turning VaultBook from a search tool into a system that understands how you think.
        </div>
        <div class="wn-flag-tag">Persistent Learning</div>
      </div>
    </div>
  </div>
</section>

<!-- ════════════════════════════════════════════════════════════════
     NEURAL SEARCH & INDEXING
     ════════════════════════════════════════════════════════════════ -->
<section class="wn-section">
  <div class="container">
    <div class="wn-section-head" data-reveal>
      <div class="wn-section-eyebrow">⚡ Deep Document Intelligence</div>
      <h2 class="wn-section-title">Every byte is searchable</h2>
      <p class="wn-section-sub">VaultBook doesn't just store files — it reads them, extracts their content, and weaves them into your searchable knowledge graph.</p>
    </div>

    <div class="wn-neural" data-reveal>
      <div class="wn-tile">
        <div class="wn-tile-ic">📄</div>
        <div class="wn-tile-title">PDF Intelligence</div>
        <div class="wn-tile-text">Text layer extraction via pdf.js, plus OCR of rendered pages for scanned documents. Every PDF becomes searchable instantly.</div>
      </div>
      <div class="wn-tile">
        <div class="wn-tile-ic">📊</div>
        <div class="wn-tile-title">XLSX &amp; PPTX Parsing</div>
        <div class="wn-tile-text">SheetJS extracts spreadsheet cell data, JSZip reads slide text from presentations. Structured content feeds directly into the search index.</div>
      </div>
      <div class="wn-tile">
        <div class="wn-tile-ic">📦</div>
        <div class="wn-tile-title">Archive Crawling</div>
        <div class="wn-tile-text">ZIP files are opened, their text-like inner files indexed, and embedded images run through OCR — all without extracting to disk.</div>
      </div>
      <div class="wn-tile">
        <div class="wn-tile-ic">📧</div>
        <div class="wn-tile-title">Outlook MSG Parsing</div>
        <div class="wn-tile-text">Subject, sender, body text, and nested attachments are extracted and deep-indexed. Your archived emails become part of your knowledge base.</div>
      </div>
      <div class="wn-tile">
        <div class="wn-tile-ic">👁️</div>
        <div class="wn-tile-title">Inline OCR Engine</div>
        <div class="wn-tile-text">Images embedded in entries are automatically OCR'd, cached per-item, and indexed. The top 12 QA results trigger background OCR warm-up for speed.</div>
      </div>
      <div class="wn-tile">
        <div class="wn-tile-ic">🔬</div>
        <div class="wn-tile-title">Cross-Format OCR</div>
        <div class="wn-tile-text">OCR reaches inside DOCX (word/media), XLSX (xl/media), and ZIP archives to extract text from images embedded deep inside compound documents.</div>
      </div>
    </div>
  </div>
</section>

<!-- ════════════════════════════════════════════════════════════════
     TOOLS & WORKFLOW
     ════════════════════════════════════════════════════════════════ -->
<section class="wn-section">
  <div class="container">
    <div class="wn-section-head" data-reveal>
      <div class="wn-section-eyebrow">🛠️ Built-in Tools</div>
      <h2 class="wn-section-title">14+ tools. Zero context-switching.</h2>
      <p class="wn-section-sub">Everything you'd normally open a separate app for — built directly into your workspace. Process, analyze, and create without ever leaving VaultBook.</p>
    </div>

    <div class="wn-neural" data-reveal>
      <div class="wn-tile">
        <div class="wn-tile-ic">📋</div>
        <div class="wn-tile-title">Kanban Board</div>
        <div class="wn-tile-text">Auto-creates columns from your labels and inline #hashtags. Drag-and-drop cards that sync back to your notes in real time.</div>
      </div>
      <div class="wn-tile">
        <div class="wn-tile-ic">📰</div>
        <div class="wn-tile-title">RSS / Atom Reader</div>
        <div class="wn-tile-text">Subscribe to feeds, organize into folders, and pull articles directly into your workspace without leaving VaultBook.</div>
      </div>
      <div class="wn-tile">
        <div class="wn-tile-ic">📑</div>
        <div class="wn-tile-title">PDF Merge, Split &amp; Compress</div>
        <div class="wn-tile-text">Combine multiple PDFs, extract page ranges, or compress scanned documents — all processed locally in the browser.</div>
      </div>
      <div class="wn-tile">
        <div class="wn-tile-ic">🎵</div>
        <div class="wn-tile-title">MP3 Cutter &amp; Joiner</div>
        <div class="wn-tile-text">Trim silence, cut clips, and join audio segments. Perfect for processing voice memos, interviews, and podcast clips.</div>
      </div>
      <div class="wn-tile">
        <div class="wn-tile-ic">📁</div>
        <div class="wn-tile-title">File &amp; Photo Explorer</div>
        <div class="wn-tile-text">Browse attachments by type, entry, or page. Scan entire folders of photos and videos with a visual grid interface.</div>
      </div>
      <div class="wn-tile">
        <div class="wn-tile-ic">📈</div>
        <div class="wn-tile-title">File &amp; Folder Analyzer</div>
        <div class="wn-tile-text">Analyze CSV and TXT data files with instant visualizations. Audit disk space and file sizes across your storage folder.</div>
      </div>
      <div class="wn-tile">
        <div class="wn-tile-ic">🔑</div>
        <div class="wn-tile-title">Password Generator</div>
        <div class="wn-tile-text">Generate cryptographically strong passwords with one click. Copy instantly, no external password tool needed.</div>
      </div>
      <div class="wn-tile">
        <div class="wn-tile-ic">🔗</div>
        <div class="wn-tile-title">Save URL → Entry</div>
        <div class="wn-tile-text">Paste any URL and VaultBook creates a structured note from the web page content — instant web clipping.</div>
      </div>
      <div class="wn-tile">
        <div class="wn-tile-ic">💬</div>
        <div class="wn-tile-title">Threads</div>
        <div class="wn-tile-text">Chat-style notes in a centered overlay. Perfect for brainstorming sessions, quick captures, and conversational note-taking.</div>
      </div>
    </div>
  </div>
</section>

<!-- ════════════════════════════════════════════════════════════════
     VISION — DARK SECTION
     ════════════════════════════════════════════════════════════════ -->
<section class="wn-vision">
  <div class="container" data-reveal>
    <div class="wn-eyebrow">🔮 The road ahead</div>
    <h2 class="wn-vision-title">Where VaultBook is going</h2>
    <p class="wn-vision-sub">Every release pushes the boundary of what a local-first, browser-based workspace can do. Here's what we're building toward.</p>

    <div class="wn-vision-grid">
      <div class="wn-vcard">
        <div class="wn-vcard-ic">🧬</div>
        <div class="wn-vcard-title">Semantic Neural Index</div>
        <div class="wn-vcard-text">Moving beyond keyword matching to true semantic understanding — connecting ideas by meaning, not just shared words, all computed locally on your device.</div>
      </div>
      <div class="wn-vcard">
        <div class="wn-vcard-ic">🌊</div>
        <div class="wn-vcard-title">Adaptive Workflow Engine</div>
        <div class="wn-vcard-text">VaultBook will learn your workflows — which tools you open after which searches, which pages you visit in sequence — and begin anticipating your next move.</div>
      </div>
      <div class="wn-vcard">
        <div class="wn-vcard-ic">⚡</div>
        <div class="wn-vcard-title">Edge ML Acceleration</div>
        <div class="wn-vcard-text">Leveraging WebGPU and WebAssembly to run larger models directly in the browser — faster OCR, richer similarity scoring, and real-time document understanding.</div>
      </div>
    </div>
  </div>
</section>

<!-- ════════════════════════════════════════════════════════════════
     CHANGELOG
     ════════════════════════════════════════════════════════════════ -->
<section class="wn-section">
  <div class="container">
    <div class="wn-section-head" data-reveal>
      <div class="wn-section-eyebrow">📋 Changelog</div>
      <h2 class="wn-section-title">Release history</h2>
      <p class="wn-section-sub">A record of every major milestone from 2020 to now.</p>
    </div>

    <div class="wn-log" data-reveal>

      <div class="wn-entry">
        <div class="wn-entry-date">Feb 2026</div>
        <div class="wn-entry-body">
          <div class="wn-entry-title">VaultBook 3.0</div>
          <div class="wn-entry-text">AI Suggestions pager with personalized 4-page carousel. Timetable and calendar views with day/week layouts. Canvas-rendered analytics dashboards with label, page, and activity charts. 60-day version history. Refined UI with attachment ticker and random note spotlight.</div>
          <div class="wn-entry-tags">
            <span class="wn-tag ai">AI</span>
            <span class="wn-tag tools">Tools</span>
            <span class="wn-tag ux">UX</span>
          </div>
        </div>
      </div>

      <div class="wn-entry">
        <div class="wn-entry-date">2025</div>
        <div class="wn-entry-body">
          <div class="wn-entry-title">Deep Indexing &amp; Pro Tools</div>
          <div class="wn-entry-text">Deep file indexing for XLSX, PPTX, PDF, ZIP, and MSG. Cross-format OCR inside DOCX, XLSX, and archive images. 14+ built-in tools including Kanban, PDF suite, MP3 editor, RSS reader, and file explorers. Multi-tab views with advanced filters.</div>
          <div class="wn-entry-tags">
            <span class="wn-tag indexing">Indexing</span>
            <span class="wn-tag tools">Tools</span>
            <span class="wn-tag search">Search</span>
          </div>
        </div>
      </div>

      <div class="wn-entry">
        <div class="wn-entry-date">2024</div>
        <div class="wn-entry-body">
          <div class="wn-entry-title">Vote-Based Learning &amp; Related Entries</div>
          <div class="wn-entry-text">Related entries with contextual similarity suggestions. Reddit-style persistent vote system for both search results and related entries. Smart label suggestions with content analysis. Attachment type bucketing and file extension grouping.</div>
          <div class="wn-entry-tags">
            <span class="wn-tag ai">AI</span>
            <span class="wn-tag search">Search</span>
          </div>
        </div>
      </div>

      <div class="wn-entry">
        <div class="wn-entry-date">2023</div>
        <div class="wn-entry-body">
          <div class="wn-entry-title">Team Scale-Up &amp; Rich Editor</div>
          <div class="wn-entry-text">Team grew to 50 specialists. Rich text editor with tables, code blocks, callout blocks, H1–H6 headings, font selectors, and case transforms. Sections with sub-entries, each with their own attachments and rich editor. Hierarchical pages with nested notebooks.</div>
          <div class="wn-entry-tags">
            <span class="wn-tag ux">UX</span>
            <span class="wn-tag tools">Tools</span>
          </div>
        </div>
      </div>

      <div class="wn-entry">
        <div class="wn-entry-date">2022</div>
        <div class="wn-entry-body">
          <div class="wn-entry-title">AI Search Goes Live</div>
          <div class="wn-entry-text">Weighted search scoring across 7 content layers. Natural-language QA mode with paginated results. Typeahead search with real-time dropdown. Inline OCR for automatic image text extraction. Query suggestions from search history.</div>
          <div class="wn-entry-tags">
            <span class="wn-tag ai">AI</span>
            <span class="wn-tag search">Search</span>
          </div>
        </div>
      </div>

      <div class="wn-entry">
        <div class="wn-entry-date">2021</div>
        <div class="wn-entry-body">
          <div class="wn-entry-title">Encryption &amp; Storage Layer</div>
          <div class="wn-entry-text">AES-256-GCM per-entry encryption with PBKDF2 key derivation at 100,000 iterations. File System Access API integration with repository.json and sidecar .md files. Lock screen with full-page blur overlay. Autosave with dirty-flag debouncing.</div>
          <div class="wn-entry-tags">
            <span class="wn-tag security">Security</span>
            <span class="wn-tag ux">UX</span>
          </div>
        </div>
      </div>

      <div class="wn-entry">
        <div class="wn-entry-date">2020</div>
        <div class="wn-entry-body">
          <div class="wn-entry-title">The First Commit</div>
          <div class="wn-entry-text">VaultBook begins as a single HTML file — a personal tool to organize research notes offline. Local-first storage, zero dependencies, and the principle that your data belongs to you.</div>
          <div class="wn-entry-tags">
            <span class="wn-tag ux">UX</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ════════════════════════════════════════════════════════════════
     BOTTOM CTA
     ════════════════════════════════════════════════════════════════ -->
<section class="wn-section" style="padding-bottom: 0;">
  <div class="container">
    <div class="wn-cta" data-reveal>
      <h2 class="wn-cta-title">The smartest workspace that never phones home.</h2>
      <p class="wn-cta-sub">All this intelligence. All running locally. All yours.</p>
      <div class="wn-cta-actions">
        <a class="btn btn-primary" href="/download/">Download VaultBook 3.0</a>
        <a class="btn btn-ghost" href="/pricing/">See pricing</a>
        <a class="btn btn-ghost" href="https://t.me/VaultBook" target="_blank" rel="noopener">Buy on Telegram</a>
      </div>
    </div>
  </div>
</section>
