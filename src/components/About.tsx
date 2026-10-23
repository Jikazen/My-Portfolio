import React from 'react';
import { motion } from 'framer-motion';
import { ASSETS, SITE } from '../data/site';
export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image/Visual Side */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true,
              margin: '-100px'
            }}
            transition={{
              duration: 0.6
            }}
            className="w-full lg:w-1/2 relative">
            
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative Elements */}
              <div className="absolute inset-0 border-2 border-cyan-500/20 rounded-2xl rotate-6 transition-transform hover:rotate-12 duration-500" />
              <div className="absolute inset-0 border-2 border-violet-500/20 rounded-2xl -rotate-6 transition-transform hover:-rotate-12 duration-500" />

              {/* Main Image Container */}
              <div className="absolute inset-0 glass-card rounded-2xl overflow-hidden p-2">
                <div className="w-full h-full bg-[#0a0a16] rounded-xl relative overflow-hidden group">
                  {/* Ambient gradient behind photo */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/15 via-transparent to-violet-500/15 z-[1]" />

                  {/* Profile Photo */}
                  <img
                    src={ASSETS.aboutPhoto}
                    alt={SITE.name}
                    className="absolute inset-0 w-full h-full object-cover object-top z-[2] group-hover:scale-105 transition-transform duration-700" />
                  

                  {/* Bottom gradient for depth/legibility */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0a0a16] via-[#0a0a16]/40 to-transparent z-[3]" />

                  {/* Neon corner accents */}
                  <div
                    className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-cyan-400/70 rounded-tl-lg z-[4]"
                    style={{
                      filter: 'drop-shadow(0 0 6px rgba(6, 182, 212, 0.6))'
                    }} />
                  
                  <div
                    className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-violet-400/70 rounded-tr-lg z-[4]"
                    style={{
                      filter: 'drop-shadow(0 0 6px rgba(139, 92, 246, 0.6))'
                    }} />
                  
                  <div
                    className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-violet-400/70 rounded-bl-lg z-[4]"
                    style={{
                      filter: 'drop-shadow(0 0 6px rgba(139, 92, 246, 0.6))'
                    }} />
                  
                  <div
                    className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-cyan-400/70 rounded-br-lg z-[4]"
                    style={{
                      filter: 'drop-shadow(0 0 6px rgba(6, 182, 212, 0.6))'
                    }} />
                  

                  {/* Name tag */}
                  <div
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 z-[5] px-4 py-1.5 rounded-full glass border-cyan-500/30 backdrop-blur-md"
                    style={{
                      boxShadow: '0 0 20px rgba(6, 182, 212, 0.2)'
                    }}>
                    
                    <span className="text-xs font-display font-semibold tracking-wider text-white whitespace-nowrap">
                      {SITE.name}
                    </span>
                  </div>

                  {/* Scanning line effect */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-cyan-400/50 blur-[2px] animate-[scan_3s_ease-in-out_infinite] z-[4]" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true,
              margin: '-100px'
            }}
            transition={{
              duration: 0.6
            }}
            className="w-full lg:w-1/2">
            
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-cyan-500" />
              <h2 className="text-sm font-display tracking-widest text-cyan-400 uppercase">
                About Me
              </h2>
            </div>

            <h3 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white">
              Transforming Ideas into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Meaningful
              </span>{' '}
              Visual Experiences
            </h3>

            <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
              <p>
                I am a passionate multidisciplinary designer specializing in
                Graphic Design, UI/UX, and Video Editing. My approach blends
                technical precision with creative vision to craft compelling
                narratives and intuitive interfaces.
              </p>
              <p>
                Currently open to freelance projects and collaborations where I
                can apply my skills in a fast-paced, innovative environment. I
                thrive on solving complex design problems and transforming
                abstract concepts into tangible, visually stunning realities.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="glass-card p-4 rounded-xl border-l-2 border-l-cyan-500">
                <h4 className="text-3xl font-display font-bold text-white mb-1">
                  3+
                </h4>
                <p className="text-sm text-slate-400">
                  Years of Design Experience
                </p>
              </div>
              <div className="glass-card p-4 rounded-xl border-l-2 border-l-violet-500">
                <h4 className="text-3xl font-display font-bold text-white mb-1">
                  50+
                </h4>
                <p className="text-sm text-slate-400">Projects Completed</p>
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-3 mt-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
                Computer Science
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {SITE.location}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}