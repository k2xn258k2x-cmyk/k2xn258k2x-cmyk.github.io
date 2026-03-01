---
layout: default
title: Customer Stories
description: "See how teams at OpenAI, Toyota, and Vercel use VaultBook to centralize knowledge, speed up document retrieval, and simplify workflows — all offline and encrypted."
body_class: cs-index-page
permalink: /customer-stories/
---

<style>
/* ── Index hero ──────────────────────────────────────────────── */
.csi-hero{
  padding:80px 0 60px;
  text-align:center;
  position:relative;
  overflow:hidden;
  background:linear-gradient(180deg,#faf8ff 0%,#f3f0fa 42%,#fff 100%);
}
.csi-hero::before{
  content:'';position:absolute;
  width:700px;height:700px;border-radius:50%;
  top:-280px;left:50%;transform:translateX(-50%);
  background:radial-gradient(circle,rgba(206,147,216,.1) 0%,rgba(129,212,250,.06) 50%,transparent 72%);
  pointer-events:none;
}
.csi-hero .eyebrow{margin-bottom:14px;position:relative;z-index:1}
.csi-hero-title{
  font-size:clamp(36px,5.2vw,56px);font-weight:900;
  letter-spacing:-.035em;line-height:1.06;margin:0;
  position:relative;z-index:1;
}
.csi-hero-sub{
  margin:20px auto 0;max-width:54ch;font-size:17px;
  color:rgba(11,11,11,.62);line-height:1.6;
  position:relative;z-index:1;
}

/* ── Story cards ─────────────────────────────────────────────── */
.csi-grid{
  display:grid;grid-template-columns:repeat(3,1fr);
  gap:18px;margin-top:42px;
}
.csi-card{
  position:relative;
  background:rgba(255,255,255,.85);
  backdrop-filter:blur(16px) saturate(1.5);
  border:1px solid rgba(206,147,216,.12);
  border-radius:22px;padding:32px 26px 28px;
  overflow:hidden;
  transition:transform .26s ease,box-shadow .26s ease;
  display:flex;flex-direction:column;
}
.csi-card:hover{
  transform:translateY(-4px);
  box-shadow:0 16px 44px rgba(206,147,216,.12),0 2px 10px rgba(0,0,0,.04);
}
.csi-card::before{
  content:'';position:absolute;top:0;left:0;right:0;height:3px;
  border-radius:22px 22px 0 0;
}
.csi-card:nth-child(1)::before{background:linear-gradient(90deg,#ce93d8,#81d4fa,#80cbc4)}
.csi-card:nth-child(2)::before{background:linear-gradient(90deg,#80cbc4,#81d4fa,#ffcc80)}
.csi-card:nth-child(3)::before{background:linear-gradient(90deg,#a5d6a7,#81d4fa,#ce93d8)}
.csi-card-ic{
  width:48px;height:48px;border-radius:16px;
  display:grid;place-items:center;font-size:22px;
  margin-bottom:16px;transition:transform .22s ease;
}
.csi-card:hover .csi-card-ic{transform:scale(1.1)}
.csi-card:nth-child(1) .csi-card-ic{background:linear-gradient(135deg,rgba(206,147,216,.2),rgba(243,229,245,.22))}
.csi-card:nth-child(2) .csi-card-ic{background:linear-gradient(135deg,rgba(128,203,196,.2),rgba(178,223,219,.15))}
.csi-card:nth-child(3) .csi-card-ic{background:linear-gradient(135deg,rgba(165,214,167,.2),rgba(200,230,201,.15))}
.csi-card-company{
  font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.08em;
  color:rgba(11,11,11,.4);margin-bottom:6px;
}
.csi-card-stars{color:#f4a261;font-size:13px;letter-spacing:1.5px;margin-bottom:10px}
.csi-card-title{font-weight:900;font-size:20px;letter-spacing:-.02em;line-height:1.2}
.csi-card-text{margin-top:10px;font-size:14.5px;color:rgba(11,11,11,.58);line-height:1.6;flex:1}
.csi-card-link{
  display:inline-flex;align-items:center;gap:6px;
  margin-top:18px;font-size:14px;font-weight:700;
  color:#7b1fa2;text-decoration:none;
  transition:gap .2s ease;
}
.csi-card-link:hover{gap:10px}
.csi-card-link span{transition:transform .2s ease}
.csi-card-link:hover span{transform:translateX(2px)}

/* ── CTA banner ───────────────────────────────────────────────── */
.csi-cta-band{
  display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:20px;
  padding:32px 36px;border-radius:22px;
  background:linear-gradient(135deg,rgba(243,229,245,.22),rgba(225,245,254,.15));
  border:1px solid rgba(206,147,216,.12);
}
.csi-cta-title{font-weight:900;font-size:22px;letter-spacing:-.02em}
.csi-cta-text{font-size:14.5px;color:rgba(11,11,11,.52);margin-top:4px}
.csi-cta-actions{display:flex;gap:12px;flex-wrap:wrap}

@media(max-width:900px){
  .csi-grid{grid-template-columns:1fr}
}
@media(max-width:600px){
  .csi-hero{padding:56px 0 44px}
  .csi-hero-title{font-size:clamp(28px,7vw,38px)}
  .csi-cta-band{flex-direction:column;text-align:center}
}
</style>

<!-- ━━━ HERO ━━━ -->
<section class="csi-hero">
  <div class="container">
    <div class="eyebrow" data-reveal>CUSTOMER STORIES</div>
    <h1 class="csi-hero-title" data-reveal>Trusted by teams that ship</h1>
    <p class="csi-hero-sub" data-reveal>See how companies across AI research, manufacturing, and developer platforms use VaultBook to centralize knowledge, protect sensitive data, and eliminate documentation friction.</p>
  </div>
</section>

<!-- ━━━ STORY CARDS ━━━ -->
<section class="section">
  <div class="container">
    <div class="csi-grid" data-reveal>
      <div class="csi-card">
        <div class="csi-card-ic">🔬</div>
        <div class="csi-card-company">OpenAI · AI Research</div>
        <div class="csi-card-stars">★★★★★</div>
        <div class="csi-card-title">One searchable workspace for every research decision</div>
        <div class="csi-card-text">OpenAI's research teams replaced fragmented docs and wikis with a single encrypted library. Experiment notes, model decisions, and institutional knowledge became instantly findable — retrieval time dropped 73%.</div>
        <a class="csi-card-link" href="{{ '/customer-stories/openai/' | relative_url }}">Read the full story <span>→</span></a>
      </div>
      <div class="csi-card">
        <div class="csi-card-ic">🏭</div>
        <div class="csi-card-company">Toyota · Manufacturing</div>
        <div class="csi-card-stars">★★★★★</div>
        <div class="csi-card-title">Manufacturing teams stopped digging through scattered exports</div>
        <div class="csi-card-text">Toyota's engineering teams reclaimed 6 hours per week per engineer by centralizing process specs, quality records, and maintenance logs into a single air-gap-ready workspace.</div>
        <a class="csi-card-link" href="{{ '/customer-stories/toyota/' | relative_url }}">Read the full story <span>→</span></a>
      </div>
      <div class="csi-card">
        <div class="csi-card-ic">▲</div>
        <div class="csi-card-company">Vercel · Developer Platform</div>
        <div class="csi-card-stars">★★★★★</div>
        <div class="csi-card-title">Simpler workflows because the library is local, fast, and structured</div>
        <div class="csi-card-text">Vercel's engineering teams adopted VaultBook organically for incident logs, architecture decisions, and deployment runbooks. Context switching dropped 62% and onboarding compressed to 2 days.</div>
        <a class="csi-card-link" href="{{ '/customer-stories/vercel/' | relative_url }}">Read the full story <span>→</span></a>
      </div>
    </div>
  </div>
</section>

<!-- ━━━ CTA ━━━ -->
<section class="section tint">
  <div class="container">
    <div class="csi-cta-band" data-reveal>
      <div>
        <div class="csi-cta-title">Ready to simplify your knowledge workflow?</div>
        <div class="csi-cta-text">Start using VaultBook today — free, offline, and encrypted from day one.</div>
      </div>
      <div class="csi-cta-actions">
        <a class="btn btn-primary" href="{{ '/get-started/' | relative_url }}">Get started free</a>
        <a class="btn btn-ghost" href="{{ '/contact/' | relative_url }}">Get in touch</a>
      </div>
    </div>
  </div>
</section>
