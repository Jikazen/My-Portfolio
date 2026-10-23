import { useEffect, useState } from 'react';

/**
 * Scroll-spy: returns the id of the section currently occupying the
 * viewport just below the fixed navbar, so the nav can highlight it.
 *
 * Uses scroll position (not IntersectionObserver) so that sections of
 * wildly different heights all resolve to exactly one active id.
 */
export function useActiveSection(
ids: string[],
offset = 120)
: string | null {
  const [active, setActive] = useState<string | null>(ids[0] ?? null);

  useEffect(() => {
    if (ids.length === 0) return;

    const update = () => {
      const marker = window.scrollY + offset;

      // Bottom of the page always resolves to the last section.
      const atBottom =
      window.innerHeight + window.scrollY >=
      document.body.scrollHeight - 4;
      if (atBottom) {
        setActive(ids[ids.length - 1]);
        return;
      }

      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= marker) current = id;
      }
      setActive(current);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [ids, offset]);

  return active;
}