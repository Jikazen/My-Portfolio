import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import {
  ASSETS,
  CONTACT_DETAILS as contactInfo,
  SITE,
  SOCIAL_LINKS as socials } from
'../data/site';

const LOGO = ASSETS.footerAvatar;
export function Footer() {
  return (
    <footer className="relative bg-[#030308] overflow-hidden">
      {/* Glowing divider above footer */}
      <div className="relative h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-[1px] bg-gradient-to-r from-cyan-400/0 via-cyan-400/80 to-cyan-400/0"
          style={{
            boxShadow: '0 0 16px rgba(6, 182, 212, 0.6)'
          }} />
        
      </div>

      {/* Ambient glows */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-500/[0.06] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-violet-500/[0.05] rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* ───── BRANDING + CONTACT BODY ───── */}
        <div className="pt-16 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a
              href="#"
              className="inline-flex items-center gap-3 mb-5 group"
              aria-label={SITE.name}>
              
              <img
                src={LOGO}
                alt={SITE.name}
                className="h-14 w-14 rounded-2xl object-cover object-top border border-cyan-400/30 bg-[#0a0a16] transition-all duration-300 group-hover:border-cyan-400/60"
                style={{
                  boxShadow: '0 0 24px rgba(6, 182, 212, 0.3)'
                }} />
              
              <div>
                <p className="font-display text-xl font-bold text-white leading-tight">
                  {SITE.name}
                </p>
                <p className="text-xs text-cyan-300/80 mt-1 tracking-wide">
                  {SITE.tagline}
                </p>
              </div>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              {SITE.description}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-display tracking-widest text-slate-500 uppercase mb-6">
              Get in Touch
            </h3>
            <ul className="space-y-4">
              {contactInfo.map(({ Icon, label, value, href }) =>
              <li key={label}>
                  <a href={href} className="flex items-center gap-3 group">
                    <span className="w-10 h-10 rounded-xl glass border-white/10 flex items-center justify-center text-cyan-400 shrink-0 group-hover:border-cyan-400/50 transition-all duration-300">
                      <Icon size={16} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[10px] text-slate-500 uppercase tracking-wider">
                        {label}
                      </span>
                      <span className="block text-sm text-slate-200 group-hover:text-cyan-300 transition-colors break-all">
                        {value}
                      </span>
                    </span>
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xs font-display tracking-widest text-slate-500 uppercase mb-6">
              Follow Along
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-xs">
              Catch behind-the-scenes work, design experiments, and the latest
              releases.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ Icon, href, label }) =>
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{
                  y: -4
                }}
                className="w-11 h-11 rounded-full glass border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-300 hover:border-cyan-400/50 transition-colors duration-300"
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                  '0 0 20px rgba(6, 182, 212, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '';
                }}>
                
                  <Icon size={18} />
                </motion.a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ───── BOTTOM BAR — centered ───── */}
      <div className="border-t border-white/5 relative z-10">
        <div className="container mx-auto px-6 md:px-12 py-6 flex items-center justify-center text-center">
          <p className="text-xs text-slate-500">
            © 2026{' '}
            <span
              className="text-cyan-300"
              style={{
                textShadow: '0 0 10px rgba(6, 182, 212, 0.4)'
              }}>
              
              {SITE.name}
            </span>
            . All Rights Reserved.
          </p>
        </div>
      </div>

      {/* Floating Back to Top — bottom-right */}
      <motion.button
        onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
        }
        aria-label="Back to top"
        initial={{
          opacity: 0,
          y: 20
        }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        viewport={{
          once: true
        }}
        whileHover={{
          y: -4
        }}
        whileTap={{
          scale: 0.92
        }}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full glass border border-cyan-500/40 flex items-center justify-center text-cyan-300 backdrop-blur-md transition-colors hover:border-cyan-400/70 hover:text-white"
        style={{
          boxShadow: '0 0 24px rgba(6, 182, 212, 0.35)'
        }}>
        
        <ArrowUp size={20} />
      </motion.button>
    </footer>);

}