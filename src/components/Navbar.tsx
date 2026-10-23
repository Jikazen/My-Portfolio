import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks, sectionIds } from '../data/navigation';
import { ASSETS } from '../data/site';
import { useMobileMenu } from '../hooks/useMobileMenu';
import { useActiveSection } from '../hooks/useActiveSection';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const activeId = useActiveSection(sectionIds);
  const {
    isOpen: mobileMenuOpen,
    close: closeMobileMenu,
    toggle: toggleMobileMenu
  } = useMobileMenu();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 h-20 transition-colors duration-300 ${
      mobileMenuOpen ?
      'z-[60] bg-[#05050c]' :
      scrolled ?
      'glass border-b border-white/10' :
      'bg-transparent'}`
      }>
      
      <div className="container mx-auto h-20 px-6 md:px-10 flex items-center justify-between gap-6">
        {/* Logo — placement unchanged */}
        <a
          href="#home"
          className="relative group flex items-center shrink-0"
          aria-label="JC Graphix & Cuts — back to top">
          
          <img
            src={ASSETS.logo}
            alt="JC Graphix & Cuts logo"
            className="h-10 w-10 rounded-xl object-cover border border-white/10 transition-all duration-300 group-hover:border-cyan-400/50"
            style={{ boxShadow: '0 0 16px rgba(6, 182, 212, 0.25)' }} />
          
        </a>

        {/* Desktop Nav */}
        <nav
          className="hidden lg:flex items-center gap-1 xl:gap-2"
          aria-label="Primary">
          
          {navLinks.map((link) => {
            const isActive = activeId === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                className={`relative px-3 py-2 text-[13px] xl:text-sm font-medium whitespace-nowrap rounded-lg transition-colors duration-200 ${
                isActive ?
                'text-white' :
                'text-slate-400 hover:text-white'}`
                }>
                
                {link.name}
                {isActive &&
                <motion.span
                  layoutId="nav-active"
                  transition={{
                    type: 'spring',
                    stiffness: 420,
                    damping: 34
                  }}
                  className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500"
                  style={{ boxShadow: '0 0 10px rgba(6,182,212,0.7)' }} />

                }
              </a>);

          })}
        </nav>

        {/* Hire Me — enhanced hover */}
        <a
          href="#contact"
          className="hidden lg:inline-flex group relative shrink-0 items-center overflow-hidden px-5 py-2 text-sm font-medium text-white rounded-full bg-white/5 border border-white/10 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-cyan-400/60 hover:shadow-[0_0_22px_rgba(6,182,212,0.35)]">
          
          <span
            className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent transition-transform duration-500 ease-out group-hover:translate-x-full"
            aria-hidden="true" />
          
          <span className="relative">Hire Me</span>
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white transition-colors hover:border-cyan-400/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav">
          
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          <span>{mobileMenuOpen ? 'Close' : 'Menu'}</span>
        </button>
      </div>

      {/* Mobile / tablet Nav */}
      <AnimatePresence>
        {mobileMenuOpen &&
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
          id="mobile-nav"
          className="lg:hidden fixed inset-x-0 top-20 bottom-0 flex flex-col overflow-y-auto overscroll-contain border-t border-white/10 bg-[#05050c] px-6 pb-[env(safe-area-inset-bottom)] shadow-[0_24px_48px_rgba(0,0,0,0.6)]">
            <div className="mx-auto w-full max-w-xl">
              <div className="border-b border-white/10 py-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">Navigation</p>
                <p className="mt-1 text-sm text-slate-400">Choose a section to visit</p>
              </div>
              <nav className="flex flex-col py-2" aria-label="Mobile">
              {navLinks.map((link) => {
              const isActive = activeId === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMobileMenu}
                  aria-current={isActive ? 'page' : undefined}
                  className={`flex min-h-12 items-center gap-3 border-b border-white/5 py-3 text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cyan-400 ${
                  isActive ?
                  'text-cyan-300' :
                  'text-slate-200 hover:text-white'}`
                  }>
                  
                    <span
                    className={`h-4 w-0.5 rounded-full transition-colors ${
                    isActive ? 'bg-cyan-400' : 'bg-transparent'}`
                    }
                    aria-hidden="true" />
                  
                    {link.name}
                  </a>);

            })}
              <a
              href="#contact"
              onClick={closeMobileMenu}
              className="mb-6 mt-5 rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:border-cyan-400/60 hover:bg-cyan-400/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400">
              
                Hire Me
              </a>
              </nav>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}