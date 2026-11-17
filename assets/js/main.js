/* Apergis Knitwear · progressive enhancements (no modules: works from file://) */
(function () {
  'use strict';
  var d = document, root = d.documentElement;
  root.classList.add('js');
  /* Motion runs regardless of prefers-reduced-motion (client decision): no motion checks here. */

  /* ---------- Mobile navigation: focus moves in, Tab stays inside, Esc closes ---------- */
  var burger = d.querySelector('.burger'), nav = d.getElementById('nav');
  if (burger && nav) {
    var focusables = function () {
      return [burger].concat(Array.prototype.slice.call(nav.querySelectorAll('a')));
    };
    var isOpen = function () { return d.body.classList.contains('nav-open'); };
    var setOpen = function (open) {
      d.body.classList.toggle('nav-open', open);
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', open ? burger.dataset.close : burger.dataset.open);
      if (open) {
        var first = nav.querySelector('a');
        if (first) setTimeout(function () { first.focus(); }, 60);
      }
    };
    burger.addEventListener('click', function () { setOpen(!isOpen()); });
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) setOpen(false); });
    d.addEventListener('keydown', function (e) {
      if (!isOpen()) return;
      if (e.key === 'Escape') { setOpen(false); burger.focus(); return; }
      if (e.key !== 'Tab') return;
      /* burger + menu links form one loop; the page behind the overlay is unreachable */
      var f = focusables(), i = f.indexOf(d.activeElement), n = f.length;
      e.preventDefault();
      f[i === -1 ? 0 : (i + (e.shiftKey ? -1 : 1) + n) % n].focus();
    });
    /* close the overlay if the viewport grows to desktop while it is open */
    window.addEventListener('resize', function () { if (isOpen() && window.innerWidth > 1180) setOpen(false); });
  }

  /* ---------- Header condenses after scrolling ---------- */
  var onScroll = function () { d.body.classList.toggle('is-scrolled', window.scrollY > 12); };
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  /* ---------- Sliding nav indicator (desktop, hover devices) ---------- */
  var ind = d.querySelector('.nav__ind');
  if (ind && nav && window.matchMedia('(min-width:1181px) and (hover:hover)').matches) {
    var links = nav.querySelectorAll('a:not(.btn)'), cur = nav.querySelector('a[aria-current=page]');
    var moveTo = function (a, instant) {
      if (!a) { ind.style.opacity = '0'; return; }
      if (instant) ind.style.transition = 'none';
      ind.style.opacity = '1'; ind.style.width = a.offsetWidth + 'px';
      ind.style.transform = 'translateX(' + a.offsetLeft + 'px)';
      if (instant) { void ind.offsetWidth; ind.style.transition = ''; }
    };
    root.classList.add('has-ind');
    Array.prototype.forEach.call(links, function (a) {
      a.addEventListener('mouseenter', function () { moveTo(a); });
      a.addEventListener('focus', function () { moveTo(a); });
    });
    nav.addEventListener('mouseleave', function () { moveTo(cur); });
    var place = function () { moveTo(cur, true); };
    if (d.fonts && d.fonts.ready) d.fonts.ready.then(place);
    window.addEventListener('resize', place); place();
  }

  /* ---------- Years since founding + footer year: always current ---------- */
  var year = new Date().getFullYear();
  Array.prototype.forEach.call(d.querySelectorAll('[data-since]'), function (el) {
    var n = year - (+el.dataset.since);
    el.dataset.count = n; el.textContent = n;
  });
  Array.prototype.forEach.call(d.querySelectorAll('[data-year]'), function (el) { el.textContent = year; });

  /* ---------- Count-up for proof figures (final value is already in the HTML) ---------- */
  var counters = d.querySelectorAll('[data-count]');
  if (counters.length && 'IntersectionObserver' in window) {
    var co = new IntersectionObserver(function (es) {
      es.forEach(function (en) {
        if (!en.isIntersecting) return; co.unobserve(en.target);
        var el = en.target, to = +el.dataset.count, suf = el.dataset.suffix || '', t0 = null;
        var step = function (t) {
          if (!t0) t0 = t; var p = Math.min(1, (t - t0) / 1400), e = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(to * e) + (p === 1 ? suf : '');
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      });
    }, { threshold: 0.6 });
    Array.prototype.forEach.call(counters, function (c) { co.observe(c); });
  }

  /* ---------- Thread: measure the path, draw it when it enters ---------- */
  Array.prototype.forEach.call(d.querySelectorAll('.thread__line path'), function (p) {
    try { p.closest('.thread').style.setProperty('--len', Math.ceil(p.getTotalLength())); } catch (e) {}
  });
  var threads = d.querySelectorAll('.thread');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } });
    }, { threshold: 0.18, rootMargin: '0px 0px -40px 0px' });
    Array.prototype.forEach.call(threads, function (t) { io.observe(t); });
  } else {
    Array.prototype.forEach.call(threads, function (t) { t.classList.add('is-in'); });
  }

  /* ---------- Scroll reveals: fallback where animation-timeline: view() is missing ----------
     Native support → CSS does everything and this block does nothing (no double run).
     Otherwise only elements still below the fold are held (.sr-wait) and released (.sr-go)
     once they enter; anything already on screen is left untouched, so nothing flashes or stays hidden. */
  var cssOk = window.CSS && CSS.supports && CSS.supports('animation-timeline: view()');
  if (!cssOk && 'IntersectionObserver' in window) {
    var srSel = '.sec-head, .svc a, .tex li, .atelier__text, .work-foot, .cta-band .wrap > *, .work figure, .atelier__wide, .atelier__detail';
    var vh = window.innerHeight || root.clientHeight;
    var sro = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.classList.add('sr-go'); sro.unobserve(en.target);
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    Array.prototype.forEach.call(d.querySelectorAll(srSel), function (el) {
      if (el.getBoundingClientRect().top < vh) return;
      el.classList.add('sr-wait'); sro.observe(el);
    });
  }

  /* ---------- FAQ (Παραγωγή): one answer open at a time ----------
     <details name="faq"> does this natively in current browsers; this covers older ones. */
  var faqs = d.querySelectorAll('.faq details');
  Array.prototype.forEach.call(faqs, function (det) {
    det.addEventListener('toggle', function () {
      if (!det.open) return;
      Array.prototype.forEach.call(faqs, function (o) { if (o !== det && o.open) o.open = false; });
    });
  });

  /* ---------- Stage index (Υπηρεσίες): mark the stage being read ---------- */
  var idx = d.querySelector('.stage-index');
  if (idx && 'IntersectionObserver' in window) {
    var idxLinks = {};
    Array.prototype.forEach.call(idx.querySelectorAll('a[href^="#"]'), function (a) { idxLinks[a.getAttribute('href').slice(1)] = a; });
    var setCurrent = function (id) {
      Object.keys(idxLinks).forEach(function (k) {
        if (k === id) idxLinks[k].setAttribute('aria-current', 'true'); else idxLinks[k].removeAttribute('aria-current');
      });
    };
    var so = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) setCurrent(en.target.id); });
    }, { rootMargin: '-35% 0px -60% 0px' });
    Object.keys(idxLinks).forEach(function (id) { var t = d.getElementById(id); if (t) so.observe(t); });
  }
})();

