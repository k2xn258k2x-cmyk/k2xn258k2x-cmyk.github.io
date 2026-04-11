---
layout: default
title: Contact
description: Get in touch with the VaultBook team for support, demos, partnerships, security reviews, or press.
body_class: contact-page
permalink: /contact/
---

<style>
.ct-hero{
  padding: 80px 0 48px;
  text-align: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, #faf8ff 0%, #f3f0fa 44%, #fff 100%);
}
.ct-hero::before{
  content:''; position:absolute; width:640px; height:640px; border-radius:50%;
  top:-260px; left:50%; transform:translateX(-50%);
  background: radial-gradient(circle, rgba(206,147,216,.1) 0%, rgba(129,212,250,.06) 50%, transparent 72%);
  pointer-events:none;
}
.ct-hero .eyebrow{
  display:inline-block; font-size:12px; font-weight:700; letter-spacing:.14em;
  text-transform:uppercase; color:#7e57c2; margin-bottom:14px; position:relative; z-index:1;
}
.ct-hero-title{ font-size:clamp(36px,5vw,54px); font-weight:900; letter-spacing:-.03em; line-height:1.08; margin:0; position:relative; z-index:1; }
.ct-hero-sub{ margin:18px auto 0; max-width:52ch; font-size:17px; line-height:1.6; color:#5a5370; position:relative; z-index:1; }

.ct-form-section{ padding: 24px 0 96px; background:#fff; }
.ct-form-card{
  max-width: 680px; margin: 0 auto; background:#fff;
  border: 1px solid #ece7f5; border-radius: 20px; padding: 40px 44px;
  box-shadow: 0 10px 40px rgba(126,87,194,.08);
}
.ct-form-card h2{ margin:0 0 8px; font-size:24px; font-weight:800; letter-spacing:-.01em; color:#2a2340; }
.ct-form-card p.lede{ margin:0 0 28px; color:#6a6485; font-size:15px; line-height:1.55; }

.ct-form label{
  display:block; font-size:12px; font-weight:700; letter-spacing:.08em;
  text-transform:uppercase; color:#6a4fb6; margin-bottom:8px;
}
.ct-form input[type=text], .ct-form input[type=email], .ct-form textarea{
  width:100%; box-sizing:border-box; background:#faf8ff; border:1px solid #e4dff0;
  border-radius:12px; padding:14px 16px; font-size:15px; font-family:inherit;
  color:#2a2340; transition: border-color .15s, box-shadow .15s, background .15s;
}
.ct-form input:focus, .ct-form textarea:focus{
  outline:none; border-color:#9575cd; background:#fff;
  box-shadow: 0 0 0 4px rgba(149,117,205,.15);
}
.ct-form textarea{ resize:vertical; min-height:140px; }

.ct-row{ display:grid; grid-template-columns:1fr 1fr; gap:18px; margin-bottom:18px; }
.ct-field{ margin-bottom:18px; }
@media (max-width:640px){
  .ct-row{ grid-template-columns:1fr; }
  .ct-form-card{ padding: 32px 24px; }
}

.ct-submit{
  display:inline-block; background:linear-gradient(135deg,#9575cd,#7e57c2);
  color:#fff; border:none; border-radius:999px; padding:14px 34px;
  font-size:15px; font-weight:700; cursor:pointer; letter-spacing:.01em;
  box-shadow: 0 6px 18px rgba(126,87,194,.28);
  transition: transform .15s, box-shadow .15s;
}
.ct-submit:hover{ transform: translateY(-1px); box-shadow: 0 10px 24px rgba(126,87,194,.34); }
.ct-submit:disabled{ opacity:.6; cursor:not-allowed; transform:none; }

.ct-msg{ margin-top:18px; font-size:14px; min-height:20px; }
.ct-msg.ok{ color:#2e7d32; }
.ct-msg.err{ color:#c62828; }

.ct-alt{ text-align:center; margin-top:32px; font-size:14px; color:#6a6485; }
.ct-alt a{ color:#7e57c2; font-weight:600; text-decoration:none; }
.ct-alt a:hover{ text-decoration:underline; }
</style>

<section class="ct-hero">
  <div class="container">
    <span class="eyebrow">Contact</span>
    <h1 class="ct-hero-title">Let us know how we can help.</h1>
    <p class="ct-hero-sub">Questions about VaultBook, demos, partnerships, security reviews, or press. Send a note and the team in San Francisco will get back to you shortly.</p>
  </div>
</section>

<section class="ct-form-section">
  <div class="container">
    <div class="ct-form-card">
      <h2>Send a message</h2>
      <p class="lede">Tell us a bit about what you are working on and we will point you to the right person.</p>

      <form class="ct-form" id="ctForm" action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="9cb6841a-a3a8-47d1-9598-672b68ab314c">
        <input type="hidden" name="subject" value="New message from VaultBook contact page">
        <input type="hidden" name="from_name" value="VaultBook Contact Form">

        <div class="ct-row">
          <div>
            <label for="ct-name">Name</label>
            <input id="ct-name" type="text" name="name" required autocomplete="name" placeholder="Your name">
          </div>
          <div>
            <label for="ct-email">Email</label>
            <input id="ct-email" type="email" name="email" required autocomplete="email" placeholder="you@example.com">
          </div>
        </div>

        <div class="ct-field">
          <label for="ct-message">Message</label>
          <textarea id="ct-message" name="message" rows="5" required placeholder="What is on your mind?"></textarea>
        </div>

        <input type="checkbox" name="botcheck" style="display:none" tabindex="-1" autocomplete="off">

        <button type="submit" class="ct-submit">Send message</button>
        <div class="ct-msg" id="ctMsg" aria-live="polite"></div>
      </form>

      <div class="ct-alt">Prefer email? Write to <a href="mailto:hello@vaultbook.net">hello@vaultbook.net</a></div>
    </div>
  </div>
</section>

<script>
(function(){
  var form = document.getElementById('ctForm');
  var msg  = document.getElementById('ctMsg');
  if(!form) return;
  form.addEventListener('submit', function(e){
    e.preventDefault();
    msg.className = 'ct-msg'; msg.textContent = 'Sending...';
    var btn = form.querySelector('.ct-submit'); btn.disabled = true;
    fetch(form.action, { method:'POST', body:new FormData(form), headers:{Accept:'application/json'} })
      .then(function(r){ return r.json(); })
      .then(function(data){
        if(data && data.success){
          msg.className = 'ct-msg ok';
          msg.textContent = 'Thanks, we will get back to you shortly.';
          form.reset();
        } else {
          msg.className = 'ct-msg err';
          msg.textContent = (data && data.message) ? data.message : 'Something went wrong. Please try again.';
        }
      })
      .catch(function(){ msg.className='ct-msg err'; msg.textContent='Network error. Please try again.'; })
      .finally(function(){ btn.disabled = false; });
  });
})();
</script>
