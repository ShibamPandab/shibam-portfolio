import { motion } from 'motion/react';
import { Compass, Sparkles, Layers, Layers2, Monitor, Code, Check } from 'lucide-react';
import { Service } from '../types';

export default function Services() {
  const servicesList: Service[] = [
    {
      id: 'srv-01',
      title: 'Website Design',
      description: 'Architecting gorgeous custom designs built around core marketing guides and luxury typographic rules.',
      details: ['Bespoke Aesthetic Guides', 'Tailored Typography Specs', 'Precision Prototyping']
    },
    {
      id: 'srv-02',
      title: 'Landing Pages',
      description: 'Forming high-converting, snappy landing zones focused on user interactions, and lightning performance indices.',
      details: ['Sub-1s Initial Rendering', 'Strong CTA Optimization', 'Interactive Element Reveals']
    },
    {
      id: 'srv-03',
      title: 'Portfolio Websites',
      description: 'Creating impressive personal brand showcases designed to showcase skills and convert high-ticket clients.',
      details: ['Cinematic Openers', 'Dynamic Interactive Charts', 'Fluid Smooth Scrolling']
    },
    {
      id: 'srv-04',
      title: 'Business Websites',
      description: 'Assembling elegant corporate sites reflecting executive sophistication, safety, and brand reliability.',
      details: ['Modern Structural Layouts', 'Solid Security Alignments', 'SEO Analytics Embedded']
    },
    {
      id: 'srv-05',
      title: 'Frontend Development',
      description: 'Converting Figma file structures into modular React and Next.js applications, matching visual layout specs with 100% precision.',
      details: ['React, Next.js & TypeScript', 'Flawlessness styling', 'Tailwind Utility optimization']
    },
    {
      id: 'srv-06',
      title: 'UI / UX Design',
      description: 'Formulating client-centric user journeys, wires, and highly functional prototypes utilizing state-of-the-art software.',
      details: ['User Flow Explorations', 'High-Fidelity Wires', 'Comprehensive Interactivity Map']
    }
  ];

  // Map appropriate icons for each service
  const iconsMap = [
    Layers,       // Website Design
    Sparkles,     // Landing Pages
    Monitor,      // Portfolio Websites
    Layers2,      // Business Websites
    Code,         // Frontend Development
    Compass       // UI/UX Design
  ];

  return (
    <section 
      id="services" 
      className="py-24 sm:py-32 bg-neutral-950 p-6 sm:p-8 xl:p-12 relative overflow-hidden"
    >
      <div className="absolute right-10 bottom-10 w-96 h-96 rounded-full bg-amber-500/[0.01] blur-[120px]" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-start text-left mb-16 md:mb-24">
          <span className="font-mono text-xs text-amber-500 tracking-widest font-semibold uppercase flex items-center gap-1.5 mb-3">
            <Layers className="w-3.5 h-3.5" /> 06 / OFFERS
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white uppercase">
            Signature <span className="text-gold-gradient">Services</span>
          </h2>
          <p className="mt-4 text-neutral-400 max-w-xl text-sm sm:text-base font-sans">
            Meticulously engineered service packs mapping visual mastery to stable code, creating digital assets valued in excess of $5,000+.
          </p>
          <div className="w-24 h-[1px] bg-amber-500/50 mt-6" />
        </div>

        {/* Services Grid (Responsive layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          {servicesList.map((service, index) => {
            const IconComponent = iconsMap[index] || Code;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="p-6 sm:p-8 rounded-[24px] glass-card flex flex-col justify-between text-left group hover:-translate-y-1.5 transition-all duration-300 shadow-xl"
              >
                <div>
                  
                  {/* Icon Card */}
                  <div className="w-12 h-12 rounded-2xl bg-neutral-900 border border-white/[0.06] flex items-center justify-center mb-6 group-hover:border-[#D4AF37]/40 group-hover:scale-105 transition-all duration-300">
                    <IconComponent className="w-5 h-5 text-amber-400" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-black text-white text-lg uppercase tracking-tight">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-neutral-400 text-xs sm:text-sm leading-relaxed font-sans">
                    {service.description}
                  </p>

                  {/* Detail Bullets */}
                  <ul className="mt-6 space-y-2 border-t border-white/[0.04] pt-5">
                    {service.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2 text-xs font-mono text-neutral-500 group-hover:text-neutral-400 transition-colors duration-300">
                        <Check className="w-3 h-3 text-[#D4AF37] flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>

                </div>

                {/* Aesthetic bottom bar */}
                <div className="h-[2px] w-full bg-neutral-800 rounded-full mt-8 overflow-hidden">
                  <div className="h-full w-0 group-hover:w-full bg-gradient-to-r from-amber-600 to-yellow-400 rounded-full transition-all duration-500 ease-out" />
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