/* ---------- Lightbox (Δημιουργίες): native <dialog>, prev/next, arrow keys ---------- */
(function () {
  'use strict';
  var d = document, lb = d.querySelector('.lb');
  if (!lb || typeof lb.showModal !== 'function') return; /* no dialog support: plates simply stay images */
  var items = Array.prototype.slice.call(d.querySelectorAll('[data-lb]'));
  var img = lb.querySelector('img'), num = lb.querySelector('.lb__cap b'), txt = lb.querySelector('.lb__cap span'), idx = 0, opener = null;
  var show = function (i) {
    idx = (i + items.length) % items.length;
    var it = items[idx], src = it.querySelector('img');
    img.src = it.getAttribute('data-lb'); img.alt = src.alt;
    num.textContent = it.getAttribute('data-n'); txt.textContent = it.getAttribute('data-cap');
  };
  items.forEach(function (it, i) {
    it.addEventListener('click', function () { opener = it; show(i); lb.showModal(); });
  });
  lb.querySelector('.lb__x').addEventListener('click', function () { lb.close(); });
  lb.querySelector('.lb__prev').addEventListener('click', function () { show(idx - 1); });
  lb.querySelector('.lb__next').addEventListener('click', function () { show(idx + 1); });
  lb.addEventListener('click', function (e) { if (e.target === lb) lb.close(); });
  lb.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') { e.preventDefault(); show(idx - 1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); show(idx + 1); }
  });
  lb.addEventListener('close', function () { if (opener) opener.focus(); });
})();

