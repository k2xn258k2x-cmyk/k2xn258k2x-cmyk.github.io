---
layout: default
title: "Vercel × VaultBook — How a developer platform simplified its internal knowledge workflows"
description: "Vercel's engineering teams use VaultBook as a local-first, structured knowledge library for incident logs, architecture decisions, deployment runbooks, and API documentation."
body_class: cs-vercel-page
permalink: /customer-stories/vercel/
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
  background:radial-gradient(circle,rgba(165,214,167,.07) 0%,transparent 70%);
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
  background:linear-gradient(135deg,rgba(165,214,167,.2),rgba(200,230,201,.15));
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
  border-left:4px solid;border-image:linear-gradient(180deg,#a5d6a7,#81d4fa) 1;
  position:relative;
}
.cs-pullquote p{
  font-size:19px;font-weight:700;color:rgba(11,11,11,.78);
  line-height:1.5;margin:0;letter-spacing:-.01em;
}
.cs-pullquote-attr{margin-top:10px;font-size:13px;color:rgba(11,11,11,.42);font-weight:600}

/* ── Principle cards (horizontal) ─────────────────────────────── */
.cs-principles{
  display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:32px;
}
.cs-prin{
  text-align:center;padding:30px 20px;
  background:rgba(255,255,255,.7);border:1px solid rgba(206,147,216,.1);
  border-radius:20px;position:relative;overflow:hidden;
  transition:transform .22s ease,box-shadow .22s ease;
}
.cs-prin:hover{transform:translateY(-3px);box-shadow:0 12px 34px rgba(206,147,216,.1)}
.cs-prin::before{
  content:'';position:absolute;top:0;left:0;right:0;height:3px;
  border-radius:20px 20px 0 0;opacity:0;transition:opacity .24s ease;
}
.cs-prin:hover::before{opacity:1}
.cs-prin:nth-child(1)::before{background:linear-gradient(90deg,#a5d6a7,#81d4fa)}
.cs-prin:nth-child(2)::before{background:linear-gradient(90deg,#81d4fa,#ce93d8)}
.cs-prin:nth-child(3)::before{background:linear-gradient(90deg,#ce93d8,#ffcc80)}
.cs-prin-ic{
  width:48px;height:48px;border-radius:16px;
  display:grid;place-items:center;font-size:22px;
  margin:0 auto 14px;transition:transform .22s ease;
}
.cs-prin:hover .cs-prin-ic{transform:scale(1.1)}
.cs-prin:nth-child(1) .cs-prin-ic{background:linear-gradient(135deg,rgba(165,214,167,.2),rgba(200,230,201,.15))}
.cs-prin:nth-child(2) .cs-prin-ic{background:linear-gradient(135deg,rgba(129,212,250,.2),rgba(179,229,252,.16))}
.cs-prin:nth-child(3) .cs-prin-ic{background:linear-gradient(135deg,rgba(206,147,216,.2),rgba(243,229,245,.2))}
.cs-prin-title{font-weight:900;font-size:17px;letter-spacing:-.01em}
.cs-prin-text{margin-top:8px;font-size:14px;color:rgba(11,11,11,.52);line-height:1.55}

/* ── Workflow scenarios (2-col) ───────────────────────────────── */
.cs-scenarios{
  display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:32px;
}
.cs-scene{
  background:rgba(255,255,255,.78);border:1px solid rgba(206,147,216,.1);
  border-radius:20px;padding:26px 22px;
  transition:transform .22s ease,box-shadow .22s ease;
}
.cs-scene:hover{transform:translateY(-2px);box-shadow:0 10px 28px rgba(206,147,216,.08)}
.cs-scene-tag{
  display:inline-block;padding:3px 10px;border-radius:7px;
  font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.07em;
  margin-bottom:12px;
}
.cs-scene:nth-child(1) .cs-scene-tag{background:rgba(165,214,167,.15);color:#2e7d32}
.cs-scene:nth-child(2) .cs-scene-tag{background:rgba(129,212,250,.15);color:#0277bd}
.cs-scene:nth-child(3) .cs-scene-tag{background:rgba(255,204,128,.18);color:#e65100}
.cs-scene:nth-child(4) .cs-scene-tag{background:rgba(206,147,216,.15);color:#7b1fa2}
.cs-scene:nth-child(5) .cs-scene-tag{background:rgba(244,143,177,.12);color:#c2185b}
.cs-scene:nth-child(6) .cs-scene-tag{background:rgba(128,203,196,.15);color:#00796b}
.cs-scene-title{font-weight:850;font-size:16px}
.cs-scene-text{margin-top:6px;font-size:14px;color:rgba(11,11,11,.56);line-height:1.55}

/* ── Speed comparison strip ───────────────────────────────────── */
.cs-speed{
  display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:32px;
}
.cs-sp{
  text-align:center;padding:24px 14px;
  background:rgba(255,255,255,.65);border:1px solid rgba(206,147,216,.1);
  border-radius:18px;transition:transform .2s ease,box-shadow .2s ease;
}
.cs-sp:hover{transform:translateY(-2px);box-shadow:0 8px 22px rgba(206,147,216,.1)}
.cs-sp-val{
  font-size:28px;font-weight:900;letter-spacing:-.03em;
  background:linear-gradient(135deg,#7b1fa2,#0288d1);
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
}
.cs-sp-label{margin-top:3px;font-size:12.5px;color:rgba(11,11,11,.48);font-weight:650}
.cs-sp-detail{margin-top:6px;font-size:12px;color:rgba(11,11,11,.38);line-height:1.4}

/* ── Tooling stack chips ──────────────────────────────────────── */
.cs-stack{
  display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:32px;
}
.cs-stk{
  background:rgba(255,255,255,.6);border:1px solid rgba(206,147,216,.1);
  border-radius:14px;padding:16px 14px;text-align:center;
  transition:transform .18s ease,box-shadow .18s ease,border-color .18s ease;
}
.cs-stk:hover{
  transform:translateY(-2px);box-shadow:0 6px 18px rgba(206,147,216,.08);
  border-color:rgba(206,147,216,.2);
}
.cs-stk-emoji{font-size:22px;margin-bottom:6px;display:block}
.cs-stk-title{font-weight:800;font-size:13px}
.cs-stk-text{font-size:11.5px;color:rgba(11,11,11,.48);margin-top:3px;line-height:1.4}

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
  .cs-principles{grid-template-columns:1fr}
  .cs-scenarios{grid-template-columns:1fr}
  .cs-speed{grid-template-columns:1fr}
  .cs-stack{grid-template-columns:repeat(2,1fr)}
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
    <h1 class="cs-hero-title" data-reveal>Simpler workflows because the<br>library is local, fast, and structured</h1>
    <p class="cs-hero-sub" data-reveal>How Vercel's engineering teams built a faster, more reliable knowledge workflow by replacing cloud-heavy documentation tools with a local-first, encrypted workspace that starts instantly and searches everything offline.</p>
    <div class="cs-hero-stars" data-reveal>★★★★★</div>
    <div class="cs-hero-company" data-reveal>
      <span class="cs-hero-logo">▲</span>
      <span>Vercel · Developer Platform</span>
    </div>

    <div class="cs-stats" data-reveal>
      <div class="cs-stat">
        <div class="cs-stat-val">&lt;1s</div>
        <div class="cs-stat-label">Search latency</div>
      </div>
      <div class="cs-stat">
        <div class="cs-stat-val">5.2k</div>
        <div class="cs-stat-label">Engineering entries</div>
      </div>
      <div class="cs-stat">
        <div class="cs-stat-val">62%</div>
        <div class="cs-stat-label">Less context switching</div>
      </div>
      <div class="cs-stat">
        <div class="cs-stat-val">2 days</div>
        <div class="cs-stat-label">Zero-to-productive</div>
      </div>
    </div>
  </div>
</section>

<!-- ━━━ WHY LOCAL-FIRST ━━━ -->
<section class="section">
  <div class="container">
    <header class="section-head" data-reveal>
      <h2 class="h2">Why local-first matters for developers</h2>
      <p class="muted">Speed, privacy, and reliability — the same principles Vercel builds for its customers.</p>
    </header>
    <div class="cs-narrative" data-reveal>
      <p>Vercel engineers live in the terminal. They expect tools to be fast, keyboard-driven, and respectful of their focus time. The previous knowledge stack — a combination of Notion, Google Docs, and an internal wiki — worked well enough for polished documentation but fell short for the messy, fast-moving knowledge that developers actually produce: incident logs, RFC drafts, debugging journals, deployment runbooks, and half-formed architecture notes.</p>
      <p>These artifacts need a workspace that starts in milliseconds, searches without a round trip to a server, and doesn't require a browser tab watching a spinner while a SaaS platform loads its own JavaScript bundle. VaultBook became that workspace.</p>
    </div>
    <div class="cs-pullquote" data-reveal>
      <p>"Our workflows are simpler because the library is local, fast, and structured. VaultBook feels like it was built by engineers who've been frustrated by the same tools we were."</p>
      <div class="cs-pullquote-attr">— Staff Engineer, Vercel</div>
    </div>
  </div>
</section>

<!-- ━━━ THREE PRINCIPLES ━━━ -->
<section class="section tint">
  <div class="container">
    <header class="section-head" data-reveal>
      <h2 class="h2">Three things developers loved immediately</h2>
    </header>
    <div class="cs-principles" data-reveal>
      <div class="cs-prin">
        <div class="cs-prin-ic">⚡</div>
        <div class="cs-prin-title">Instant startup</div>
        <div class="cs-prin-text">VaultBook opens in under a second. No loading screen, no syncing indicator, no waiting for a remote database to hydrate. The library is already there because it never left.</div>
      </div>
      <div class="cs-prin">
        <div class="cs-prin-ic">🔍</div>
        <div class="cs-prin-title">Offline semantic search</div>
        <div class="cs-prin-text">Searches run entirely in the browser. Natural-language queries return ranked results from thousands of entries — runbooks, RFCs, incident post-mortems — with no network dependency.</div>
      </div>
      <div class="cs-prin">
        <div class="cs-prin-ic">🏗️</div>
        <div class="cs-prin-title">Structured without overhead</div>
        <div class="cs-prin-text">Hierarchical pages, tags, and version history give the team just enough structure. No templates to configure, no workflows to design — VaultBook stays out of the way.</div>
      </div>
    </div>
  </div>
</section>

<!-- ━━━ REAL SCENARIOS ━━━ -->
<section class="section">
  <div class="container">
    <header class="section-head" data-reveal>
      <h2 class="h2">Real engineering scenarios</h2>
      <p class="muted">Six workflows where VaultBook replaced multi-tool friction with a single search.</p>
    </header>
    <div class="cs-scenarios" data-reveal>
      <div class="cs-scene">
        <div class="cs-scene-tag">Incidents</div>
        <div class="cs-scene-title">Post-mortem library</div>
        <div class="cs-scene-text">Every incident report, root cause analysis, and mitigation timeline lives in VaultBook. When a similar alert fires, the on-call engineer searches past incidents before escalating.</div>
      </div>
      <div class="cs-scene">
        <div class="cs-scene-tag">Architecture</div>
        <div class="cs-scene-title">Decision records</div>
        <div class="cs-scene-text">Architecture Decision Records (ADRs) are written directly in VaultBook entries. Related Entries automatically surface past decisions when a new RFC is being drafted.</div>
      </div>
      <div class="cs-scene">
        <div class="cs-scene-tag">Deployments</div>
        <div class="cs-scene-title">Runbook index</div>
        <div class="cs-scene-text">Deployment runbooks, feature flag playbooks, and rollback procedures are tagged by service. The team finds the right runbook by service name in under two seconds.</div>
      </div>
      <div class="cs-scene">
        <div class="cs-scene-tag">API Docs</div>
        <div class="cs-scene-title">Internal API reference</div>
        <div class="cs-scene-text">Internal API documentation — endpoint contracts, auth flows, rate limit policies — is maintained in structured entries with versioned snapshots for every breaking change.</div>
      </div>
      <div class="cs-scene">
        <div class="cs-scene-tag">Onboarding</div>
        <div class="cs-scene-title">New engineer ramp-up</div>
        <div class="cs-scene-text">New hires receive a VaultBook library pre-loaded with codebase orientation, team conventions, and common debugging flows. Ramp-up time dropped from two weeks to two days.</div>
      </div>
      <div class="cs-scene">
        <div class="cs-scene-tag">Research</div>
        <div class="cs-scene-title">Technology evaluations</div>
        <div class="cs-scene-text">Build-vs-buy analyses, vendor evaluations, and proof-of-concept summaries are searchable knowledge — not lost slides in someone's Google Drive.</div>
      </div>
    </div>
  </div>
</section>

<!-- ━━━ SPEED & TOOLING ━━━ -->
<section class="section tint">
  <div class="container">
    <header class="section-head" data-reveal>
      <h2 class="h2">Performance engineers can feel</h2>
      <p class="muted">Latency numbers that matter for developer experience.</p>
    </header>
    <div class="cs-speed" data-reveal>
      <div class="cs-sp">
        <div class="cs-sp-val">&lt;800ms</div>
        <div class="cs-sp-label">Full-text search</div>
        <div class="cs-sp-detail">Across 5,200 entries with deep file indexing enabled</div>
      </div>
      <div class="cs-sp">
        <div class="cs-sp-val">0ms</div>
        <div class="cs-sp-label">Network latency</div>
        <div class="cs-sp-detail">All search and rendering is local — no server calls</div>
      </div>
      <div class="cs-sp">
        <div class="cs-sp-val">&lt;1s</div>
        <div class="cs-sp-label">Cold startup</div>
        <div class="cs-sp-detail">Open the file and the workspace is ready — no hydration</div>
      </div>
    </div>

    <header class="section-head" style="margin-top:48px" data-reveal>
      <h2 class="h2">VaultBook inside the developer stack</h2>
      <p class="muted">How VaultBook fits alongside the tools Vercel already uses.</p>
    </header>
    <div class="cs-stack" data-reveal>
      <div class="cs-stk">
        <div class="cs-stk-emoji">📝</div>
        <div class="cs-stk-title">Quick capture</div>
        <div class="cs-stk-text">Debugging journals, meeting notes, and spike results captured in rich text entries.</div>
      </div>
      <div class="cs-stk">
        <div class="cs-stk-emoji">📎</div>
        <div class="cs-stk-title">Attach anything</div>
        <div class="cs-stk-text">PDFs, XLSX exports, slide decks — deep indexed and searchable inside the entry.</div>
      </div>
      <div class="cs-stk">
        <div class="cs-stk-emoji">🔗</div>
        <div class="cs-stk-title">Save URLs</div>
        <div class="cs-stk-text">Reference docs, GitHub issues, and blog posts saved as entries with extracted content.</div>
      </div>
      <div class="cs-stk">
        <div class="cs-stk-emoji">🛠️</div>
        <div class="cs-stk-title">Built-in tools</div>
        <div class="cs-stk-text">Kanban boards, file analyzers, and PDF tools — no extra apps needed.</div>
      </div>
    </div>
  </div>
</section>

<!-- ━━━ RESULTS ━━━ -->
<section class="section">
  <div class="container">
    <header class="section-head" data-reveal>
      <h2 class="h2">The results</h2>
      <p class="muted">Adoption was organic — the product earned its place in the workflow.</p>
    </header>
    <div class="cs-narrative" data-reveal>
      <p>VaultBook wasn't mandated by management. A single infrastructure engineer started using it for incident logs and runbooks. Within two weeks, the rest of the platform team asked for the file. Within a month, it had spread to three more engineering teams — frontend, API, and developer experience — each managing their own local library.</p>
      <p>Context switching dropped by 62 percent. Engineers no longer bounced between a wiki, a docs app, and a Slack thread to reconstruct context about a past decision. One search, one result, one workspace. The keyboard-driven interface and sub-second latency made VaultBook feel native to a developer's workflow rather than an interruption to it.</p>
      <p>New engineer onboarding compressed from roughly two weeks of documentation scavenger hunts to two days of guided VaultBook exploration. The library structure itself became the onboarding guide — hierarchical pages organized by service, with Related Entries automatically threading the narrative between systems.</p>
    </div>
    <div class="cs-pullquote" data-reveal>
      <p>"Most knowledge tools add overhead. VaultBook removes it. That's why adoption was organic — nobody had to be convinced, they just had to try it once."</p>
      <div class="cs-pullquote-attr">— VP of Engineering, Vercel</div>
    </div>
  </div>
</section>

<!-- ━━━ CTA ━━━ -->
<section class="section tint">
  <div class="container">
    <div class="cs-cta-band" data-reveal>
      <div>
        <div class="cs-cta-title">Ship faster with less friction</div>
        <div class="cs-cta-text">Give your engineering team a knowledge workspace that's as fast as their terminal.</div>
      </div>
      <div class="cs-cta-actions">
        <a class="btn btn-primary" href="{{ '/get-started/' | relative_url }}">Get started free</a>
        <a class="btn btn-ghost" href="{{ '/customer-stories/' | relative_url }}">More stories</a>
      </div>
    </div>
  </div>
</section>
