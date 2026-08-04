import { useEffect, useState } from 'react';

const useScrollSpy = (ids, { enabled = true } = {}) => {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    if (!enabled) return;

    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids, enabled]);

  return enabled ? activeId : null;
};

export default useScrollSpy;
