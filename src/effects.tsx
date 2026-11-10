// Motion effects from the Golden Boy kit (first built for RobertLazau.com, then
// Kyree Films and Tow Guys), tuned for Pasture & Paw. Styles live in index.css
// under "pp-".
// Every effect keeps all text in the prerendered HTML, moves only transform or
// opacity (plus one paint-only touch: the headline's light sweep), and shows its
// finished state for "reduce motion".
import React from 'react';
import { useLocation } from 'react-router-dom';

const reducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Set once the prerendered page has come to life (usePageEffects in App).
// Before that, anything already on screen has been seen, so it must not be
// hidden again. After it (moving between pages in the menu), a new page's
// content can come in with its effect.
let pageReady = false;

// Content enters a little after it crosses the bottom of the screen.
const ENTER_MARGIN = '0px 0px -10% 0px';
// Things that come into view together cascade in reading order.
const STAGGER_MS = 80;
const MAX_STAGGER = 6;
// The longest reveal plus a little; after that the element is left as it was.
const SETTLE_MS = 1300;

// ── Scroll reveals ─────────────────────────────────────────────────────────
// Any element with data-reveal="up | up-lg | left | left-sm | right | right-sm |
// zoom | tilt | tilt-left | card" rises, slides or settles in the first time it
// scrolls into view. The markup itself is plain and fully visible: on a fresh
// load only content below the first screen is held back (by setting data-pp),
// and only once JavaScript is running. The CSS is in index.css.
function useReveals() {
  const { pathname } = useLocation();
  // Before paint, so a page reached from the menu never shows a frame of its
  // content before it's held back.
  React.useLayoutEffect(() => {
    if (reducedMotion() || typeof IntersectionObserver === 'undefined') return;
    const fresh = !pageReady;
    const vh = window.innerHeight;
    const waiting = new Set<HTMLElement>();
    const timers: number[] = [];

    document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
      if (el.dataset.pp) return;
      // On a fresh load, anything on screen (or already scrolled past) stays put.
      if (fresh && el.getBoundingClientRect().top < vh) return;
      el.dataset.pp = 'armed';
      waiting.add(el);
    });
    if (!waiting.size) return;

    const play = (els: HTMLElement[]) => {
      els.forEach((el, i) => {
        waiting.delete(el);
        io.unobserve(el);
        el.style.setProperty('--pp-delay', `${Math.min(i, MAX_STAGGER) * STAGGER_MS}ms`);
      });
      // two frames so the held-back state is painted before it moves
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          els.forEach((el) => (el.dataset.pp = 'in'));
          timers.push(
            window.setTimeout(() => {
              els.forEach((el) => {
                delete el.dataset.pp;
                el.style.removeProperty('--pp-delay');
              });
            }, SETTLE_MS + MAX_STAGGER * STAGGER_MS),
          );
        }),
      );
    };

    const io = new IntersectionObserver(
      (entries) => {
        const hits = entries
          .filter((e) => e.isIntersecting && waiting.has(e.target as HTMLElement))
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top ||
              a.boundingClientRect.left - b.boundingClientRect.left,
          )
          .map((e) => e.target as HTMLElement);
        if (hits.length) play(hits);
      },
      { rootMargin: ENTER_MARGIN },
    );
    waiting.forEach((el) => io.observe(el));

    // At the very bottom of a page, whatever is left comes in.
    const onScroll = () => {
      const el = document.scrollingElement || document.documentElement;
      if (waiting.size && window.innerHeight + window.scrollY >= el.scrollHeight - 2) play([...waiting]);
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
      timers.forEach(clearTimeout);
      // Leave nothing held back (an element that outlives this page is armed
      // again by the next run).
      document.querySelectorAll<HTMLElement>('[data-pp]').forEach((el) => {
        delete el.dataset.pp;
        el.style.removeProperty('--pp-delay');
      });
    };
  }, [pathname]);
}

// ── Page-wide setup, mounted once in App ───────────────────────────────────
export function usePageEffects() {
  useReveals();
  React.useEffect(() => {
    // a tick later, so React's development double-run still counts as a fresh load
    const t = window.setTimeout(() => (pageReady = true));
    return () => clearTimeout(t);
  }, []);
}

// ── Golden-hour light over the hero photo ──────────────────────────────────
// Warm light drifts across the farm photo once, on the first page load (not
// when coming back to the home page from the menu). It sits under the
// headline, so the text is never covered. Pure CSS from the prerendered HTML,
// so it plays at first paint without waiting for JavaScript.
export function LightLeak() {
  const [show] = React.useState(() => !pageReady);
  if (!show) return null;
  return (
    <div className="pp-leak absolute inset-0 z-0" aria-hidden="true">
      <span className="pp-leak-a" />
      <span className="pp-leak-b" />
      <span className="pp-leak-c" />
    </div>
  );
}
