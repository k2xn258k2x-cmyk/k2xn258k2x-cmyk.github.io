---
layout: default
title: Press
description: "VaultBook press kit — brand assets, company facts, product screenshots, and media contact. Download our press kit or reach out for interviews and coverage."
body_class: press-page
permalink: /press/
---

<style>
/* ── Hero ────────────────────────────────────────────────────── */
.ps-hero{
  padding: 80px 0 64px;
  text-align: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, #faf8ff 0%, #f3f0fa 42%, #fff 100%);
}
.ps-hero::before{
  content: '';
  position: absolute;
  width: 800px; height: 800px;
  border-radius: 50%;
  top: -360px; left: 50%;
  transform: translateX(-50%);
  background: radial-gradient(circle, rgba(206,147,216,.12) 0%, rgba(129,212,250,.06) 50%, transparent 72%);
  pointer-events: none;
}
.ps-eyebrow{
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
.ps-hero-title{
  font-size: clamp(36px, 5.4vw, 58px);
  font-weight: 900;
  letter-spacing: -0.035em;
  line-height: 1.06;
  margin: 0;
  position: relative; z-index: 1;
}
.ps-hero-sub{
  margin: 18px auto 0;
  max-width: 56ch;
  font-size: 17px;
  color: rgba(11,11,11,.6);
  line-height: 1.6;
  position: relative; z-index: 1;
}
.ps-hero-actions{
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 32px;
  position: relative; z-index: 1;
}

/* ── Section ─────────────────────────────────────────────────── */
.ps-section{
  padding: 64px 0;
}
.ps-section + .ps-section{ padding-top: 0; }
.ps-section-head{
  text-align: center;
  margin-bottom: 40px;
}
.ps-section-title{
  font-size: clamp(26px, 3.8vw, 38px);
  font-weight: 900;
  letter-spacing: -0.03em;
  margin: 14px 0 0;
}
.ps-section-sub{
  font-size: 16px;
  color: rgba(11,11,11,.55);
  max-width: 52ch;
  margin: 12px auto 0;
  line-height: 1.55;
}

/* ── Fact grid ───────────────────────────────────────────────── */
.ps-facts{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  max-width: 800px;
  margin: 40px auto 0;
}
.ps-fact{
  text-align: center;
  padding: 22px 12px;
  background: rgba(255,255,255,.7);
  border: 1px solid rgba(206,147,216,.1);
  border-radius: 16px;
  transition: transform .2s ease, box-shadow .2s ease;
}
.ps-fact:hover{
  transform: translateY(-2px);
  box-shadow: 0 8px 22px rgba(206,147,216,.1);
}
.ps-fact-val{
  font-size: 30px;
  font-weight: 900;
  letter-spacing: -0.03em;
  background: linear-gradient(135deg, #7b1fa2, #0288d1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.ps-fact-label{
  margin-top: 3px;
  font-size: 12.5px;
  color: rgba(11,11,11,.48);
  font-weight: 650;
}

/* ── Boilerplate card ────────────────────────────────────────── */
.ps-boiler{
  max-width: 760px;
  margin: 0 auto;
  border: 1px solid rgba(206,147,216,.12);
  border-radius: 22px;
  padding: 36px 32px;
  background: linear-gradient(180deg, #fff 0%, rgba(243,229,245,.06) 100%);
  position: relative;
  overflow: hidden;
}
.ps-boiler::before{
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: linear-gradient(90deg, #ce93d8, #81d4fa, #80cbc4);
  opacity: .45;
}
.ps-boiler-label{
  font-size: 11px;
  font-weight: 750;
  text-transform: uppercase;
  letter-spacing: .14em;
  color: #7b1fa2;
  -webkit-text-fill-color: #7b1fa2;
  margin-bottom: 12px;
}
.ps-boiler p{
  font-size: 15.5px;
  color: rgba(11,11,11,.65);
  line-height: 1.65;
  margin: 0 0 14px;
}
.ps-boiler p:last-of-type{ margin-bottom: 0; }

/* ── Brand assets grid ───────────────────────────────────────── */
.ps-assets{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
.ps-asset{
  border: 1px solid rgba(206,147,216,.1);
  border-radius: 20px;
  padding: 28px 22px;
  text-align: center;
  background: linear-gradient(180deg, #fff 0%, rgba(243,229,245,.06) 100%);
  position: relative;
  overflow: hidden;
  transition: transform .24s ease, box-shadow .24s ease;
}
.ps-asset:hover{
  transform: translateY(-3px);
  box-shadow: 0 12px 32px rgba(206,147,216,.1);
}
.ps-asset-preview{
  width: 80px; height: 80px;
  margin: 0 auto 18px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  font-size: 36px;
  transition: transform .22s ease;
}
.ps-asset:hover .ps-asset-preview{ transform: scale(1.06); }
.ps-asset:nth-child(1) .ps-asset-preview{ background: linear-gradient(135deg, rgba(206,147,216,.14), rgba(243,229,245,.18)); }
.ps-asset:nth-child(2) .ps-asset-preview{ background: linear-gradient(135deg, #0d0d1a, #1a1a2e); }
.ps-asset:nth-child(3) .ps-asset-preview{ background: linear-gradient(135deg, rgba(129,212,250,.14), rgba(179,229,252,.12)); }
.ps-asset:nth-child(4) .ps-asset-preview{ background: linear-gradient(135deg, rgba(128,203,196,.14), rgba(178,223,219,.12)); }
.ps-asset:nth-child(5) .ps-asset-preview{ background: linear-gradient(135deg, rgba(255,204,128,.16), rgba(255,224,178,.14)); }
.ps-asset:nth-child(6) .ps-asset-preview{ background: linear-gradient(135deg, rgba(244,143,177,.14), rgba(248,187,208,.12)); }
.ps-asset-title{ font-weight: 850; font-size: 15px; }
.ps-asset-text{ margin-top: 6px; font-size: 13px; color: rgba(11,11,11,.48); line-height: 1.45; }

/* ── Guidelines cards ────────────────────────────────────────── */
.ps-guidelines{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
.ps-guide{
  border: 1px solid rgba(206,147,216,.1);
  border-radius: 20px;
  padding: 26px 22px;
  background: linear-gradient(180deg, #fff 0%, rgba(243,229,245,.06) 100%);
  transition: transform .24s ease, box-shadow .24s ease;
}
.ps-guide:hover{
  transform: translateY(-3px);
  box-shadow: 0 12px 32px rgba(206,147,216,.1);
}
.ps-guide-title{ font-weight: 850; font-size: 16px; display: flex; align-items: center; gap: 8px; }
.ps-guide-items{ margin-top: 12px; }
.ps-guide-do,
.ps-guide-dont{
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 5px 0;
  font-size: 13.5px;
  color: rgba(11,11,11,.58);
  line-height: 1.45;
}
.ps-guide-do::before{
  content: '✓';
  color: #2e7d32;
  -webkit-text-fill-color: #2e7d32;
  font-weight: 800;
  flex-shrink: 0;
}
.ps-guide-dont::before{
  content: '✕';
  color: #c62828;
  -webkit-text-fill-color: #c62828;
  font-weight: 800;
  flex-shrink: 0;
}

/* ── Color palette ───────────────────────────────────────────── */
.ps-colors{
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 12px;
  margin-top: 28px;
}
.ps-color{
  text-align: center;
}
.ps-color-swatch{
  width: 100%;
  aspect-ratio: 1;
  border-radius: 16px;
  border: 1px solid rgba(11,11,11,.06);
  margin-bottom: 8px;
  transition: transform .2s ease;
}
.ps-color:hover .ps-color-swatch{ transform: scale(1.04); }
.ps-color-name{
  font-weight: 800;
  font-size: 12px;
  color: rgba(11,11,11,.65);
}
.ps-color-hex{
  font-size: 11px;
  color: rgba(11,11,11,.38);
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  margin-top: 2px;
}

/* ── Media contact card ──────────────────────────────────────── */
.ps-contact{
  max-width: 680px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 28px;
  border: 1px solid rgba(206,147,216,.14);
  border-radius: 22px;
  padding: 32px 28px;
  background: linear-gradient(135deg, rgba(255,255,255,.94), rgba(243,229,245,.15) 40%, rgba(225,245,254,.1) 100%);
  box-shadow: 0 12px 40px rgba(206,147,216,.08), 0 2px 6px rgba(0,0,0,.03);
  position: relative;
  overflow: hidden;
}
.ps-contact::before{
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: linear-gradient(90deg, #f48fb1, #ce93d8, #81d4fa, #80cbc4);
  opacity: .5;
}
.ps-contact-ic{
  width: 56px; height: 56px;
  min-width: 56px;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(206,147,216,.15), rgba(129,212,250,.1));
  display: grid; place-items: center;
  font-size: 26px;
}
.ps-contact-body{ flex: 1; }
.ps-contact-title{ font-weight: 850; font-size: 18px; }
.ps-contact-text{ font-size: 14.5px; color: rgba(11,11,11,.55); margin-top: 4px; line-height: 1.5; }
.ps-contact-links{
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 14px;
}

/* ── Key product facts list ──────────────────────────────────── */
.ps-product-facts{
  max-width: 680px;
  margin: 0 auto;
}
.ps-pfact{
  display: flex;
  gap: 16px;
  padding: 18px 0;
  border-bottom: 1px solid rgba(206,147,216,.08);
}
.ps-pfact:last-child{ border-bottom: 0; }
.ps-pfact-label{
  min-width: 140px;
  font-weight: 800;
  font-size: 13.5px;
  color: rgba(11,11,11,.7);
  padding-top: 1px;
}
.ps-pfact-val{
  flex: 1;
  font-size: 14px;
  color: rgba(11,11,11,.55);
  line-height: 1.55;
}

/* ── Coverage quotes ─────────────────────────────────────────── */
.ps-quotes{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
.ps-quote{
  border: 1px solid rgba(206,147,216,.1);
  border-radius: 20px;
  padding: 26px 22px;
  background: linear-gradient(180deg, #fff 0%, rgba(243,229,245,.06) 100%);
  position: relative;
  overflow: hidden;
  transition: transform .24s ease, box-shadow .24s ease;
}
.ps-quote:hover{
  transform: translateY(-3px);
  box-shadow: 0 12px 32px rgba(206,147,216,.1);
}
.ps-quote::before{
  content: '"';
  position: absolute;
  top: 12px; left: 18px;
  font-size: 48px;
  font-weight: 900;
  color: rgba(206,147,216,.12);
  line-height: 1;
}
.ps-quote-text{
  font-size: 14.5px;
  color: rgba(11,11,11,.62);
  line-height: 1.55;
  font-style: italic;
  position: relative; z-index: 1;
}
.ps-quote-attr{
  margin-top: 14px;
  font-size: 12.5px;
  font-weight: 750;
  color: rgba(11,11,11,.4);
}

/* ── Bottom CTA ──────────────────────────────────────────────── */
.ps-cta{
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
.ps-cta::before{
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: linear-gradient(90deg, #f48fb1, #ce93d8, #81d4fa, #80cbc4, #ffcc80);
  opacity: .55;
}
.ps-cta-title{
  font-size: clamp(22px, 3vw, 30px);
  font-weight: 900;
  letter-spacing: -0.02em;
  margin: 0;
}
.ps-cta-sub{
  font-size: 16px;
  color: rgba(11,11,11,.55);
  margin: 10px 0 0;
  line-height: 1.55;
}
.ps-cta-actions{
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 28px;
}

/* ── Responsive ──────────────────────────────────────────────── */
@media (max-width: 900px){
  .ps-facts{ grid-template-columns: 1fr 1fr; }
  .ps-assets{ grid-template-columns: 1fr 1fr; }
  .ps-colors{ grid-template-columns: repeat(3, 1fr); }
  .ps-guidelines{ grid-template-columns: 1fr; }
  .ps-quotes{ grid-template-columns: 1fr; max-width: 480px; margin-left: auto; margin-right: auto; }
}
@media (max-width: 600px){
  .ps-assets{ grid-template-columns: 1fr; max-width: 360px; margin-left: auto; margin-right: auto; }
  .ps-facts{ grid-template-columns: 1fr 1fr; }
  .ps-colors{ grid-template-columns: repeat(3, 1fr); }
  .ps-contact{ flex-direction: column; text-align: center; }
  .ps-contact-links{ justify-content: center; }
  .ps-pfact{ flex-direction: column; gap: 4px; }
  .ps-pfact-label{ min-width: auto; }
}
</style>

<!-- ════════════════════════════════════════════════════════════════
     HERO
     ════════════════════════════════════════════════════════════════ -->
<section class="ps-hero">
  <div class="container" data-reveal>
    <div class="ps-eyebrow">📰 Press &amp; Media</div>
    <h1 class="ps-hero-title">The VaultBook story,<br>ready to tell.</h1>
    <p class="ps-hero-sub">
      Brand assets, company facts, product screenshots, and everything you need to cover
      VaultBook accurately. Need something else? Our press team responds within 24 hours.
    </p>
    <div class="ps-hero-actions">
      <a class="btn btn-primary" href="/contact/">Contact press team</a>
      <a class="btn btn-ghost" href="#brand-assets">Download brand assets ↓</a>
    </div>

    <div class="ps-facts">
      <div class="ps-fact">
        <div class="ps-fact-val">2020</div>
        <div class="ps-fact-label">Founded</div>
      </div>
      <div class="ps-fact">
        <div class="ps-fact-val">50</div>
        <div class="ps-fact-label">Team members</div>
      </div>
      <div class="ps-fact">
        <div class="ps-fact-val">SF</div>
        <div class="ps-fact-label">Headquarters</div>
      </div>
      <div class="ps-fact">
        <div class="ps-fact-val">0</div>
        <div class="ps-fact-label">Cloud servers</div>
      </div>
    </div>
  </div>
</section>

<!-- ════════════════════════════════════════════════════════════════
     BOILERPLATE
     ════════════════════════════════════════════════════════════════ -->
<section class="ps-section">
  <div class="container">
    <div class="ps-section-head" data-reveal>
      <div class="ps-eyebrow">📝 About VaultBook</div>
      <h2 class="ps-section-title">Company overview</h2>
    </div>

    <div class="ps-boiler" data-reveal>
      <div class="ps-boiler-label">Short boilerplate — for articles &amp; bios</div>
      <p>
        VaultBook is a secure, offline-first document intelligence platform that runs entirely in the browser.
        Built by a team of 50 AI and data professionals in San Francisco, VaultBook combines machine-learning-powered
        search, per-entry AES-256 encryption, OCR, and 14+ built-in productivity tools — all processing data
        locally on the user's device, with zero cloud dependencies and zero telemetry.
      </p>

      <div class="ps-boiler-label" style="margin-top: 24px;">Extended boilerplate — for feature stories</div>
      <p>
        VaultBook started in 2020 as a single HTML file — a personal tool to organize research notes offline.
        Six years later, it has grown into a full workspace with AI Suggestions that learn reading patterns,
        natural-language QA search across 7 weighted content layers, contextual Related Entries with Reddit-style
        vote-based learning, deep file indexing (XLSX, PPTX, PDF, ZIP, MSG), inline OCR, rich text editing,
        version history, and a suite of integrated tools from Kanban boards to PDF processors.
      </p>
      <p>
        What hasn't changed is the founding principle: your data belongs to you. VaultBook ships as a single
        file, stores everything in a folder you choose, makes zero network requests, and never touches a
        cloud server. The entire team works from a single office in San Francisco, shipping weekly releases
        through a personal Telegram channel.
      </p>
    </div>
  </div>
</section>

<!-- ════════════════════════════════════════════════════════════════
     KEY PRODUCT FACTS
     ════════════════════════════════════════════════════════════════ -->
<section class="ps-section">
  <div class="container">
    <div class="ps-section-head" data-reveal>
      <div class="ps-eyebrow">📋 Key facts</div>
      <h2 class="ps-section-title">Product at a glance</h2>
      <p class="ps-section-sub">Quick-reference details for accurate coverage.</p>
    </div>

    <div class="ps-product-facts" data-reveal>
      <div class="ps-pfact"><div class="ps-pfact-label">Product name</div><div class="ps-pfact-val">VaultBook (one word, capital V, capital B)</div></div>
      <div class="ps-pfact"><div class="ps-pfact-label">Category</div><div class="ps-pfact-val">Offline-first document intelligence &amp; note-taking workspace</div></div>
      <div class="ps-pfact"><div class="ps-pfact-label">Architecture</div><div class="ps-pfact-val">Single HTML file, runs in any Chromium browser, zero external dependencies</div></div>
      <div class="ps-pfact"><div class="ps-pfact-label">AI features</div><div class="ps-pfact-val">QA search with 7-layer weighted scoring, AI Suggestions pager, Related Entries with vote-based learning, inline OCR, smart label suggestions</div></div>
      <div class="ps-pfact"><div class="ps-pfact-label">Encryption</div><div class="ps-pfact-val">AES-256-GCM per entry, PBKDF2 key derivation (100,000 iterations), random salt/IV</div></div>
      <div class="ps-pfact"><div class="ps-pfact-label">Storage</div><div class="ps-pfact-val">File System Access API — repository.json + sidecar .md files in a local folder</div></div>
      <div class="ps-pfact"><div class="ps-pfact-label">Deep indexing</div><div class="ps-pfact-val">XLSX (SheetJS), PPTX (JSZip), PDF (pdf.js), ZIP, MSG — with OCR for embedded images</div></div>
      <div class="ps-pfact"><div class="ps-pfact-label">Built-in tools</div><div class="ps-pfact-val">14+ — Kanban, PDF suite, MP3 editor, RSS reader, file analyzer, password generator, and more</div></div>
      <div class="ps-pfact"><div class="ps-pfact-label">Pricing</div><div class="ps-pfact-val">Plus at $49/year, Pro at $79/year — purchased via Telegram</div></div>
      <div class="ps-pfact"><div class="ps-pfact-label">Platforms</div><div class="ps-pfact-val">Chrome, Edge, Arc, Brave — on macOS, Windows, and Linux</div></div>
      <div class="ps-pfact"><div class="ps-pfact-label">Privacy</div><div class="ps-pfact-val">Zero network requests, zero telemetry, zero analytics. No accounts, no servers, no cloud.</div></div>
      <div class="ps-pfact"><div class="ps-pfact-label">Company</div><div class="ps-pfact-val">VaultBook Labs, San Francisco, CA — 50-person team</div></div>
      <div class="ps-pfact"><div class="ps-pfact-label">Founded</div><div class="ps-pfact-val">2020</div></div>
      <div class="ps-pfact"><div class="ps-pfact-label">Latest version</div><div class="ps-pfact-val">VaultBook 3.0 (February 2026)</div></div>
    </div>
  </div>
</section>

<!-- ════════════════════════════════════════════════════════════════
     COVERAGE QUOTES
     ════════════════════════════════════════════════════════════════ -->
<section class="ps-section">
  <div class="container">
    <div class="ps-section-head" data-reveal>
      <div class="ps-eyebrow">💬 What people say</div>
      <h2 class="ps-section-title">From the community</h2>
    </div>

    <div class="ps-quotes" data-reveal>
      <div class="ps-quote">
        <div class="ps-quote-text">The only note app I've found that actually takes privacy seriously — no accounts, no cloud, no telemetry. Just your notes in a folder you control.</div>
        <div class="ps-quote-attr">— Security researcher</div>
      </div>
      <div class="ps-quote">
        <div class="ps-quote-text">I replaced four separate tools with VaultBook. The search is genuinely intelligent, the built-in tools save me hours, and it all runs offline.</div>
        <div class="ps-quote-attr">— Academic researcher</div>
      </div>
      <div class="ps-quote">
        <div class="ps-quote-text">Vote-based learning is what sets this apart. The more I use it, the better it gets at surfacing exactly what I need. No other note app does this.</div>
        <div class="ps-quote-attr">— Software engineer</div>
      </div>
    </div>
  </div>
</section>

<!-- ════════════════════════════════════════════════════════════════
     BRAND ASSETS
     ════════════════════════════════════════════════════════════════ -->
<section class="ps-section" id="brand-assets">
  <div class="container">
    <div class="ps-section-head" data-reveal>
      <div class="ps-eyebrow">🎨 Brand assets</div>
      <h2 class="ps-section-title">Logos, marks &amp; screenshots</h2>
      <p class="ps-section-sub">Download and use these assets for press coverage, reviews, and editorial.</p>
    </div>

    <div class="ps-assets" data-reveal>
      <div class="ps-asset">
        <div class="ps-asset-preview">📦</div>
        <div class="ps-asset-title">Full Press Kit</div>
        <div class="ps-asset-text">Logos (SVG, PNG), product screenshots, brand guidelines, and boilerplate text in one ZIP.</div>
      </div>
      <div class="ps-asset">
        <div class="ps-asset-preview" style="color: #fff; -webkit-text-fill-color: #fff;">🔒</div>
        <div class="ps-asset-title">Logo — Dark Background</div>
        <div class="ps-asset-text">White wordmark and icon for dark surfaces. SVG and PNG @2x included.</div>
      </div>
      <div class="ps-asset">
        <div class="ps-asset-preview">🔓</div>
        <div class="ps-asset-title">Logo — Light Background</div>
        <div class="ps-asset-text">Full-color wordmark and icon for light surfaces. SVG and PNG @2x included.</div>
      </div>
      <div class="ps-asset">
        <div class="ps-asset-preview">🖼️</div>
        <div class="ps-asset-title">Product Screenshots</div>
        <div class="ps-asset-text">High-res screenshots of the workspace, search, AI Suggestions, analytics, and tools.</div>
      </div>
      <div class="ps-asset">
        <div class="ps-asset-preview">✏️</div>
        <div class="ps-asset-title">Icon &amp; Favicon</div>
        <div class="ps-asset-text">App icon in SVG, 512px PNG, 180px Apple Touch, and 32px favicon.</div>
      </div>
      <div class="ps-asset">
        <div class="ps-asset-preview">🎨</div>
        <div class="ps-asset-title">Brand Color Palette</div>
        <div class="ps-asset-text">Gradient values, primary/secondary colors, and accessibility-checked text pairings.</div>
      </div>
    </div>
  </div>
</section>

<!-- ════════════════════════════════════════════════════════════════
     COLOR PALETTE
     ════════════════════════════════════════════════════════════════ -->
<section class="ps-section">
  <div class="container">
    <div class="ps-section-head" data-reveal>
      <div class="ps-eyebrow">🎨 Color system</div>
      <h2 class="ps-section-title">Brand palette</h2>
      <p class="ps-section-sub">These are the core colors used across VaultBook's UI and marketing materials.</p>
    </div>

    <div class="ps-colors" data-reveal>
      <div class="ps-color">
        <div class="ps-color-swatch" style="background: #7b1fa2;"></div>
        <div class="ps-color-name">Primary Purple</div>
        <div class="ps-color-hex">#7b1fa2</div>
      </div>
      <div class="ps-color">
        <div class="ps-color-swatch" style="background: #ce93d8;"></div>
        <div class="ps-color-name">Lavender</div>
        <div class="ps-color-hex">#ce93d8</div>
      </div>
      <div class="ps-color">
        <div class="ps-color-swatch" style="background: #81d4fa;"></div>
        <div class="ps-color-name">Sky Blue</div>
        <div class="ps-color-hex">#81d4fa</div>
      </div>
      <div class="ps-color">
        <div class="ps-color-swatch" style="background: #80cbc4;"></div>
        <div class="ps-color-name">Teal</div>
        <div class="ps-color-hex">#80cbc4</div>
      </div>
      <div class="ps-color">
        <div class="ps-color-swatch" style="background: #0d0d1a;"></div>
        <div class="ps-color-name">Ink</div>
        <div class="ps-color-hex">#0d0d1a</div>
      </div>
      <div class="ps-color">
        <div class="ps-color-swatch" style="background: #ffffff; border-color: rgba(11,11,11,.12);"></div>
        <div class="ps-color-name">White</div>
        <div class="ps-color-hex">#ffffff</div>
      </div>
    </div>
  </div>
</section>

<!-- ════════════════════════════════════════════════════════════════
     BRAND GUIDELINES
     ════════════════════════════════════════════════════════════════ -->
<section class="ps-section">
  <div class="container">
    <div class="ps-section-head" data-reveal>
      <div class="ps-eyebrow">📐 Guidelines</div>
      <h2 class="ps-section-title">Using our brand</h2>
      <p class="ps-section-sub">Quick rules for referencing VaultBook in press, reviews, and social media.</p>
    </div>

    <div class="ps-guidelines" data-reveal>
      <div class="ps-guide">
        <div class="ps-guide-title">✅ Please do</div>
        <div class="ps-guide-items">
          <div class="ps-guide-do">Write "VaultBook" as one word with a capital V and capital B</div>
          <div class="ps-guide-do">Use our official logos from the press kit — do not recreate them</div>
          <div class="ps-guide-do">Describe VaultBook as "offline-first" or "local-first" (both accurate)</div>
          <div class="ps-guide-do">Reference the robust development team and founding year of 2020</div>
          <div class="ps-guide-do">Mention the zero-cloud, zero-telemetry architecture when relevant</div>
          <div class="ps-guide-do">Link to vaultbook.net or t.me/VaultBook for reader access</div>
        </div>
      </div>
      <div class="ps-guide">
        <div class="ps-guide-title">⛔ Please don't</div>
        <div class="ps-guide-items">
          <div class="ps-guide-dont">Write "Vault Book" as two words, or "vaultbook" in lowercase</div>
          <div class="ps-guide-dont">Alter, rotate, recolor, or add effects to the VaultBook logo</div>
          <div class="ps-guide-dont">Describe VaultBook as "cloud-based" or "SaaS" — it is neither</div>
          <div class="ps-guide-dont">Imply that VaultBook collects, transmits, or stores user data remotely</div>
          <div class="ps-guide-dont">Use the VaultBook name or logo to imply endorsement without permission</div>
          <div class="ps-guide-dont">Crop the logo closer than the minimum clear space in the brand kit</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ════════════════════════════════════════════════════════════════
     MEDIA CONTACT
     ════════════════════════════════════════════════════════════════ -->
<section class="ps-section">
  <div class="container">
    <div class="ps-section-head" data-reveal>
      <div class="ps-eyebrow">✉️ Media contact</div>
      <h2 class="ps-section-title">Get in touch</h2>
    </div>

    <div class="ps-contact" data-reveal>
      <div class="ps-contact-ic">✈</div>
      <div class="ps-contact-body">
        <div class="ps-contact-title">VaultBook Press Team</div>
        <div class="ps-contact-text">For interviews, product demos, review copies, or any press inquiries — reach out and we'll respond within 24 hours.</div>
        <div class="ps-contact-links">
          <a class="btn btn-primary" href="/contact/">Contact us</a>
          <a class="btn btn-ghost" href="https://t.me/VaultBook" target="_blank" rel="noopener">Telegram</a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ════════════════════════════════════════════════════════════════
     BOTTOM CTA
     ════════════════════════════════════════════════════════════════ -->
<section class="ps-section" style="padding-bottom: 0;">
  <div class="container">
    <div class="ps-cta" data-reveal>
      <h2 class="ps-cta-title">Writing about VaultBook?</h2>
      <p class="ps-cta-sub">We'd love to help. Reach out for press kits, interviews, product access, or anything else you need.</p>
      <div class="ps-cta-actions">
        <a class="btn btn-primary" href="/contact/">Contact press team</a>
        <a class="btn btn-ghost" href="/product/">See the product</a>
        <a class="btn btn-ghost" href="/about/">Meet the team</a>
      </div>
    </div>
  </div>
</section>
