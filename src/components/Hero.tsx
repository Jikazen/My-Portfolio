import React, { useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { heroRoles as roles, heroSlides as slides } from '../data/hero';
import { fadeUp } from '../utils/motion';
export function Hero() {
  const reduceMotion = useReducedMotion();
  const [current, setCurrent] = useState(0);
  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prev = useCallback(
    () => setCurrent((p) => (p - 1 + slides.length) % slides.length),
    []
  );
  // Auto-advance
  useEffect(() => {
    const t = setInterval(next, 4000);
    return () => clearInterval(t);
  }, [next]);
  const slide = slides[current];
  const SlideIcon = slide.Icon;
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Floating orbs */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 8, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute top-32 left-10 hidden lg:block pointer-events-none">
        
        <div
          className="w-14 h-14 rounded-2xl border border-cyan-500/30 backdrop-blur-md bg-cyan-500/5 rotate-12"
          style={{
            boxShadow: '0 0 30px rgba(6, 182, 212, 0.2)'
          }} />
        
      </motion.div>
      <motion.div
        animate={{
          y: [0, 25, 0],
          rotate: [0, -10, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute bottom-32 right-12 hidden lg:block pointer-events-none">
        
        <div
          className="w-16 h-16 border border-violet-500/30 backdrop-blur-md bg-violet-500/5 rotate-45"
          style={{
            boxShadow: '0 0 30px rgba(139, 92, 246, 0.2)'
          }} />
        
      </motion.div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center justify-center">
        {/* PORTFOLIO title — letters rise in, then float in a gentle wave */}
        <div className="relative w-full flex justify-center mt-8 mb-12 py-8">
          <h2
            aria-label="Portfolio"
            className="relative text-[50px] sm:text-[70px] md:text-[100px] lg:text-[140px] font-display font-bold text-center whitespace-nowrap tracking-[0.1em] leading-none select-none">
            
            {'PORTFOLIO'.split('').map((letter, i) =>
            <motion.span
              key={i}
              aria-hidden="true"
              // Letters converge from the edges toward the center,
              // the middle "T" landing first and the outer letters last.
              initial={
              reduceMotion ?
              { opacity: 0 } :
              { opacity: 0, x: (i - 4) * 28, scale: 1.15 }
              }
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 0.3,
                delay: 0.35 + Math.abs(i - 4) * 0.06,
                ease: [0.23, 1, 0.32, 1]
              }}
              className="inline-block">
              
                <motion.span
                className="inline-block text-white"
                style={{ textShadow: '0 0 24px rgba(6, 182, 212, 0.35)' }}
                animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  // Start after the entrance, offset per letter for a wave.
                  delay: 0.9 + i * 0.14
                }}>
                
                  {letter}
                </motion.span>
              </motion.span>
            )}
          </h2>

          {/* Accent line draws in underneath */}
          <motion.span
            aria-hidden="true"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="absolute bottom-3 inset-x-0 mx-auto h-[2px] w-40 md:w-64 origin-center bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500" />
          
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">
          {/* ───── Left: Minimized intro text ───── */}
          <div className="text-center lg:text-left">
            {/* Status Badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-cyan-500/30 mb-6"
              style={{
                boxShadow: '0 0 20px rgba(6, 182, 212, 0.15)'
              }}>
              
              <Sparkles size={14} className="text-cyan-400" />
              <span className="text-sm font-medium text-cyan-100">
                Creative Designer & Visual Storyteller
              </span>
            </motion.div>

            {/* Minimized Headline */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="font-display font-bold leading-tight tracking-tight mb-4">
              
              <span className="block text-2xl md:text-3xl text-white/70">
                Hi, I'm
              </span>
              <span className="relative inline-block whitespace-nowrap text-[7.2vw] sm:text-4xl md:text-5xl lg:text-[3.15rem] xl:text-6xl">
                <span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500"
                  style={{
                    filter: 'drop-shadow(0 0 30px rgba(6, 182, 212, 0.3))'
                  }}>
                  
                  J'karl A.K.A. Jikazen
                </span>
                <motion.span
                  initial={{
                    scaleX: 0
                  }}
                  animate={{
                    scaleX: 1
                  }}
                  transition={{
                    duration: 0.9,
                    delay: 0.9,
                    ease: 'easeOut'
                  }}
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 origin-left rounded-full"
                  style={{
                    boxShadow: '0 0 10px rgba(6, 182, 212, 0.8)'
                  }} />
                
              </span>
            </motion.h1>

            {/* Role chips */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              
              {roles.map((role, i) =>
              <div
                key={i}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full glass border-white/10 hover:border-cyan-500/40 transition-all duration-300">
                
                  <role.Icon size={13} className="text-cyan-400" />
                  <span className="text-xs text-slate-200 font-medium">
                    {role.label}
                  </span>
                </div>
              )}
            </motion.div>
          </div>

          {/* ───── Right: Slideshow ───── */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 0.7,
              delay: 0.4
            }}
            className="relative">
            
            <div
              className="relative aspect-[4/3] rounded-3xl glass-card overflow-hidden border border-white/10"
              style={{
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)'
              }}>
              
              {/* Slides */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{
                    opacity: 0,
                    scale: 1.05
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.98
                  }}
                  transition={{
                    duration: 0.6,
                    ease: 'easeOut'
                  }}
                  className="absolute inset-0">
                  
                  {/* Gradient background */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg, ${slide.from}33, ${slide.to}22)`
                    }} />
                  
                  {/* Decorative grid */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                      'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
                      backgroundSize: '32px 32px'
                    }} />
                  
                  {/* Glowing orb behind icon */}
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full blur-3xl opacity-50"
                    style={{
                      background: `radial-gradient(circle, ${slide.from}, transparent)`
                    }} />
                  

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center">
                    <motion.div
                      initial={{
                        y: 20,
                        opacity: 0
                      }}
                      animate={{
                        y: 0,
                        opacity: 1
                      }}
                      transition={{
                        delay: 0.15
                      }}
                      className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md border border-white/20"
                      style={{
                        background: `linear-gradient(135deg, ${slide.from}, ${slide.to})`,
                        boxShadow: `0 0 30px ${slide.from}88`
                      }}>
                      
                      <SlideIcon size={36} className="text-white" />
                    </motion.div>
                    <motion.h3
                      initial={{
                        y: 20,
                        opacity: 0
                      }}
                      animate={{
                        y: 0,
                        opacity: 1
                      }}
                      transition={{
                        delay: 0.25
                      }}
                      className="text-2xl md:text-3xl font-display font-bold text-white mb-2"
                      style={{
                        textShadow: '0 2px 20px rgba(0,0,0,0.5)'
                      }}>
                      
                      {slide.title}
                    </motion.h3>
                    <motion.p
                      initial={{
                        y: 20,
                        opacity: 0
                      }}
                      animate={{
                        y: 0,
                        opacity: 1
                      }}
                      transition={{
                        delay: 0.35
                      }}
                      className="text-sm text-slate-200/90">
                      
                      {slide.subtitle}
                    </motion.p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Bottom gradient */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0a0a16]/80 to-transparent z-[15] pointer-events-none" />

              {/* Slide counter */}
              <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full glass border-white/10 text-xs font-mono text-white/80">
                {String(current + 1).padStart(2, '0')} /{' '}
                {String(slides.length).padStart(2, '0')}
              </div>

              {/* Nav arrows */}
              <button
                onClick={prev}
                aria-label="Previous slide"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full glass border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:border-cyan-400/50 transition-all">
                
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                aria-label="Next slide"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full glass border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:border-cyan-400/50 transition-all">
                
                <ChevronRight size={18} />
              </button>

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
                {slides.map((_, i) =>
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'w-6 bg-cyan-400' : 'w-1.5 bg-white/30 hover:bg-white/50'}`}
                  style={
                  i === current ?
                  {
                    boxShadow: '0 0 8px rgba(6, 182, 212, 0.8)'
                  } :
                  {}
                  } />

                )}
              </div>
            </div>

            {/* Floating accent badge — top-right so it never overlaps the scroll cue */}
            <motion.div
              animate={{
                y: [0, -8, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="absolute -top-5 -right-4 px-4 py-2.5 rounded-xl glass border-cyan-500/30 hidden md:flex items-center gap-2.5 z-30"
              style={{
                boxShadow: '0 0 25px rgba(6, 182, 212, 0.25)'
              }}>
              
              <span className="text-2xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">
                50+
              </span>
              <span className="text-xs text-slate-300 leading-tight">
                Projects
                <br />
                Delivered
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator — anchored bottom-left, clear of the slideshow */}
      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: 1.4,
          duration: 1
        }}
        className="absolute bottom-8 left-6 md:left-12 hidden lg:flex items-center gap-3 pointer-events-none">
        
        <div className="relative w-10 h-[1px] bg-gradient-to-r from-cyan-500/60 to-transparent overflow-hidden">
          <motion.div
            animate={{
              x: [-40, 40]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="absolute top-0 left-0 h-[1px] w-5 bg-cyan-400"
            style={{
              boxShadow: '0 0 8px rgba(6, 182, 212, 0.8)'
            }} />
          
        </div>
        <span className="text-[10px] text-slate-500 uppercase tracking-[0.3em] font-display">
          Scroll to explore
        </span>
      </motion.div>
    </section>);

}