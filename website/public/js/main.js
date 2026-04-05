'use strict';

// Centralised API base URL resolver.
// Override with either:
// 1) window.AURASENSE_API_BASE_URL = 'https://api.aurasensehk.com'
// 2) <meta name="aurasense-api-base" content="https://api.aurasensehk.com">
(function initApiBaseUrl() {
  const metaBase = document.querySelector('meta[name="aurasense-api-base"]')?.content?.trim() || '';
  const globalBase = typeof window.AURASENSE_API_BASE_URL === 'string'
    ? window.AURASENSE_API_BASE_URL.trim()
    : '';

  let apiBase = metaBase || globalBase;

  if (!apiBase) {
    const host = window.location.hostname;
    if (host === 'aurasensehk.com' || host === 'www.aurasensehk.com' || host.endsWith('.github.io')) {
      apiBase = 'https://api.aurasensehk.com';
    }
  }

  window.AURASENSE_API_BASE_URL = apiBase.replace(/\/+$/, '');

  window.aurasenseApiUrl = function aurasenseApiUrl(path) {
    if (typeof path !== 'string' || path.length === 0) return path;
    if (/^https?:\/\//i.test(path)) return path;

    const base = window.AURASENSE_API_BASE_URL || '';
    if (!base) return path;

    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    return `${base}${normalizedPath}`;
  };
})();

// ─── NAV SCROLL ──────────────────────────────────────────────────────────────
const nav       = document.getElementById('main-nav');
const hamburger = document.getElementById('nav-hamburger');
const drawer    = document.getElementById('nav-drawer');

window.addEventListener('scroll', () => {
  nav?.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

hamburger?.addEventListener('click', () => {
  const open = drawer?.classList.toggle('open');
  document.body.style.overflow = open ? 'hidden' : '';
});

document.querySelectorAll('.nav-drawer a').forEach(link => {
  link.addEventListener('click', () => {
    drawer?.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// ─── ACTIVE NAV LINK ─────────────────────────────────────────────────────────
(function () {
  const links = document.querySelectorAll('.nav-links a');
  const path  = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(link => {
    const href = (link.getAttribute('href') || '').split('#')[0].split('/').pop();
    if (href && path === href) link.classList.add('active');
  });
})();

// ─── INTERSECTION OBSERVER — scroll reveal + stagger ─────────────────────────
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal, .stagger').forEach(el => revealObs.observe(el));

// ─── COUNTER ANIMATION ───────────────────────────────────────────────────────
function animateCounter(el) {
  const raw    = el.dataset.target || el.textContent;
  const target = parseFloat(raw.replace(/[^0-9.]/g, ''));
  const suffix = el.dataset.suffix || '';
  const prefix = el.dataset.prefix || '';
  const dur    = 1600;
  const start  = performance.now();
  const isInt  = Number.isInteger(target);

  (function tick(now) {
    const p = Math.min((now - start) / dur, 1);
    const v = target * (1 - Math.pow(1 - p, 3)); // ease-out cubic
    el.textContent = prefix + (isInt ? Math.round(v) : v.toFixed(1)) + suffix;
    if (p < 1) requestAnimationFrame(tick);
  })(start);
}

const counterObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.dataset.counted) {
      entry.target.dataset.counted = '1';
      animateCounter(entry.target);
    }
  });
}, { threshold: 0.6 });

document.querySelectorAll('[data-counter]').forEach(el => counterObs.observe(el));

// ─── PERFORMANCE BARS ────────────────────────────────────────────────────────
const barObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.perf-bar-fill').forEach(bar => {
        bar.style.width = bar.dataset.width || '0%';
      });
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.perf-bars').forEach(el => barObs.observe(el));

// ─── VIDEO MODAL ─────────────────────────────────────────────────────────────
const videoModal = document.getElementById('video-modal');
const modalVideo = document.getElementById('modal-video');

document.querySelectorAll('[data-video-trigger]').forEach(btn => {
  btn.addEventListener('click', () => {
    videoModal?.classList.add('open');
    document.body.style.overflow = 'hidden';
    modalVideo?.play().catch(() => {});
  });
});

document.getElementById('video-modal-close')?.addEventListener('click', closeVideoModal);

videoModal?.addEventListener('click', e => {
  if (e.target === videoModal) closeVideoModal();
});

function closeVideoModal() {
  videoModal?.classList.remove('open');
  document.body.style.overflow = '';
  if (modalVideo) { modalVideo.pause(); modalVideo.currentTime = 0; }
}

// ─── ESC KEY ─────────────────────────────────────────────────────────────────
document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  closeVideoModal();
  // trial modal close (defined in trial.js, guard with check)
  if (typeof closeTrial === 'function') closeTrial();
});

// ─── COOKIE BANNER ───────────────────────────────────────────────────────────
(function () {
  if (localStorage.getItem('aurasense-cookie-consent')) return;
  const banner = document.getElementById('cookie-banner');
  if (!banner) return;
  setTimeout(() => banner.classList.add('visible'), 900);
  document.getElementById('cookie-accept')?.addEventListener('click', () => {
    localStorage.setItem('aurasense-cookie-consent', '1');
    banner.classList.remove('visible');
    setTimeout(() => banner.remove(), 500);
  });
})();

// ─── SMOOTH SCROLL ───────────────────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});
