import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, CalendarDays, Check, X } from 'lucide-react';
import { experienceIntro, experienceFolders } from '../data/experiences';
import { fadeUp } from '../utils/motion';
import type { ExperiencePhoto } from '../types/portfolio';
import { PhotoFolder } from './experiences/PhotoFolder';

export function Experiences() {
  const [active, setActive] = useState<ExperiencePhoto | null>(null);

  // Lock page scroll + close on Escape while the lightbox is open.
  useEffect(() => {
    if (!active) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null);
    };
    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [active]);

  return (
    <section id="experiences" className="scroll-mt-28 py-24 md:py-28 relative">
      {/* Ambient section glow */}
      <div
        className="absolute top-1/3 -right-40 w-96 h-96 rounded-full bg-violet-500/10 blur-[120px] pointer-events-none"
        aria-hidden="true" />
      

      <div className="container mx-auto px-6 md:px-12 relative">
        {/* ── Header ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mb-12">
          
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-violet-500" />
            <h2 className="text-sm font-display tracking-widest text-violet-400 uppercase">
              Experiences
            </h2>
          </div>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-white">
            On-the-Job{' '}
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400"
              style={{ filter: 'drop-shadow(0 0 20px rgba(139,92,246,0.25))' }}>
              
              Training Journey
            </span>
          </h3>
        </motion.div>

        {/* ── Role summary ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="glass-card rounded-2xl border border-white/10 p-6 md:p-8 mb-14">
          
          <div className="flex flex-col lg:flex-row lg:items-start gap-8">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-300 text-[11px] font-medium tracking-wide">
                  <Briefcase size={12} />
                  {experienceIntro.role}
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-slate-400 text-[11px]">
                  <CalendarDays size={12} />
                  {experienceIntro.period}
                </span>
              </div>
              <h4 className="text-xl md:text-2xl font-display font-bold text-white mb-3 leading-snug">
                {experienceIntro.company}
              </h4>
              <p className="text-slate-400 leading-relaxed max-w-3xl">
                {experienceIntro.summary}
              </p>
            </div>

            <ul className="lg:w-80 shrink-0 space-y-2.5">
              {experienceIntro.highlights.map((item) =>
              <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 shrink-0 rounded-full bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400">
                    <Check size={12} />
                  </span>
                  <span className="text-sm text-slate-300 leading-relaxed">
                    {item}
                  </span>
                </li>
              )}
            </ul>
          </div>
        </motion.div>

        {/* ── Photo folders ── */}
        <div className="space-y-12">
          {experienceFolders.map((folder) =>
          <PhotoFolder
            key={folder.id}
            folder={folder}
            onSelect={setActive} />

          )}
        </div>
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {active &&
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          
            <div
            className="absolute inset-0 bg-[#030308]/90 backdrop-blur-md"
            onClick={() => setActive(null)}
            aria-hidden="true" />
          

            {/* Frame hugs the photo, so portrait and landscape shots both
               sit dead-center with no letterboxing. */}
            <motion.figure
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
            className="relative z-10 m-0 inline-flex max-w-[min(92vw,56rem)] max-h-[85vh] rounded-2xl overflow-hidden border border-cyan-500/20 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.85)]">
            
              <button
              onClick={() => setActive(null)}
              aria-label="Close photo"
              className="absolute top-3 right-3 z-20 p-2 rounded-full bg-[#030308]/70 backdrop-blur-md border border-white/10 text-slate-300 hover:text-white hover:border-cyan-400/50 transition-colors">
              
                <X size={18} />
              </button>

              <img
              src={active.src}
              alt={active.caption}
              className="block max-w-full max-h-[85vh] w-auto h-auto object-contain" />
            
            </motion.figure>
          </motion.div>
        }
      </AnimatePresence>
    </section>);

}