/* ---------- Contact form (Επικοινωνία): validation, Netlify Forms, preview mode ----------
   Without JS the form posts natively to Netlify and lands on the thank-you page.
   With JS: accessible inline validation, AJAX submission, inline confirmation.
   Outside Netlify (file://, localhost, previews) nothing is sent; on submit a status line says so. */
(function () {
  'use strict';
  var d = document, form = d.querySelector('form[data-form]');
  if (!form) return;
  var M = {};
  try { M = JSON.parse(form.querySelector('[data-form-msg]').textContent); } catch (e) {}
  var MAX = 8 * 1024 * 1024 - 64 * 1024;           /* Netlify: 8 MB per request, keep room for the text fields */
  var EXT = /\.(pdf|docx?|jpe?g|png|zip)$/i;
  var host = location.hostname;
  var extraHosts = (form.getAttribute('data-live-hosts') || '').split(/\s+/);
  var live = location.protocol === 'https:' && (/\.netlify\.app$/.test(host) || extraHosts.indexOf(host) > -1);

  form.noValidate = true;                            /* native bubbles off only when JS runs */
  var errBox = form.querySelector('[data-errors]'), status = form.querySelector('[data-status]');
  var btn = form.querySelector('[data-submit]'), done = d.querySelector('[data-done]');
  var radios = Array.prototype.slice.call(form.querySelectorAll('input[name=aitima]'));
  var typeSet = form.querySelector('.ct-type'), typeErr = d.getElementById('e-type');
  var extra = form.querySelector('[data-only]'), hint = d.getElementById('h-minima');
  var btnHTML = btn.innerHTML, touched = {};

  var setErr = function (ctl, errEl, msg) {
    if (errEl) { errEl.textContent = msg || ''; errEl.hidden = !msg; }
    if (ctl) ctl.setAttribute('aria-invalid', msg ? 'true' : 'false');
    return msg;
  };
  var checkType = function () {
    var ok = radios.some(function (r) { return r.checked; });
    typeSet.classList.toggle('is-invalid', !ok);
    radios.forEach(function (r) { r.setAttribute('aria-invalid', ok ? 'false' : 'true'); });
    return setErr(null, typeErr, ok ? '' : M.type);
  };
  var checkCtl = function (c) {
    var errEl = d.getElementById('e-' + c.id.replace('f-', '')), v = (c.value || '').trim(), msg = '';
    if (c.type === 'file') {
      var f = c.files && c.files[0];
      if (f && !EXT.test(f.name)) msg = M.fileType;
      else if (f && f.size > MAX) msg = M.fileSize;
    } else if (c.required && !v) msg = M.req;
    else if (v && c.type === 'email' && c.validity.typeMismatch) msg = M.email;
    else if (v && c.type === 'tel' && c.validity.patternMismatch) msg = M.tel;
    return setErr(c, errEl, msg);
  };
  var ctls = Array.prototype.slice.call(form.querySelectorAll('#f-onoma, #f-email, #f-tel, #f-minima, #f-arxeio'));
  ctls.forEach(function (c) {
    c.addEventListener('blur', function () { if (c.type !== 'file') { touched[c.id] = true; checkCtl(c); } });
    c.addEventListener('input', function () { if (touched[c.id] || c.getAttribute('aria-invalid') === 'true') checkCtl(c); });
    c.addEventListener('change', function () { if (c.type === 'file') checkCtl(c); });
  });

  /* request type: show the quote fields only for quotes, adapt the message hint */
  var applyType = function () {
    var cur = radios.filter(function (r) { return r.checked; })[0];
    var isQuote = !!cur && cur.id === 't-prosfora';
    if (extra) {
      extra.hidden = !isQuote;
      Array.prototype.forEach.call(extra.querySelectorAll('input'), function (i) { i.disabled = !isQuote; });
    }
    if (hint) hint.textContent = cur ? cur.getAttribute('data-hint') : (M.hint || hint.textContent);
  };
  radios.forEach(function (r) { r.addEventListener('change', function () { applyType(); if (typeErr.textContent) checkType(); }); });
  var pick = function (key) { var r = d.getElementById('t-' + key); if (r) { r.checked = true; applyType(); } return r; };
  var m = /[?&]aitima=([a-z]+)/.exec(location.search);
  if (m) pick(m[1]);
  applyType();
  Array.prototype.forEach.call(d.querySelectorAll('[data-pick]'), function (a) {
    a.addEventListener('click', function (e) {
      var r = pick(a.getAttribute('data-pick'));
      if (r) { e.preventDefault(); typeSet.scrollIntoView({ block: 'center' }); r.focus({ preventScroll: true }); }
    });
  });

  var showErrors = function (list) {
    var ul = errBox.querySelector('ul'); ul.textContent = '';
    list.forEach(function (it) {
      var li = d.createElement('li'), a = d.createElement('a');
      a.href = '#' + it.el.id; a.textContent = it.label + ': ' + it.msg;
      a.addEventListener('click', function (e) { e.preventDefault(); it.el.focus(); });
      li.appendChild(a); ul.appendChild(li);
    });
    errBox.querySelector('.ct-errors__t').textContent = list.length === 1 ? M.sumOne : M.sumMany.replace('{n}', list.length);
    errBox.hidden = false; errBox.focus();
  };
  var labelOf = function (c) {
    var l = form.querySelector('label[for="' + c.id + '"]');
    return l ? l.firstChild.textContent.trim() : c.name;
  };

  var busy = false;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (busy) return;
    status.textContent = '';
    var bad = [], tm = checkType();
    if (tm) bad.push({ el: radios[0], label: typeSet.querySelector('legend').firstChild.textContent.trim(), msg: tm });
    ctls.forEach(function (c) { var msg = checkCtl(c); touched[c.id] = true; if (msg) bad.push({ el: c, label: labelOf(c), msg: msg }); });
    if (bad.length) { showErrors(bad); return; }
    errBox.hidden = true;
    if (!live) { status.textContent = M.previewOk; status.focus(); return; }

    busy = true; btn.disabled = true; btn.textContent = M.sending;
    var ctrl = 'AbortController' in window ? new AbortController() : null;
    var timer = ctrl ? setTimeout(function () { ctrl.abort(); }, 45000) : 0;
    /* FormData keeps the file; no Content-Type header so the browser sets the multipart boundary */
    fetch('/', { method: 'POST', body: new FormData(form), signal: ctrl ? ctrl.signal : undefined })
      .then(function (r) {
        if (!r.ok) throw new Error(r.status);
        form.hidden = true; done.hidden = false;
        done.scrollIntoView({ block: 'start' }); done.focus({ preventScroll: true });
      })
      .catch(function () { status.textContent = M.fail; status.focus(); })
      .then(function () { clearTimeout(timer); busy = false; btn.disabled = false; btn.innerHTML = btnHTML; });
  });
})();
