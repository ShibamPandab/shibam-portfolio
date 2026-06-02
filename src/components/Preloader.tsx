import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Elegant, variable loading speed to make it feel organic (starts fast, slows down at 80, completes confidently)
    let current = 0;
    const interval = setInterval(() => {
      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsDone(true);
          setTimeout(() => {
            onComplete();
          }, 800); // Allow exit animations to finish
        }, 500);
      } else {
        const increment = Math.floor(Math.random() * 12) + 4;
        current = Math.min(100, current + increment);
        setProgress(current);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            y: -100,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-50 flex flex-col justify-between bg-neutral-950 p-8 md:p-16 select-none"
        >
          {/* Header metadata */}
          <div className="flex justify-between items-start text-[10px] tracking-widest font-mono text-neutral-500 uppercase">
            <div>SHIBAM PANDAB — PORTFOLIO v2.0</div>
            <div>STREETS OF LUXURY — EST. 2026</div>
          </div>

          {/* Monogram / Title */}
          <div className="flex flex-col items-center justify-center text-center">
            {/* Elegant Monogram */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="relative w-24 h-24 mb-6 border border-amber-500/20 rounded-full flex items-center justify-center bg-neutral-900/50 shadow-2xl shadow-amber-500/5"
            >
              <div className="absolute inset-1 rounded-full border border-dashed border-amber-500/10 animate-[spin_40s_linear_infinite]" />
              <span className="font-display text-3xl font-extrabold text-gold-gradient tracking-tighter">
                S P
              </span>
            </motion.div>

            {/* Display Title */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-display text-xl sm:text-2xl font-bold tracking-[0.25em] text-neutral-100 uppercase"
            >
              Shibam Pandab
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-2 text-xs font-mono tracking-widest text-amber-500/70 uppercase"
            >
              Digital Alchemist & Web Architect
            </motion.p>
          </div>

          {/* Progress Section */}
          <div className="w-full max-w-xl mx-auto flex flex-col gap-4">
            <div className="flex justify-between items-end font-mono text-xs text-neutral-500">
              <span className="tracking-widest uppercase text-neutral-400">Loading Experience</span>
              <span className="text-xl font-medium text-amber-400">{progress}%</span>
            </div>

            {/* Premium Gold Progress Bar */}
            <div className="w-full h-[2px] bg-neutral-800 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-amber-600 via-amber-400 to-yellow-200"
                style={{ width: `${progress}%` }}
                layoutId="loaderProgress"
                transition={{ ease: 'easeOut' }}
              />
            </div>

            {/* Status Logs */}
            <div className="h-6 overflow-hidden text-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={progress < 30 ? 'init' : progress < 60 ? 'modules' : progress < 90 ? 'render' : 'complete'}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="font-mono text-[9px] tracking-widest text-neutral-500 uppercase h-full flex items-center justify-center"
                >
                  {progress < 30 && 'Initializing systemic aesthetic engine...'}
                  {progress >= 30 && progress < 60 && 'Synthesizing premium layouts & meshes...'}
                  {progress >= 60 && progress < 90 && 'Polishing luxury gold accents & filters...'}
                  {progress >= 90 && 'System online. Welcoming viewer.'}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
