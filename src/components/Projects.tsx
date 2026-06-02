import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Eye, Sparkles, Code } from 'lucide-react';
import { Project } from '../types';

export default function Projects() {
  const projectsList: Project[] = [
    {
      id: 'proj-01',
      title: 'Best of Boston',
      shortDescription: 'Luxury fashion-inspired ecommerce experience with immersive product browsing, premium animations, responsive layouts, and modern frontend design.',
      description: 'A polished, high-contrast digital catalogue showcasing curated apparel. Implemented smooth interactive hover states, fluid grid columns, clean modal product details, and structured page mechanics.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200',
      tech: ['React', 'Tailwind V4', 'Motion', 'Vite'],
      liveUrl: 'https://github.com/ShibamPandab/best-of-boston',
      githubUrl: 'https://github.com/ShibamPandab/best-of-boston',
      category: 'E-commerce / UI Showroom',
      stats: [
        { label: 'Lighthouse Perf', value: '98' },
        { label: 'Responsive layouts', value: '100%' },
        { label: 'CSS Animations', value: 'Fluid' }
      ]
    },
    {
      id: 'proj-02',
      title: "Umberto's North End",
      shortDescription: 'Restaurant website inspired by the iconic Boston pizzeria. Features menu presentation, location information, responsive design, and customer-focused user experience.',
      description: 'A modern landing page designed to celebrate local dining. Built with fluid grid menu boards, crisp typography, clean contact routes, and highly responsive page transitions.',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=1200',
      tech: ['HTML5', 'Vanilla CSS', 'JavaScript', 'Responsive Grid'],
      liveUrl: 'https://github.com/ShibamPandab/umberto-north-end',
      githubUrl: 'https://github.com/ShibamPandab/umberto-north-end',
      category: 'Business Landing Page',
      stats: [
        { label: 'Interactive Menu', value: 'Active' },
        { label: 'Mobile Score', value: '95+' },
        { label: 'Customer Experience', value: 'Grounded' }
      ]
    },
    {
      id: 'proj-03',
      title: 'Personal Portfolio',
      shortDescription: 'A premium developer portfolio showcasing frontend projects, AI-assisted workflows, responsive design skills, and modern web development practices.',
      description: 'This exact dark-themed black and gold workspace. Features optimized page assets, responsive mobile frames, elegant custom cursors, and robust TypeScript compiler safety.',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200',
      tech: ['React', 'TypeScript', 'Tailwind V4', 'Vite'],
      liveUrl: 'http://localhost:3000',
      githubUrl: 'https://github.com/ShibamPandab/midnight-luxury-portfolio',
      category: 'Developer Portfolio',
      stats: [
        { label: 'Bundle Speed', value: '< 1s' },
        { label: 'Theme Balance', value: 'Gold' },
        { label: 'Type Checking', value: 'Strict' }
      ]
    }
  ];

  return (
    <section 
      id="projects" 
      className="py-24 sm:py-32 bg-neutral-950 p-6 sm:p-8 xl:p-12 relative overflow-hidden"
    >
      {/* Visual background layers */}
      <div className="absolute left-[5%] bottom-[10%] w-[450px] h-[450px] rounded-full bg-amber-500/[0.015] blur-[140px] hidden md:block" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-start text-left mb-16 md:mb-24">
          <span className="font-mono text-xs text-amber-500 tracking-widest font-semibold uppercase flex items-center gap-1.5 mb-3">
            <Sparkles className="w-3.5 h-3.5" /> 04 / EXHIBITIONS
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white uppercase sm:w-[80%] lg:w-[60%]">
            Selected <span className="text-gold-gradient">Masterpieces</span>
          </h2>
          <p className="mt-4 text-neutral-400 max-w-xl text-sm sm:text-base font-sans">
            A handpicked curation of responsive web applications built with modern tools and clean, optimized layouts.
          </p>
          <div className="w-24 h-[1px] bg-amber-500/50 mt-6" />
        </div>

        {/* Large Premium Project Blocks - Framer-portfolio Style */}
        <div className="space-y-20 md:space-y-28">
          {projectsList.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                
                {/* Visual Block (Alternate Left/Right to generate beautiful rhythm) */}
                <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'} relative group`}>
                  
                  {/* Outer border container */}
                  <div className="relative w-full aspect-video rounded-[24px] glass-card overflow-hidden p-2 shadow-2xl">
                    
                    {/* Inner image frame */}
                    <div className="relative w-full h-full rounded-[16px] overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100"
                        loading="lazy"
                      />
                      
                      {/* Dark overlay that fades on hover */}
                      <div className="absolute inset-0 bg-neutral-950/25 group-hover:opacity-0 transition-opacity duration-300" />
                      
                      {/* Luxury hover frame elements */}
                      <div className="absolute inset-0 border-[8px] border-neutral-950/20 pointer-events-none" />
                      
                      {/* Top metadata badge */}
                      <div className="absolute top-4 left-4 px-3 py-1 bg-neutral-950/80 border border-white/[0.06] backdrop-blur-md rounded-full font-mono text-[9px] tracking-widest text-[#D4AF37] uppercase">
                        {project.category}
                      </div>

                    </div>
                  </div>

                  {/* Absolute backdrop glow behind visual frame */}
                  <div className="absolute -inset-1 rounded-[24px] bg-amber-500/10 opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500 z-[-1]" />
                </div>

                {/* Content Block (Alternate Left/Right) */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-2 text-left' : 'lg:order-1 text-left'} flex flex-col justify-center`}>
                  
                  {/* Floating ID badge */}
                  <div className="font-mono text-xs text-neutral-500 tracking-widest uppercase mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> CODE MODULE 0{index + 1}
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white uppercase group-hover:text-amber-400">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 text-neutral-400 text-sm sm:text-base font-sans leading-relaxed">
                    {project.shortDescription}
                  </p>
                  
                  <p className="mt-2 text-neutral-500 text-xs font-sans leading-relaxed">
                    {project.description}
                  </p>

                  {/* Metric highlights sheet */}
                  <div className="mt-6 py-4 px-5 glass-card rounded-2xl grid grid-cols-3 gap-4">
                    {project.stats.map((stat, sIdx) => (
                      <div key={sIdx}>
                        <p className="font-display font-extrabold text-white text-sm sm:text-base">{stat.value}</p>
                        <p className="font-mono text-[8px] text-neutral-500 uppercase tracking-widest mt-0.5">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.tech.map((t) => (
                      <span 
                        key={t}
                        className="px-2.5 py-1 bg-neutral-900 border border-white/[0.05] rounded-full font-mono text-[9px] tracking-widest text-neutral-400 uppercase"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* CTA Links */}
                  <div className="mt-8 flex gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2.5 bg-neutral-900 border border-white/[0.08] hover:border-amber-400 text-white hover:text-amber-400 font-semibold tracking-wider text-xs uppercase rounded-full flex items-center gap-2 transition-all duration-300 cursor-none interactive-cursor"
                    >
                      Live Demo <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2.5 border border-white/[0.04] hover:border-neutral-500 text-neutral-400 hover:text-white font-semibold tracking-wider text-xs uppercase rounded-full flex items-center gap-2 transition-all duration-300 cursor-none interactive-cursor"
                    >
                      GitHub Repository <Github className="w-3.5 h-3.5" />
                    </a>
                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
