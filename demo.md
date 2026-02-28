---
layout: default
title: Request a Demo
description: See VaultBook in action — a tailored walkthrough of the offline workspace built for serious note-takers and teams.
body_class: demo-page
permalink: /demo/
---

<style>
/* ── Demo hero ───────────────────────────────────────────────── */
.dm-hero{
  padding: 80px 0 60px;
  text-align: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, #faf8ff 0%, #f3f0fa 50%, #fff 100%);
}
.dm-hero::before{
  content: '';
  position: absolute;
  width: 600px; height: 600px;
  border-radius: 50%;
  top: -220px; right: -160px;
  background: radial-gradient(circle, rgba(206,147,216,.12) 0%, transparent 70%);
  pointer-events: none;
}
.dm-hero::after{
  content: '';
  position: absolute;
  width: 500px; height: 500px;
  border-radius: 50%;
  bottom: -200px; left: -120px;
  background: radial-gradient(circle, rgba(129,212,250,.1) 0%, transparent 70%);
  pointer-events: none;
}
.dm-hero .eyebrow{ margin-bottom: 14px; position: relative; z-index: 1; }
.dm-hero-title{
  font-size: clamp(36px, 5.2vw, 56px);
  font-weight: 900;
  letter-spacing: -0.03em;
  line-height: 1.08;
  margin: 0;
  position: relative;
  z-index: 1;
}
.dm-hero-sub{
  margin: 18px auto 0;
  max-width: 52ch;
  font-size: 17px;
  color: rgba(11,11,11,.65);
  line-height: 1.55;
  position: relative;
  z-index: 1;
}
.dm-hero-actions{
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 34px;
  position: relative;
  z-index: 1;
}
.dm-hero-note{
  margin-top: 14px;
  font-size: 13px;
  color: rgba(11,11,11,.42);
  position: relative;
  z-index: 1;
}

