---
layout: default
title: Docs
description: Everything VaultBook can do — explained, illustrated, and ready to explore. Your complete guide to the offline-first workspace.
body_class: docs-page
permalink: /docs/
---

<style>
/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   DOCS — Immersive documentation hub
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

/* ── Hero ─────────────────────────────────────────────────────── */
.dc-hero{
  padding: 88px 0 72px;
  text-align: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(170deg, #0d0b1a 0%, #1a1040 38%, #0f172a 100%);
  color: #fff;
}
.dc-hero::before{
  content: '';
  position: absolute;
  width: 900px; height: 900px;
  border-radius: 50%;
  top: -420px; left: 50%;
  transform: translateX(-50%);
  background: radial-gradient(circle, rgba(206,147,216,.14) 0%, rgba(129,212,250,.08) 40%, transparent 70%);
  pointer-events: none;
  animation: dc-pulse 8s ease-in-out infinite;
}
.dc-hero::after{
  content: '';
  position: absolute;
  width: 600px; height: 600px;
  border-radius: 50%;
  bottom: -260px; right: -120px;
  background: radial-gradient(circle, rgba(128,203,196,.1) 0%, transparent 65%);
  pointer-events: none;
  animation: dc-pulse 10s ease-in-out 2s infinite;
}
@keyframes dc-pulse{
  0%,100%{ opacity: .6; transform: translateX(-50%) scale(1); }
  50%{ opacity: 1; transform: translateX(-50%) scale(1.06); }
}
@keyframes dc-float{
  0%,100%{ transform: translateY(0); }
  50%{ transform: translateY(-10px); }
}
@keyframes dc-float-slow{
  0%,100%{ transform: translateY(0) rotate(0deg); }
  50%{ transform: translateY(-14px) rotate(2deg); }
}

/* floating orbs */
.dc-orb{
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  filter: blur(1px);
}
.dc-orb-1{
  width: 8px; height: 8px;
  background: rgba(206,147,216,.5);
  top: 28%; left: 12%;
  animation: dc-float 5s ease-in-out infinite;
}
.dc-orb-2{
  width: 5px; height: 5px;
  background: rgba(129,212,250,.5);
  top: 44%; right: 15%;
  animation: dc-float 6s ease-in-out 1s infinite;
}
.dc-orb-3{
  width: 6px; height: 6px;
  background: rgba(128,203,196,.45);
  top: 62%; left: 22%;
  animation: dc-float 7s ease-in-out .5s infinite;
}
.dc-orb-4{
  width: 4px; height: 4px;
  background: rgba(255,204,128,.4);
  top: 34%; right: 26%;
  animation: dc-float 5.5s ease-in-out 1.5s infinite;
}
.dc-orb-5{
  width: 7px; height: 7px;
  background: rgba(206,147,216,.3);
  bottom: 22%; right: 10%;
  animation: dc-float 6.5s ease-in-out .8s infinite;
}

.dc-hero .eyebrow{
  color: rgba(206,147,216,.8);
  margin-bottom: 16px;
  position: relative; z-index: 1;
}
.dc-hero-title{
  font-size: clamp(40px, 5.8vw, 64px);
  font-weight: 900;
  letter-spacing: -0.04em;
  line-height: 1.04;
  margin: 0;
  position: relative; z-index: 1;
}
.dc-hero-title .dc-grad{
  background: linear-gradient(135deg, #ce93d8, #81d4fa, #80cbc4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.dc-hero-sub{
  margin: 20px auto 0;
  max-width: 52ch;
  font-size: 17px;
  color: rgba(255,255,255,.55);
  line-height: 1.6;
  position: relative; z-index: 1;
}

/* hero search bar */
.dc-search-wrap{
  margin: 36px auto 0;
  max-width: 520px;
  position: relative; z-index: 1;
}
.dc-search{
  width: 100%;
  padding: 16px 20px 16px 50px;
  border: 1px solid rgba(206,147,216,.2);
  border-radius: 16px;
  background: rgba(255,255,255,.06);
  backdrop-filter: blur(16px) saturate(1.4);
  color: #fff;
  font-size: 15px;
  outline: none;
  transition: border-color .25s ease, box-shadow .25s ease, background .25s ease;
}
.dc-search::placeholder{ color: rgba(255,255,255,.3); }
.dc-search:focus{
  border-color: rgba(206,147,216,.45);
  box-shadow: 0 0 0 3px rgba(206,147,216,.1), 0 8px 32px rgba(0,0,0,.2);
  background: rgba(255,255,255,.09);
}
.dc-search-icon{
  position: absolute;
  left: 18px; top: 50%;
  transform: translateY(-50%);
  color: rgba(206,147,216,.5);
  pointer-events: none;
}

/* hero stat pills */
.dc-hero-pills{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 32px;
  position: relative; z-index: 1;
}
.dc-pill{
  display: inline-flex; align-items: center; gap: 7px;
  padding: 8px 16px;
  border-radius: 100px;
  background: rgba(255,255,255,.06);
  border: 1px solid rgba(255,255,255,.08);
  font-size: 12.5px;
  font-weight: 700;
  color: rgba(255,255,255,.6);
  backdrop-filter: blur(10px);
  transition: background .2s ease, border-color .2s ease;
}
.dc-pill:hover{
  background: rgba(255,255,255,.1);
  border-color: rgba(206,147,216,.25);
}
.dc-pill-dot{
  width: 6px; height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
}
.dc-pill-dot.purple{ background: #ce93d8; }
.dc-pill-dot.blue{ background: #81d4fa; }
.dc-pill-dot.teal{ background: #80cbc4; }
.dc-pill-dot.amber{ background: #ffcc80; }
.dc-pill-dot.pink{ background: #f48fb1; }

/* ── Quick start ──────────────────────────────────────────────── */
.dc-quick{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  margin-top: -44px;
  position: relative; z-index: 2;
}
.dc-quick-card{
  background: rgba(255,255,255,.92);
  backdrop-filter: blur(16px) saturate(1.5);
  border: 1px solid rgba(206,147,216,.1);
  border-radius: 20px;
  padding: 32px 24px 28px;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: transform .28s ease, box-shadow .28s ease;
}
.dc-quick-card:hover{
  transform: translateY(-5px);
  box-shadow: 0 20px 52px rgba(206,147,216,.12), 0 4px 12px rgba(0,0,0,.04);
}
.dc-quick-card::before{
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; height: 3px;
  border-radius: 20px 20px 0 0;
}
.dc-quick-card:nth-child(1)::before{ background: linear-gradient(90deg, #ce93d8, #81d4fa); }
.dc-quick-card:nth-child(2)::before{ background: linear-gradient(90deg, #81d4fa, #80cbc4); }
.dc-quick-card:nth-child(3)::before{ background: linear-gradient(90deg, #80cbc4, #ffcc80); }
.dc-quick-step{
  width: 40px; height: 40px;
  border-radius: 50%;
  display: grid; place-items: center;
  margin: 0 auto 16px;
  font-weight: 900; font-size: 16px;
  color: #fff;
}
.dc-quick-card:nth-child(1) .dc-quick-step{ background: linear-gradient(135deg, #7b1fa2, #4a148c); }
.dc-quick-card:nth-child(2) .dc-quick-step{ background: linear-gradient(135deg, #0288d1, #01579b); }
.dc-quick-card:nth-child(3) .dc-quick-step{ background: linear-gradient(135deg, #00796b, #004d40); }
.dc-quick-title{ font-weight: 900; font-size: 17px; letter-spacing: -0.01em; }
.dc-quick-text{ margin-top: 8px; font-size: 14px; color: rgba(11,11,11,.55); line-height: 1.55; }

/* ── Category nav ─────────────────────────────────────────────── */
.dc-cats{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
}
.dc-cat{
  text-decoration: none;
  background: rgba(255,255,255,.7);
  border: 1px solid rgba(206,147,216,.08);
  border-radius: 18px;
  padding: 24px 20px;
  position: relative;
  overflow: hidden;
  transition: transform .24s ease, box-shadow .24s ease, border-color .24s ease;
}
.dc-cat:hover{
  transform: translateY(-4px);
  box-shadow: 0 16px 44px rgba(206,147,216,.12), 0 2px 10px rgba(0,0,0,.03);
  border-color: rgba(206,147,216,.2);
}
.dc-cat::after{
  content: '→';
  position: absolute;
  top: 20px; right: 18px;
  font-size: 16px;
  color: rgba(11,11,11,.2);
  transition: color .2s ease, transform .2s ease;
}
.dc-cat:hover::after{ color: rgba(11,11,11,.5); transform: translateX(3px); }
.dc-cat-ic{
  width: 44px; height: 44px;
  border-radius: 14px;
  display: grid; place-items: center;
  margin-bottom: 14px;
  font-size: 20px;
  transition: transform .22s ease;
}
.dc-cat:hover .dc-cat-ic{ transform: scale(1.1); }
.dc-cat-ic.purple{ background: linear-gradient(135deg, rgba(206,147,216,.18), rgba(243,229,245,.2)); }
.dc-cat-ic.blue{ background: linear-gradient(135deg, rgba(129,212,250,.18), rgba(179,229,252,.15)); }
.dc-cat-ic.teal{ background: linear-gradient(135deg, rgba(128,203,196,.18), rgba(178,223,219,.14)); }
.dc-cat-ic.amber{ background: linear-gradient(135deg, rgba(255,204,128,.22), rgba(255,224,178,.16)); }
.dc-cat-ic.pink{ background: linear-gradient(135deg, rgba(244,143,177,.18), rgba(248,187,208,.14)); }
.dc-cat-ic.green{ background: linear-gradient(135deg, rgba(165,214,167,.2), rgba(200,230,201,.15)); }
.dc-cat-title{ font-weight: 800; font-size: 15px; letter-spacing: -0.01em; color: #0b0b0b; }
.dc-cat-count{ margin-top: 4px; font-size: 12.5px; color: rgba(11,11,11,.42); font-weight: 600; }

/* ── Accordion sections ───────────────────────────────────────── */
.dc-accordion{ max-width: 820px; margin: 0 auto; }
.dc-group + .dc-group{ margin-top: 32px; }
.dc-group-head{
  display: flex; align-items: center; gap: 12px;
  margin-bottom: 14px;
}
.dc-group-ic{
  width: 36px; height: 36px;
  border-radius: 12px;
  display: grid; place-items: center;
  font-size: 17px;
  flex-shrink: 0;
}
.dc-group-title{ font-weight: 900; font-size: 20px; letter-spacing: -0.015em; }

.dc-item{
  border: 1px solid rgba(206,147,216,.08);
  border-radius: 14px;
  background: rgba(255,255,255,.72);
  backdrop-filter: blur(8px);
  margin-bottom: 8px;
  overflow: hidden;
  transition: border-color .2s ease, box-shadow .2s ease;
}
.dc-item:hover{
  border-color: rgba(206,147,216,.18);
  box-shadow: 0 4px 16px rgba(206,147,216,.06);
}
.dc-item summary{
  display: flex; align-items: center; gap: 10px;
  padding: 16px 20px;
  cursor: pointer;
  list-style: none;
  font-weight: 700; font-size: 14.5px;
  color: #0b0b0b;
  transition: background .15s ease;
}
.dc-item summary::-webkit-details-marker{ display: none; }
.dc-item summary::before{
  content: '';
  width: 20px; height: 20px;
  border-radius: 6px;
  background: linear-gradient(135deg, rgba(206,147,216,.12), rgba(129,212,250,.1));
  flex-shrink: 0;
  display: grid; place-items: center;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 10 10'%3E%3Cpath d='M3 1l4 4-4 4' fill='none' stroke='%237b1fa2' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center;
  transition: transform .25s ease;
}
.dc-item[open] summary::before{ transform: rotate(90deg); }
.dc-item summary:hover{ background: rgba(243,229,245,.15); }
.dc-item summary .dc-badge{
  margin-left: auto;
  font-size: 10.5px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: .06em;
  padding: 3px 8px;
  border-radius: 6px;
  flex-shrink: 0;
}
.dc-badge.plus{ background: rgba(129,212,250,.15); color: #0277bd; }
.dc-badge.pro{ background: rgba(206,147,216,.15); color: #7b1fa2; }
.dc-item-body{
  padding: 0 20px 18px 50px;
  font-size: 14px;
  color: rgba(11,11,11,.6);
  line-height: 1.65;
}
.dc-item-body strong{ color: rgba(11,11,11,.8); }

/* ── Architecture diagram ─────────────────────────────────────── */
.dc-arch-visual{
  max-width: 700px;
  margin: 0 auto;
  position: relative;
}
.dc-arch-flow{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  flex-wrap: wrap;
}
.dc-arch-node{
  text-align: center;
  padding: 24px 20px;
  background: rgba(255,255,255,.8);
  border: 1px solid rgba(206,147,216,.12);
  border-radius: 18px;
  min-width: 160px;
  position: relative;
  transition: transform .2s ease, box-shadow .2s ease;
}
.dc-arch-node:hover{
  transform: translateY(-3px);
  box-shadow: 0 12px 32px rgba(206,147,216,.1);
}
.dc-arch-node-emoji{ font-size: 28px; display: block; margin-bottom: 10px; }
.dc-arch-node-title{ font-weight: 900; font-size: 15px; }
.dc-arch-node-sub{ font-size: 12px; color: rgba(11,11,11,.45); margin-top: 3px; }
.dc-arch-arrow{
  font-size: 24px;
  color: rgba(206,147,216,.35);
  padding: 0 6px;
  flex-shrink: 0;
  animation: dc-float-slow 4s ease-in-out infinite;
}

/* ── File tree ────────────────────────────────────────────────── */
.dc-tree{
  max-width: 480px;
  margin: 28px auto 0;
  background: #1a1040;
  border-radius: 16px;
  padding: 24px 28px;
  font-family: 'SF Mono', 'Fira Code', 'Cascadia Code', monospace;
  font-size: 13.5px;
  line-height: 1.8;
  color: rgba(255,255,255,.6);
  position: relative;
  overflow: hidden;
}
.dc-tree::before{
  content: 'YOUR FOLDER';
  position: absolute;
  top: 10px; right: 16px;
  font-family: inherit;
  font-size: 9px;
  letter-spacing: .12em;
  font-weight: 800;
  color: rgba(206,147,216,.3);
}
.dc-tree .file{ color: rgba(129,212,250,.7); }
.dc-tree .folder{ color: rgba(255,204,128,.7); }
.dc-tree .dim{ color: rgba(255,255,255,.25); }

/* ── Comparison strip ─────────────────────────────────────────── */
.dc-compare{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  max-width: 740px;
  margin: 0 auto;
}
.dc-compare-card{
  background: rgba(255,255,255,.78);
  border: 1px solid rgba(206,147,216,.1);
  border-radius: 20px;
  padding: 28px 24px;
  position: relative;
  overflow: hidden;
  transition: transform .24s ease, box-shadow .24s ease;
}
.dc-compare-card:hover{
  transform: translateY(-3px);
  box-shadow: 0 14px 36px rgba(206,147,216,.1);
}
.dc-compare-card::before{
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; height: 3px;
  border-radius: 20px 20px 0 0;
}
.dc-compare-card:nth-child(1)::before{ background: linear-gradient(90deg, #81d4fa, #80cbc4); }
.dc-compare-card:nth-child(2)::before{ background: linear-gradient(90deg, #ce93d8, #f48fb1); }
.dc-compare-badge{
  display: inline-block;
  font-size: 10.5px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: .08em;
  padding: 4px 10px;
  border-radius: 8px;
  margin-bottom: 14px;
}
.dc-compare-card:nth-child(1) .dc-compare-badge{ background: rgba(129,212,250,.15); color: #0277bd; }
.dc-compare-card:nth-child(2) .dc-compare-badge{ background: rgba(206,147,216,.15); color: #7b1fa2; }
.dc-compare-title{ font-weight: 900; font-size: 22px; letter-spacing: -0.02em; }
.dc-compare-price{ font-size: 14px; color: rgba(11,11,11,.5); margin-top: 4px; }
.dc-compare-list{
  margin-top: 18px;
  display: flex; flex-direction: column; gap: 9px;
}
.dc-compare-li{
  font-size: 13.5px;
  color: rgba(11,11,11,.65);
  display: flex; align-items: flex-start; gap: 9px;
  line-height: 1.45;
}
.dc-compare-li::before{
  content: '✓';
  flex-shrink: 0;
  font-size: 13px;
  font-weight: 900;
  color: #00796b;
  margin-top: 1px;
}

/* ── Responsive ───────────────────────────────────────────────── */
@media (max-width: 900px){
  .dc-quick{ grid-template-columns: 1fr; max-width: 420px; margin-left: auto; margin-right: auto; margin-top: -36px; }
  .dc-cats{ grid-template-columns: 1fr 1fr; }
  .dc-compare{ grid-template-columns: 1fr; max-width: 400px; margin-left: auto; margin-right: auto; }
  .dc-arch-flow{ flex-direction: column; }
  .dc-arch-arrow{ transform: rotate(90deg); }
}
@media (max-width: 600px){
  .dc-cats{ grid-template-columns: 1fr; }
  .dc-hero{ padding: 64px 0 56px; }
}
</style>


<!-- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     HERO
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ -->
<section class="dc-hero">
  <div class="dc-orb dc-orb-1"></div>
  <div class="dc-orb dc-orb-2"></div>
  <div class="dc-orb dc-orb-3"></div>
  <div class="dc-orb dc-orb-4"></div>
  <div class="dc-orb dc-orb-5"></div>

  <div class="container" data-reveal>
    <div class="eyebrow">Documentation</div>
    <h1 class="dc-hero-title">Learn <span class="dc-grad">VaultBook</span><br>inside and out</h1>
    <p class="dc-hero-sub">
      From your first note to advanced AI search and encryption — everything you need
      to master the offline-first workspace that runs from a single file.
    </p>

    <div class="dc-search-wrap">
      <svg class="dc-search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
      <input class="dc-search" type="text" placeholder="Search docs — try 'encryption', 'OCR', 'Kanban'…" id="dcSearch">
    </div>

    <div class="dc-hero-pills">
      <span class="dc-pill"><span class="dc-pill-dot purple"></span>AI-powered search</span>
      <span class="dc-pill"><span class="dc-pill-dot blue"></span>AES-256-GCM</span>
      <span class="dc-pill"><span class="dc-pill-dot teal"></span>12+ built-in tools</span>
      <span class="dc-pill"><span class="dc-pill-dot amber"></span>Zero cloud</span>
      <span class="dc-pill"><span class="dc-pill-dot pink"></span>Version history</span>
    </div>
  </div>
</section>


<!-- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     QUICK START
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ -->
<section class="section">
  <div class="container">
    <div class="dc-quick" data-reveal>
      <div class="dc-quick-card">
        <div class="dc-quick-step">1</div>
        <div class="dc-quick-title">Download &amp; unzip</div>
        <div class="dc-quick-text">Grab the single ZIP for your tier. Inside you'll find one HTML file and a license — that's everything.</div>
      </div>
      <div class="dc-quick-card">
        <div class="dc-quick-step">2</div>
        <div class="dc-quick-title">Open in your browser</div>
        <div class="dc-quick-text">Double-click the HTML file in any Chromium-based browser (Chrome, Edge, Brave, Arc). No install, no runtime.</div>
      </div>
      <div class="dc-quick-card">
        <div class="dc-quick-step">3</div>
        <div class="dc-quick-title">Connect a folder</div>
        <div class="dc-quick-text">Point VaultBook at any local folder containing your license.json. Your notes, files, and versions live there — fully under your control.</div>
      </div>
    </div>
  </div>
</section>


<!-- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     BROWSE BY CATEGORY
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ -->
<section class="section tint">
  <div class="container">
    <header class="section-head" data-reveal>
      <div class="eyebrow">Browse by topic</div>
      <h2 class="h2">Everything, organized</h2>
      <p class="muted">Jump to the area you need — each section covers concepts, features, and practical tips.</p>
    </header>

    <div class="dc-cats" data-reveal>
      <a class="dc-cat" href="#ai-search">
        <div class="dc-cat-ic purple">🧠</div>
        <div class="dc-cat-title">AI &amp; Smart Search</div>
        <div class="dc-cat-count">Suggestions, QA, OCR, relevance learning</div>
      </a>
      <a class="dc-cat" href="#editing">
        <div class="dc-cat-ic pink">✍️</div>
        <div class="dc-cat-title">Writing &amp; Editing</div>
        <div class="dc-cat-count">Rich text, sections, markdown, version history</div>
      </a>
      <a class="dc-cat" href="#organization">
        <div class="dc-cat-ic amber">📂</div>
        <div class="dc-cat-title">Organization</div>
        <div class="dc-cat-count">Pages, labels, tabs, filters, Kanban</div>
      </a>
      <a class="dc-cat" href="#security">
        <div class="dc-cat-ic teal">🔐</div>
        <div class="dc-cat-title">Security &amp; Encryption</div>
        <div class="dc-cat-count">AES-256-GCM, lock screen, zero network</div>
      </a>
      <a class="dc-cat" href="#tools">
        <div class="dc-cat-ic blue">🛠️</div>
        <div class="dc-cat-title">Built-in Tools</div>
        <div class="dc-cat-count">12+ productivity tools, zero installs</div>
      </a>
      <a class="dc-cat" href="#files">
        <div class="dc-cat-ic green">📎</div>
        <div class="dc-cat-title">Files &amp; Indexing</div>
        <div class="dc-cat-count">Attachments, deep indexing, PDF/XLSX/PPTX</div>
      </a>
      <a class="dc-cat" href="#scheduling">
        <div class="dc-cat-ic pink">📅</div>
        <div class="dc-cat-title">Scheduling &amp; Analytics</div>
        <div class="dc-cat-count">Calendar, due dates, charts, insights</div>
      </a>
      <a class="dc-cat" href="#architecture">
        <div class="dc-cat-ic purple">🏗️</div>
        <div class="dc-cat-title">Architecture &amp; Storage</div>
        <div class="dc-cat-count">File system, data model, autosave</div>
      </a>
    </div>
  </div>
</section>


<!-- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     DEEP-DIVE ACCORDION SECTIONS
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ -->
<section class="section" id="ai-search">
  <div class="container">
    <div class="dc-accordion" data-reveal>

      <!-- AI & Search -->
      <div class="dc-group">
        <div class="dc-group-head">
          <div class="dc-group-ic purple">🧠</div>
          <div class="dc-group-title">AI &amp; Smart Search</div>
        </div>

        <details class="dc-item">
          <summary>AI Suggestions — the Sparkle pager <span class="dc-badge plus">Plus</span></summary>
          <div class="dc-item-body">
            The 4-page carousel sits at the top of your workspace and rotates through: <strong>Suggestions</strong> (upcoming scheduled entries + weekday reading patterns from the last 4 weeks), <strong>Recently Read</strong> (up to 100 deduped entries with timestamps), <strong>Recent Files</strong>, and <strong>Recent Tools</strong>. It learns a personalized relevance distribution across your entire library — the more you use VaultBook, the smarter it gets.
          </div>
        </details>

        <details class="dc-item">
          <summary>Ask a Question — natural-language QA search <span class="dc-badge plus">Plus</span></summary>
          <div class="dc-item-body">
            Type any question in natural language. VaultBook searches across <strong>titles (8×)</strong>, <strong>labels (6×)</strong>, <strong>inline OCR text (5×)</strong>, <strong>body content (4×)</strong>, <strong>sections (3×)</strong>, <strong>main attachments (2×)</strong>, and <strong>section attachments (1×)</strong> — all weighted for relevance. Results are paginated 6 per page with navigable prev/next. The system automatically warms up attachment text for the top 12 candidates in the background.
          </div>
        </details>

        <details class="dc-item">
          <summary>Vote-based learning &amp; reranking <span class="dc-badge pro">Pro</span></summary>
          <div class="dc-item-body">
            Upvote or downvote any search result or related entry suggestion. Votes persist across sessions and directly influence sort ordering — upvoted items float to the top (+1M score boost), downvoted items sink. The add-to-note button lets you prefill a new entry from any result. An educational confirmation dialog (which you can disable) explains how voting improves your library over time.
          </div>
        </details>

        <details class="dc-item">
          <summary>Related Entries — contextual suggestions <span class="dc-badge pro">Pro</span></summary>
          <div class="dc-item-body">
            When you're browsing any entry, Related Entries analyzes contextual similarity and surfaces notes you might want to revisit. Results appear with a fade-in animation and are paginated. Use Reddit-style upvote/downvote on each pair to train the relevance model — votes are saved to your repository and improve suggestions across sessions.
          </div>
        </details>

        <details class="dc-item">
          <summary>Inline OCR — search text inside images <span class="dc-badge plus">Plus</span></summary>
          <div class="dc-item-body">
            Every inline image in your entries is automatically OCR'd. Extracted text is cached per-entry and fully indexed, so you can search for words that only exist inside a photograph, screenshot, or scan. The top 12 QA results also trigger background OCR warm-up if the entry hasn't been processed yet — it all happens silently.
          </div>
        </details>

        <details class="dc-item">
          <summary>Typeahead search &amp; query history <span class="dc-badge plus">Plus</span></summary>
          <div class="dc-item-body">
            As you type in the main search bar, real-time dropdown suggestions appear — matching titles, details, labels, attachment names, and content. Your past queries are remembered so you can recall previous searches with a single tap.
          </div>
        </details>
      </div>

      <!-- Writing & Editing -->
      <div class="dc-group" id="editing">
        <div class="dc-group-head">
          <div class="dc-group-ic pink">✍️</div>
          <div class="dc-group-title">Writing &amp; Editing</div>
        </div>

        <details class="dc-item">
          <summary>Rich text editor <span class="dc-badge plus">Plus</span></summary>
          <div class="dc-item-body">
            A full contenteditable editor with: <strong>bold, italic, underline, strikethrough</strong>, ordered &amp; unordered lists, <strong>headings H1–H6</strong>, font family selector, case transformation (UPPER, lower, Title, Sentence), text color &amp; highlight pickers, tables with a visual size picker and right-click context menu for row/column operations, <strong>code blocks</strong> with language labels, callout blocks with accent bars, inline images, links, and built-in <strong>Markdown rendering</strong> via marked.js.
          </div>
        </details>

        <details class="dc-item">
          <summary>Sections — sub-entries within a note <span class="dc-badge plus">Plus</span></summary>
          <div class="dc-item-body">
            Break long notes into collapsible accordion sections. Each section has its own title, rich text body, and dedicated file attachments. Clip count badges show how many files each section holds. Sections are ideal for research papers, project phases, or any note that benefits from internal structure.
          </div>
        </details>

        <details class="dc-item">
          <summary>Entry fields — every property at your fingertips <span class="dc-badge plus">Plus</span></summary>
          <div class="dc-item-body">
            Every entry carries: <strong>title</strong>, <strong>body</strong> (rich text or plain), <strong>labels</strong>, <strong>page path</strong> (hierarchical placement), <strong>attachments</strong> (per-entry and per-section), <strong>sections</strong>, <strong>favorite</strong> toggle, <strong>protected/encrypted</strong> status, <strong>due date</strong>, <strong>expiry date</strong>, <strong>repeat/recurrence</strong>, and automatic <strong>created/updated timestamps</strong>. Every field is searchable and filterable.
          </div>
        </details>

        <details class="dc-item">
          <summary>Version history — 60-day snapshots <span class="dc-badge pro">Pro</span></summary>
          <div class="dc-item-body">
            Every edit creates a version snapshot stored in the <strong>/versions</strong> directory with 60-day retention. Browse your history in a modal sorted from newest to oldest, and restore any previous state with one click. Access history from the ⏳ button on any entry card.
          </div>
        </details>

        <details class="dc-item">
          <summary>Smart label suggestions <span class="dc-badge plus">Plus</span></summary>
          <div class="dc-item-body">
            While editing, VaultBook analyzes your content and suggests relevant labels as pastel-colored chips with counts. One click to apply — it speeds up tagging without interrupting your writing flow.
          </div>
        </details>
      </div>

      <!-- Organization -->
      <div class="dc-group" id="organization">
        <div class="dc-group-head">
          <div class="dc-group-ic amber">📂</div>
          <div class="dc-group-title">Organization</div>
        </div>

        <details class="dc-item">
          <summary>Hierarchical pages — unlimited nesting <span class="dc-badge plus">Plus</span></summary>
          <div class="dc-item-body">
            Create a page tree with unlimited parent/child nesting, disclosure arrows, drag-and-drop reordering, page icons, color dots, right-click context menus (rename, delete, move), and activity-based sorting. An "All Pages" root view lets you see everything at once.
          </div>
        </details>

        <details class="dc-item">
          <summary>Labels, hashtags &amp; favorites <span class="dc-badge plus">Plus</span></summary>
          <div class="dc-item-body">
            <strong>Labels</strong> are color-coded pill tags in the sidebar — click to filter. <strong>Inline #hashtags</strong> in note content auto-generate Kanban columns in the board tool. <strong>Favorites</strong> (star toggle) get a dedicated quick-access panel in the sidebar with a compact scrollable list.
          </div>
        </details>

        <details class="dc-item">
          <summary>Multi-tab views <span class="dc-badge pro">Pro</span></summary>
          <div class="dc-item-body">
            Open multiple independent entry list tabs at once. Each tab maintains its own sort, filter, pagination, and view state. The tab strip includes a + button to add new views — perfect for comparing research across different pages or labels.
          </div>
        </details>

        <details class="dc-item">
          <summary>Advanced filters &amp; sorting <span class="dc-badge pro">Pro</span></summary>
          <div class="dc-item-body">
            Filter by file type (match any or match all), date field, and date range (any, 7 days, 30 days). Combine filters freely. Sort by multiple fields with a dropdown and toggle ascending/descending.
          </div>
        </details>
      </div>

      <!-- Security -->
      <div class="dc-group" id="security">
        <div class="dc-group-head">
          <div class="dc-group-ic teal">🔐</div>
          <div class="dc-group-title">Security &amp; Encryption</div>
        </div>

        <details class="dc-item">
          <summary>AES-256-GCM per-entry encryption <span class="dc-badge plus">Plus</span></summary>
          <div class="dc-item-body">
            Each protected entry is encrypted independently with <strong>AES-256-GCM</strong>. Key derivation uses <strong>PBKDF2 with 100,000 iterations of SHA-256</strong>. Every encryption generates a unique random <strong>16-byte salt</strong> and <strong>12-byte IV</strong>. Each entry has its own password — compromising one never exposes the rest. Decrypted plaintext is held in memory only and never written to disk.
          </div>
        </details>

        <details class="dc-item">
          <summary>Lock screen <span class="dc-badge plus">Plus</span></summary>
          <div class="dc-item-body">
            Activate the lock and the entire app blurs behind a full-page overlay. All pointer events and text selection are blocked — nothing is visible or interactable until you authenticate. Walk-away protection for shared environments.
          </div>
        </details>

        <details class="dc-item">
          <summary>Zero network architecture <span class="dc-badge plus">Plus</span></summary>
          <div class="dc-item-body">
            VaultBook has <strong>no backend, no API calls, no telemetry, no analytics pings</strong>. It runs entirely in your browser from a local HTML file. No data ever travels over a network connection. Your documents stay on your device, period.
          </div>
        </details>
      </div>

      <!-- Built-in Tools -->
      <div class="dc-group" id="tools">
        <div class="dc-group-head">
          <div class="dc-group-ic blue">🛠️</div>
          <div class="dc-group-title">Built-in Tools</div>
        </div>

        <details class="dc-item">
          <summary>Kanban Board — labels &amp; hashtags to columns <span class="dc-badge pro">Pro</span></summary>
          <div class="dc-item-body">Auto-generates drag-and-drop columns from your labels and inline #hashtags. Cards stay synced with your notes — move a card and the entry updates, edit a note and the board reflects it.</div>
        </details>
        <details class="dc-item">
          <summary>File Analyzer — visualize CSV/TXT data <span class="dc-badge pro">Pro</span></summary>
          <div class="dc-item-body">Drop a CSV or TXT file and instantly see your data analyzed and visualized. Ideal for quick data exploration without leaving your workspace.</div>
        </details>
        <details class="dc-item">
          <summary>RSS / Atom Reader <span class="dc-badge pro">Pro</span></summary>
          <div class="dc-item-body">Follow feeds organized in folders. Stay current with blogs, news, and publications — all inside VaultBook without opening another app.</div>
        </details>
        <details class="dc-item">
          <summary>Threads — chat-style notes <span class="dc-badge pro">Pro</span></summary>
          <div class="dc-item-body">A centered overlay for rapid-fire, chat-style note capture. Great for brainstorms, meeting notes, and stream-of-consciousness writing.</div>
        </details>
        <details class="dc-item">
          <summary>Save URL → Entry <span class="dc-badge pro">Pro</span></summary>
          <div class="dc-item-body">Paste any web page URL and VaultBook creates a searchable note from it. Capture articles, references, and bookmarks directly into your library.</div>
        </details>
        <details class="dc-item">
          <summary>MP3 Cutter &amp; Joiner <span class="dc-badge pro">Pro</span></summary>
          <div class="dc-item-body">Trim silence, cut clips at precise points, and join multiple audio segments — all processed locally in your browser.</div>
        </details>
        <details class="dc-item">
          <summary>PDF Merge, Split &amp; Compress <span class="dc-badge pro">Pro</span></summary>
          <div class="dc-item-body">Combine multiple PDFs into one, split a PDF into individual pages, or compress scanned documents to reduce file size — no upload to any server.</div>
        </details>
        <details class="dc-item">
          <summary>File &amp; Media Explorers <span class="dc-badge pro">Pro</span></summary>
          <div class="dc-item-body">Browse all attachments by type, entry, or page in the File Explorer. The Photo &amp; Video Explorer lets you scan folders of media for a visual gallery experience.</div>
        </details>
        <details class="dc-item">
          <summary>Folder Analyzer, Password Generator &amp; Obsidian Import <span class="dc-badge pro">Pro</span></summary>
          <div class="dc-item-body"><strong>Folder Analyzer</strong> visualizes disk space and file sizes at a glance. <strong>Password Generator</strong> creates strong passwords and copies with one click. <strong>Import from Obsidian</strong> lets you drop .md files to migrate notes instantly.</div>
        </details>
      </div>

      <!-- Files & Indexing -->
      <div class="dc-group" id="files">
        <div class="dc-group-head">
          <div class="dc-group-ic green">📎</div>
          <div class="dc-group-title">Files &amp; Deep Indexing</div>
        </div>

        <details class="dc-item">
          <summary>Attachment management <span class="dc-badge plus">Plus</span></summary>
          <div class="dc-item-body">
            Attach files to entries and to individual sections within entries. All files are stored via the File System Access API in the <strong>/attachments</strong> directory with a JSON manifest (index.txt). Right-click context menus, pending/failed state indicators, and a reindex button (♻️) to rebuild the index at any time.
          </div>
        </details>

        <details class="dc-item">
          <summary>Deep file indexing — XLSX, PPTX, PDF, ZIP, MSG <span class="dc-badge pro">Pro</span></summary>
          <div class="dc-item-body">
            Pro unlocks deep text extraction from: <strong>XLSX/XLSM</strong> (SheetJS), <strong>PPTX</strong> slides (JSZip), <strong>PDF</strong> text layers (pdf.js), <strong>ZIP</strong> archive contents, and <strong>MSG</strong> Outlook emails (subject, from, body + nested attachments). All extracted text is indexed for search. Background warm-up ensures top results have their attachment text ready before you even scroll.
          </div>
        </details>

        <details class="dc-item">
          <summary>OCR of embedded images in documents <span class="dc-badge pro">Pro</span></summary>
          <div class="dc-item-body">
            Pro goes beyond inline OCR — it extracts and OCR's images <strong>inside</strong> other file formats: images within ZIP archives, rendered PDF pages (scanned document support), embedded images inside DOCX (word/media/*), and embedded images inside XLSX (xl/media/*). If there's text in an image buried inside a document, VaultBook will find it.
          </div>
        </details>
      </div>

      <!-- Scheduling & Analytics -->
      <div class="dc-group" id="scheduling">
        <div class="dc-group-head">
          <div class="dc-group-ic pink">📅</div>
          <div class="dc-group-title">Scheduling &amp; Analytics</div>
        </div>

        <details class="dc-item">
          <summary>Timetable — day &amp; week calendar <span class="dc-badge pro">Pro</span></summary>
          <div class="dc-item-body">
            A full calendar with tabbed day and week views over a scrollable 24-hour timeline. Task scheduling and prompts integrate with AI suggestions (upcoming entries in the next 48 hours). All data is persisted to disk so your schedule survives refreshes and sessions.
          </div>
        </details>

        <details class="dc-item">
          <summary>Sidebar time tabs — Recent, Due, Expiring <span class="dc-badge plus">Plus</span></summary>
          <div class="dc-item-body">
            The sidebar always shows three time-oriented tabs: <strong>Recent</strong> (recently modified entries), <strong>Due</strong> (upcoming due dates), and <strong>Expiring</strong> (approaching expiry). A fourth <strong>Tools</strong> tab gives quick access to all built-in tools.
          </div>
        </details>

        <details class="dc-item">
          <summary>Analytics charts &amp; insights <span class="dc-badge pro">Pro</span></summary>
          <div class="dc-item-body">
            Three Canvas-rendered charts: <strong>label utilization</strong> pie chart, <strong>last 14 days activity</strong> line chart, and <strong>pages utilization</strong> pie. Plus attachment type breakdown chips and inline metric pills for entry counts, file counts, and total storage size — all computed locally.
          </div>
        </details>

        <details class="dc-item">
          <summary>Random note spotlight &amp; tickers <span class="dc-badge pro">Pro</span></summary>
          <div class="dc-item-body">
            The 🎲 sidebar widget surfaces a random note every hour with a "new pick" indicator — a gentle way to rediscover forgotten ideas. Companion widgets show a timetable ticker (upcoming events) and attachment ticker (recent file activity).
          </div>
        </details>
      </div>

    </div>
  </div>
</section>


<!-- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     ARCHITECTURE VISUAL
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ -->
<section class="section tint" id="architecture">
  <div class="container">
    <header class="section-head" data-reveal>
      <div class="eyebrow">Under the hood</div>
      <h2 class="h2">How VaultBook stores your world</h2>
      <p class="muted">No server, no database, no runtime. Just plain files in a folder you own.</p>
    </header>

    <div class="dc-arch-visual" data-reveal>
      <div class="dc-arch-flow">
        <div class="dc-arch-node">
          <span class="dc-arch-node-emoji">🌐</span>
          <div class="dc-arch-node-title">Browser</div>
          <div class="dc-arch-node-sub">Chrome / Edge / Brave / Arc</div>
        </div>
        <div class="dc-arch-arrow">→</div>
        <div class="dc-arch-node">
          <span class="dc-arch-node-emoji">📄</span>
          <div class="dc-arch-node-title">VaultBook.html</div>
          <div class="dc-arch-node-sub">Single-file application</div>
        </div>
        <div class="dc-arch-arrow">→</div>
        <div class="dc-arch-node">
          <span class="dc-arch-node-emoji">📂</span>
          <div class="dc-arch-node-title">Your Folder</div>
          <div class="dc-arch-node-sub">File System Access API</div>
        </div>
      </div>

      <div class="dc-tree">
        <span class="folder">📁 my-vault/</span><br>
        <span class="dim">├─</span> <span class="file">license.json</span><br>
        <span class="dim">├─</span> <span class="file">repository.json</span> <span class="dim">← pages, entries, votes</span><br>
        <span class="dim">├─</span> <span class="folder">📁 attachments/</span><br>
        <span class="dim">│  ├─</span> <span class="file">index.txt</span> <span class="dim">← manifest</span><br>
        <span class="dim">│  ├─</span> <span class="file">details-abc123.md</span> <span class="dim">← sidecar body</span><br>
        <span class="dim">│  └─</span> <span class="file">report.pdf</span><br>
        <span class="dim">└─</span> <span class="folder">📁 versions/</span> <span class="dim">← 60-day snapshots</span>
      </div>
    </div>
  </div>
</section>


<!-- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     PLUS vs PRO
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ -->
<section class="section">
  <div class="container">
    <header class="section-head" data-reveal>
      <div class="eyebrow">Choose your tier</div>
      <h2 class="h2">Plus vs Pro — at a glance</h2>
      <p class="muted">Both tiers include the full offline workspace. Pro unlocks advanced AI, tools, and deep indexing.</p>
    </header>

    <div class="dc-compare" data-reveal>
      <div class="dc-compare-card">
        <div class="dc-compare-badge">Plus</div>
        <div class="dc-compare-title">VaultBook Plus</div>
        <div class="dc-compare-price">$49 / year</div>
        <div class="dc-compare-list">
          <div class="dc-compare-li">AI suggestions &amp; sparkle pager</div>
          <div class="dc-compare-li">Natural-language QA search</div>
          <div class="dc-compare-li">Inline OCR &amp; typeahead</div>
          <div class="dc-compare-li">Rich text editor &amp; sections</div>
          <div class="dc-compare-li">Hierarchical pages &amp; labels</div>
          <div class="dc-compare-li">AES-256-GCM encryption</div>
          <div class="dc-compare-li">Attachments &amp; basic indexing</div>
          <div class="dc-compare-li">Sidebar time tabs &amp; basic analytics</div>
          <div class="dc-compare-li">Lock screen &amp; autosave</div>
        </div>
      </div>
      <div class="dc-compare-card">
        <div class="dc-compare-badge">Pro</div>
        <div class="dc-compare-title">VaultBook Pro</div>
        <div class="dc-compare-price">$79 / year</div>
        <div class="dc-compare-list">
          <div class="dc-compare-li">Everything in Plus</div>
          <div class="dc-compare-li">Vote-based reranking &amp; learning</div>
          <div class="dc-compare-li">Related entries with training</div>
          <div class="dc-compare-li">Multi-tab views &amp; advanced filters</div>
          <div class="dc-compare-li">Version history (60-day snapshots)</div>
          <div class="dc-compare-li">Deep indexing: XLSX, PPTX, PDF, ZIP, MSG</div>
          <div class="dc-compare-li">OCR inside documents (DOCX, XLSX, PDF, ZIP)</div>
          <div class="dc-compare-li">12+ built-in tools (Kanban, PDF, RSS…)</div>
          <div class="dc-compare-li">Timetable, charts &amp; random spotlight</div>
        </div>
      </div>
    </div>
  </div>
</section>


<!-- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     CTA
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ -->
<section class="section tint">
  <div class="container">
    <div class="cta-band" data-reveal>
      <div>
        <div class="cta-title">Ready to get started?</div>
        <div class="muted">Download VaultBook, open it in your browser, and start writing — in under a minute.</div>
      </div>
      <div class="cta-actions">
        <a class="btn btn-primary" href="{{ '/get-started/' | relative_url }}">Download VaultBook</a>
        <a class="btn btn-ghost" href="{{ '/help/' | relative_url }}">Visit Help Center</a>
      </div>
    </div>
  </div>
</section>


<!-- ━━━ Live search filter ━━━ -->
<script>
(function(){
  const input = document.getElementById('dcSearch');
  if (!input) return;
  const items = document.querySelectorAll('.dc-item');
  const groups = document.querySelectorAll('.dc-group');
  input.addEventListener('input', function(){
    const q = this.value.toLowerCase().trim();
    if (!q) {
      items.forEach(i => i.style.display = '');
      groups.forEach(g => g.style.display = '');
      return;
    }
    groups.forEach(g => {
      const children = g.querySelectorAll('.dc-item');
      let vis = 0;
      children.forEach(i => {
        const txt = i.textContent.toLowerCase();
        const match = txt.includes(q);
        i.style.display = match ? '' : 'none';
        if (match) { vis++; i.open = true; }
      });
      g.style.display = vis ? '' : 'none';
    });
  });
})();
</script>
