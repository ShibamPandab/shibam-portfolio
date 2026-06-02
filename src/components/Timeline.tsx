import { motion } from 'motion/react';
import { Calendar, GraduationCap, ChevronRight, Compass } from 'lucide-react';
import { TimelineItem } from '../types';

export default function Timeline() {
  const experiences: TimelineItem[] = [
    {
      id: 'time-01',
      period: '2021',
      title: 'Learning HTML & Semantics',
      companyOrRole: 'Structure Foundations',
      description: 'Mastered the absolute rules of semantic markup, accessibility structures, and metadata, setting up the basic geometries of web design.',
      tech: ['HTML5', 'SEO Semantics', 'ARIA Tags']
    },
    {
      id: 'time-02',
      period: '2022',
      title: 'Evolving with CSS & Responsive Design',
      companyOrRole: 'Layout Orchestration',
      description: 'Dived deep into fluid mechanics, flexing grids, Tailwind classes, and responsive design systems. Establishing custom screen boundaries.',
      tech: ['CSS3', 'Flexbox / Grid', 'Tailwind CSS']
    },
    {
      id: 'time-03',
      period: '2023',
      title: 'Infiltrating JavaScript ES6+ logic',
      companyOrRole: 'Programmatic Systems',
      description: 'Engineered programmatic interactions, DOM nodes tracking, modular ES imports, and browser storage integrations.',
      tech: ['ECMAScript Next', 'DOM Controller', 'Dynamic Classes']
    },
    {
      id: 'time-04',
      period: '2024-2025',
      title: 'Building Projects & Modern SPA Apps',
      companyOrRole: 'Full Stack Integration',
      description: 'Assembled full-scale React environments with state syncing, APIs fetching, customized canvas loaders, and real performance audits.',
      tech: ['React.js', 'Next.js', 'Rest API Protocols']
    },
    {
      id: 'time-05',
      period: '2025-Present',
      title: 'Freelance & Premium Collaborations',
      companyOrRole: 'Bespoke Client Solutions',
      description: 'Providing high-end portfolio curation, immersive SaaS products, and custom interfaces for enterprise clients globally.',
      tech: ['Luxury UI Craft', 'Production Deploy', 'Framer Motion']
    }
  ];

  return (
    <section 
      id="experience" 
      className="py-24 sm:py-32 bg-neutral-900/40 p-6 sm:p-8 xl:p-12 relative overflow-hidden"
    >
      <div className="absolute right-1/4 top-1/4 w-80 h-80 bg-amber-500/1 rounded-full blur-[100px]" />

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-start text-left mb-16 md:mb-24">
          <span className="font-mono text-xs text-amber-500 tracking-widest font-semibold uppercase flex items-center gap-1.5 mb-3">
            <Calendar className="w-3.5 h-3.5" /> 05 / CHRONOLOGY
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white uppercase">
            Evolution <span className="text-gold-gradient">Timeline</span>
          </h2>
          <p className="mt-4 text-neutral-400 max-w-xl text-sm sm:text-base font-sans">
            Tracking the technical evolution from foundational concepts to enterprise aesthetics and high-ticket client deployment.
          </p>
          <div className="w-24 h-[1px] bg-amber-500/50 mt-6" />
        </div>

        {/* Timeline Grid (Self-adjusting: Desktop horizontal, Mobile/Tablet vertical) */}
        <div className="relative mt-12 md:mt-20">
          
          {/* Desktop Connection line (hidden on mobile) */}
          <div className="absolute top-1/2 left-0 right-0 h-[1.5px] bg-neutral-800 hidden md:block z-0" style={{ transform: 'translateY(-50%)' }} />
          <div className="absolute top-1/2 left-0 w-3/4 h-[1.5px] bg-gradient-to-r from-amber-600 via-amber-400 to-transparent hidden md:block z-0" style={{ transform: 'translateY(-50%)' }} />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative flex flex-col items-start text-left group"
              >
                
                {/* Visual Step bubble / Indicator */}
                <div className="flex items-center md:flex-col md:items-start gap-4 md:gap-0 w-full mb-4 md:mb-6">
                  
                  {/* Circle */}
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center relative z-10 group-hover:border-amber-400 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all duration-300">
                    <span className="font-mono text-xs font-bold text-amber-400">0{idx + 1}</span>
                  </div>

                  {/* Period badge (on top for desktop grid, right for mobile) */}
                  <div className="px-2.5 py-1 glass rounded-md font-mono text-[10px] tracking-widest text-[#D4AF37] uppercase md:mt-4">
                    {exp.period}
                  </div>

                </div>

                {/* Card details */}
                <div className="p-5 sm:p-6 rounded-[20px] glass-card flex-1 w-full transition-all duration-300">
                  <h3 className="font-display font-extrabold text-white text-sm sm:text-base tracking-tight uppercase">
                    {exp.title}
                  </h3>
                  
                  <p className="font-mono text-[9px] text-neutral-500 mt-1 uppercase tracking-wider">
                    {exp.companyOrRole}
                  </p>

                  <p className="text-neutral-400 text-xs mt-3 leading-relaxed font-sans">
                    {exp.description}
                  </p>

                  {/* Micro tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {exp.tech?.map((t) => (
                      <span 
                        key={t}
                        className="px-2 py-0.5 bg-neutral-900 border border-white/[0.04] rounded-md font-mono text-[8px] text-neutral-400 uppercase tracking-widest"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
