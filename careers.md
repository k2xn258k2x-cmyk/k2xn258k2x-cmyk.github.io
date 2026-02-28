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

/* Expandable job card */
.cr-job{
  border: 1px solid rgba(206,147,216,.08);
  border-radius: 14px;
  margin-bottom: 8px;
  background: rgba(255,255,255,.6);
  overflow: hidden;
  transition: border-color .2s ease, box-shadow .2s ease;
}
.cr-job:hover{
  border-color: rgba(206,147,216,.22);
  box-shadow: 0 8px 24px rgba(206,147,216,.1);
}
.cr-job[open]{
  border-color: rgba(206,147,216,.25);
  box-shadow: 0 10px 30px rgba(206,147,216,.12);
}
.cr-job summary{
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
  cursor: pointer;
  list-style: none;
  transition: background .2s ease;
}
.cr-job summary::-webkit-details-marker{ display: none; }
.cr-job summary:hover{ background: rgba(243,229,245,.06); }
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
  transition: transform .25s ease, background .25s ease;
}
.cr-job:hover .cr-job-arrow{
  background: linear-gradient(135deg, rgba(206,147,216,.2), rgba(129,212,250,.15));
}
.cr-job[open] .cr-job-arrow{
  transform: rotate(90deg);
  background: linear-gradient(135deg, rgba(206,147,216,.25), rgba(129,212,250,.18));
}

