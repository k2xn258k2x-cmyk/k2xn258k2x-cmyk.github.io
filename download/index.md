---
layout: default
title: Download VaultBook
description: Download VaultBook for Mac, Windows, or Linux. A secure, offline-first workspace that runs entirely in your browser.
body_class: dl-page
permalink: /download/
---

<style>
/* ── Download: hero ──────────────────────────────────────────── */
.dl-hero{
  padding: 72px 0 56px;
  text-align: center;
  background: linear-gradient(180deg, #faf8ff 0%, #fff 100%);
}
.dl-hero .eyebrow{ margin-bottom: 14px; }
.dl-hero-title{
  font-size: clamp(36px, 5.2vw, 56px);
  font-weight: 900;
  letter-spacing: -0.03em;
  line-height: 1.08;
  margin: 0;
}
.dl-hero-sub{
  margin: 16px auto 0;
  max-width: 54ch;
  font-size: 17px;
  color: rgba(11,11,11,.68);
  line-height: 1.55;
}

/* ── Platform cards ──────────────────────────────────────────── */
.dl-platforms{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  margin-top: 40px;
  max-width: 860px;
  margin-left: auto;
  margin-right: auto;
}
.dl-plat{
  position: relative;
  background: rgba(255,255,255,.92);
  backdrop-filter: blur(16px) saturate(1.5);
  border: 1px solid rgba(206,147,216,.15);
  border-radius: 20px;
  padding: 32px 24px 28px;
  text-align: center;
  transition: transform .22s ease, box-shadow .22s ease;
}
.dl-plat:hover{
  transform: translateY(-3px);
  box-shadow: 0 12px 36px rgba(206,147,216,.12), 0 2px 8px rgba(0,0,0,.04);
}
.dl-plat-icon{
  width: 44px;
  height: 44px;
  margin: 0 auto 14px;
  display: block;
  opacity: .85;
  transition: opacity .18s ease, transform .18s ease;
}
.dl-plat:hover .dl-plat-icon{ opacity: 1; transform: scale(1.08); }
.dl-plat-name{
  font-weight: 850;
  font-size: 18px;
  letter-spacing: -0.01em;
}
.dl-plat-note{
  margin-top: 6px;
  font-size: 13px;
  color: rgba(11,11,11,.52);
  line-height: 1.45;
}
.dl-plat .btn{ margin-top: 18px; width: 100%; }

/* ── Download cards (Plus / Pro) ─────────────────────────────── */
.dl-editions{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  margin-top: 40px;
  max-width: 680px;
  margin-left: auto;
  margin-right: auto;
}
.dl-ed{
  position: relative;
  background: rgba(255,255,255,.92);
  backdrop-filter: blur(16px) saturate(1.5);
  border: 1px solid rgba(206,147,216,.15);
  border-radius: 20px;
  padding: 28px 24px 24px;
  text-align: left;
  transition: transform .22s ease, box-shadow .22s ease;
}
.dl-ed:hover{
  transform: translateY(-3px);
  box-shadow: 0 12px 36px rgba(206,147,216,.12), 0 2px 8px rgba(0,0,0,.04);
}
.dl-ed.featured{
  border-color: rgba(129,212,250,.35);
  box-shadow: 0 4px 18px rgba(129,212,250,.1);
}
.dl-ed.featured::before{
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  border-radius: 20px 20px 0 0;
  background: linear-gradient(90deg, #81d4fa, #ce93d8, #ffcc80);
}
.dl-ed-badge{
  display: inline-block;
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: .06em;
  padding: 3px 10px;
  border-radius: 8px;
  background: linear-gradient(135deg, rgba(243,229,245,.5), rgba(225,245,254,.4));
  color: #6a1b9a;
}
.dl-ed.featured .dl-ed-badge{
  background: linear-gradient(135deg, rgba(129,212,250,.22), rgba(179,229,252,.15));
  color: #0277bd;
}
.dl-ed-name{
  margin-top: 10px;
  font-weight: 850;
  font-size: 20px;
}
.dl-ed-desc{
  margin-top: 6px;
  font-size: 14px;
  color: rgba(11,11,11,.58);
  line-height: 1.5;
}
.dl-ed-list{
  margin-top: 14px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.dl-ed-item{
  font-size: 13px;
  color: rgba(11,11,11,.7);
  padding-left: 18px;
  position: relative;
}
.dl-ed-item::before{
  content: '✓';
  position: absolute;
  left: 0;
  color: #43a047;
  font-weight: 700;
}
.dl-ed .btn{ margin-top: 18px; width: 100%; }

/* ── Requirements list ───────────────────────────────────────── */
.dl-reqs{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  margin-top: 28px;
  max-width: 860px;
  margin-left: auto;
  margin-right: auto;
}
.dl-req{
  background: rgba(255,255,255,.82);
  backdrop-filter: blur(12px) saturate(1.4);
  border: 1px solid rgba(206,147,216,.1);
  border-radius: 16px;
  padding: 22px 20px;
}
.dl-req-title{
  font-weight: 800;
  font-size: 14px;
  margin-bottom: 6px;
}
.dl-req-text{
  font-size: 13px;
  color: rgba(11,11,11,.6);
  line-height: 1.5;
}

/* ── Responsive ──────────────────────────────────────────────── */
@media (max-width: 720px){
  .dl-platforms{ grid-template-columns: 1fr; max-width: 360px; }
  .dl-editions{ grid-template-columns: 1fr; max-width: 400px; }
  .dl-reqs{ grid-template-columns: 1fr; max-width: 400px; }
}
</style>

<!-- ━━━ HERO ━━━ -->
<section class="dl-hero">
  <div class="container" data-reveal>
    <div class="eyebrow">DOWNLOAD VAULTBOOK</div>
    <h1 class="dl-hero-title">One file. Any platform.<br>Your workspace, everywhere.</h1>
    <p class="dl-hero-sub">
      VaultBook runs in your browser — no installation, no accounts, no cloud.
      Download the zip, open the HTML file, and start building your private workspace.
    </p>

    <div class="dl-platforms" data-reveal>
      <a class="dl-plat" href="{{ '/download/mac/' | relative_url }}" style="text-decoration:none;color:inherit;">
        <img class="dl-plat-icon" src="{{ '/assets/icons/apple.svg' | relative_url }}" alt="macOS">
        <div class="dl-plat-name">macOS</div>
        <div class="dl-plat-note">Chrome, Edge, Arc, or Brave on<br>Apple Silicon &amp; Intel</div>
        <span class="btn btn-ghost">Setup guide →</span>
      </a>
      <a class="dl-plat" href="{{ '/download/windows/' | relative_url }}" style="text-decoration:none;color:inherit;">
        <img class="dl-plat-icon" src="{{ '/assets/icons/windows.svg' | relative_url }}" alt="Windows">
        <div class="dl-plat-name">Windows</div>
        <div class="dl-plat-note">Chrome, Edge, or Brave on<br>Windows 10 &amp; 11</div>
        <span class="btn btn-ghost">Setup guide →</span>
      </a>
      <a class="dl-plat" href="{{ '/download/linux/' | relative_url }}" style="text-decoration:none;color:inherit;">
        <img class="dl-plat-icon" src="{{ '/assets/icons/linux.svg' | relative_url }}" alt="Linux">
        <div class="dl-plat-name">Linux</div>
        <div class="dl-plat-note">Chrome or Chromium on<br>Ubuntu, Fedora, Arch &amp; more</div>
        <span class="btn btn-ghost">Setup guide →</span>
      </a>
    </div>
  </div>
</section>

<!-- ━━━ EDITIONS ━━━ -->
<section class="section">
  <div class="container">
    <header class="section-head" data-reveal>
      <h2 class="h2">Choose your edition</h2>
      <p class="muted">Both editions ship as a single HTML file. Same download, same setup — different feature sets.</p>
    </header>

    <div class="dl-editions" data-reveal>
      <div class="dl-ed">
        <span class="dl-ed-badge">Core</span>
        <div class="dl-ed-name">VaultBook Plus</div>
        <div class="dl-ed-desc">A solid workspace for notes, files, and organization.</div>
        <div class="dl-ed-list">
          <div class="dl-ed-item">Unlimited notes, pages &amp; sections</div>
          <div class="dl-ed-item">Rich text editor with tables &amp; code</div>
          <div class="dl-ed-item">File attachments &amp; basic indexing</div>
          <div class="dl-ed-item">Labels, favorites &amp; search</div>
        </div>
        <a class="btn btn-ghost" href="https://raw.githubusercontent.com/k2xn258k2x-cmyk/Note/main/VaultBook_Plus.zip" download>Download Plus</a>
      </div>

      <div class="dl-ed featured">
        <span class="dl-ed-badge">Recommended</span>
        <div class="dl-ed-name">VaultBook Pro</div>
        <div class="dl-ed-desc">Full power — AI features, encryption, tools, and analytics.</div>
        <div class="dl-ed-list">
          <div class="dl-ed-item">Everything in Plus</div>
          <div class="dl-ed-item">AI Suggestions, Smart Search &amp; QA</div>
          <div class="dl-ed-item">AES-256 per-entry encryption</div>
          <div class="dl-ed-item">12+ built-in tools &amp; analytics</div>
          <div class="dl-ed-item">Version history &amp; timetable</div>
        </div>
        <a class="btn btn-primary" href="https://raw.githubusercontent.com/k2xn258k2x-cmyk/Note/main/VaultBook_Pro.zip" download>Download Pro</a>
      </div>
    </div>

    <div style="text-align:center; margin-top:18px;" data-reveal>
      <p class="muted" style="font-size:13px;">
        See the <a href="{{ '/get-started/' | relative_url }}" style="color:#2563eb;text-decoration:underline;">Get Started</a> page for a full feature comparison.
      </p>
    </div>
  </div>
</section>

<!-- ━━━ REQUIREMENTS ━━━ -->
<section class="section tint">
  <div class="container">
    <header class="section-head" data-reveal>
      <h2 class="h2">What you need</h2>
      <p class="muted">No servers, no dependencies, no build steps.</p>
    </header>

    <div class="dl-reqs" data-reveal>
      <div class="dl-req">
        <div class="dl-req-title">Browser</div>
        <div class="dl-req-text">
          Any Chromium-based browser — Chrome, Edge, Arc, Brave, or Vivaldi.
          File System Access API is required for local storage.
        </div>
      </div>
      <div class="dl-req">
        <div class="dl-req-title">Storage</div>
        <div class="dl-req-text">
          A local folder with at least 50 MB free.
          VaultBook keeps everything on your device — notes, attachments, and settings.
        </div>
      </div>
      <div class="dl-req">
        <div class="dl-req-title">Internet</div>
        <div class="dl-req-text">
          Not required. VaultBook is fully offline after download.
          No telemetry, no cloud sync, no background network calls.
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ━━━ CTA ━━━ -->
<section class="section">
  <div class="container">
    <div class="cta-band" data-reveal>
      <div>
        <div class="cta-title">Need help getting started?</div>
        <div class="muted">The full setup walkthrough takes under a minute — unzip, open, connect.</div>
      </div>
      <div class="cta-actions">
        <a class="btn btn-primary" href="{{ '/get-started/' | relative_url }}">Get started</a>
        <a class="btn btn-ghost" href="{{ '/help/' | relative_url }}">Help &amp; FAQ</a>
      </div>
    </div>
  </div>
</section>
