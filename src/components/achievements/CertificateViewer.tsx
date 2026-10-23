import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { achievementAccents as accentMap } from '../../utils/accents';
import type { ActiveCertificate } from '../../types/portfolio';

type CertificateViewerProps = {
  certificate: ActiveCertificate;
  onClose: () => void;
};

/** Centered lightbox that shows a certificate scan (and its copies). */
export function CertificateViewer({ certificate, onClose }: CertificateViewerProps) {
  const { item, accent } = certificate;
  const c = accentMap[accent];
  const [index, setIndex] = useState(0);

  // Lock page scroll + close on Escape while open.
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title} certificate`}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      
      <div
        className="absolute inset-0 bg-[#030308]/90 backdrop-blur-md"
        onClick={onClose}
        aria-hidden="true" />
      

      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.97 }}
        transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
        className="relative z-10 w-full max-w-4xl max-h-[92vh] overflow-y-auto custom-scrollbar rounded-2xl glass-card border border-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.85)]">
        
        <button
          onClick={onClose}
          aria-label="Close certificate"
          className="absolute top-3 right-3 z-20 p-2 rounded-full bg-[#030308]/75 backdrop-blur-md border border-white/10 text-slate-300 hover:text-white hover:border-cyan-400/50 transition-colors">
          
          <X size={18} />
        </button>

        <div className="bg-white flex items-center justify-center">
          <AnimatePresence mode="wait" initial={false}>
            <motion.img
              key={item.images[index]}
              src={item.images[index]}
              alt={`${item.title} certificate${
              item.images.length > 1 ? `, copy ${index + 1}` : ''}`
              }
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              className="block w-full max-h-[65vh] object-contain" />
            
          </AnimatePresence>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-5 md:p-6 border-t border-white/10">
          <div className="min-w-0 flex-1">
            <h4 className="text-lg md:text-xl font-display font-bold text-white leading-snug">
              {item.title}
            </h4>
            <p className={`text-sm ${c.text} mt-1`}>{item.detail}</p>
            <p className="text-xs text-slate-500 mt-2">
              {item.issuer} · {item.date}
            </p>
          </div>

          {item.images.length > 1 &&
          <div className="flex gap-2 shrink-0" role="tablist" aria-label="Certificate copies">
              {item.images.map((src, i) =>
            <button
              key={src}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show copy ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`w-20 h-14 rounded-lg overflow-hidden border bg-white transition-[border-color,opacity] duration-200 ${
              i === index ?
              'border-cyan-400 opacity-100' :
              'border-white/10 opacity-60 hover:opacity-100'}`
              }>
              
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </button>
            )}
            </div>
          }
        </div>
      </motion.div>
    </motion.div>);

}