/* Expanded body */
.cr-job-body{
  padding: 0 20px 20px 20px;
  border-top: 1px solid rgba(206,147,216,.08);
}
.cr-job-desc{
  font-size: 14px;
  color: rgba(11,11,11,.6);
  line-height: 1.6;
  margin: 16px 0 0;
}
.cr-job-section{
  margin-top: 16px;
}
.cr-job-section-title{
  font-size: 12px;
  font-weight: 750;
  text-transform: uppercase;
  letter-spacing: .1em;
  color: rgba(11,11,11,.38);
  margin-bottom: 8px;
}
.cr-job-list{
  list-style: none;
  padding: 0;
  margin: 0;
}
.cr-job-list li{
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 4px 0;
  font-size: 13.5px;
  color: rgba(11,11,11,.6);
  line-height: 1.45;
}
.cr-job-list li::before{
  content: '›';
  color: #7b1fa2;
  -webkit-text-fill-color: #7b1fa2;
  font-weight: 800;
  font-size: 15px;
  line-height: 1.3;
  flex-shrink: 0;
}
.cr-job-stack{
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-top: 12px;
}
.cr-job-tech{
  font-size: 11px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 8px;
  background: rgba(11,11,11,.04);
  color: rgba(11,11,11,.5);
  -webkit-text-fill-color: rgba(11,11,11,.5);
  letter-spacing: .02em;
}
.cr-job-apply{
  margin-top: 18px;
  display: inline-flex;
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
  .cr-job summary{ flex-direction: column; align-items: flex-start; gap: 10px; }
  .cr-job-tags{ margin-top: 4px; }
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

      <details class="cr-job">
        <summary>
          <div class="cr-job-info"><div class="cr-job-title">Senior ML Engineer — Scoring &amp; Ranking</div><div class="cr-job-meta"><span>📍 Chicago</span><span>Full-time</span></div></div>
          <div class="cr-job-tags"><span class="cr-job-tag ai">ML</span></div>
          <div class="cr-job-arrow">→</div>
        </summary>
        <div class="cr-job-body">
          <div class="cr-job-desc">Own VaultBook's multi-field weighted scoring engine — the system that ranks QA search results across 7 content layers (titles at weight 8, labels at 6, OCR text at 5, body at 4, sections at 3, main attachments at 2, section attachments at 1). You'll optimize the scoring pipeline, integrate persistent vote-based reranking (+1M/−1M from userVotes), and ship improvements that users feel in every search.</div>
          <div class="cr-job-section"><div class="cr-job-section-title">What you'll do</div>
            <ul class="cr-job-list">
              <li>Tune and extend the weighted scoring model across all 7 content layers</li>
              <li>Build the persistent reranking layer driven by upvote/downvote signals</li>
              <li>Optimize QA search latency for libraries with 10,000+ entries</li>
              <li>Design A/B frameworks to measure relevance improvements</li>
            </ul>
          </div>
          <div class="cr-job-section"><div class="cr-job-section-title">What you bring</div>
            <ul class="cr-job-list">
              <li>4+ years building search ranking or recommendation systems</li>
              <li>Strong background in information retrieval and scoring models</li>
              <li>Experience with client-side ML (TensorFlow.js, ONNX Runtime Web, or similar)</li>
              <li>Comfort with JavaScript performance profiling at scale</li>
            </ul>
          </div>
          <div class="cr-job-stack"><span class="cr-job-tech">JavaScript</span><span class="cr-job-tech">TF.js</span><span class="cr-job-tech">BM25</span><span class="cr-job-tech">Learning-to-Rank</span></div>
          <a class="btn btn-primary cr-job-apply" href="/contact/">Apply for this role →</a>
        </div>
      </details>

      <details class="cr-job">
        <summary>
          <div class="cr-job-info"><div class="cr-job-title">NLP Research Engineer</div><div class="cr-job-meta"><span>📍 Chicago</span><span>Full-time</span></div></div>
          <div class="cr-job-tags"><span class="cr-job-tag ai">NLP</span></div>
          <div class="cr-job-arrow">→</div>
        </summary>
        <div class="cr-job-body">
          <div class="cr-job-desc">Design and improve the natural-language query pipeline that lets users ask their library questions in plain English. You'll work on query understanding, intent classification, and result extraction — all running client-side in the browser with zero server calls.</div>
          <div class="cr-job-section"><div class="cr-job-section-title">What you'll do</div>
            <ul class="cr-job-list">
              <li>Build and refine the QA mode query parser and intent detection</li>
              <li>Improve answer extraction and snippet highlighting from search results</li>
              <li>Research lightweight NLP models that fit browser runtime constraints</li>
              <li>Develop query expansion and synonym handling for better recall</li>
            </ul>
          </div>
          <div class="cr-job-section"><div class="cr-job-section-title">What you bring</div>
            <ul class="cr-job-list">
              <li>MS/PhD in NLP, computational linguistics, or related field</li>
              <li>Experience deploying language models in resource-constrained environments</li>
              <li>Familiarity with tokenization, embeddings, and extractive QA architectures</li>
              <li>Published research or strong open-source contributions in NLP</li>
            </ul>
          </div>
          <div class="cr-job-stack"><span class="cr-job-tech">NLP</span><span class="cr-job-tech">ONNX</span><span class="cr-job-tech">Transformers</span><span class="cr-job-tech">WebAssembly</span></div>
          <a class="btn btn-primary cr-job-apply" href="/contact/">Apply for this role →</a>
        </div>
      </details>

      <details class="cr-job">
        <summary>
          <div class="cr-job-info"><div class="cr-job-title">Recommendation Systems Engineer</div><div class="cr-job-meta"><span>📍 Chicago</span><span>Full-time</span></div></div>
          <div class="cr-job-tags"><span class="cr-job-tag ai">ML</span></div>
          <div class="cr-job-arrow">→</div>
        </summary>
        <div class="cr-job-body">
          <div class="cr-job-desc">Build the Related Entries engine — VaultBook's contextual similarity system that surfaces notes users didn't know were connected. The system uses content similarity scoring with a Reddit-style upvote/downvote feedback loop that persistently reshapes recommendations over time.</div>
          <div class="cr-job-section"><div class="cr-job-section-title">What you'll do</div>
            <ul class="cr-job-list">
              <li>Design and improve contextual similarity algorithms for Related Entries</li>
              <li>Integrate vote-based feedback into the recommendation model</li>
              <li>Build cold-start strategies for new entries with limited interaction data</li>
              <li>Optimize recommendation latency for real-time display on entry open</li>
            </ul>
          </div>
          <div class="cr-job-section"><div class="cr-job-section-title">What you bring</div>
            <ul class="cr-job-list">
              <li>3+ years in recommendation or personalization systems</li>
              <li>Experience with collaborative filtering, content-based, and hybrid approaches</li>
              <li>Comfort building ML pipelines that run entirely in JavaScript</li>
              <li>Strong intuition for balancing exploration vs. exploitation</li>
            </ul>
          </div>
          <div class="cr-job-stack"><span class="cr-job-tech">Cosine Similarity</span><span class="cr-job-tech">TF-IDF</span><span class="cr-job-tech">JavaScript</span><span class="cr-job-tech">IndexedDB</span></div>
          <a class="btn btn-primary cr-job-apply" href="/contact/">Apply for this role →</a>
        </div>
      </details>

      <details class="cr-job">
        <summary>
          <div class="cr-job-info"><div class="cr-job-title">Applied AI Researcher — Vote-Based Learning</div><div class="cr-job-meta"><span>📍 Chicago</span><span>Full-time</span></div></div>
          <div class="cr-job-tags"><span class="cr-job-tag ai">ML</span></div>
          <div class="cr-job-arrow">→</div>
        </summary>
        <div class="cr-job-body">
          <div class="cr-job-desc">Research and develop the persistent vote-based learning system at the heart of VaultBook's personalization. Every upvote (+1M) and downvote (−1M) is stored in the userVotes schema and reshapes both search results and related entry ordering across sessions — a reinforcement signal built from human feedback.</div>
          <div class="cr-job-section"><div class="cr-job-section-title">What you'll do</div>
            <ul class="cr-job-list">
              <li>Design reward models from sparse binary vote signals</li>
              <li>Research how vote decay, recency weighting, and context affect ranking quality</li>
              <li>Build offline evaluation frameworks to measure learning effectiveness</li>
              <li>Publish findings and contribute to the local-first ML research community</li>
            </ul>
          </div>
          <div class="cr-job-section"><div class="cr-job-section-title">What you bring</div>
            <ul class="cr-job-list">
              <li>MS/PhD with research in reinforcement learning, RLHF, or bandit algorithms</li>
              <li>Experience with preference learning from implicit or explicit feedback</li>
              <li>Strong mathematical foundations in optimization and probability</li>
              <li>Ability to translate research into production JavaScript</li>
            </ul>
          </div>
          <div class="cr-job-stack"><span class="cr-job-tech">RLHF</span><span class="cr-job-tech">Bandits</span><span class="cr-job-tech">JSON Schema</span><span class="cr-job-tech">JavaScript</span></div>
          <a class="btn btn-primary cr-job-apply" href="/contact/">Apply for this role →</a>
        </div>
      </details>

      <details class="cr-job">
        <summary>
          <div class="cr-job-info"><div class="cr-job-title">Computer Vision Engineer — OCR Pipeline</div><div class="cr-job-meta"><span>📍 Chicago</span><span>Full-time</span></div></div>
          <div class="cr-job-tags"><span class="cr-job-tag ai">CV</span><span class="cr-job-tag data">OCR</span></div>
          <div class="cr-job-arrow">→</div>
        </summary>
        <div class="cr-job-body">
          <div class="cr-job-desc">Own VaultBook's inline OCR engine — automatic text extraction from images embedded in entries, cached per-item, with background warm-up for the top 12 QA results. You'll also extend cross-format OCR that reaches inside DOCX (word/media), XLSX (xl/media), and ZIP archives to extract text from images embedded deep inside compound documents.</div>
          <div class="cr-job-section"><div class="cr-job-section-title">What you'll do</div>
            <ul class="cr-job-list">
              <li>Improve OCR accuracy and speed for handwritten and low-contrast images</li>
              <li>Build the background warm-up pipeline that pre-OCRs top search results</li>
              <li>Extend OCR into compound formats (DOCX media, XLSX media, nested ZIPs)</li>
              <li>Implement per-item OCR caching with invalidation on attachment changes</li>
            </ul>
          </div>
          <div class="cr-job-section"><div class="cr-job-section-title">What you bring</div>
            <ul class="cr-job-list">
              <li>3+ years in OCR, document understanding, or computer vision</li>
              <li>Experience with Tesseract.js, ONNX vision models, or browser-based CV</li>
              <li>Understanding of image preprocessing (binarization, deskew, noise removal)</li>
              <li>Comfort with Web Workers and off-main-thread processing</li>
            </ul>
          </div>
          <div class="cr-job-stack"><span class="cr-job-tech">Tesseract.js</span><span class="cr-job-tech">Canvas API</span><span class="cr-job-tech">Web Workers</span><span class="cr-job-tech">ONNX</span></div>
          <a class="btn btn-primary cr-job-apply" href="/contact/">Apply for this role →</a>
        </div>
      </details>

      <details class="cr-job">
        <summary>
          <div class="cr-job-info"><div class="cr-job-title">ML Infrastructure Engineer — Client-Side Models</div><div class="cr-job-meta"><span>📍 Chicago</span><span>Full-time</span></div></div>
          <div class="cr-job-tags"><span class="cr-job-tag ai">ML</span><span class="cr-job-tag infra">WebGPU</span></div>
          <div class="cr-job-arrow">→</div>
        </summary>
        <div class="cr-job-body">
          <div class="cr-job-desc">Ensure all AI scoring, similarity calculations, OCR, and suggestions run smoothly in-browser — zero server calls. You'll optimize model loading, manage memory for large libraries, and prepare the infrastructure for WebGPU and WebAssembly acceleration of larger local models.</div>
          <div class="cr-job-section"><div class="cr-job-section-title">What you'll do</div>
            <ul class="cr-job-list">
              <li>Profile and optimize client-side ML model loading and inference</li>
              <li>Build model quantization and compression pipelines for browser delivery</li>
              <li>Implement WebGPU acceleration paths for compute-heavy operations</li>
              <li>Design memory management strategies for devices with limited RAM</li>
            </ul>
          </div>
          <div class="cr-job-section"><div class="cr-job-section-title">What you bring</div>
            <ul class="cr-job-list">
              <li>Deep experience with TensorFlow.js, ONNX Runtime Web, or WebNN</li>
              <li>Understanding of model quantization (int8, float16) for edge deployment</li>
              <li>Familiarity with WebGPU compute shaders and WGSL</li>
              <li>JavaScript performance optimization at the memory-layout level</li>
            </ul>
          </div>
          <div class="cr-job-stack"><span class="cr-job-tech">TF.js</span><span class="cr-job-tech">WebGPU</span><span class="cr-job-tech">WASM</span><span class="cr-job-tech">ONNX Runtime</span></div>
          <a class="btn btn-primary cr-job-apply" href="/contact/">Apply for this role →</a>
        </div>
      </details>

      <details class="cr-job">
        <summary>
          <div class="cr-job-info"><div class="cr-job-title">Embedding Systems Engineer</div><div class="cr-job-meta"><span>📍 Chicago</span><span>Full-time</span></div></div>
          <div class="cr-job-tags"><span class="cr-job-tag ai">ML</span></div>
          <div class="cr-job-arrow">→</div>
        </summary>
        <div class="cr-job-body">
          <div class="cr-job-desc">Generate, store, and index the content embeddings that drive similarity scoring for Related Entries and the AI Suggestions pager. You'll work on efficient vector operations in the browser, incremental index updates, and embedding models optimized for the VaultBook content domain.</div>
          <div class="cr-job-section"><div class="cr-job-section-title">What you'll do</div>
            <ul class="cr-job-list">
              <li>Select, fine-tune, and deploy embedding models for browser inference</li>
              <li>Build incremental vector index updates as entries are created/edited</li>
              <li>Optimize nearest-neighbor search for real-time Related Entries</li>
              <li>Benchmark embedding quality across diverse note content types</li>
            </ul>
          </div>
          <div class="cr-job-section"><div class="cr-job-section-title">What you bring</div>
            <ul class="cr-job-list">
              <li>Experience with sentence embeddings (SBERT, E5, or similar)</li>
              <li>Familiarity with approximate nearest neighbor algorithms (HNSW, IVF)</li>
              <li>Ability to compress and quantize models for in-browser use</li>
              <li>Strong JavaScript and TypeScript skills</li>
            </ul>
          </div>
          <div class="cr-job-stack"><span class="cr-job-tech">Embeddings</span><span class="cr-job-tech">ANN</span><span class="cr-job-tech">ONNX</span><span class="cr-job-tech">Float16</span></div>
          <a class="btn btn-primary cr-job-apply" href="/contact/">Apply for this role →</a>
        </div>
      </details>

      <!-- ── Search & Indexing ────────────────────────────────────── -->
      <div class="cr-dept-label">Search &amp; Indexing</div>

      <details class="cr-job">
        <summary>
          <div class="cr-job-info"><div class="cr-job-title">Senior Search Engineer — Multi-Field Scoring</div><div class="cr-job-meta"><span>📍 Chicago</span><span>Full-time</span></div></div>
          <div class="cr-job-tags"><span class="cr-job-tag data">Search</span></div>
          <div class="cr-job-arrow">→</div>
        </summary>
        <div class="cr-job-body">
          <div class="cr-job-desc">Build and extend VaultBook's search infrastructure — typeahead with real-time dropdown, query history suggestions, paginated results, and the warm-up system that pre-loads text for the top 12 results. Every operation runs client-side with sub-100ms response targets.</div>
          <div class="cr-job-section"><div class="cr-job-section-title">What you'll do</div>
            <ul class="cr-job-list">
              <li>Optimize the multi-field search index for 10,000+ entry libraries</li>
              <li>Implement typeahead with prefix matching and frequency-weighted suggestions</li>
              <li>Build the warm-up pipeline that pre-loads OCR text for top results</li>
              <li>Design search analytics to surface scoring quality issues</li>
            </ul>
          </div>
          <div class="cr-job-stack"><span class="cr-job-tech">Inverted Index</span><span class="cr-job-tech">JavaScript</span><span class="cr-job-tech">Web Workers</span><span class="cr-job-tech">BM25</span></div>
          <a class="btn btn-primary cr-job-apply" href="/contact/">Apply for this role →</a>
        </div>
      </details>

      <details class="cr-job">
        <summary>
          <div class="cr-job-info"><div class="cr-job-title">Deep Indexing Engineer — Document Parsing</div><div class="cr-job-meta"><span>📍 Chicago</span><span>Full-time</span></div></div>
          <div class="cr-job-tags"><span class="cr-job-tag data">Indexing</span><span class="cr-job-tag infra">JSZip</span></div>
          <div class="cr-job-arrow">→</div>
        </summary>
        <div class="cr-job-body">
          <div class="cr-job-desc">Own the deep file indexing pipeline that extracts searchable text from XLSX (via SheetJS), PPTX (via JSZip XML parsing), PDF (via pdf.js), ZIP archives, and MSG email files. You'll ensure every attached document becomes part of the user's searchable knowledge graph.</div>
          <div class="cr-job-section"><div class="cr-job-section-title">What you'll do</div>
            <ul class="cr-job-list">
              <li>Extend document parsers for new file formats and edge cases</li>
              <li>Build the background extraction pipeline with progress tracking</li>
              <li>Handle nested archives (ZIP within ZIP) and compound documents</li>
              <li>Optimize memory usage for large files processed in the browser</li>
            </ul>
          </div>
          <div class="cr-job-stack"><span class="cr-job-tech">JSZip</span><span class="cr-job-tech">SheetJS</span><span class="cr-job-tech">pdf.js</span><span class="cr-job-tech">Blob API</span></div>
          <a class="btn btn-primary cr-job-apply" href="/contact/">Apply for this role →</a>
        </div>
      </details>

      <details class="cr-job">
        <summary>
          <div class="cr-job-info"><div class="cr-job-title">Semantic Search Specialist</div><div class="cr-job-meta"><span>📍 Chicago</span><span>Full-time</span></div></div>
          <div class="cr-job-tags"><span class="cr-job-tag ai">NLP</span><span class="cr-job-tag data">Search</span></div>
          <div class="cr-job-arrow">→</div>
        </summary>
        <div class="cr-job-body">
          <div class="cr-job-desc">Move VaultBook's search beyond keyword matching toward true semantic understanding. You'll develop smart label suggestions through content analysis, build synonym expansion, and lay the groundwork for meaning-based retrieval — all running locally without external API calls.</div>
          <div class="cr-job-section"><div class="cr-job-section-title">What you'll do</div>
            <ul class="cr-job-list">
              <li>Build semantic similarity search alongside the existing keyword engine</li>
              <li>Develop the smart label suggestion system using content analysis</li>
              <li>Implement query intent classification for better result routing</li>
              <li>Research and prototype meaning-based connections between entries</li>
            </ul>
          </div>
          <div class="cr-job-stack"><span class="cr-job-tech">Sentence Embeddings</span><span class="cr-job-tech">ONNX</span><span class="cr-job-tech">TF-IDF</span><span class="cr-job-tech">JavaScript</span></div>
          <a class="btn btn-primary cr-job-apply" href="/contact/">Apply for this role →</a>
        </div>
      </details>

      <details class="cr-job">
        <summary>
          <div class="cr-job-info"><div class="cr-job-title">Ranking &amp; Relevance Engineer</div><div class="cr-job-meta"><span>📍 Chicago</span><span>Full-time</span></div></div>
          <div class="cr-job-tags"><span class="cr-job-tag data">Search</span><span class="cr-job-tag ai">ML</span></div>
          <div class="cr-job-arrow">→</div>
        </summary>
        <div class="cr-job-body">
          <div class="cr-job-desc">Fine-tune the multi-field scoring weights and vote-based reranking that float the best QA results to the top. You'll work at the intersection of search engineering and machine learning, turning raw relevance scores into results that feel right to the user.</div>
          <div class="cr-job-section"><div class="cr-job-section-title">What you'll do</div>
            <ul class="cr-job-list">
              <li>Run experiments on field weight configurations across content types</li>
              <li>Build evaluation datasets for offline relevance measurement</li>
              <li>Integrate vote signals and recency into the final ranking formula</li>
              <li>Instrument search to collect anonymized quality metrics locally</li>
            </ul>
          </div>
          <div class="cr-job-stack"><span class="cr-job-tech">Learning-to-Rank</span><span class="cr-job-tech">BM25</span><span class="cr-job-tech">nDCG</span><span class="cr-job-tech">JavaScript</span></div>
          <a class="btn btn-primary cr-job-apply" href="/contact/">Apply for this role →</a>
        </div>
      </details>

      <!-- ── Security & Cryptography ─────────────────────────────── -->
      <div class="cr-dept-label">Security &amp; Cryptography</div>

      <details class="cr-job">
        <summary>
          <div class="cr-job-info"><div class="cr-job-title">Cryptography Engineer — AES-256-GCM / PBKDF2</div><div class="cr-job-meta"><span>📍 Chicago</span><span>Full-time</span></div></div>
          <div class="cr-job-tags"><span class="cr-job-tag sec">Crypto</span></div>
          <div class="cr-job-arrow">→</div>
        </summary>
        <div class="cr-job-body">
          <div class="cr-job-desc">Own VaultBook's per-entry encryption — AES-256-GCM with PBKDF2 key derivation at 100,000 iterations, random salt and IV per encrypt cycle. You'll also build the session password cache, lock screen blur overlay, and ensure decrypted content is held in memory only and never written to persistent storage.</div>
          <div class="cr-job-section"><div class="cr-job-section-title">What you'll do</div>
            <ul class="cr-job-list">
              <li>Audit and harden the per-entry encryption implementation</li>
              <li>Research migration paths to newer KDFs (Argon2id via WASM)</li>
              <li>Build key rotation workflows without requiring full re-encryption</li>
              <li>Ensure decrypted plaintext never leaks to disk, clipboard history, or swap</li>
            </ul>
          </div>
          <div class="cr-job-stack"><span class="cr-job-tech">Web Crypto API</span><span class="cr-job-tech">AES-GCM</span><span class="cr-job-tech">PBKDF2</span><span class="cr-job-tech">Argon2</span></div>
          <a class="btn btn-primary cr-job-apply" href="/contact/">Apply for this role →</a>
        </div>
      </details>

      <details class="cr-job">
        <summary>
          <div class="cr-job-info"><div class="cr-job-title">Privacy Engineer — Zero-Telemetry Audit</div><div class="cr-job-meta"><span>📍 Chicago</span><span>Full-time</span></div></div>
          <div class="cr-job-tags"><span class="cr-job-tag sec">Privacy</span></div>
          <div class="cr-job-arrow">→</div>
        </summary>
        <div class="cr-job-body">
          <div class="cr-job-desc">Audit every code path to guarantee zero network calls — no analytics beacons, no font CDNs, no external requests of any kind. You'll build automated verification tools that flag any outbound request attempt and ensure VaultBook's privacy-by-architecture promise is provably true.</div>
          <div class="cr-job-section"><div class="cr-job-section-title">What you'll do</div>
            <ul class="cr-job-list">
              <li>Build CI checks that fail on any outbound network request in the codebase</li>
              <li>Audit third-party libraries for hidden telemetry or CDN dependencies</li>
              <li>Design a privacy certification process for each release</li>
              <li>Document the zero-telemetry architecture for the security page</li>
            </ul>
          </div>
          <div class="cr-job-stack"><span class="cr-job-tech">CSP</span><span class="cr-job-tech">DevTools Protocol</span><span class="cr-job-tech">Static Analysis</span><span class="cr-job-tech">CI/CD</span></div>
          <a class="btn btn-primary cr-job-apply" href="/contact/">Apply for this role →</a>
        </div>
      </details>

      <details class="cr-job">
        <summary>
          <div class="cr-job-info"><div class="cr-job-title">Application Security Engineer</div><div class="cr-job-meta"><span>📍 Chicago</span><span>Full-time</span></div></div>
          <div class="cr-job-tags"><span class="cr-job-tag sec">Security</span></div>
          <div class="cr-job-arrow">→</div>
        </summary>
        <div class="cr-job-body">
          <div class="cr-job-desc">Secure VaultBook's attack surface — XSS prevention in the rich text editor, safe HTML sanitization for imported content, secure blob URL handling, and protection against local file system injection via the File System Access API.</div>
          <div class="cr-job-section"><div class="cr-job-section-title">What you'll do</div>
            <ul class="cr-job-list">
              <li>Harden the contentEditable editor against XSS and injection attacks</li>
              <li>Audit file import paths (Obsidian import, URL save, attachment upload)</li>
              <li>Build sandboxing for user-generated HTML content in entries</li>
              <li>Perform regular penetration testing and threat modeling</li>
            </ul>
          </div>
          <div class="cr-job-stack"><span class="cr-job-tech">DOMPurify</span><span class="cr-job-tech">CSP</span><span class="cr-job-tech">OWASP</span><span class="cr-job-tech">File System Access API</span></div>
          <a class="btn btn-primary cr-job-apply" href="/contact/">Apply for this role →</a>
        </div>
      </details>

      <!-- ── Frontend & UI ───────────────────────────────────────── -->
      <div class="cr-dept-label">Frontend &amp; UI Engineering</div>

      <details class="cr-job">
        <summary>
          <div class="cr-job-info"><div class="cr-job-title">Senior Frontend Engineer — Rich Text Editor</div><div class="cr-job-meta"><span>📍 Chicago</span><span>Full-time</span></div></div>
          <div class="cr-job-tags"><span class="cr-job-tag fe">JS</span><span class="cr-job-tag fe">contentEditable</span></div>
          <div class="cr-job-arrow">→</div>
        </summary>
        <div class="cr-job-body">
          <div class="cr-job-desc">Own VaultBook's rich text editor — tables, code blocks, callout blocks, case transforms, headings H1–H6, inline images, font selectors, and text/background color pickers. The editor must handle large entries, paste-from-Word, and maintain clean HTML output across all browsers.</div>
          <div class="cr-job-section"><div class="cr-job-section-title">What you'll do</div>
            <ul class="cr-job-list">
              <li>Extend the editor with new block types and formatting options</li>
              <li>Handle cross-browser contentEditable quirks (cursor, selection, paste)</li>
              <li>Build undo/redo with structural awareness for nested blocks</li>
              <li>Optimize rendering for entries with 100+ images and deep nesting</li>
            </ul>
          </div>
          <div class="cr-job-stack"><span class="cr-job-tech">contentEditable</span><span class="cr-job-tech">Selection API</span><span class="cr-job-tech">MutationObserver</span><span class="cr-job-tech">Vanilla JS</span></div>
          <a class="btn btn-primary cr-job-apply" href="/contact/">Apply for this role →</a>
        </div>
      </details>

      <details class="cr-job">
        <summary>
          <div class="cr-job-info"><div class="cr-job-title">Frontend Engineer — File System Access API</div><div class="cr-job-meta"><span>📍 Chicago</span><span>Full-time</span></div></div>
          <div class="cr-job-tags"><span class="cr-job-tag fe">Web APIs</span></div>
          <div class="cr-job-arrow">→</div>
        </summary>
        <div class="cr-job-body">
          <div class="cr-job-desc">Own VaultBook's storage layer — repository.json, sidecar .md files, the /attachments directory with index.txt manifest, and the autosave system with dirty-flag debouncing and concurrent write guards. You'll push the boundaries of what browser-based file management can do.</div>
          <div class="cr-job-section"><div class="cr-job-section-title">What you'll do</div>
            <ul class="cr-job-list">
              <li>Extend the File System Access API integration for new storage patterns</li>
              <li>Build the deferred cleanup system for orphaned attachments</li>
              <li>Implement conflict resolution for concurrent writes</li>
              <li>Design fallback storage for browsers without FSAA support</li>
            </ul>
          </div>
          <div class="cr-job-stack"><span class="cr-job-tech">File System Access API</span><span class="cr-job-tech">IndexedDB</span><span class="cr-job-tech">Blob API</span><span class="cr-job-tech">JSON</span></div>
          <a class="btn btn-primary cr-job-apply" href="/contact/">Apply for this role →</a>
        </div>
      </details>

      <details class="cr-job">
        <summary>
          <div class="cr-job-info"><div class="cr-job-title">Frontend Engineer — Canvas Rendering &amp; Charts</div><div class="cr-job-meta"><span>📍 Chicago</span><span>Full-time</span></div></div>
          <div class="cr-job-tags"><span class="cr-job-tag fe">Canvas</span></div>
          <div class="cr-job-arrow">→</div>
        </summary>
        <div class="cr-job-body">
          <div class="cr-job-desc">Build VaultBook's analytics dashboards — canvas-rendered label pie charts, page utilization graphs, 14-day activity timelines, attachment type breakdowns, and strength metric pills. All visualizations must be smooth, responsive, and render without external charting libraries.</div>
          <div class="cr-job-section"><div class="cr-job-section-title">What you'll do</div>
            <ul class="cr-job-list">
              <li>Design and implement custom Canvas 2D chart components</li>
              <li>Build animated transitions for data updates and filtering</li>
              <li>Ensure charts are accessible with ARIA descriptions and fallback text</li>
              <li>Optimize rendering for libraries with thousands of data points</li>
            </ul>
          </div>
          <div class="cr-job-stack"><span class="cr-job-tech">Canvas 2D</span><span class="cr-job-tech">requestAnimationFrame</span><span class="cr-job-tech">SVG</span><span class="cr-job-tech">Vanilla JS</span></div>
          <a class="btn btn-primary cr-job-apply" href="/contact/">Apply for this role →</a>
        </div>
      </details>

      <details class="cr-job">
        <summary>
          <div class="cr-job-info"><div class="cr-job-title">Full-Stack Engineer — Built-in Tools</div><div class="cr-job-meta"><span>📍 Chicago</span><span>Full-time</span></div></div>
          <div class="cr-job-tags"><span class="cr-job-tag fe">JS</span><span class="cr-job-tag data">Tools</span></div>
          <div class="cr-job-arrow">→</div>
        </summary>
        <div class="cr-job-body">
          <div class="cr-job-desc">Ship VaultBook's 14+ built-in tools — File Analyzer, PDF Merge/Split/Compress, MP3 Cutter &amp; Joiner, Password Generator, Folder Analyzer, Threads, RSS Reader, Save URL → Entry, and more. Each tool runs entirely in-browser and integrates seamlessly into the workspace UI.</div>
          <div class="cr-job-section"><div class="cr-job-section-title">What you'll do</div>
            <ul class="cr-job-list">
              <li>Build new tools from concept to production in weekly cycles</li>
              <li>Integrate tools with VaultBook's entry and attachment systems</li>
              <li>Handle complex file processing (audio slicing, PDF operations) client-side</li>
              <li>Design consistent UX patterns across all tools</li>
            </ul>
          </div>
          <div class="cr-job-stack"><span class="cr-job-tech">Web Audio API</span><span class="cr-job-tech">pdf-lib</span><span class="cr-job-tech">Blob API</span><span class="cr-job-tech">Vanilla JS</span></div>
          <a class="btn btn-primary cr-job-apply" href="/contact/">Apply for this role →</a>
        </div>
      </details>

      <details class="cr-job">
        <summary>
          <div class="cr-job-info"><div class="cr-job-title">Performance Engineer — Large Library Optimization</div><div class="cr-job-meta"><span>📍 Chicago</span><span>Full-time</span></div></div>
          <div class="cr-job-tags"><span class="cr-job-tag fe">Perf</span></div>
          <div class="cr-job-arrow">→</div>
        </summary>
        <div class="cr-job-body">
          <div class="cr-job-desc">Make VaultBook fast at scale. You'll optimize pagination, lazy attachment loading, background OCR warm-up, sidebar rendering for 10,000+ entries, and the single-file build that keeps the entire app under aggressive size targets.</div>
          <div class="cr-job-section"><div class="cr-job-section-title">What you'll do</div>
            <ul class="cr-job-list">
              <li>Profile and fix rendering bottlenecks in the entry list and sidebar</li>
              <li>Implement virtual scrolling for large libraries</li>
              <li>Optimize the JSON parse/serialize cycle for repository.json</li>
              <li>Reduce time-to-interactive on cold load with 5,000+ entries</li>
            </ul>
          </div>
          <div class="cr-job-stack"><span class="cr-job-tech">Chrome DevTools</span><span class="cr-job-tech">Performance API</span><span class="cr-job-tech">Web Workers</span><span class="cr-job-tech">IntersectionObserver</span></div>
          <a class="btn btn-primary cr-job-apply" href="/contact/">Apply for this role →</a>
        </div>
      </details>

      <details class="cr-job">
        <summary>
          <div class="cr-job-info"><div class="cr-job-title">Accessibility Engineer</div><div class="cr-job-meta"><span>📍 Chicago</span><span>Full-time</span></div></div>
          <div class="cr-job-tags"><span class="cr-job-tag fe">A11y</span></div>
          <div class="cr-job-arrow">→</div>
        </summary>
        <div class="cr-job-body">
          <div class="cr-job-desc">Make VaultBook fully keyboard-navigable and screen-reader friendly. You'll implement ARIA labels and roles across every UI surface, build focus management for modals and sidebars, and ensure the rich text editor is operable without a mouse.</div>
          <div class="cr-job-section"><div class="cr-job-section-title">What you'll do</div>
            <ul class="cr-job-list">
              <li>Audit and fix WCAG 2.1 AA compliance across all views</li>
              <li>Build keyboard navigation for sidebar, modals, and tool panels</li>
              <li>Implement screen reader announcements for dynamic content updates</li>
              <li>Design high-contrast and reduced-motion mode support</li>
            </ul>
          </div>
          <div class="cr-job-stack"><span class="cr-job-tech">ARIA</span><span class="cr-job-tech">WCAG 2.1</span><span class="cr-job-tech">axe-core</span><span class="cr-job-tech">NVDA/VoiceOver</span></div>
          <a class="btn btn-primary cr-job-apply" href="/contact/">Apply for this role →</a>
        </div>
      </details>

      <!-- ── Data Engineering ────────────────────────────────────── -->
      <div class="cr-dept-label">Data Engineering</div>

      <details class="cr-job">
        <summary>
          <div class="cr-job-info"><div class="cr-job-title">Data Platform Architect — Repository Schema</div><div class="cr-job-meta"><span>📍 Chicago</span><span>Full-time</span></div></div>
          <div class="cr-job-tags"><span class="cr-job-tag data">Data</span></div>
          <div class="cr-job-arrow">→</div>
        </summary>
        <div class="cr-job-body">
          <div class="cr-job-desc">Own VaultBook's data model — the repository.json schema that stores items, pages, sections, labels, pagePaths, userVotes, and version history snapshots. You'll design migration strategies, schema evolution, and ensure the JSON structure stays performant as libraries grow.</div>
          <div class="cr-job-section"><div class="cr-job-section-title">What you'll do</div>
            <ul class="cr-job-list">
              <li>Design schema changes that are backward-compatible with existing repos</li>
              <li>Build automated migration scripts for major version upgrades</li>
              <li>Optimize JSON read/write performance for multi-megabyte repository files</li>
              <li>Define data integrity constraints and validation rules</li>
            </ul>
          </div>
          <div class="cr-job-stack"><span class="cr-job-tech">JSON Schema</span><span class="cr-job-tech">File System Access API</span><span class="cr-job-tech">IndexedDB</span><span class="cr-job-tech">Migration</span></div>
          <a class="btn btn-primary cr-job-apply" href="/contact/">Apply for this role →</a>
        </div>
      </details>

      <details class="cr-job">
        <summary>
          <div class="cr-job-info"><div class="cr-job-title">Data Pipeline Engineer — Attachment Extraction</div><div class="cr-job-meta"><span>📍 Chicago</span><span>Full-time</span></div></div>
          <div class="cr-job-tags"><span class="cr-job-tag data">Pipeline</span></div>
          <div class="cr-job-arrow">→</div>
        </summary>
        <div class="cr-job-body">
          <div class="cr-job-desc">Build the background attachment text extraction pipeline that indexes content from text-based files and images. You'll manage the index.txt manifest, handle re-indexing on attachment changes, and optimize the extraction queue for minimal UI jank.</div>
          <div class="cr-job-section"><div class="cr-job-section-title">What you'll do</div>
            <ul class="cr-job-list">
              <li>Build a priority queue for background text extraction</li>
              <li>Manage the attachment index manifest with delta updates</li>
              <li>Handle file-type detection and router to format-specific extractors</li>
              <li>Optimize memory for processing large files without blocking the UI</li>
            </ul>
          </div>
          <div class="cr-job-stack"><span class="cr-job-tech">Web Workers</span><span class="cr-job-tech">Blob API</span><span class="cr-job-tech">Streaming</span><span class="cr-job-tech">File API</span></div>
          <a class="btn btn-primary cr-job-apply" href="/contact/">Apply for this role →</a>
        </div>
      </details>

      <details class="cr-job">
        <summary>
          <div class="cr-job-info"><div class="cr-job-title">Feature Extraction Engineer — SheetJS / pdf.js</div><div class="cr-job-meta"><span>📍 Chicago</span><span>Full-time</span></div></div>
          <div class="cr-job-tags"><span class="cr-job-tag data">Parsing</span><span class="cr-job-tag infra">pdf.js</span></div>
          <div class="cr-job-arrow">→</div>
        </summary>
        <div class="cr-job-body">
          <div class="cr-job-desc">Parse structured content from PPTX slides via JSZip (reading XML inside the archive), XLSX sheets via SheetJS, and PDF pages via pdf.js. You'll turn opaque binary files into clean, searchable text that feeds VaultBook's deep indexing pipeline.</div>
          <div class="cr-job-section"><div class="cr-job-section-title">What you'll do</div>
            <ul class="cr-job-list">
              <li>Maintain and extend parsers for XLSX, PPTX, PDF, DOCX, and MSG</li>
              <li>Handle edge cases — password-protected files, corrupted archives, huge sheets</li>
              <li>Extract metadata (author, dates, slide notes) alongside content</li>
              <li>Benchmark extraction throughput and optimize for browser limits</li>
            </ul>
          </div>
          <div class="cr-job-stack"><span class="cr-job-tech">SheetJS</span><span class="cr-job-tech">JSZip</span><span class="cr-job-tech">pdf.js</span><span class="cr-job-tech">XML Parsing</span></div>
          <a class="btn btn-primary cr-job-apply" href="/contact/">Apply for this role →</a>
        </div>
      </details>

      <details class="cr-job">
        <summary>
          <div class="cr-job-info"><div class="cr-job-title">Data Quality Engineer</div><div class="cr-job-meta"><span>📍 Chicago</span><span>Full-time</span></div></div>
          <div class="cr-job-tags"><span class="cr-job-tag data">QA</span></div>
          <div class="cr-job-arrow">→</div>
        </summary>
        <div class="cr-job-body">
          <div class="cr-job-desc">Ensure data integrity across the repository — validate JSON structure, detect orphaned attachments, flag inconsistencies between index.txt and the /attachments directory, and build self-repair routines that fix issues automatically on load.</div>
          <div class="cr-job-section"><div class="cr-job-section-title">What you'll do</div>
            <ul class="cr-job-list">
              <li>Build validation routines that run on every repository load</li>
              <li>Design self-healing for common corruption patterns</li>
              <li>Create integrity dashboards visible in the analytics panel</li>
              <li>Write regression tests for every known data edge case</li>
            </ul>
          </div>
          <div class="cr-job-stack"><span class="cr-job-tech">JSON Validation</span><span class="cr-job-tech">File System</span><span class="cr-job-tech">Jest</span><span class="cr-job-tech">CI/CD</span></div>
          <a class="btn btn-primary cr-job-apply" href="/contact/">Apply for this role →</a>
        </div>
      </details>

      <!-- ── Design ──────────────────────────────────────────────── -->
      <div class="cr-dept-label">Design</div>

      <details class="cr-job">
        <summary>
          <div class="cr-job-info"><div class="cr-job-title">Senior Product Designer — Workspace UI</div><div class="cr-job-meta"><span>📍 Chicago</span><span>Full-time</span></div></div>
          <div class="cr-job-tags"><span class="cr-job-tag design">Design</span></div>
          <div class="cr-job-arrow">→</div>
        </summary>
        <div class="cr-job-body">
          <div class="cr-job-desc">Shape VaultBook's visual identity — the frosted-glass panels, sidebar toggle mechanics, floating action button, modal stacking, and responsive layout that breaks at 900px. You'll own the design system and ensure every new feature feels native to the workspace.</div>
          <div class="cr-job-section"><div class="cr-job-section-title">What you'll do</div>
            <ul class="cr-job-list">
              <li>Define and maintain the VaultBook design system (tokens, components, patterns)</li>
              <li>Design new features from wireframe through polished spec</li>
              <li>Collaborate daily with frontend engineers on implementation fidelity</li>
              <li>Conduct design critiques and maintain visual consistency across 14+ tools</li>
            </ul>
          </div>
          <div class="cr-job-stack"><span class="cr-job-tech">Figma</span><span class="cr-job-tech">CSS</span><span class="cr-job-tech">Design Systems</span><span class="cr-job-tech">Prototyping</span></div>
          <a class="btn btn-primary cr-job-apply" href="/contact/">Apply for this role →</a>
        </div>
      </details>

      <details class="cr-job">
        <summary>
          <div class="cr-job-info"><div class="cr-job-title">UX Researcher</div><div class="cr-job-meta"><span>📍 Chicago</span><span>Full-time</span></div></div>
          <div class="cr-job-tags"><span class="cr-job-tag design">UXR</span></div>
          <div class="cr-job-arrow">→</div>
        </summary>
        <div class="cr-job-body">
          <div class="cr-job-desc">Run the usability studies that shape VaultBook's information architecture — the sidebar time tabs (Recent, Due, Expiring, Tools), the search flow, the entry creation modal, and the Kanban board layout. You'll generate insights that directly drive product decisions.</div>
          <div class="cr-job-section"><div class="cr-job-section-title">What you'll do</div>
            <ul class="cr-job-list">
              <li>Plan and conduct moderated usability tests with real users</li>
              <li>Run card-sorting and tree-testing for navigation improvements</li>
              <li>Analyze task completion rates and identify friction points</li>
              <li>Present actionable findings to engineering and design weekly</li>
            </ul>
          </div>
          <div class="cr-job-stack"><span class="cr-job-tech">Maze</span><span class="cr-job-tech">UserTesting</span><span class="cr-job-tech">Figma</span><span class="cr-job-tech">Dovetail</span></div>
          <a class="btn btn-primary cr-job-apply" href="/contact/">Apply for this role →</a>
        </div>
      </details>

      <details class="cr-job">
        <summary>
          <div class="cr-job-info"><div class="cr-job-title">Interaction Designer — Micro-Animations</div><div class="cr-job-meta"><span>📍 Chicago</span><span>Full-time</span></div></div>
          <div class="cr-job-tags"><span class="cr-job-tag design">Motion</span></div>
          <div class="cr-job-arrow">→</div>
        </summary>
        <div class="cr-job-body">
          <div class="cr-job-desc">Craft the micro-interactions that make VaultBook feel alive — smooth transitions, hover states on cards, close-confirmation dialogs, accordion section expansion, sidebar slide-in, and the floating action button menu. Every animation must be performant, purposeful, and respect reduced-motion preferences.</div>
          <div class="cr-job-section"><div class="cr-job-section-title">What you'll do</div>
            <ul class="cr-job-list">
              <li>Design and implement CSS/JS animations across all UI surfaces</li>
              <li>Build spring-based timing curves for natural-feeling motion</li>
              <li>Ensure all animations degrade gracefully with prefers-reduced-motion</li>
              <li>Prototype interaction concepts in code before design handoff</li>
            </ul>
          </div>
          <div class="cr-job-stack"><span class="cr-job-tech">CSS Transitions</span><span class="cr-job-tech">Web Animations API</span><span class="cr-job-tech">requestAnimationFrame</span><span class="cr-job-tech">Figma</span></div>
          <a class="btn btn-primary cr-job-apply" href="/contact/">Apply for this role →</a>
        </div>
      </details>

      <!-- ── Product ─────────────────────────────────────────────── -->
      <div class="cr-dept-label">Product</div>

      <details class="cr-job">
        <summary>
          <div class="cr-job-info"><div class="cr-job-title">AI Product Manager — Suggestions &amp; QA</div><div class="cr-job-meta"><span>📍 Chicago</span><span>Full-time</span></div></div>
          <div class="cr-job-tags"><span class="cr-job-tag product">Product</span><span class="cr-job-tag ai">AI</span></div>
          <div class="cr-job-arrow">→</div>
        </summary>
        <div class="cr-job-body">
          <div class="cr-job-desc">Shape the AI Suggestions carousel and QA search experience. You'll define what each of the 4 suggestion pages shows (upcoming entries, weekday patterns, recent files, recent tools), decide how vote-based learning affects ranking, and set the product direction for VaultBook's intelligence layer.</div>
          <div class="cr-job-section"><div class="cr-job-section-title">What you'll do</div>
            <ul class="cr-job-list">
              <li>Define the product roadmap for AI features across Plus and Pro tiers</li>
              <li>Write specs for new suggestion algorithms and search improvements</li>
              <li>Analyze user feedback from Telegram to prioritize AI enhancements</li>
              <li>Collaborate with ML engineers on feasibility and experimentation</li>
            </ul>
          </div>
          <div class="cr-job-stack"><span class="cr-job-tech">Product Strategy</span><span class="cr-job-tech">ML Familiarity</span><span class="cr-job-tech">User Research</span><span class="cr-job-tech">Analytics</span></div>
          <a class="btn btn-primary cr-job-apply" href="/contact/">Apply for this role →</a>
        </div>
      </details>

      <details class="cr-job">
        <summary>
          <div class="cr-job-info"><div class="cr-job-title">Technical Product Manager — Tools Platform</div><div class="cr-job-meta"><span>📍 Chicago</span><span>Full-time</span></div></div>
          <div class="cr-job-tags"><span class="cr-job-tag product">Product</span></div>
          <div class="cr-job-arrow">→</div>
        </summary>
        <div class="cr-job-body">
          <div class="cr-job-desc">Own the roadmap for VaultBook's 14+ built-in tools and decide what ships next. You'll balance user requests, technical feasibility, and product coherence to grow the tools platform without bloating the workspace.</div>
          <div class="cr-job-section"><div class="cr-job-section-title">What you'll do</div>
            <ul class="cr-job-list">
              <li>Prioritize tool development based on user feedback and usage patterns</li>
              <li>Write detailed specs for new tools (PDF, media, data analysis, etc.)</li>
              <li>Define the Plus/Pro tier boundaries for tool access</li>
              <li>Coordinate cross-functional delivery with engineering and design</li>
            </ul>
          </div>
          <div class="cr-job-stack"><span class="cr-job-tech">Product Strategy</span><span class="cr-job-tech">Technical Writing</span><span class="cr-job-tech">Roadmapping</span><span class="cr-job-tech">User Research</span></div>
          <a class="btn btn-primary cr-job-apply" href="/contact/">Apply for this role →</a>
        </div>
      </details>

      <!-- ── Infrastructure & DevOps ─────────────────────────────── -->
      <div class="cr-dept-label">Infrastructure &amp; DevOps</div>

      <details class="cr-job">
        <summary>
          <div class="cr-job-info"><div class="cr-job-title">DevOps Engineer — Single-File Build Pipeline</div><div class="cr-job-meta"><span>📍 Chicago</span><span>Full-time</span></div></div>
          <div class="cr-job-tags"><span class="cr-job-tag infra">CI/CD</span></div>
          <div class="cr-job-arrow">→</div>
        </summary>
        <div class="cr-job-body">
          <div class="cr-job-desc">Manage the build pipeline that compiles VaultBook — all JavaScript, CSS, HTML templates, embedded libraries (SheetJS, JSZip, pdf.js, Tesseract worker) — into a single deployable HTML file with zero external dependencies. Every byte matters.</div>
          <div class="cr-job-section"><div class="cr-job-section-title">What you'll do</div>
            <ul class="cr-job-list">
              <li>Optimize the bundling pipeline for minimal output size</li>
              <li>Build automated smoke tests that verify the single-file output works</li>
              <li>Manage library vendoring and version pinning for embedded dependencies</li>
              <li>Create release automation for versioned builds with changelog generation</li>
            </ul>
          </div>
          <div class="cr-job-stack"><span class="cr-job-tech">Rollup/esbuild</span><span class="cr-job-tech">GitHub Actions</span><span class="cr-job-tech">Terser</span><span class="cr-job-tech">Base64 Inlining</span></div>
          <a class="btn btn-primary cr-job-apply" href="/contact/">Apply for this role →</a>
        </div>
      </details>

      <details class="cr-job">
        <summary>
          <div class="cr-job-info"><div class="cr-job-title">WebAssembly Engineer — Edge Runtime</div><div class="cr-job-meta"><span>📍 Chicago</span><span>Full-time</span></div></div>
          <div class="cr-job-tags"><span class="cr-job-tag infra">WASM</span></div>
          <div class="cr-job-arrow">→</div>
        </summary>
        <div class="cr-job-body">
          <div class="cr-job-desc">Bring WebAssembly to VaultBook's heaviest workloads — OCR processing, encryption key derivation (Argon2id), PDF rendering, and future ML inference. You'll compile C/Rust libraries to WASM, optimize memory layout, and integrate them seamlessly with VaultBook's JavaScript runtime.</div>
          <div class="cr-job-section"><div class="cr-job-section-title">What you'll do</div>
            <ul class="cr-job-list">
              <li>Compile and optimize WASM modules for OCR and cryptography</li>
              <li>Design the JS↔WASM bridge with minimal serialization overhead</li>
              <li>Profile and reduce WASM memory usage for constrained devices</li>
              <li>Evaluate WebGPU compute as an acceleration path for ML models</li>
            </ul>
          </div>
          <div class="cr-job-stack"><span class="cr-job-tech">Emscripten</span><span class="cr-job-tech">Rust/wasm-bindgen</span><span class="cr-job-tech">WebGPU</span><span class="cr-job-tech">SIMD</span></div>
          <a class="btn btn-primary cr-job-apply" href="/contact/">Apply for this role →</a>
        </div>
      </details>

      <!-- ── QA & Content ────────────────────────────────────────── -->
      <div class="cr-dept-label">QA &amp; Content</div>

      <details class="cr-job">
        <summary>
          <div class="cr-job-info"><div class="cr-job-title">QA Engineer — Cross-Browser Testing</div><div class="cr-job-meta"><span>📍 Chicago</span><span>Full-time</span></div></div>
          <div class="cr-job-tags"><span class="cr-job-tag fe">QA</span></div>
          <div class="cr-job-arrow">→</div>
        </summary>
        <div class="cr-job-body">
          <div class="cr-job-desc">Test VaultBook across Chrome, Edge, Arc, and Brave on Mac, Windows, and Linux — every release, every platform, every time. You'll build automated test suites, catch rendering differences, and ensure the rich text editor behaves identically across all Chromium-based browsers.</div>
          <div class="cr-job-section"><div class="cr-job-section-title">What you'll do</div>
            <ul class="cr-job-list">
              <li>Build end-to-end test suites with Playwright across all target browsers</li>
              <li>Create visual regression tests for UI components</li>
              <li>Test File System Access API behavior across OS and browser combinations</li>
              <li>Perform manual exploratory testing before every release</li>
            </ul>
          </div>
          <div class="cr-job-stack"><span class="cr-job-tech">Playwright</span><span class="cr-job-tech">Chromium</span><span class="cr-job-tech">Percy</span><span class="cr-job-tech">GitHub Actions</span></div>
          <a class="btn btn-primary cr-job-apply" href="/contact/">Apply for this role →</a>
        </div>
      </details>

      <details class="cr-job">
        <summary>
          <div class="cr-job-info"><div class="cr-job-title">Technical Writer</div><div class="cr-job-meta"><span>📍 Chicago</span><span>Full-time</span></div></div>
          <div class="cr-job-tags"><span class="cr-job-tag product">Docs</span></div>
          <div class="cr-job-arrow">→</div>
        </summary>
        <div class="cr-job-body">
          <div class="cr-job-desc">Write the storage tutorial, update banners, FAQ, in-app tooltips, release notes, and every piece of text that guides users through VaultBook. You'll also maintain the public documentation site and the security/privacy pages that explain VaultBook's architecture to technical audiences.</div>
          <div class="cr-job-section"><div class="cr-job-section-title">What you'll do</div>
            <ul class="cr-job-list">
              <li>Write clear, concise documentation for every new feature</li>
              <li>Maintain the security, privacy, and terms pages</li>
              <li>Create in-app onboarding flows and contextual help</li>
              <li>Produce release notes and changelog entries for each version</li>
            </ul>
          </div>
          <div class="cr-job-stack"><span class="cr-job-tech">Markdown</span><span class="cr-job-tech">Jekyll</span><span class="cr-job-tech">Technical Writing</span><span class="cr-job-tech">API Docs</span></div>
          <a class="btn btn-primary cr-job-apply" href="/contact/">Apply for this role →</a>
        </div>
      </details>

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
