---
layout: default
title: Contact
description: Reach the VaultBook team on Telegram — for support, demos, partnerships, or anything else.
body_class: contact-page
permalink: /contact/
---

<style>
/* ── Contact hero ────────────────────────────────────────────── */
.ct-hero{
  padding: 80px 0 64px;
  text-align: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, #faf8ff 0%, #f3f0fa 44%, #fff 100%);
}
.ct-hero::before{
  content: '';
  position: absolute;
  width: 640px; height: 640px;
  border-radius: 50%;
  top: -260px; left: 50%;
  transform: translateX(-50%);
  background: radial-gradient(circle, rgba(206,147,216,.1) 0%, rgba(129,212,250,.06) 50%, transparent 72%);
  pointer-events: none;
}
.ct-hero .eyebrow{ margin-bottom: 14px; position: relative; z-index:1; }
.ct-hero-title{
  font-size: clamp(36px, 5vw, 54px);
  font-weight: 900;
  letter-spacing: -0.03em;
  line-height: 1.08;
  margin: 0;
  position: relative; z-index:1;
}
.ct-hero-sub{
  margin: 18px auto 0;
  max-width: 50ch;
  font-size: 17px;
  color: rgba(11,11,11,.62);
  line-height: 1.55;
  position: relative; z-index:1;
}

