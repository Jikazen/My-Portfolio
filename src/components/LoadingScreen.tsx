import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ASSETS } from '../data/site';
export function LoadingScreen({ onComplete }: {onComplete: () => void;}) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);
    return () => clearInterval(interval);
  }, [onComplete]);
  return (
    <motion.div
      initial={{
        opacity: 1
      }}
      exit={{
        opacity: 0,
        y: -50,
        filter: 'blur(10px)'
      }}
      transition={{
        duration: 0.8,
        ease: 'easeInOut'
      }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030308]">
      
      <div className="relative flex flex-col items-center">
        {/* Futuristic Hexagon Spinner */}
        <div className="relative w-32 h-32 mb-8">
          <motion.div
            animate={{
              rotate: 360
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'linear'
            }}
            className="absolute inset-0 border-t-2 border-cyan-400 rounded-full opacity-70"
            style={{
              filter: 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.8))'
            }} />
          
          <motion.div
            animate={{
              rotate: -360
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear'
            }}
            className="absolute inset-2 border-b-2 border-violet-500 rounded-full opacity-70"
            style={{
              filter: 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.8))'
            }} />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.img
              src={ASSETS.logo}
              alt="JC Graphix & Cuts logo"
              animate={{
                scale: [1, 1.06, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="w-16 h-16 rounded-2xl object-cover border border-white/10"
              style={{
                boxShadow: '0 0 25px rgba(6, 182, 212, 0.4)'
              }} />
            
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden relative">
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-400 to-violet-500"
            initial={{
              width: 0
            }}
            animate={{
              width: `${progress}%`
            }}
            transition={{
              ease: 'easeOut'
            }}
            style={{
              boxShadow: '0 0 10px rgba(6, 182, 212, 0.5)'
            }} />
          
        </div>

        {/* Loading Text */}
        <div className="mt-4 flex items-center gap-4 text-sm font-display tracking-widest text-slate-400 uppercase">
          <span>Initializing System</span>
          <span className="text-cyan-400 font-bold">
            {Math.min(progress, 100)}%
          </span>
        </div>
      </div>
    </motion.div>);

}