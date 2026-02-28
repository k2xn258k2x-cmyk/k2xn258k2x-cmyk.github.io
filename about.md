---
layout: default
title: About
description: VaultBook is built by a 50-person team of AI, data, and product professionals in Chicago. Learn our story, mission, and what drives us.
body_class: about-page
permalink: /about/
---

<style>
/* ── About hero ──────────────────────────────────────────────── */
.ab-hero{
  padding: 80px 0 64px;
  text-align: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, #faf8ff 0%, #f3f0fa 42%, #fff 100%);
}
.ab-hero::before{
  content: '';
  position: absolute;
  width: 700px; height: 700px;
  border-radius: 50%;
  top: -280px; left: 50%;
  transform: translateX(-50%);
  background: radial-gradient(circle, rgba(206,147,216,.1) 0%, rgba(129,212,250,.06) 50%, transparent 72%);
  pointer-events: none;
}
.ab-hero::after{
  content: '';
  position: absolute;
  width: 380px; height: 380px;
  border-radius: 50%;
  bottom: -140px; left: -80px;
  background: radial-gradient(circle, rgba(128,203,196,.07) 0%, transparent 70%);
  pointer-events: none;
}
.ab-hero .eyebrow{ margin-bottom: 14px; position: relative; z-index:1; }
.ab-hero-title{
  font-size: clamp(36px, 5.2vw, 56px);
  font-weight: 900;
  letter-spacing: -0.035em;
  line-height: 1.06;
  margin: 0;
  position: relative; z-index:1;
}
.ab-hero-sub{
  margin: 20px auto 0;
  max-width: 54ch;
  font-size: 17px;
  color: rgba(11,11,11,.62);
  line-height: 1.6;
  position: relative; z-index:1;
}

