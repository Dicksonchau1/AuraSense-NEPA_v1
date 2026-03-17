/**
 * technology-spike-map.js
 * AURASENSE / NEPA — Institutional Technology Section Spike Map
 * Production-grade HTML5 Canvas implementation.
 * No external dependencies. No global namespace pollution.
 * Initialise: initTechnologySpikeMap(canvasElement)
 */
(function (global) {
  'use strict';

  // ─── CONSTANTS ───────────────────────────────────────────────────────────────
  var RAIL_COUNT          = 12;
  var GRID_ROWS           = 24;
  var ACTIVATION_INTERVAL = 5000;   // ms between auto-cycle steps
  var PULSE_DURATION      = 900;    // ms rise
  var PULSE_FADE          = 400;    // ms fall
  var BREATH_CYCLE        = 3200;   // ms baseline breath
  var SCAN_PERIOD         = 12000;  // ms full scan sweep
  var MAX_PULSE_H_RATIO   = 0.88;
  var BASELINE_MIN        = 0.05;
  var BASELINE_MAX        = 0.09;
  var GRID_OPACITY        = 0.05;
  var LABEL_OPACITY       = 0.13;
  var SCAN_OPACITY        = 0.025;
  var RAIL_COLOR          = '#FFB020';
  var BLUE_COLOR          = '#3A86FF';
  var RAIL_WIDTH          = 1.5;
  var GLOW_MAX            = 8;
  var INTERACTION_BOOST   = 0.40;
  var INTERACT_FADE       = 300;    // ms
  var META_FADE           = 200;    // ms
  var SEED                = 42;

  // ─── SEEDED PRNG (Park-Miller) ───────────────────────────────────────────────
  function createRNG(seed) {
    var s = seed;
    return function () {
      s = (s * 16807 + 0) % 2147483647;
      return (s - 1) / 2147483646;
    };
  }

  // ─── EASING ──────────────────────────────────────────────────────────────────
  function easeInOutCubic(t) {
    t = Math.max(0, Math.min(1, t));
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }
  function clamp01(t) { return Math.max(0, Math.min(1, t)); }

  // ─── PUBLIC INIT ─────────────────────────────────────────────────────────────
  function initTechnologySpikeMap(canvas) {
    if (!canvas || !canvas.getContext) return null;

    var ctx       = canvas.getContext('2d');
    var rng       = createRNG(SEED);
    var W = 0, H = 0, dpr = 1;
    var running   = false;
    var animId    = null;
    var startTime = 0;
    var destroyed = false;

    // ── Interaction state ────────────────────────────────────────────────────
    var hoveredRail       = -1;
    var lockedRail        = -1;   // click/tap locks rail
    var interactStart     = -1;
    var cursorY           = 0;
    var mouseX            = 0;

    // ── Rails ────────────────────────────────────────────────────────────────
    var rails = [];
    for (var i = 0; i < RAIL_COUNT; i++) {
      rails.push({
        index: i,
        x: 0,
        interAlpha: 0,
        // Per-rail phase offset from seeded rng so baseline breath is varied
        phaseOffset: rng() * Math.PI * 2
      });
    }

    // ── Reduced-motion check ─────────────────────────────────────────────────
    var reducedMotion = window.matchMedia &&
                        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ── Resize ───────────────────────────────────────────────────────────────
    function resize() {
      dpr = window.devicePixelRatio || 1;
      var rect = canvas.parentElement.getBoundingClientRect();
      W = rect.width  || canvas.offsetWidth  || 800;
      H = rect.height || canvas.offsetHeight || 520;
      canvas.width  = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      canvas.style.width  = W + 'px';
      canvas.style.height = H + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      updateRailX();
    }

    function updateRailX() {
      var spacing = W / (RAIL_COUNT + 1);
      for (var i = 0; i < RAIL_COUNT; i++) {
        rails[i].x = (i + 1) * spacing;
      }
    }

    // ── Rail hit-test ────────────────────────────────────────────────────────
    function railAtX(x) {
      var tol = W / (RAIL_COUNT * 3.5);
      for (var i = 0; i < RAIL_COUNT; i++) {
        if (Math.abs(rails[i].x - x) < tol) return i;
      }
      return -1;
    }

    // ── Event handlers ───────────────────────────────────────────────────────
    function onMouseMove(e) {
      var r = canvas.getBoundingClientRect();
      mouseX  = e.clientX - r.left;
      cursorY = e.clientY - r.top;
      var idx = railAtX(mouseX);
      if (idx !== hoveredRail) {
        hoveredRail   = idx;
        if (idx !== -1) interactStart = performance.now();
      }
    }
    function onMouseLeave() {
      hoveredRail   = -1;
      interactStart = -1;
    }
    function onClick(e) {
      var r   = canvas.getBoundingClientRect();
      var idx = railAtX(e.clientX - r.left);
      lockedRail = (idx !== -1 && idx !== lockedRail) ? idx : -1;
    }
    function onTouchStart(e) {
      var r     = canvas.getBoundingClientRect();
      var touch = e.touches[0];
      mouseX  = touch.clientX - r.left;
      cursorY = touch.clientY - r.top;
      var idx = railAtX(mouseX);
      if (idx !== -1) {
        if (lockedRail === idx) {
          lockedRail = -1; hoveredRail = -1;
        } else {
          lockedRail    = idx;
          hoveredRail   = idx;
          interactStart = performance.now();
        }
      } else {
        lockedRail = -1; hoveredRail = -1;
      }
    }
    function onTouchEnd() {
      if (lockedRail === -1) { hoveredRail = -1; interactStart = -1; }
    }
    function onVisibility() {
      if (document.hidden) {
        running = false;
        if (animId) { cancelAnimationFrame(animId); animId = null; }
      } else if (!destroyed) {
        running   = true;
        startTime = performance.now();
        animId    = requestAnimationFrame(frame);
      }
    }

    canvas.addEventListener('mousemove',  onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);
    canvas.addEventListener('click',      onClick);
    canvas.addEventListener('touchstart', onTouchStart, { passive: true });
    canvas.addEventListener('touchend',   onTouchEnd,   { passive: true });
    document.addEventListener('visibilitychange', onVisibility);

    var resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () { resize(); if (!running) staticRender(); }, 120);
    });

    // ── Draw: grid ───────────────────────────────────────────────────────────
    function drawGrid() {
      ctx.strokeStyle = 'rgba(200,205,211,' + GRID_OPACITY + ')';
      ctx.lineWidth   = 0.5;
      var step = H / GRID_ROWS;
      for (var r = 1; r < GRID_ROWS; r++) {
        var y = r * step;
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
      }
    }

    // ── Draw: Y-axis labels ──────────────────────────────────────────────────
    function drawYLabels() {
      ctx.font          = '600 7px "IBM Plex Mono", monospace';
      ctx.fillStyle     = 'rgba(200,205,211,' + LABEL_OPACITY + ')';
      ctx.textAlign     = 'right';
      ctx.textBaseline  = 'middle';
      var step = H / GRID_ROWS;
      for (var r = 1; r <= GRID_ROWS; r++) {
        ctx.fillText(String(r).padStart(2, '0'), 18, r * step);
      }
    }

    // ── Draw: X-axis labels ──────────────────────────────────────────────────
    function drawXLabels() {
      ctx.font          = '600 7px "IBM Plex Mono", monospace';
      ctx.fillStyle     = 'rgba(200,205,211,' + LABEL_OPACITY + ')';
      ctx.textAlign     = 'center';
      ctx.textBaseline  = 'bottom';
      for (var i = 0; i < RAIL_COUNT; i++) {
        ctx.fillText(String(i + 1).padStart(2, '0'), rails[i].x, H - 2);
      }
    }

    // ── Draw: baseline rails ─────────────────────────────────────────────────
    function drawBaselineRails(elapsed) {
      var activeInteract = (lockedRail !== -1) ? lockedRail : hoveredRail;
      for (var i = 0; i < RAIL_COUNT; i++) {
        var rail   = rails[i];
        var breath = BASELINE_MIN + (BASELINE_MAX - BASELINE_MIN) *
                     Math.abs(Math.sin(((elapsed % BREATH_CYCLE) / BREATH_CYCLE + rail.phaseOffset / (Math.PI * 2)) * Math.PI));

        if (i === activeInteract && interactStart !== -1) {
          var ip = clamp01((performance.now() - interactStart) / INTERACT_FADE);
          rail.interAlpha = ip;
          breath = Math.min(0.9, breath + ip * 0.45);
        } else {
          rail.interAlpha = Math.max(0, rail.interAlpha - 0.04);
          if (rail.interAlpha > 0) breath = Math.min(0.9, breath + rail.interAlpha * 0.3);
        }

        ctx.strokeStyle = 'rgba(255,176,32,' + breath + ')';
        ctx.lineWidth   = RAIL_WIDTH;
        ctx.beginPath(); ctx.moveTo(rail.x, 0); ctx.lineTo(rail.x, H); ctx.stroke();
      }
    }

    // ── Draw: active deterministic pulse ─────────────────────────────────────
    function drawActivePulse(elapsed) {
      var cycle       = Math.floor(elapsed / ACTIVATION_INTERVAL);
      var activeIdx   = cycle % RAIL_COUNT;
      var cycleT      = elapsed % ACTIVATION_INTERVAL;
      var totalDur    = PULSE_DURATION + PULSE_FADE;

      if (cycleT > totalDur) return;

      var intensity;
      if (cycleT < PULSE_DURATION) {
        intensity = easeInOutCubic(cycleT / PULSE_DURATION);
      } else {
        intensity = 1 - easeInOutCubic((cycleT - PULSE_DURATION) / PULSE_FADE);
      }

      // interaction boost
      var activeInteract = (lockedRail !== -1) ? lockedRail : hoveredRail;
      if (activeIdx === activeInteract) {
        intensity = Math.min(1, intensity * (1 + INTERACTION_BOOST));
      }

      var rail   = rails[activeIdx];
      var maxH   = H * MAX_PULSE_H_RATIO;
      var pulseH = intensity * maxH;

      // Glow backdrop
      if (intensity > 0.3) {
        var grd = ctx.createLinearGradient(rail.x, H, rail.x, H - pulseH);
        grd.addColorStop(0, 'rgba(255,176,32,' + (intensity * 0.12) + ')');
        grd.addColorStop(1, 'rgba(255,176,32,0)');
        ctx.fillStyle = grd;
        ctx.fillRect(rail.x - 6, H - pulseH, 12, pulseH);
      }

      // Main rail pulse
      ctx.save();
      ctx.globalAlpha  = intensity * 0.92;
      ctx.strokeStyle  = RAIL_COLOR;
      ctx.lineWidth    = 2.5;
      ctx.shadowColor  = RAIL_COLOR;
      ctx.shadowBlur   = intensity > 0.5 ? GLOW_MAX : 3;
      ctx.beginPath();
      ctx.moveTo(rail.x, H);
      ctx.lineTo(rail.x, H - pulseH);
      ctx.stroke();
      ctx.restore();

      // Micro ticks
      ctx.save();
      ctx.globalAlpha = intensity * 0.35;
      ctx.strokeStyle = RAIL_COLOR;
      ctx.lineWidth   = 0.8;
      var tickCount   = Math.floor(intensity * 9);
      for (var t = 0; t < tickCount; t++) {
        var tp = clamp01((cycleT - t * 28) / PULSE_DURATION);
        if (tp > 0 && tp < 1.1) {
          var ty = H - easeInOutCubic(tp) * maxH;
          ctx.beginPath();
          ctx.moveTo(rail.x - 7, ty);
          ctx.lineTo(rail.x + 7, ty);
          ctx.stroke();
        }
      }
      ctx.restore();
    }

    // ── Draw: scan line ───────────────────────────────────────────────────────
    function drawScanLine(elapsed) {
      var phase  = (elapsed % SCAN_PERIOD) / SCAN_PERIOD;
      var scanY  = phase * H;
      ctx.fillStyle = 'rgba(58,134,255,' + SCAN_OPACITY + ')';
      ctx.fillRect(0, scanY, W, 1.5);
    }

    // ── Draw: interaction overlay ─────────────────────────────────────────────
    function drawInteractionOverlay() {
      var activeInteract = (lockedRail !== -1) ? lockedRail : hoveredRail;
      if (activeInteract === -1 || interactStart === -1) return;
      var rail  = rails[activeInteract];
      var alpha = rail.interAlpha;
      if (alpha < 0.01) return;

      // Dashed vertical highlight
      ctx.save();
      ctx.strokeStyle = 'rgba(255,176,32,' + (alpha * 0.28) + ')';
      ctx.lineWidth   = 1;
      ctx.setLineDash([4, 7]);
      ctx.beginPath(); ctx.moveTo(rail.x, 0); ctx.lineTo(rail.x, H); ctx.stroke();
      ctx.setLineDash([]);

      // Horizontal crosshair
      ctx.strokeStyle = 'rgba(58,134,255,' + (alpha * 0.18) + ')';
      ctx.lineWidth   = 0.5;
      ctx.beginPath(); ctx.moveTo(0, cursorY); ctx.lineTo(W, cursorY); ctx.stroke();
      ctx.restore();
    }

    // ── Draw: metadata panel ──────────────────────────────────────────────────
    function drawMetadataPanel() {
      var activeInteract = (lockedRail !== -1) ? lockedRail : hoveredRail;
      if (activeInteract === -1 || interactStart === -1) return;

      var alpha = clamp01((performance.now() - interactStart) / META_FADE);
      if (alpha < 0.04) return;

      var rail   = rails[activeInteract];
      var zone   = String(rail.index + 1).padStart(2, '0');
      var locked = (lockedRail !== -1);
      var lines  = [
        'ZONE: 0x' + zone,
        'CLASSIFICATION: Structural Signal',
        'CONFIDENCE: High',
        'STATE: Replay-Verified',
        locked ? 'LOCK: Active' : 'LOCK: —'
      ];

      var PW = 210, PH = 98;
      var px = rail.x + 20;
      if (px + PW > W - 12) px = rail.x - PW - 20;
      var py = Math.max(12, Math.min(cursorY - PH / 2, H - PH - 12));

      ctx.save();
      ctx.globalAlpha = alpha * 0.88;
      ctx.fillStyle   = '#0F141A';
      ctx.fillRect(px, py, PW, PH);
      ctx.globalAlpha = alpha * 0.15;
      ctx.strokeStyle = '#FFB020';
      ctx.lineWidth   = 0.5;
      ctx.strokeRect(px, py, PW, PH);
      ctx.restore();

      ctx.save();
      ctx.globalAlpha  = alpha * 0.95;
      ctx.font         = '500 7.5px "IBM Plex Mono", monospace';
      ctx.fillStyle    = '#B0B8C0';
      ctx.textAlign    = 'left';
      ctx.textBaseline = 'top';
      for (var i = 0; i < lines.length; i++) {
        if (i === 0) ctx.fillStyle = '#FFB020';
        else if (i === 4) ctx.fillStyle = locked ? '#3A86FF' : '#3C424A';
        else ctx.fillStyle = '#B0B8C0';
        ctx.fillText(lines[i], px + 12, py + 8 + i * 17);
      }
      ctx.restore();
    }

    // ── Main render loop ──────────────────────────────────────────────────────
    function frame(now) {
      if (!running || destroyed) return;
      animId = requestAnimationFrame(frame);
      var elapsed = now - startTime;

      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = '#0B0F14';
      ctx.fillRect(0, 0, W, H);

      drawGrid();
      drawYLabels();
      drawBaselineRails(elapsed);
      drawActivePulse(elapsed);
      drawScanLine(elapsed);
      drawInteractionOverlay();
      drawMetadataPanel();
      drawXLabels();
    }

    // ── Static render (reduced-motion / hidden) ───────────────────────────────
    function staticRender() {
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = '#0B0F14';
      ctx.fillRect(0, 0, W, H);
      drawGrid();
      drawYLabels();
      for (var i = 0; i < RAIL_COUNT; i++) {
        ctx.strokeStyle = 'rgba(255,176,32,' + BASELINE_MIN + ')';
        ctx.lineWidth   = RAIL_WIDTH;
        ctx.beginPath(); ctx.moveTo(rails[i].x, 0); ctx.lineTo(rails[i].x, H); ctx.stroke();
      }
      drawXLabels();
    }

    // ── Destroy ───────────────────────────────────────────────────────────────
    function destroy() {
      destroyed = true;
      running   = false;
      if (animId) { cancelAnimationFrame(animId); animId = null; }
      canvas.removeEventListener('mousemove',  onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
      canvas.removeEventListener('click',      onClick);
      canvas.removeEventListener('touchstart', onTouchStart);
      canvas.removeEventListener('touchend',   onTouchEnd);
      document.removeEventListener('visibilitychange', onVisibility);
    }

    // ── Boot ──────────────────────────────────────────────────────────────────
    resize();

    if (reducedMotion) {
      staticRender();
      // Keep interaction alive on static render
      canvas.addEventListener('mousemove', onMouseMove);
      canvas.addEventListener('mouseleave', onMouseLeave);
      canvas.addEventListener('click', onClick);
      canvas.addEventListener('touchstart', onTouchStart, { passive: true });
      canvas.addEventListener('touchend', onTouchEnd, { passive: true });
    } else {
      running   = true;
      startTime = performance.now();
      animId    = requestAnimationFrame(frame);
    }

    return { destroy: destroy };
  }

  // ── Expose to global scope (minimal) ────────────────────────────────────────
  global.initTechnologySpikeMap = initTechnologySpikeMap;

}(window));
