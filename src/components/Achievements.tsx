import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Calendar, Layers, Maximize2 } from 'lucide-react';
import { achievementGroups, achievementStats } from '../data/achievements';
import { achievementAccents as accentMap } from '../utils/accents';
import type { ActiveCertificate } from '../types/portfolio';
import { CertificateViewer } from './achievements/CertificateViewer';

export function Achievements() {
  const [active, setActive] = useState<ActiveCertificate | null>(null);

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-violet-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-12 bg-violet-500" />
              <h2
                className="text-sm font-display tracking-widest text-violet-400 uppercase"
                style={{ textShadow: '0 0 10px rgba(139, 92, 246, 0.5)' }}>
                
                Milestones
              </h2>
            </div>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-white">
              Awards &{' '}
              <span
                className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400"
                style={{ filter: 'drop-shadow(0 0 20px rgba(139, 92, 246, 0.3))' }}>
                
                Achievements
              </span>
            </h3>
            <p className="mt-4 text-slate-400 max-w-lg">
              Certificates for academic excellence, competition wins, startup
              programs and campus involvement.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="w-24 h-24 rounded-full glass flex items-center justify-center border-violet-500/30 shrink-0 relative"
            style={{
              boxShadow:
              '0 0 30px rgba(139, 92, 246, 0.3), inset 0 0 20px rgba(139, 92, 246, 0.1)'
            }}>
            
            <span className="absolute inset-0 rounded-full border border-violet-500/30 animate-ping opacity-30" />
            <Award size={40} className="text-violet-400 relative z-10" />
          </motion.div>
        </div>

        {/* Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-card rounded-2xl p-6 md:p-8 mb-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-violet-500/20">
          
          {achievementStats.map((stat, i) =>
          <div key={stat.label} className="text-center relative">
              {i > 0 &&
            <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-white/10" />
            }
              <div
              className="text-3xl md:text-4xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-br from-cyan-300 via-violet-300 to-cyan-400 mb-1"
              style={{ filter: 'drop-shadow(0 0 12px rgba(139, 92, 246, 0.4))' }}>
              
                {stat.value}
              </div>
              <div className="text-[10px] md:text-xs font-display tracking-widest text-slate-400 uppercase">
                {stat.label}
              </div>
            </div>
          )}
        </motion.div>

        {/* Groups */}
        <div className="space-y-16">
          {achievementGroups.map((group) => {
            const c = accentMap[group.accent];
            const { Icon } = group;
            return (
              <div key={group.id}>
                {/* Group header */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                  className="flex items-center gap-4 mb-6">
                  
                  <span
                    className={`w-11 h-11 shrink-0 rounded-xl ${c.bg} border ${c.border} ${c.text} flex items-center justify-center`}
                    style={{ boxShadow: `0 0 16px ${c.glow}` }}>
                    
                    <Icon size={20} />
                  </span>
                  <div className="min-w-0">
                    <h4 className="text-xl md:text-2xl font-display font-bold text-white leading-tight">
                      {group.title}
                    </h4>
                    <p className="text-sm text-slate-400">{group.description}</p>
                  </div>
                  <span className="hidden sm:block flex-1 h-px bg-white/10 ml-2" />
                  <span
                    className={`shrink-0 px-3 py-1 rounded-full text-xs font-medium ${c.bg} border ${c.border} ${c.text}`}>
                    
                    {group.items.length}
                  </span>
                </motion.div>

                {/* Certificates */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {group.items.map((item, index) =>
                  <motion.button
                    key={item.id}
                    type="button"
                    onClick={() => setActive({ item, accent: group.accent })}
                    aria-label={`View certificate: ${item.title}`}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.05,
                      ease: [0.23, 1, 0.32, 1]
                    }}
                    className={`group relative flex flex-col text-left glass-card rounded-2xl overflow-hidden border border-white/10 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60`}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = `0 16px 50px rgba(0,0,0,0.5), 0 0 30px ${c.glow}`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = '';
                    }}>
                    
                      {/* Certificate scan */}
                      <div className="relative aspect-[7/5] overflow-hidden bg-white">
                        <img
                        src={item.images[0]}
                        alt={`${item.title} certificate`}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]" />
                      

                        {/* Stacked-copy hint for grouped scans */}
                        {item.images.length > 1 &&
                      <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#030308]/75 backdrop-blur-md border border-white/10 text-white/85 text-[11px] font-medium">
                            <Layers size={12} />
                            {item.images.length} copies
                          </span>
                      }

                        {/* Hover expand */}
                        <span
                        className="absolute inset-0 flex items-center justify-center bg-[#030308]/0 transition-colors duration-300 group-hover:bg-[#030308]/30"
                        aria-hidden="true">
                        
                          <span
                          className={`w-11 h-11 rounded-full bg-[#030308]/75 backdrop-blur-md border ${c.border} ${c.text} flex items-center justify-center opacity-0 scale-90 transition-[opacity,transform] duration-300 group-hover:opacity-100 group-hover:scale-100`}>
                          
                            <Maximize2 size={16} />
                          </span>
                        </span>
                      </div>

                      {/* Content */}
                      <div className="flex flex-col flex-1 p-5">
                        <h5 className="text-base font-display font-bold text-white leading-snug mb-1">
                          {item.title}
                        </h5>
                        <p className={`text-sm ${c.text} mb-4`}>{item.detail}</p>
                        <div className="mt-auto flex items-center gap-1.5 pt-3 border-t border-white/5 text-xs text-slate-500">
                          <Calendar size={12} className="shrink-0" />
                          <span>{item.date}</span>
                        </div>
                      </div>

                      {/* Bottom accent */}
                      <span
                      className={`absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100 bg-gradient-to-r ${c.fromTo}`}
                      aria-hidden="true" />
                    
                    </motion.button>
                  )}
                </div>
              </div>);

          })}
        </div>
      </div>

      <AnimatePresence>
        {active &&
        <CertificateViewer
          key={active.item.id}
          certificate={active}
          onClose={() => setActive(null)} />

        }
      </AnimatePresence>
    </section>);

}