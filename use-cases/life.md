---
layout: default
title: VaultBook for Life
description: How people use VaultBook to journal daily, track health and habits, preserve travel memories, manage personal finances, pursue every hobby, and build a lifelong private second brain — entirely offline, entirely theirs.
permalink: /use-cases/life/
---

<style>
/* ═══════════════════════════════════════════════════
   LIFE PAGE — all styles, .lf- scoped
   ═══════════════════════════════════════════════════ */

/* ── Hero ───────────────────────────────────────── */
.lf-hero{
  padding:108px 0 96px;
  text-align:center;
  position:relative;overflow:hidden;
  background:linear-gradient(168deg,#08031a 0%,#120826 28%,#0c1420 58%,#081018 100%);
  color:#fff;
}
.lf-orb{position:absolute;border-radius:50%;pointer-events:none}
.lf-orb1{width:1000px;height:1000px;top:-520px;left:50%;transform:translateX(-50%);background:radial-gradient(circle,rgba(244,143,177,.11) 0%,rgba(206,147,216,.07) 32%,rgba(129,212,250,.04) 56%,transparent 70%)}
.lf-orb2{width:520px;height:520px;bottom:-240px;left:-100px;background:radial-gradient(circle,rgba(255,204,128,.07) 0%,transparent 65%)}
.lf-orb3{width:420px;height:420px;top:28%;right:-110px;background:radial-gradient(circle,rgba(128,203,196,.07) 0%,transparent 62%)}
.lf-aurora{position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#f48fb1,#ce93d8,#81d4fa,#80cbc4,#ffcc80,#f48fb1);background-size:200% 100%;animation:lf-aurora 7s linear infinite;opacity:.75}
@keyframes lf-aurora{to{background-position:200% 0}}
.lf-star{position:absolute;border-radius:50%;pointer-events:none;animation:lf-twinkle var(--d,4s) ease-in-out var(--e,0s) infinite}
@keyframes lf-twinkle{0%,100%{opacity:.14;transform:scale(1)}50%{opacity:.88;transform:scale(1.6)}}

.lf-hero-badge{
  display:inline-flex;align-items:center;gap:8px;
  font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.17em;
  padding:6px 20px;border-radius:999px;
  background:linear-gradient(135deg,rgba(244,143,177,.14),rgba(206,147,216,.1));
  border:1px solid rgba(244,143,177,.26);color:rgba(244,143,177,.9);
  margin-bottom:28px;position:relative;z-index:1;
}
.lf-hero-title{
  font-size:clamp(44px,6.2vw,76px);font-weight:900;
  letter-spacing:-0.046em;line-height:1.02;margin:0;
  position:relative;z-index:1;
}
.lf-grad{
  background:linear-gradient(135deg,#f48fb1 0%,#ce93d8 35%,#81d4fa 68%,#ffcc80 100%);
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
}
/* cycling word */
.lf-cycle{
  display:inline-block;position:relative;vertical-align:bottom;
  overflow:hidden;height:1.05em;min-width:8ch;
}
.lf-cw{
  display:block;position:absolute;left:0;right:0;
  background:linear-gradient(135deg,#f48fb1 0%,#ce93d8 40%,#81d4fa 75%,#ffcc80 100%);
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
  opacity:0;
  animation:lf-cw-anim 12s steps(1) infinite;
}
.lf-cw:nth-child(1){opacity:1;animation-delay:0s}
.lf-cw:nth-child(2){animation-delay:4s}
.lf-cw:nth-child(3){animation-delay:8s}
@keyframes lf-cw-anim{
  0%{opacity:1;transform:translateY(0)}
  25%{opacity:1;transform:translateY(0)}
  30%{opacity:0;transform:translateY(-14px)}
  95%{opacity:0;transform:translateY(14px)}
  100%{opacity:1;transform:translateY(0)}
}
.lf-hero-sub{
  margin:24px auto 0;max-width:57ch;font-size:17.5px;
  color:rgba(255,255,255,.5);line-height:1.7;
  position:relative;z-index:1;
}


/* pill strip */
.lf-pill-strip{
  display:flex;justify-content:center;flex-wrap:wrap;gap:9px;
  margin-top:52px;padding-top:44px;
  border-top:1px solid rgba(255,255,255,.06);
  position:relative;z-index:1;
}
.lf-pill{
  display:inline-flex;align-items:center;gap:7px;
  padding:8px 16px;border-radius:999px;
  background:rgba(255,255,255,.055);border:1px solid rgba(255,255,255,.08);
  font-size:12.5px;font-weight:700;color:rgba(255,255,255,.5);
  backdrop-filter:blur(8px);cursor:default;
  transition:background .2s,border-color .2s,color .2s;
}
.lf-pill:hover{background:rgba(255,255,255,.09);border-color:rgba(244,143,177,.28);color:rgba(255,255,255,.82)}
.lf-dot{width:7px;height:7px;border-radius:50%;flex-shrink:0}
.dp{background:#f48fb1}.dt{background:#80cbc4}.db{background:#81d4fa}
.da{background:#ffcc80}.dg{background:#a5d6a7}.di{background:#9fa8da}
.dr{background:#ef9a9a}.dpu{background:#ce93d8}

/* hero stats */
.lf-hero-stats{
  display:flex;justify-content:center;gap:44px;flex-wrap:wrap;
  margin-top:56px;padding-top:44px;
  border-top:1px solid rgba(255,255,255,.055);
  position:relative;z-index:1;
}
.lf-hs{text-align:center}
.lf-hs-n{
  font-size:38px;font-weight:900;letter-spacing:-0.04em;
  background:linear-gradient(135deg,#f48fb1,#ce93d8);
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
}
.lf-hs-l{font-size:11.5px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:rgba(255,255,255,.35);margin-top:3px}

/* ── Shared helpers ─────────────────────────────── */
.lf-eye{font-size:10.5px;font-weight:800;text-transform:uppercase;letter-spacing:.16em;color:rgba(244,143,177,.75);margin-bottom:10px}
.lf-h2{font-size:clamp(28px,3.6vw,40px);font-weight:900;letter-spacing:-0.03em;background:linear-gradient(135deg,#1a1a2e 0%,#4a1463 50%,#1a5276 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin:0}
.lf-intro{margin:12px auto 0;max-width:60ch;font-size:16px;color:rgba(11,11,11,.52)}

/* ── Day-in-a-life strip ────────────────────────── */
.lf-day{max-width:900px;margin:0 auto;position:relative}
.lf-day::before{
  content:'';position:absolute;left:0;top:0;bottom:0;width:2px;
  background:linear-gradient(180deg,rgba(244,143,177,.4),rgba(206,147,216,.3),rgba(129,212,250,.22),rgba(128,203,196,.15),transparent);
  border-radius:2px;margin-left:23px;
}
.lf-moment{display:flex;gap:28px;align-items:flex-start;padding:22px 0;border-bottom:1px solid rgba(206,147,216,.07);position:relative}
.lf-moment:last-child{border-bottom:none}
.lf-moment-left{width:100px;flex-shrink:0;text-align:right;padding-right:4px;padding-top:8px}
.lf-moment-dot{
  width:48px;height:48px;border-radius:50%;flex-shrink:0;
  display:grid;place-items:center;font-size:19px;
  border:2px solid rgba(255,255,255,.85);
  box-shadow:0 4px 14px rgba(206,147,216,.14);
  position:relative;z-index:1;
}
.md1{background:linear-gradient(135deg,rgba(244,143,177,.22),rgba(248,187,208,.25))}
.md2{background:linear-gradient(135deg,rgba(128,203,196,.22),rgba(178,223,219,.22))}
.md3{background:linear-gradient(135deg,rgba(206,147,216,.22),rgba(243,229,245,.24))}
.md4{background:linear-gradient(135deg,rgba(255,204,128,.22),rgba(255,224,178,.2))}
.md5{background:linear-gradient(135deg,rgba(159,168,218,.22),rgba(197,202,233,.2))}
.md6{background:linear-gradient(135deg,rgba(165,214,167,.22),rgba(200,230,201,.2))}
.md7{background:linear-gradient(135deg,rgba(129,212,250,.22),rgba(179,229,252,.22))}
.lf-mampm{font-size:10.5px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:rgba(11,11,11,.28);display:block}
.lf-mhour-inner{font-size:22px;font-weight:900;letter-spacing:-0.02em;background:linear-gradient(135deg,#f48fb1,#ce93d8);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.lf-moment-hour{font-size:22px;font-weight:900;letter-spacing:-0.02em;background:linear-gradient(135deg,#f48fb1,#ce93d8);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.lf-moment-ampm{display:block;font-size:10.5px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:rgba(11,11,11,.28);margin-top:1px}
.lf-moment-body{
  flex:1;border:1px solid rgba(206,147,216,.1);border-radius:18px;
  background:rgba(255,255,255,.72);padding:18px 22px;
  transition:border-color .22s,box-shadow .22s,transform .22s;
}
.lf-moment-body:hover{border-color:rgba(206,147,216,.22);box-shadow:0 8px 28px rgba(206,147,216,.1);transform:translateX(4px)}
.lf-moment-cat{font-size:10.5px;font-weight:800;text-transform:uppercase;letter-spacing:.12em;color:rgba(244,143,177,.62);margin-bottom:4px}
.lf-moment-title{font-weight:900;font-size:16px;color:#0b0b0b}
.lf-moment-text{font-size:13.5px;color:rgba(11,11,11,.53);line-height:1.65;margin-top:5px}
.lf-moment-chips{display:flex;gap:6px;flex-wrap:wrap;margin-top:9px}
.lf-chip{font-size:10.5px;font-weight:700;padding:3px 10px;border-radius:999px;border:1px solid transparent}
.ch-pk{background:rgba(244,143,177,.12);color:#c2185b;-webkit-text-fill-color:#c2185b;border-color:rgba(244,143,177,.18)}
.ch-pu{background:rgba(206,147,216,.12);color:#7b1fa2;-webkit-text-fill-color:#7b1fa2;border-color:rgba(206,147,216,.18)}
.ch-bl{background:rgba(129,212,250,.12);color:#0277bd;-webkit-text-fill-color:#0277bd;border-color:rgba(129,212,250,.18)}
.ch-te{background:rgba(128,203,196,.12);color:#00796b;-webkit-text-fill-color:#00796b;border-color:rgba(128,203,196,.18)}
.ch-am{background:rgba(255,204,128,.18);color:#ef6c00;-webkit-text-fill-color:#ef6c00;border-color:rgba(255,204,128,.22)}
.ch-gr{background:rgba(165,214,167,.15);color:#2e7d32;-webkit-text-fill-color:#2e7d32;border-color:rgba(165,214,167,.2)}
.ch-in{background:rgba(159,168,218,.15);color:#3949ab;-webkit-text-fill-color:#3949ab;border-color:rgba(159,168,218,.2)}

/* ── Life category grid ─────────────────────────── */
.lf-cats{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}
.lf-cat{
  border:1px solid rgba(206,147,216,.09);border-radius:22px;
  padding:26px 20px 22px;background:rgba(255,255,255,.72);
  position:relative;overflow:hidden;
  transition:transform .26s,box-shadow .26s,border-color .26s;
  display:flex;flex-direction:column;
}
.lf-cat:hover{transform:translateY(-5px);box-shadow:0 20px 52px rgba(206,147,216,.13),0 3px 10px rgba(0,0,0,.04);border-color:rgba(206,147,216,.22)}
.lf-cat::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;border-radius:22px 22px 0 0;opacity:.65;transition:opacity .26s}
.lf-cat:hover::before{opacity:1}
.lf-cat:nth-child(1)::before{background:linear-gradient(90deg,#f48fb1,#ce93d8)}
.lf-cat:nth-child(2)::before{background:linear-gradient(90deg,#ce93d8,#81d4fa)}
.lf-cat:nth-child(3)::before{background:linear-gradient(90deg,#81d4fa,#80cbc4)}
.lf-cat:nth-child(4)::before{background:linear-gradient(90deg,#80cbc4,#ffcc80)}
.lf-cat:nth-child(5)::before{background:linear-gradient(90deg,#ffcc80,#f48fb1)}
.lf-cat:nth-child(6)::before{background:linear-gradient(90deg,#f48fb1,#9fa8da)}
.lf-cat:nth-child(7)::before{background:linear-gradient(90deg,#9fa8da,#a5d6a7)}
.lf-cat:nth-child(8)::before{background:linear-gradient(90deg,#a5d6a7,#ef9a9a)}
.lf-cat-ic{width:50px;height:50px;border-radius:15px;display:grid;place-items:center;font-size:23px;margin-bottom:15px;transition:transform .24s}
.lf-cat:hover .lf-cat-ic{transform:scale(1.1) rotate(-4deg)}
.ci1{background:linear-gradient(135deg,rgba(244,143,177,.18),rgba(248,187,208,.16))}
.ci2{background:linear-gradient(135deg,rgba(128,203,196,.18),rgba(178,223,219,.15))}
.ci3{background:linear-gradient(135deg,rgba(129,212,250,.18),rgba(179,229,252,.14))}
.ci4{background:linear-gradient(135deg,rgba(255,204,128,.22),rgba(255,224,178,.17))}
.ci5{background:linear-gradient(135deg,rgba(165,214,167,.2),rgba(200,230,201,.16))}
.ci6{background:linear-gradient(135deg,rgba(159,168,218,.2),rgba(197,202,233,.16))}
.ci7{background:linear-gradient(135deg,rgba(239,154,154,.18),rgba(255,205,210,.14))}
.ci8{background:linear-gradient(135deg,rgba(206,147,216,.18),rgba(243,229,245,.2))}
.lf-cat-title{font-weight:880;font-size:15.5px;letter-spacing:-0.01em;color:#0b0b0b}
.lf-cat-text{margin-top:6px;font-size:13px;color:rgba(11,11,11,.46);line-height:1.55;flex:1}
.lf-cat-meta{margin-top:14px;font-size:10.5px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:rgba(206,147,216,.6)}

/* ── Workflow tabs ──────────────────────────────── */
.lf-tabs{display:flex;justify-content:center;gap:8px;flex-wrap:wrap;margin-bottom:38px}
.lf-tab{
  display:inline-flex;align-items:center;gap:7px;
  padding:9px 18px;border-radius:999px;
  border:1px solid rgba(206,147,216,.14);background:rgba(255,255,255,.7);
  font-size:13.5px;font-weight:700;color:rgba(11,11,11,.5);
  cursor:pointer;transition:all .22s ease;
}
.lf-tab:hover,.lf-tab.active{
  background:linear-gradient(135deg,rgba(244,143,177,.15),rgba(206,147,216,.12));
  border-color:rgba(244,143,177,.3);
  color:#c2185b;-webkit-text-fill-color:#c2185b;
  box-shadow:0 4px 16px rgba(244,143,177,.12);
}
.lf-panel{display:none}.lf-panel.active{display:block}

.lf-split{display:grid;grid-template-columns:1fr 1fr;gap:32px;align-items:start}
.lf-visual{
  border:1px solid rgba(206,147,216,.12);border-radius:24px;
  padding:28px;position:relative;overflow:hidden;
  background:linear-gradient(145deg,rgba(255,255,255,.96),rgba(243,229,245,.07));
}
.lf-visual::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;border-radius:24px 24px 0 0}
.lvp::before{background:linear-gradient(90deg,#f48fb1,#ce93d8)}
.lvb::before{background:linear-gradient(90deg,#81d4fa,#80cbc4)}
.lvt::before{background:linear-gradient(90deg,#80cbc4,#a5d6a7)}
.lva::before{background:linear-gradient(90deg,#ffcc80,#f48fb1)}
.lvi::before{background:linear-gradient(90deg,#9fa8da,#ce93d8)}
.lvg::before{background:linear-gradient(90deg,#a5d6a7,#81d4fa)}
.lf-vis-label{font-size:10.5px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;margin-bottom:12px}
.lf-ct{font-size:10.5px;font-weight:800;text-transform:uppercase;letter-spacing:.14em;color:rgba(244,143,177,.75);margin-bottom:10px}
.lf-ptitle{font-size:clamp(22px,2.7vw,30px);font-weight:900;letter-spacing:-0.025em;line-height:1.14;background:linear-gradient(135deg,#1a1a2e 0%,#4a1463 50%,#1a5276 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.lf-pbody{margin-top:12px;font-size:15px;color:rgba(11,11,11,.54);line-height:1.72}
.lf-steps{margin-top:22px;display:flex;flex-direction:column;gap:12px}
.lf-step{display:flex;align-items:flex-start;gap:13px}
.lf-sn{width:28px;height:28px;border-radius:50%;flex-shrink:0;display:grid;place-items:center;font-size:12px;font-weight:900;color:#fff;background:linear-gradient(135deg,#c2185b,#880e4f)}
.lf-st{font-weight:800;font-size:14px;color:#0b0b0b}
.lf-ss{font-size:13px;color:rgba(11,11,11,.5);line-height:1.55;margin-top:2px}

/* mock journal entries */
.lf-je{background:rgba(255,255,255,.9);border:1px solid rgba(244,143,177,.12);border-radius:15px;padding:15px 17px;margin-bottom:10px}
.lf-je:last-child{margin-bottom:0}
.lf-jdate{font-size:10.5px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:rgba(244,143,177,.65);margin-bottom:5px}
.lf-jtext{font-size:13px;color:rgba(11,11,11,.65);line-height:1.6;font-style:italic}
.lf-jmood{margin-top:7px;display:flex;align-items:center;gap:6px}
.lf-mood-dot{width:8px;height:8px;border-radius:50%}
.lf-mlabel{font-size:11px;color:rgba(11,11,11,.38);font-weight:700}
.lf-jtags{display:flex;gap:5px;flex-wrap:wrap;margin-top:6px}
.lf-jtag{font-size:10px;font-weight:700;padding:2px 8px;border-radius:999px}
.jt-pk{background:rgba(244,143,177,.14);color:#c2185b;-webkit-text-fill-color:#c2185b}
.jt-pu{background:rgba(206,147,216,.14);color:#7b1fa2;-webkit-text-fill-color:#7b1fa2}
.jt-te{background:rgba(128,203,196,.14);color:#00796b;-webkit-text-fill-color:#00796b}
.jt-am{background:rgba(255,204,128,.2);color:#ef6c00;-webkit-text-fill-color:#ef6c00}
.jt-in{background:rgba(159,168,218,.18);color:#3949ab;-webkit-text-fill-color:#3949ab}

/* mood calendar */
.lf-mcal{margin-top:14px}
.lf-mcal-label{font-size:10.5px;font-weight:800;text-transform:uppercase;letter-spacing:.09em;color:rgba(11,11,11,.3);margin-bottom:8px}
.lf-mcal-days{display:grid;grid-template-columns:repeat(7,1fr);gap:4px}
.lf-mday{aspect-ratio:1;border-radius:6px;display:grid;place-items:center;font-size:9px;font-weight:800;color:rgba(255,255,255,.85)}
.mce{background:rgba(11,11,11,.04);color:rgba(11,11,11,.2)}
.mc1{background:#f48fb1}.mc2{background:#80cbc4}.mc3{background:#9fa8da}
.mc4{background:#a5d6a7}.mc5{background:#ffcc80}.mc6{background:#ce93d8}.mc7{background:#81d4fa}

/* habit tracker */
.lf-hrow{display:flex;align-items:center;gap:12px;padding:10px 14px;border-radius:12px;background:rgba(255,255,255,.9);border:1px solid rgba(128,203,196,.14);margin-bottom:8px}
.lf-hrow:last-child{margin-bottom:0}
.lf-hic{font-size:18px;flex-shrink:0}
.lf-hname{font-size:13px;font-weight:800;color:#0b0b0b;flex:1}
.lf-hnote{font-size:11px;color:rgba(11,11,11,.4);margin-top:1px}
.lf-hdots{display:flex;gap:3px}
.lf-hd{width:8px;height:8px;border-radius:50%}
.hdon{background:#80cbc4}.hdof{background:rgba(11,11,11,.1)}
.lf-hstreak{font-size:11px;font-weight:800;color:#00796b;-webkit-text-fill-color:#00796b;white-space:nowrap}

/* travel cards */
.lf-tcard{background:rgba(255,255,255,.9);border:1px solid rgba(129,212,250,.15);border-radius:15px;padding:14px 16px;margin-bottom:10px}
.lf-tcard:last-child{margin-bottom:0}
.lf-tdest{font-size:14px;font-weight:900;color:#0b0b0b}
.lf-tmeta{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-top:5px}
.lf-tdate{font-size:11px;color:rgba(11,11,11,.38);font-weight:600}
.lf-ttag{font-size:10px;font-weight:700;padding:2px 8px;border-radius:999px}
.ttb{background:rgba(129,212,250,.15);color:#0277bd;-webkit-text-fill-color:#0277bd}
.ttt{background:rgba(128,203,196,.15);color:#00796b;-webkit-text-fill-color:#00796b}
.tta{background:rgba(255,204,128,.2);color:#ef6c00;-webkit-text-fill-color:#ef6c00}
.ttp{background:rgba(206,147,216,.14);color:#7b1fa2;-webkit-text-fill-color:#7b1fa2}
.lf-tdesc{font-size:12px;color:rgba(11,11,11,.45);margin-top:6px;line-height:1.52}
.lf-tprog{height:4px;border-radius:99px;background:rgba(11,11,11,.06);overflow:hidden;margin-top:10px}
.lf-tprog-fill{height:100%;border-radius:99px;background:linear-gradient(90deg,#81d4fa,#80cbc4)}

/* finance */
.lf-frow{display:flex;align-items:center;gap:12px;padding:11px 14px;border-radius:12px;background:rgba(255,255,255,.9);border:1px solid rgba(255,204,128,.18);margin-bottom:8px}
.lf-frow:last-child{margin-bottom:0}
.lf-fic{font-size:18px;flex-shrink:0}
.lf-flabel{font-size:13px;font-weight:800;color:#0b0b0b;flex:1}
.lf-fsub{font-size:11px;color:rgba(11,11,11,.38);margin-top:1px}
.lf-famt{font-size:13px;font-weight:900;flex-shrink:0}
.fa-pos{color:#00796b;-webkit-text-fill-color:#00796b}
.fa-neg{color:#c62828;-webkit-text-fill-color:#c62828}
.fa-neu{color:rgba(11,11,11,.42);-webkit-text-fill-color:rgba(11,11,11,.42)}
.lf-fbar{height:5px;border-radius:99px;background:rgba(11,11,11,.06);overflow:hidden;margin-top:9px}
.lf-fbar-fill{height:100%;border-radius:99px}

/* hobbies */
.lf-hobcard{background:rgba(255,255,255,.9);border:1px solid rgba(165,214,167,.18);border-radius:14px;padding:13px 16px;margin-bottom:9px}
.lf-hobcard:last-child{margin-bottom:0}
.lf-hobtitle{font-size:13.5px;font-weight:800;color:#0b0b0b}
.lf-hobmeta{display:flex;gap:6px;flex-wrap:wrap;margin-top:5px}
.lf-hobtag{font-size:10px;font-weight:700;padding:2px 8px;border-radius:999px}
.htg{background:rgba(165,214,167,.18);color:#2e7d32;-webkit-text-fill-color:#2e7d32}
.hta{background:rgba(255,204,128,.18);color:#ef6c00;-webkit-text-fill-color:#ef6c00}
.htp{background:rgba(206,147,216,.14);color:#7b1fa2;-webkit-text-fill-color:#7b1fa2}
.htb{background:rgba(129,212,250,.14);color:#0277bd;-webkit-text-fill-color:#0277bd}
.lf-hobtext{font-size:12px;color:rgba(11,11,11,.45);margin-top:5px;line-height:1.5}

/* learning */
.lf-litem{display:flex;align-items:flex-start;gap:12px;padding:11px 14px;border-radius:12px;background:rgba(255,255,255,.9);border:1px solid rgba(159,168,218,.18);margin-bottom:8px}
.lf-litem:last-child{margin-bottom:0}
.lf-lic{font-size:20px;flex-shrink:0;margin-top:1px}
.lf-ltitle{font-size:13px;font-weight:800;color:#0b0b0b}
.lf-lsub{font-size:11.5px;color:rgba(11,11,11,.42);margin-top:2px;line-height:1.45}
.lf-lprog{display:flex;align-items:center;gap:6px;margin-top:6px;font-size:10.5px;font-weight:700;color:#3949ab;-webkit-text-fill-color:#3949ab}
.lf-lbar{height:4px;flex:1;border-radius:99px;background:rgba(159,168,218,.2);overflow:hidden}
.lf-lbar-fill{height:100%;border-radius:99px;background:linear-gradient(90deg,#9fa8da,#ce93d8)}

/* ── Search demo ────────────────────────────────── */
.lf-sbox{
  max-width:820px;margin:0 auto;
  border:1px solid rgba(206,147,216,.14);border-radius:26px;
  overflow:hidden;background:rgba(255,255,255,.82);
  box-shadow:0 14px 52px rgba(206,147,216,.1),0 2px 8px rgba(0,0,0,.03);
}
.lf-sbox-head{background:linear-gradient(135deg,rgba(243,229,245,.3),rgba(225,245,254,.2));padding:20px 24px 0;border-bottom:1px solid rgba(206,147,216,.1)}
.lf-sbar{display:flex;align-items:center;gap:10px;background:rgba(255,255,255,.92);border:1px solid rgba(206,147,216,.22);border-radius:12px;padding:12px 18px;margin-bottom:16px}
.lf-sbar-ic{font-size:15px;opacity:.4}
.lf-sbar-q{font-size:14px;color:rgba(11,11,11,.55);flex:1}
.lf-sbar-enter{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.08em;padding:4px 9px;border-radius:7px;background:linear-gradient(135deg,rgba(244,143,177,.15),rgba(206,147,216,.12));color:#c2185b;-webkit-text-fill-color:#c2185b}
.lf-stabs{display:flex;gap:2px}
.lf-stab{font-size:12px;font-weight:700;padding:8px 16px;border-radius:10px 10px 0 0;color:rgba(11,11,11,.4);cursor:default;transition:background .18s,color .18s}
.lf-stab.on{background:#fff;color:#7b1fa2;-webkit-text-fill-color:#7b1fa2}
.lf-sresults{padding:16px 24px 20px}
.lf-sr{display:flex;align-items:center;gap:14px;padding:13px 16px;border-radius:14px;background:rgba(255,255,255,.8);border:1px solid rgba(206,147,216,.08);margin-bottom:8px;transition:border-color .18s,box-shadow .18s}
.lf-sr:hover{border-color:rgba(206,147,216,.2);box-shadow:0 4px 14px rgba(206,147,216,.08)}
.lf-sr:last-child{margin-bottom:0}
.lf-sr-ic{width:38px;height:38px;border-radius:11px;flex-shrink:0;display:grid;place-items:center;font-size:17px}
.sri-j{background:linear-gradient(135deg,rgba(244,143,177,.18),rgba(248,187,208,.15))}
.sri-h{background:linear-gradient(135deg,rgba(128,203,196,.18),rgba(178,223,219,.14))}
.sri-t{background:linear-gradient(135deg,rgba(129,212,250,.18),rgba(179,229,252,.14))}
.sri-f{background:linear-gradient(135deg,rgba(255,204,128,.22),rgba(255,224,178,.16))}
.sri-l{background:linear-gradient(135deg,rgba(159,168,218,.2),rgba(197,202,233,.15))}
.lf-sr-title{font-size:13.5px;font-weight:800;color:#0b0b0b}
.lf-sr-src{font-size:11.5px;color:rgba(11,11,11,.38);margin-top:2px}
.lf-sr-excerpt{font-size:12px;color:rgba(11,11,11,.5);margin-top:3px;line-height:1.5}
.lf-sr-score{margin-left:auto;font-size:10px;font-weight:800;padding:3px 8px;border-radius:7px;background:rgba(128,203,196,.14);color:#00796b;-webkit-text-fill-color:#00796b;flex-shrink:0}
.lf-sfooter{padding:14px 24px;border-top:1px solid rgba(206,147,216,.08);display:flex;align-items:center;justify-content:space-between;background:linear-gradient(135deg,rgba(243,229,245,.1),rgba(225,245,254,.08))}
.lf-sfmeta{font-size:11.5px;color:rgba(11,11,11,.38);font-weight:600}
.lf-slayers{display:flex;gap:5px;flex-wrap:wrap}
.lf-slayer{font-size:10px;font-weight:700;padding:2px 8px;border-radius:6px;background:rgba(206,147,216,.1);color:#7b1fa2;-webkit-text-fill-color:#7b1fa2}

/* ── File index grid ────────────────────────────── */
.lf-filgrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.lf-filcard{border:1px solid rgba(206,147,216,.09);border-radius:18px;padding:22px 18px;background:rgba(255,255,255,.72);text-align:center;transition:transform .24s,box-shadow .24s}
.lf-filcard:hover{transform:translateY(-3px);box-shadow:0 10px 28px rgba(206,147,216,.1)}
.lf-filic{font-size:30px;margin-bottom:10px}
.lf-filtype{font-weight:900;font-size:14.5px;letter-spacing:-0.01em;color:#0b0b0b}
.lf-filhow{font-size:12px;font-weight:700;margin-top:3px;color:rgba(11,11,11,.38);font-style:italic}
.lf-filwhat{margin-top:8px;font-size:12px;color:rgba(11,11,11,.48);line-height:1.55}
.lf-filbadge{display:inline-block;margin-top:10px;font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.07em;padding:3px 9px;border-radius:7px}
.fib-plus{background:rgba(129,212,250,.14);color:#0277bd;-webkit-text-fill-color:#0277bd}
.fib-pro{background:rgba(206,147,216,.14);color:#7b1fa2;-webkit-text-fill-color:#7b1fa2}
.fib-free{background:rgba(165,214,167,.16);color:#2e7d32;-webkit-text-fill-color:#2e7d32}

/* ── Privacy section ────────────────────────────── */
.lf-priv-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.lf-priv-card{border:1px solid rgba(206,147,216,.09);border-radius:22px;padding:30px 24px;background:rgba(255,255,255,.72);text-align:center;position:relative;overflow:hidden;transition:transform .26s,box-shadow .26s}
.lf-priv-card:hover{transform:translateY(-4px);box-shadow:0 16px 40px rgba(206,147,216,.11)}
.lf-priv-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;border-radius:22px 22px 0 0}
.lf-priv-card:nth-child(1)::before{background:linear-gradient(90deg,#f48fb1,#ce93d8)}
.lf-priv-card:nth-child(2)::before{background:linear-gradient(90deg,#80cbc4,#81d4fa)}
.lf-priv-card:nth-child(3)::before{background:linear-gradient(90deg,#ffcc80,#f48fb1)}
.lf-priv-ic{font-size:38px;margin-bottom:14px}
.lf-priv-title{font-weight:900;font-size:17px;letter-spacing:-0.01em}
.lf-priv-text{margin-top:9px;font-size:13.5px;color:rgba(11,11,11,.52);line-height:1.62}

/* security dark panel */
.lf-sec-dark{background:linear-gradient(160deg,#0d0b1a 0%,#1a1040 100%);border-radius:24px;padding:32px;color:#fff;position:relative;overflow:hidden}
.lf-sec-dark::before{content:'';position:absolute;width:300px;height:300px;border-radius:50%;top:-80px;right:-60px;background:radial-gradient(circle,rgba(128,203,196,.1) 0%,transparent 65%)}
.lf-sv{display:flex;align-items:center;gap:12px;padding:12px 16px;border-radius:12px;background:rgba(255,255,255,.055);border:1px solid rgba(255,255,255,.07);margin-bottom:8px}
.lf-sv:last-child{margin-bottom:0}
.lf-sv-ic{font-size:18px;flex-shrink:0}
.lf-sv-label{font-size:13px;font-weight:700;color:rgba(255,255,255,.7)}
.lf-sv-sub{margin-top:2px;font-size:11px;color:rgba(255,255,255,.35)}
.lf-sv-badge{margin-left:auto;width:24px;height:24px;border-radius:50%;display:grid;place-items:center;font-size:11px;flex-shrink:0}
.svb-y{background:rgba(128,203,196,.18);border:1px solid rgba(128,203,196,.3);color:#80cbc4}
.svb-n{background:rgba(239,154,154,.14);border:1px solid rgba(239,154,154,.22);color:#ef9a9a}

/* ── Comparison table ───────────────────────────── */
.lf-cmp{border:1px solid rgba(206,147,216,.1);border-radius:22px;overflow-x:auto;overflow-y:visible;background:rgba(255,255,255,.75);-webkit-overflow-scrolling:touch}
.lf-cmp-head{display:grid;grid-template-columns:2.2fr 1fr 1fr 1fr 1fr;background:linear-gradient(135deg,rgba(243,229,245,.25),rgba(225,245,254,.2));border-bottom:1px solid rgba(206,147,216,.1)}
.lf-cmp-hcell{padding:15px 18px;font-size:11.5px;font-weight:800;text-transform:uppercase;letter-spacing:.09em;color:rgba(11,11,11,.42)}
.lf-cmp-hcell.hl{background:linear-gradient(135deg,rgba(244,143,177,.1),rgba(206,147,216,.08));color:#c2185b;-webkit-text-fill-color:#c2185b}
.lf-cmp-row{display:grid;grid-template-columns:2.2fr 1fr 1fr 1fr 1fr;border-bottom:1px solid rgba(206,147,216,.07);transition:background .15s}
.lf-cmp-row:last-child{border-bottom:none}
.lf-cmp-row:hover{background:rgba(243,229,245,.07)}
.lf-cmp-cell{padding:14px 18px;font-size:13px;color:rgba(11,11,11,.62);display:flex;align-items:center}
.lf-cmp-cell.fc{font-weight:700;color:#0b0b0b;font-size:13.5px}
.lf-cmp-cell.hl{background:rgba(244,143,177,.03)}
.cy{font-size:15px;color:#00796b;font-weight:900}
.cn{font-size:15px;color:rgba(11,11,11,.18)}
.cp{font-size:11.5px;font-weight:700;color:#ef6c00}

/* ── Growth timeline ────────────────────────────── */
.lf-tl{max-width:800px;margin:0 auto;position:relative}
.lf-tl::before{content:'';position:absolute;left:27px;top:0;bottom:0;width:2px;background:linear-gradient(180deg,rgba(244,143,177,.4),rgba(206,147,216,.3),rgba(129,212,250,.22),rgba(128,203,196,.15),transparent);border-radius:2px}
.lf-tli{display:flex;gap:24px;margin-bottom:26px;position:relative}
.lf-tli:last-child{margin-bottom:0}
.lf-tldot{width:56px;height:56px;flex-shrink:0;border-radius:50%;display:grid;place-items:center;font-size:22px;border:2px solid rgba(255,255,255,.85);box-shadow:0 4px 16px rgba(206,147,216,.14);position:relative;z-index:1}
.tld1{background:linear-gradient(135deg,rgba(244,143,177,.22),rgba(248,187,208,.25))}
.tld2{background:linear-gradient(135deg,rgba(206,147,216,.22),rgba(243,229,245,.24))}
.tld3{background:linear-gradient(135deg,rgba(129,212,250,.22),rgba(179,229,252,.22))}
.tld4{background:linear-gradient(135deg,rgba(128,203,196,.22),rgba(178,223,219,.22))}
.tld5{background:linear-gradient(135deg,rgba(255,204,128,.22),rgba(255,224,178,.2))}
.tld6{background:linear-gradient(135deg,rgba(165,214,167,.22),rgba(200,230,201,.2))}
.lf-tlbody{flex:1;border:1px solid rgba(206,147,216,.09);border-radius:18px;background:rgba(255,255,255,.72);padding:19px 22px;transition:border-color .22s,box-shadow .22s,transform .22s}
.lf-tlbody:hover{border-color:rgba(206,147,216,.2);box-shadow:0 8px 26px rgba(206,147,216,.1);transform:translateX(3px)}
.lf-tlperiod{font-size:10.5px;font-weight:800;text-transform:uppercase;letter-spacing:.11em;color:rgba(244,143,177,.65);margin-bottom:3px}
.lf-tltitle{font-weight:900;font-size:16.5px;letter-spacing:-0.01em;color:#0b0b0b}
.lf-tltext{margin-top:6px;font-size:13.5px;color:rgba(11,11,11,.54);line-height:1.62}
.lf-tlchips{display:flex;gap:5px;flex-wrap:wrap;margin-top:9px}
.lf-tlchip{font-size:10.5px;font-weight:700;padding:3px 9px;border-radius:999px;background:linear-gradient(135deg,rgba(243,229,245,.45),rgba(225,245,254,.32));color:#7b1fa2;-webkit-text-fill-color:#7b1fa2;border:1px solid rgba(206,147,216,.16)}

/* ── Persona cards ──────────────────────────────── */
.lf-personas{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.lf-persona{border:1px solid rgba(206,147,216,.1);border-radius:22px;background:rgba(255,255,255,.75);padding:28px 24px;position:relative;overflow:hidden;transition:transform .25s,box-shadow .25s}
.lf-persona:hover{transform:translateY(-3px);box-shadow:0 14px 38px rgba(206,147,216,.11)}
.lf-persona::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;border-radius:22px 22px 0 0}
.lf-persona:nth-child(1)::before{background:linear-gradient(90deg,#f48fb1,#ce93d8)}
.lf-persona:nth-child(2)::before{background:linear-gradient(90deg,#81d4fa,#80cbc4)}
.lf-persona:nth-child(3)::before{background:linear-gradient(90deg,#ffcc80,#a5d6a7)}
.lf-persona:nth-child(4)::before{background:linear-gradient(90deg,#ce93d8,#9fa8da)}
.lf-persona:nth-child(5)::before{background:linear-gradient(90deg,#80cbc4,#81d4fa)}
.lf-persona:nth-child(6)::before{background:linear-gradient(90deg,#ef9a9a,#f48fb1)}
.lf-pa{width:54px;height:54px;border-radius:50%;display:grid;place-items:center;font-size:23px;margin-bottom:13px}
.pa1{background:linear-gradient(135deg,rgba(244,143,177,.18),rgba(248,187,208,.2))}
.pa2{background:linear-gradient(135deg,rgba(129,212,250,.18),rgba(179,229,252,.18))}
.pa3{background:linear-gradient(135deg,rgba(255,204,128,.2),rgba(255,224,178,.18))}
.pa4{background:linear-gradient(135deg,rgba(206,147,216,.18),rgba(243,229,245,.2))}
.pa5{background:linear-gradient(135deg,rgba(128,203,196,.18),rgba(178,223,219,.18))}
.pa6{background:linear-gradient(135deg,rgba(239,154,154,.18),rgba(255,205,210,.16))}
.lf-pname{font-weight:900;font-size:16px;letter-spacing:-0.01em}
.lf-prole{font-size:12px;color:rgba(11,11,11,.4);font-weight:600;margin-top:2px}
.lf-pquote{margin-top:12px;font-size:13.5px;color:rgba(11,11,11,.6);line-height:1.65;font-style:italic;padding:11px 14px;background:linear-gradient(135deg,rgba(244,143,177,.07),rgba(206,147,216,.05));border-left:3px solid rgba(244,143,177,.28);border-radius:0 10px 10px 0;margin-bottom:13px}
.lf-puses{display:flex;flex-direction:column;gap:6px}
.lf-puse{display:flex;align-items:flex-start;gap:8px;font-size:13px;color:rgba(11,11,11,.6);line-height:1.4}
.lf-puse::before{content:'✦';flex-shrink:0;font-size:9.5px;color:rgba(244,143,177,.6);margin-top:2px}

/* ── Testimonials ───────────────────────────────── */
.lf-quotes{display:grid;grid-template-columns:1fr 1fr;gap:16px}
.lf-quote{border:1px solid rgba(206,147,216,.09);border-radius:22px;background:rgba(255,255,255,.7);padding:28px 26px;position:relative;overflow:hidden;transition:transform .24s,box-shadow .24s}
.lf-quote:hover{transform:translateY(-3px);box-shadow:0 12px 32px rgba(244,143,177,.1)}
.lf-quote.span2{grid-column:1/-1;display:grid;grid-template-columns:1fr 1fr;gap:32px;align-items:center}
.lf-qmark{font-size:56px;line-height:1;font-weight:900;color:rgba(244,143,177,.18);margin-bottom:10px;font-family:Georgia,serif}
.lf-qtext{font-size:14.5px;color:rgba(11,11,11,.65);line-height:1.72;font-style:italic}
.lf-qauthor{margin-top:18px;display:flex;align-items:center;gap:12px}
.lf-qavatar{width:42px;height:42px;border-radius:50%;flex-shrink:0;display:grid;place-items:center;font-size:18px;background:linear-gradient(135deg,rgba(244,143,177,.18),rgba(225,245,254,.18))}
.lf-qname{font-weight:800;font-size:13.5px;color:#0b0b0b}
.lf-qrole{font-size:12px;color:rgba(11,11,11,.4);margin-top:1px}
.lf-qvisual{background:linear-gradient(145deg,rgba(243,229,245,.22),rgba(225,245,254,.16));border-radius:18px;padding:22px;border:1px solid rgba(206,147,216,.1)}

/* ── FAQ ─────────────────────────────────────────── */
.lf-faq{max-width:780px;margin:0 auto}
.lf-fqi{border:1px solid rgba(206,147,216,.09);border-radius:15px;background:rgba(255,255,255,.72);margin-bottom:8px;overflow:hidden;transition:border-color .2s,box-shadow .2s}
.lf-fqi:hover{border-color:rgba(244,143,177,.2);box-shadow:0 4px 16px rgba(244,143,177,.07)}
.lf-fqi summary{display:flex;align-items:center;justify-content:space-between;padding:18px 22px;cursor:pointer;list-style:none;font-weight:750;font-size:15px;color:#0b0b0b}
.lf-fqi summary::-webkit-details-marker{display:none}
.lf-fchev{width:22px;height:22px;border-radius:7px;flex-shrink:0;background:linear-gradient(135deg,rgba(244,143,177,.12),rgba(206,147,216,.08));display:grid;place-items:center;font-size:11px;color:#c2185b;-webkit-text-fill-color:#c2185b;transition:transform .25s}
.lf-fqi[open] .lf-fchev{transform:rotate(180deg)}
.lf-fbody{padding:0 22px 18px;font-size:14px;color:rgba(11,11,11,.58);line-height:1.7}

/* ═══════════════════════════════════════════════════
   RESPONSIVE — LIFE PAGE
   ═══════════════════════════════════════════════════ */

/* Tablet ≤1080px */
@media(max-width:1080px){
  .lf-cats{grid-template-columns:repeat(2,1fr)}
  .lf-filgrid{grid-template-columns:repeat(2,1fr)}
  .lf-personas{grid-template-columns:1fr 1fr}
  .lf-cmp-head,.lf-cmp-row{grid-template-columns:2fr 1fr 1fr 1fr}
  .lf-cmp-hcell:last-child,.lf-cmp-cell:last-child{display:none}
  .lf-quotes{grid-template-columns:1fr}
  .lf-quote.span2{grid-template-columns:1fr}
}

/* Tablet narrow ≤860px */
@media(max-width:860px){
  .lf-split{grid-template-columns:1fr}
  .lf-split>*:first-child{order:2}  /* visual below text */
  .lf-split>*:last-child{order:1}
  .lf-priv-grid{grid-template-columns:1fr;max-width:460px;margin:0 auto}
  .lf-hero-stats{gap:24px}
  .lf-moment{gap:14px}
  .lf-moment-dot{width:40px;height:40px;font-size:17px}
  .lf-sec-dark{margin-top:24px}
}

/* Mobile ≤640px */
@media(max-width:640px){
  /* ── Hero ── */
  .lf-hero{padding:56px 0 44px}
  .lf-hero-badge{font-size:10px;padding:5px 14px;margin-bottom:18px}
  .lf-hero-title{font-size:clamp(30px,9vw,46px);letter-spacing:-0.038em;line-height:1.06}
  .lf-hero-sub{font-size:14.5px;margin-top:16px}
  .lf-hero .hero-actions{
    flex-direction:column;align-items:stretch;
    gap:10px;margin-top:28px;padding:0 2px
  }
  .lf-hero .hero-actions .btn-hero-primary,
  .lf-hero .hero-actions .btn-hero-secondary{
    width:100%;justify-content:center;height:50px;font-size:15px
  }
  .lf-hero-stats{
    display:grid;grid-template-columns:1fr 1fr;
    gap:16px;margin-top:32px;padding-top:24px
  }
  .lf-hs-n{font-size:24px}
  .lf-hs-l{font-size:10px}
  /* pill strip — horizontal scroll */
  .lf-pill-strip{
    overflow-x:auto;flex-wrap:nowrap;justify-content:flex-start;
    -webkit-overflow-scrolling:touch;scrollbar-width:none;
    gap:6px;margin-top:28px;padding-top:24px;padding-bottom:4px
  }
  .lf-pill-strip::-webkit-scrollbar{display:none}
  .lf-pill{flex-shrink:0;font-size:11.5px;padding:6px 12px}

  /* ── Categories ── */
  .lf-cats{grid-template-columns:1fr}
  .lf-cat{padding:20px 18px}
  .lf-cat-title{font-size:15px}
  .lf-cat-text{font-size:12.5px}

  /* ── Day-in-a-life strip ── */
  .lf-day{padding:0 2px}
  .lf-day::before{margin-left:15px}
  .lf-moment{gap:10px;padding:14px 0}
  .lf-moment-left{width:60px!important;padding-right:4px!important;padding-top:10px!important}
  .lf-mhour-inner{font-size:17px!important}
  .lf-mampm{font-size:9px!important}
.lf-moment-hour{font-size:15px}
  .lf-moment-dot{width:36px;height:36px;font-size:15px}
  .lf-moment-body{padding:12px 14px}
  .lf-moment-cat{font-size:9.5px}
  .lf-moment-title{font-size:14px}
  .lf-moment-text{font-size:12.5px}
  .lf-moment-chips{gap:4px;margin-top:7px}
  .lf-chip{font-size:9.5px;padding:2px 7px}

  /* ── Workflow tabs ── */
  .lf-tabs{
    overflow-x:auto;flex-wrap:nowrap;justify-content:flex-start;
    -webkit-overflow-scrolling:touch;scrollbar-width:none;
    gap:6px;padding-bottom:4px
  }
  .lf-tabs::-webkit-scrollbar{display:none}
  .lf-tab{flex-shrink:0;font-size:12.5px;padding:8px 14px}
  .lf-split{gap:20px}
  .lf-split>div:first-child{order:2}
  .lf-split>div:last-child{order:1}
  .lf-split>*:first-child{order:2}
  .lf-split>*:last-child{order:1}
  .lf-visual{padding:18px 16px}
  .lf-ptitle{font-size:clamp(19px,5.5vw,24px)}
  .lf-pbody{font-size:13.5px}
  .lf-steps{gap:10px;margin-top:16px}
  .lf-st{font-size:13.5px}
  .lf-ss{font-size:12.5px}

  /* ── Search demo ── */
  .lf-sbox{border-radius:18px}
  .lf-sbox-head{padding:14px 14px 0}
  .lf-sbar{padding:10px 12px;gap:8px}
  .lf-sbar-q{font-size:12px}
  .lf-sbar-enter{display:none}
  .lf-stabs{overflow-x:auto;flex-wrap:nowrap;-webkit-overflow-scrolling:touch;scrollbar-width:none;gap:0}
  .lf-stabs::-webkit-scrollbar{display:none}
  .lf-stab{flex-shrink:0;font-size:11.5px;padding:7px 12px}
  .lf-sresults{padding:10px 12px 14px}
  .lf-sr{padding:10px 10px;gap:8px}
  .lf-sr-ic{width:32px;height:32px;font-size:14px;border-radius:9px}
  .lf-sr-title{font-size:12px}
  .lf-sr-src{font-size:10.5px}
  .lf-sr-excerpt{font-size:11px;display:none}  /* hide excerpt on small screens */
  .lf-sr-score{font-size:9.5px;padding:2px 6px}
  .lf-sfooter{flex-direction:column;align-items:flex-start;gap:6px;padding:10px 14px}
  .lf-sfmeta{font-size:10.5px}
  .lf-slayers{overflow-x:auto;flex-wrap:nowrap;-webkit-overflow-scrolling:touch;scrollbar-width:none;gap:4px}
  .lf-slayers::-webkit-scrollbar{display:none}
  .lf-slayer{flex-shrink:0}

  /* ── File index ── */
  .lf-filgrid{grid-template-columns:1fr 1fr;gap:8px}
  .lf-filcard{padding:16px 12px;border-radius:14px}
  .lf-filic{font-size:24px;margin-bottom:8px}
  .lf-filtype{font-size:12.5px}
  .lf-filhow{font-size:11px}
  .lf-filwhat{font-size:11px;margin-top:6px}
  .lf-filbadge{font-size:9px;margin-top:8px}

  /* ── Privacy ── */
  .lf-priv-grid{max-width:100%}
  .lf-priv-card{padding:22px 18px;border-radius:18px}
  .lf-priv-ic{font-size:32px;margin-bottom:10px}
  .lf-priv-title{font-size:15.5px}
  .lf-priv-text{font-size:13px}
  .lf-sec-dark{padding:22px 18px;border-radius:18px}
  .lf-sv{padding:10px 12px;gap:8px}
  .lf-sv-label{font-size:12px}
  .lf-sv-sub{font-size:10px}
  .lf-sv-badge{width:20px;height:20px;font-size:10px}

  /* ── Comparison table ── */
  .lf-cmp{overflow-x:auto;-webkit-overflow-scrolling:touch;border-radius:16px}
  .lf-cmp-head,.lf-cmp-row{
    grid-template-columns:minmax(130px,1.7fr) minmax(78px,1fr) minmax(78px,1fr);
    min-width:330px
  }
  .lf-cmp-hcell:nth-child(4),.lf-cmp-cell:nth-child(4){display:none}
  .lf-cmp-cell{padding:10px 9px;font-size:11.5px}
  .lf-cmp-hcell{padding:10px 9px;font-size:9.5px}
  .lf-cmp-cell.fc{font-size:12px}

  /* ── Timeline ── */
  .lf-tl::before{left:18px}
  .lf-tli{gap:12px;margin-bottom:18px}
  .lf-tldot{width:42px;height:42px;font-size:17px}
  .lf-tlbody{padding:14px 16px;border-radius:15px}
  .lf-tlperiod{font-size:9.5px}
  .lf-tltitle{font-size:14.5px}
  .lf-tltext{font-size:12.5px;margin-top:4px}
  .lf-tlchips{gap:4px;margin-top:7px}
  .lf-tlchip{font-size:9.5px;padding:2px 8px}

  /* ── Personas ── */
  .lf-personas{grid-template-columns:1fr}
  .lf-persona{padding:22px 18px;border-radius:18px}
  .lf-pa{width:48px;height:48px;font-size:20px;margin-bottom:10px}
  .lf-pname{font-size:15px}
  .lf-pquote{font-size:13px;padding:10px 12px;margin-bottom:10px}
  .lf-puse{font-size:12.5px}

  /* ── Testimonials ── */
  .lf-quotes{grid-template-columns:1fr}
  .lf-quote{padding:22px 18px;border-radius:18px}
  .lf-qmark{font-size:44px;margin-bottom:8px}
  .lf-qtext{font-size:13.5px;line-height:1.65}
  .lf-qname{font-size:13px}
  .lf-qvisual{padding:16px;margin-top:20px}

  /* ── FAQ ── */
  .lf-fqi summary{padding:14px 16px;font-size:13.5px}
  .lf-fbody{padding:0 16px 14px;font-size:13px;line-height:1.65}
  .lf-fchev{width:20px;height:20px;font-size:10px}
}

/* Small mobile ≤400px */
@media(max-width:400px){
  .lf-hero-title{font-size:28px}
  .lf-hero-stats{grid-template-columns:1fr 1fr;gap:10px}
  .lf-hs-n{font-size:22px}
  .lf-cats{grid-template-columns:1fr}
  .lf-filgrid{grid-template-columns:1fr}
  .lf-personas{grid-template-columns:1fr}
  .lf-cmp-head,.lf-cmp-row{grid-template-columns:minmax(110px,1.5fr) minmax(70px,1fr) minmax(70px,1fr)}
  /* day strip: hide time column, just show dot + body */
  .lf-moment-left{display:none!important}
  .lf-day::before{margin-left:13px}
}

/* hero button styles (from index.html — not in global CSS) */
.lf-hero .hero-actions{
  display:flex;gap:14px;flex-wrap:wrap;align-items:center;
  justify-content:center;
  margin-top:40px;position:relative;z-index:1;
}
.lf-hero .hero-actions .btn-hero-primary{
  display:inline-flex;align-items:center;justify-content:center;
  height:48px;padding:0 28px;border-radius:12px;
  background:linear-gradient(135deg,#7c3aed 0%,#6d28d9 50%,#4f46e5 100%);
  color:#fff;font-weight:700;font-size:15.5px;border:none;
  box-shadow:0 0 0 1px rgba(124,58,237,.4),0 4px 20px rgba(124,58,237,.3),inset 0 1px 0 rgba(255,255,255,.15);
  transition:transform .22s cubic-bezier(.16,1,.3,1),box-shadow .22s ease;
  letter-spacing:.01em;text-decoration:none;
}
.lf-hero .hero-actions .btn-hero-primary:hover{
  transform:translateY(-2px);
  box-shadow:0 0 0 1px rgba(124,58,237,.5),0 8px 30px rgba(124,58,237,.4),inset 0 1px 0 rgba(255,255,255,.2);
}
.lf-hero .hero-actions .btn-hero-secondary{
  display:inline-flex;align-items:center;justify-content:center;
  height:48px;padding:0 28px;border-radius:12px;
  background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);
  color:rgba(255,255,255,.8);font-weight:650;font-size:15.5px;
  backdrop-filter:blur(8px);text-decoration:none;
  transition:transform .22s cubic-bezier(.16,1,.3,1),background .22s ease,border-color .22s ease;
}
.lf-hero .hero-actions .btn-hero-secondary:hover{
  transform:translateY(-2px);background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.18);
}
</style>


<!-- ═══════════════════════════════════
     HERO
     ═══════════════════════════════════ -->
<section class="lf-hero hero-dark">
  <div class="lf-orb lf-orb1"></div>
  <div class="lf-orb lf-orb2"></div>
  <div class="lf-orb lf-orb3"></div>
  <div class="lf-aurora"></div>
  <!-- stars -->
  <div class="lf-star" style="width:4px;height:4px;background:rgba(244,143,177,.55);top:18%;left:7%;--d:4s;--e:0s"></div>
  <div class="lf-star" style="width:3px;height:3px;background:rgba(206,147,216,.5);top:32%;right:9%;--d:5s;--e:.8s"></div>
  <div class="lf-star" style="width:5px;height:5px;background:rgba(129,212,250,.45);top:55%;left:14%;--d:6s;--e:.4s"></div>
  <div class="lf-star" style="width:3px;height:3px;background:rgba(255,204,128,.4);top:24%;right:20%;--d:3.5s;--e:1.2s"></div>
  <div class="lf-star" style="width:4px;height:4px;background:rgba(128,203,196,.45);bottom:28%;right:8%;--d:5.5s;--e:.6s"></div>
  <div class="lf-star" style="width:3px;height:3px;background:rgba(165,214,167,.4);bottom:38%;left:6%;--d:7s;--e:1.8s"></div>
  <div class="lf-star" style="width:6px;height:6px;background:rgba(244,143,177,.28);top:44%;right:5%;--d:4.5s;--e:.2s"></div>
  <div class="lf-star" style="width:3px;height:3px;background:rgba(255,204,128,.35);top:65%;left:23%;--d:6.5s;--e:1s"></div>
  <div class="lf-star" style="width:4px;height:4px;background:rgba(159,168,218,.4);top:78%;right:16%;--d:5.2s;--e:.3s"></div>

  <div class="container" data-reveal>
    <div class="lf-hero-badge">🌿 VaultBook for Life</div>
    <h1 class="lf-hero-title">
      A private home for<br>
      <span class="lf-cycle">
        <span class="lf-cw">your journal.</span>
        <span class="lf-cw">your memories.</span>
        <span class="lf-cw">your whole life.</span>
      </span>
    </h1>
    <p class="lf-hero-sub">Journal. Track your health. Capture travel. Manage money. Pursue every hobby. Build the second brain you've always needed — private, offline, and entirely yours.</p>
    <div class="hero-actions">
      <a class="btn-hero-primary" href="{{ '/get-started/' | relative_url }}">Download VaultBook</a>
      <a class="btn-hero-secondary" href="{{ '/pricing/' | relative_url }}">See Plus &amp; Pro</a>
    </div>

    <div class="lf-pill-strip">
      <div class="lf-pill"><span class="lf-dot dp"></span>Journaling</div>
      <div class="lf-pill"><span class="lf-dot dt"></span>Health &amp; habits</div>
      <div class="lf-pill"><span class="lf-dot db"></span>Travel memories</div>
      <div class="lf-pill"><span class="lf-dot da"></span>Personal finance</div>
      <div class="lf-pill"><span class="lf-dot dg"></span>Hobbies &amp; projects</div>
      <div class="lf-pill"><span class="lf-dot di"></span>Learning &amp; courses</div>
      <div class="lf-pill"><span class="lf-dot dr"></span>Family &amp; memories</div>
      <div class="lf-pill"><span class="lf-dot dpu"></span>Ideas &amp; inspiration</div>
    </div>

    <div class="lf-hero-stats">
      <div class="lf-hs"><div class="lf-hs-n">0 B</div><div class="lf-hs-l">sent to any server. Ever.</div></div>
      <div class="lf-hs"><div class="lf-hs-n">7×</div><div class="lf-hs-l">content layers searched</div></div>
      <div class="lf-hs"><div class="lf-hs-n">AES-256</div><div class="lf-hs-l">per-entry encryption</div></div>
      <div class="lf-hs"><div class="lf-hs-n">60d</div><div class="lf-hs-l">version history per note</div></div>
    </div>
  </div>
</section>


<!-- ═══════════════════════════════════
     A DAY IN YOUR LIFE WITH VAULTBOOK
     ═══════════════════════════════════ -->
<section class="section">
  <div class="container">
    <header class="section-head" data-reveal>
      <div class="eyebrow">How it fits</div>
      <h2 class="h2">A day in your life with VaultBook</h2>
      <p class="muted">VaultBook doesn't demand a workflow. It fits around the moments when you naturally want to capture, remember, or find something.</p>
    </header>
    <div class="lf-day" data-reveal>

      <div class="lf-moment">
        <div class="lf-moment-left">
          <div class="lf-moment-hour lf-mhour-inner">6:30</div>
          <span class="lf-moment-ampm lf-mampm">AM</span>
        </div>
        <div class="lf-moment-dot md1" style="flex-shrink:0">📖</div>
        <div class="lf-moment-body">
          <div class="lf-moment-cat">Morning journal</div>
          <div class="lf-moment-title">Six sentences before coffee.</div>
          <div class="lf-moment-text">Three things you're grateful for. One thing you're dreading. One thing that would make today great. Encrypted entry. No algorithm will ever read it.</div>
          <div class="lf-moment-chips"><span class="lf-chip ch-pk">Gratitude</span><span class="lf-chip ch-pu">Morning routine</span><span class="lf-chip ch-pk">Encrypted 🔒</span></div>
        </div>
      </div>

      <div class="lf-moment">
        <div class="lf-moment-left">
          <div class="lf-moment-hour lf-mhour-inner">7:15</div>
          <span class="lf-moment-ampm lf-mampm">AM</span>
        </div>
        <div class="lf-moment-dot md2" style="flex-shrink:0">🏃</div>
        <div class="lf-moment-body">
          <div class="lf-moment-cat">Health tracking</div>
          <div class="lf-moment-title">Log the run. Note the ankle.</div>
          <div class="lf-moment-text">5.2km, 31 minutes. Left ankle slightly tight — same spot as last Tuesday. Marked the entry. Now if it becomes a pattern, QA search will find it in seconds.</div>
          <div class="lf-moment-chips"><span class="lf-chip ch-te">Exercise</span><span class="lf-chip ch-am">Health log</span><span class="lf-chip ch-te">Streak: 6 🔥</span></div>
        </div>
      </div>

      <div class="lf-moment">
        <div class="lf-moment-left">
          <div class="lf-moment-hour lf-mhour-inner">12:30</div>
          <span class="lf-moment-ampm lf-mampm">PM</span>
        </div>
        <div class="lf-moment-dot md3" style="flex-shrink:0">💡</div>
        <div class="lf-moment-body">
          <div class="lf-moment-cat">Ideas &amp; learning</div>
          <div class="lf-moment-title">Article about decision fatigue — saved immediately.</div>
          <div class="lf-moment-text">You paste the text and VaultBook files it under Cognitive Biases. Related Entries surfaces three notes you wrote 8 months ago on the same theme. The ideas connect without any effort.</div>
          <div class="lf-moment-chips"><span class="lf-chip ch-in">Psychology</span><span class="lf-chip ch-pu">Cognitive biases</span><span class="lf-chip ch-bl">Related entry found</span></div>
        </div>
      </div>

      <div class="lf-moment">
        <div class="lf-moment-left">
          <div class="lf-moment-hour lf-mhour-inner">6:45</div>
          <span class="lf-moment-ampm lf-mampm">PM</span>
        </div>
        <div class="lf-moment-dot md4" style="flex-shrink:0">🍛</div>
        <div class="lf-moment-body">
          <div class="lf-moment-cat">Hobby archive</div>
          <div class="lf-moment-title">You try the biryani recipe again. Third attempt.</div>
          <div class="lf-moment-text">This time you photograph Ma's handwritten card and paste it in. OCR reads the ingredients from her handwriting. The whole card is searchable now — forever.</div>
          <div class="lf-moment-chips"><span class="lf-chip ch-gr">Cooking</span><span class="lf-chip ch-pk">Family recipe</span><span class="lf-chip ch-am">OCR'd ✓</span><span class="lf-chip ch-pk">Encrypted 🔒</span></div>
        </div>
      </div>

      <div class="lf-moment">
        <div class="lf-moment-left">
          <div class="lf-moment-hour lf-mhour-inner">9:00</div>
          <span class="lf-moment-ampm lf-mampm">PM</span>
        </div>
        <div class="lf-moment-dot md5" style="flex-shrink:0">📚</div>
        <div class="lf-moment-body">
          <div class="lf-moment-cat">Reading notes</div>
          <div class="lf-moment-title">Twenty minutes with the Gita. Three lines underlined.</div>
          <div class="lf-moment-text">You write the passage, your interpretation, and a half-formed question. The attached commentary PDF is indexed. One day you'll search "equanimity" and this will surface — with everything you were thinking tonight.</div>
          <div class="lf-moment-chips"><span class="lf-chip ch-in">Philosophy</span><span class="lf-chip ch-pu">Vedanta</span><span class="lf-chip ch-bl">PDF indexed</span></div>
        </div>
      </div>

      <div class="lf-moment">
        <div class="lf-moment-left">
          <div class="lf-moment-hour lf-mhour-inner">10:30</div>
          <span class="lf-moment-ampm lf-mampm">PM</span>
        </div>
        <div class="lf-moment-dot md6" style="flex-shrink:0">🌙</div>
        <div class="lf-moment-body">
          <div class="lf-moment-cat">Evening reflection</div>
          <div class="lf-moment-title">One honest paragraph before bed.</div>
          <div class="lf-moment-text">What happened. What you felt. What you'd do differently. Mood: 7/10. Tagged "tired" and "grateful". It took four minutes. In five years, you'll be glad you wrote it.</div>
          <div class="lf-moment-chips"><span class="lf-chip ch-pk">Reflection</span><span class="lf-chip ch-pk">Mood: 7/10</span><span class="lf-chip ch-pk">Encrypted 🔒</span></div>
        </div>
      </div>

    </div>
  </div>
</section>


<!-- ═══════════════════════════════════
     LIFE CATEGORIES
     ═══════════════════════════════════ -->
<section class="section tint">
  <div class="container">
    <header class="section-head" data-reveal>
      <div class="eyebrow">Eight areas, one workspace</div>
      <h2 class="h2">Your whole life. Not just part of it.</h2>
      <p class="muted">Most apps are built for one thing and do it imperfectly. VaultBook holds everything — because real life doesn't stay inside categories.</p>
    </header>
    <div class="lf-cats" data-reveal>
      <div class="lf-cat">
        <div class="lf-cat-ic ci1">📖</div>
        <div class="lf-cat-title">Journaling &amp; Reflection</div>
        <div class="lf-cat-text">Daily entries, mood tracking, gratitude logs, and yearly reviews. Fully encrypted, searchable across years.</div>
        <div class="lf-cat-meta">Rich text · Mood labels · Encryption</div>
      </div>
      <div class="lf-cat">
        <div class="lf-cat-ic ci2">🏃</div>
        <div class="lf-cat-title">Health &amp; Habits</div>
        <div class="lf-cat-text">Track workouts, sleep, medications, symptoms, and streaks. Your medical history stays on your device.</div>
        <div class="lf-cat-meta">Habit dots · Medical PDFs · Patterns</div>
      </div>
      <div class="lf-cat">
        <div class="lf-cat-ic ci3">✈️</div>
        <div class="lf-cat-title">Travel &amp; Memories</div>
        <div class="lf-cat-text">Trip logs with OCR'd photos, itineraries, packing lists, and restaurant names. Searchable forever.</div>
        <div class="lf-cat-meta">Page per trip · OCR photos · Attachments</div>
      </div>
      <div class="lf-cat">
        <div class="lf-cat-ic ci4">💰</div>
        <div class="lf-cat-title">Personal Finance</div>
        <div class="lf-cat-text">Budget notes, investment records, net worth tracking, and financial goals — encrypted and indexed.</div>
        <div class="lf-cat-meta">XLSX indexed · Due dates · Encrypted</div>
      </div>
      <div class="lf-cat">
        <div class="lf-cat-ic ci5">🎨</div>
        <div class="lf-cat-title">Hobbies &amp; Projects</div>
        <div class="lf-cat-text">Recipes, garden logs, music practice, photography notes — with scanned cards OCR'd and manuals indexed.</div>
        <div class="lf-cat-meta">OCR cards · PDF manuals · Hierarchy</div>
      </div>
      <div class="lf-cat">
        <div class="lf-cat-ic ci6">📚</div>
        <div class="lf-cat-title">Learning &amp; Courses</div>
        <div class="lf-cat-text">Book notes, language learning, online courses, and a personal knowledge base that compounds over time.</div>
        <div class="lf-cat-meta">Related entries · Vote learning · PDF notes</div>
      </div>
      <div class="lf-cat">
        <div class="lf-cat-ic ci7">❤️</div>
        <div class="lf-cat-title">Family &amp; Relationships</div>
        <div class="lf-cat-text">Letters never sent, family history, scanned photos, anniversaries, and things meant to be passed on.</div>
        <div class="lf-cat-meta">Encrypted · OCR photos · Due dates</div>
      </div>
      <div class="lf-cat">
        <div class="lf-cat-ic ci8">💡</div>
        <div class="lf-cat-title">Ideas &amp; Inspiration</div>
        <div class="lf-cat-text">Shower thoughts, clippings, article saves, sparks of creativity. Vote-based search learns what matters most.</div>
        <div class="lf-cat-meta">Quick capture · Vote learning · Related</div>
      </div>
    </div>
  </div>
</section>


<!-- ═══════════════════════════════════
     WORKFLOW DEEP-DIVES
     ═══════════════════════════════════ -->
<section class="section">
  <div class="container">
    <header class="section-head" data-reveal>
      <div class="eyebrow">Inside each use case</div>
      <h2 class="h2">How VaultBook fits into your life</h2>
      <p class="muted">Six of the most personal ways people use VaultBook — each one deeper than any single-purpose app.</p>
    </header>

    <div class="lf-tabs" data-reveal>
      <button class="lf-tab active" onclick="lfTab(this,'lp-journal')">📖 Journal</button>
      <button class="lf-tab" onclick="lfTab(this,'lp-health')">🏃 Health</button>
      <button class="lf-tab" onclick="lfTab(this,'lp-travel')">✈️ Travel</button>
      <button class="lf-tab" onclick="lfTab(this,'lp-finance')">💰 Finance</button>
      <button class="lf-tab" onclick="lfTab(this,'lp-hobbies')">🎨 Hobbies</button>
      <button class="lf-tab" onclick="lfTab(this,'lp-learning')">📚 Learning</button>
    </div>

    <!-- JOURNAL -->
    <div class="lf-panel active" id="lp-journal">
      <div class="lf-split" data-reveal>
        <div class="lf-visual lvp">
          <div class="lf-vis-label" style="color:rgba(244,143,177,.6)">Recent entries</div>
          <div class="lf-je">
            <div class="lf-jdate">Thursday · March 5, 2026</div>
            <div class="lf-jtext">"Walked to the park at sunrise. Reminded me that the best mornings are the ones I don't plan. Grateful for the cold air and the silence and the fact that nobody needed anything from me for twenty minutes."</div>
            <div class="lf-jmood"><span class="lf-mood-dot" style="background:#80cbc4"></span><span class="lf-mlabel">Calm · 8/10</span></div>
            <div class="lf-jtags"><span class="lf-jtag jt-te">Gratitude</span><span class="lf-jtag jt-pk">Morning</span><span class="lf-jtag jt-pu">Reflection</span></div>
          </div>
          <div class="lf-je">
            <div class="lf-jdate">Wednesday · March 4, 2026</div>
            <div class="lf-jtext">"Long call with Ma. She mentioned the mango tree in the backyard is blooming early this year. I should visit before April. There's something about that tree I keep meaning to write down properly."</div>
            <div class="lf-jmood"><span class="lf-mood-dot" style="background:#f48fb1"></span><span class="lf-mlabel">Nostalgic · 7/10</span></div>
            <div class="lf-jtags"><span class="lf-jtag jt-pk">Family</span><span class="lf-jtag jt-am">Memory</span></div>
          </div>
          <div class="lf-je">
            <div class="lf-jdate">Yearly review · December 31, 2025</div>
            <div class="lf-jtext">"Three things I kept: morning walks, reading before bed, saying no to things that drain me. Three things to build this year: patience, presence, Portuguese. One thing to let go: the version of myself that needs to explain everything."</div>
            <div class="lf-jmood"><span class="lf-mood-dot" style="background:#ce93d8"></span><span class="lf-mlabel">Intentional</span></div>
            <div class="lf-jtags"><span class="lf-jtag jt-pu">Yearly review</span><span class="lf-jtag jt-in">Goals</span></div>
          </div>
          <!-- mood calendar -->
          <div class="lf-mcal">
            <div class="lf-mcal-label">Mood · February 2026</div>
            <div class="lf-mcal-days">
              <div class="lf-mday mce">M</div><div class="lf-mday mce">T</div><div class="lf-mday mce">W</div><div class="lf-mday mce">T</div><div class="lf-mday mc1">8</div><div class="lf-mday mc2">7</div><div class="lf-mday mc4">9</div>
              <div class="lf-mday mc3">6</div><div class="lf-mday mc2">8</div><div class="lf-mday mc5">7</div><div class="lf-mday mc1">6</div><div class="lf-mday mc4">8</div><div class="lf-mday mc6">7</div><div class="lf-mday mc2">9</div>
              <div class="lf-mday mc7">8</div><div class="lf-mday mc4">7</div><div class="lf-mday mc2">8</div><div class="lf-mday mc3">6</div><div class="lf-mday mc1">7</div><div class="lf-mday mc5">8</div><div class="lf-mday mc4">9</div>
              <div class="lf-mday mc2">8</div><div class="lf-mday mc6">7</div><div class="lf-mday mc1">6</div><div class="lf-mday mc3">7</div><div class="lf-mday mc2">8</div><div class="lf-mday mc4">9</div><div class="lf-mday mc7">8</div>
            </div>
          </div>
        </div>
        <div>
          <div class="lf-ct">Journaling &amp; Reflection</div>
          <h3 class="lf-ptitle">A journal that's actually private</h3>
          <p class="lf-pbody">Your most honest thoughts deserve the most private home. VaultBook's journal is encrypted, offline, and completely unseen by any company, algorithm, or advertiser. It runs from a single file on your machine — nothing ever leaves it.</p>
          <div class="lf-steps">
            <div class="lf-step"><div class="lf-sn">1</div><div><div class="lf-st">Write freely — rich text or plain prose</div><div class="lf-ss">Headings, callouts, blockquotes, bold, and checklists — or just free-flowing paragraphs. VaultBook gets out of the way.</div></div></div>
            <div class="lf-step"><div class="lf-sn">2</div><div><div class="lf-st">Tag mood, themes, and recurring feelings</div><div class="lf-ss">Labels like "Grief", "Gratitude", "Milestone" let you trace emotional patterns across months and years automatically.</div></div></div>
            <div class="lf-step"><div class="lf-sn">3</div><div><div class="lf-st">Search your past self in natural language</div><div class="lf-ss">"What was I feeling in October 2023?" returns exact entries ranked by relevance. Revisit any season of your life in seconds.</div></div></div>
            <div class="lf-step"><div class="lf-sn">4</div><div><div class="lf-st">Encrypt the entries that need it most</div><div class="lf-ss">Therapy notes, grief entries, and anything truly vulnerable get AES-256-GCM with an independent password only you know.</div></div></div>
          </div>
        </div>
      </div>
    </div>

    <!-- HEALTH -->
    <div class="lf-panel" id="lp-health">
      <div class="lf-split" data-reveal>
        <div class="lf-visual lvb">
          <div class="lf-vis-label" style="color:rgba(128,203,196,.65)">Habit tracker — week of Mar 3</div>
          <div class="lf-hrow"><div class="lf-hic">🏃</div><div style="flex:1"><div class="lf-hname">Morning run</div><div class="lf-hnote">5.2 km avg · 6:12/km pace</div></div><div><div class="lf-hdots"><span class="lf-hd hdon"></span><span class="lf-hd hdon"></span><span class="lf-hd hdof"></span><span class="lf-hd hdon"></span><span class="lf-hd hdon"></span><span class="lf-hd hdon"></span><span class="lf-hd hdon"></span></div><div class="lf-hstreak">🔥 6 streak</div></div></div>
          <div class="lf-hrow"><div class="lf-hic">💊</div><div style="flex:1"><div class="lf-hname">Vitamin D + Magnesium</div><div class="lf-hnote">3,000 IU + 300mg prescribed</div></div><div><div class="lf-hdots"><span class="lf-hd hdon"></span><span class="lf-hd hdon"></span><span class="lf-hd hdon"></span><span class="lf-hd hdon"></span><span class="lf-hd hdon"></span><span class="lf-hd hdon"></span><span class="lf-hd hdon"></span></div><div class="lf-hstreak">✓ 7/7</div></div></div>
          <div class="lf-hrow"><div class="lf-hic">😴</div><div style="flex:1"><div class="lf-hname">Sleep 7h+</div><div class="lf-hnote">Avg 7.3h this week</div></div><div><div class="lf-hdots"><span class="lf-hd hdon"></span><span class="lf-hd hdof"></span><span class="lf-hd hdon"></span><span class="lf-hd hdon"></span><span class="lf-hd hdon"></span><span class="lf-hd hdof"></span><span class="lf-hd hdon"></span></div><div class="lf-hstreak">5/7</div></div></div>
          <div class="lf-hrow"><div class="lf-hic">🧘</div><div style="flex:1"><div class="lf-hname">Meditation</div><div class="lf-hnote">10 min · Vipassana technique</div></div><div><div class="lf-hdots"><span class="lf-hd hdon"></span><span class="lf-hd hdon"></span><span class="lf-hd hdon"></span><span class="lf-hd hdof"></span><span class="lf-hd hdon"></span><span class="lf-hd hdon"></span><span class="lf-hd hdon"></span></div><div class="lf-hstreak">🔥 6 streak</div></div></div>
          <div class="lf-hrow"><div class="lf-hic">💧</div><div style="flex:1"><div class="lf-hname">2L water</div><div class="lf-hnote">Tracked with timestamps</div></div><div><div class="lf-hdots"><span class="lf-hd hdon"></span><span class="lf-hd hdon"></span><span class="lf-hd hdon"></span><span class="lf-hd hdon"></span><span class="lf-hd hdon"></span><span class="lf-hd hdon"></span><span class="lf-hd hdof"></span></div><div class="lf-hstreak">6/7</div></div></div>
          <div class="lf-hrow"><div class="lf-hic">🤕</div><div style="flex:1"><div class="lf-hname">Symptom log — left ankle</div><div class="lf-hnote">Tightness noted Mar 4, 6 — monitoring</div></div><div><div class="lf-hdots"><span class="lf-hd hdof"></span><span class="lf-hd hdof"></span><span class="lf-hd hdof"></span><span class="lf-hd hdon" style="background:#f48fb1"></span><span class="lf-hd hdof"></span><span class="lf-hd hdon" style="background:#f48fb1"></span><span class="lf-hd hdof"></span></div></div></div>
        </div>
        <div>
          <div class="lf-ct">Health &amp; Habits</div>
          <h3 class="lf-ptitle">Your health data belongs to you</h3>
          <p class="lf-pbody">Fitness apps sell your data. Health apps sync to clouds you don't control. VaultBook keeps your symptoms, medications, cycle tracking, sleep data, and mental health notes on your device only — encrypted if you want, searchable always.</p>
          <div class="lf-steps">
            <div class="lf-step"><div class="lf-sn">1</div><div><div class="lf-st">Log habits with labels and weekly views</div><div class="lf-ss">Create daily habit entries with labels like "Exercise", "Medication", "Sleep". The Timetable view shows every habit in a weekly grid automatically.</div></div></div>
            <div class="lf-step"><div class="lf-sn">2</div><div><div class="lf-st">Attach your medical documents</div><div class="lf-ss">Blood test PDFs, doctor's notes, prescription scans — deep indexed and searchable. "What was my ferritin in March 2024?" returns the result.</div></div></div>
            <div class="lf-step"><div class="lf-sn">3</div><div><div class="lf-st">Find patterns QA search reveals</div><div class="lf-ss">"When do my migraines cluster?" surfaces the symptom log entries. Spot what your memory doesn't track but your notes do.</div></div></div>
            <div class="lf-step"><div class="lf-sn">4</div><div><div class="lf-st">Encrypt everything truly sensitive</div><div class="lf-ss">Mental health notes, cycle logs, and therapy summaries each have an independent AES-256 password. No shared key, no shared risk.</div></div></div>
          </div>
        </div>
      </div>
    </div>

    <!-- TRAVEL -->
    <div class="lf-panel" id="lp-travel">
      <div class="lf-split" data-reveal>
        <div class="lf-visual lvt">
          <div class="lf-vis-label" style="color:rgba(128,203,196,.65)">Travel library</div>
          <div class="lf-tcard">
            <div class="lf-tdest">🇯🇵 Kyoto &amp; Osaka — Nov 2025</div>
            <div class="lf-tmeta"><span class="lf-tdate">12 days · 47 entries · 214 photos OCR'd</span><span class="lf-ttag ttb">Solo</span></div>
            <div class="lf-tdesc">Pages: Temples · Food log · Day-by-day · Things I'd do differently. Attached: rail pass PDF, hostel confirmations, restaurant map photo with OCR'd names.</div>
            <div class="lf-tprog"><div class="lf-tprog-fill" style="width:100%"></div></div>
          </div>
          <div class="lf-tcard">
            <div class="lf-tdest">🇮🇳 Kolkata family trip — Dec 2024</div>
            <div class="lf-tmeta"><span class="lf-tdate">10 days · 31 entries</span><span class="lf-ttag tta">Family</span><span class="lf-ttag ttt">Annual</span></div>
            <div class="lf-tdesc">Ma's recipes captured. Old photo scans OCR'd for names and dates. Childhood memories reconstructed from conversations. Encrypted entries for private moments.</div>
            <div class="lf-tprog"><div class="lf-tprog-fill" style="width:100%"></div></div>
          </div>
          <div class="lf-tcard">
            <div class="lf-tdest">🇵🇹 Lisbon — April 2026 (planning)</div>
            <div class="lf-tmeta"><span class="lf-tdate">7 days · 9 planning entries so far</span><span class="lf-ttag ttb">In progress</span></div>
            <div class="lf-tdesc">Restaurant shortlist, neighbourhood guide, Portuguese vocabulary pages, packing list. Budget tracker attached as XLSX — indexed and searchable.</div>
            <div class="lf-tprog"><div class="lf-tprog-fill" style="width:38%"></div></div>
          </div>
        </div>
        <div>
          <div class="lf-ct">Travel &amp; Memories</div>
          <h3 class="lf-ptitle">Travel logs that outlast every cloud</h3>
          <p class="lf-pbody">Cloud photo apps change their terms, raise prices, or shut down. Your travel memories deserve storage you fully control. VaultBook lets you build rich trip archives — notes, scanned documents, photo captions, and itineraries — all searchable and offline.</p>
          <div class="lf-steps">
            <div class="lf-step"><div class="lf-sn">1</div><div><div class="lf-st">One page per trip, sub-pages for each thread</div><div class="lf-ss">Day-by-day, food log, things learned, packing retrospec­tive — each as its own page nested under the trip.</div></div></div>
            <div class="lf-step"><div class="lf-sn">2</div><div><div class="lf-st">OCR every photo, menu, and sign</div><div class="lf-ss">Paste photos inline and VaultBook extracts any text — restaurant signs, handwritten notes, menu pages. All becomes searchable.</div></div></div>
            <div class="lf-step"><div class="lf-sn">3</div><div><div class="lf-st">Search across all trips instantly</div><div class="lf-ss">"Which ryokan had the outdoor bath?" — QA search finds it across every trip, regardless of how long ago you were there.</div></div></div>
            <div class="lf-step"><div class="lf-sn">4</div><div><div class="lf-st">Plan future trips in the same place</div><div class="lf-ss">Planning notes, budget spreadsheets, and vocabulary pages live alongside the archive — Related Entries connects past experiences to present plans.</div></div></div>
          </div>
        </div>
      </div>
    </div>

    <!-- FINANCE -->
    <div class="lf-panel" id="lp-finance">
      <div class="lf-split" data-reveal>
        <div class="lf-visual lva">
          <div class="lf-vis-label" style="color:rgba(255,204,128,.62)">Finance notes — Feb 2026 🔒 Encrypted</div>
          <div class="lf-frow"><div class="lf-fic">📈</div><div style="flex:1"><div class="lf-flabel">Index fund rebalance</div><div class="lf-fsub">Shifted 8% bonds → equity. Reasoning documented.</div></div><div class="lf-famt fa-pos">↑ +8%</div></div>
          <div class="lf-frow"><div class="lf-fic">🏠</div><div style="flex:1"><div class="lf-flabel">Emergency fund</div><div class="lf-fsub">6 months target · ₹4.2L / ₹4.8L</div></div><div class="lf-famt fa-neu">87%</div></div>
          <div class="lf-fbar"><div class="lf-fbar-fill" style="width:87%;background:linear-gradient(90deg,#ffcc80,#f48fb1)"></div></div>
          <div class="lf-frow" style="margin-top:8px"><div class="lf-fic">💳</div><div style="flex:1"><div class="lf-flabel">Monthly budget — March</div><div class="lf-fsub">Food ₹8k · Transport ₹3k · Subscriptions ₹1.8k</div></div><div class="lf-famt fa-neg">−₹12.8k</div></div>
          <div class="lf-frow"><div class="lf-fic">🏦</div><div style="flex:1"><div class="lf-flabel">FD maturity — HDFC</div><div class="lf-fsub">Due April 15, 2026 · ₹2L</div></div><div class="lf-famt fa-pos">⏰ 40d</div></div>
          <div class="lf-frow"><div class="lf-fic">📊</div><div style="flex:1"><div class="lf-flabel">Annual net worth snapshot</div><div class="lf-fsub">XLSX attached · 5 sheets · all cells indexed</div></div><div class="lf-famt fa-neu">Indexed</div></div>
          <div class="lf-frow"><div class="lf-fic">🔐</div><div style="flex:1"><div class="lf-flabel">Salary &amp; offer history</div><div class="lf-fsub">AES-256 · independent password</div></div><div class="lf-famt fa-neu">🔒</div></div>
        </div>
        <div>
          <div class="lf-ct">Personal Finance</div>
          <h3 class="lf-ptitle">Your finances deserve real privacy</h3>
          <p class="lf-pbody">Salary details, investment allocations, and net worth are among the most sensitive things you own. A finance tracker that syncs to any server is a liability. VaultBook keeps every number, note, and spreadsheet on your machine — encrypted, searchable, and yours.</p>
          <div class="lf-steps">
            <div class="lf-step"><div class="lf-sn">1</div><div><div class="lf-st">Encrypt every sensitive entry</div><div class="lf-ss">Salary notes, investment decisions, and net worth each get their own AES-256 password — fully independent and isolated.</div></div></div>
            <div class="lf-step"><div class="lf-sn">2</div><div><div class="lf-st">Attach and index your spreadsheets</div><div class="lf-ss">Drop in your XLSX budget models or investment trackers. Every cell is searchable — find any figure without opening the file.</div></div></div>
            <div class="lf-step"><div class="lf-sn">3</div><div><div class="lf-st">Set due dates on financial obligations</div><div class="lf-ss">FD maturities, insurance renewals, loan repayments — due dates surface them in the "Due" sidebar tab before they expire.</div></div></div>
            <div class="lf-step"><div class="lf-sn">4</div><div><div class="lf-st">Build a decision log for money choices</div><div class="lf-ss">Record why you made each major financial decision. "Why did I choose this fund?" is answerable years later with your own reasoning attached.</div></div></div>
          </div>
        </div>
      </div>
    </div>

    <!-- HOBBIES -->
    <div class="lf-panel" id="lp-hobbies">
      <div class="lf-split" data-reveal>
        <div class="lf-visual lvg">
          <div class="lf-vis-label" style="color:rgba(165,214,167,.65)">Hobby library</div>
          <div class="lf-hobcard">
            <div class="lf-hobtitle">🍛 Ma's mutton biryani — reconstructed</div>
            <div class="lf-hobmeta"><span class="lf-hobtag htg">Cooking</span><span class="lf-hobtag hta">Family recipe</span><span class="lf-hobtag htp">Encrypted 🔒</span></div>
            <div class="lf-hobtext">3 attempts documented. Notes on spice ratios, soaking times, clay pot technique. Original handwritten card photographed and OCR'd — every word searchable.</div>
          </div>
          <div class="lf-hobcard">
            <div class="lf-hobtitle">🌱 Balcony garden — spring 2026</div>
            <div class="lf-hobmeta"><span class="lf-hobtag htg">Gardening</span><span class="lf-hobtag hta">Seasonal</span></div>
            <div class="lf-hobtext">Planting log: spinach (Mar 2), mint (Mar 5), cherry tomatoes (Mar 10). Soil mix notes, watering schedule. Seed packet PDFs indexed via JSZip.</div>
          </div>
          <div class="lf-hobcard">
            <div class="lf-hobtitle">🎸 Guitar — chord progressions</div>
            <div class="lf-hobmeta"><span class="lf-hobtag htp">Music</span><span class="lf-hobtag htg">Practice log</span></div>
            <div class="lf-hobtext">Capo 3 — Am–F–C–G for most things. Bm barre chord finally clicked Feb 14. Two tab PDFs attached and indexed. Scanned practice notes OCR'd.</div>
          </div>
          <div class="lf-hobcard">
            <div class="lf-hobtitle">📸 Street photography — 2026 project</div>
            <div class="lf-hobmeta"><span class="lf-hobtag hta">Photography</span><span class="lf-hobtag htp">Ongoing</span></div>
            <div class="lf-hobtext">12 shots per month target. Notes on light, composition decisions, location details. OCR'd location signs make everything searchable by place.</div>
          </div>
        </div>
        <div>
          <div class="lf-ct">Hobbies &amp; Projects</div>
          <h3 class="lf-ptitle">Every hobby deserves a real home</h3>
          <p class="lf-pbody">The problem with hobby notes isn't writing them — it's finding them again. The recipe you perfected two years ago. The guitar tab that took weeks. The garden log from last spring. VaultBook makes every passion project searchable across years.</p>
          <div class="lf-steps">
            <div class="lf-step"><div class="lf-sn">1</div><div><div class="lf-st">Create one page per hobby with sub-pages</div><div class="lf-ss">Cooking / Regional / Bengali, Guitar / Songs learned, Garden / By season. Your hierarchy, your logic — unlimited nesting.</div></div></div>
            <div class="lf-step"><div class="lf-sn">2</div><div><div class="lf-st">OCR handwritten notes and scanned cards</div><div class="lf-ss">Old recipe cards, annotated music sheets, sketches — paste as inline images and VaultBook reads the text for search.</div></div></div>
            <div class="lf-step"><div class="lf-sn">3</div><div><div class="lf-st">Index instruction manuals and guides</div><div class="lf-ss">Attach the PDF manual for your camera, sewing machine, or fermentation kit. Deep indexing makes every step searchable.</div></div></div>
            <div class="lf-step"><div class="lf-sn">4</div><div><div class="lf-st">Encrypt the ones that matter most</div><div class="lf-ss">Family recipes, personal creative work — per-entry AES-256 keeps them off every server and every algorithm forever.</div></div></div>
          </div>
        </div>
      </div>
    </div>

    <!-- LEARNING -->
    <div class="lf-panel" id="lp-learning">
      <div class="lf-split" data-reveal>
        <div class="lf-visual lvi">
          <div class="lf-vis-label" style="color:rgba(159,168,218,.62)">Learning library</div>
          <div class="lf-litem">
            <div class="lf-lic">📘</div>
            <div style="flex:1">
              <div class="lf-ltitle">The Bhagavad Gita — reading notes</div>
              <div class="lf-lsub">Chapter-by-chapter annotations. Shankaracharya commentary attached (PDF, 312p, indexed).</div>
              <div class="lf-lprog"><div class="lf-lbar"><div class="lf-lbar-fill" style="width:72%"></div></div>72% complete</div>
            </div>
          </div>
          <div class="lf-litem">
            <div class="lf-lic">🇵🇹</div>
            <div style="flex:1">
              <div class="lf-ltitle">Portuguese — vocabulary &amp; phrases</div>
              <div class="lf-lsub">Daily vocab notes + sentence examples with Lisbon trip context for every phrase learned.</div>
              <div class="lf-lprog"><div class="lf-lbar"><div class="lf-lbar-fill" style="width:34%"></div></div>34% of A2 goals</div>
            </div>
          </div>
          <div class="lf-litem">
            <div class="lf-lic">🧠</div>
            <div style="flex:1">
              <div class="lf-ltitle">Cognitive biases — personal database</div>
              <div class="lf-lsub">84 biases with real examples from my own decisions. Attached: Thinking Fast and Slow highlights PDF.</div>
              <div class="lf-lprog"><div class="lf-lbar"><div class="lf-lbar-fill" style="width:58%"></div></div>58 / 100 entries</div>
            </div>
          </div>
          <div class="lf-litem">
            <div class="lf-lic">🎬</div>
            <div style="flex:1">
              <div class="lf-ltitle">Cinema — directors I'm studying</div>
              <div class="lf-lsub">Satyajit Ray · Bergman · Tarkovsky. Notes per film + PPTX visual language deck (indexed).</div>
              <div class="lf-lprog"><div class="lf-lbar"><div class="lf-lbar-fill" style="width:45%"></div></div>18 / 40 films</div>
            </div>
          </div>
          <div class="lf-litem">
            <div class="lf-lic">🕉️</div>
            <div style="flex:1">
              <div class="lf-ltitle">Vedanta — study notes</div>
              <div class="lf-lsub">Advaita, key texts, Vivekananda lectures. Swami Ranganathananda PDF attached (400p, indexed).</div>
              <div class="lf-lprog"><div class="lf-lbar"><div class="lf-lbar-fill" style="width:28%"></div></div>Long-term project</div>
            </div>
          </div>
        </div>
        <div>
          <div class="lf-ct">Learning &amp; Knowledge</div>
          <h3 class="lf-ptitle">A second brain that gets smarter over time</h3>
          <p class="lf-pbody">VaultBook's vote-based AI learning means your knowledge base gets smarter the more you use it. Upvote useful search results and they rise. Downvote irrelevant ones and they sink. Over time, search reflects your intellectual priorities — not a generic algorithm's.</p>
          <div class="lf-steps">
            <div class="lf-step"><div class="lf-sn">1</div><div><div class="lf-st">Capture ideas from anywhere</div><div class="lf-ss">Paste article text, attach books and course PDFs, record lecture summaries. All indexed and searchable immediately.</div></div></div>
            <div class="lf-step"><div class="lf-sn">2</div><div><div class="lf-st">Build your own knowledge hierarchy</div><div class="lf-ss">Philosophy / Vedanta / Advaita, or Languages / Portuguese / Vocabulary. Entries flow down the right path with unlimited nesting.</div></div></div>
            <div class="lf-step"><div class="lf-sn">3</div><div><div class="lf-st">Related Entries connects the dots</div><div class="lf-ss">Notes from books you read years apart surface together automatically. Serendipitous connections emerge without any tagging effort.</div></div></div>
            <div class="lf-step"><div class="lf-sn">4</div><div><div class="lf-st">Search like a scholar across all sources</div><div class="lf-ss">"What did Tagore say about solitude?" retrieves the entry even if the answer lives inside an attached PDF — deep indexing reaches every word.</div></div></div>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>


<!-- ═══════════════════════════════════
     SEARCH DEMO
     ═══════════════════════════════════ -->
<section class="section tint">
  <div class="container">
    <header class="section-head" data-reveal>
      <div class="eyebrow">AI-powered search</div>
      <h2 class="h2">Ask your life. Get answers.</h2>
      <p class="muted">VaultBook searches across 7 content layers simultaneously — titles, body, labels, sections, OCR text, attachment contents, and version history — and returns ranked answers in natural language.</p>
    </header>
    <div class="lf-sbox" data-reveal>
      <div class="lf-sbox-head">
        <div class="lf-sbar">
          <div class="lf-sbar-ic">🔎</div>
          <div class="lf-sbar-q">When did my back pain first start and what helped it?</div>
          <div class="lf-sbar-enter">↵ Enter</div>
        </div>
        <div class="lf-stabs">
          <div class="lf-stab on">All results</div>
          <div class="lf-stab">Health</div>
          <div class="lf-stab">Journal</div>
          <div class="lf-stab">Attachments</div>
        </div>
      </div>
      <div class="lf-sresults">
        <div class="lf-sr">
          <div class="lf-sr-ic sri-h">🤕</div>
          <div style="flex:1">
            <div class="lf-sr-title">Lower back — first episode log</div>
            <div class="lf-sr-src">Health · Symptoms · September 14, 2024</div>
            <div class="lf-sr-excerpt">"Started after the long drive to Pune. Sharp pain left side, L4 region. Rest and heat pack helped most by day 3."</div>
          </div>
          <div class="lf-sr-score">98%</div>
        </div>
        <div class="lf-sr">
          <div class="lf-sr-ic sri-j">📖</div>
          <div style="flex:1">
            <div class="lf-sr-title">Journal entry — Sep 20, 2024</div>
            <div class="lf-sr-src">Journaling · Health label</div>
            <div class="lf-sr-excerpt">"Back finally loosening. The physiotherapist exercises are working. Note to self: these specific stretches are the ones to remember."</div>
          </div>
          <div class="lf-sr-score">91%</div>
        </div>
        <div class="lf-sr">
          <div class="lf-sr-ic sri-h">📄</div>
          <div style="flex:1">
            <div class="lf-sr-title">Physiotherapy exercises — attached PDF</div>
            <div class="lf-sr-src">Attachment inside "Lower back — first episode" · page 2</div>
            <div class="lf-sr-excerpt">McKenzie extension protocol · 3 sets · morning and evening</div>
          </div>
          <div class="lf-sr-score">87%</div>
        </div>
        <div class="lf-sr">
          <div class="lf-sr-ic sri-f">💊</div>
          <div style="flex:1">
            <div class="lf-sr-title">Ibuprofen course — dosage notes</div>
            <div class="lf-sr-src">Health · Medications · September 2024 · Encrypted 🔒</div>
            <div class="lf-sr-excerpt">Decryption required to view full entry. Preview: "Doctor advised 3-day course of 400mg..."</div>
          </div>
          <div class="lf-sr-score">82%</div>
        </div>
        <div class="lf-sr">
          <div class="lf-sr-ic sri-l">📖</div>
          <div style="flex:1">
            <div class="lf-sr-title">October 2024 monthly review</div>
            <div class="lf-sr-src">Journaling · Monthly review</div>
            <div class="lf-sr-excerpt">"Back fully recovered by the end of the month. Lesson: don't sit 8 hours in a single stretch without breaks."</div>
          </div>
          <div class="lf-sr-score">74%</div>
        </div>
      </div>
      <div class="lf-sfooter">
        <div class="lf-sfmeta">5 results · searched 3,847 entries · 0.18s</div>
        <div class="lf-slayers">
          <div class="lf-slayer">Titles</div>
          <div class="lf-slayer">Body text</div>
          <div class="lf-slayer">Labels</div>
          <div class="lf-slayer">PDF content</div>
          <div class="lf-slayer">Sections</div>
          <div class="lf-slayer">OCR</div>
          <div class="lf-slayer">Versions</div>
        </div>
      </div>
    </div>
  </div>
</section>


<!-- ═══════════════════════════════════
     WHAT GETS INDEXED
     ═══════════════════════════════════ -->
<section class="section">
  <div class="container">
    <header class="section-head" data-reveal>
      <div class="eyebrow">Everything searchable</div>
      <h2 class="h2">Your attachments are knowledge now, not dead weight</h2>
      <p class="muted">Every file you attach becomes part of your searchable library. VaultBook reads inside eight file types and makes every word findable.</p>
    </header>
    <div class="lf-filgrid" data-reveal>
      <div class="lf-filcard">
        <div class="lf-filic">📑</div>
        <div class="lf-filtype">PDF</div>
        <div class="lf-filhow">via pdf.js + OCR</div>
        <div class="lf-filwhat">Text layer extracted. Scanned pages run through OCR. Doctor's notes, contracts, and book pages become searchable word by word.</div>
        <span class="lf-filbadge fib-plus">Plus</span>
      </div>
      <div class="lf-filcard">
        <div class="lf-filic">📊</div>
        <div class="lf-filtype">XLSX / XLSM</div>
        <div class="lf-filhow">via SheetJS</div>
        <div class="lf-filwhat">Every cell in every sheet indexed. Budget models, investment trackers, and habit spreadsheets searchable at the cell level.</div>
        <span class="lf-filbadge fib-pro">Pro</span>
      </div>
      <div class="lf-filcard">
        <div class="lf-filic">📋</div>
        <div class="lf-filtype">PPTX</div>
        <div class="lf-filhow">via JSZip</div>
        <div class="lf-filwhat">All slide text and speaker notes extracted. Travel mood boards, learning presentations, and visual plans fully searchable.</div>
        <span class="lf-filbadge fib-pro">Pro</span>
      </div>
      <div class="lf-filcard">
        <div class="lf-filic">🗜️</div>
        <div class="lf-filtype">ZIP archives</div>
        <div class="lf-filhow">via JSZip</div>
        <div class="lf-filwhat">Contents extracted and indexed. Export archives from other apps land as searchable knowledge automatically.</div>
        <span class="lf-filbadge fib-pro">Pro</span>
      </div>
      <div class="lf-filcard">
        <div class="lf-filic">📧</div>
        <div class="lf-filtype">MSG (Outlook)</div>
        <div class="lf-filhow">via MSG parser</div>
        <div class="lf-filwhat">Email subjects, body text, and nested attachments indexed. Archive important correspondence alongside your notes.</div>
        <span class="lf-filbadge fib-pro">Pro</span>
      </div>
      <div class="lf-filcard">
        <div class="lf-filic">🖼️</div>
        <div class="lf-filtype">Images (inline)</div>
        <div class="lf-filhow">via Tesseract OCR</div>
        <div class="lf-filwhat">Paste photos inline — handwritten recipe cards, whiteboard notes, scanned family photos with captions — all text extracted.</div>
        <span class="lf-filbadge fib-plus">Plus</span>
      </div>
      <div class="lf-filcard">
        <div class="lf-filic">📝</div>
        <div class="lf-filtype">Markdown / TXT</div>
        <div class="lf-filhow">plain text</div>
        <div class="lf-filwhat">Export from Obsidian, Day One, or any app that supports Markdown. Imported entries become searchable entries instantly.</div>
        <span class="lf-filbadge fib-free">Free</span>
      </div>
      <div class="lf-filcard">
        <div class="lf-filic">📂</div>
        <div class="lf-filtype">Any text file</div>
        <div class="lf-filhow">UTF-8 extraction</div>
        <div class="lf-filwhat">CSV exports, log files, course transcripts, subtitle files — if it has text, VaultBook indexes it and makes it findable.</div>
        <span class="lf-filbadge fib-free">Free</span>
      </div>
    </div>
  </div>
</section>


<!-- ═══════════════════════════════════
     PRIVACY SECTION
     ═══════════════════════════════════ -->
<section class="section tint">
  <div class="container">
    <header class="section-head" data-reveal>
      <div class="eyebrow">Privacy by architecture</div>
      <h2 class="h2">Your personal life deserves personal privacy</h2>
      <p class="muted">The most intimate things you'll ever write deserve the strictest guarantee. VaultBook provides it through architecture, not policy.</p>
    </header>
    <div class="lf-priv-grid" data-reveal>
      <div class="lf-priv-card">
        <div class="lf-priv-ic">🚫</div>
        <div class="lf-priv-title">Zero network requests. Ever.</div>
        <div class="lf-priv-text">VaultBook makes no outgoing connections — not for sync, not for analytics, not for "improving the product". Your journal entries, health logs, and financial notes are never transmitted anywhere. Disconnect from the internet and nothing changes.</div>
      </div>
      <div class="lf-priv-card">
        <div class="lf-priv-ic">🔐</div>
        <div class="lf-priv-title">Per-entry encryption, per-entry password.</div>
        <div class="lf-priv-text">Each encrypted entry uses AES-256-GCM with its own unique 16-byte salt, 12-byte IV, and key derived from 100,000 PBKDF2 SHA-256 iterations. Therapy notes, financial records, and grief entries each have an independent password. One compromised key never exposes another.</div>
      </div>
      <div class="lf-priv-card">
        <div class="lf-priv-ic">📁</div>
        <div class="lf-priv-title">Plain files. Your folder. Your rules.</div>
        <div class="lf-priv-text">VaultBook stores everything as JSON files in a folder you choose. Back it up with Time Machine, copy it to a USB drive, or keep multiple copies across machines. You don't need permission, an export button, or an internet connection to access your own life's data.</div>
      </div>
    </div>

    <div class="lf-split" style="margin-top:32px" data-reveal>
      <div>
        <div class="lf-eye" style="margin-top:8px">What this means in practice</div>
        <h3 class="lf-h2" style="font-size:clamp(22px,2.6vw,28px)">Nobody has ever seen your vault. Including us.</h3>
        <p class="lf-intro" style="text-align:left;max-width:100%">We don't have a server that stores your entries. We don't have an API that receives your searches. We don't have telemetry that logs your usage. VaultBook is a file that runs in your browser — between you and your machine, and nowhere else.</p>
        <div style="margin-top:22px;display:flex;flex-direction:column;gap:12px">
          <div style="display:flex;align-items:flex-start;gap:12px">
            <div style="width:30px;height:30px;border-radius:9px;display:grid;place-items:center;font-size:14px;flex-shrink:0;background:linear-gradient(135deg,rgba(128,203,196,.2),rgba(178,223,219,.15))">✓</div>
            <div><div style="font-weight:800;font-size:14.5px;color:#0b0b0b">If VaultBook shuts down tomorrow</div><div style="font-size:13px;color:rgba(11,11,11,.5);margin-top:2px;line-height:1.55">Your data stays in your folder, unchanged. The HTML file keeps working in any Chromium browser indefinitely.</div></div>
          </div>
          <div style="display:flex;align-items:flex-start;gap:12px">
            <div style="width:30px;height:30px;border-radius:9px;display:grid;place-items:center;font-size:14px;flex-shrink:0;background:linear-gradient(135deg,rgba(128,203,196,.2),rgba(178,223,219,.15))">✓</div>
            <div><div style="font-weight:800;font-size:14.5px;color:#0b0b0b">If there's a data breach somewhere</div><div style="font-size:13px;color:rgba(11,11,11,.5);margin-top:2px;line-height:1.55">Nothing leaks — there's nothing on any server to breach. Your data has never left your machine.</div></div>
          </div>
          <div style="display:flex;align-items:flex-start;gap:12px">
            <div style="width:30px;height:30px;border-radius:9px;display:grid;place-items:center;font-size:14px;flex-shrink:0;background:linear-gradient(135deg,rgba(128,203,196,.2),rgba(178,223,219,.15))">✓</div>
            <div><div style="font-weight:800;font-size:14.5px;color:#0b0b0b">If the app's terms of service change</div><div style="font-size:13px;color:rgba(11,11,11,.5);margin-top:2px;line-height:1.55">Irrelevant. You own the file. No terms of service can retroactively govern data that was never transmitted.</div></div>
          </div>
        </div>
      </div>
      <div class="lf-sec-dark">
        <div style="font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.12em;color:rgba(255,255,255,.3);margin-bottom:16px">Security architecture</div>
        <div class="lf-sv"><div class="lf-sv-ic">🌐</div><div><div class="lf-sv-label">Outbound network requests</div><div class="lf-sv-sub">Total connections made per session</div></div><div class="lf-sv-badge svb-y" style="width:auto;border-radius:8px;padding:0 8px;font-size:12px">0</div></div>
        <div class="lf-sv"><div class="lf-sv-ic">🔐</div><div><div class="lf-sv-label">Encryption algorithm</div><div class="lf-sv-sub">AES-256-GCM · PBKDF2 · 100k iterations</div></div><div class="lf-sv-badge svb-y">✓</div></div>
        <div class="lf-sv"><div class="lf-sv-ic">☁️</div><div><div class="lf-sv-label">Cloud sync</div><div class="lf-sv-sub">No account, no server, no sync</div></div><div class="lf-sv-badge svb-n">✗</div></div>
        <div class="lf-sv"><div class="lf-sv-ic">📊</div><div><div class="lf-sv-label">Analytics or telemetry</div><div class="lf-sv-sub">Zero data collection of any kind</div></div><div class="lf-sv-badge svb-n">✗</div></div>
        <div class="lf-sv"><div class="lf-sv-ic">🔑</div><div><div class="lf-sv-label">Decrypted data on disk</div><div class="lf-sv-sub">Plaintext exists in-memory only</div></div><div class="lf-sv-badge svb-n">✗</div></div>
        <div class="lf-sv"><div class="lf-sv-ic">📁</div><div><div class="lf-sv-label">Data portability</div><div class="lf-sv-sub">Plain JSON files · copy folder to migrate</div></div><div class="lf-sv-badge svb-y">✓</div></div>
        <div class="lf-sv"><div class="lf-sv-ic">⏳</div><div><div class="lf-sv-label">Works without internet</div><div class="lf-sv-sub">100% offline — all features available</div></div><div class="lf-sv-badge svb-y">✓</div></div>
      </div>
    </div>
  </div>
</section>


<!-- ═══════════════════════════════════
     COMPARISON TABLE
     ═══════════════════════════════════ -->
<section class="section">
  <div class="container">
    <header class="section-head" data-reveal>
      <div class="eyebrow">How it stacks up</div>
      <h2 class="h2">VaultBook vs. the alternatives for personal use</h2>
      <p class="muted">Every competitor makes the same tradeoff: convenience in exchange for your data. VaultBook refuses it.</p>
    </header>
    <div class="lf-cmp" data-reveal>
      <div class="lf-cmp-head">
        <div class="lf-cmp-hcell">Capability</div>
        <div class="lf-cmp-hcell hl">VaultBook</div>
        <div class="lf-cmp-hcell">Day One</div>
        <div class="lf-cmp-hcell">Notion</div>
        <div class="lf-cmp-hcell">Obsidian</div>
      </div>
      <div class="lf-cmp-row"><div class="lf-cmp-cell fc">Truly offline — zero network requests</div><div class="lf-cmp-cell hl"><span class="cy">✓</span></div><div class="lf-cmp-cell"><span class="cn">✗</span></div><div class="lf-cmp-cell"><span class="cn">✗</span></div><div class="lf-cmp-cell"><span class="cy">✓</span></div></div>
      <div class="lf-cmp-row"><div class="lf-cmp-cell fc">Per-entry AES-256 encryption</div><div class="lf-cmp-cell hl"><span class="cy">✓</span></div><div class="lf-cmp-cell"><span class="cp">Vault-level only</span></div><div class="lf-cmp-cell"><span class="cn">✗</span></div><div class="lf-cmp-cell"><span class="cp">Plugin</span></div></div>
      <div class="lf-cmp-row"><div class="lf-cmp-cell fc">Natural-language QA search</div><div class="lf-cmp-cell hl"><span class="cy">✓</span></div><div class="lf-cmp-cell"><span class="cn">✗</span></div><div class="lf-cmp-cell"><span class="cn">✗</span></div><div class="lf-cmp-cell"><span class="cp">Plugin</span></div></div>
      <div class="lf-cmp-row"><div class="lf-cmp-cell fc">Deep indexing of PDF, XLSX, PPTX attachments</div><div class="lf-cmp-cell hl"><span class="cy">✓</span></div><div class="lf-cmp-cell"><span class="cn">✗</span></div><div class="lf-cmp-cell"><span class="cn">✗</span></div><div class="lf-cmp-cell"><span class="cn">✗</span></div></div>
      <div class="lf-cmp-row"><div class="lf-cmp-cell fc">Inline OCR for images and handwriting</div><div class="lf-cmp-cell hl"><span class="cy">✓</span></div><div class="lf-cmp-cell"><span class="cn">✗</span></div><div class="lf-cmp-cell"><span class="cn">✗</span></div><div class="lf-cmp-cell"><span class="cn">✗</span></div></div>
      <div class="lf-cmp-row"><div class="lf-cmp-cell fc">Vote-based search personalisation</div><div class="lf-cmp-cell hl"><span class="cy">✓</span></div><div class="lf-cmp-cell"><span class="cn">✗</span></div><div class="lf-cmp-cell"><span class="cn">✗</span></div><div class="lf-cmp-cell"><span class="cn">✗</span></div></div>
      <div class="lf-cmp-row"><div class="lf-cmp-cell fc">60-day version history per entry</div><div class="lf-cmp-cell hl"><span class="cy">✓</span></div><div class="lf-cmp-cell"><span class="cp">Paid</span></div><div class="lf-cmp-cell"><span class="cp">Paid</span></div><div class="lf-cmp-cell"><span class="cp">Plugin</span></div></div>
      <div class="lf-cmp-row"><div class="lf-cmp-cell fc">Mood tracking with visual calendar</div><div class="lf-cmp-cell hl"><span class="cy">✓</span></div><div class="lf-cmp-cell"><span class="cy">✓</span></div><div class="lf-cmp-cell"><span class="cp">Manual</span></div><div class="lf-cmp-cell"><span class="cp">Plugin</span></div></div>
      <div class="lf-cmp-row"><div class="lf-cmp-cell fc">No subscription, no account required</div><div class="lf-cmp-cell hl"><span class="cy">✓</span></div><div class="lf-cmp-cell"><span class="cn">✗</span></div><div class="lf-cmp-cell"><span class="cn">✗</span></div><div class="lf-cmp-cell"><span class="cy">✓</span></div></div>
      <div class="lf-cmp-row"><div class="lf-cmp-cell fc">Data survives app shutdown</div><div class="lf-cmp-cell hl"><span class="cy">✓</span></div><div class="lf-cmp-cell"><span class="cn">✗</span></div><div class="lf-cmp-cell"><span class="cn">✗</span></div><div class="lf-cmp-cell"><span class="cy">✓</span></div></div>
    </div>
  </div>
</section>


<!-- ═══════════════════════════════════
     TIMELINE — library that grows
     ═══════════════════════════════════ -->
<section class="section tint">
  <div class="container">
    <header class="section-head" data-reveal>
      <div class="eyebrow">It compounds over time</div>
      <h2 class="h2">What a personal library looks like after five years</h2>
      <p class="muted">The value of VaultBook isn't what you capture today. It's the searchable record of everything you've ever cared about.</p>
    </header>
    <div class="lf-tl" data-reveal>
      <div class="lf-tli">
        <div class="lf-tldot tld1">📖</div>
        <div class="lf-tlbody">
          <div class="lf-tlperiod">Month 1</div>
          <div class="lf-tltitle">You start journalling. A few entries a week.</div>
          <div class="lf-tltext">Daily notes, some habit tracking, a recipe to remember. The archive is small — but the habit of capture is forming. Search already works, even on 20 entries.</div>
          <div class="lf-tlchips"><span class="lf-tlchip">~20 entries</span><span class="lf-tlchip">Labels taking shape</span><span class="lf-tlchip">First encryption</span></div>
        </div>
      </div>
      <div class="lf-tli">
        <div class="lf-tldot tld2">✈️</div>
        <div class="lf-tlbody">
          <div class="lf-tlperiod">Month 6</div>
          <div class="lf-tltitle">A trip gets captured properly for the first time.</div>
          <div class="lf-tltext">Day-by-day notes, restaurant names OCR'd from photos, a budget spreadsheet attached and indexed. You realise this beats any travel blog you'd never actually write.</div>
          <div class="lf-tlchips"><span class="lf-tlchip">~180 entries</span><span class="lf-tlchip">First deep-indexed PDFs</span><span class="lf-tlchip">Page tree forming</span></div>
        </div>
      </div>
      <div class="lf-tli">
        <div class="lf-tldot tld3">🧠</div>
        <div class="lf-tlbody">
          <div class="lf-tlperiod">Year 1</div>
          <div class="lf-tltitle">QA search starts earning its keep.</div>
          <div class="lf-tltext">"What was that café in Lisbon?" or "When did the ankle pain start?" return exact entries you'd completely forgotten writing. The library starts paying dividends.</div>
          <div class="lf-tlchips"><span class="lf-tlchip">~600 entries</span><span class="lf-tlchip">Vote learning active</span><span class="lf-tlchip">Health + finance encrypted</span></div>
        </div>
      </div>
      <div class="lf-tli">
        <div class="lf-tldot tld4">💡</div>
        <div class="lf-tlbody">
          <div class="lf-tlperiod">Year 2</div>
          <div class="lf-tltitle">Related Entries becomes a daily surprise.</div>
          <div class="lf-tltext">You open a note and VaultBook surfaces something you wrote 14 months ago on the same theme. Ideas begin connecting across time. The library thinks alongside you.</div>
          <div class="lf-tlchips"><span class="lf-tlchip">~1,400 entries</span><span class="lf-tlchip">Related Entries in daily use</span><span class="lf-tlchip">Search fully personalised</span></div>
        </div>
      </div>
      <div class="lf-tli">
        <div class="lf-tldot tld5">📚</div>
        <div class="lf-tlbody">
          <div class="lf-tlperiod">Years 3–5</div>
          <div class="lf-tltitle">It becomes a record of who you are.</div>
          <div class="lf-tltext">Yearly reviews show growth. Old journal entries feel unrecognisable and invaluable. The knowledge base holds more of your mind than memory can. No cloud company has ever seen any of it.</div>
          <div class="lf-tlchips"><span class="lf-tlchip">3,000+ entries</span><span class="lf-tlchip">Years of habit data</span><span class="lf-tlchip">Irreplaceable · entirely yours</span></div>
        </div>
      </div>
      <div class="lf-tli">
        <div class="lf-tldot tld6">❤️</div>
        <div class="lf-tlbody">
          <div class="lf-tlperiod">Anytime</div>
          <div class="lf-tltitle">You share it, or you don't. That's the point.</div>
          <div class="lf-tltext">Everything lives in a plain folder you own. Copy it to a new machine by copying a folder. Encrypt the whole thing at the OS level if you want. Nobody has a copy — not even us.</div>
          <div class="lf-tlchips"><span class="lf-tlchip">Zero cloud</span><span class="lf-tlchip">0 bytes ever transmitted</span><span class="lf-tlchip">Your call, always</span></div>
        </div>
      </div>
    </div>
  </div>
</section>


<!-- ═══════════════════════════════════
     PERSONAS
     ═══════════════════════════════════ -->
<section class="section">
  <div class="container">
    <header class="section-head" data-reveal>
      <div class="eyebrow">Who uses it</div>
      <h2 class="h2">People who take their inner life seriously</h2>
      <p class="muted">VaultBook attracts people who care about depth, privacy, and building knowledge that genuinely lasts.</p>
    </header>
    <div class="lf-personas" data-reveal>
      <div class="lf-persona">
        <div class="lf-pa pa1">🧘</div>
        <div class="lf-pname">The reflective journaller</div>
        <div class="lf-prole">Daily writing, yearly reviews, mood tracking</div>
        <div class="lf-pquote">"I've journalled for six years. VaultBook is the first tool where I've never once worried that someone might read it."</div>
        <div class="lf-puses">
          <div class="lf-puse">Daily entries with mood, theme, and gratitude labels</div>
          <div class="lf-puse">Yearly review pages with a section for each life area</div>
          <div class="lf-puse">Encrypted entries for therapy notes and vulnerability writing</div>
          <div class="lf-puse">QA search to trace how a feeling has evolved over years</div>
        </div>
      </div>
      <div class="lf-persona">
        <div class="lf-pa pa2">✈️</div>
        <div class="lf-pname">The obsessive traveller</div>
        <div class="lf-prole">Trip archives, itineraries, memory capture</div>
        <div class="lf-pquote">"Every trip since 2022 is in VaultBook. I can find the name of a restaurant from three years ago without scrolling through Instagram."</div>
        <div class="lf-puses">
          <div class="lf-puse">Hierarchical page per trip with day-by-day sub-pages</div>
          <div class="lf-puse">Photos with OCR'd text — signs, menus, handwritten notes</div>
          <div class="lf-puse">Attached boarding passes, itinerary PDFs, visa documents</div>
          <div class="lf-puse">Planning notes linked to the same trip page</div>
        </div>
      </div>
      <div class="lf-persona">
        <div class="lf-pa pa3">💰</div>
        <div class="lf-pname">The private finance tracker</div>
        <div class="lf-prole">Budgets, investments, financial decisions</div>
        <div class="lf-pquote">"I track everything from net worth to grocery budgets. The idea of that data on someone else's server never sat right with me."</div>
        <div class="lf-puses">
          <div class="lf-puse">AES-256 encrypted entries for salary, investment, and tax data</div>
          <div class="lf-puse">XLSX budget models attached and searchable at cell level</div>
          <div class="lf-puse">Due dates on FD maturities, renewals, and loan payments</div>
          <div class="lf-puse">Decision log for major financial choices with full context</div>
        </div>
      </div>
      <div class="lf-persona">
        <div class="lf-pa pa4">📚</div>
        <div class="lf-pname">The lifelong learner</div>
        <div class="lf-prole">Books, courses, philosophy, language learning</div>
        <div class="lf-pquote">"I've read hundreds of books. VaultBook is where the ideas actually land — connected to everything else I've ever read."</div>
        <div class="lf-puses">
          <div class="lf-puse">Book summaries with attached PDF highlights and annotations</div>
          <div class="lf-puse">Language learning pages with vocabulary and example sentences</div>
          <div class="lf-puse">Related Entries surfaces unexpected cross-reading connections</div>
          <div class="lf-puse">QA search finds ideas regardless of which source they came from</div>
        </div>
      </div>
      <div class="lf-persona">
        <div class="lf-pa pa5">🌱</div>
        <div class="lf-pname">The hobby archivist</div>
        <div class="lf-prole">Cooking, gardening, music, photography, crafts</div>
        <div class="lf-pquote">"My grandmother's recipes, my garden log, my guitar notes — one searchable place. OCR even read the handwriting on her old recipe cards."</div>
        <div class="lf-puses">
          <div class="lf-puse">Recipes with scanned original handwritten cards OCR'd</div>
          <div class="lf-puse">Seasonal garden planting logs with seed packet PDFs indexed</div>
          <div class="lf-puse">Music practice journal with attached tabs and chord sheets</div>
          <div class="lf-puse">Encrypted entries for personal creative work and family heirlooms</div>
        </div>
      </div>
      <div class="lf-persona">
        <div class="lf-pa pa6">❤️</div>
        <div class="lf-pname">The memory keeper</div>
        <div class="lf-prole">Family history, milestones, old photographs</div>
        <div class="lf-pquote">"I'm building a family archive for my children. Stories from my parents, letters they'll find someday. It deserves to be private and permanent."</div>
        <div class="lf-puses">
          <div class="lf-puse">Scanned family photos with OCR'd captions and dates</div>
          <div class="lf-puse">Recorded family stories transcribed and indexed</div>
          <div class="lf-puse">Birthday and anniversary notes with recurring due dates</div>
          <div class="lf-puse">Encrypted letters and entries meant for specific people</div>
        </div>
      </div>
    </div>
  </div>
</section>


<!-- ═══════════════════════════════════
     TESTIMONIALS
     ═══════════════════════════════════ -->
<section class="section tint">
  <div class="container">
    <header class="section-head" data-reveal>
      <div class="eyebrow">Real people</div>
      <h2 class="h2">What they say about VaultBook in their lives</h2>
    </header>
    <div class="lf-quotes" data-reveal>

      <div class="lf-quote span2">
        <div>
          <div class="lf-qmark">"</div>
          <div class="lf-qtext" style="font-size:16px;line-height:1.76">I've tried every journalling app. The problem was always the same — at some point you read the privacy policy and realise your most honest writing is sitting on a server being scanned for "product improvement". VaultBook fixed that. It runs from a single file, makes zero network requests, and the encrypted entries are genuinely sealed. I've written things in VaultBook that I would never write in any cloud tool. That freedom changes what journalling actually is.</div>
          <div class="lf-qauthor" style="margin-top:24px">
            <div class="lf-qavatar" style="width:50px;height:50px;font-size:22px">🧘</div>
            <div><div class="lf-qname" style="font-size:15px">Daily journaller</div><div class="lf-qrole">5-year VaultBook user · personal &amp; therapy notes</div></div>
          </div>
        </div>
        <div class="lf-qvisual">
          <div style="font-size:10.5px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:rgba(244,143,177,.6);margin-bottom:14px">Five-year archive snapshot</div>
          <div class="lf-je" style="margin-bottom:8px"><div class="lf-jdate">January 1, 2021 · Entry #1</div><div class="lf-jtext" style="font-size:12px">"Starting this as an experiment. Let's see if it sticks."</div></div>
          <div class="lf-je" style="margin-bottom:8px"><div class="lf-jdate">December 31, 2023 · Year 3 review</div><div class="lf-jtext" style="font-size:12px">"Read back three years of entries tonight. Didn't recognise the person from 2021. That's either terrifying or the whole point."</div></div>
          <div class="lf-je"><div class="lf-jdate">March 5, 2026 · Entry #2,847</div><div class="lf-jtext" style="font-size:12px">"Searched 'when did I stop being afraid of X?' — found the exact entry from Feb 2022. None of these 2,847 entries have ever left this machine."</div></div>
        </div>
      </div>

      <div class="lf-quote">
        <div class="lf-qmark">"</div>
        <div class="lf-qtext">My health journey over three years — symptoms, medications, what worked and what didn't — is all searchable. My doctor is always impressed that I can pull exact dates and dosages. The fact that none of it has ever touched a health company's server is the only reason I'm honest enough to write it all down.</div>
        <div class="lf-qauthor">
          <div class="lf-qavatar">🏃</div>
          <div><div class="lf-qname">Chronic condition manager</div><div class="lf-qrole">VaultBook for health &amp; symptom tracking</div></div>
        </div>
      </div>

      <div class="lf-quote">
        <div class="lf-qmark">"</div>
        <div class="lf-qtext">I'm building a family archive for my children. Old photos, stories from my parents, letters I want them to find someday. The encrypted entries mean I can write things that are meant to be read at a specific time — by specific people — without worrying about a data breach in the meantime.</div>
        <div class="lf-qauthor">
          <div class="lf-qavatar">❤️</div>
          <div><div class="lf-qname">Parent &amp; family historian</div><div class="lf-qrole">VaultBook as a family archive</div></div>
        </div>
      </div>

    </div>
  </div>
</section>


<!-- ═══════════════════════════════════
     FAQ
     ═══════════════════════════════════ -->
<section class="section">
  <div class="container">
    <header class="section-head" data-reveal>
      <div class="eyebrow">Questions</div>
      <h2 class="h2">FAQ for personal use</h2>
    </header>
    <div class="lf-faq" data-reveal>

      <details class="lf-fqi"><summary>Can I access VaultBook on my phone?<span class="lf-fchev">▾</span></summary><div class="lf-fbody">VaultBook runs in any Chromium-based browser. Chrome on Android is fully supported. On iOS, Chrome and Edge work best. Because it's a single HTML file, you can open it directly from your Files app on mobile. For the richest experience — especially inline OCR and attachment indexing — Chrome desktop remains the primary environment, but all reading and writing works well on mobile.</div></details>

      <details class="lf-fqi"><summary>How do I back up my journal if my laptop dies?<span class="lf-fchev">▾</span></summary><div class="lf-fbody">VaultBook stores everything in a plain folder you choose. Back it up with any tool you already use — Time Machine, iCloud Drive, Google Drive, an external SSD, or rsync. The data is plain JSON files. Encrypted entries stay encrypted in the backup and can only be decrypted with the correct password. You don't need VaultBook running to back up — just copy the folder.</div></details>

      <details class="lf-fqi"><summary>Is my encrypted data truly private — even from VaultBook?<span class="lf-fchev">▾</span></summary><div class="lf-fbody">Yes. VaultBook makes zero network requests — there is no server, no account, no way for us to receive your data. Encrypted entries use AES-256-GCM with PBKDF2 at 100,000 SHA-256 iterations, a unique 16-byte salt, and a unique 12-byte IV per entry. We don't have your password and couldn't decrypt your entries even if we wanted to. See the <a href="{{ '/security/' | relative_url }}" class="link">Security page</a> for the full technical specification.</div></details>

      <details class="lf-fqi"><summary>Can I use VaultBook as a shared family journal or couple's diary?<span class="lf-fchev">▾</span></summary><div class="lf-fbody">Yes. Point multiple devices at the same vault folder (via a shared drive, NAS, or sync folder) and anyone with the app can read and write to it. Use per-entry encryption to keep some entries private within the shared folder — each person's private entries have their own independent password that others don't know. No per-seat pricing and no accounts to manage.</div></details>

      <details class="lf-fqi"><summary>How is this different from Day One or Notion for personal use?<span class="lf-fchev">▾</span></summary><div class="lf-fbody">Day One syncs your journal to their servers and processes it on their infrastructure. Notion is similarly cloud-first. Both require accounts and ongoing subscriptions. VaultBook makes zero network requests, stores everything locally, and supports per-entry AES-256 encryption we can't break. Beyond privacy, VaultBook also indexes attached PDFs, XLSX, and images via OCR — so your recipe scans, medical documents, and travel photos all become searchable knowledge, not just stored files.</div></details>

      <details class="lf-fqi"><summary>What happens to my data if VaultBook shuts down?<span class="lf-fchev">▾</span></summary><div class="lf-fbody">Nothing changes. Your data is in a folder on your device — not on our servers. If VaultBook stopped existing tomorrow, you'd still have every entry you ever wrote, every attachment, and every version snapshot. The HTML file itself continues to work indefinitely in any Chromium browser. You don't need our servers, our permission, or an internet connection to access your own data.</div></details>

      <details class="lf-fqi"><summary>How do I import from Obsidian, Day One, or Evernote?<span class="lf-fchev">▾</span></summary><div class="lf-fbody">VaultBook includes a built-in Obsidian importer — drag your <code>.md</code> files in and they're converted to searchable VaultBook entries immediately, preserving all frontmatter as labels. For Notion exports (Markdown + CSV) and Evernote exports (.enex), the same Markdown import handles the content. Attachments can be copied directly into your attachments folder and reindexed with the ♻️ button.</div></details>

      <details class="lf-fqi"><summary>Does VaultBook work on planes and in places without internet?<span class="lf-fchev">▾</span></summary><div class="lf-fbody">Completely. VaultBook is a single HTML file — once it's open in your browser, it makes zero network requests for anything at all. AI search, OCR, encryption, Kanban, version history, and all built-in tools run entirely inside your browser's JavaScript runtime. Disconnect from the internet and nothing changes. This makes it ideal for long-haul travel, secure facilities, and anywhere you value both productivity and privacy.</div></details>

    </div>
  </div>
</section>


<!-- ═══════════════════════════════════
     CTA
     ═══════════════════════════════════ -->
<section class="section tint">
  <div class="container" data-reveal>
    <div class="cta-band">
      <div>
        <div class="cta-title">Your inner life deserves a place that's truly yours.</div>
        <p class="muted" style="margin-top:6px">Download VaultBook — open it, write something, and keep it entirely to yourself. No cloud, no account, no one watching.</p>
      </div>
      <div class="cta-actions">
        <a class="btn btn-primary" href="{{ '/get-started/' | relative_url }}">Download VaultBook</a>
        <a class="btn btn-ghost" href="{{ '/pricing/' | relative_url }}">See Plus &amp; Pro</a>
      </div>
    </div>
  </div>
</section>


<script>
function lfTab(btn, id){
  document.querySelectorAll('.lf-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.lf-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(id).classList.add('active');
}
</script>
