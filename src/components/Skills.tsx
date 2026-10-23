import React from 'react';
import { motion } from 'framer-motion';
import { tools, toolsRowTwo } from '../data/tools';
import { ToolMarquee } from './skills/ToolMarquee';

export function Skills() {
  return (
    <section
      id="skills"
      className="py-24 relative bg-[#05050c] overflow-hidden">
      
      {/* Ambient glows */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* ── Header ── */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-4 mb-4">
            
            <div className="h-[1px] w-8 bg-violet-500" />
            <h2
              className="text-sm font-display tracking-widest text-violet-400 uppercase"
              style={{ textShadow: '0 0 10px rgba(139, 92, 246, 0.5)' }}>
              
              My Arsenal
            </h2>
            <div className="h-[1px] w-8 bg-violet-500" />
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold text-white">
            
            Technical{' '}
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400"
              style={{ filter: 'drop-shadow(0 0 20px rgba(139, 92, 246, 0.3))' }}>
              
              Proficiency
            </span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-400 max-w-xl mx-auto">
            
            A multi-disciplinary toolkit refined across years of hands-on
            creative work.
          </motion.p>
        </div>

        {/* ── Tool logos — two rows drifting in opposite directions ── */}
        <div className="max-w-6xl mx-auto space-y-6">
          <ToolMarquee items={tools} duration={28} />
          <ToolMarquee items={toolsRowTwo} duration={28} reverse />
        </div>
      </div>
    </section>);

}