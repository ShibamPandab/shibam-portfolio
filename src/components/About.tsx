import { motion } from 'motion/react';
import { User, Compass, Bookmark, Award } from 'lucide-react';
import portraitImage from '../assets/portrait.jpeg';

export default function About() {
  const stats = [
    { label: 'Featured Projects', value: '3', description: 'Handcrafted frontend web applications.' },
    { label: 'Core Skills', value: '10+', description: 'HTML5, CSS3, ES6+, Git, and AI environments.' },
    { label: 'Responsive Design', value: '100%', description: 'Fully optimized for mobile and desktop screens.' },
  ];

  return (
    <section 
      id="about" 
      className="py-24 sm:py-32 bg-neutral-950 p-6 sm:p-8 xl:p-12 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute right-0 top-1/4 w-80 h-80 rounded-full bg-amber-500/2 blur-[80px] hidden md:block" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-16 md:mb-24">
          <span className="font-mono text-xs text-amber-500 tracking-widest font-semibold uppercase flex items-center gap-1.5 mb-3">
            <User className="w-3.5 h-3.5" /> 02 / GENESIS STORY
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white uppercase sm:w-[80%] lg:w-[60%]">
            Crafting Digital <span className="text-gold-gradient">Masterpieces</span> From Code & Intention
          </h2>
          <div className="w-24 h-[1px] bg-amber-500/50 mt-6" />
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Premium styled image frame */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[360px] aspect-[4/5] rounded-[24px] glass-card overflow-hidden group shadow-2xl p-2.5"
            >
              {/* Image element with premium monochrome + luxury gold shade blend ratio */}
              <div className="relative w-full h-full rounded-[14px] overflow-hidden">
                <img 
                  src={portraitImage} 
                  alt="Shibam Pandab Profile Portrait" 
                  className="w-full h-full object-cover object-center grayscale contrast-[1.05] brightness-90 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700"
                />
                {/* Premium Vignette Lighting Effect */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,transparent_40%,rgba(5,5,5,0.75))] pointer-events-none" />
                
                {/* Gold layer overlay with color burn blending */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-amber-500/12 to-transparent mix-blend-color-burn" />
                
                {/* Dynamic Gold Light Highlight on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_35%,rgba(212,175,55,0.18),transparent_65%)] transition-opacity duration-700 pointer-events-none" />
                
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-neutral-950/15 group-hover:opacity-0 transition-opacity duration-500" />
              </div>

              {/* Float aesthetic stamp */}
              <div className="absolute bottom-6 right-6 p-4 glass-card rounded-[14px] flex items-center gap-3 backdrop-blur-md border border-amber-500/20 shadow-xl group-hover:translate-x-[-4px] transition-transform duration-300">
                <Award className="w-6 h-6 text-amber-400" />
                <div>
                  <p className="font-mono text-[8px] text-neutral-400 uppercase tracking-widest leading-none">CREATIVE DEV</p>
                  <p className="font-display font-bold text-xs text-white uppercase mt-1">PORTFOLIO 2026</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Biography and goals */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-6 text-left"
            >
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Engineering visual emotions, one pixel at a time.
              </h3>
              
              <p className="text-neutral-400 font-sans text-base leading-relaxed">
                As a developer who values clean visual design, I exist at the intersection of structured code and visual balance. Specializing in React and responsive design, my goal is to build digital interfaces that look polished, load quickly, and perform reliably across all platforms.
              </p>

              {/* Goals Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {/* Micro goal card 1 */}
                <div className="p-5 glass-card rounded-[16px] border border-white/[0.04] text-left">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center mb-3">
                    <Compass className="w-4 h-4 text-amber-400" />
                  </div>
                  <h4 className="font-display font-bold text-white text-sm uppercase tracking-wide">My Vision</h4>
                  <p className="text-neutral-500 text-xs mt-1.5 leading-relaxed font-sans">
                    Creating responsive canvases that communicate elegance, utilizing clean layout grids and typography to present content with balance.
                  </p>
                </div>

                {/* Micro goal card 2 */}
                <div className="p-5 glass-card rounded-[16px] border border-white/[0.04] text-left">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center mb-3">
                    <Bookmark className="w-4 h-4 text-amber-400" />
                  </div>
                  <h4 className="font-display font-bold text-white text-sm uppercase tracking-wide">My Focus</h4>
                  <p className="text-neutral-500 text-xs mt-1.5 leading-relaxed font-sans">
                    Squeezing performance from modern frameworks, assuring fast page loads and smooth user transitions.
                  </p>
                </div>
              </div>

              {/* Horizontal animated stats */}
              <div className="pt-8 border-t border-white/[0.06] grid grid-cols-1 sm:grid-cols-3 gap-6">
                {stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col items-start">
                    <h5 className="font-display text-4xl font-extrabold text-[#D4AF37] tracking-tight">{stat.value}</h5>
                    <p className="font-display text-xs text-white font-semibold mt-1 tracking-wider uppercase">{stat.label}</p>
                    <p className="text-[10px] text-neutral-500 mt-1 leading-relaxed">{stat.description}</p>
                  </div>
                ))}
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
