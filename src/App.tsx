import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import {
  // Layout
  Navbar,
  Footer,
  // UI / Effects
  LoadingScreen,
  ParticlesBackground,
  SupportChat,
  // Sections (render order)
  Hero,
  About,
  Skills,
  Experiences,
  Projects,
  Achievements,
  Services,
  Resume,
  Contact } from
'./components';
export function App() {
  const [loading, setLoading] = useState(true);
  return (
    <div className="relative min-h-screen bg-[#030308] text-slate-300 font-sans overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading &&
      <>
          <ParticlesBackground />
          <Navbar />

          <main>
            {/* 1 · Intro */}
            <Hero />
            {/* 2 · Who I am */}
            <About />
            {/* 3 · What I can do */}
            <Skills />
            {/* 4 · Where I've worked */}
            <Experiences />
            {/* 5 · Selected work */}
            <Projects />
            {/* 6 · Recognition */}
            <Achievements />
            {/* 7 · Offerings */}
            <Services />
            {/* 8 · Background */}
            <Resume />
            {/* 9 · Get in touch */}
            <Contact />
          </main>

          <Footer />

          {/* Floating support assistant (sits left of the back-to-top arrow) */}
          <SupportChat />
        </>
      }
    </div>);

}