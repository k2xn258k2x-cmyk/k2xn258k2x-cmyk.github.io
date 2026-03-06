---
layout: default
title: VaultBook for Work
description: How professionals use VaultBook to capture decisions, search project history, secure sensitive files, and build a knowledge base that actually holds up over time — entirely offline.
permalink: /use-cases/work/
---

<style>
/* ════════════════════════════════════════════════════════════════
   USE CASES / WORK — page styles
   ════════════════════════════════════════════════════════════════ */

/* ── Hero ─────────────────────────────────────────────────────── */
.wk-hero{
  padding: 96px 0 80px;
  text-align: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(160deg, #0d0b1a 0%, #1a1040 45%, #0c1a2e 100%);
  color: #fff;
}
.wk-hero::before{
  content: '';
  position: absolute;
  width: 1000px; height: 1000px;
  border-radius: 50%;
  top: -480px; left: 50%;
  transform: translateX(-50%);
  background: radial-gradient(circle, rgba(206,147,216,.13) 0%, rgba(129,212,250,.07) 40%, transparent 68%);
  pointer-events: none;
  z-index: -1;
}
.wk-hero::after{
  content: '';
  position: absolute;
  width: 500px; height: 500px;
  border-radius: 50%;
  bottom: -200px; right: -80px;
  background: radial-gradient(circle, rgba(128,203,196,.08) 0%, transparent 65%);
  pointer-events: none;
  z-index: -1;
}
.wk-particle{
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  z-index: -1;
}
.wk-p1{ width:6px;height:6px;background:rgba(206,147,216,.45);top:22%;left:9%; animation:wk-float 5s ease-in-out infinite; }
.wk-p2{ width:4px;height:4px;background:rgba(129,212,250,.45);top:38%;right:12%; animation:wk-float 6.5s ease-in-out 1s infinite; }
.wk-p3{ width:5px;height:5px;background:rgba(128,203,196,.4);top:60%;left:18%; animation:wk-float 7s ease-in-out .5s infinite; }
.wk-p4{ width:3px;height:3px;background:rgba(255,204,128,.38);top:28%;right:24%; animation:wk-float 5.5s ease-in-out 1.5s infinite; }
.wk-p5{ width:7px;height:7px;background:rgba(244,143,177,.3);bottom:24%;right:9%; animation:wk-float 6s ease-in-out .8s infinite; }
.wk-p6{ width:4px;height:4px;background:rgba(206,147,216,.3);bottom:35%;left:8%; animation:wk-float 8s ease-in-out 2s infinite; }
@keyframes wk-float{
  0%,100%{ transform:translateY(0); }
  50%{ transform:translateY(-12px); }
}
.wk-hero-badge{
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: .15em;
  padding: 6px 16px;
  border-radius: 999px;
  background: linear-gradient(135deg, rgba(206,147,216,.14), rgba(129,212,250,.1));
  border: 1px solid rgba(206,147,216,.22);
  color: rgba(206,147,216,.9);
  margin-bottom: 24px;
  position: relative; z-index: 1;
}
.wk-hero-title{
  font-size: clamp(40px, 5.8vw, 68px);
  font-weight: 900;
  letter-spacing: -0.04em;
  line-height: 1.03;
  margin: 0;
  position: relative; z-index: 1;
}
.wk-hero-title .wk-grad{
  background: linear-gradient(135deg, #ce93d8 0%, #81d4fa 50%, #80cbc4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.wk-hero-sub{
  margin: 22px auto 0;
  max-width: 56ch;
  font-size: 17.5px;
  color: rgba(255,255,255,.55);
  line-height: 1.65;
  position: relative; z-index: 1;
}
.wk-hero .hero-actions{
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 36px;
  position: relative; z-index: 1;
}
.wk-hero-stats{
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
  margin-top: 56px;
  padding-top: 40px;
  border-top: 1px solid rgba(255,255,255,.07);
  position: relative; z-index: 1;
}
.wk-hstat{ text-align: center; }
.wk-hstat-n{
  font-size: 36px;
  font-weight: 900;
  letter-spacing: -0.03em;
  background: linear-gradient(135deg, #ce93d8, #81d4fa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.wk-hstat-l{
  margin-top: 3px;
  font-size: 12px;
  font-weight: 600;
  color: rgba(255,255,255,.38);
  text-transform: uppercase;
  letter-spacing: .1em;
}

/* ── Problem strip ─────────────────────────────────────────────── */
.wk-problem{
  background: #fff;
  padding: 56px 0;
  border-bottom: 1px solid rgba(206,147,216,.08);
}
.wk-problem-grid{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.wk-prob-card{
  border: 1px solid rgba(11,11,11,.07);
  border-radius: 20px;
  padding: 28px 24px;
  background: #fafafa;
  position: relative;
  overflow: hidden;
}
.wk-prob-card::before{
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; height: 3px;
  border-radius: 20px 20px 0 0;
  background: linear-gradient(90deg, #f48fb1, #ce93d8);
  opacity: .45;
}
.wk-prob-ic{ font-size: 26px; margin-bottom: 14px; }
.wk-prob-title{ font-weight: 800; font-size: 16px; letter-spacing: -0.01em; color: #0b0b0b; }
.wk-prob-text{ margin-top: 8px; font-size: 14px; color: rgba(11,11,11,.52); line-height: 1.6; }

/* ── Workflow tabs ─────────────────────────────────────────────── */
.wk-tabs{
  display: flex;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 36px;
}
.wk-tab{
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 9px 18px;
  border-radius: 999px;
  border: 1px solid rgba(206,147,216,.14);
  background: rgba(255,255,255,.7);
  font-size: 13.5px;
  font-weight: 700;
  color: rgba(11,11,11,.55);
  cursor: pointer;
  transition: all .22s ease;
}
.wk-tab:hover, .wk-tab.active{
  background: linear-gradient(135deg, rgba(243,229,245,.5), rgba(225,245,254,.4));
  border-color: rgba(206,147,216,.3);
  color: #7b1fa2;
  -webkit-text-fill-color: #7b1fa2;
  box-shadow: 0 4px 16px rgba(206,147,216,.12);
}
.wk-tab-panel{ display: none; }
.wk-tab-panel.active{ display: block; }

.wk-panel{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  align-items: start;
}
.wk-panel-visual{
  background: linear-gradient(135deg, rgba(243,229,245,.2), rgba(225,245,254,.14));
  border: 1px solid rgba(206,147,216,.12);
  border-radius: 22px;
  padding: 32px;
  position: relative;
  overflow: hidden;
}
.wk-panel-visual::before{
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; height: 3px;
  border-radius: 22px 22px 0 0;
}
.wk-panel-visual.v-purple::before{ background: linear-gradient(90deg, #ce93d8, #81d4fa); }
.wk-panel-visual.v-blue::before{ background: linear-gradient(90deg, #81d4fa, #80cbc4); }
.wk-panel-visual.v-teal::before{ background: linear-gradient(90deg, #80cbc4, #ffcc80); }
.wk-panel-visual.v-amber::before{ background: linear-gradient(90deg, #ffcc80, #f48fb1); }
.wk-panel-visual.v-pink::before{ background: linear-gradient(90deg, #f48fb1, #ce93d8); }
.wk-panel-eyebrow{
  font-size: 10.5px; font-weight: 800; text-transform: uppercase;
  letter-spacing: .14em; color: rgba(206,147,216,.75); margin-bottom: 12px;
}
.wk-panel-title{
  font-size: clamp(24px, 3vw, 32px); font-weight: 900;
  letter-spacing: -0.025em; line-height: 1.15;
  background: linear-gradient(135deg, #1a1a2e 0%, #4a1463 50%, #1a5276 100%);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
}
.wk-panel-text{ margin-top: 14px; font-size: 15px; color: rgba(11,11,11,.55); line-height: 1.7; }
.wk-panel-steps{ margin-top: 24px; display: flex; flex-direction: column; gap: 14px; }
.wk-step{ display: flex; align-items: flex-start; gap: 14px; }
.wk-step-n{
  width: 28px; height: 28px; border-radius: 50%; flex-shrink: 0;
  display: grid; place-items: center; font-size: 12px; font-weight: 900;
  color: #fff; background: linear-gradient(135deg, #7b1fa2, #4a148c);
}
.wk-step-title{ font-weight: 800; font-size: 14px; color: #0b0b0b; }
.wk-step-text{ font-size: 13px; color: rgba(11,11,11,.5); line-height: 1.55; margin-top: 2px; }

/* mock UI */
.wk-mock-entry{
  background: rgba(255,255,255,.85); border: 1px solid rgba(206,147,216,.12);
  border-radius: 14px; padding: 14px 16px; margin-bottom: 10px; backdrop-filter: blur(6px);
}
.wk-mock-entry:last-child{ margin-bottom: 0; }
.wk-mock-title{ font-size: 13.5px; font-weight: 800; color: #0b0b0b; }
.wk-mock-meta{ margin-top: 5px; display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
.wk-mock-tag{ font-size: 10.5px; font-weight: 700; padding: 2px 9px; border-radius: 999px; }
.wk-mock-tag.purple{ background: rgba(206,147,216,.15); color: #7b1fa2; -webkit-text-fill-color: #7b1fa2; }
.wk-mock-tag.blue{ background: rgba(129,212,250,.15); color: #0277bd; -webkit-text-fill-color: #0277bd; }
.wk-mock-tag.teal{ background: rgba(128,203,196,.15); color: #00796b; -webkit-text-fill-color: #00796b; }
.wk-mock-tag.amber{ background: rgba(255,204,128,.2); color: #ef6c00; -webkit-text-fill-color: #ef6c00; }
.wk-mock-date{ font-size: 11px; color: rgba(11,11,11,.35); font-weight: 600; }
.wk-mock-excerpt{ font-size: 12px; color: rgba(11,11,11,.45); margin-top: 6px; line-height: 1.5; }
.wk-mock-search{
  background: rgba(255,255,255,.9); border: 1px solid rgba(206,147,216,.2);
  border-radius: 12px; padding: 12px 16px;
  display: flex; align-items: center; gap: 10px; margin-bottom: 16px;
}
.wk-mock-search-icon{ font-size: 14px; opacity: .4; }
.wk-mock-search-text{ font-size: 13px; color: rgba(11,11,11,.5); }
.wk-mock-result-row{
  display: flex; align-items: center; gap: 10px; padding: 8px 12px;
  border-radius: 10px; background: rgba(255,255,255,.7);
  border: 1px solid rgba(206,147,216,.08); margin-bottom: 6px;
}
.wk-mock-result-row:last-child{ margin-bottom: 0; }
.wk-mock-result-score{
  font-size: 10px; font-weight: 800; padding: 2px 6px;
  background: rgba(128,203,196,.15); color: #00796b; -webkit-text-fill-color: #00796b;
  border-radius: 6px; flex-shrink: 0;
}
.wk-mock-result-title{ font-size: 12.5px; font-weight: 700; color: #0b0b0b; }
.wk-mock-result-src{ font-size: 10.5px; color: rgba(11,11,11,.35); margin-top: 1px; }
.wk-mock-lock{
  display: flex; align-items: center; gap: 10px;
  background: rgba(255,255,255,.85); border: 1px solid rgba(128,203,196,.2);
  border-radius: 12px; padding: 12px 16px; margin-bottom: 10px;
}
.wk-mock-lock-ic{ font-size: 18px; }
.wk-mock-lock-title{ font-size: 13px; font-weight: 800; color: #0b0b0b; }
.wk-mock-lock-sub{ font-size: 11px; color: rgba(11,11,11,.4); margin-top: 1px; }
.wk-mock-lock-badge{
  margin-left: auto; font-size: 10px; font-weight: 800; text-transform: uppercase;
  padding: 3px 8px; border-radius: 6px;
  background: rgba(128,203,196,.15); color: #00796b; -webkit-text-fill-color: #00796b;
  letter-spacing: .05em; flex-shrink: 0;
}

/* ── Feature grid ──────────────────────────────────────────────── */
.wk-feat-grid{ display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
.wk-feat{
  border: 1px solid rgba(206,147,216,.09); border-radius: 20px;
  background: rgba(255,255,255,.7); padding: 28px 24px;
  position: relative; overflow: hidden;
  transition: transform .26s ease, box-shadow .26s ease, border-color .26s ease;
}
.wk-feat:hover{
  transform: translateY(-4px);
  box-shadow: 0 16px 44px rgba(206,147,216,.12), 0 2px 8px rgba(0,0,0,.04);
  border-color: rgba(206,147,216,.2);
}
.wk-feat::after{
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
  border-radius: 20px 20px 0 0; opacity: 0; transition: opacity .26s ease;
}
.wk-feat:hover::after{ opacity: 1; }
.wk-feat:nth-child(1)::after{ background: linear-gradient(90deg, #ce93d8, #81d4fa); }
.wk-feat:nth-child(2)::after{ background: linear-gradient(90deg, #81d4fa, #80cbc4); }
.wk-feat:nth-child(3)::after{ background: linear-gradient(90deg, #80cbc4, #ffcc80); }
.wk-feat:nth-child(4)::after{ background: linear-gradient(90deg, #ffcc80, #f48fb1); }
.wk-feat:nth-child(5)::after{ background: linear-gradient(90deg, #f48fb1, #ce93d8); }
.wk-feat:nth-child(6)::after{ background: linear-gradient(90deg, #ce93d8, #80cbc4); }
.wk-feat-ic{
  width: 48px; height: 48px; border-radius: 15px;
  display: grid; place-items: center; font-size: 22px; margin-bottom: 18px;
}
.wk-feat-ic.purple{ background: linear-gradient(135deg, rgba(206,147,216,.18), rgba(243,229,245,.2)); }
.wk-feat-ic.blue{ background: linear-gradient(135deg, rgba(129,212,250,.18), rgba(179,229,252,.15)); }
.wk-feat-ic.teal{ background: linear-gradient(135deg, rgba(128,203,196,.18), rgba(178,223,219,.14)); }
.wk-feat-ic.amber{ background: linear-gradient(135deg, rgba(255,204,128,.22), rgba(255,224,178,.16)); }
.wk-feat-ic.pink{ background: linear-gradient(135deg, rgba(244,143,177,.18), rgba(248,187,208,.14)); }
.wk-feat-ic.green{ background: linear-gradient(135deg, rgba(165,214,167,.2), rgba(200,230,201,.15)); }
.wk-feat-title{ font-weight: 850; font-size: 16.5px; letter-spacing: -0.01em; color: #0b0b0b; }
.wk-feat-text{ margin-top: 9px; font-size: 13.5px; color: rgba(11,11,11,.5); line-height: 1.6; }
.wk-feat-tier{
  display: inline-block; margin-top: 14px; font-size: 10.5px; font-weight: 800;
  text-transform: uppercase; letter-spacing: .07em; padding: 3px 9px; border-radius: 7px;
}
.wk-feat-tier.plus{ background: rgba(129,212,250,.15); color: #0277bd; -webkit-text-fill-color: #0277bd; }
.wk-feat-tier.pro{ background: rgba(206,147,216,.15); color: #7b1fa2; -webkit-text-fill-color: #7b1fa2; }

/* ── Role cards ────────────────────────────────────────────────── */
.wk-roles{ display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }
.wk-role{
  border: 1px solid rgba(206,147,216,.1); border-radius: 22px;
  background: rgba(255,255,255,.75); padding: 32px 28px;
  display: flex; flex-direction: column;
  transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
  position: relative; overflow: hidden;
}
.wk-role:hover{
  transform: translateY(-3px);
  box-shadow: 0 14px 40px rgba(206,147,216,.11), 0 2px 8px rgba(0,0,0,.03);
  border-color: rgba(206,147,216,.2);
}
.wk-role::before{
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
  border-radius: 22px 22px 0 0;
}
.wk-role:nth-child(1)::before{ background: linear-gradient(90deg, #ce93d8, #81d4fa); }
.wk-role:nth-child(2)::before{ background: linear-gradient(90deg, #81d4fa, #80cbc4); }
.wk-role:nth-child(3)::before{ background: linear-gradient(90deg, #80cbc4, #ffcc80); }
.wk-role:nth-child(4)::before{ background: linear-gradient(90deg, #ffcc80, #f48fb1); }
.wk-role-header{ display: flex; align-items: center; gap: 14px; margin-bottom: 18px; }
.wk-role-avatar{
  width: 52px; height: 52px; border-radius: 50%;
  display: grid; place-items: center; font-size: 22px; flex-shrink: 0;
}
.wk-role-avatar.r1{ background: linear-gradient(135deg, rgba(206,147,216,.2), rgba(243,229,245,.25)); }
.wk-role-avatar.r2{ background: linear-gradient(135deg, rgba(129,212,250,.2), rgba(179,229,252,.2)); }
.wk-role-avatar.r3{ background: linear-gradient(135deg, rgba(128,203,196,.2), rgba(178,223,219,.18)); }
.wk-role-avatar.r4{ background: linear-gradient(135deg, rgba(255,204,128,.22), rgba(255,224,178,.2)); }
.wk-role-title{ font-weight: 900; font-size: 18px; letter-spacing: -0.01em; }
.wk-role-sub{ font-size: 12.5px; color: rgba(11,11,11,.42); margin-top: 2px; font-weight: 600; }
.wk-role-quote{
  font-size: 14.5px; color: rgba(11,11,11,.62); line-height: 1.65; font-style: italic;
  padding: 14px 16px;
  background: linear-gradient(135deg, rgba(243,229,245,.15), rgba(225,245,254,.1));
  border-left: 3px solid rgba(206,147,216,.35);
  border-radius: 0 10px 10px 0; margin-bottom: 18px;
}
.wk-role-list{ display: flex; flex-direction: column; gap: 8px; flex: 1; }
.wk-role-li{
  display: flex; align-items: flex-start; gap: 10px;
  font-size: 13.5px; color: rgba(11,11,11,.65); line-height: 1.45;
}
.wk-role-li::before{
  content: '✓'; flex-shrink: 0; font-size: 12px; font-weight: 900;
  color: #00796b; margin-top: 1px;
}

/* ── Comparison table ──────────────────────────────────────────── */
.wk-compare{
  border: 1px solid rgba(206,147,216,.1); border-radius: 22px;
  overflow: hidden; background: rgba(255,255,255,.75);
}
.wk-compare-head{
  display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 0;
  background: linear-gradient(135deg, rgba(243,229,245,.25), rgba(225,245,254,.2));
  border-bottom: 1px solid rgba(206,147,216,.1);
}
.wk-compare-hcell{
  padding: 16px 20px; font-size: 12px; font-weight: 800;
  text-transform: uppercase; letter-spacing: .09em; color: rgba(11,11,11,.45);
}
.wk-compare-hcell.highlight{
  background: linear-gradient(135deg, rgba(206,147,216,.12), rgba(129,212,250,.08));
  color: #7b1fa2; -webkit-text-fill-color: #7b1fa2;
}
.wk-compare-row{
  display: grid; grid-template-columns: 2fr 1fr 1fr 1fr;
  border-bottom: 1px solid rgba(206,147,216,.07); transition: background .15s ease;
}
.wk-compare-row:last-child{ border-bottom: none; }
.wk-compare-row:hover{ background: rgba(243,229,245,.08); }
.wk-compare-cell{ padding: 15px 20px; font-size: 13.5px; color: rgba(11,11,11,.65); display: flex; align-items: center; }
.wk-compare-cell.feature-cell{ font-weight: 700; color: #0b0b0b; }
.wk-compare-cell.highlight{ background: rgba(206,147,216,.04); }
.wk-yes{ font-size: 16px; color: #00796b; font-weight: 900; }
.wk-no{ font-size: 16px; color: rgba(11,11,11,.2); }
.wk-partial{ font-size: 12px; font-weight: 700; color: #ef6c00; }

/* ── Testimonials ──────────────────────────────────────────────── */
.wk-quotes{ display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
.wk-quote{
  border: 1px solid rgba(206,147,216,.09); border-radius: 20px;
  background: rgba(255,255,255,.7); padding: 28px 24px;
  transition: transform .24s ease, box-shadow .24s ease;
}
.wk-quote:hover{ transform: translateY(-3px); box-shadow: 0 12px 32px rgba(206,147,216,.1); }
.wk-quote-mark{ font-size: 42px; line-height: 1; font-weight: 900; color: rgba(206,147,216,.25); margin-bottom: 12px; font-family: Georgia, serif; }
.wk-quote-text{ font-size: 14px; color: rgba(11,11,11,.65); line-height: 1.7; font-style: italic; }
.wk-quote-author{ margin-top: 18px; display: flex; align-items: center; gap: 10px; }
.wk-quote-avatar{
  width: 38px; height: 38px; border-radius: 50%; display: grid; place-items: center;
  font-size: 16px; flex-shrink: 0;
  background: linear-gradient(135deg, rgba(206,147,216,.2), rgba(225,245,254,.2));
}
.wk-quote-name{ font-weight: 800; font-size: 13px; color: #0b0b0b; }
.wk-quote-role{ font-size: 11.5px; color: rgba(11,11,11,.4); margin-top: 1px; }

/* ── Privacy visual ────────────────────────────────────────────── */
.wk-privacy{ display: grid; grid-template-columns: 1fr 1fr; gap: 24px; align-items: center; }
.wk-privacy-title{
  font-size: clamp(26px, 3.2vw, 36px); font-weight: 900;
  letter-spacing: -0.025em; line-height: 1.15;
  background: linear-gradient(135deg, #1a1a2e 0%, #4a1463 50%, #1a5276 100%);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
}
.wk-privacy-sub{ margin-top: 14px; font-size: 15px; color: rgba(11,11,11,.55); line-height: 1.7; }
.wk-privacy-points{ margin-top: 24px; display: flex; flex-direction: column; gap: 14px; }
.wk-privacy-point{ display: flex; align-items: flex-start; gap: 14px; }
.wk-privacy-point-ic{
  width: 36px; height: 36px; border-radius: 11px; display: grid; place-items: center;
  font-size: 16px; flex-shrink: 0;
  background: linear-gradient(135deg, rgba(128,203,196,.2), rgba(178,223,219,.15));
}
.wk-privacy-point-title{ font-weight: 800; font-size: 14.5px; color: #0b0b0b; }
.wk-privacy-point-text{ font-size: 13px; color: rgba(11,11,11,.5); margin-top: 2px; line-height: 1.55; }
.wk-privacy-visual{
  background: linear-gradient(160deg, #0d0b1a 0%, #1a1040 100%);
  border-radius: 22px; padding: 32px; color: #fff; position: relative; overflow: hidden;
}
.wk-privacy-visual::before{
  content: ''; position: absolute; width: 300px; height: 300px; border-radius: 50%;
  top: -100px; right: -60px;
  background: radial-gradient(circle, rgba(128,203,196,.12) 0%, transparent 65%);
}
.wk-pv-row{
  display: flex; align-items: center; gap: 12px; padding: 12px 16px;
  border-radius: 12px; background: rgba(255,255,255,.05);
  border: 1px solid rgba(255,255,255,.06); margin-bottom: 8px;
}
.wk-pv-row:last-child{ margin-bottom: 0; }
.wk-pv-ic{ font-size: 18px; flex-shrink: 0; }
.wk-pv-label{ font-size: 13px; font-weight: 700; color: rgba(255,255,255,.7); }
.wk-pv-val{ margin-top: 2px; font-size: 11px; color: rgba(255,255,255,.35); }
.wk-pv-check{
  margin-left: auto; width: 22px; height: 22px; border-radius: 50%;
  background: rgba(128,203,196,.18); border: 1px solid rgba(128,203,196,.3);
  display: grid; place-items: center; font-size: 11px; color: #80cbc4; flex-shrink: 0;
}

/* ── FAQ ───────────────────────────────────────────────────────── */
.wk-faq{ max-width: 760px; margin: 0 auto; }
.wk-faq-item{
  border: 1px solid rgba(206,147,216,.09); border-radius: 15px;
  background: rgba(255,255,255,.72); margin-bottom: 8px; overflow: hidden;
  transition: border-color .2s ease, box-shadow .2s ease;
}
.wk-faq-item:hover{ border-color: rgba(206,147,216,.18); box-shadow: 0 4px 16px rgba(206,147,216,.07); }
.wk-faq-item summary{
  display: flex; align-items: center; justify-content: space-between;
  padding: 18px 22px; cursor: pointer; list-style: none;
  font-weight: 750; font-size: 15px; color: #0b0b0b;
}
.wk-faq-item summary::-webkit-details-marker{ display: none; }
.wk-faq-chevron{
  width: 22px; height: 22px; border-radius: 7px;
  background: linear-gradient(135deg, rgba(206,147,216,.12), rgba(129,212,250,.08));
  display: grid; place-items: center; font-size: 11px;
  color: #7b1fa2; -webkit-text-fill-color: #7b1fa2; flex-shrink: 0;
  transition: transform .25s ease;
}
.wk-faq-item[open] .wk-faq-chevron{ transform: rotate(180deg); }
.wk-faq-body{ padding: 0 22px 18px; font-size: 14px; color: rgba(11,11,11,.58); line-height: 1.7; }

/* ── Responsive ────────────────────────────────────────────────── */
@media(max-width: 960px){
  .wk-problem-grid{ grid-template-columns: 1fr; max-width: 500px; margin: 0 auto; }
  .wk-panel{ grid-template-columns: 1fr; }
  .wk-feat-grid{ grid-template-columns: 1fr 1fr; }
  .wk-roles{ grid-template-columns: 1fr; max-width: 600px; margin: 0 auto; }
  .wk-quotes{ grid-template-columns: 1fr; max-width: 520px; margin: 0 auto; }
  .wk-privacy{ grid-template-columns: 1fr; }
  .wk-compare-head, .wk-compare-row{ grid-template-columns: 2fr 1fr 1fr; }
  .wk-compare-hcell:last-child, .wk-compare-cell:last-child{ display: none; }
  .wk-hero-stats{ gap: 28px; }
}
@media(max-width: 640px){
  .wk-feat-grid{ grid-template-columns: 1fr; }
  .wk-hero{ padding: 72px 0 56px; }
  .wk-compare-head, .wk-compare-row{ grid-template-columns: 1.5fr 1fr 1fr; }
  .wk-hero-stats{ gap: 20px; padding-top: 28px; margin-top: 36px; }
  .wk-hstat-n{ font-size: 28px; }
}
</style>


<!-- HERO -->
<section class="wk-hero">
  <div class="wk-particle wk-p1"></div><div class="wk-particle wk-p2"></div>
  <div class="wk-particle wk-p3"></div><div class="wk-particle wk-p4"></div>
  <div class="wk-particle wk-p5"></div><div class="wk-particle wk-p6"></div>
  <div class="container" data-reveal>
    <div class="wk-hero-badge">💼 VaultBook for Work</div>
    <h1 class="wk-hero-title">Your work knowledge,<br><span class="wk-grad">finally searchable.</span></h1>
    <p class="wk-hero-sub">Capture decisions, index files, protect sensitive data, and find anything you've ever written — from a single file that runs entirely on your machine. No cloud. No subscriptions eating your notes.</p>
    <div class="hero-actions">
      <a class="btn-hero-primary" href="{{ '/get-started/' | relative_url }}">Download VaultBook</a>
      <a class="btn-hero-secondary" href="{{ '/tours/' | relative_url }}">See it in action</a>
    </div>
    <div class="wk-hero-stats">
      <div class="wk-hstat"><div class="wk-hstat-n">73%</div><div class="wk-hstat-l">faster document retrieval</div></div>
      <div class="wk-hstat"><div class="wk-hstat-n">7×</div><div class="wk-hstat-l">content layers searched</div></div>
      <div class="wk-hstat"><div class="wk-hstat-n">0 B</div><div class="wk-hstat-l">data sent to any server</div></div>
      <div class="wk-hstat"><div class="wk-hstat-n">60d</div><div class="wk-hstat-l">version history per note</div></div>
    </div>
  </div>
</section>


<!-- THE PROBLEM -->
<section class="wk-problem">
  <div class="container">
    <div class="section-head" data-reveal>
      <div class="eyebrow">Sound familiar?</div>
      <h2 class="h2">Where work knowledge goes to disappear</h2>
      <p class="muted">The real cost isn't losing notes — it's rebuilding context you already paid for once.</p>
    </div>
    <div class="wk-problem-grid" data-reveal>
      <div class="wk-prob-card">
        <div class="wk-prob-ic">📂</div>
        <div class="wk-prob-title">The folder archaeology problem</div>
        <div class="wk-prob-text">That decision was in a doc, inside a folder, inside a shared drive that got reorganized. You spend 40 minutes reconstructing a 5-minute conversation from six months ago.</div>
      </div>
      <div class="wk-prob-card">
        <div class="wk-prob-ic">☁️</div>
        <div class="wk-prob-title">Your notes live in someone else's server</div>
        <div class="wk-prob-text">SaaS tools are always connected, always syncing, always one data breach or sunset away. Client names, strategy drafts, and financial models shouldn't be anyone else's business.</div>
      </div>
      <div class="wk-prob-card">
        <div class="wk-prob-ic">🔍</div>
        <div class="wk-prob-title">Search that only finds what you remember</div>
        <div class="wk-prob-text">Most tools keyword-match the title. If you don't recall the exact filename, the information is effectively gone — buried in an attachment you can't search.</div>
      </div>
    </div>
  </div>
</section>


<!-- WORKFLOW TABS -->
<section class="section tint">
  <div class="container">
    <header class="section-head" data-reveal>
      <div class="eyebrow">How it fits your work</div>
      <h2 class="h2">Every workflow, one workspace</h2>
      <p class="muted">From a quick meeting note to a 200-page research archive — VaultBook handles the whole spectrum.</p>
    </header>
    <div class="wk-tabs" data-reveal>
      <button class="wk-tab active" onclick="wkTab(this,'t-meetings')">🗣️ Meeting notes</button>
      <button class="wk-tab" onclick="wkTab(this,'t-decisions')">🧭 Decision log</button>
      <button class="wk-tab" onclick="wkTab(this,'t-research')">🔬 Research</button>
      <button class="wk-tab" onclick="wkTab(this,'t-files')">📎 File intelligence</button>
      <button class="wk-tab" onclick="wkTab(this,'t-projects')">🗂️ Projects</button>
    </div>

    <div class="wk-tab-panel active" id="t-meetings">
      <div class="wk-panel" data-reveal>
        <div class="wk-panel-visual v-purple">
          <div class="wk-mock-entry"><div class="wk-mock-title">Stakeholder review — Q2 roadmap</div><div class="wk-mock-meta"><span class="wk-mock-tag purple">Meeting</span><span class="wk-mock-tag blue">Roadmap</span><span class="wk-mock-date">Mar 4, 2026</span></div><div class="wk-mock-excerpt">Sarah confirmed budget for feature B. Tom raised concerns about timeline. Next step: revised estimate by Friday.</div></div>
          <div class="wk-mock-entry"><div class="wk-mock-title">1:1 with Priya — career check-in</div><div class="wk-mock-meta"><span class="wk-mock-tag teal">1:1</span><span class="wk-mock-tag amber">Private 🔒</span><span class="wk-mock-date">Feb 28, 2026</span></div><div class="wk-mock-excerpt">Discussed promotion timeline. Notes encrypted — AES-256. Revisit after performance review.</div></div>
          <div class="wk-mock-entry"><div class="wk-mock-title">Sprint retrospective — Sprint 41</div><div class="wk-mock-meta"><span class="wk-mock-tag purple">Sprint</span><span class="wk-mock-date">Feb 21, 2026</span></div><div class="wk-mock-excerpt">Velocity improved 14%. Blocker: staging env instability. Action: infra review assigned to Dev-Ops.</div></div>
        </div>
        <div class="wk-panel-content">
          <div class="wk-panel-eyebrow">Meeting Notes</div>
          <h3 class="wk-panel-title">Your meeting memory, searchable forever</h3>
          <p class="wk-panel-text">Stop rewriting the same context in every new meeting. Capture notes once — with labels, due dates, and attendee tags — and find any decision or action item months later with a single natural-language search.</p>
          <div class="wk-panel-steps">
            <div class="wk-step"><div class="wk-step-n">1</div><div class="wk-step-body"><div class="wk-step-title">Write in the meeting, not after it</div><div class="wk-step-text">Rich text editor with live formatting — bullet points, callouts, and tables — all inside a single HTML file you open in Chrome.</div></div></div>
            <div class="wk-step"><div class="wk-step-n">2</div><div class="wk-step-body"><div class="wk-step-title">Label, tag, and link to a project page</div><div class="wk-step-text">Assign labels like "Q2 Planning" and nest the note under the right project page. Kanban boards auto-generate from your labels.</div></div></div>
            <div class="wk-step"><div class="wk-step-n">3</div><div class="wk-step-body"><div class="wk-step-title">Ask a question later — get the answer</div><div class="wk-step-text">"When did we decide to cut the API integration?" — QA search returns the exact note, ranked by relevance, in under a second.</div></div></div>
          </div>
        </div>
      </div>
    </div>

    <div class="wk-tab-panel" id="t-decisions">
      <div class="wk-panel" data-reveal>
        <div class="wk-panel-visual v-blue">
          <div class="wk-mock-search"><div class="wk-mock-search-icon">🔎</div><div class="wk-mock-search-text">Why did we choose Postgres over MySQL in 2024?</div></div>
          <div class="wk-mock-result-row"><div><div class="wk-mock-result-title">DB architecture decision — April 2024</div><div class="wk-mock-result-src">Engineering · Decisions</div></div><div class="wk-mock-result-score">98%</div></div>
          <div class="wk-mock-result-row"><div><div class="wk-mock-result-title">Vendor evaluation: Postgres vs MySQL</div><div class="wk-mock-result-src">Attached PDF · page 3</div></div><div class="wk-mock-result-score">87%</div></div>
          <div class="wk-mock-result-row"><div><div class="wk-mock-result-title">Q2 2024 infra retrospective</div><div class="wk-mock-result-src">Meeting notes · Engineering</div></div><div class="wk-mock-result-score">74%</div></div>
        </div>
        <div class="wk-panel-content">
          <div class="wk-panel-eyebrow">Decision Log</div>
          <h3 class="wk-panel-title">No more "why did we do it this way?"</h3>
          <p class="wk-panel-text">Every architectural choice, vendor selection, and product pivot deserves a written record. VaultBook lets you build a living decision log that's searchable years later — including across attached PDFs and spreadsheets.</p>
          <div class="wk-panel-steps">
            <div class="wk-step"><div class="wk-step-n">1</div><div class="wk-step-body"><div class="wk-step-title">Document decisions with full context</div><div class="wk-step-text">Record the options considered, the stakeholders involved, and the reasoning — not just the outcome.</div></div></div>
            <div class="wk-step"><div class="wk-step-n">2</div><div class="wk-step-body"><div class="wk-step-title">Attach the evidence</div><div class="wk-step-text">Drag in the comparison spreadsheet, vendor PDF, or meeting transcript. Deep indexing makes them searchable.</div></div></div>
            <div class="wk-step"><div class="wk-step-n">3</div><div class="wk-step-body"><div class="wk-step-title">Find context, not just keywords</div><div class="wk-step-text">Ask in natural language. Get ranked results that surface the decision, the rationale, and the data — together.</div></div></div>
          </div>
        </div>
      </div>
    </div>

    <div class="wk-tab-panel" id="t-research">
      <div class="wk-panel" data-reveal>
        <div class="wk-panel-visual v-teal">
          <div class="wk-mock-entry"><div class="wk-mock-title">Competitor analysis — Notion vs. Obsidian</div><div class="wk-mock-meta"><span class="wk-mock-tag teal">Research</span><span class="wk-mock-tag blue">Competitive</span><span class="wk-mock-date">Jan 15, 2026</span></div><div class="wk-mock-excerpt">Sections: Pricing · Feature matrix · Sync model · Enterprise support. 4 attachments indexed (2 PDFs, 1 XLSX, 1 PPTX).</div></div>
          <div class="wk-mock-entry"><div class="wk-mock-title">Market sizing model — TAM/SAM/SOM</div><div class="wk-mock-meta"><span class="wk-mock-tag amber">Strategy</span><span class="wk-mock-tag amber">Private 🔒</span><span class="wk-mock-date">Dec 3, 2025</span></div><div class="wk-mock-excerpt">Encrypted. Attached: market-model-v3.xlsx, investor-brief.pdf. Click to decrypt.</div></div>
          <div class="wk-mock-entry"><div class="wk-mock-title">User interview summaries — 12 sessions</div><div class="wk-mock-meta"><span class="wk-mock-tag purple">UX Research</span><span class="wk-mock-date">Nov 28, 2025</span></div><div class="wk-mock-excerpt">Common themes: search latency, offline access, folder depth. 3 transcript PDFs indexed via OCR.</div></div>
        </div>
        <div class="wk-panel-content">
          <div class="wk-panel-eyebrow">Research Workflows</div>
          <h3 class="wk-panel-title">Research that compounds instead of disappearing</h3>
          <p class="wk-panel-text">Build a structured research library where every interview, analysis, and literature review is indexed and interconnected. Sections let you break long research notes into named chapters — each with its own attachments.</p>
          <div class="wk-panel-steps">
            <div class="wk-step"><div class="wk-step-n">1</div><div class="wk-step-body"><div class="wk-step-title">Structure with sections and labels</div><div class="wk-step-text">Break research into collapsible chapters. Label by topic, project, and status. Navigate instantly with typeahead.</div></div></div>
            <div class="wk-step"><div class="wk-step-n">2</div><div class="wk-step-body"><div class="wk-step-title">Index everything — PDFs, XLSX, PPTX, ZIP</div><div class="wk-step-text">Deep file indexing extracts text from all attached documents. A search for a term in a slide deck returns the entry it's attached to.</div></div></div>
            <div class="wk-step"><div class="wk-step-n">3</div><div class="wk-step-body"><div class="wk-step-title">Surface related work automatically</div><div class="wk-step-text">Related Entries suggests contextually similar notes as you read, so serendipitous connections replace duplicated effort.</div></div></div>
          </div>
        </div>
      </div>
    </div>

    <div class="wk-tab-panel" id="t-files">
      <div class="wk-panel" data-reveal>
        <div class="wk-panel-visual v-amber">
          <div style="font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:rgba(11,11,11,.35);margin-bottom:8px">Indexed attachments</div>
          <div class="wk-mock-lock"><div class="wk-mock-lock-ic">📊</div><div><div class="wk-mock-lock-title">Q4-forecast-final.xlsx</div><div class="wk-mock-lock-sub">SheetJS · 4 sheets · 2,847 cells indexed</div></div><div class="wk-mock-lock-badge">Indexed</div></div>
          <div class="wk-mock-lock"><div class="wk-mock-lock-ic">📑</div><div><div class="wk-mock-lock-title">vendor-agreement-2026.pdf</div><div class="wk-mock-lock-sub">pdf.js · 38 pages · text layer + OCR</div></div><div class="wk-mock-lock-badge">Indexed</div></div>
          <div class="wk-mock-lock"><div class="wk-mock-lock-ic">📋</div><div><div class="wk-mock-lock-title">product-roadmap-v2.pptx</div><div class="wk-mock-lock-sub">JSZip · 24 slides · speaker notes indexed</div></div><div class="wk-mock-lock-badge">Indexed</div></div>
          <div class="wk-mock-lock"><div class="wk-mock-lock-ic">📧</div><div><div class="wk-mock-lock-title">client-thread-export.msg</div><div class="wk-mock-lock-sub">MSG parser · subject, body + 2 attachments</div></div><div class="wk-mock-lock-badge">Indexed</div></div>
        </div>
        <div class="wk-panel-content">
          <div class="wk-panel-eyebrow">File Intelligence</div>
          <h3 class="wk-panel-title">Your files, finally part of your knowledge</h3>
          <p class="wk-panel-text">Attachments are usually dead weight — stored but not searchable. VaultBook's deep indexing pipeline reads inside XLSX, PPTX, PDF, ZIP, and MSG files, so a search for any term surfaces the entry it's attached to, not just the filename.</p>
          <div class="wk-panel-steps">
            <div class="wk-step"><div class="wk-step-n">1</div><div class="wk-step-body"><div class="wk-step-title">Drag and drop — indexing starts immediately</div><div class="wk-step-text">Attach files to any entry or section. VaultBook begins extracting text in the background the moment you drop them.</div></div></div>
            <div class="wk-step"><div class="wk-step-n">2</div><div class="wk-step-body"><div class="wk-step-title">Search inside documents, not just around them</div><div class="wk-step-text">Find "revenue projection" and it surfaces the entry with the XLSX — even if the entry title says nothing about revenue.</div></div></div>
            <div class="wk-step"><div class="wk-step-n">3</div><div class="wk-step-body"><div class="wk-step-title">OCR for scanned and image-heavy documents</div><div class="wk-step-text">Scanned contracts, whiteboard photos, and photographed receipts are all read and indexed via inline OCR.</div></div></div>
          </div>
        </div>
      </div>
    </div>

    <div class="wk-tab-panel" id="t-projects">
      <div class="wk-panel" data-reveal>
        <div class="wk-panel-visual v-pink">
          <div style="font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:rgba(11,11,11,.35);margin-bottom:10px">Project structure</div>
          <div class="wk-mock-entry"><div class="wk-mock-title">📁 Project Atlas</div><div class="wk-mock-meta"><span class="wk-mock-tag purple">Active</span><span class="wk-mock-date">14 notes · 23 files</span></div><div class="wk-mock-excerpt" style="margin-top:8px">Sub-pages: Kickoff · Research · Decisions · Retros · Client comms</div></div>
          <div style="margin-top:10px;padding-left:16px;border-left:2px solid rgba(206,147,216,.2)">
            <div class="wk-mock-entry" style="margin-bottom:8px"><div class="wk-mock-title" style="font-size:12.5px">Kickoff notes — Mar 1</div><div class="wk-mock-meta"><span class="wk-mock-tag blue">Meeting</span><span class="wk-mock-date">Due: Mar 15</span></div></div>
            <div class="wk-mock-entry" style="margin-bottom:8px"><div class="wk-mock-title" style="font-size:12.5px">Architecture decision record #1</div><div class="wk-mock-meta"><span class="wk-mock-tag purple">Decision</span><span class="wk-mock-date">⏳ v3 saved</span></div></div>
            <div class="wk-mock-entry"><div class="wk-mock-title" style="font-size:12.5px">Client brief.pdf</div><div class="wk-mock-meta"><span class="wk-mock-tag teal">Indexed</span><span class="wk-mock-tag amber">Encrypted</span></div></div>
          </div>
        </div>
        <div class="wk-panel-content">
          <div class="wk-panel-eyebrow">Project Organisation</div>
          <h3 class="wk-panel-title">One project, one place — from kickoff to close</h3>
          <p class="wk-panel-text">Build a hierarchical page tree for every project. Sub-pages for research, decisions, and retrospectives. All entries filtered to the project context, with Kanban views auto-generated from your labels.</p>
          <div class="wk-panel-steps">
            <div class="wk-step"><div class="wk-step-n">1</div><div class="wk-step-body"><div class="wk-step-title">Create a project page tree</div><div class="wk-step-text">Unlimited nesting, drag-and-drop reordering, custom icons and color dots. Your hierarchy, your structure.</div></div></div>
            <div class="wk-step"><div class="wk-step-n">2</div><div class="wk-step-body"><div class="wk-step-title">Track progress with Kanban and due dates</div><div class="wk-step-text">Labels like "In Progress" and "Blocked" create drag-and-drop Kanban columns. The Due sidebar tab shows everything approaching deadline.</div></div></div>
            <div class="wk-step"><div class="wk-step-n">3</div><div class="wk-step-body"><div class="wk-step-title">Onboard teammates to a complete record</div><div class="wk-step-text">Share the folder. Anyone with VaultBook can search the full project history — decisions, files, and all — in seconds.</div></div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<!-- FEATURE GRID -->
<section class="section">
  <div class="container">
    <header class="section-head" data-reveal>
      <div class="eyebrow">Built for professional work</div>
      <h2 class="h2">Everything you actually need</h2>
      <p class="muted">No filler features. Every capability below solves a real problem that comes up in professional work every week.</p>
    </header>
    <div class="wk-feat-grid" data-reveal>
      <div class="wk-feat"><div class="wk-feat-ic purple">🧠</div><div class="wk-feat-title">Natural-language QA search</div><div class="wk-feat-text">Ask questions like "What did we agree with the client in February?" VaultBook searches across 7 weighted content layers — titles, labels, OCR, body, sections, attachments — and returns ranked answers.</div><span class="wk-feat-tier plus">Plus</span></div>
      <div class="wk-feat"><div class="wk-feat-ic blue">📁</div><div class="wk-feat-title">Deep file indexing</div><div class="wk-feat-text">XLSX cell data, PPTX slide text and speaker notes, PDF text layers, ZIP archive contents, and MSG email bodies are all extracted and indexed. Your attachments become searchable knowledge, not dead weight.</div><span class="wk-feat-tier pro">Pro</span></div>
      <div class="wk-feat"><div class="wk-feat-ic teal">🔐</div><div class="wk-feat-title">Per-entry AES-256-GCM encryption</div><div class="wk-feat-text">Each sensitive entry is encrypted independently with a unique salt and IV. Salaries, client contracts, and strategy docs get their own password — compromising one never exposes the others.</div><span class="wk-feat-tier plus">Plus</span></div>
      <div class="wk-feat"><div class="wk-feat-ic amber">⏳</div><div class="wk-feat-title">60-day version history</div><div class="wk-feat-text">Every edit to every note creates a timestamped snapshot. Browse your history in a side panel, see exactly what changed, and restore any previous state with one click. Great for tracking how a strategy or spec evolved.</div><span class="wk-feat-tier pro">Pro</span></div>
      <div class="wk-feat"><div class="wk-feat-ic pink">🗂️</div><div class="wk-feat-title">Hierarchical pages + Kanban</div><div class="wk-feat-text">Unlimited nesting for projects, clients, and departments. Labels and inline #hashtags auto-generate Kanban columns — drag a card and the note status updates. Multi-tab views let you compare across projects simultaneously.</div><span class="wk-feat-tier pro">Pro</span></div>
      <div class="wk-feat"><div class="wk-feat-ic green">📸</div><div class="wk-feat-title">Inline OCR for images</div><div class="wk-feat-text">Paste a whiteboard photo, screenshot, or scanned business card into a note and the text is automatically extracted and indexed. Useful for capturing handwritten notes and screenshot-heavy workflows.</div><span class="wk-feat-tier plus">Plus</span></div>
    </div>
  </div>
</section>


<!-- ROLES -->
<section class="section tint">
  <div class="container">
    <header class="section-head" data-reveal>
      <div class="eyebrow">Who uses it</div>
      <h2 class="h2">Built for everyone who thinks for a living</h2>
      <p class="muted">VaultBook fits naturally into roles where knowledge work means constantly capturing, connecting, and finding information.</p>
    </header>
    <div class="wk-roles" data-reveal>
      <div class="wk-role">
        <div class="wk-role-header"><div class="wk-role-avatar r1">👩‍💻</div><div><div class="wk-role-title">Engineers &amp; Technical Leads</div><div class="wk-role-sub">Architecture, debugging, runbooks</div></div></div>
        <div class="wk-role-quote">"I stopped losing context between sprints. Every ADR, post-mortem, and debugging session is indexed and searchable six months later."</div>
        <div class="wk-role-list">
          <div class="wk-role-li">Architecture decision records with version history showing how the spec evolved</div>
          <div class="wk-role-li">Runbooks and debug logs with attached stack traces and config files</div>
          <div class="wk-role-li">Sprint retros and post-mortems linked to the relevant project page</div>
          <div class="wk-role-li">Sensitive credentials stored in AES-256 encrypted entries</div>
        </div>
      </div>
      <div class="wk-role">
        <div class="wk-role-header"><div class="wk-role-avatar r2">📊</div><div><div class="wk-role-title">Product Managers &amp; Strategists</div><div class="wk-role-sub">Roadmaps, research, stakeholder comms</div></div></div>
        <div class="wk-role-quote">"When a stakeholder asks why we deprioritised something eight months ago, I can find the reasoning and the original data in under a minute."</div>
        <div class="wk-role-list">
          <div class="wk-role-li">Decision log with attached competitive analysis PDFs and market data spreadsheets</div>
          <div class="wk-role-li">User interview summaries with OCR'd transcripts and tagged themes</div>
          <div class="wk-role-li">Roadmap drafts with 60-day version history tracking every revision</div>
          <div class="wk-role-li">Kanban board auto-generated from feature status labels</div>
        </div>
      </div>
      <div class="wk-role">
        <div class="wk-role-header"><div class="wk-role-avatar r3">⚖️</div><div><div class="wk-role-title">Legal &amp; Compliance Teams</div><div class="wk-role-sub">Contracts, obligations, audit trails</div></div></div>
        <div class="wk-role-quote">"Client contracts, regulatory documents, and case notes are indexed and searchable — but stay completely off any external server."</div>
        <div class="wk-role-list">
          <div class="wk-role-li">Contract library with deep-indexed PDFs — find any clause in any agreement</div>
          <div class="wk-role-li">Per-matter encryption so each client's files have independent passwords</div>
          <div class="wk-role-li">Deadline tracking with due dates and expiry dates on obligations</div>
          <div class="wk-role-li">MSG email exports indexed — search across archived client correspondence</div>
        </div>
      </div>
      <div class="wk-role">
        <div class="wk-role-header"><div class="wk-role-avatar r4">📈</div><div><div class="wk-role-title">Analysts &amp; Researchers</div><div class="wk-role-sub">Data, models, literature, findings</div></div></div>
        <div class="wk-role-quote">"Every analyst's nightmare is spending 45 minutes finding a model you built six months ago. VaultBook ended that. The XLSX is indexed, the note explains the assumptions."</div>
        <div class="wk-role-list">
          <div class="wk-role-li">Research notes with attached XLSX models indexed at the cell level</div>
          <div class="wk-role-li">Literature reviews with PDF papers indexed and searchable by author and term</div>
          <div class="wk-role-li">Vote-based search learning — upvote useful results to train future rankings</div>
          <div class="wk-role-li">Related Entries surfaces connections between research threads automatically</div>
        </div>
      </div>
    </div>
  </div>
</section>


<!-- SECURITY -->
<section class="section">
  <div class="container">
    <div class="wk-privacy" data-reveal>
      <div class="wk-privacy-text">
        <div class="eyebrow">Zero-trust architecture</div>
        <h2 class="wk-privacy-title">Your work is nobody else's business</h2>
        <p class="wk-privacy-sub">Work notes contain things that should never leave the building: client strategy, salary discussions, product roadmaps, and legal obligations. VaultBook is the only workspace that makes that guarantee by design.</p>
        <div class="wk-privacy-points">
          <div class="wk-privacy-point"><div class="wk-privacy-point-ic">🔐</div><div><div class="wk-privacy-point-title">Per-entry AES-256-GCM encryption</div><div class="wk-privacy-point-text">Every sensitive entry uses an independent key derived from PBKDF2 with 100,000 SHA-256 iterations. Unique 16-byte salt and 12-byte IV per encryption.</div></div></div>
          <div class="wk-privacy-point"><div class="wk-privacy-point-ic">🌐</div><div><div class="wk-privacy-point-title">Absolute zero network requests</div><div class="wk-privacy-point-text">No backend, no API calls, no telemetry, no analytics pings. VaultBook makes no outgoing connections whatsoever. Your data never travels anywhere.</div></div></div>
          <div class="wk-privacy-point"><div class="wk-privacy-point-ic">📂</div><div><div class="wk-privacy-point-title">Your files, your folder, your machine</div><div class="wk-privacy-point-text">Everything is stored as plain files in a folder you choose. Backup with any tool you trust, move to a new machine by copying a folder.</div></div></div>
        </div>
      </div>
      <div class="wk-privacy-visual">
        <div style="font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.12em;color:rgba(255,255,255,.3);margin-bottom:16px">Security architecture</div>
        <div class="wk-pv-row"><div class="wk-pv-ic">🌐</div><div><div class="wk-pv-label">Network requests</div><div class="wk-pv-val">Outbound connections made</div></div><div class="wk-pv-check">0</div></div>
        <div class="wk-pv-row"><div class="wk-pv-ic">🔐</div><div><div class="wk-pv-label">Encryption standard</div><div class="wk-pv-val">AES-256-GCM · PBKDF2 · 100k iterations</div></div><div class="wk-pv-check">✓</div></div>
        <div class="wk-pv-row"><div class="wk-pv-ic">☁️</div><div><div class="wk-pv-label">Cloud sync</div><div class="wk-pv-val">No account, no server, no sync</div></div><div class="wk-pv-check">✗</div></div>
        <div class="wk-pv-row"><div class="wk-pv-ic">📊</div><div><div class="wk-pv-label">Analytics / telemetry</div><div class="wk-pv-val">Zero data collection of any kind</div></div><div class="wk-pv-check">✗</div></div>
        <div class="wk-pv-row"><div class="wk-pv-ic">🔑</div><div><div class="wk-pv-label">Decrypted data on disk</div><div class="wk-pv-val">Plaintext is in-memory only</div></div><div class="wk-pv-check">✗</div></div>
        <div class="wk-pv-row"><div class="wk-pv-ic">📁</div><div><div class="wk-pv-label">Data portability</div><div class="wk-pv-val">Plain files · copy folder to migrate</div></div><div class="wk-pv-check">✓</div></div>
      </div>
    </div>
  </div>
</section>


<!-- COMPARISON -->
<section class="section tint">
  <div class="container">
    <header class="section-head" data-reveal>
      <div class="eyebrow">How it stacks up</div>
      <h2 class="h2">VaultBook vs. the alternatives</h2>
      <p class="muted">Other tools make a tradeoff between search power and data privacy. VaultBook doesn't.</p>
    </header>
    <div class="wk-compare" data-reveal>
      <div class="wk-compare-head">
        <div class="wk-compare-hcell">Capability</div>
        <div class="wk-compare-hcell highlight">VaultBook</div>
        <div class="wk-compare-hcell">Notion / Confluence</div>
        <div class="wk-compare-hcell">Obsidian</div>
      </div>
      <div class="wk-compare-row"><div class="wk-compare-cell feature-cell">Natural-language QA search</div><div class="wk-compare-cell highlight"><span class="wk-yes">✓</span></div><div class="wk-compare-cell"><span class="wk-no">✗</span></div><div class="wk-compare-cell"><span class="wk-partial">Plugin</span></div></div>
      <div class="wk-compare-row"><div class="wk-compare-cell feature-cell">Deep indexing of attachments (PDF, XLSX, PPTX)</div><div class="wk-compare-cell highlight"><span class="wk-yes">✓</span></div><div class="wk-compare-cell"><span class="wk-no">✗</span></div><div class="wk-compare-cell"><span class="wk-no">✗</span></div></div>
      <div class="wk-compare-row"><div class="wk-compare-cell feature-cell">Per-entry AES-256 encryption</div><div class="wk-compare-cell highlight"><span class="wk-yes">✓</span></div><div class="wk-compare-cell"><span class="wk-no">✗</span></div><div class="wk-compare-cell"><span class="wk-partial">Vault plugin</span></div></div>
      <div class="wk-compare-row"><div class="wk-compare-cell feature-cell">Truly offline — zero network requests</div><div class="wk-compare-cell highlight"><span class="wk-yes">✓</span></div><div class="wk-compare-cell"><span class="wk-no">✗</span></div><div class="wk-compare-cell"><span class="wk-yes">✓</span></div></div>
      <div class="wk-compare-row"><div class="wk-compare-cell feature-cell">Version history per note</div><div class="wk-compare-cell highlight"><span class="wk-yes">✓ 60 days</span></div><div class="wk-compare-cell"><span class="wk-partial">Paid plan</span></div><div class="wk-compare-cell"><span class="wk-partial">Plugin</span></div></div>
      <div class="wk-compare-row"><div class="wk-compare-cell feature-cell">Inline OCR for images</div><div class="wk-compare-cell highlight"><span class="wk-yes">✓</span></div><div class="wk-compare-cell"><span class="wk-no">✗</span></div><div class="wk-compare-cell"><span class="wk-no">✗</span></div></div>
      <div class="wk-compare-row"><div class="wk-compare-cell feature-cell">Vote-based search personalisation</div><div class="wk-compare-cell highlight"><span class="wk-yes">✓</span></div><div class="wk-compare-cell"><span class="wk-no">✗</span></div><div class="wk-compare-cell"><span class="wk-no">✗</span></div></div>
      <div class="wk-compare-row"><div class="wk-compare-cell feature-cell">No subscription, no account required</div><div class="wk-compare-cell highlight"><span class="wk-yes">✓</span></div><div class="wk-compare-cell"><span class="wk-no">✗</span></div><div class="wk-compare-cell"><span class="wk-yes">✓</span></div></div>
    </div>
  </div>
</section>


<!-- TESTIMONIALS -->
<section class="section">
  <div class="container">
    <header class="section-head" data-reveal>
      <div class="eyebrow">From the field</div>
      <h2 class="h2">What professionals say</h2>
    </header>
    <div class="wk-quotes" data-reveal>
      <div class="wk-quote"><div class="wk-quote-mark">"</div><div class="wk-quote-text">I've been using VaultBook for eight months for all my client work. The ability to search inside attached PDFs and spreadsheets changed how I handle due diligence. Nothing like it exists in the SaaS space.</div><div class="wk-quote-author"><div class="wk-quote-avatar">🧑‍💼</div><div><div class="wk-quote-name">Independent consultant</div><div class="wk-quote-role">Strategy &amp; M&amp;A advisory</div></div></div></div>
      <div class="wk-quote"><div class="wk-quote-mark">"</div><div class="wk-quote-text">Our engineering team keeps all post-mortems, ADRs, and runbooks in VaultBook. The search is genuinely intelligent — I ask questions and get answers, not just filename matches. Onboarding new engineers is so much faster.</div><div class="wk-quote-author"><div class="wk-quote-avatar">👩‍💻</div><div><div class="wk-quote-name">Engineering manager</div><div class="wk-quote-role">Series B SaaS startup</div></div></div></div>
      <div class="wk-quote"><div class="wk-quote-mark">"</div><div class="wk-quote-text">As a paralegal handling sensitive client matters, the offline-first architecture is non-negotiable. Per-entry encryption means each client's notes are completely isolated. I've recommended it to every attorney I know.</div><div class="wk-quote-author"><div class="wk-quote-avatar">⚖️</div><div><div class="wk-quote-name">Senior paralegal</div><div class="wk-quote-role">Litigation &amp; corporate law</div></div></div></div>
    </div>
  </div>
</section>


<!-- FAQ -->
<section class="section tint">
  <div class="container">
    <header class="section-head" data-reveal>
      <div class="eyebrow">Common questions</div>
      <h2 class="h2">FAQ for work use cases</h2>
    </header>
    <div class="wk-faq" data-reveal>
      <details class="wk-faq-item"><summary>Can I use VaultBook with my team?<span class="wk-faq-chevron">▾</span></summary><div class="wk-faq-body">Yes. VaultBook stores everything in a plain folder — just point multiple people at the same shared folder (via a network drive, Dropbox, or any sync tool you already trust) and everyone gets the same searchable library. Because there's no server, there's no central point of failure and no per-seat pricing.</div></details>
      <details class="wk-faq-item"><summary>Is it IT-approved for sensitive data?<span class="wk-faq-chevron">▾</span></summary><div class="wk-faq-body">VaultBook makes zero network requests and stores all data locally in your folder. There's no server to audit, no API to credential, and no cloud storage to evaluate. Most security teams clear it faster than any SaaS tool precisely because there's nothing external to assess. See our <a href="/security/" class="link">Security page</a> for the full architecture documentation.</div></details>
      <details class="wk-faq-item"><summary>What file types does the deep indexing support?<span class="wk-faq-chevron">▾</span></summary><div class="wk-faq-body">Pro tier indexes: <strong>XLSX / XLSM</strong> (via SheetJS — every cell in every sheet), <strong>PPTX</strong> (via JSZip — all slide text and speaker notes), <strong>PDF</strong> (via pdf.js — text layer plus OCR for scanned pages), <strong>ZIP archives</strong> (contents extracted and indexed), and <strong>MSG files</strong> (Outlook emails — subject, body, plus nested attachments). All processing happens locally in your browser.</div></details>
      <details class="wk-faq-item"><summary>How does the version history work?<span class="wk-faq-chevron">▾</span></summary><div class="wk-faq-body">Every edit creates a snapshot in the <code>/versions</code> directory inside your vault folder, retained for 60 days. Access them from the ⏳ icon on any entry card — you'll see a timeline sorted newest to oldest. Restoring any version is one click. Versions are stored as plain JSON files so you can also inspect or back them up directly.</div></details>
      <details class="wk-faq-item"><summary>Can I migrate from Notion, Obsidian, or Evernote?<span class="wk-faq-chevron">▾</span></summary><div class="wk-faq-body">Yes. VaultBook includes a built-in Obsidian importer — drag your <code>.md</code> files in and they're converted to searchable VaultBook entries immediately. For Notion exports (Markdown + CSV) or Evernote exports (ENEX), the same Markdown import handles the content.</div></details>
      <details class="wk-faq-item"><summary>Does it work offline on planes and in secure facilities?<span class="wk-faq-chevron">▾</span></summary><div class="wk-faq-body">Completely. VaultBook is a single HTML file — once it's open in your browser, it makes zero network requests for anything. AI search, OCR, encryption, Kanban, and all built-in tools run entirely inside your browser's JavaScript runtime. Disconnect from the internet and nothing changes.</div></details>
    </div>
  </div>
</section>


<!-- CTA -->
<section class="section">
  <div class="container" data-reveal>
    <div class="cta-band">
      <div>
        <div class="cta-title">Your work knowledge deserves better than a folder you can't search.</div>
        <p class="muted" style="margin-top:6px">Download VaultBook, open it in Chrome, and start building a work library that holds up over time.</p>
      </div>
      <div class="cta-actions">
        <a class="btn btn-primary" href="{{ '/get-started/' | relative_url }}">Download VaultBook</a>
        <a class="btn btn-ghost" href="{{ '/pricing/' | relative_url }}">See pricing</a>
      </div>
    </div>
  </div>
</section>


<script>
function wkTab(btn, panelId){
  document.querySelectorAll('.wk-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.wk-tab-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(panelId).classList.add('active');
}
</script>

