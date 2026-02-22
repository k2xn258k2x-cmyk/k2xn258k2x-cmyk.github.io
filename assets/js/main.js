(function(){
  function qs(sel, root){ return (root || document).querySelector(sel); }
  function qsa(sel, root){ return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  // Scroll reveal
  function initReveal(){
    var els = qsa("[data-reveal]");
    if(!("IntersectionObserver" in window)){
      els.forEach(function(el){ el.classList.add("revealed"); });
      return;
    }
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){
          e.target.classList.add("revealed");
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.06 });
    els.forEach(function(el){ io.observe(el); });
  }

  // Mega menus (desktop)
  function initMegaMenus(){
    var root = qs("[data-mega-root]");
    if(!root) return;

    var buttons = qsa("[data-mega-btn]", root);
    var panels = qsa("[data-mega-panel]", root);

    function closeAll(){
      buttons.forEach(function(b){
        b.setAttribute("aria-expanded", "false");
        if(b.parentElement) b.parentElement.classList.remove("is-open");
      });
      panels.forEach(function(p){
        p.classList.remove("open");
        p.style.removeProperty("--mega-shift");
      });
    }

    function clampPanel(panel){
      if(!panel) return;
      // Reset shift first
      panel.style.setProperty("--mega-shift", "0px");
      requestAnimationFrame(function(){
        var rect = panel.getBoundingClientRect();
        var pad = 16;
        var shift = 0;
        if(rect.left < pad) shift += (pad - rect.left);
        if(rect.right > (window.innerWidth - pad)) shift -= (rect.right - (window.innerWidth - pad));
        panel.style.setProperty("--mega-shift", shift.toFixed(0) + "px");
      });
    }

    function openFor(btn){
      var id = btn.getAttribute("aria-controls");
      var panel = id ? document.getElementById(id) : null;
      if(!panel) return;
      closeAll();
      btn.setAttribute("aria-expanded", "true");
      if(btn.parentElement) btn.parentElement.classList.add("is-open");
      panel.classList.add("open");
      clampPanel(panel);
    }

    buttons.forEach(function(btn){
      btn.addEventListener("click", function(ev){
        ev.preventDefault();
        var expanded = btn.getAttribute("aria-expanded") === "true";
        if(expanded){
          closeAll();
        } else {
          openFor(btn);
        }
      });

      btn.addEventListener("mouseenter", function(){
        if(window.matchMedia("(hover: hover)").matches){
          openFor(btn);
        }
      });
    });

    panels.forEach(function(panel){
      panel.addEventListener("mouseenter", function(){
        if(window.matchMedia("(hover: hover)").matches){
          var id = panel.id;
          buttons.forEach(function(b){
            if(b.getAttribute("aria-controls") === id){
              b.setAttribute("aria-expanded", "true");
              if(b.parentElement) b.parentElement.classList.add("is-open");
              panel.classList.add("open");
              clampPanel(panel);
            }
          });
        }
      });
      panel.addEventListener("mouseleave", function(){
        if(window.matchMedia("(hover: hover)").matches){
          closeAll();
        }
      });
    });

    document.addEventListener("click", function(e){
      var isInside = root.contains(e.target);
      if(!isInside) closeAll();
    });

    document.addEventListener("keydown", function(e){
      if(e.key === "Escape") closeAll();
    });

    window.addEventListener("resize", function(){
      var openPanel = panels.find(function(p){ return p.classList.contains("open"); });
      if(openPanel) clampPanel(openPanel);
    });
  }

  // Mobile nav
  function initMobileNav(){
    var btn = qs("[data-nav-toggle]");
    var panel = qs("[data-mobile-nav]");
    var close = qs("[data-nav-close]");
    var scrim = qs("[data-nav-scrim]");
    if(!btn || !panel || !scrim) return;

    function open(){
      panel.classList.add("open");
      panel.setAttribute("aria-hidden", "false");
      btn.setAttribute("aria-expanded", "true");
      scrim.hidden = false;
      document.body.style.overflow = "hidden";
    }
    function shut(){
      panel.classList.remove("open");
      panel.setAttribute("aria-hidden", "true");
      btn.setAttribute("aria-expanded", "false");
      scrim.hidden = true;
      document.body.style.overflow = "";
    }

    btn.addEventListener("click", function(){ open(); });
    if(close) close.addEventListener("click", function(){ shut(); });
    scrim.addEventListener("click", function(){ shut(); });
    document.addEventListener("keydown", function(e){
      if(e.key === "Escape") shut();
    });
  }

  // Reading time for posts
  function initReadingTime(){
    var el = qs("[data-reading-time]");
    if(!el) return;
    var article = qs(".post-body");
    if(!article) return;
    var text = (article.textContent || "").trim().replace(/\s+/g, " ");
    var words = text ? text.split(" ").length : 0;
    var mins = Math.max(1, Math.round(words / 220));
    el.textContent = mins + " min read";
  }

  document.addEventListener("DOMContentLoaded", function(){
    initReveal();
    initMegaMenus();
    initMobileNav();
    initReadingTime();
  });
})();
