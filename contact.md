---
layout: default
title: Contact
description: Reach the VaultBook team for support, demos, partnerships, security reviews, or press.
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

/* Contact form card */
.ct-form-card{ max-width:680px; margin:0 auto; background:#fff; border:1px solid #ece7f5; border-radius:20px; padding:40px 44px; box-shadow:0 10px 40px rgba(126,87,194,.08); text-align:left; }
.ct-form-card h3{ margin:0 0 8px; font-size:22px; font-weight:800; letter-spacing:-.01em; color:#2a2340; }
.ct-form-card p.lede{ margin:0 0 26px; color:#6a6485; font-size:15px; line-height:1.55; }
.ct-form label{ display:block; font-size:12px; font-weight:700; letter-spacing:.08em; text-transform:uppercase; color:#6a4fb6; margin-bottom:8px; }
.ct-form input[type=text], .ct-form input[type=email], .ct-form textarea{ width:100%; box-sizing:border-box; background:#faf8ff; border:1px solid #e4dff0; border-radius:12px; padding:14px 16px; font-size:15px; font-family:inherit; color:#2a2340; transition:border-color .15s, box-shadow .15s, background .15s; }
.ct-form input:focus, .ct-form textarea:focus{ outline:none; border-color:#9575cd; background:#fff; box-shadow:0 0 0 4px rgba(149,117,205,.15); }
.ct-form textarea{ resize:vertical; min-height:140px; }
.ct-row{ display:grid; grid-template-columns:1fr 1fr; gap:18px; margin-bottom:18px; }
.ct-field{ margin-bottom:18px; }
@media (max-width:640px){ .ct-row{ grid-template-columns:1fr; } .ct-form-card{ padding:32px 24px; } }
.ct-submit{ display:inline-block; background:linear-gradient(135deg,#9575cd,#7e57c2); color:#fff; border:none; border-radius:999px; padding:14px 34px; font-size:15px; font-weight:700; cursor:pointer; box-shadow:0 6px 18px rgba(126,87,194,.28); transition:transform .15s, box-shadow .15s; }
.ct-submit:hover{ transform:translateY(-1px); box-shadow:0 10px 24px rgba(126,87,194,.34); }
.ct-submit:disabled{ opacity:.6; cursor:not-allowed; transform:none; }
.ct-msg{ margin-top:18px; font-size:14px; min-height:20px; }
.ct-msg.ok{ color:#2e7d32; }
.ct-msg.err{ color:#c62828; }
</style>

<!-- ━━━ HERO + PRIMARY CTA ━━━ -->
<section class="ct-hero">
  <div class="container" data-reveal>
    <div class="eyebrow">GET IN TOUCH</div>
    <h1 class="ct-hero-title">Let us know how we can help.</h1>
    <p class="ct-hero-sub">Questions, demos, partnerships, security reviews, or press. Send a note and a real person from the VaultBook team in San Francisco will reply.</p>

    <div class="ct-form-card">
      <h3>Send us a message</h3>
      <p class="lede">Tell us a bit about what you are working on and we will point you to the right person.</p>
      <form class="ct-form" id="ctForm" action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="9cb6841a-a3a8-47d1-9598-672b68ab314c">
        <input type="hidden" name="subject" value="New message from VaultBook contact page">
        <input type="hidden" name="from_name" value="VaultBook Contact Form">
        <div class="ct-row">
          <div><label for="ct-name">Name</label><input id="ct-name" type="text" name="name" required autocomplete="name" placeholder="Your name"></div>
          <div><label for="ct-email">Email</label><input id="ct-email" type="email" name="email" required autocomplete="email" placeholder="you@example.com"></div>
        </div>
        <div class="ct-field"><label for="ct-message">Message</label><textarea id="ct-message" name="message" rows="5" required placeholder="What is on your mind?"></textarea></div>
        <input type="checkbox" name="botcheck" style="display:none" tabindex="-1" autocomplete="off">
        <button type="submit" class="ct-submit">Send message</button>
        <div class="ct-msg" id="ctMsg" aria-live="polite"></div>
      </form>
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
        <div class="ct-topic-text">Anything else - pricing, migration, compatibility, roadmap — just ask. No question is too small.</div>
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
      <div class="ct-inline-cta-title">Do not overthink it, just say hello.</div>
      <div class="ct-inline-cta-sub">We would rather hear from you with a rough question than not hear from you at all.</div>
      <a class="btn" href="#ctForm" style="margin-top:20px;display:inline-block;background:linear-gradient(135deg,#9575cd,#7e57c2);color:#fff;padding:14px 32px;border-radius:999px;font-weight:700;text-decoration:none;">Send a message</a>
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
        <div class="card-title">How fast will I get a reply?</div>
        <div class="card-text muted">Most messages get a response within a few hours during business days. For complex technical issues we may take a bit longer, but we will always acknowledge your message quickly so you know we are on it.</div>
      </div>
      <div class="card">
        <div class="card-title">What should I include in my message?</div>
        <div class="card-text muted">A short description of what you are trying to do and anything you have already tried. For bugs, your operating system and browser help. The more context, the faster we can point you to the right answer.</div>
      </div>
      <div class="card">
        <div class="card-title">Can I request a demo or security review?</div>
        <div class="card-text muted">Yes. Mention "demo" or "security review" in your message and we will route it to the right person on the team and schedule time that works for you.</div>
      </div>
      <div class="card">
        <div class="card-title">Can I report a bug through this form?</div>
        <div class="card-text muted">Absolutely. Describe what you expected, what happened, and the steps to reproduce. If you can, include your OS and browser version so we can reproduce it on our side.</div>
      </div>
      <div class="card">
        <div class="card-title">Is my message private?</div>
        <div class="card-text muted">Yes. Messages go directly to the VaultBook team and are not shared with third parties. We only use what you send to respond to your request.</div>
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
        <div class="muted">Send us a message and we typically reply within a few hours.</div>
      </div>
      <div class="cta-actions">
        <a class="btn" href="#ctForm" style="background:linear-gradient(135deg,#9575cd,#7e57c2);color:#fff;padding:14px 32px;border-radius:999px;font-weight:700;text-decoration:none;display:inline-block;">Send a message</a>
        <a class="btn btn-ghost" href="{{ '/get-started/' | relative_url }}">Download VaultBook</a>
      </div>
    </div>
  </div>
</section>

<script>
(function(){
  var form=document.getElementById('ctForm'); if(!form) return;
  var msg=document.getElementById('ctMsg');
  form.addEventListener('submit',function(e){
    e.preventDefault();
    msg.className='ct-msg'; msg.textContent='Sending...';
    var btn=form.querySelector('.ct-submit'); btn.disabled=true;
    fetch(form.action,{method:'POST',body:new FormData(form),headers:{Accept:'application/json'}})
      .then(function(r){return r.json();})
      .then(function(d){
        if(d&&d.success){ msg.className='ct-msg ok'; msg.textContent='Thanks, we will get back to you shortly.'; form.reset(); }
        else{ msg.className='ct-msg err'; msg.textContent=(d&&d.message)?d.message:'Something went wrong. Please try again.'; }
      })
      .catch(function(){ msg.className='ct-msg err'; msg.textContent='Network error. Please try again.'; })
      .finally(function(){ btn.disabled=false; });
  });
})();
</script>
