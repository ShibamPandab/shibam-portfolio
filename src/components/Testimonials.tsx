import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Testimonial } from '../types';

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 'test-01',
      name: 'Julian Vance',
      role: 'Peer Developer',
      company: 'Open Source Contributor',
      feedback: 'Shibam is a dedicated frontend developer who helped build a polished, responsive web layout. He has a great eye for design and works well with CSS transitions. Extremely reliable and eager to learn.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300'
    },
    {
      id: 'test-02',
      name: 'Elowen Frost',
      role: 'UI Designer',
      company: 'Web Design Collaborator',
      feedback: 'Collaborating with Shibam was a great experience. He built a structured menu layout that works perfectly on mobile screens, and handled git branching cleanly. Eager to take on challenging responsive layouts.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300'
    },
    {
      id: 'test-03',
      name: 'Marcus Sterling',
      role: 'Project Contributor',
      company: 'Frontend Studio',
      feedback: 'Shibam helped build a portfolio interface that loads fast and looks beautiful. He leveraged modern tools like Vite and Tailwind V4 efficiently. A highly recommended frontend collaborator.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setActiveIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000); // Auto slide every 6 seconds

    return () => resetTimeout();
  }, [activeIndex, testimonials.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const activeTest = testimonials[activeIndex];

  return (
    <section 
      id="testimonials" 
      className="py-24 sm:py-32 bg-neutral-900/50 p-6 sm:p-8 xl:p-12 relative overflow-hidden"
    >
      <div className="absolute left-[30%] top-1/4 w-96 h-96 bg-amber-500/[0.015] rounded-full blur-[110px] hidden md:block" />
      
      <div className="container mx-auto max-w-5xl relative z-10 text-center">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-16 md:mb-20">
          <span className="font-mono text-xs text-amber-500 tracking-widest font-semibold uppercase flex items-center gap-1.5 mb-3">
            <Quote className="w-3.5 h-3.5 rotate-180 text-amber-500" /> 07 / APPRECIATIONS
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-white uppercase select-none">
            Collaborator <span className="text-gold-gradient">Feedback</span>
          </h2>
          <div className="w-16 h-[1px] bg-amber-500/50 mt-6" />
        </div>

        {/* Carousel Window */}
        <div className="relative min-h-[380px] sm:min-h-[320px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTest.id}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="w-full max-w-4xl p-8 sm:p-12 rounded-[28px] glass-card flex flex-col md:flex-row items-center gap-8 text-left shadow-2xl relative"
            >
              
              {/* Client Face Profile */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border border-white/[0.08] flex-shrink-0">
                <img 
                  src={activeTest.image} 
                  alt={activeTest.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale brightness-95" 
                />
                <div className="absolute inset-0 bg-neutral-950/25" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/20 via-transparent to-transparent mix-blend-overlay" />
              </div>

              {/* Bio & Review Body */}
              <div className="flex-1">
                
                {/* Visual Stars */}
                <div className="flex gap-1 mb-4 select-none">
                  {[...Array(activeTest.rating)].map((_, i) => (
                    <Star key={i} className="w-4.5 h-4.5 text-amber-500 fill-amber-500" />
                  ))}
                </div>

                {/* Feedback Quote */}
                <p className="font-sans text-neutral-300 text-sm sm:text-base leading-relaxed italic">
                  "{activeTest.feedback}"
                </p>

                {/* Client Identification info */}
                <div className="mt-6 pt-4 border-t border-white/[0.04] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="font-display font-extrabold text-[#D4AF37] text-sm uppercase tracking-wide">
                      {activeTest.name}
                    </h4>
                    <p className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest mt-0.5">
                      {activeTest.role}, {activeTest.company}
                    </p>
                  </div>
                  
                  <div className="hidden sm:block">
                    <Quote className="w-8 h-8 text-neutral-800 opacity-20" />
                  </div>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Pagination & Manual Navigation Controls */}
        <div className="flex justify-between items-center max-w-xs mx-auto mt-8 select-none">
          
          <button
            onClick={handlePrev}
            className="w-10 h-10 glass hover:border-amber-400 rounded-full flex items-center justify-center text-neutral-400 hover:text-amber-400 cursor-none interactive-cursor transition-all"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => { resetTimeout(); setActiveIndex(idx); }}
                className={`h-2 rounded-full cursor-none interactive-cursor transition-all ${
                  idx === activeIndex ? 'w-6 bg-amber-400' : 'w-2 bg-neutral-800'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-10 h-10 glass hover:border-amber-400 rounded-full flex items-center justify-center text-neutral-400 hover:text-amber-400 cursor-none interactive-cursor transition-all"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

        </div>

      </div>
    </section>
  );
}