/* ── Primary CTA card ────────────────────────────────────────── */
.ct-primary{
  max-width: 520px;
  margin: 40px auto 0;
  position: relative; z-index:1;
  background: rgba(255,255,255,.88);
  backdrop-filter: blur(18px) saturate(1.6);
  border: 1px solid rgba(206,147,216,.14);
  border-radius: 24px;
  padding: 36px 32px 32px;
  text-align: center;
  transition: transform .26s ease, box-shadow .26s ease;
}
.ct-primary:hover{
  transform: translateY(-4px);
  box-shadow: 0 18px 48px rgba(206,147,216,.12), 0 2px 10px rgba(0,0,0,.04);
}
.ct-primary::before{
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  border-radius: 24px 24px 0 0;
  background: linear-gradient(90deg, #81d4fa, #ce93d8, #ffcc80, #80cbc4);
}
.ct-tg-mark{
  width: 64px; height: 64px;
  border-radius: 20px;
  display: grid;
  place-items: center;
  margin: 0 auto 18px;
  background: linear-gradient(135deg, #2AABEE, #229ED9);
  box-shadow: 0 8px 28px rgba(42,171,238,.22);
  transition: transform .24s ease;
}
.ct-primary:hover .ct-tg-mark{ transform: scale(1.08); }
.ct-tg-mark svg{ width: 32px; height: 32px; fill: #fff; }
.ct-primary-title{
  font-size: 22px;
  font-weight: 900;
  letter-spacing: -0.02em;
}
.ct-primary-sub{
  margin-top: 8px;
  font-size: 15px;
  color: rgba(11,11,11,.55);
  line-height: 1.5;
  max-width: 38ch;
  margin-left: auto;
  margin-right: auto;
}
.ct-primary .btn{ margin-top: 22px; }

/* Telegram button */
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
  width: 18px; height: 18px;
  margin-right: 8px;
  vertical-align: -3px;
  fill: currentColor;
}
.ct-handle{
  margin-top: 14px;
  font-size: 13px;
  color: rgba(11,11,11,.38);
  letter-spacing: .02em;
}
.ct-handle a{
  color: rgba(11,11,11,.52);
  font-weight: 700;
  text-decoration: none;
  border-bottom: 1px dashed rgba(11,11,11,.18);
  transition: color .2s ease, border-color .2s ease;
}
.ct-handle a:hover{ color: #2AABEE; border-color: #2AABEE; }

/* ── Reach out about — topic cards ───────────────────────────── */
.ct-topics{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 32px;
}
.ct-topic{
  background: rgba(255,255,255,.72);
  border: 1px solid rgba(206,147,216,.1);
  border-radius: 20px;
  padding: 26px 22px 22px;
  transition: transform .22s ease, box-shadow .22s ease, border-color .22s ease;
  position: relative;
  overflow: hidden;
}
.ct-topic::before{
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  border-radius: 20px 20px 0 0;
  opacity: 0;
  transition: opacity .24s ease;
}
.ct-topic:hover{
  transform: translateY(-3px);
  box-shadow: 0 12px 32px rgba(206,147,216,.1), 0 2px 6px rgba(0,0,0,.03);
  border-color: rgba(206,147,216,.2);
}
.ct-topic:hover::before{ opacity: 1; }
.ct-topic:nth-child(1)::before{ background: linear-gradient(90deg, #ce93d8, #81d4fa); }
.ct-topic:nth-child(2)::before{ background: linear-gradient(90deg, #81d4fa, #80cbc4); }
.ct-topic:nth-child(3)::before{ background: linear-gradient(90deg, #80cbc4, #ffcc80); }
.ct-topic:nth-child(4)::before{ background: linear-gradient(90deg, #ffcc80, #f48fb1); }
.ct-topic:nth-child(5)::before{ background: linear-gradient(90deg, #f48fb1, #ce93d8); }
.ct-topic:nth-child(6)::before{ background: linear-gradient(90deg, #a5d6a7, #81d4fa); }
.ct-topic-ic{
  width: 42px; height: 42px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  font-size: 20px;
  margin-bottom: 14px;
  transition: transform .22s ease;
}
.ct-topic:hover .ct-topic-ic{ transform: scale(1.1); }
.ct-topic:nth-child(1) .ct-topic-ic{ background: linear-gradient(135deg, rgba(206,147,216,.18), rgba(243,229,245,.2)); }
.ct-topic:nth-child(2) .ct-topic-ic{ background: linear-gradient(135deg, rgba(129,212,250,.18), rgba(179,229,252,.15)); }
.ct-topic:nth-child(3) .ct-topic-ic{ background: linear-gradient(135deg, rgba(128,203,196,.18), rgba(178,223,219,.15)); }
.ct-topic:nth-child(4) .ct-topic-ic{ background: linear-gradient(135deg, rgba(255,204,128,.22), rgba(255,224,178,.16)); }
.ct-topic:nth-child(5) .ct-topic-ic{ background: linear-gradient(135deg, rgba(244,143,177,.18), rgba(248,187,208,.14)); }
.ct-topic:nth-child(6) .ct-topic-ic{ background: linear-gradient(135deg, rgba(165,214,167,.18), rgba(200,230,201,.15)); }
.ct-topic-title{ font-weight: 850; font-size: 16px; }
.ct-topic-text{ margin-top: 5px; font-size: 13.5px; color: rgba(11,11,11,.55); line-height: 1.5; }

/* ── Commitment strip ────────────────────────────────────────── */
.ct-commitments{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 32px;
}
.ct-commit{
  text-align: center;
  padding: 28px 18px;
  background: rgba(255,255,255,.6);
  border: 1px solid rgba(206,147,216,.1);
  border-radius: 20px;
  transition: transform .22s ease, box-shadow .22s ease;
}
.ct-commit:hover{
  transform: translateY(-3px);
  box-shadow: 0 10px 28px rgba(206,147,216,.1);
}
.ct-commit-val{
  font-size: 34px;
  font-weight: 900;
  letter-spacing: -0.03em;
  background: linear-gradient(135deg, #7b1fa2, #0288d1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.ct-commit-label{
  margin-top: 4px;
  font-size: 13.5px;
  color: rgba(11,11,11,.52);
  font-weight: 650;
  line-height: 1.4;
}

/* ── Inline Telegram mid-CTA ─────────────────────────────────── */
.ct-inline-cta{
  text-align: center;
  margin-top: 36px;
  padding: 36px 28px;
  border-radius: 22px;
  background: linear-gradient(135deg, rgba(243,229,245,.18), rgba(225,245,254,.12));
  border: 1px solid rgba(206,147,216,.12);
  position: relative;
  overflow: hidden;
}
.ct-inline-cta::before{
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: linear-gradient(90deg, #f48fb1, #ce93d8, #81d4fa, #80cbc4, #ffcc80);
  opacity: .55;
}
.ct-inline-cta-title{
  font-size: 21px;
  font-weight: 900;
  letter-spacing: -0.02em;
}
.ct-inline-cta-sub{
  margin: 8px auto 0;
  font-size: 15px;
  color: rgba(11,11,11,.5);
  max-width: 44ch;
  line-height: 1.5;
}
.ct-inline-cta .btn-telegram{ margin-top: 20px; }

/* ── FAQ cards ───────────────────────────────────────────────── */
.ct-faq{
  max-width: 620px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

/* ── Links footer row ────────────────────────────────────────── */
.ct-links{
  display: flex;
  justify-content: center;
  gap: 14px;
  flex-wrap: wrap;
  margin-top: 28px;
}
.ct-link-pill{
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 22px;
  border-radius: 999px;
  border: 1px solid rgba(206,147,216,.15);
  background: rgba(255,255,255,.65);
  font-weight: 700;
  font-size: 14px;
  color: rgba(11,11,11,.7);
  text-decoration: none;
  transition: all .22s ease;
}
.ct-link-pill:hover{
  background: linear-gradient(135deg, rgba(243,229,245,.35), rgba(225,245,254,.25));
  border-color: rgba(206,147,216,.3);
  transform: translateY(-2px);
  color: #7b1fa2;
  box-shadow: 0 6px 18px rgba(206,147,216,.08);
}
.ct-link-pill-ic{
  font-size: 16px;
  line-height: 1;
}

/* ── Responsive ──────────────────────────────────────────────── */
@media (max-width: 900px){
  .ct-topics{ grid-template-columns: 1fr 1fr; }
  .ct-commitments{ grid-template-columns: 1fr; max-width: 340px; margin-left: auto; margin-right: auto; }
}
@media (max-width: 600px){
  .ct-topics{ grid-template-columns: 1fr; }
  .ct-primary{ margin-left: 16px; margin-right: 16px; padding: 28px 20px 24px; }
}
</style>

<!-- ━━━ HERO + PRIMARY CTA ━━━ -->
<section class="ct-hero">
  <div class="container" data-reveal>
    <div class="eyebrow">GET IN TOUCH</div>
    <h1 class="ct-hero-title">We're one message away.</h1>
    <p class="ct-hero-sub">
      Whether it's a question, a feature idea, or a partnership inquiry —
      drop us a line on Telegram and a real person will reply.
    </p>

    <div class="ct-primary">
      <div class="ct-tg-mark">
        <svg viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 1 0 24 12.056A12.01 12.01 0 0 0 11.944 0Zm5.655 8.166c-.18 1.897-.962 6.502-1.36 8.627c-.168.9-.499 1.201-.82 1.23c-.696.065-1.225-.46-1.9-.902c-1.056-.693-1.653-1.124-2.678-1.8c-1.185-.78-.417-1.21.258-1.91c.177-.184 3.247-2.977 3.307-3.23c.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345c-.48.33-.913.492-1.302.484c-.428-.008-1.252-.241-1.865-.44c-.752-.245-1.349-.374-1.297-.789c.027-.216.325-.437.893-.663c3.498-1.524 5.83-2.529 6.998-3.014c3.332-1.386 4.025-1.627 4.476-1.635c.099-.002.321.023.465.141a.506.506 0 0 1 .171.325c.016.093.036.306.02.472Z"/></svg>
      </div>
      <div class="ct-primary-title">Message us on Telegram</div>
      <div class="ct-primary-sub">Fast, direct, and human. No ticket queues, no bots, no waiting days for a reply.</div>
      <a class="btn btn-telegram" href="https://t.me/VaultBook" target="_blank" rel="noopener">
        <svg viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 1 0 24 12.056A12.01 12.01 0 0 0 11.944 0Zm5.655 8.166c-.18 1.897-.962 6.502-1.36 8.627c-.168.9-.499 1.201-.82 1.23c-.696.065-1.225-.46-1.9-.902c-1.056-.693-1.653-1.124-2.678-1.8c-1.185-.78-.417-1.21.258-1.91c.177-.184 3.247-2.977 3.307-3.23c.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345c-.48.33-.913.492-1.302.484c-.428-.008-1.252-.241-1.865-.44c-.752-.245-1.349-.374-1.297-.789c.027-.216.325-.437.893-.663c3.498-1.524 5.83-2.529 6.998-3.014c3.332-1.386 4.025-1.627 4.476-1.635c.099-.002.321.023.465.141a.506.506 0 0 1 .171.325c.016.093.036.306.02.472Z"/></svg>
        Open Telegram
      </a>
      <div class="ct-handle"><a href="https://t.me/VaultBook" target="_blank" rel="noopener">t.me/VaultBook</a></div>
    </div>
  </div>
</section>

<!-- ━━━ WHAT TO REACH OUT ABOUT ━━━ -->
<section class="section">
  <div class="container">
    <header class="section-head" data-reveal>
      <h2 class="h2">What can we help with?</h2>
      <p class="muted">Send a message about any of these — or anything else on your mind.</p>
    </header>

    <div class="ct-topics" data-reveal>
      <div class="ct-topic">
        <div class="ct-topic-ic">🛠️</div>
        <div class="ct-topic-title">Technical support</div>
        <div class="ct-topic-text">Something not working? Having trouble with file access, search, or encryption? We'll help you sort it out fast.</div>
      </div>
      <div class="ct-topic">
        <div class="ct-topic-ic">🎯</div>
        <div class="ct-topic-title">Demo requests</div>
        <div class="ct-topic-text">Want a tailored walkthrough of VaultBook for your use case? Tell us what you need and we'll set one up.</div>
      </div>
      <div class="ct-topic">
        <div class="ct-topic-ic">💡</div>
        <div class="ct-topic-title">Feature ideas</div>
        <div class="ct-topic-text">Have an idea that would make VaultBook better for you? We read every suggestion and ship the best ones.</div>
      </div>
      <div class="ct-topic">
        <div class="ct-topic-ic">🏢</div>
        <div class="ct-topic-title">Enterprise &amp; teams</div>
        <div class="ct-topic-text">Evaluating VaultBook for your organization? We can discuss deployment, licensing, and team workflows.</div>
      </div>
      <div class="ct-topic">
        <div class="ct-topic-ic">🤝</div>
        <div class="ct-topic-title">Partnerships</div>
        <div class="ct-topic-text">Interested in integrating with VaultBook or co-developing? Let's talk about what we can build together.</div>
      </div>
      <div class="ct-topic">
        <div class="ct-topic-ic">💬</div>
        <div class="ct-topic-title">General questions</div>
        <div class="ct-topic-text">Anything else — pricing, migration, compatibility, roadmap — just ask. No question is too small.</div>
      </div>
    </div>
  </div>
</section>

<!-- ━━━ OUR COMMITMENTS ━━━ -->
<section class="section tint">
  <div class="container">
    <header class="section-head" data-reveal>
      <h2 class="h2">What to expect from us</h2>
      <p class="muted">We keep things simple, fast, and honest.</p>
    </header>

    <div class="ct-commitments" data-reveal>
      <div class="ct-commit">
        <div class="ct-commit-val">&lt; 24h</div>
        <div class="ct-commit-label">Typical response time</div>
      </div>
      <div class="ct-commit">
        <div class="ct-commit-val">Real</div>
        <div class="ct-commit-label">People, never bots</div>
      </div>
      <div class="ct-commit">
        <div class="ct-commit-val">Zero</div>
        <div class="ct-commit-label">Sales pressure, ever</div>
      </div>
    </div>

    <div class="ct-inline-cta" data-reveal>
      <div class="ct-inline-cta-title">Don't overthink it — just say hello.</div>
      <div class="ct-inline-cta-sub">We'd rather hear from you with a rough question than not hear from you at all.</div>
      <a class="btn btn-telegram" href="https://t.me/VaultBook" target="_blank" rel="noopener">
        <svg viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 1 0 24 12.056A12.01 12.01 0 0 0 11.944 0Zm5.655 8.166c-.18 1.897-.962 6.502-1.36 8.627c-.168.9-.499 1.201-.82 1.23c-.696.065-1.225-.46-1.9-.902c-1.056-.693-1.653-1.124-2.678-1.8c-1.185-.78-.417-1.21.258-1.91c.177-.184 3.247-2.977 3.307-3.23c.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345c-.48.33-.913.492-1.302.484c-.428-.008-1.252-.241-1.865-.44c-.752-.245-1.349-.374-1.297-.789c.027-.216.325-.437.893-.663c3.498-1.524 5.83-2.529 6.998-3.014c3.332-1.386 4.025-1.627 4.476-1.635c.099-.002.321.023.465.141a.506.506 0 0 1 .171.325c.016.093.036.306.02.472Z"/></svg>
        Message us on Telegram
      </a>
    </div>
  </div>
</section>

<!-- ━━━ FAQ ━━━ -->
<section class="section">
  <div class="container">
    <header class="section-head" data-reveal>
      <h2 class="h2">Frequently asked</h2>
    </header>

    <div class="ct-faq" data-reveal>
      <div class="card">
        <div class="card-title">Why Telegram instead of email?</div>
        <div class="card-text muted">
          Telegram is fast, end-to-end encrypted for secret chats, and lets us share
          files, screenshots, and screen recordings without size limits.
          It's the fastest way to resolve anything.
        </div>
      </div>
      <div class="card">
        <div class="card-title">What if I don't have Telegram?</div>
        <div class="card-text muted">
          Telegram is free and takes about a minute to set up on any device.
          Visit <a href="https://telegram.org" target="_blank" rel="noopener" style="color:var(--blue,#1f6feb);text-decoration:underline;text-underline-offset:3px;">telegram.org</a>
          to download it, then message us at
          <a href="https://t.me/VaultBook" target="_blank" rel="noopener" style="color:var(--blue,#1f6feb);text-decoration:underline;text-underline-offset:3px;">t.me/VaultBook</a>.
        </div>
      </div>
      <div class="card">
        <div class="card-title">How fast will I get a reply?</div>
        <div class="card-text muted">
          Most messages get a response within a few hours during business days. For complex
          technical issues we may take a bit longer, but we'll always acknowledge your
          message quickly so you know we're on it.
        </div>
      </div>
      <div class="card">
        <div class="card-title">Can I report a bug through Telegram?</div>
        <div class="card-text muted">
          Absolutely. Screenshots, screen recordings, and file attachments all work natively in Telegram,
          which makes debugging much faster than a traditional support form.
        </div>
      </div>
      <div class="card">
        <div class="card-title">Is my conversation private?</div>
        <div class="card-text muted">
          Yes. Telegram conversations are private by default. If you need extra
          confidentiality, start a Secret Chat for full end-to-end encryption with
          self-destructing messages.
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ━━━ HELPFUL LINKS + FINAL CTA ━━━ -->
<section class="section tint">
  <div class="container">
    <header class="section-head" data-reveal>
      <h2 class="h2">Other resources</h2>
      <p class="muted">Sometimes the answer is already written down.</p>
    </header>

    <div class="ct-links" data-reveal>
      <a class="ct-link-pill" href="{{ '/help/' | relative_url }}">
        <span class="ct-link-pill-ic">📘</span> Help Center
      </a>
      <a class="ct-link-pill" href="{{ '/docs/' | relative_url }}">
        <span class="ct-link-pill-ic">📄</span> Documentation
      </a>
      <a class="ct-link-pill" href="{{ '/whats-new/' | relative_url }}">
        <span class="ct-link-pill-ic">✨</span> What's New
      </a>
      <a class="ct-link-pill" href="{{ '/get-started/' | relative_url }}">
        <span class="ct-link-pill-ic">🚀</span> Get Started
      </a>
      <a class="ct-link-pill" href="{{ '/pricing/' | relative_url }}">
        <span class="ct-link-pill-ic">💳</span> Pricing
      </a>
    </div>

    <div class="cta-band" style="margin-top:36px;" data-reveal>
      <div>
        <div class="cta-title">Ready to talk?</div>
        <div class="muted">Message us on Telegram — we typically reply within a few hours.</div>
      </div>
      <div class="cta-actions">
        <a class="btn btn-telegram" href="https://t.me/VaultBook" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 1 0 24 12.056A12.01 12.01 0 0 0 11.944 0Zm5.655 8.166c-.18 1.897-.962 6.502-1.36 8.627c-.168.9-.499 1.201-.82 1.23c-.696.065-1.225-.46-1.9-.902c-1.056-.693-1.653-1.124-2.678-1.8c-1.185-.78-.417-1.21.258-1.91c.177-.184 3.247-2.977 3.307-3.23c.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345c-.48.33-.913.492-1.302.484c-.428-.008-1.252-.241-1.865-.44c-.752-.245-1.349-.374-1.297-.789c.027-.216.325-.437.893-.663c3.498-1.524 5.83-2.529 6.998-3.014c3.332-1.386 4.025-1.627 4.476-1.635c.099-.002.321.023.465.141a.506.506 0 0 1 .171.325c.016.093.036.306.02.472Z"/></svg>
          Open Telegram
        </a>
        <a class="btn btn-ghost" href="{{ '/get-started/' | relative_url }}">Download VaultBook</a>
      </div>
    </div>
  </div>
</section>
