import React from 'react';
import { motion } from 'framer-motion';
import type { Tool } from '../../types/portfolio';

type ToolMarqueeProps = {
  items: Tool[];
  duration: number;
  /** Drift left → right instead of right → left. */
  reverse?: boolean;
};

/**
 * A single infinite marquee row of tool logos.
 * The item list is rendered twice so the loop is seamless at -50%.
 */
export function ToolMarquee({ items, duration, reverse = false }: ToolMarqueeProps) {
  const loop = [...items, ...items];

  return (
    <div className="relative w-full overflow-hidden py-2">
      {/* Edge fades */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-28 bg-gradient-to-r from-[#030308] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-28 bg-gradient-to-l from-[#030308] to-transparent z-10 pointer-events-none" />

      <motion.div
        animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
        transition={{ duration, repeat: Infinity, ease: 'linear' }}
        className="flex gap-5 md:gap-6 w-max">
        
        {loop.map((tool, i) =>
        <div
          key={`${tool.name}-${i}`}
          title={tool.name}
          className="group shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-2xl glass border-white/10 flex items-center justify-center transition-transform duration-300 hover:-translate-y-1"
          style={{ boxShadow: '0 0 18px rgba(6, 182, 212, 0.08)' }}>
          
            <div
            className={`w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-xl ${
            tool.needsLightTile ? 'bg-white p-1.5' : ''}`
            }>
            
              <img
              src={tool.icon}
              alt={tool.name}
              loading="lazy"
              className="w-full h-full object-contain" />
            
            </div>
          </div>
        )}
      </motion.div>
    </div>);

}