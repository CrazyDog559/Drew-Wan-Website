import { useEffect, useRef } from 'react';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

/**
 * Adds `is-visible` to an element with the `reveal` class once it scrolls into
 * view. No-ops entirely when the visitor prefers reduced motion, and reveals
 * immediately if IntersectionObserver is unavailable.
 */
const useReveal = ({ delay = 0, threshold = 0.12 } = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-visible');
      return;
    }

    if (delay) el.style.setProperty('--reveal-delay', `${delay}ms`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: '0px 0px -8% 0px' }
    );

    observer.observe(el);

    // Safety net: never leave content permanently invisible if the observer
    // somehow doesn't fire (odd viewport sizes, background tabs, etc.).
    const failsafe = window.setTimeout(() => el.classList.add('is-visible'), 2500);

    return () => {
      window.clearTimeout(failsafe);
      observer.disconnect();
    };
  }, [delay, threshold]);

  return ref;
};

export default useReveal;
