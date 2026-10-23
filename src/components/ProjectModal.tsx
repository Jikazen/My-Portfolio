import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import type { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Lock page scroll + close on Escape while the case study is open.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  const [activeIndex, setActiveIndex] = useState(0);

  if (!project) return null;

  const isVideo = Boolean(project.videoUrl);
  const gallery = project.gallery ?? [];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} case study`}
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 pt-24 pb-6 sm:px-6 md:pt-28 md:pb-10">
      
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#030308]/85 backdrop-blur-md"
        onClick={onClose}
        aria-hidden="true" />
      

      {/* Panel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 16 }}
        transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
        className="relative z-10 w-full max-w-5xl max-h-full overflow-y-auto custom-scrollbar glass-card rounded-2xl border border-cyan-500/20 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8),0_0_50px_rgba(6,182,212,0.12)]">
        
        <button
          onClick={onClose}
          aria-label="Close case study"
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#030308]/70 backdrop-blur-md border border-white/10 text-slate-300 hover:text-white hover:border-cyan-400/50 transition-colors">
          
          <X size={18} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* ── Left: media ── */}
          <div className="p-5 md:p-6 md:pr-3 flex flex-col justify-center gap-3">
            <div
              className={`w-full rounded-xl overflow-hidden bg-[#05050c] border border-white/10 ${
              gallery.length > 0 ? 'aspect-[4/5] max-h-[60vh]' : 'aspect-video'}`
              }>
              
              {gallery.length > 0 ?
              <AnimatePresence mode="wait" initial={false}>
                  <motion.img
                  key={gallery[activeIndex]}
                  src={gallery[activeIndex]}
                  alt={`${project.title} — size ${activeIndex + 1} of ${gallery.length}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                  className="w-full h-full object-contain" />
                
                </AnimatePresence> :
              isVideo ?
              <video
                src={project.videoUrl}
                controls
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain bg-black" /> :


              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover" />

              }
            </div>

            {/* Every size of the design, grouped together */}
            {gallery.length > 1 &&
            <div className="flex gap-2" role="tablist" aria-label="Design sizes">
                {gallery.map((src, i) =>
              <button
                key={src}
                type="button"
                role="tab"
                aria-selected={i === activeIndex}
                aria-label={`Show size ${i + 1}`}
                onClick={() => setActiveIndex(i)}
                className={`relative w-16 h-16 rounded-lg overflow-hidden border transition-[border-color,opacity] duration-200 ${
                i === activeIndex ?
                'border-cyan-400 opacity-100' :
                'border-white/10 opacity-60 hover:opacity-100'}`
                }>
                
                    <img src={src} alt="" className="w-full h-full object-cover" />
                  </button>
              )}
              </div>
            }
          </div>

          {/* ── Right: case study details ── */}
          <div className="p-6 md:p-8 md:pl-3 flex flex-col">
            <span className="inline-block w-fit px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 text-[11px] font-medium tracking-wide mb-4">
              {project.category}
            </span>

            <h3 className="text-2xl md:text-3xl font-display font-bold text-white leading-tight mb-4">
              {project.title}
            </h3>

            <p className="text-slate-400 leading-relaxed mb-8">
              {project.description}
            </p>

            <div className="mb-8">
              <h4 className="text-[11px] font-display text-slate-500 mb-3 uppercase tracking-widest">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) =>
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs text-slate-300">
                  
                    {tech}
                  </span>
                )}
              </div>
            </div>

            <div className="mt-auto pt-2">
              <a
                href={project.videoUrl || '#'}
                target={isVideo ? '_blank' : undefined}
                rel={isVideo ? 'noopener noreferrer' : undefined}
                className="inline-flex w-full items-center justify-center gap-2 py-3 rounded-xl bg-cyan-500 text-white font-medium transition-colors duration-200 hover:bg-cyan-400 shadow-[0_0_18px_rgba(6,182,212,0.3)]">
                
                <ExternalLink size={16} />
                {isVideo ? 'View Video' : 'View Project'}
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>);

}