/* ── Story / narrative blocks ────────────────────────────────── */
.ab-narrative{
  max-width: 660px;
  margin: 0 auto;
}
.ab-narrative p{
  font-size: 16px;
  color: rgba(11,11,11,.72);
  line-height: 1.7;
  margin: 0 0 18px;
}
.ab-narrative p:last-child{ margin-bottom: 0; }
.ab-pullquote{
  margin: 36px 0;
  padding: 28px 32px;
  border-radius: 20px;
  background: linear-gradient(135deg, rgba(243,229,245,.18), rgba(225,245,254,.12));
  border-left: 4px solid;
  border-image: linear-gradient(180deg, #ce93d8, #81d4fa) 1;
  position: relative;
}
.ab-pullquote p{
  font-size: 19px;
  font-weight: 700;
  color: rgba(11,11,11,.78);
  line-height: 1.5;
  margin: 0;
  letter-spacing: -0.01em;
}
.ab-pullquote-attr{
  margin-top: 10px;
  font-size: 13px;
  color: rgba(11,11,11,.42);
  font-weight: 600;
}

/* ── Values grid ─────────────────────────────────────────────── */
.ab-values{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 32px;
}
.ab-val{
  background: rgba(255,255,255,.75);
  border: 1px solid rgba(206,147,216,.1);
  border-radius: 20px;
  padding: 26px 22px;
  position: relative;
  overflow: hidden;
  transition: transform .24s ease, box-shadow .24s ease;
}
.ab-val::before{
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  border-radius: 20px 20px 0 0;
  opacity: 0;
  transition: opacity .24s ease;
}
.ab-val:hover{
  transform: translateY(-3px);
  box-shadow: 0 12px 34px rgba(206,147,216,.1);
}
.ab-val:hover::before{ opacity: 1; }
.ab-val:nth-child(1)::before{ background: linear-gradient(90deg, #ce93d8, #81d4fa); }
.ab-val:nth-child(2)::before{ background: linear-gradient(90deg, #81d4fa, #80cbc4); }
.ab-val:nth-child(3)::before{ background: linear-gradient(90deg, #80cbc4, #ffcc80); }
.ab-val:nth-child(4)::before{ background: linear-gradient(90deg, #ffcc80, #f48fb1); }
.ab-val:nth-child(5)::before{ background: linear-gradient(90deg, #f48fb1, #ce93d8); }
.ab-val:nth-child(6)::before{ background: linear-gradient(90deg, #a5d6a7, #81d4fa); }
.ab-val-ic{
  width: 42px; height: 42px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  font-size: 20px;
  margin-bottom: 14px;
  transition: transform .22s ease;
}
.ab-val:hover .ab-val-ic{ transform: scale(1.1); }
.ab-val:nth-child(1) .ab-val-ic{ background: linear-gradient(135deg, rgba(206,147,216,.18), rgba(243,229,245,.2)); }
.ab-val:nth-child(2) .ab-val-ic{ background: linear-gradient(135deg, rgba(129,212,250,.18), rgba(179,229,252,.15)); }
.ab-val:nth-child(3) .ab-val-ic{ background: linear-gradient(135deg, rgba(128,203,196,.18), rgba(178,223,219,.15)); }
.ab-val:nth-child(4) .ab-val-ic{ background: linear-gradient(135deg, rgba(255,204,128,.22), rgba(255,224,178,.16)); }
.ab-val:nth-child(5) .ab-val-ic{ background: linear-gradient(135deg, rgba(244,143,177,.18), rgba(248,187,208,.14)); }
.ab-val:nth-child(6) .ab-val-ic{ background: linear-gradient(135deg, rgba(165,214,167,.18), rgba(200,230,201,.15)); }
.ab-val-title{ font-weight: 850; font-size: 17px; }
.ab-val-text{ margin-top: 6px; font-size: 14px; color: rgba(11,11,11,.56); line-height: 1.55; }

/* ── Numbers strip ───────────────────────────────────────────── */
.ab-nums{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-top: 32px;
}
.ab-num{
  text-align: center;
  padding: 24px 14px;
  background: rgba(255,255,255,.65);
  border: 1px solid rgba(206,147,216,.1);
  border-radius: 18px;
  transition: transform .2s ease, box-shadow .2s ease;
}
.ab-num:hover{
  transform: translateY(-2px);
  box-shadow: 0 8px 22px rgba(206,147,216,.1);
}
.ab-num-val{
  font-size: 32px;
  font-weight: 900;
  letter-spacing: -0.03em;
  background: linear-gradient(135deg, #7b1fa2, #0288d1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.ab-num-label{
  margin-top: 4px;
  font-size: 13px;
  color: rgba(11,11,11,.48);
  font-weight: 650;
}

/* ── Team section ────────────────────────────────────────────── */
.ab-team-intro{
  max-width: 580px;
  margin: 0 auto 32px;
  text-align: center;
}
.ab-team-intro p{
  font-size: 15.5px;
  color: rgba(11,11,11,.6);
  line-height: 1.6;
}
.ab-team-grid{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-top: 28px;
}
.ab-member{
  background: rgba(255,255,255,.6);
  border: 1px solid rgba(206,147,216,.08);
  border-radius: 16px;
  padding: 18px 16px;
  transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
}
.ab-member:hover{
  transform: translateY(-3px);
  box-shadow: 0 8px 22px rgba(206,147,216,.1);
  border-color: rgba(206,147,216,.2);
}
.ab-member-role{
  font-size: 13.5px;
  font-weight: 800;
  color: rgba(11,11,11,.76);
  line-height: 1.3;
}
.ab-member-desc{
  font-size: 12.5px;
  color: rgba(11,11,11,.46);
  margin-top: 5px;
  line-height: 1.45;
}

/* ── Chicago banner ──────────────────────────────────────────── */
.ab-chicago{
  margin-top: 36px;
  padding: 32px 28px;
  border-radius: 22px;
  background: linear-gradient(135deg, rgba(243,229,245,.16), rgba(225,245,254,.1));
  border: 1px solid rgba(206,147,216,.12);
  display: flex;
  align-items: center;
  gap: 28px;
  position: relative;
  overflow: hidden;
}
.ab-chicago::before{
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: linear-gradient(90deg, #81d4fa, #ce93d8, #ffcc80, #80cbc4);
  opacity: .5;
}
.ab-chi-ic{
  font-size: 48px;
  flex-shrink: 0;
}
.ab-chi-body{ flex: 1; }
.ab-chi-title{ font-weight: 900; font-size: 20px; letter-spacing: -0.02em; }
.ab-chi-text{ margin-top: 6px; font-size: 14.5px; color: rgba(11,11,11,.55); line-height: 1.55; }

/* ── Timeline ────────────────────────────────────────────────── */
.ab-timeline{
  max-width: 580px;
  margin: 32px auto 0;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0;
}
.ab-timeline::before{
  content: '';
  position: absolute;
  left: 22px;
  top: 26px; bottom: 26px;
  width: 2px;
  background: linear-gradient(180deg, rgba(206,147,216,.25), rgba(129,212,250,.25), rgba(128,203,196,.2), rgba(255,204,128,.2));
  border-radius: 2px;
  z-index: 0;
}
.ab-tl{
  display: flex;
  gap: 18px;
  align-items: flex-start;
  padding: 16px 0;
  position: relative;
}
.ab-tl-dot{
  width: 44px; height: 44px;
  min-width: 44px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  font-weight: 900;
  font-size: 12px;
  letter-spacing: .04em;
  position: relative; z-index: 2;
  transition: transform .2s ease;
  box-shadow: 0 0 0 4px #fff;
  background-color: #fff;
}
.ab-tl:hover .ab-tl-dot{ transform: scale(1.1); }
.ab-tl:nth-child(1) .ab-tl-dot{ background-image: linear-gradient(135deg, rgba(206,147,216,.22), rgba(225,190,231,.15)); color: #7b1fa2; }
.ab-tl:nth-child(2) .ab-tl-dot{ background-image: linear-gradient(135deg, rgba(129,212,250,.22), rgba(179,229,252,.15)); color: #0277bd; }
.ab-tl:nth-child(3) .ab-tl-dot{ background-image: linear-gradient(135deg, rgba(128,203,196,.22), rgba(178,223,219,.15)); color: #00796b; }
.ab-tl:nth-child(4) .ab-tl-dot{ background-image: linear-gradient(135deg, rgba(255,204,128,.28), rgba(255,224,178,.18)); color: #e65100; }
.ab-tl:nth-child(5) .ab-tl-dot{ background-image: linear-gradient(135deg, rgba(244,143,177,.2), rgba(248,187,208,.15)); color: #c2185b; }
.ab-tl:nth-child(6) .ab-tl-dot{ background-image: linear-gradient(135deg, rgba(165,214,167,.22), rgba(200,230,201,.15)); color: #2e7d32; }
.ab-tl:nth-child(7) .ab-tl-dot{ background-image: linear-gradient(135deg, rgba(179,157,219,.22), rgba(209,196,233,.15)); color: #512da8; }
.ab-tl-body{ flex: 1; }
.ab-tl-title{ font-weight: 850; font-size: 16px; }
.ab-tl-text{ margin-top: 4px; font-size: 14px; color: rgba(11,11,11,.55); line-height: 1.5; }

/* ── Responsive ──────────────────────────────────────────────── */
@media (max-width: 900px){
  .ab-values{ grid-template-columns: 1fr 1fr; }
  .ab-nums{ grid-template-columns: 1fr 1fr; }
  .ab-team-grid{ grid-template-columns: repeat(2, 1fr); }
  .ab-chicago{ flex-direction: column; text-align: center; gap: 16px; }
}
@media (max-width: 600px){
  .ab-values{ grid-template-columns: 1fr; }
  .ab-team-grid{ grid-template-columns: 1fr; }
  .ab-pullquote{ padding: 22px 20px; }
  .ab-pullquote p{ font-size: 17px; }
}
@media (max-width: 440px){
  .ab-team-grid{ grid-template-columns: 1fr; }
}
</style>

<!-- ━━━ HERO ━━━ -->
<section class="ab-hero">
  <div class="container" data-reveal>
    <div class="eyebrow">ABOUT VAULTBOOK</div>
    <h1 class="ab-hero-title">We believe your notes<br>belong to you.</h1>
    <p class="ab-hero-sub">
      VaultBook is built by a team of 50 AI and data professionals in Chicago
      who think the best software runs on your device, respects your privacy,
      and gets out of your way.
    </p>
  </div>
</section>

<!-- ━━━ OUR STORY ━━━ -->
<section class="section">
  <div class="container">
    <header class="section-head" data-reveal>
      <h2 class="h2">The story</h2>
    </header>

    <div class="ab-narrative" data-reveal>
      <p>
        VaultBook started with a frustration that most knowledge workers share: too many tools, too many
        tabs, and not a single place where notes, files, and research could live together — searchable,
        private, and fast. Every solution we tried either locked data in a cloud we didn't control,
        charged a recurring subscription for basic features, or collapsed under the weight of a
        growing library.
      </p>
      <p>
        So we built the tool we wanted. A workspace that ships as a single HTML file, stores everything
        in a folder you choose, runs entirely offline, and packs in the intelligence — weighted search,
        OCR, related entries, and AI suggestions — that makes a large library usable instead of
        overwhelming. No servers, no accounts, no compromises.
      </p>

      <div class="ab-pullquote">
        <p>We wanted a workspace smart enough to surface what matters, private enough to trust
        with everything, and simple enough to ship in one file.</p>
        <div class="ab-pullquote-attr">— The VaultBook founding team, Chicago 2020</div>
      </div>

      <p>
        Today VaultBook is used by researchers, engineers, analysts, legal teams, clinicians,
        journalists, and students — anyone who needs a serious workspace that respects their
        data and rewards organization. Our team of 50 designs, builds, and ships every feature
        from our headquarters in Chicago.
      </p>
    </div>
  </div>
</section>

<!-- ━━━ VALUES ━━━ -->
<section class="section tint">
  <div class="container">
    <header class="section-head" data-reveal>
      <h2 class="h2">What we believe</h2>
      <p class="muted">Six principles that shape every decision we make.</p>
    </header>

    <div class="ab-values" data-reveal>
      <div class="ab-val">
        <div class="ab-val-ic">🔒</div>
        <div class="ab-val-title">Privacy by architecture</div>
        <div class="ab-val-text">Your data never leaves your device. We don't have servers to breach, accounts to compromise, or telemetry to leak. Privacy isn't a policy — it's the design.</div>
      </div>
      <div class="ab-val">
        <div class="ab-val-ic">⚡</div>
        <div class="ab-val-title">Offline first, always</div>
        <div class="ab-val-text">VaultBook works without Wi-Fi, without a login, and without a backend. If your browser can open an HTML file, VaultBook runs. Period.</div>
      </div>
      <div class="ab-val">
        <div class="ab-val-ic">🧠</div>
        <div class="ab-val-title">Intelligence, locally</div>
        <div class="ab-val-text">AI suggestions, weighted search, OCR, and vote-based learning all run in the browser. Smart doesn't have to mean connected.</div>
      </div>
      <div class="ab-val">
        <div class="ab-val-ic">🎯</div>
        <div class="ab-val-title">Ship substance, not features</div>
        <div class="ab-val-text">We don't chase feature counts. Every capability earns its place by solving a real problem for real workflows.</div>
      </div>
      <div class="ab-val">
        <div class="ab-val-ic">🤝</div>
        <div class="ab-val-title">Respect the user</div>
        <div class="ab-val-text">No dark patterns, no upsell pop-ups, no artificial limits on your data. We build software we'd want to use ourselves.</div>
      </div>
      <div class="ab-val">
        <div class="ab-val-ic">📦</div>
        <div class="ab-val-title">Portable and transparent</div>
        <div class="ab-val-text">Your notes are stored as plain JSON and Markdown files in a folder you control. No lock-in, no proprietary formats, no migration headaches.</div>
      </div>
    </div>
  </div>
</section>

<!-- ━━━ BY THE NUMBERS ━━━ -->
<section class="section">
  <div class="container">
    <header class="section-head" data-reveal>
      <h2 class="h2">VaultBook by the numbers</h2>
    </header>

    <div class="ab-nums" data-reveal>
      <div class="ab-num">
        <div class="ab-num-val">50</div>
        <div class="ab-num-label">Team members</div>
      </div>
      <div class="ab-num">
        <div class="ab-num-val">1</div>
        <div class="ab-num-label">Headquarters — Chicago</div>
      </div>
      <div class="ab-num">
        <div class="ab-num-val">12+</div>
        <div class="ab-num-label">Built-in tools</div>
      </div>
      <div class="ab-num">
        <div class="ab-num-val">0</div>
        <div class="ab-num-label">Cloud dependencies</div>
      </div>
    </div>
  </div>
</section>

<!-- ━━━ TEAM ━━━ -->
<section class="section tint">
  <div class="container">
    <header class="section-head" data-reveal>
      <h2 class="h2">The team behind VaultBook</h2>
      <p class="muted">50 specialists — here's what each one builds inside VaultBook.</p>
    </header>

    <div class="ab-team-intro" data-reveal>
      <p>
        Our team brings together deep expertise in machine learning, natural language processing,
        data engineering, information security, and product design. We hire people who care
        about craft, ship fast, and believe that great software should disappear into the workflow.
      </p>
    </div>

    <div class="ab-team-grid" data-reveal>
      <div class="ab-member"><div class="ab-member-role">Principal ML Engineer</div><div class="ab-member-desc">Architects the weighted scoring system behind QA search — titles at weight 8, labels at 6, OCR text at 5, body at 4.</div></div>
      <div class="ab-member"><div class="ab-member-role">NLP Research Lead</div><div class="ab-member-desc">Designs the natural-language query pipeline that lets users ask questions across their entire library in plain English.</div></div>
      <div class="ab-member"><div class="ab-member-role">Data Platform Architect</div><div class="ab-member-desc">Built the File System Access API layer — repository.json, sidecar .md files, and the attachment index manifest.</div></div>
      <div class="ab-member"><div class="ab-member-role">Sr. Search Engineer</div><div class="ab-member-desc">Implements typeahead search, query history suggestions, and the warm-up system that pre-loads text for top 12 results.</div></div>
      <div class="ab-member"><div class="ab-member-role">Computer Vision Engineer</div><div class="ab-member-desc">Owns inline OCR — automatic text extraction from images embedded in entries, cached per-item for instant search.</div></div>
      <div class="ab-member"><div class="ab-member-role">Sr. Data Scientist</div><div class="ab-member-desc">Tunes the personalized relevance distribution in the AI Suggestions pager, learning patterns from reading history.</div></div>
      <div class="ab-member"><div class="ab-member-role">Information Security Lead</div><div class="ab-member-desc">Designed AES-256-GCM per-entry encryption with PBKDF2 key derivation at 100,000 iterations and random salt/IV per encrypt.</div></div>
      <div class="ab-member"><div class="ab-member-role">ML Infrastructure Engineer</div><div class="ab-member-desc">Runs all AI scoring and similarity calculations client-side in the browser — zero server calls, zero data leakage.</div></div>
      <div class="ab-member"><div class="ab-member-role">Cryptography Engineer</div><div class="ab-member-desc">Implements the session password cache, lock screen blur overlay, and per-entry decryption held in memory only.</div></div>
      <div class="ab-member"><div class="ab-member-role">Data Engineering Lead</div><div class="ab-member-desc">Built the deep indexing pipeline — text extraction from XLSX, PPTX, PDF, ZIP, and MSG files for search.</div></div>
      <div class="ab-member"><div class="ab-member-role">Recommendation Systems</div><div class="ab-member-desc">Powers Related Entries — contextual similarity suggestions with Reddit-style upvote/downvote to train relevance over time.</div></div>
      <div class="ab-member"><div class="ab-member-role">Sr. Frontend Engineer</div><div class="ab-member-desc">Builds the rich text editor — tables, code blocks, callout blocks, case transforms, headings H1–H6, inline images.</div></div>
      <div class="ab-member"><div class="ab-member-role">AI Product Manager</div><div class="ab-member-desc">Shapes the 4-page AI Suggestions carousel: upcoming scheduled entries, weekday reading patterns, recent files, recent tools.</div></div>
      <div class="ab-member"><div class="ab-member-role">Applied AI Researcher</div><div class="ab-member-desc">Develops vote-based learning — persistent upvote/downvote scores that influence search result and related entry ordering.</div></div>
      <div class="ab-member"><div class="ab-member-role">Knowledge Graph Engineer</div><div class="ab-member-desc">Maps relationships between entries via labels, hashtags, and page paths to power Kanban Board auto-bucketing.</div></div>
      <div class="ab-member"><div class="ab-member-role">Data Quality Lead</div><div class="ab-member-desc">Maintains the attachment reindex system and file integrity checks across the /attachments directory and index.txt manifest.</div></div>
      <div class="ab-member"><div class="ab-member-role">MLOps Engineer</div><div class="ab-member-desc">Optimizes client-side model loading so AI Suggestions, QA search, and OCR run smoothly even on modest hardware.</div></div>
      <div class="ab-member"><div class="ab-member-role">OCR &amp; Document AI</div><div class="ab-member-desc">Extracts text from images inside DOCX, XLSX, ZIP archives, and renders scanned PDF pages for full searchability.</div></div>
      <div class="ab-member"><div class="ab-member-role">Embedding Systems Engineer</div><div class="ab-member-desc">Generates and indexes content embeddings that drive similarity scoring for the Related Entries feature.</div></div>
      <div class="ab-member"><div class="ab-member-role">Ranking &amp; Relevance</div><div class="ab-member-desc">Tunes the multi-field scoring weights and vote-based reranking that float the best QA results to the top.</div></div>
      <div class="ab-member"><div class="ab-member-role">Sr. Data Analyst</div><div class="ab-member-desc">Built the analytics dashboard — entry counts, storage metrics, label utilization charts, and 14-day activity graphs.</div></div>
      <div class="ab-member"><div class="ab-member-role">Backend Engineer</div><div class="ab-member-desc">Implements the save system — autosave with dirty flags, debouncing, concurrent write guards, and sync status badges.</div></div>
      <div class="ab-member"><div class="ab-member-role">UX Research Lead</div><div class="ab-member-desc">Runs usability studies that shaped the sidebar time tabs — Recent, Due, Expiring, and Tools quick-access panels.</div></div>
      <div class="ab-member"><div class="ab-member-role">Performance Engineer</div><div class="ab-member-desc">Optimizes pagination, lazy attachment loading, and background OCR warm-up to keep large libraries responsive.</div></div>
      <div class="ab-member"><div class="ab-member-role">AI Ethics &amp; Compliance</div><div class="ab-member-desc">Ensures all AI features run locally with zero telemetry — no usage data, no model training on user content, ever.</div></div>
      <div class="ab-member"><div class="ab-member-role">Data Pipeline Engineer</div><div class="ab-member-desc">Handles the background attachment text extraction pipeline that indexes content from text-based files and images.</div></div>
      <div class="ab-member"><div class="ab-member-role">Full-Stack Engineer</div><div class="ab-member-desc">Ships the built-in tools — File Analyzer, PDF Merge &amp; Split, MP3 Cutter, Password Generator, and Folder Analyzer.</div></div>
      <div class="ab-member"><div class="ab-member-role">Semantic Search Specialist</div><div class="ab-member-desc">Develops smart label suggestions — content analysis that recommends relevant tags with pastel-styled suggestion chips.</div></div>
      <div class="ab-member"><div class="ab-member-role">Technical Writer</div><div class="ab-member-desc">Writes the storage tutorial, update banners, FAQ, and every tooltip that guides first-time users through VaultBook.</div></div>
      <div class="ab-member"><div class="ab-member-role">QA &amp; Test Automation</div><div class="ab-member-desc">Tests across Chrome, Edge, Arc, and Brave on Mac, Windows, and Linux — every release, every platform, every time.</div></div>
      <div class="ab-member"><div class="ab-member-role">Product Designer</div><div class="ab-member-desc">Designed the frosted-glass UI, sidebar toggle, floating action button, and the responsive layout that stacks at 900px.</div></div>
      <div class="ab-member"><div class="ab-member-role">Data Governance Analyst</div><div class="ab-member-desc">Defines the data model — items, pages, sections, labels, pagePaths, and the userVotes schema for persistent learning.</div></div>
      <div class="ab-member"><div class="ab-member-role">Analytics Engineer</div><div class="ab-member-desc">Builds the canvas-rendered charts — label pie charts, page utilization, monthly activity, and attachment type breakdowns.</div></div>
      <div class="ab-member"><div class="ab-member-role">AI Training Specialist</div><div class="ab-member-desc">Curates the vote-based feedback loop where upvotes (+1M) and downvotes (-1M) persistently reshape search ordering.</div></div>
      <div class="ab-member"><div class="ab-member-role">DevOps Engineer</div><div class="ab-member-desc">Manages the build pipeline that compiles VaultBook into a single deployable HTML file with zero external dependencies.</div></div>
      <div class="ab-member"><div class="ab-member-role">Annotation &amp; Labeling Lead</div><div class="ab-member-desc">Develops the color-coded label system, inline hashtag parsing, and the multi-select tag interface in the edit modal.</div></div>
      <div class="ab-member"><div class="ab-member-role">Deep Learning Engineer</div><div class="ab-member-desc">Trains the models behind contextual Related Entries similarity — the engine that surfaces notes you didn't know you needed.</div></div>
      <div class="ab-member"><div class="ab-member-role">Privacy Engineer</div><div class="ab-member-desc">Audits every code path to ensure zero network calls — no analytics beacons, no font CDNs, no external requests of any kind.</div></div>
      <div class="ab-member"><div class="ab-member-role">Data Visualization Lead</div><div class="ab-member-desc">Designs the strength metric pills, expandable analytics details, and the file type breakdown chips in the analytics panel.</div></div>
      <div class="ab-member"><div class="ab-member-role">Interaction Designer</div><div class="ab-member-desc">Crafts the micro-interactions — smooth transitions, hover states, close confirmation dialogs, and accordion section UX.</div></div>
      <div class="ab-member"><div class="ab-member-role">Feature Extraction Engineer</div><div class="ab-member-desc">Parses structured content from PPTX slides via JSZip and XLSX sheets via SheetJS for deep searchable indexing.</div></div>
      <div class="ab-member"><div class="ab-member-role">ML Research Scientist</div><div class="ab-member-desc">Researches and improves the personalized relevance distribution that powers the AI Suggestions reading patterns.</div></div>
      <div class="ab-member"><div class="ab-member-role">Cloud-to-Edge Specialist</div><div class="ab-member-desc">Ensures every AI and search feature runs entirely in-browser — proving that cloud-grade intelligence works at the edge.</div></div>
      <div class="ab-member"><div class="ab-member-role">Accessibility Engineer</div><div class="ab-member-desc">Makes VaultBook keyboard-navigable and screen-reader friendly — ARIA labels, focus states, and sr-only utility classes.</div></div>
      <div class="ab-member"><div class="ab-member-role">Content Strategist</div><div class="ab-member-desc">Shapes the Threads tool, RSS Reader folder structure, and Save URL → Entry workflow that turns web pages into notes.</div></div>
    </div>

    <div class="ab-chicago" data-reveal>
      <div class="ab-chi-ic">🏙️</div>
      <div class="ab-chi-body">
        <div class="ab-chi-title">Made in Chicago</div>
        <div class="ab-chi-text">
          Our entire team works from a single office in Chicago's West Loop. We chose Chicago for its deep
          talent pool in AI and data science, its central timezone that reaches both coasts, and a
          tech community that values shipping real products over hype. From the 16th floor, we can
          see the river — and we like to think VaultBook reflects the city: practical, ambitious, built to last.
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ━━━ JOURNEY ━━━ -->
<section class="section">
  <div class="container">
    <header class="section-head" data-reveal>
      <h2 class="h2">Our journey</h2>
      <p class="muted">Key moments that shaped VaultBook.</p>
    </header>

    <div class="ab-timeline" data-reveal>
      <div class="ab-tl">
        <div class="ab-tl-dot">2020</div>
        <div class="ab-tl-body">
          <div class="ab-tl-title">The first commit</div>
          <div class="ab-tl-text">VaultBook started as a personal tool — a single HTML file to organize research notes offline. The core concepts of local-first storage and single-file deployment were born here.</div>
        </div>
      </div>
      <div class="ab-tl">
        <div class="ab-tl-dot">2021</div>
        <div class="ab-tl-body">
          <div class="ab-tl-title">Rich editing &amp; encryption</div>
          <div class="ab-tl-text">The rich text editor, per-entry AES-256-GCM encryption, hierarchical pages, and the File System Access API storage layer turned VaultBook into a real workspace.</div>
        </div>
      </div>
      <div class="ab-tl">
        <div class="ab-tl-dot">2022</div>
        <div class="ab-tl-body">
          <div class="ab-tl-title">AI search goes live</div>
          <div class="ab-tl-text">Weighted search scoring, QA mode, and vote-based reranking turned VaultBook from a note-taker into a searchable knowledge base. OCR followed shortly after.</div>
        </div>
      </div>
      <div class="ab-tl">
        <div class="ab-tl-dot">2023</div>
        <div class="ab-tl-body">
          <div class="ab-tl-title">Team grows to 50</div>
          <div class="ab-tl-text">We hired across AI research, data engineering, security, and design. The Chicago office became home to a team that ships features weekly.</div>
        </div>
      </div>
      <div class="ab-tl">
        <div class="ab-tl-dot">2024</div>
        <div class="ab-tl-body">
          <div class="ab-tl-title">12+ built-in tools</div>
          <div class="ab-tl-text">Kanban, PDF tools, RSS reader, file analyzers, media explorer, and more — all built directly into VaultBook so users never need to leave the workspace.</div>
        </div>
      </div>
      <div class="ab-tl">
        <div class="ab-tl-dot">2025</div>
        <div class="ab-tl-body">
          <div class="ab-tl-title">Deep indexing &amp; version history</div>
          <div class="ab-tl-text">Pro gained deep file indexing for XLSX, PPTX, PDF, ZIP, and MSG files, OCR inside documents and archives, and 60-day version history with per-entry snapshots.</div>
        </div>
      </div>
      <div class="ab-tl">
        <div class="ab-tl-dot">2026</div>
        <div class="ab-tl-body">
          <div class="ab-tl-title">VaultBook 3.0</div>
          <div class="ab-tl-text">The latest release brings the AI Suggestions pager, timetable views, analytics dashboards, version history, and a refined UI — our most ambitious update yet.</div>
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
        <div class="cta-title">Come build with us</div>
        <div class="muted">Try VaultBook, or reach out if you'd like to learn more about the team.</div>
      </div>
      <div class="cta-actions">
        <a class="btn btn-primary" href="{{ '/get-started/' | relative_url }}">Get started</a>
        <a class="btn btn-ghost" href="{{ '/contact/' | relative_url }}">Get in touch</a>
      </div>
    </div>
  </div>
</section>
