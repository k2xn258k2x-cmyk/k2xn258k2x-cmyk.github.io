---
layout: default
title: Pricing
description: Choose the VaultBook plan that fits your workflow. Two simple tiers, no subscriptions that sneak up on you — just a one-time annual license delivered instantly via Telegram.
body_class: pricing-page
permalink: /pricing/
---

<style>
/* ── Pricing: hero ───────────────────────────────────────────── */
.pr-hero{
  padding: 80px 0 56px;
  text-align: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, #faf8ff 0%, #f3f0fa 40%, #fff 100%);
}
.pr-hero::before{
  content: '';
  position: absolute;
  width: 800px; height: 800px;
  border-radius: 50%;
  top: -360px; left: 50%;
  transform: translateX(-50%);
  background: radial-gradient(circle, rgba(206,147,216,.12) 0%, rgba(129,212,250,.06) 50%, transparent 72%);
  pointer-events: none;
}
.pr-hero::after{
  content: '';
  position: absolute;
  width: 440px; height: 440px;
  border-radius: 50%;
  bottom: -180px; right: -60px;
  background: radial-gradient(circle, rgba(128,203,196,.07) 0%, transparent 70%);
  pointer-events: none;
}
.pr-hero-title{
  font-size: clamp(36px, 5.4vw, 58px);
  font-weight: 900;
  letter-spacing: -0.035em;
  line-height: 1.08;
  margin: 0;
  position: relative; z-index: 1;
}
.pr-hero-sub{
  margin: 18px auto 0;
  max-width: 52ch;
  font-size: 17px;
  color: rgba(11,11,11,.6);
  line-height: 1.6;
  position: relative; z-index: 1;
}

/* ── Eyebrow ─────────────────────────────────────────────────── */
.pr-hero .eyebrow,
.pr-section .eyebrow{
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
}

