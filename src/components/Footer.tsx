import { ArrowUp, Laptop, Heart } from 'lucide-react';

export default function Footer() {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 p-6 sm:p-8 xl:p-12 relative overflow-hidden border-t border-white/[0.04] pt-12 pb-16">
      
      <div className="container mx-auto max-w-7xl relative z-10 flex flex-col gap-10">
        
        {/* Top portion */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pb-6">
          
          {/* Trademark monogram logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 border border-amber-500/20 rounded-full flex items-center justify-center bg-neutral-900">
              <span className="font-display text-xs font-black text-amber-400">S.P</span>
            </div>
            <div>
              <p className="font-display font-bold text-sm tracking-widest text-white uppercase leading-none">SHIBAM PANDAB</p>
              <p className="font-mono text-[8px] text-neutral-500 uppercase tracking-widest mt-1">Frontend Developer</p>
            </div>
          </div>

          {/* Slogan */}
          <p className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest hidden lg:block select-none">
            SHIBAM PANDAB — PORTFOLIO 2026 — MADE IN INDIA WITH CODE
          </p>

          {/* Scroll back up anchor */}
          <button
            onClick={scrollUp}
            className="w-10 h-10 rounded-full border border-white/[0.06] hover:border-amber-400 hover:text-[#D4AF37] flex items-center justify-center text-neutral-400 cursor-none interactive-cursor bg-neutral-950/50 hover:scale-105 transition-all"
            aria-label="Scroll to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>

        </div>

        {/* Thick Animated Separator Rule */}
        <div className="relative h-[1px] w-full bg-neutral-900 rounded-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent animate-[pan_15s_linear_infinite]" />
        </div>

        {/* Bottom Metadata */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-neutral-500">
          
          {/* Copyrights */}
          <div className="text-center md:text-left">
            <p>© {currentYear} Shibam Pandab Portfolio. All rights reserved.</p>
            <p className="text-[10px] text-neutral-600 mt-1 uppercase tracking-widest font-sans flex items-center justify-center md:justify-start gap-1">
              Building responsive frontend experiences with React <Laptop className="w-3 h-3 text-amber-500" />
            </p>
          </div>

          {/* Social connections */}
          <div className="flex gap-6 uppercase tracking-wider text-[10px]">
            <a href="https://github.com/ShibamPandab" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors cursor-none interactive-cursor font-semibold">GitHub</a>
            <a href="https://www.linkedin.com/in/shibam-pandab" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors cursor-none interactive-cursor font-semibold">LinkedIn</a>
          </div>

          {/* Systems log */}
          <div className="text-center md:text-right hidden sm:block">
            <p className="text-[9px] text-[#D4AF37] tracking-widest font-bold uppercase leading-none">STATUS: AVAILABLE</p>
            <p className="text-[9px] text-neutral-600 mt-1 uppercase tracking-widest">FEEL FREE TO INQUIRE</p>
          </div>

        </div>

      </div>

    </footer>
  );
}
