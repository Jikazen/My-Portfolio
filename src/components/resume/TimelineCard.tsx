import React from "react";
import { motion } from "framer-motion";
import { TimelineEntry } from "../../types/portfolio";
import { BoxIcon } from "lucide-react";
type TimelineCardProps = {
  title: string;
  Icon: BoxIcon;
  accent: 'cyan' | 'violet';
  items: TimelineEntry[];
};

/** Static Tailwind tokens per accent — never build these dynamically. */
const ACCENT_COLORS = {
  cyan: {
    border: 'border-cyan-500/20',
    hoverBorder: 'hover:border-cyan-500/40',
    iconBg: 'bg-cyan-500/10',
    iconBorder: 'border-cyan-500/30',
    iconText: 'text-cyan-400',
    line: 'border-cyan-500/30',
    dot: 'bg-cyan-400',
    text: 'text-cyan-300',
    badge: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-300',
    glow: 'rgba(6, 182, 212, 0.5)',
    rgb: '6, 182, 212'
  },
  violet: {
    border: 'border-violet-500/20',
    hoverBorder: 'hover:border-violet-500/40',
    iconBg: 'bg-violet-500/10',
    iconBorder: 'border-violet-500/30',
    iconText: 'text-violet-400',
    line: 'border-violet-500/30',
    dot: 'bg-violet-400',
    text: 'text-violet-300',
    badge: 'bg-violet-500/10 border-violet-500/30 text-violet-300',
    glow: 'rgba(139, 92, 246, 0.5)',
    rgb: '139, 92, 246'
  }
};

/** Glass card listing Education or Experience entries on a timeline. */
export function TimelineCard({
  title,
  Icon,
  accent,
  items
}: TimelineCardProps) {
  const colors = ACCENT_COLORS[accent];
  return <motion.div initial={{
    opacity: 0,
    y: 30
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true
  }} className={`glass-card rounded-2xl p-6 border ${colors.border} ${colors.hoverBorder} transition-colors relative overflow-hidden`}>
      {/* subtle grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
      backgroundImage: `linear-gradient(rgba(${colors.rgb}, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(${colors.rgb}, 0.4) 1px, transparent 1px)`,
      backgroundSize: '24px 24px'
    }} />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-7">
          <div className={`w-11 h-11 rounded-lg ${colors.iconBg} border ${colors.iconBorder} flex items-center justify-center ${colors.iconText}`} style={{
          boxShadow: `0 0 16px ${colors.glow}`
        }}>
            <Icon size={20} />
          </div>
          <div>
            <h4 className="text-lg font-display font-bold text-white">{title}</h4>
            <p className="text-xs text-slate-500">{items.length} entries</p>
          </div>
        </div>

        <div className="space-y-5">
          {items.map((item, i) => <div key={i} className={`relative pl-5 border-l ${colors.line}`}>
              {/* dot */}
              <div className={`absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full ${colors.dot}`} style={{
            boxShadow: `0 0 10px ${colors.glow}`
          }} />
              <div className="flex items-center gap-2 mb-1.5">
                <p className={`text-[10px] font-display tracking-widest ${colors.text} uppercase`}>
                  {item.year}
                </p>
                <span className={`px-1.5 py-0.5 rounded text-[9px] font-display tracking-wider uppercase font-bold border ${colors.badge}`}>
                  {item.badge}
                </span>
              </div>
              <h5 className="text-sm font-semibold text-white mb-0.5">
                {item.title}
              </h5>
              <p className="text-xs text-slate-500 mb-1.5">{item.place}</p>
              <p className="text-xs text-slate-400 leading-relaxed">
                {item.detail}
              </p>
            </div>)}
        </div>
      </div>
    </motion.div>;
}