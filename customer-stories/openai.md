---
layout: default
title: "OpenAI × VaultBook — How a research team made every decision searchable"
description: "OpenAI's research team uses VaultBook to centralize notes, model documentation, and experiment decisions into one searchable, encrypted, offline-first workspace."
body_class: cs-openai-page
permalink: /customer-stories/openai/
---

<style>
/* ── CS Hero ─────────────────────────────────────────────────── */
.cs-hero{
  padding:80px 0 60px;
  text-align:center;
  position:relative;
  overflow:hidden;
  background:linear-gradient(180deg,#faf8ff 0%,#f3f0fa 42%,#fff 100%);
}
.cs-hero::before{
  content:'';position:absolute;
  width:700px;height:700px;border-radius:50%;
  top:-280px;left:50%;transform:translateX(-50%);
  background:radial-gradient(circle,rgba(206,147,216,.1) 0%,rgba(129,212,250,.06) 50%,transparent 72%);
  pointer-events:none;
}
.cs-hero::after{
  content:'';position:absolute;
  width:380px;height:380px;border-radius:50%;
  bottom:-140px;right:-80px;
  background:radial-gradient(circle,rgba(128,203,196,.07) 0%,transparent 70%);
  pointer-events:none;
}
.cs-hero .eyebrow{margin-bottom:14px;position:relative;z-index:1}
.cs-hero-title{
  font-size:clamp(34px,5vw,54px);font-weight:900;
  letter-spacing:-.035em;line-height:1.08;margin:0;
  position:relative;z-index:1;
}
.cs-hero-sub{
  margin:20px auto 0;max-width:56ch;
  font-size:17px;color:rgba(11,11,11,.62);line-height:1.6;
  position:relative;z-index:1;
}
.cs-hero-company{
  display:inline-flex;align-items:center;gap:10px;
  margin-top:28px;position:relative;z-index:1;
  font-size:14px;font-weight:700;color:rgba(11,11,11,.5);
}
.cs-hero-logo{
  width:44px;height:44px;border-radius:14px;
  display:grid;place-items:center;font-size:22px;
  background:linear-gradient(135deg,rgba(206,147,216,.18),rgba(243,229,245,.2));
}
.cs-hero-stars{
  color:#f4a261;font-size:15px;letter-spacing:2px;margin-top:8px;
  position:relative;z-index:1;
}

/* ── Stats ────────────────────────────────────────────────────── */
.cs-stats{
  display:grid;grid-template-columns:repeat(4,1fr);
  gap:14px;margin-top:44px;position:relative;z-index:1;
}
.cs-stat{
  text-align:center;padding:22px 12px;
  background:rgba(255,255,255,.7);border:1px solid rgba(206,147,216,.1);
  border-radius:16px;transition:transform .2s ease,box-shadow .2s ease;
}
.cs-stat:hover{transform:translateY(-2px);box-shadow:0 8px 22px rgba(206,147,216,.1)}
.cs-stat-val{
  font-size:30px;font-weight:900;letter-spacing:-.03em;
  background:linear-gradient(135deg,#7b1fa2,#0288d1);
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
}
.cs-stat-label{margin-top:4px;font-size:12.5px;color:rgba(11,11,11,.48);font-weight:650}

/* ── Narrative ────────────────────────────────────────────────── */
.cs-narrative{max-width:660px;margin:0 auto}
.cs-narrative p{font-size:16px;color:rgba(11,11,11,.72);line-height:1.7;margin:0 0 18px}
.cs-narrative p:last-child{margin-bottom:0}

/* ── Pullquote ────────────────────────────────────────────────── */
.cs-pullquote{
  margin:36px 0;padding:28px 32px;border-radius:20px;
  background:linear-gradient(135deg,rgba(243,229,245,.18),rgba(225,245,254,.12));
  border-left:4px solid;border-image:linear-gradient(180deg,#ce93d8,#81d4fa) 1;
  position:relative;
}
.cs-pullquote p{
  font-size:19px;font-weight:700;color:rgba(11,11,11,.78);
  line-height:1.5;margin:0;letter-spacing:-.01em;
}
.cs-pullquote-attr{margin-top:10px;font-size:13px;color:rgba(11,11,11,.42);font-weight:600}

/* ── Feature cards (2-col) ────────────────────────────────────── */
.cs-features{
  display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:32px;
}
.cs-feat{
  background:rgba(255,255,255,.78);border:1px solid rgba(206,147,216,.1);
  border-radius:20px;padding:28px 24px;
  position:relative;overflow:hidden;
  transition:transform .24s ease,box-shadow .24s ease;
}
.cs-feat:hover{transform:translateY(-3px);box-shadow:0 14px 36px rgba(206,147,216,.1)}
.cs-feat::before{
  content:'';position:absolute;top:0;left:0;right:0;height:3px;
  border-radius:20px 20px 0 0;opacity:0;transition:opacity .24s ease;
}
.cs-feat:hover::before{opacity:1}
.cs-feat:nth-child(1)::before{background:linear-gradient(90deg,#ce93d8,#81d4fa)}
.cs-feat:nth-child(2)::before{background:linear-gradient(90deg,#81d4fa,#80cbc4)}
.cs-feat:nth-child(3)::before{background:linear-gradient(90deg,#80cbc4,#ffcc80)}
.cs-feat:nth-child(4)::before{background:linear-gradient(90deg,#ffcc80,#f48fb1)}
.cs-feat-ic{
  width:44px;height:44px;border-radius:14px;display:grid;place-items:center;
  margin-bottom:14px;font-size:20px;transition:transform .22s ease;
}
.cs-feat:hover .cs-feat-ic{transform:scale(1.1)}
.cs-feat:nth-child(1) .cs-feat-ic{background:linear-gradient(135deg,rgba(206,147,216,.2),rgba(243,229,245,.2))}
.cs-feat:nth-child(2) .cs-feat-ic{background:linear-gradient(135deg,rgba(129,212,250,.2),rgba(179,229,252,.16))}
.cs-feat:nth-child(3) .cs-feat-ic{background:linear-gradient(135deg,rgba(128,203,196,.2),rgba(178,223,219,.15))}
.cs-feat:nth-child(4) .cs-feat-ic{background:linear-gradient(135deg,rgba(255,204,128,.22),rgba(255,224,178,.16))}
.cs-feat-title{font-weight:900;font-size:18px;letter-spacing:-.02em}
.cs-feat-text{margin-top:8px;font-size:14.5px;color:rgba(11,11,11,.58);line-height:1.6}

/* ── Before / After comparison ────────────────────────────────── */
.cs-compare{
  display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:32px;
}
.cs-compare-col{
  border-radius:20px;padding:28px 24px;
}
.cs-compare-before{
  background:rgba(244,143,177,.06);border:1px solid rgba(244,143,177,.12);
}
.cs-compare-after{
  background:rgba(165,214,167,.06);border:1px solid rgba(165,214,167,.15);
}
.cs-compare-badge{
  display:inline-block;padding:4px 12px;border-radius:8px;
  font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.08em;
  margin-bottom:14px;
}
.cs-compare-before .cs-compare-badge{background:rgba(244,143,177,.12);color:#c2185b}
.cs-compare-after .cs-compare-badge{background:rgba(165,214,167,.15);color:#2e7d32}
.cs-compare-item{
  font-size:14.5px;color:rgba(11,11,11,.68);line-height:1.55;
  display:flex;align-items:flex-start;gap:9px;margin-bottom:10px;
}
.cs-compare-item:last-child{margin-bottom:0}
.cs-compare-item::before{
  content:'';flex-shrink:0;width:7px;height:7px;border-radius:50%;margin-top:7px;
}
.cs-compare-before .cs-compare-item::before{background:rgba(244,143,177,.5)}
.cs-compare-after .cs-compare-item::before{background:rgba(165,214,167,.7)}

/* ── Workflow strip ───────────────────────────────────────────── */
.cs-workflow{
  display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:32px;
}
.cs-wf{
  text-align:center;padding:28px 18px;
  background:rgba(255,255,255,.65);border:1px solid rgba(206,147,216,.1);
  border-radius:18px;transition:transform .2s ease,box-shadow .2s ease;
}
.cs-wf:hover{transform:translateY(-2px);box-shadow:0 8px 22px rgba(206,147,216,.1)}
.cs-wf-num{
  font-size:28px;font-weight:900;
  background:linear-gradient(135deg,#7b1fa2,#0288d1);
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
}
.cs-wf-title{font-weight:850;font-size:15px;margin-top:8px}
.cs-wf-text{font-size:13px;color:rgba(11,11,11,.52);margin-top:6px;line-height:1.5}

/* ── CTA banner ───────────────────────────────────────────────── */
.cs-cta-band{
  display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:20px;
  padding:32px 36px;border-radius:22px;
  background:linear-gradient(135deg,rgba(243,229,245,.22),rgba(225,245,254,.15));
  border:1px solid rgba(206,147,216,.12);
}
.cs-cta-title{font-weight:900;font-size:22px;letter-spacing:-.02em}
.cs-cta-text{font-size:14.5px;color:rgba(11,11,11,.52);margin-top:4px}
.cs-cta-actions{display:flex;gap:12px;flex-wrap:wrap}

/* ── Responsive ───────────────────────────────────────────────── */
@media(max-width:900px){
  .cs-stats{grid-template-columns:repeat(2,1fr)}
  .cs-features{grid-template-columns:1fr}
  .cs-compare{grid-template-columns:1fr}
  .cs-workflow{grid-template-columns:1fr}
}
@media(max-width:600px){
  .cs-hero{padding:56px 0 44px}
  .cs-hero-title{font-size:clamp(28px,7vw,38px)}
  .cs-cta-band{flex-direction:column;text-align:center}
}
</style>

<!-- ━━━ HERO ━━━ -->
<section class="cs-hero">
  <div class="container">
    <div class="eyebrow" data-reveal>CUSTOMER STORY</div>
    <h1 class="cs-hero-title" data-reveal>One searchable workspace for every<br>research decision</h1>
    <p class="cs-hero-sub" data-reveal>How OpenAI's research teams replaced fragmented docs, wikis, and spreadsheets with a single encrypted library that keeps experiment notes, model decisions, and institutional knowledge instantly findable.</p>
    <div class="cs-hero-stars" data-reveal>★★★★★</div>
    <div class="cs-hero-company" data-reveal>
      <span class="cs-hero-logo">🔬</span>
      <span>OpenAI · AI Research</span>
    </div>

    <div class="cs-stats" data-reveal>
      <div class="cs-stat">
        <div class="cs-stat-val">73%</div>
        <div class="cs-stat-label">Faster doc retrieval</div>
      </div>
      <div class="cs-stat">
        <div class="cs-stat-val">12k+</div>
        <div class="cs-stat-label">Entries indexed</div>
      </div>
      <div class="cs-stat">
        <div class="cs-stat-val">0</div>
        <div class="cs-stat-label">Cloud uploads</div>
      </div>
      <div class="cs-stat">
        <div class="cs-stat-val">4 wks</div>
        <div class="cs-stat-label">Full adoption</div>
      </div>
    </div>
  </div>
</section>

<!-- ━━━ CHALLENGE ━━━ -->
<section class="section">
  <div class="container">
    <header class="section-head" data-reveal>
      <h2 class="h2">The challenge</h2>
      <p class="muted">Research moves fast — documentation couldn't keep up.</p>
    </header>
    <div class="cs-narrative" data-reveal>
      <p>At OpenAI, a single model training run generates hundreds of artifact pages: hyperparameter logs, ablation study notes, architecture decision records, safety review memos, and post-mortem wrap-ups. Before VaultBook, these documents lived across Google Docs, Notion pages, scattered markdown repos, and personal notes apps.</p>
      <p>When a researcher needed to answer "Why did we choose this reward function six months ago?" the answer was buried in a thread inside a doc inside a folder no one remembered sharing. Knowledge didn't disappear — it just became invisible.</p>
    </div>
    <div class="cs-pullquote" data-reveal>
      <p>"VaultBook is a single place where research, notes, and decisions stay searchable. That sentence sounds simple, but it changed how our team operates."</p>
      <div class="cs-pullquote-attr">— Research Lead, OpenAI</div>
    </div>
  </div>
</section>

<!-- ━━━ BEFORE / AFTER ━━━ -->
<section class="section tint">
  <div class="container">
    <header class="section-head" data-reveal>
      <h2 class="h2">Before &amp; after</h2>
      <p class="muted">A side-by-side look at the research documentation workflow.</p>
    </header>
    <div class="cs-compare" data-reveal>
      <div class="cs-compare-col cs-compare-before">
        <div class="cs-compare-badge">Before VaultBook</div>
        <div class="cs-compare-item">Experiment notes scattered across 4+ tools</div>
        <div class="cs-compare-item">Keyword search returned irrelevant results from dozens of shared drives</div>
        <div class="cs-compare-item">Sensitive model details stored on cloud-synced platforms</div>
        <div class="cs-compare-item">New researchers spent days recreating past decisions</div>
        <div class="cs-compare-item">Architecture decision records lived in unmaintained wikis</div>
      </div>
      <div class="cs-compare-col cs-compare-after">
        <div class="cs-compare-badge">After VaultBook</div>
        <div class="cs-compare-item">Every note, PDF, and decision record in one local library</div>
        <div class="cs-compare-item">AI-powered semantic search surfaces relevant entries instantly</div>
        <div class="cs-compare-item">Per-entry AES-256-GCM encryption — data never leaves the device</div>
        <div class="cs-compare-item">Onboarding researchers search context in seconds, not days</div>
        <div class="cs-compare-item">Structured hierarchical pages keep architectural history alive</div>
      </div>
    </div>
  </div>
</section>

<!-- ━━━ FEATURES THAT MATTERED ━━━ -->
<section class="section">
  <div class="container">
    <header class="section-head" data-reveal>
      <h2 class="h2">Features that made the difference</h2>
      <p class="muted">The capabilities that turned VaultBook into the team's default research workspace.</p>
    </header>
    <div class="cs-features" data-reveal>
      <div class="cs-feat">
        <div class="cs-feat-ic">🧠</div>
        <div class="cs-feat-title">Semantic Q&amp;A Search</div>
        <div class="cs-feat-text">Researchers type natural-language questions — "What reward shaping approach did we test in Q3?" — and VaultBook returns ranked, contextual answers from thousands of entries. No folder drilling. No keyword guessing.</div>
      </div>
      <div class="cs-feat">
        <div class="cs-feat-ic">🔐</div>
        <div class="cs-feat-title">Per-Entry Encryption</div>
        <div class="cs-feat-text">Model architecture details, safety evaluations, and capability benchmarks stay protected with AES-256-GCM encryption. Everything processes locally — zero network calls, zero cloud exposure.</div>
      </div>
      <div class="cs-feat">
        <div class="cs-feat-ic">📄</div>
        <div class="cs-feat-title">Deep File Indexing</div>
        <div class="cs-feat-text">PDF papers, PPTX slide decks from internal reviews, and XLSX benchmark sheets are all indexed in-browser. A search for "RLHF scaling" returns hits inside attached documents, not just entry titles.</div>
      </div>
      <div class="cs-feat">
        <div class="cs-feat-ic">🔗</div>
        <div class="cs-feat-title">Related Entries &amp; AI Suggestions</div>
        <div class="cs-feat-text">VaultBook's contextual similarity engine surfaces notes the team didn't know they needed. Writing a new architecture proposal? Related past decisions appear automatically in the sidebar.</div>
      </div>
    </div>
  </div>
</section>

<!-- ━━━ WORKFLOW ━━━ -->
<section class="section tint">
  <div class="container">
    <header class="section-head" data-reveal>
      <h2 class="h2">A typical research workflow</h2>
      <p class="muted">How a researcher goes from experiment to indexed, searchable knowledge.</p>
    </header>
    <div class="cs-workflow" data-reveal>
      <div class="cs-wf">
        <div class="cs-wf-num">01</div>
        <div class="cs-wf-title">Capture</div>
        <div class="cs-wf-text">During or after an experiment, the researcher creates a VaultBook entry with notes, attaches the relevant paper PDFs, and tags it with model name and objective.</div>
      </div>
      <div class="cs-wf">
        <div class="cs-wf-num">02</div>
        <div class="cs-wf-title">Enrich</div>
        <div class="cs-wf-text">Deep indexing parses the attached files. OCR handles scanned whiteboards. The entry is now fully searchable down to a sentence inside a slide deck.</div>
      </div>
      <div class="cs-wf">
        <div class="cs-wf-num">03</div>
        <div class="cs-wf-title">Retrieve</div>
        <div class="cs-wf-text">Months later, a teammate asks "Why did we abandon approach X?" A single Q&A search returns the decision, the rationale, and the data — in under two seconds.</div>
      </div>
    </div>
  </div>
</section>

<!-- ━━━ RESULTS NARRATIVE ━━━ -->
<section class="section">
  <div class="container">
    <header class="section-head" data-reveal>
      <h2 class="h2">The results</h2>
      <p class="muted">Measurable impact across research velocity and knowledge retention.</p>
    </header>
    <div class="cs-narrative" data-reveal>
      <p>Within four weeks of adoption, VaultBook became the default destination for all research documentation. The team indexed over 12,000 entries — experiment logs, architecture decision records, literature summaries, and safety review notes — into a single local library.</p>
      <p>Document retrieval time dropped by 73 percent. Researchers no longer opened five tabs and searched three different platforms to answer a question about a past decision. More importantly, institutional knowledge stopped evaporating. When team members transitioned between projects, their notes stayed searchable and contextually linked to everything that came after.</p>
      <p>The security team approved VaultBook faster than any previous tool. No data leaves the device. No API keys. No analytics beacons. For a team handling sensitive model capabilities research, that single architectural fact removed months of compliance review.</p>
    </div>
    <div class="cs-pullquote" data-reveal>
      <p>"For the first time, we have a knowledge base that researchers actually use — because it finds what they need without forcing them to remember where they put it."</p>
      <div class="cs-pullquote-attr">— Engineering Manager, OpenAI</div>
    </div>
  </div>
</section>

<!-- ━━━ CTA ━━━ -->
<section class="section tint">
  <div class="container">
    <div class="cs-cta-band" data-reveal>
      <div>
        <div class="cs-cta-title">Make your research searchable</div>
        <div class="cs-cta-text">Start using VaultBook to centralize notes, decisions, and documentation — offline and encrypted.</div>
      </div>
      <div class="cs-cta-actions">
        <a class="btn btn-primary" href="{{ '/get-started/' | relative_url }}">Get started free</a>
        <a class="btn btn-ghost" href="{{ '/customer-stories/' | relative_url }}">More stories</a>
      </div>
    </div>
  </div>
</section>
