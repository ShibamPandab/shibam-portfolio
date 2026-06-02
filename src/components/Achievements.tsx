import { motion } from 'motion/react';
import { Award, Clock, Users, BookOpen, Star } from 'lucide-react';
import { Achievement } from '../types';

export default function Achievements() {
  const achievementsList: Achievement[] = [
    {
      id: 'ach-01',
      title: 'Featured Projects',
      value: 3,
      suffix: '',
      description: 'Building polished, responsive frontend web experiences.'
    },
    {
      id: 'ach-02',
      title: 'Hours of Coding',
      value: 500,
      suffix: '+',
      description: 'Acquiring responsive design layouts, React states, and modern styling.'
    },
    {
      id: 'ach-03',
      title: 'GitHub Commits',
      value: 250,
      suffix: '+',
      description: 'Maintaining version control history, branches, and clean code repositories.'
    },
    {
      id: 'ach-04',
      title: 'Tech Tools',
      value: 10,
      suffix: '+',
      description: 'Leveraging React, TypeScript, Tailwind, Figma, and AI environments.'
    }
  ];

  const iconsMap = [
    Award,     // Projects
    Clock,     // Hours
    Users,     // Clients
    BookOpen   // Tech
  ];

  return (
    <section 
      id="achievements" 
      className="py-24 sm:py-32 bg-neutral-950 p-6 sm:p-8 xl:p-12 relative overflow-hidden"
    >
      {/* Glow bulb */}
      <div className="absolute right-[10%] bottom-[15%] w-80 h-80 rounded-full bg-amber-500/2 blur-[90px]" />

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Statistics bento grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {achievementsList.map((ach, idx) => {
            const Icon = iconsMap[idx] || Award;
            
            return (
              <motion.div
                key={ach.id}
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="p-6 sm:p-8 rounded-[24px] glass-card flex flex-col items-center justify-center text-center shadow-2xl relative hover:border-[#D4AF37]/30 transition-all duration-300 group"
              >
                {/* Floating graphic element background */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-600/0 via-[#D4AF37]/45 to-amber-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Gold Circle Frame around Icon */}
                <div className="w-14 h-14 rounded-full glass group-hover:border-[#D4AF37]/40 flex items-center justify-center mb-6 group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.15)] transition-all duration-300 relative">
                  <div className="absolute inset-1 rounded-full border border-dashed border-[#D4AF37]/5 group-hover:border-[#D4AF37]/15 animate-[spin_30s_linear_infinite]" />
                  <Icon className="w-5 h-5 text-amber-400" />
                </div>

                {/* Styled Oversized Stat Figures */}
                <h3 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tighter text-white uppercase select-none">
                  <span className="text-gold-gradient">{ach.value}</span>
                  <span className="text-amber-500/80">{ach.suffix}</span>
                </h3>

                {/* Subtitle */}
                <p className="font-display font-extrabold text-neutral-200 text-xs sm:text-sm uppercase tracking-wider mt-3 select-none leading-none">
                  {ach.title}
                </p>

                {/* Small details description paragraphs */}
                <p className="text-neutral-500 text-xs mt-3 leading-relaxed max-w-[200px] select-none font-sans">
                  {ach.description}
                </p>

                {/* Little decoration card stars */}
                <div className="mt-4 flex gap-0.5 opacity-0 group-hover:opacity-70 transition-opacity duration-300">
                  <Star className="w-2.5 h-2.5 text-amber-500 fill-amber-500" />
                  <Star className="w-2.5 h-2.5 text-amber-500 fill-amber-500" />
                  <Star className="w-2.5 h-2.5 text-amber-500 fill-amber-500" />
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
