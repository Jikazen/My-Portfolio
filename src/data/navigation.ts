import type { NavLink } from '../types/portfolio';

/**
 * Top navigation — the single source of truth for both the desktop bar
 * and the mobile menu, and for the scroll-spy that highlights the
 * section currently in view. Order here == order on screen.
 */
export const navLinks: NavLink[] = [
{ name: 'Home', href: '#home' },
{ name: 'About', href: '#about' },
{ name: 'Skills', href: '#skills' },
{ name: 'Experiences', href: '#experiences' },
{ name: 'Projects', href: '#projects' },
{ name: 'Achievements', href: '#achievements' },
{ name: 'Services', href: '#services' },
{ name: 'Resume', href: '#resume' },
{ name: 'Contact', href: '#contact' }];


/** Section ids the scroll-spy watches, derived from the links above. */
export const sectionIds = navLinks.map((link) => link.href.replace('#', ''));