/* Telegram button accent */
.btn-telegram{
  background: linear-gradient(135deg, #2AABEE, #229ED9);
  color: #fff;
  border: none;
  font-weight: 800;
}
.btn-telegram:hover{
  background: linear-gradient(135deg, #229ED9, #1E96C8);
  box-shadow: 0 6px 22px rgba(42,171,238,.3);
  transform: translateY(-1px);
}
.btn-telegram svg{
  width: 18px;
  height: 18px;
  margin-right: 8px;
  vertical-align: -3px;
  fill: currentColor;
}

/* ── What you'll see — showcase cards ────────────────────────── */
.dm-showcase{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  margin-top: 32px;
}
.dm-card{
  position: relative;
  background: rgba(255,255,255,.82);
  backdrop-filter: blur(14px) saturate(1.4);
  border: 1px solid rgba(206,147,216,.12);
  border-radius: 20px;
  padding: 28px 22px 24px;
  transition: transform .24s ease, box-shadow .24s ease;
  overflow: hidden;
}
.dm-card::before{
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  border-radius: 20px 20px 0 0;
  opacity: 0;
  transition: opacity .24s ease;
}
.dm-card:hover{
  transform: translateY(-4px);
  box-shadow: 0 14px 40px rgba(206,147,216,.12), 0 2px 8px rgba(0,0,0,.04);
}
.dm-card:hover::before{ opacity: 1; }
.dm-card:nth-child(1)::before{ background: linear-gradient(90deg, #ce93d8, #81d4fa); }
.dm-card:nth-child(2)::before{ background: linear-gradient(90deg, #81d4fa, #80cbc4); }
.dm-card:nth-child(3)::before{ background: linear-gradient(90deg, #80cbc4, #ffcc80); }
.dm-card:nth-child(4)::before{ background: linear-gradient(90deg, #ffcc80, #f48fb1); }
.dm-card:nth-child(5)::before{ background: linear-gradient(90deg, #f48fb1, #ce93d8); }
.dm-card:nth-child(6)::before{ background: linear-gradient(90deg, #ce93d8, #80cbc4); }
.dm-card-ic{
  width: 44px; height: 44px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  margin-bottom: 14px;
  transition: transform .22s ease;
}
.dm-card:hover .dm-card-ic{ transform: scale(1.1); }
.dm-card:nth-child(1) .dm-card-ic{ background: linear-gradient(135deg, rgba(206,147,216,.2), rgba(243,229,245,.2)); color: #7b1fa2; }
.dm-card:nth-child(2) .dm-card-ic{ background: linear-gradient(135deg, rgba(129,212,250,.2), rgba(179,229,252,.15)); color: #0288d1; }
.dm-card:nth-child(3) .dm-card-ic{ background: linear-gradient(135deg, rgba(128,203,196,.2), rgba(178,223,219,.15)); color: #00796b; }
.dm-card:nth-child(4) .dm-card-ic{ background: linear-gradient(135deg, rgba(255,204,128,.25), rgba(255,224,178,.18)); color: #e65100; }
.dm-card:nth-child(5) .dm-card-ic{ background: linear-gradient(135deg, rgba(244,143,177,.2), rgba(248,187,208,.15)); color: #c2185b; }
.dm-card:nth-child(6) .dm-card-ic{ background: linear-gradient(135deg, rgba(165,214,167,.2), rgba(200,230,201,.15)); color: #2e7d32; }
.dm-card-title{ font-weight: 850; font-size: 17px; }
.dm-card-text{ margin-top: 6px; font-size: 14px; color: rgba(11,11,11,.6); line-height: 1.55; }

/* ── Stat strip ──────────────────────────────────────────────── */
.dm-stats{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-top: 32px;
}
.dm-stat{
  text-align: center;
  padding: 22px 14px;
  background: rgba(255,255,255,.65);
  border: 1px solid rgba(206,147,216,.1);
  border-radius: 18px;
  transition: transform .2s ease, box-shadow .2s ease;
}
.dm-stat:hover{
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(206,147,216,.1);
}
.dm-stat-val{
  font-size: 32px;
  font-weight: 900;
  letter-spacing: -0.03em;
  background: linear-gradient(135deg, #7b1fa2, #0288d1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.dm-stat-label{
  margin-top: 4px;
  font-size: 13px;
  color: rgba(11,11,11,.5);
  font-weight: 650;
}

/* ── Use-case pills ──────────────────────────────────────────── */
.dm-uses{
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  margin-top: 28px;
}
.dm-use{
  padding: 12px 20px;
  border-radius: 999px;
  border: 1px solid rgba(206,147,216,.15);
  background: linear-gradient(135deg, rgba(243,229,245,.15), rgba(225,245,254,.1));
  font-weight: 700;
  font-size: 14px;
  color: rgba(11,11,11,.7);
  transition: all .2s ease;
}
.dm-use:hover{
  background: linear-gradient(135deg, rgba(243,229,245,.4), rgba(225,245,254,.3));
  border-color: rgba(206,147,216,.3);
  transform: translateY(-2px);
  color: #7b1fa2;
}

/* ── How it works (timeline) ─────────────────────────────────── */
.dm-timeline{
  max-width: 560px;
  margin: 32px auto 0;
  display: flex;
  flex-direction: column;
  gap: 0;
  position: relative;
}
.dm-timeline::before{
  content: '';
  position: absolute;
  left: 22px;
  top: 28px;
  bottom: 28px;
  width: 2px;
  background: linear-gradient(180deg, rgba(206,147,216,.25), rgba(129,212,250,.25), rgba(128,203,196,.2));
  border-radius: 2px;
}
.dm-tl-item{
  display: flex;
  gap: 18px;
  align-items: flex-start;
  padding: 18px 0;
  position: relative;
}
.dm-tl-dot{
  width: 44px; height: 44px;
  min-width: 44px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  font-weight: 900;
  font-size: 16px;
  position: relative;
  z-index: 1;
  transition: transform .2s ease;
}
.dm-tl-item:hover .dm-tl-dot{ transform: scale(1.12); }
.dm-tl-item:nth-child(1) .dm-tl-dot{ background: linear-gradient(135deg, rgba(206,147,216,.22), rgba(225,190,231,.15)); color: #7b1fa2; }
.dm-tl-item:nth-child(2) .dm-tl-dot{ background: linear-gradient(135deg, rgba(129,212,250,.22), rgba(179,229,252,.15)); color: #0277bd; }
.dm-tl-item:nth-child(3) .dm-tl-dot{ background: linear-gradient(135deg, rgba(128,203,196,.22), rgba(178,223,219,.15)); color: #00796b; }
.dm-tl-item:nth-child(4) .dm-tl-dot{ background: linear-gradient(135deg, rgba(255,204,128,.28), rgba(255,224,178,.18)); color: #e65100; }
.dm-tl-body{ flex: 1; }
.dm-tl-title{ font-weight: 850; font-size: 16px; }
.dm-tl-text{ margin-top: 4px; font-size: 14px; color: rgba(11,11,11,.58); line-height: 1.5; }

/* ── Mid-page CTA ────────────────────────────────────────────── */
.dm-mid-cta{
  text-align: center;
  margin-top: 40px;
  padding: 38px 28px;
  border-radius: 22px;
  background: linear-gradient(135deg, rgba(243,229,245,.2), rgba(225,245,254,.15));
  border: 1px solid rgba(206,147,216,.14);
  position: relative;
  overflow: hidden;
}
.dm-mid-cta::before{
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: linear-gradient(90deg, #f48fb1, #ce93d8, #81d4fa, #80cbc4, #ffcc80);
  opacity: .6;
}
.dm-mid-cta-title{
  font-size: 22px;
  font-weight: 900;
  letter-spacing: -0.02em;
}
.dm-mid-cta-sub{
  margin-top: 8px;
  font-size: 15px;
  color: rgba(11,11,11,.55);
  max-width: 44ch;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.5;
}
.dm-mid-cta .btn-telegram{ margin-top: 22px; }

/* ── Responsive ──────────────────────────────────────────────── */
@media (max-width: 900px){
  .dm-showcase{ grid-template-columns: 1fr 1fr; }
  .dm-stats{ grid-template-columns: 1fr 1fr; }
}
@media (max-width: 600px){
  .dm-showcase{ grid-template-columns: 1fr; }
  .dm-stats{ grid-template-columns: 1fr 1fr; }
  .dm-uses{ gap: 8px; }
  .dm-use{ font-size: 13px; padding: 10px 16px; }
}
</style>

<!-- ━━━ HERO ━━━ -->
<section class="dm-hero">
  <div class="container" data-reveal>
    <div class="eyebrow">PERSONALIZED WALKTHROUGH</div>
    <h1 class="dm-hero-title">See VaultBook in action.<br>Tailored to your workflow.</h1>
    <p class="dm-hero-sub">
      Book a one-on-one demo and we'll walk you through the features that matter
      most to you — from AI-powered search to encrypted notebooks and everything in between.
    </p>
    <div class="dm-hero-actions">
      <a class="btn btn-telegram" href="https://t.me/VaultBook" target="_blank" rel="noopener">
        <svg viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 1 0 24 12.056A12.01 12.01 0 0 0 11.944 0Zm5.655 8.166c-.18 1.897-.962 6.502-1.36 8.627c-.168.9-.499 1.201-.82 1.23c-.696.065-1.225-.46-1.9-.902c-1.056-.693-1.653-1.124-2.678-1.8c-1.185-.78-.417-1.21.258-1.91c.177-.184 3.247-2.977 3.307-3.23c.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345c-.48.33-.913.492-1.302.484c-.428-.008-1.252-.241-1.865-.44c-.752-.245-1.349-.374-1.297-.789c.027-.216.325-.437.893-.663c3.498-1.524 5.83-2.529 6.998-3.014c3.332-1.386 4.025-1.627 4.476-1.635c.099-.002.321.023.465.141a.506.506 0 0 1 .171.325c.016.093.036.306.02.472Z"/></svg>
        Message us on Telegram
      </a>
      <a class="btn btn-ghost" href="{{ '/get-started/' | relative_url }}">Or get started now — free</a>
    </div>
    <p class="dm-hero-note">Typically respond within a few hours. No sales pitch — just a real walkthrough.</p>
  </div>
</section>

<!-- ━━━ WHAT YOU'LL SEE ━━━ -->
<section class="section">
  <div class="container">
    <header class="section-head" data-reveal>
      <h2 class="h2">What the demo covers</h2>
      <p class="muted">Tell us what you're interested in and we'll focus on exactly that. Here's what most people ask about.</p>
    </header>

    <div class="dm-showcase" data-reveal>
      <div class="dm-card">
        <div class="dm-card-ic">{% include icon.html name="spark" %}</div>
        <div class="dm-card-title">AI Suggestions &amp; Smart QA</div>
        <div class="dm-card-text">See how VaultBook learns your patterns, surfaces upcoming tasks, and answers natural-language questions from your own library — without ever going online.</div>
      </div>
      <div class="dm-card">
        <div class="dm-card-ic">{% include icon.html name="search" %}</div>
        <div class="dm-card-title">Deep search &amp; inline OCR</div>
        <div class="dm-card-text">Search across notes, attachments, and even text extracted from images. Watch weighted scoring rank results by relevance in real time.</div>
      </div>
      <div class="dm-card">
        <div class="dm-card-ic">{% include icon.html name="lock" %}</div>
        <div class="dm-card-title">Per-entry encryption</div>
        <div class="dm-card-text">We'll lock and unlock a note live so you can see AES-256-GCM encryption working — password per entry, decrypted only in memory, never on disk.</div>
      </div>
      <div class="dm-card">
        <div class="dm-card-ic">{% include icon.html name="folder" %}</div>
        <div class="dm-card-title">Pages, sections &amp; labels</div>
        <div class="dm-card-text">Nested pages, collapsible sections with their own editors and attachments, color-coded labels, and drag-and-drop — all running from one HTML file.</div>
      </div>
      <div class="dm-card">
        <div class="dm-card-ic">{% include icon.html name="brain" %}</div>
        <div class="dm-card-title">Related Entries &amp; vote learning</div>
        <div class="dm-card-text">Watch the AI find contextually similar notes and see how your upvotes and downvotes retrain the relevance model across sessions.</div>
      </div>
      <div class="dm-card">
        <div class="dm-card-ic">{% include icon.html name="puzzle" %}</div>
        <div class="dm-card-title">12+ built-in tools</div>
        <div class="dm-card-text">Kanban board, RSS reader, PDF tools, file analyzer, media explorer, threads, and more — each one opens inside VaultBook, zero installs.</div>
      </div>
    </div>
  </div>
</section>

<!-- ━━━ NUMBERS ━━━ -->
<section class="section tint">
  <div class="container">
    <header class="section-head" data-reveal>
      <h2 class="h2">Built for substance, not subscriptions</h2>
      <p class="muted">VaultBook ships as a single HTML file. No servers, no accounts, no recurring fees.</p>
    </header>

    <div class="dm-stats" data-reveal>
      <div class="dm-stat">
        <div class="dm-stat-val">1</div>
        <div class="dm-stat-label">File to run the entire app</div>
      </div>
      <div class="dm-stat">
        <div class="dm-stat-val">0</div>
        <div class="dm-stat-label">Data sent to any server</div>
      </div>
      <div class="dm-stat">
        <div class="dm-stat-val">12+</div>
        <div class="dm-stat-label">Productivity tools built in</div>
      </div>
      <div class="dm-stat">
        <div class="dm-stat-val">256</div>
        <div class="dm-stat-label">Bit AES-GCM encryption</div>
      </div>
    </div>

    <div style="text-align:center; margin-top:32px;" data-reveal>
      <p class="muted" style="max-width:48ch; margin:0 auto;">Perfect for anyone who takes their notes — and their privacy — seriously.</p>
    </div>

    <div class="dm-uses" data-reveal>
      <span class="dm-use">Researchers</span>
      <span class="dm-use">Developers</span>
      <span class="dm-use">Security teams</span>
      <span class="dm-use">Journalists</span>
      <span class="dm-use">Clinicians</span>
      <span class="dm-use">Legal professionals</span>
      <span class="dm-use">Students</span>
      <span class="dm-use">Small businesses</span>
    </div>
  </div>
</section>

<!-- ━━━ HOW A DEMO WORKS ━━━ -->
<section class="section">
  <div class="container">
    <header class="section-head" data-reveal>
      <h2 class="h2">How a demo works</h2>
      <p class="muted">Simple, fast, and on your terms.</p>
    </header>

    <div class="dm-timeline" data-reveal>
      <div class="dm-tl-item">
        <div class="dm-tl-dot">1</div>
        <div class="dm-tl-body">
          <div class="dm-tl-title">Send us a message</div>
          <div class="dm-tl-text">Tap the button below and tell us what you're looking to do — a few words is plenty. We'll reply within a few hours.</div>
        </div>
      </div>
      <div class="dm-tl-item">
        <div class="dm-tl-dot">2</div>
        <div class="dm-tl-body">
          <div class="dm-tl-title">We tailor the walkthrough</div>
          <div class="dm-tl-text">Based on your use case, we pick the features that matter most and prepare a focused, real-data demo — no generic slides.</div>
        </div>
      </div>
      <div class="dm-tl-item">
        <div class="dm-tl-dot">3</div>
        <div class="dm-tl-body">
          <div class="dm-tl-title">Live session or async recording</div>
          <div class="dm-tl-text">Choose a live screen-share at a time that works for you, or request an async recording you can watch on your own schedule.</div>
        </div>
      </div>
      <div class="dm-tl-item">
        <div class="dm-tl-dot">4</div>
        <div class="dm-tl-body">
          <div class="dm-tl-title">Download &amp; start building</div>
          <div class="dm-tl-text">Walk away with VaultBook ready to use. We're available on Telegram for follow-up questions anytime.</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ━━━ FINAL CTA ━━━ -->
<section class="section tint">
  <div class="container">
    <div class="dm-mid-cta" data-reveal>
      <div class="dm-mid-cta-title">Ready to see it for yourself?</div>
      <div class="dm-mid-cta-sub">
        Message us on Telegram and we'll set up a personalized walkthrough — or just answer your questions on the spot.
      </div>
      <a class="btn btn-telegram" href="https://t.me/VaultBook" target="_blank" rel="noopener">
        <svg viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 1 0 24 12.056A12.01 12.01 0 0 0 11.944 0Zm5.655 8.166c-.18 1.897-.962 6.502-1.36 8.627c-.168.9-.499 1.201-.82 1.23c-.696.065-1.225-.46-1.9-.902c-1.056-.693-1.653-1.124-2.678-1.8c-1.185-.78-.417-1.21.258-1.91c.177-.184 3.247-2.977 3.307-3.23c.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345c-.48.33-.913.492-1.302.484c-.428-.008-1.252-.241-1.865-.44c-.752-.245-1.349-.374-1.297-.789c.027-.216.325-.437.893-.663c3.498-1.524 5.83-2.529 6.998-3.014c3.332-1.386 4.025-1.627 4.476-1.635c.099-.002.321.023.465.141a.506.506 0 0 1 .171.325c.016.093.036.306.02.472Z"/></svg>
        Message us on Telegram
      </a>
      <div style="margin-top:16px;">
        <a class="btn btn-ghost" href="{{ '/get-started/' | relative_url }}">Skip the demo — download free</a>
      </div>
    </div>
  </div>
</section>
