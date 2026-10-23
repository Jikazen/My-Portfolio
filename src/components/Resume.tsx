import React from 'react';
import { motion } from 'framer-motion';
import {
  Download,
  FileText,
  GraduationCap,
  Briefcase,
  Award,
  CheckCircle2 } from
'lucide-react';
import {
  education,
  experience,
  highlights,
  resumeMeta as meta } from
'../data/resume';
import { ASSETS, SITE } from '../data/site';
import { TimelineCard } from './resume/TimelineCard';

export function Resume() {
  return (
    <section id="resume" className="py-24 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
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
            className="inline-flex items-center gap-4 mb-4">
            
            <div className="h-[1px] w-8 bg-cyan-500" />
            <h2
              className="text-sm font-display tracking-widest text-cyan-400 uppercase"
              style={{
                textShadow: '0 0 10px rgba(6, 182, 212, 0.5)'
              }}>
              
              My Background
            </h2>
            <div className="h-[1px] w-8 bg-cyan-500" />
          </motion.div>
          <motion.h3
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
            transition={{
              delay: 0.1
            }}
            className="text-3xl md:text-5xl font-display font-bold text-white">
            
            Education &{' '}
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500"
              style={{
                filter: 'drop-shadow(0 0 20px rgba(6, 182, 212, 0.3))'
              }}>
              
              Resume
            </span>
          </motion.h3>
          <motion.p
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
            transition={{
              delay: 0.2
            }}
            className="mt-4 text-slate-400 max-w-xl mx-auto">
            
            A snapshot of my academic journey, professional experience, and
            creative milestones.
          </motion.p>
        </div>

        {/* Profile / Hero Card */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          className="glass-card rounded-2xl p-6 md:p-8 mb-8 max-w-6xl mx-auto border-cyan-500/20 relative overflow-hidden">
          
          {/* Decorative grid */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.4) 1px, transparent 1px)`,
              backgroundSize: '24px 24px'
            }} />
          
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
            {/* Avatar — 2x2 photo */}
            <div className="relative shrink-0">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500 blur-lg opacity-40" />
              <img
                src={ASSETS.resumeAvatar}
                alt={SITE.name}
                className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl object-cover object-top border-2 border-cyan-400/40 bg-[#0a0a16]"
                style={{
                  boxShadow: '0 0 30px rgba(6, 182, 212, 0.4)'
                }} />
              
            </div>

            {/* Identity */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-emerald-300 text-[10px] font-display font-bold tracking-widest uppercase"
                  style={{
                    boxShadow: '0 0 10px rgba(16, 185, 129, 0.3)'
                  }}>
                  
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available
                </span>
                <span className="text-xs text-slate-500 font-display tracking-wider uppercase">
                  Designer · Editor
                </span>
              </div>
              <h4 className="text-2xl md:text-3xl font-display font-bold text-white mb-1">
                {SITE.name}
              </h4>
              <p className="text-slate-400 text-sm md:text-base">{SITE.role}</p>
            </div>

            {/* Download CTA */}
            <a
              href={ASSETS.resumeFile}
              download={ASSETS.resumeFileName}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-2 px-5 md:px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-semibold overflow-hidden transition-all hover:scale-[1.03] shrink-0"
              style={{
                boxShadow:
                '0 0 25px rgba(6, 182, 212, 0.4), 0 0 25px rgba(139, 92, 246, 0.3)'
              }}>
              
              <div className="absolute inset-0 bg-white/15 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <FileText size={16} className="relative z-10" />
              <span className="relative z-10 text-sm md:text-base">
                View Resume
              </span>
              <Download
                size={16}
                className="relative z-10 group-hover:translate-y-0.5 transition-transform" />
              
            </a>
          </div>

          {/* Meta strip */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/5">
            {meta.map((m, i) =>
            <div key={i} className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <m.Icon size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-display tracking-widest text-slate-500 uppercase">
                    {m.label}
                  </p>
                  <p className="text-sm text-white font-medium">{m.value}</p>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Two-column: Education + Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto mb-8">
          {/* Education */}
          <TimelineCard
            title="Education"
            Icon={GraduationCap}
            accent="cyan"
            items={education} />
          
          {/* Experience */}
          <TimelineCard
            title="Experience"
            Icon={Briefcase}
            accent="violet"
            items={experience} />
          
        </div>

        {/* Highlights */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          className="glass-card rounded-2xl p-6 md:p-8 max-w-6xl mx-auto border-blue-500/20 relative overflow-hidden">
          
          <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400"
                style={{
                  boxShadow: '0 0 15px rgba(59, 130, 246, 0.3)'
                }}>
                
                <Award size={20} />
              </div>
              <div>
                <h4 className="text-lg font-display font-bold text-white">
                  Quick Facts
                </h4>
                <p className="text-xs text-slate-500">
                  Highlights that define my creative journey
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {highlights.map((h, i) =>
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  x: -10
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  delay: i * 0.08
                }}
                className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-colors group">
                
                  <CheckCircle2
                  size={18}
                  className="text-blue-400 mt-0.5 shrink-0 group-hover:scale-110 transition-transform"
                  style={{
                    filter: 'drop-shadow(0 0 6px rgba(59, 130, 246, 0.6))'
                  }} />
                
                  <span className="text-sm text-slate-300 leading-relaxed">
                    {h}
                  </span>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

}