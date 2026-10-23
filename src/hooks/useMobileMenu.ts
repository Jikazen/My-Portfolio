import { useCallback, useEffect, useState } from 'react';
import { useIsDesktop, useIsMobile } from './useMediaQuery';

/**
 * Owns all mobile-navigation behavior in one place:
 * - open / close / toggle state
 * - locks background scroll while the panel is open
 * - closes on Escape
 * - auto-closes when the viewport grows past the phone breakpoint
 */
export function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  // The nav collapses below `lg`, so the panel is only valid until then.
  const isDesktop = useIsDesktop();

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  // Never leave the panel mounted after resizing up to desktop.
  useEffect(() => {
    if (isDesktop) setIsOpen(false);
  }, [isDesktop]);

  // Lock page scroll + allow Escape to dismiss.
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  return {
    isOpen,
    isMobile,
    open,
    close,
    toggle
  };
}