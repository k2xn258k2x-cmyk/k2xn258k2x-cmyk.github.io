---
layout: default
title: Careers
description: "Join the team building VaultBook — the most intelligent offline-first workspace. We're hiring across AI, search, security, frontend, data engineering, and design."
body_class: careers-page
permalink: /careers/
---

<style>
/* ── Hero ────────────────────────────────────────────────────── */
.cr-hero{
  padding: 80px 0 64px;
  text-align: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, #faf8ff 0%, #f3f0fa 42%, #fff 100%);
}
.cr-hero::before{
  content: '';
  position: absolute;
  width: 800px; height: 800px;
  border-radius: 50%;
  top: -360px; left: 50%;
  transform: translateX(-50%);
  background: radial-gradient(circle, rgba(206,147,216,.12) 0%, rgba(129,212,250,.06) 50%, transparent 72%);
  pointer-events: none;
}
.cr-hero::after{
  content: '';
  position: absolute;
  width: 440px; height: 440px;
  border-radius: 50%;
  bottom: -180px; right: -80px;
  background: radial-gradient(circle, rgba(128,203,196,.07) 0%, transparent 70%);
  pointer-events: none;
}
.cr-eyebrow{
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
.cr-hero-title{
  font-size: clamp(36px, 5.4vw, 58px);
  font-weight: 900;
  letter-spacing: -0.035em;
  line-height: 1.06;
  margin: 0;
  position: relative; z-index: 1;
}
.cr-hero-sub{
  margin: 18px auto 0;
  max-width: 54ch;
  font-size: 17px;
  color: rgba(11,11,11,.6);
  line-height: 1.6;
  position: relative; z-index: 1;
}

/* ── Stats strip ─────────────────────────────────────────────── */
.cr-stats{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  margin-top: 44px;
  position: relative; z-index: 1;
  max-width: 740px;
  margin-left: auto;
  margin-right: auto;
}
.cr-stat{
  text-align: center;
  padding: 20px 10px;
  background: rgba(255,255,255,.7);
  border: 1px solid rgba(206,147,216,.1);
  border-radius: 16px;
  transition: transform .2s ease, box-shadow .2s ease;
}
.cr-stat:hover{
  transform: translateY(-2px);
  box-shadow: 0 8px 22px rgba(206,147,216,.1);
}
.cr-stat-val{
  font-size: 28px;
  font-weight: 900;
  letter-spacing: -0.03em;
  background: linear-gradient(135deg, #7b1fa2, #0288d1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.cr-stat-label{
  margin-top: 3px;
  font-size: 12.5px;
  color: rgba(11,11,11,.48);
  font-weight: 650;
}

/* ── Section layout ──────────────────────────────────────────── */
.cr-section{
  padding: 64px 0;
}
.cr-section + .cr-section{ padding-top: 0; }
.cr-section-head{
  text-align: center;
  margin-bottom: 36px;
}
.cr-section-title{
  font-size: clamp(26px, 3.8vw, 38px);
  font-weight: 900;
  letter-spacing: -0.03em;
  margin: 14px 0 0;
}
.cr-section-sub{
  font-size: 16px;
  color: rgba(11,11,11,.55);
  max-width: 52ch;
  margin: 12px auto 0;
  line-height: 1.55;
}

/* ── Perks grid ──────────────────────────────────────────────── */
.cr-perks{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 32px;
}
.cr-perk{
  border: 1px solid rgba(206,147,216,.1);
  border-radius: 20px;
  padding: 24px 20px;
  background: linear-gradient(180deg, #fff 0%, rgba(243,229,245,.06) 100%);
  position: relative;
  overflow: hidden;
  transition: transform .24s ease, box-shadow .24s ease;
}
.cr-perk:hover{
  transform: translateY(-3px);
  box-shadow: 0 12px 32px rgba(206,147,216,.1);
}
.cr-perk-ic{
  font-size: 24px;
  margin-bottom: 12px;
}
.cr-perk-title{ font-weight: 850; font-size: 16px; }
.cr-perk-text{ margin-top: 6px; font-size: 13.5px; color: rgba(11,11,11,.52); line-height: 1.5; }

/* ── Department filter ───────────────────────────────────────── */
.cr-filters{
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 32px;
}
.cr-filter{
  padding: 7px 18px;
  border-radius: 999px;
  border: 1px solid rgba(206,147,216,.12);
  background: rgba(255,255,255,.6);
  font-size: 13px;
  font-weight: 700;
  color: rgba(11,11,11,.6);
  cursor: pointer;
  transition: all .2s ease;
  -webkit-text-fill-color: rgba(11,11,11,.6);
}
.cr-filter:hover,
.cr-filter.active{
  background: linear-gradient(135deg, rgba(206,147,216,.15), rgba(129,212,250,.1));
  border-color: rgba(206,147,216,.25);
  color: #7b1fa2;
  -webkit-text-fill-color: #7b1fa2;
}

/* ── Job listings ────────────────────────────────────────────── */
.cr-jobs{
  max-width: 820px;
  margin: 0 auto;
}
.cr-dept-label{
  font-size: 12px;
  font-weight: 750;
  text-transform: uppercase;
  letter-spacing: .14em;
  color: #7b1fa2;
  -webkit-text-fill-color: #7b1fa2;
  margin-top: 32px;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(206,147,216,.1);
}
.cr-dept-label:first-child{ margin-top: 0; }
.cr-job{
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
  border: 1px solid rgba(206,147,216,.08);
  border-radius: 14px;
  margin-bottom: 8px;
  background: rgba(255,255,255,.6);
  transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
}
.cr-job:hover{
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(206,147,216,.1);
  border-color: rgba(206,147,216,.22);
}
.cr-job-info{ flex: 1; }
.cr-job-title{ font-weight: 800; font-size: 15px; }
.cr-job-meta{
  display: flex;
  gap: 12px;
  margin-top: 4px;
  font-size: 12.5px;
  color: rgba(11,11,11,.42);
  flex-wrap: wrap;
}
.cr-job-meta span{
  display: inline-flex;
  align-items: center;
  gap: 4px;
}
.cr-job-tags{
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
}
.cr-job-tag{
  font-size: 10.5px;
  font-weight: 700;
  padding: 3px 9px;
  border-radius: 999px;
  letter-spacing: .03em;
}
.cr-job-tag.ai{ background: rgba(206,147,216,.1); color: #7b1fa2; -webkit-text-fill-color: #7b1fa2; }
.cr-job-tag.fe{ background: rgba(129,212,250,.12); color: #0277bd; -webkit-text-fill-color: #0277bd; }
.cr-job-tag.sec{ background: rgba(244,143,177,.1); color: #c2185b; -webkit-text-fill-color: #c2185b; }
.cr-job-tag.data{ background: rgba(128,203,196,.12); color: #00796b; -webkit-text-fill-color: #00796b; }
.cr-job-tag.design{ background: rgba(255,204,128,.15); color: #e65100; -webkit-text-fill-color: #e65100; }
.cr-job-tag.infra{ background: rgba(165,214,167,.12); color: #2e7d32; -webkit-text-fill-color: #2e7d32; }
.cr-job-tag.product{ background: rgba(179,157,219,.12); color: #512da8; -webkit-text-fill-color: #512da8; }

.cr-job-arrow{
  width: 28px; height: 28px;
  min-width: 28px;
  border-radius: 8px;
  background: linear-gradient(135deg, rgba(243,229,245,.3), rgba(225,245,254,.2));
  display: grid;
  place-items: center;
  font-size: 13px;
  color: #7b1fa2;
  -webkit-text-fill-color: #7b1fa2;
  transition: transform .2s ease, background .2s ease;
}
.cr-job:hover .cr-job-arrow{
  transform: translateX(3px);
  background: linear-gradient(135deg, rgba(206,147,216,.2), rgba(129,212,250,.15));
}

/* ── Application band ────────────────────────────────────────── */
.cr-apply-band{
  margin-top: 48px;
  border: 1px solid rgba(206,147,216,.14);
  border-radius: 24px;
  background: linear-gradient(135deg, rgba(255,255,255,.94), rgba(243,229,245,.15) 40%, rgba(225,245,254,.1) 100%);
  padding: 32px 32px;
  box-shadow: 0 12px 40px rgba(206,147,216,.08), 0 2px 6px rgba(0,0,0,.03);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  position: relative;
  overflow: hidden;
  transition: box-shadow .3s ease;
}
.cr-apply-band::before{
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: linear-gradient(90deg, #f48fb1, #ce93d8, #81d4fa, #80cbc4);
  opacity: .5;
}
.cr-apply-band:hover{
  box-shadow: 0 16px 48px rgba(206,147,216,.12), 0 4px 10px rgba(0,0,0,.04);
}
.cr-apply-ic{
  width: 52px; height: 52px;
  min-width: 52px;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(0,136,204,.12), rgba(0,136,204,.06));
  display: grid; place-items: center;
  font-size: 24px;
}
.cr-apply-body{ flex: 1; }
.cr-apply-title{ font-weight: 850; font-size: 18px; }
.cr-apply-text{ font-size: 14.5px; color: rgba(11,11,11,.55); margin-top: 4px; line-height: 1.5; }

/* ── Bottom CTA ──────────────────────────────────────────────── */
.cr-cta{
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
.cr-cta::before{
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: linear-gradient(90deg, #f48fb1, #ce93d8, #81d4fa, #80cbc4, #ffcc80);
  opacity: .55;
}
.cr-cta-title{
  font-size: clamp(22px, 3vw, 30px);
  font-weight: 900;
  letter-spacing: -0.02em;
  margin: 0;
}
.cr-cta-sub{
  font-size: 16px;
  color: rgba(11,11,11,.55);
  margin: 10px 0 0;
  line-height: 1.55;
}
.cr-cta-actions{
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 28px;
}

/* ── Responsive ──────────────────────────────────────────────── */
@media (max-width: 900px){
  .cr-perks{ grid-template-columns: 1fr 1fr; }
  .cr-stats{ grid-template-columns: 1fr 1fr; }
}
@media (max-width: 600px){
  .cr-perks{ grid-template-columns: 1fr; }
  .cr-stats{ grid-template-columns: 1fr 1fr; }
  .cr-job{ flex-direction: column; align-items: flex-start; }
  .cr-job-tags{ margin-top: 8px; }
  .cr-job-arrow{ display: none; }
  .cr-apply-band{ flex-direction: column; text-align: center; }
  .cr-apply-band .btn{ width: 100%; }
}
</style>

<!-- ════════════════════════════════════════════════════════════════
     HERO
     ════════════════════════════════════════════════════════════════ -->
<section class="cr-hero">
  <div class="container" data-reveal>
    <div class="cr-eyebrow">🚀 We're hiring</div>
    <h1 class="cr-hero-title">Build the future of<br>offline intelligence.</h1>
    <p class="cr-hero-sub">
      VaultBook is a 50-person team in Chicago pushing the boundaries of what a local-first,
      browser-based workspace can do. We're looking for engineers, researchers, and designers
      who want to build AI that runs where the data lives — on the user's device.
    </p>

    <div class="cr-stats">
      <div class="cr-stat">
        <div class="cr-stat-val">30+</div>
        <div class="cr-stat-label">Open roles</div>
      </div>
      <div class="cr-stat">
        <div class="cr-stat-val">8</div>
        <div class="cr-stat-label">Departments</div>
      </div>
      <div class="cr-stat">
        <div class="cr-stat-val">50</div>
        <div class="cr-stat-label">Team today</div>
      </div>
      <div class="cr-stat">
        <div class="cr-stat-val">1</div>
        <div class="cr-stat-label">Office — Chicago</div>
      </div>
    </div>
  </div>
</section>

<!-- ════════════════════════════════════════════════════════════════
     WHY VAULTBOOK
     ════════════════════════════════════════════════════════════════ -->
<section class="cr-section">
  <div class="container">
    <div class="cr-section-head" data-reveal>
      <div class="cr-eyebrow">💡 Why VaultBook</div>
      <h2 class="cr-section-title">What makes this place different</h2>
      <p class="cr-section-sub">We build software that respects people. The same philosophy shapes how we treat our team.</p>
    </div>

    <div class="cr-perks" data-reveal>
      <div class="cr-perk">
        <div class="cr-perk-ic">🧠</div>
        <div class="cr-perk-title">Hard problems, real impact</div>
        <div class="cr-perk-text">ML scoring, client-side NLP, in-browser OCR, AES-256 encryption — you'll work on genuinely challenging engineering with zero cloud abstractions to hide behind.</div>
      </div>
      <div class="cr-perk">
        <div class="cr-perk-ic">🚢</div>
        <div class="cr-perk-title">Ship weekly</div>
        <div class="cr-perk-text">Small team, flat structure, fast cycles. Features go from idea to production in days, not quarters. Every engineer ships code that users see immediately.</div>
      </div>
      <div class="cr-perk">
        <div class="cr-perk-ic">🔒</div>
        <div class="cr-perk-title">Privacy is the product</div>
        <div class="cr-perk-text">We don't collect user data because there's nothing to collect. Zero telemetry, zero analytics beacons, zero cloud. You'll build software you can be proud of.</div>
      </div>
      <div class="cr-perk">
        <div class="cr-perk-ic">🏙️</div>
        <div class="cr-perk-title">Chicago, West Loop</div>
        <div class="cr-perk-text">One office, everyone in-person. We chose Chicago for its deep AI talent, central timezone, and a tech scene that values building over posturing.</div>
      </div>
      <div class="cr-perk">
        <div class="cr-perk-ic">📚</div>
        <div class="cr-perk-title">Learn constantly</div>
        <div class="cr-perk-text">Conference budgets, research paper clubs, cross-team pairing. You'll work alongside ML researchers, cryptography engineers, and search specialists.</div>
      </div>
      <div class="cr-perk">
        <div class="cr-perk-ic">🎯</div>
        <div class="cr-perk-title">Ownership, not tickets</div>
        <div class="cr-perk-text">You own features end-to-end — architecture, implementation, testing, and user feedback. No hand-offs, no waiting on approvals.</div>
      </div>
    </div>
  </div>
</section>

<!-- ════════════════════════════════════════════════════════════════
     OPEN ROLES
     ════════════════════════════════════════════════════════════════ -->
<section class="cr-section">
  <div class="container">
    <div class="cr-section-head" data-reveal>
      <div class="cr-eyebrow">💼 Open positions</div>
      <h2 class="cr-section-title">30+ roles across 8 teams</h2>
      <p class="cr-section-sub">Every role contributes directly to VaultBook. No middle management, no overhead — just builders.</p>
    </div>

    <div class="cr-jobs" data-reveal>

      <!-- ── AI & Machine Learning ────────────────────────────────── -->
      <div class="cr-dept-label">AI &amp; Machine Learning</div>

      <div class="cr-job">
        <div class="cr-job-info">
          <div class="cr-job-title">Senior ML Engineer — Scoring &amp; Ranking</div>
          <div class="cr-job-meta"><span>📍 Chicago</span><span>Full-time</span></div>
        </div>
        <div class="cr-job-tags"><span class="cr-job-tag ai">ML</span></div>
        <div class="cr-job-arrow">→</div>
      </div>

      <div class="cr-job">
        <div class="cr-job-info">
          <div class="cr-job-title">NLP Research Engineer</div>
          <div class="cr-job-meta"><span>📍 Chicago</span><span>Full-time</span></div>
        </div>
        <div class="cr-job-tags"><span class="cr-job-tag ai">NLP</span></div>
        <div class="cr-job-arrow">→</div>
      </div>

      <div class="cr-job">
        <div class="cr-job-info">
          <div class="cr-job-title">Recommendation Systems Engineer</div>
          <div class="cr-job-meta"><span>📍 Chicago</span><span>Full-time</span></div>
        </div>
        <div class="cr-job-tags"><span class="cr-job-tag ai">ML</span></div>
        <div class="cr-job-arrow">→</div>
      </div>

      <div class="cr-job">
        <div class="cr-job-info">
          <div class="cr-job-title">Applied AI Researcher — Vote-Based Learning</div>
          <div class="cr-job-meta"><span>📍 Chicago</span><span>Full-time</span></div>
        </div>
        <div class="cr-job-tags"><span class="cr-job-tag ai">ML</span></div>
        <div class="cr-job-arrow">→</div>
      </div>

      <div class="cr-job">
        <div class="cr-job-info">
          <div class="cr-job-title">Computer Vision Engineer — OCR Pipeline</div>
          <div class="cr-job-meta"><span>📍 Chicago</span><span>Full-time</span></div>
        </div>
        <div class="cr-job-tags"><span class="cr-job-tag ai">CV</span><span class="cr-job-tag data">OCR</span></div>
        <div class="cr-job-arrow">→</div>
      </div>

      <div class="cr-job">
        <div class="cr-job-info">
          <div class="cr-job-title">ML Infrastructure Engineer — Client-Side Models</div>
          <div class="cr-job-meta"><span>📍 Chicago</span><span>Full-time</span></div>
        </div>
        <div class="cr-job-tags"><span class="cr-job-tag ai">ML</span><span class="cr-job-tag infra">WebGPU</span></div>
        <div class="cr-job-arrow">→</div>
      </div>

      <div class="cr-job">
        <div class="cr-job-info">
          <div class="cr-job-title">Embedding Systems Engineer</div>
          <div class="cr-job-meta"><span>📍 Chicago</span><span>Full-time</span></div>
        </div>
        <div class="cr-job-tags"><span class="cr-job-tag ai">ML</span></div>
        <div class="cr-job-arrow">→</div>
      </div>

      <!-- ── Search & Indexing ────────────────────────────────────── -->
      <div class="cr-dept-label">Search &amp; Indexing</div>

      <div class="cr-job">
        <div class="cr-job-info">
          <div class="cr-job-title">Senior Search Engineer — Multi-Field Scoring</div>
          <div class="cr-job-meta"><span>📍 Chicago</span><span>Full-time</span></div>
        </div>
        <div class="cr-job-tags"><span class="cr-job-tag data">Search</span></div>
        <div class="cr-job-arrow">→</div>
      </div>

      <div class="cr-job">
        <div class="cr-job-info">
          <div class="cr-job-title">Deep Indexing Engineer — Document Parsing</div>
          <div class="cr-job-meta"><span>📍 Chicago</span><span>Full-time</span></div>
        </div>
        <div class="cr-job-tags"><span class="cr-job-tag data">Indexing</span><span class="cr-job-tag infra">JSZip</span></div>
        <div class="cr-job-arrow">→</div>
      </div>

      <div class="cr-job">
        <div class="cr-job-info">
          <div class="cr-job-title">Semantic Search Specialist</div>
          <div class="cr-job-meta"><span>📍 Chicago</span><span>Full-time</span></div>
        </div>
        <div class="cr-job-tags"><span class="cr-job-tag ai">NLP</span><span class="cr-job-tag data">Search</span></div>
        <div class="cr-job-arrow">→</div>
      </div>

      <div class="cr-job">
        <div class="cr-job-info">
          <div class="cr-job-title">Ranking &amp; Relevance Engineer</div>
          <div class="cr-job-meta"><span>📍 Chicago</span><span>Full-time</span></div>
        </div>
        <div class="cr-job-tags"><span class="cr-job-tag data">Search</span><span class="cr-job-tag ai">ML</span></div>
        <div class="cr-job-arrow">→</div>
      </div>

      <!-- ── Security & Cryptography ─────────────────────────────── -->
      <div class="cr-dept-label">Security &amp; Cryptography</div>

      <div class="cr-job">
        <div class="cr-job-info">
          <div class="cr-job-title">Cryptography Engineer — AES-256-GCM / PBKDF2</div>
          <div class="cr-job-meta"><span>📍 Chicago</span><span>Full-time</span></div>
        </div>
        <div class="cr-job-tags"><span class="cr-job-tag sec">Crypto</span></div>
        <div class="cr-job-arrow">→</div>
      </div>

      <div class="cr-job">
        <div class="cr-job-info">
          <div class="cr-job-title">Privacy Engineer — Zero-Telemetry Audit</div>
          <div class="cr-job-meta"><span>📍 Chicago</span><span>Full-time</span></div>
        </div>
        <div class="cr-job-tags"><span class="cr-job-tag sec">Privacy</span></div>
        <div class="cr-job-arrow">→</div>
      </div>

      <div class="cr-job">
        <div class="cr-job-info">
          <div class="cr-job-title">Application Security Engineer</div>
          <div class="cr-job-meta"><span>📍 Chicago</span><span>Full-time</span></div>
        </div>
        <div class="cr-job-tags"><span class="cr-job-tag sec">Security</span></div>
        <div class="cr-job-arrow">→</div>
      </div>

      <!-- ── Frontend & UI ───────────────────────────────────────── -->
      <div class="cr-dept-label">Frontend &amp; UI Engineering</div>

      <div class="cr-job">
        <div class="cr-job-info">
          <div class="cr-job-title">Senior Frontend Engineer — Rich Text Editor</div>
          <div class="cr-job-meta"><span>📍 Chicago</span><span>Full-time</span></div>
        </div>
        <div class="cr-job-tags"><span class="cr-job-tag fe">JS</span><span class="cr-job-tag fe">contentEditable</span></div>
        <div class="cr-job-arrow">→</div>
      </div>

      <div class="cr-job">
        <div class="cr-job-info">
          <div class="cr-job-title">Frontend Engineer — File System Access API</div>
          <div class="cr-job-meta"><span>📍 Chicago</span><span>Full-time</span></div>
        </div>
        <div class="cr-job-tags"><span class="cr-job-tag fe">Web APIs</span></div>
        <div class="cr-job-arrow">→</div>
      </div>

      <div class="cr-job">
        <div class="cr-job-info">
          <div class="cr-job-title">Frontend Engineer — Canvas Rendering &amp; Charts</div>
          <div class="cr-job-meta"><span>📍 Chicago</span><span>Full-time</span></div>
        </div>
        <div class="cr-job-tags"><span class="cr-job-tag fe">Canvas</span></div>
        <div class="cr-job-arrow">→</div>
      </div>

      <div class="cr-job">
        <div class="cr-job-info">
          <div class="cr-job-title">Full-Stack Engineer — Built-in Tools</div>
          <div class="cr-job-meta"><span>📍 Chicago</span><span>Full-time</span></div>
        </div>
        <div class="cr-job-tags"><span class="cr-job-tag fe">JS</span><span class="cr-job-tag data">Tools</span></div>
        <div class="cr-job-arrow">→</div>
      </div>

      <div class="cr-job">
        <div class="cr-job-info">
          <div class="cr-job-title">Performance Engineer — Large Library Optimization</div>
          <div class="cr-job-meta"><span>📍 Chicago</span><span>Full-time</span></div>
        </div>
        <div class="cr-job-tags"><span class="cr-job-tag fe">Perf</span></div>
        <div class="cr-job-arrow">→</div>
      </div>

      <div class="cr-job">
        <div class="cr-job-info">
          <div class="cr-job-title">Accessibility Engineer</div>
          <div class="cr-job-meta"><span>📍 Chicago</span><span>Full-time</span></div>
        </div>
        <div class="cr-job-tags"><span class="cr-job-tag fe">A11y</span></div>
        <div class="cr-job-arrow">→</div>
      </div>

      <!-- ── Data Engineering ────────────────────────────────────── -->
      <div class="cr-dept-label">Data Engineering</div>

      <div class="cr-job">
        <div class="cr-job-info">
          <div class="cr-job-title">Data Platform Architect — Repository Schema</div>
          <div class="cr-job-meta"><span>📍 Chicago</span><span>Full-time</span></div>
        </div>
        <div class="cr-job-tags"><span class="cr-job-tag data">Data</span></div>
        <div class="cr-job-arrow">→</div>
      </div>

      <div class="cr-job">
        <div class="cr-job-info">
          <div class="cr-job-title">Data Pipeline Engineer — Attachment Extraction</div>
          <div class="cr-job-meta"><span>📍 Chicago</span><span>Full-time</span></div>
        </div>
        <div class="cr-job-tags"><span class="cr-job-tag data">Pipeline</span></div>
        <div class="cr-job-arrow">→</div>
      </div>

      <div class="cr-job">
        <div class="cr-job-info">
          <div class="cr-job-title">Feature Extraction Engineer — SheetJS / pdf.js</div>
          <div class="cr-job-meta"><span>📍 Chicago</span><span>Full-time</span></div>
        </div>
        <div class="cr-job-tags"><span class="cr-job-tag data">Parsing</span><span class="cr-job-tag infra">pdf.js</span></div>
        <div class="cr-job-arrow">→</div>
      </div>

      <div class="cr-job">
        <div class="cr-job-info">
          <div class="cr-job-title">Data Quality Engineer</div>
          <div class="cr-job-meta"><span>📍 Chicago</span><span>Full-time</span></div>
        </div>
        <div class="cr-job-tags"><span class="cr-job-tag data">QA</span></div>
        <div class="cr-job-arrow">→</div>
      </div>

      <!-- ── Design ──────────────────────────────────────────────── -->
      <div class="cr-dept-label">Design</div>

      <div class="cr-job">
        <div class="cr-job-info">
          <div class="cr-job-title">Senior Product Designer — Workspace UI</div>
          <div class="cr-job-meta"><span>📍 Chicago</span><span>Full-time</span></div>
        </div>
        <div class="cr-job-tags"><span class="cr-job-tag design">Design</span></div>
        <div class="cr-job-arrow">→</div>
      </div>

      <div class="cr-job">
        <div class="cr-job-info">
          <div class="cr-job-title">UX Researcher</div>
          <div class="cr-job-meta"><span>📍 Chicago</span><span>Full-time</span></div>
        </div>
        <div class="cr-job-tags"><span class="cr-job-tag design">UXR</span></div>
        <div class="cr-job-arrow">→</div>
      </div>

      <div class="cr-job">
        <div class="cr-job-info">
          <div class="cr-job-title">Interaction Designer — Micro-Animations</div>
          <div class="cr-job-meta"><span>📍 Chicago</span><span>Full-time</span></div>
        </div>
        <div class="cr-job-tags"><span class="cr-job-tag design">Motion</span></div>
        <div class="cr-job-arrow">→</div>
      </div>

      <!-- ── Product ─────────────────────────────────────────────── -->
      <div class="cr-dept-label">Product</div>

      <div class="cr-job">
        <div class="cr-job-info">
          <div class="cr-job-title">AI Product Manager — Suggestions &amp; QA</div>
          <div class="cr-job-meta"><span>📍 Chicago</span><span>Full-time</span></div>
        </div>
        <div class="cr-job-tags"><span class="cr-job-tag product">Product</span><span class="cr-job-tag ai">AI</span></div>
        <div class="cr-job-arrow">→</div>
      </div>

      <div class="cr-job">
        <div class="cr-job-info">
          <div class="cr-job-title">Technical Product Manager — Tools Platform</div>
          <div class="cr-job-meta"><span>📍 Chicago</span><span>Full-time</span></div>
        </div>
        <div class="cr-job-tags"><span class="cr-job-tag product">Product</span></div>
        <div class="cr-job-arrow">→</div>
      </div>

      <!-- ── Infrastructure & DevOps ─────────────────────────────── -->
      <div class="cr-dept-label">Infrastructure &amp; DevOps</div>

      <div class="cr-job">
        <div class="cr-job-info">
          <div class="cr-job-title">DevOps Engineer — Single-File Build Pipeline</div>
          <div class="cr-job-meta"><span>📍 Chicago</span><span>Full-time</span></div>
        </div>
        <div class="cr-job-tags"><span class="cr-job-tag infra">CI/CD</span></div>
        <div class="cr-job-arrow">→</div>
      </div>

      <div class="cr-job">
        <div class="cr-job-info">
          <div class="cr-job-title">WebAssembly Engineer — Edge Runtime</div>
          <div class="cr-job-meta"><span>📍 Chicago</span><span>Full-time</span></div>
        </div>
        <div class="cr-job-tags"><span class="cr-job-tag infra">WASM</span></div>
        <div class="cr-job-arrow">→</div>
      </div>

      <!-- ── QA & Content ────────────────────────────────────────── -->
      <div class="cr-dept-label">QA &amp; Content</div>

      <div class="cr-job">
        <div class="cr-job-info">
          <div class="cr-job-title">QA Engineer — Cross-Browser Testing</div>
          <div class="cr-job-meta"><span>📍 Chicago</span><span>Full-time</span></div>
        </div>
        <div class="cr-job-tags"><span class="cr-job-tag fe">QA</span></div>
        <div class="cr-job-arrow">→</div>
      </div>

      <div class="cr-job">
        <div class="cr-job-info">
          <div class="cr-job-title">Technical Writer</div>
          <div class="cr-job-meta"><span>📍 Chicago</span><span>Full-time</span></div>
        </div>
        <div class="cr-job-tags"><span class="cr-job-tag product">Docs</span></div>
        <div class="cr-job-arrow">→</div>
      </div>

    </div><!-- /cr-jobs -->

    <!-- ── Apply band ──────────────────────────────────────────── -->
    <div class="cr-apply-band" data-reveal>
      <div class="cr-apply-ic">✈</div>
      <div class="cr-apply-body">
        <div class="cr-apply-title">Ready to apply?</div>
        <div class="cr-apply-text">Send your resume and a short note about the role you're interested in. We usually respond within 48 hours.</div>
      </div>
      <a class="btn btn-primary" href="/contact/">Apply now →</a>
    </div>

  </div>
</section>

<!-- ════════════════════════════════════════════════════════════════
     BOTTOM CTA
     ════════════════════════════════════════════════════════════════ -->
<section class="cr-section" style="padding-bottom: 0;">
  <div class="container">
    <div class="cr-cta" data-reveal>
      <h2 class="cr-cta-title">Help build software that respects people.</h2>
      <p class="cr-cta-sub">No cloud. No telemetry. No compromises. Just great engineering.</p>
      <div class="cr-cta-actions">
        <a class="btn btn-primary" href="/contact/">Apply now</a>
        <a class="btn btn-ghost" href="/about/">Meet the team</a>
        <a class="btn btn-ghost" href="/product/">See what we build</a>
      </div>
    </div>
  </div>
</section>