/* ── Plan cards ──────────────────────────────────────────────── */
.pr-plans{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 22px;
  margin-top: 48px;
  max-width: 860px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 1;
}
.pr-card{
  position: relative;
  background: rgba(255,255,255,.88);
  backdrop-filter: blur(16px) saturate(1.5);
  border: 1px solid rgba(206,147,216,.14);
  border-radius: 24px;
  padding: 36px 30px 32px;
  overflow: hidden;
  transition: transform .26s cubic-bezier(.16,1,.3,1), box-shadow .26s ease;
}
.pr-card:hover{
  transform: translateY(-5px);
  box-shadow: 0 18px 48px rgba(206,147,216,.14), 0 3px 10px rgba(0,0,0,.04);
}
.pr-card::after{
  content: '';
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 3px;
  opacity: .45;
}
.pr-card.plus::after{
  background: linear-gradient(90deg, #81d4fa, #80cbc4);
}
.pr-card.pro{
  border-color: rgba(206,147,216,.28);
  box-shadow: 0 12px 40px rgba(206,147,216,.12), 0 2px 8px rgba(0,0,0,.04);
}
.pr-card.pro::after{
  background: linear-gradient(90deg, #f48fb1, #ce93d8, #81d4fa);
  opacity: .65;
}
.pr-card.pro::before{
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(180deg, rgba(243,229,245,.08) 0%, rgba(225,245,254,.04) 100%);
  pointer-events: none;
  z-index: 0;
}

.pr-badge{
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 11px;
  font-weight: 750;
  text-transform: uppercase;
  letter-spacing: .14em;
  padding: 5px 14px;
  border-radius: 999px;
  margin-bottom: 16px;
  position: relative;
  z-index: 1;
}
.pr-card.plus .pr-badge{
  background: linear-gradient(135deg, rgba(129,212,250,.2), rgba(128,203,196,.15));
  color: #0288d1;
}
.pr-card.pro .pr-badge{
  background: linear-gradient(135deg, rgba(206,147,216,.22), rgba(244,143,177,.15));
  color: #7b1fa2;
}

.pr-plan-name{
  font-size: 26px;
  font-weight: 900;
  letter-spacing: -0.02em;
  position: relative;
  z-index: 1;
}
.pr-card.pro .pr-plan-name{
  background: linear-gradient(135deg, #4a1463, #7b1fa2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.pr-price{
  margin-top: 12px;
  position: relative;
  z-index: 1;
}
.pr-amount{
  font-size: 48px;
  font-weight: 900;
  letter-spacing: -0.04em;
  line-height: 1;
  background: linear-gradient(135deg, #1a1a2e, #4a1463);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.pr-period{
  font-size: 15px;
  color: rgba(11,11,11,.45);
  font-weight: 600;
  margin-left: 4px;
}
.pr-price-note{
  font-size: 13px;
  color: rgba(11,11,11,.42);
  margin-top: 4px;
}

.pr-desc{
  margin-top: 16px;
  font-size: 15px;
  color: rgba(11,11,11,.58);
  line-height: 1.55;
  position: relative;
  z-index: 1;
}

.pr-divider{
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(206,147,216,.18), transparent);
  margin: 22px 0;
  position: relative;
  z-index: 1;
}

.pr-features{
  list-style: none;
  padding: 0;
  margin: 0;
  position: relative;
  z-index: 1;
}
.pr-features li{
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 7px 0;
  font-size: 14.5px;
  line-height: 1.45;
  color: rgba(11,11,11,.74);
}
.pr-features li .check{
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  border-radius: 6px;
  display: grid;
  place-items: center;
  margin-top: 1px;
  font-size: 12px;
}
.pr-card.plus .pr-features li .check{
  background: linear-gradient(135deg, rgba(129,212,250,.2), rgba(128,203,196,.15));
  color: #0288d1;
}
.pr-card.pro .pr-features li .check{
  background: linear-gradient(135deg, rgba(206,147,216,.2), rgba(244,143,177,.15));
  color: #7b1fa2;
}

.pr-cta{
  margin-top: 26px;
  position: relative;
  z-index: 1;
}
.pr-cta .btn{ width: 100%; height: 44px; font-size: 15px; border-radius: 12px; }

/* ── Popular tag ─────────────────────────────────────────────── */
.pr-popular{
  position: absolute;
  top: 16px;
  right: 18px;
  font-size: 11px;
  font-weight: 750;
  text-transform: uppercase;
  letter-spacing: .12em;
  padding: 4px 12px;
  border-radius: 999px;
  background: linear-gradient(135deg, #7b1fa2, #1f6feb);
  color: #fff;
  z-index: 2;
}

/* ── Section layout ──────────────────────────────────────────── */
.pr-section{
  padding: 64px 0;
}
.pr-section + .pr-section{
  padding-top: 0;
}
.pr-section-title{
  font-size: clamp(26px, 3.8vw, 38px);
  font-weight: 900;
  letter-spacing: -0.03em;
  text-align: center;
  margin: 0;
}
.pr-section-sub{
  text-align: center;
  font-size: 16px;
  color: rgba(11,11,11,.55);
  max-width: 48ch;
  margin: 12px auto 0;
  line-height: 1.55;
}

/* ── Feature comparison ──────────────────────────────────────── */
.pr-compare{
  margin-top: 40px;
  border: 1px solid rgba(206,147,216,.12);
  border-radius: 22px;
  overflow: hidden;
  background: rgba(255,255,255,.7);
  backdrop-filter: blur(12px) saturate(1.4);
  box-shadow: 0 8px 32px rgba(206,147,216,.06);
}
.pr-compare-head{
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 0;
  padding: 18px 28px;
  background: linear-gradient(135deg, rgba(243,229,245,.15), rgba(225,245,254,.1));
  border-bottom: 1px solid rgba(206,147,216,.1);
}
.pr-compare-head span{
  font-weight: 800;
  font-size: 14px;
  color: rgba(11,11,11,.55);
  text-transform: uppercase;
  letter-spacing: .12em;
}
.pr-compare-head span:not(:first-child){
  text-align: center;
}
.pr-row{
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 0;
  padding: 14px 28px;
  border-bottom: 1px solid rgba(206,147,216,.06);
  transition: background .2s ease;
}
.pr-row:last-child{ border-bottom: 0; }
.pr-row:hover{ background: rgba(243,229,245,.06); }
.pr-row span:first-child{
  font-size: 14.5px;
  color: rgba(11,11,11,.72);
  font-weight: 500;
}
.pr-row span:not(:first-child){
  text-align: center;
  font-size: 15px;
  font-weight: 700;
}
.pr-row .yes{ color: #2e7d32; }
.pr-row .no{ color: rgba(11,11,11,.2); }

.pr-cat{
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 0;
  padding: 12px 28px;
  background: linear-gradient(135deg, rgba(243,229,245,.08), rgba(225,245,254,.05));
  border-bottom: 1px solid rgba(206,147,216,.06);
}
.pr-cat span{
  font-size: 12px;
  font-weight: 750;
  text-transform: uppercase;
  letter-spacing: .14em;
  color: #7b1fa2;
}

/* ── How to buy ──────────────────────────────────────────────── */
.pr-steps{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  margin-top: 40px;
}
.pr-step{
  position: relative;
  border: 1px solid rgba(206,147,216,.1);
  border-radius: 22px;
  background: linear-gradient(180deg, #fff 0%, rgba(243,229,245,.06) 100%);
  padding: 28px 24px 24px;
  transition: transform .28s cubic-bezier(.16,1,.3,1), box-shadow .28s ease, border-color .28s ease;
}
.pr-step:hover{
  transform: translateY(-4px);
  box-shadow: 0 14px 36px rgba(206,147,216,.12);
  border-color: rgba(206,147,216,.22);
}
.pr-step-num{
  width: 38px; height: 38px;
  border-radius: 999px;
  display: grid; place-items: center;
  font-weight: 850; font-size: 15px;
  margin-bottom: 16px;
  transition: transform .25s ease, box-shadow .25s ease;
}
.pr-step:hover .pr-step-num{ transform: scale(1.1); box-shadow: 0 4px 12px rgba(206,147,216,.15); }
.pr-step:nth-child(1) .pr-step-num{ background: linear-gradient(135deg, rgba(206,147,216,.22), rgba(225,190,231,.15)); color: #7b1fa2; }
.pr-step:nth-child(2) .pr-step-num{ background: linear-gradient(135deg, rgba(129,212,250,.22), rgba(179,229,252,.15)); color: #0277bd; }
.pr-step:nth-child(3) .pr-step-num{ background: linear-gradient(135deg, rgba(128,203,196,.22), rgba(178,223,219,.15)); color: #00796b; }
.pr-step-title{ font-weight: 850; font-size: 17px; }
.pr-step-text{ margin-top: 8px; font-size: 14.5px; line-height: 1.55; color: rgba(11,11,11,.6); }

/* ── Telegram CTA ────────────────────────────────────────────── */
.pr-tg-band{
  margin-top: 36px;
  border: 1px solid rgba(206,147,216,.14);
  border-radius: 24px;
  background: linear-gradient(135deg, rgba(255,255,255,.94), rgba(243,229,245,.15) 40%, rgba(225,245,254,.1) 100%);
  padding: 28px 32px;
  box-shadow: 0 12px 40px rgba(206,147,216,.08), 0 2px 6px rgba(0,0,0,.03);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  position: relative;
  overflow: hidden;
  transition: box-shadow .3s ease;
}
.pr-tg-band:hover{
  box-shadow: 0 16px 48px rgba(206,147,216,.12), 0 4px 10px rgba(0,0,0,.04);
}
.pr-tg-band::before{
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: linear-gradient(90deg, #f48fb1, #ce93d8, #81d4fa, #80cbc4);
  opacity: .5;
}
.pr-tg-ic{
  width: 52px; height: 52px;
  min-width: 52px;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(0,136,204,.12), rgba(0,136,204,.06));
  display: grid; place-items: center;
  font-size: 24px;
}
.pr-tg-body{ flex: 1; }
.pr-tg-title{ font-weight: 850; font-size: 18px; }
.pr-tg-text{ font-size: 14.5px; color: rgba(11,11,11,.55); margin-top: 4px; line-height: 1.5; }

/* ── FAQ ─────────────────────────────────────────────────────── */
.pr-faqs{
  margin-top: 40px;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
}
.pr-faq{
  border: 1px solid rgba(206,147,216,.1);
  border-radius: 18px;
  background: rgba(255,255,255,.7);
  margin-bottom: 12px;
  overflow: hidden;
  transition: border-color .2s ease, box-shadow .2s ease;
}
.pr-faq:hover{
  border-color: rgba(206,147,216,.2);
  box-shadow: 0 4px 16px rgba(206,147,216,.06);
}
.pr-faq summary{
  padding: 18px 22px;
  font-weight: 750;
  font-size: 15.5px;
  cursor: pointer;
  list-style: none;
  display: flex;
  align-items: center;
  gap: 12px;
  color: rgba(11,11,11,.82);
  transition: color .2s ease;
}
.pr-faq summary::-webkit-details-marker{ display: none; }
.pr-faq summary::before{
  content: '+';
  width: 26px; height: 26px;
  min-width: 26px;
  border-radius: 8px;
  background: linear-gradient(135deg, rgba(243,229,245,.4), rgba(225,245,254,.25));
  display: grid; place-items: center;
  font-weight: 800;
  font-size: 16px;
  color: #7b1fa2;
  transition: transform .2s ease, background .2s ease;
}
.pr-faq[open] summary::before{
  content: '−';
  transform: rotate(0);
  background: linear-gradient(135deg, rgba(206,147,216,.25), rgba(129,212,250,.15));
}
.pr-faq summary:hover{ color: #7b1fa2; }
.pr-faq-body{
  padding: 0 22px 20px 60px;
  font-size: 14.5px;
  line-height: 1.6;
  color: rgba(11,11,11,.58);
}

/* ── Bottom CTA band ─────────────────────────────────────────── */
.pr-bottom-cta{
  margin: 24px 0 64px;
  border: 1px solid rgba(206,147,216,.14);
  border-radius: 26px;
  background: linear-gradient(135deg, rgba(255,255,255,.94), rgba(243,229,245,.18) 40%, rgba(225,245,254,.12) 100%);
  padding: 40px 36px;
  box-shadow: 0 14px 44px rgba(206,147,216,.1), 0 2px 6px rgba(0,0,0,.03);
  text-align: center;
  position: relative;
  overflow: hidden;
}
.pr-bottom-cta::before{
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: linear-gradient(90deg, #f48fb1, #ce93d8, #81d4fa, #80cbc4, #ffcc80);
  opacity: .55;
}
.pr-bottom-cta-title{
  font-size: clamp(22px, 3vw, 30px);
  font-weight: 900;
  letter-spacing: -0.02em;
  margin: 0;
}
.pr-bottom-cta-sub{
  font-size: 16px;
  color: rgba(11,11,11,.55);
  margin: 10px 0 0;
  line-height: 1.55;
}
.pr-bottom-cta-actions{
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 28px;
}

/* ── Guarantee badge ─────────────────────────────────────────── */
.pr-guarantee{
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: 36px;
  padding: 12px 22px;
  border-radius: 999px;
  background: linear-gradient(135deg, rgba(128,203,196,.12), rgba(165,214,167,.08));
  border: 1px solid rgba(128,203,196,.15);
  font-size: 14px;
  color: rgba(11,11,11,.58);
  font-weight: 600;
  position: relative;
  z-index: 1;
}
.pr-guarantee-ic{
  width: 28px; height: 28px;
  border-radius: 999px;
  background: linear-gradient(135deg, rgba(128,203,196,.25), rgba(165,214,167,.18));
  display: grid; place-items: center;
  font-size: 14px;
  color: #2e7d32;
}

/* ── Responsive ──────────────────────────────────────────────── */
@media (max-width: 768px){
  .pr-plans{ grid-template-columns: 1fr; max-width: 440px; }
  .pr-steps{ grid-template-columns: 1fr; max-width: 440px; margin-left: auto; margin-right: auto; }
  .pr-compare-head,
  .pr-row,
  .pr-cat{ grid-template-columns: 2fr 1fr 1fr; padding-left: 16px; padding-right: 16px; }
  .pr-compare-head span,
  .pr-row span{ font-size: 13px; }
  .pr-tg-band{ flex-direction: column; text-align: center; }
  .pr-tg-band .btn{ width: 100%; }
}
@media (max-width: 480px){
  .pr-compare-head span:first-child,
  .pr-row span:first-child,
  .pr-cat span{ font-size: 12px; }
}
</style>

<!-- ════════════════════════════════════════════════════════════════
     HERO
     ════════════════════════════════════════════════════════════════ -->
<section class="pr-hero">
  <div class="container">
    <div class="eyebrow" data-reveal>💎 Simple, transparent pricing</div>
    <h1 class="pr-hero-title" data-reveal>Pick a plan.<br>Own your workspace.</h1>
    <p class="pr-hero-sub" data-reveal>Two clear tiers. No hidden fees, no recurring auto-charges, no cloud lock-in. Pay once a year, get a license file, and everything runs offline on your machine.</p>

    <!-- ── Plan cards ──────────────────────────────────────────── -->
    <div class="pr-plans" data-reveal>

      <!-- Plus -->
      <div class="pr-card plus">
        <div class="pr-badge">☁ Plus</div>
        <div class="pr-plan-name">Plus</div>
        <div class="pr-price">
          <span class="pr-amount">$49</span><span class="pr-period">/ year</span>
          <div class="pr-price-note">≈ $4.08 /month — billed annually</div>
        </div>
        <p class="pr-desc">Everything you need for a powerful, private note-taking workspace with AI-assisted search and rich editing.</p>
        <div class="pr-divider"></div>
        <ul class="pr-features">
          <li><span class="check">✓</span> AI Suggestions &amp; smart relevance</li>
          <li><span class="check">✓</span> Natural-language QA search</li>
          <li><span class="check">✓</span> Typeahead search &amp; query history</li>
          <li><span class="check">✓</span> Rich text editor with tables &amp; code blocks</li>
          <li><span class="check">✓</span> Hierarchical pages &amp; labels</li>
          <li><span class="check">✓</span> AES-256-GCM per-entry encryption</li>
          <li><span class="check">✓</span> Inline OCR for images</li>
          <li><span class="check">✓</span> File &amp; attachment management</li>
          <li><span class="check">✓</span> Due dates, expiry &amp; recurrence</li>
          <li><span class="check">✓</span> Basic analytics dashboard</li>
        </ul>
        <div class="pr-cta">
          <a class="btn btn-ghost w100" href="https://t.me/VaultBook" target="_blank" rel="noopener">Get Plus →</a>
        </div>
      </div>

      <!-- Pro -->
      <div class="pr-card pro">
        <div class="pr-popular">★ Most Popular</div>
        <div class="pr-badge">⚡ Pro</div>
        <div class="pr-plan-name">Pro</div>
        <div class="pr-price">
          <span class="pr-amount">$79</span><span class="pr-period">/ year</span>
          <div class="pr-price-note">≈ $6.58 /month — billed annually</div>
        </div>
        <p class="pr-desc">The complete VaultBook experience — advanced AI, 14+ built-in tools, version history, deep file indexing, and powerful analytics.</p>
        <div class="pr-divider"></div>
        <ul class="pr-features">
          <li><span class="check">✓</span> Everything in Plus</li>
          <li><span class="check">✓</span> Vote-based search reranking</li>
          <li><span class="check">✓</span> Related entries with AI similarity</li>
          <li><span class="check">✓</span> 14+ built-in tools (Kanban, PDF, MP3…)</li>
          <li><span class="check">✓</span> Deep file indexing (XLSX, PPTX, PDF, ZIP, MSG)</li>
          <li><span class="check">✓</span> OCR inside documents &amp; archives</li>
          <li><span class="check">✓</span> Version history with 60-day retention</li>
          <li><span class="check">✓</span> Calendar &amp; timetable views</li>
          <li><span class="check">✓</span> Multi-tab views &amp; advanced filters</li>
          <li><span class="check">✓</span> Charts &amp; visual analytics</li>
          <li><span class="check">✓</span> Import from Obsidian</li>
        </ul>
        <div class="pr-cta">
          <a class="btn btn-primary w100" href="https://t.me/VaultBook" target="_blank" rel="noopener">Get Pro →</a>
        </div>
      </div>

    </div><!-- /pr-plans -->

    <div class="pr-guarantee" data-reveal>
      <span class="pr-guarantee-ic">🛡</span>
      Your data never leaves your device. No cloud. No tracking. Zero telemetry.
    </div>

  </div><!-- /container -->
</section>

<!-- ════════════════════════════════════════════════════════════════
     FEATURE COMPARISON
     ════════════════════════════════════════════════════════════════ -->
<section class="pr-section">
  <div class="container">
    <div class="eyebrow" data-reveal>📋 Feature comparison</div>
    <h2 class="pr-section-title" data-reveal>Everything, side by side</h2>
    <p class="pr-section-sub" data-reveal>See exactly what's included in each plan so you can choose with confidence.</p>

    <div class="pr-compare" data-reveal>
      <div class="pr-compare-head">
        <span>Feature</span>
        <span>Plus $49</span>
        <span>Pro $79</span>
      </div>

      <!-- AI & Search -->
      <div class="pr-cat"><span>AI &amp; Search</span><span></span><span></span></div>
      <div class="pr-row"><span>AI Suggestions (4-page carousel)</span><span class="yes">✓</span><span class="yes">✓</span></div>
      <div class="pr-row"><span>Natural-language QA search</span><span class="yes">✓</span><span class="yes">✓</span></div>
      <div class="pr-row"><span>Typeahead search</span><span class="yes">✓</span><span class="yes">✓</span></div>
      <div class="pr-row"><span>Smart label suggestions</span><span class="yes">✓</span><span class="yes">✓</span></div>
      <div class="pr-row"><span>Inline OCR for images</span><span class="yes">✓</span><span class="yes">✓</span></div>
      <div class="pr-row"><span>Vote-based search reranking</span><span class="no">—</span><span class="yes">✓</span></div>
      <div class="pr-row"><span>Related entries (AI similarity)</span><span class="no">—</span><span class="yes">✓</span></div>
      <div class="pr-row"><span>Vote-based learning over time</span><span class="no">—</span><span class="yes">✓</span></div>

      <!-- Editing & Notes -->
      <div class="pr-cat"><span>Editing &amp; Notes</span><span></span><span></span></div>
      <div class="pr-row"><span>Rich text editor (bold, lists, tables, code…)</span><span class="yes">✓</span><span class="yes">✓</span></div>
      <div class="pr-row"><span>Sections &amp; sub-entries</span><span class="yes">✓</span><span class="yes">✓</span></div>
      <div class="pr-row"><span>Callout blocks &amp; Markdown rendering</span><span class="yes">✓</span><span class="yes">✓</span></div>
      <div class="pr-row"><span>Due dates, expiry &amp; recurrence</span><span class="yes">✓</span><span class="yes">✓</span></div>
      <div class="pr-row"><span>Favorites</span><span class="yes">✓</span><span class="yes">✓</span></div>

      <!-- Organization -->
      <div class="pr-cat"><span>Organization &amp; Navigation</span><span></span><span></span></div>
      <div class="pr-row"><span>Hierarchical pages (nested notebooks)</span><span class="yes">✓</span><span class="yes">✓</span></div>
      <div class="pr-row"><span>Color-coded labels &amp; hashtags</span><span class="yes">✓</span><span class="yes">✓</span></div>
      <div class="pr-row"><span>Multi-tab views</span><span class="no">—</span><span class="yes">✓</span></div>
      <div class="pr-row"><span>Advanced filters (type, date range)</span><span class="no">—</span><span class="yes">✓</span></div>
      <div class="pr-row"><span>Calendar &amp; timetable views</span><span class="no">—</span><span class="yes">✓</span></div>
      <div class="pr-row"><span>Random note spotlight</span><span class="no">—</span><span class="yes">✓</span></div>

      <!-- Security -->
      <div class="pr-cat"><span>Security &amp; Encryption</span><span></span><span></span></div>
      <div class="pr-row"><span>AES-256-GCM per-entry encryption</span><span class="yes">✓</span><span class="yes">✓</span></div>
      <div class="pr-row"><span>PBKDF2 key derivation (100K iterations)</span><span class="yes">✓</span><span class="yes">✓</span></div>
      <div class="pr-row"><span>Lock screen</span><span class="yes">✓</span><span class="yes">✓</span></div>
      <div class="pr-row"><span>100% offline — zero cloud</span><span class="yes">✓</span><span class="yes">✓</span></div>

      <!-- Files & Indexing -->
      <div class="pr-cat"><span>Files &amp; Indexing</span><span></span><span></span></div>
      <div class="pr-row"><span>Attachment management</span><span class="yes">✓</span><span class="yes">✓</span></div>
      <div class="pr-row"><span>Basic attachment text indexing</span><span class="yes">✓</span><span class="yes">✓</span></div>
      <div class="pr-row"><span>Deep indexing (XLSX, PPTX, PDF, ZIP, MSG)</span><span class="no">—</span><span class="yes">✓</span></div>
      <div class="pr-row"><span>OCR inside documents &amp; archives</span><span class="no">—</span><span class="yes">✓</span></div>
      <div class="pr-row"><span>Version history (60-day retention)</span><span class="no">—</span><span class="yes">✓</span></div>

      <!-- Analytics -->
      <div class="pr-cat"><span>Analytics &amp; Insights</span><span></span><span></span></div>
      <div class="pr-row"><span>Basic analytics (counts, storage)</span><span class="yes">✓</span><span class="yes">✓</span></div>
      <div class="pr-row"><span>Label &amp; page utilization charts</span><span class="no">—</span><span class="yes">✓</span></div>
      <div class="pr-row"><span>14-day activity &amp; monthly charts</span><span class="no">—</span><span class="yes">✓</span></div>
      <div class="pr-row"><span>Attachment type breakdown</span><span class="no">—</span><span class="yes">✓</span></div>

      <!-- Tools -->
      <div class="pr-cat"><span>Built-in Tools (Pro only)</span><span></span><span></span></div>
      <div class="pr-row"><span>Kanban Board</span><span class="no">—</span><span class="yes">✓</span></div>
      <div class="pr-row"><span>File Analyzer (CSV/TXT)</span><span class="no">—</span><span class="yes">✓</span></div>
      <div class="pr-row"><span>RSS / Atom Feed Reader</span><span class="no">—</span><span class="yes">✓</span></div>
      <div class="pr-row"><span>PDF Merge, Split &amp; Compress</span><span class="no">—</span><span class="yes">✓</span></div>
      <div class="pr-row"><span>MP3 Cutter &amp; Joiner</span><span class="no">—</span><span class="yes">✓</span></div>
      <div class="pr-row"><span>File &amp; Photo Explorer</span><span class="no">—</span><span class="yes">✓</span></div>
      <div class="pr-row"><span>Password Generator</span><span class="no">—</span><span class="yes">✓</span></div>
      <div class="pr-row"><span>Save URL → Entry</span><span class="no">—</span><span class="yes">✓</span></div>
      <div class="pr-row"><span>Folder Analyzer</span><span class="no">—</span><span class="yes">✓</span></div>
      <div class="pr-row"><span>Threads (chat-style notes)</span><span class="no">—</span><span class="yes">✓</span></div>
      <div class="pr-row"><span>Import from Obsidian</span><span class="no">—</span><span class="yes">✓</span></div>
    </div><!-- /pr-compare -->
  </div>
</section>

<!-- ════════════════════════════════════════════════════════════════
     HOW TO BUY
     ════════════════════════════════════════════════════════════════ -->
<section class="pr-section">
  <div class="container">
    <div class="eyebrow" data-reveal>🛒 How to buy</div>
    <h2 class="pr-section-title" data-reveal>Three steps to your license</h2>
    <p class="pr-section-sub" data-reveal>Purchasing is handled personally via Telegram — fast, friendly, and human.</p>

    <div class="pr-steps" data-reveal>
      <div class="pr-step">
        <div class="pr-step-num">1</div>
        <div class="pr-step-title">Open Telegram</div>
        <p class="pr-step-text">Tap the button below or search <strong>@VaultBook</strong> on Telegram to start a conversation.</p>
      </div>
      <div class="pr-step">
        <div class="pr-step-num">2</div>
        <div class="pr-step-title">Choose your plan</div>
        <p class="pr-step-text">Let us know whether you'd like <strong>Plus ($49/yr)</strong> or <strong>Pro ($79/yr)</strong>. We'll walk you through payment.</p>
      </div>
      <div class="pr-step">
        <div class="pr-step-num">3</div>
        <div class="pr-step-title">Get your license</div>
        <p class="pr-step-text">Once confirmed, you'll receive a <code>license.json</code> file. Drop it into your VaultBook storage folder and you're set.</p>
      </div>
    </div>

    <div class="pr-tg-band" data-reveal>
      <div class="pr-tg-ic">✈</div>
      <div class="pr-tg-body">
        <div class="pr-tg-title">Ready to get started?</div>
        <div class="pr-tg-text">Message us on Telegram — we usually respond within minutes.</div>
      </div>
      <a class="btn btn-primary" href="https://t.me/VaultBook" target="_blank" rel="noopener">Open @VaultBook on Telegram →</a>
    </div>
  </div>
</section>

<!-- ════════════════════════════════════════════════════════════════
     FAQ
     ════════════════════════════════════════════════════════════════ -->
<section class="pr-section">
  <div class="container">
    <div class="eyebrow" data-reveal>❓ FAQ</div>
    <h2 class="pr-section-title" data-reveal>Frequently asked questions</h2>
    <p class="pr-section-sub" data-reveal>Quick answers to the things people ask most.</p>

    <div class="pr-faqs" data-reveal>

      <details class="pr-faq">
        <summary>Why is purchasing done via Telegram?</summary>
        <div class="pr-faq-body">VaultBook is built on a privacy-first philosophy — no accounts, no cloud, no tracking. Rather than bolting on a traditional payment gateway that collects personal data, we handle licensing through a direct, personal conversation on Telegram. It's faster, more transparent, and keeps things simple.</div>
      </details>

      <details class="pr-faq">
        <summary>What payment methods do you accept?</summary>
        <div class="pr-faq-body">We'll work out the best payment method for you during our Telegram conversation. We're flexible and accommodating — just reach out and we'll sort it.</div>
      </details>

      <details class="pr-faq">
        <summary>What is a license file and how does it work?</summary>
        <div class="pr-faq-body">After purchase you receive a small <code>license.json</code> file. Place it in the root of your VaultBook storage folder (the same folder that holds <code>repository.json</code>). VaultBook reads it on launch and unlocks your tier — no internet connection required.</div>
      </details>

      <details class="pr-faq">
        <summary>Can I upgrade from Plus to Pro later?</summary>
        <div class="pr-faq-body">Absolutely. Message us on Telegram any time and we'll arrange a Pro upgrade. You'll receive a new license file that instantly unlocks all Pro features.</div>
      </details>

      <details class="pr-faq">
        <summary>Does VaultBook send any data to the internet?</summary>
        <div class="pr-faq-body">No. VaultBook runs entirely in your browser with local files on your device. There are no analytics beacons, no telemetry, no server calls. Your notes, attachments, and license stay on your machine — always.</div>
      </details>

      <details class="pr-faq">
        <summary>What happens when my annual license expires?</summary>
        <div class="pr-faq-body">Your data is always yours — nothing gets locked or deleted. You'll simply see a renewal prompt, and tier-specific features will pause until you renew. Reach out on Telegram to pick up a fresh license when you're ready.</div>
      </details>

      <details class="pr-faq">
        <summary>Can I try VaultBook before buying?</summary>
        <div class="pr-faq-body">Yes! VaultBook includes a trial period so you can explore the interface, create notes, and test the core experience before committing to a plan. Download it from the <a class="link" href="/download/">download page</a> and give it a spin.</div>
      </details>

    </div>
  </div>
</section>

<!-- ════════════════════════════════════════════════════════════════
     BOTTOM CTA
     ════════════════════════════════════════════════════════════════ -->
<section class="pr-section" style="padding-bottom: 0;">
  <div class="container">
    <div class="pr-bottom-cta" data-reveal>
      <h2 class="pr-bottom-cta-title">Your notes deserve a vault, not a cloud.</h2>
      <p class="pr-bottom-cta-sub">Join people who've chosen privacy, speed, and ownership. Start with Plus or go all-in with Pro.</p>
      <div class="pr-bottom-cta-actions">
        <a class="btn btn-primary" href="https://t.me/VaultBook" target="_blank" rel="noopener">Buy on Telegram →</a>
        <a class="btn btn-ghost" href="/download/">Download first</a>
        <a class="btn btn-ghost" href="/product/">Explore features</a>
      </div>
    </div>
  </div>
</section>
