/**
 * AuraSense SFSVC — main.js
 * Counter animation, IntersectionObserver, smooth scroll,
 * benchmark bars, video overlay, hamburger nav.
 * Vanilla JS only. No jQuery.
 */

'use strict';

/* ─── UTILITIES ─────────────────────────────────── */

function easeOut(t) {
  return 1 - Math.pow(1 - t, 3);
}

function animateValue(el, from, to, duration) {
  const start = performance.now();
  function tick(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const value = Math.round(from + (to - from) * easeOut(progress));
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix !== undefined ? el.dataset.suffix : '';
    el.textContent = prefix + value + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

/* ─── HERO FLOAT (applied after entrance) ─────── */
function initHeroFloat() {
  const headline = document.getElementById('hero-heading');
  if (!headline) return;
  // Add floating class after the last entrance animation completes
  setTimeout(() => {
    headline.classList.add('hero-float');
  }, 1400 + 800); // last delay + duration
}

/* ─── COUNTER NUMBERS ────────────────────────── */
function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseFloat(el.dataset.target) || 0;
      animateValue(el, 0, target, 1500);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

/* ─── SCROLL REVEAL ──────────────────────────── */
function initScrollReveal() {
  const elements = document.querySelectorAll('.scroll-reveal');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => observer.observe(el));
}

/* ─── BENCHMARK BARS ─────────────────────────── */
function initBenchmarkBars() {
  const bars = document.querySelectorAll('.benchmark-bar-fill[data-bar]');
  if (!bars.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      bars.forEach(bar => bar.classList.add('bar-animate'));
      observer.disconnect();
    });
  }, { threshold: 0.4 });

  const section = document.getElementById('benchmarkMetrics');
  if (section) observer.observe(section);
}

/* ─── VIDEO OVERLAY ──────────────────────────── */
function initVideoOverlay() {
  const overlay = document.getElementById('videoOverlay');
  const video   = document.getElementById('benchmarkVideo');
  if (!overlay || !video) return;

  function togglePlay() {
    if (video.paused) {
      video.play();
      overlay.style.display = 'none';
    } else {
      video.pause();
      overlay.style.display = 'flex';
    }
  }

  overlay.addEventListener('click', togglePlay);
  overlay.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      togglePlay();
    }
  });

  video.addEventListener('ended', () => {
    overlay.style.display = 'flex';
  });
}

/* ─── ACTIVE NAV LINK (IntersectionObserver) ─── */
function initNavHighlight() {
  const links    = document.querySelectorAll('[data-nav]');
  const sections = Array.from(links)
    .map(l => document.querySelector(l.getAttribute('href')))
    .filter(Boolean);

  if (!sections.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id   = entry.target.id;
      const href = '#' + id;
      links.forEach(l => {
        l.classList.toggle('active', l.getAttribute('href') === href);
      });
    });
  }, { threshold: 0.4 });

  sections.forEach(s => observer.observe(s));
}

/* ─── HAMBURGER MENU ─────────────────────────── */
function initHamburger() {
  const btn  = document.getElementById('hamburger');
  const nav  = document.getElementById('nav');
  const menu = document.getElementById('navLinks');
  if (!btn || !nav) return;

  btn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('nav--open');
    btn.setAttribute('aria-expanded', String(isOpen));
  });

  // Close when a nav link is clicked
  if (menu) {
    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('nav--open');
        btn.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

/* ─── SMOOTH SCROLL ──────────────────────────── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const navHeight = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue('--nav-height'),
        10
      ) || 64;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

/* ─── INIT ───────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initHeroFloat();
  initCounters();
  initScrollReveal();
  initBenchmarkBars();
  initVideoOverlay();
  initNavHighlight();
  initHamburger();
  initSmoothScroll();
});
