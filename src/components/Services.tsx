import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';
import { services } from '../data/services';
import { serviceAccents as accentMap } from '../utils/accents';
export function Services() {
  return (
    <section
      id="services"
      className="py-24 relative bg-[#05050c] overflow-hidden">
      
      {/* Ambient glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
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
                
                What I Do
              </h2>
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
              
              My{' '}
              <span
                className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
                style={{
                  filter: 'drop-shadow(0 0 20px rgba(6, 182, 212, 0.3))'
                }}>
                
                Services
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
              className="mt-4 text-slate-400 max-w-lg">
              
              End-to-end creative services — from concept and identity to
              high-fidelity delivery.
            </motion.p>
          </div>

          <motion.a
            href="#contact"
            initial={{
              opacity: 0,
              x: 20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border-cyan-500/30 text-cyan-200 hover:text-white hover:border-cyan-400/70 transition-all duration-300 text-sm font-medium self-start md:self-end"
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
              '0 0 25px rgba(6, 182, 212, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '';
            }}>
            
            Start a project
            <ArrowUpRight size={14} />
          </motion.a>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const c = accentMap[service.accent];
            const { Icon } = service;
            return (
              <motion.div
                key={service.id}
                initial={{
                  opacity: 0,
                  y: 30
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true,
                  margin: '-50px'
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1
                }}
                className={`group relative glass-card rounded-2xl p-7 border ${c.border}/40 overflow-hidden flex flex-col transition-all duration-300`}
                style={{
                  transition:
                  'box-shadow 0.4s, transform 0.3s, border-color 0.4s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 16px 40px rgba(0,0,0,0.4), 0 0 30px ${c.glow}`;
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '';
                  e.currentTarget.style.transform = '';
                }}>
                
                {/* Decorative grid */}
                <div
                  className="absolute inset-0 opacity-[0.04] pointer-events-none"
                  style={{
                    backgroundImage: `linear-gradient(rgba(${c.rgb}, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(${c.rgb}, 0.4) 1px, transparent 1px)`,
                    backgroundSize: '24px 24px'
                  }} />
                

                {/* Corner number watermark */}
                <div
                  className="absolute -top-2 -right-1 text-[100px] font-display font-bold leading-none pointer-events-none opacity-[0.06] group-hover:opacity-[0.14] transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, rgba(${c.rgb}, 1), rgba(${c.rgb}, 0.3))`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
                  
                  {service.id}
                </div>

                {/* Header */}
                <div className="relative z-10 mb-6">
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className={`w-14 h-14 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      style={{
                        boxShadow: `inset 0 0 14px rgba(${c.rgb}, 0.2)`
                      }}>
                      
                      <Icon size={26} className={c.iconText} />
                    </div>
                    <span
                      className={`px-2.5 py-1 rounded-md text-[10px] font-display font-bold tracking-[0.15em] ${c.bg} ${c.text} border ${c.border}`}
                      style={{
                        boxShadow: `0 0 10px ${c.glow}`
                      }}>
                      
                      {service.id}
                    </span>
                  </div>

                  <h4 className="text-2xl font-display font-bold text-white mb-1.5">
                    {service.title}
                  </h4>
                  <p
                    className={`text-xs font-display tracking-wider uppercase ${c.text} opacity-80 mb-4`}>
                    
                    {service.tagline}
                  </p>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>

                {/* Deliverables */}
                <div className="relative z-10 pt-5 mt-1 border-t border-white/5 mb-5">
                  <p className="text-[10px] font-display tracking-widest text-slate-500 uppercase mb-3">
                    What's included
                  </p>
                  <ul className="space-y-2">
                    {service.deliverables.map((d, i) =>
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-slate-300">
                      
                        <span
                        className={`mt-0.5 w-4 h-4 rounded-full ${c.bg} border ${c.border} flex items-center justify-center shrink-0`}>
                        
                          <Check
                          size={10}
                          className={c.iconText}
                          strokeWidth={3} />
                        
                        </span>
                        <span>{d}</span>
                      </li>
                    )}
                  </ul>
                </div>

                {/* Meta footer */}
                <div className="relative z-10 mt-auto pt-5 border-t border-white/5 grid grid-cols-2 gap-3">
                  {service.meta.map((m, i) =>
                  <div key={i}>
                      <p className="text-[9px] font-display tracking-widest text-slate-500 uppercase mb-1">
                        {m.label}
                      </p>
                      <p className={`text-xs font-semibold ${c.text}`}>
                        {m.value}
                      </p>
                    </div>
                  )}
                </div>

                {/* Hover sweep border */}
                <div
                  className={`absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-700 ease-out bg-gradient-to-r ${c.fromTo}`}
                  style={{
                    boxShadow: `0 0 10px ${c.glow}`
                  }} />
                
              </motion.div>);

          })}
        </div>
      </div>
    </section>);

}