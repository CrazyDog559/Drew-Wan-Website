import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scrolls to the hash target on navigation, and to the top of the page when a
 * new route is opened without one (otherwise you land mid-page on detail views).
 */
const useScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    const behavior = reduceMotion ? 'auto' : 'smooth';

    if (!location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      return;
    }

    // Wait a frame so the target section exists after a cross-page navigation.
    const frame = requestAnimationFrame(() => {
      const el = document.getElementById(decodeURIComponent(location.hash.slice(1)));
      if (el) el.scrollIntoView({ behavior, block: 'start' });
    });

    return () => cancelAnimationFrame(frame);
  }, [location.pathname, location.hash, location.key]);
};

export default useScrollToHash;
