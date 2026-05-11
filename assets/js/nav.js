/**
 * ACM Week 2026 — Slide Navigation Utilities
 * Shared across all individual slides
 */

// ── Keyboard navigation ───────────────────────────────────────────

function initKeyboardNav({ prev, next }) {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      if (prev) window.location.href = prev;
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
      if (next) window.location.href = next;
    } else if (e.key === 'Escape' || e.key === 'Home') {
      window.location.href = '/index.html';
    }
  });
}

// ── Progress bar ──────────────────────────────────────────────────

function initProgressBar(current, total) {
  const bar = document.querySelector('.progress-bar');
  if (!bar) return;
  const pct = ((current - 1) / (total - 1)) * 100;
  bar.style.width = pct + '%';
}

// ── GSAP entrance animation for slide content ─────────────────────

function animateSlideIn(selector = '.animate-in') {
  if (typeof gsap === 'undefined') return;
  const els = document.querySelectorAll(selector);
  if (!els.length) return;
  gsap.from(els, {
    y: 32,
    opacity: 0,
    duration: 0.6,
    ease: 'power3.out',
    stagger: 0.12,
    clearProps: 'transform,opacity',
  });
}

// ── Touch / swipe support ─────────────────────────────────────────

function initSwipeNav({ prev, next }) {
  let startX = null;
  document.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  }, { passive: true });
  document.addEventListener('touchend', (e) => {
    if (startX === null) return;
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 60) {
      if (dx > 0 && prev) window.location.href = prev;
      if (dx < 0 && next) window.location.href = next;
    }
    startX = null;
  }, { passive: true });
}

// ── Export helper ─────────────────────────────────────────────────

function initSlide({ current, total, prev, next }) {
  initKeyboardNav({ prev, next });
  initProgressBar(current, total);
  initSwipeNav({ prev, next });
  document.addEventListener('DOMContentLoaded', () => animateSlideIn());
}
