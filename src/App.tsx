import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Services from './components/Services';
import Achievements from './components/Achievements';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  // Unified scroll section tracking utilizing high-performance IntersectionObserver
  useEffect(() => {
    if (loading) return;

    const sections = ['home', 'about', 'skills', 'projects', 'experience', 'services', 'contact'];
    
    // sweet spot: trigger when section covers middle 40% of page
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px',
      threshold: 0.1,
    };

    const activeObservers = sections.map((sectionId) => {
      const element = document.getElementById(sectionId);
      if (!element) return null;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(sectionId);
          }
        });
      }, observerOptions);

      observer.observe(element);
      return { observer, element };
    });

    return () => {
      activeObservers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.element);
        }
      });
    };
  }, [loading]);

  return (
    <>
      {/* Cinematic entry preloader */}
      <Preloader onComplete={() => setLoading(false)} />

      <AnimatePresence mode="wait">
        {!loading && (
          <div className="relative min-h-screen bg-[#050505] text-[#FFFFFF] font-sans antialiased selection:bg-[#D4AF37] selection:text-[#050505] overflow-x-hidden">
            
            {/* Liquid customizable custom cursor */}
            <CustomCursor />

            {/* Floating glassmorphic navigation bar */}
            <Navbar activeSection={activeSection} />

            {/* Scrolling experience layout */}
            <main className="relative z-10">
              
              {/* Home / Hero and dynamic particle canvas */}
              <Hero />
              
              {/* About / Genesis narrative and visual overlays */}
              <About />
              
              {/* Skills / Capabalities interactive progress lines */}
              <Skills />
              
              {/* Projects / Framer-portfolio and analytics stats */}
              <Projects />
              
              {/* Experience Timeline */}
              <Timeline />
              
              {/* Services cards with gold border glow */}
              <Services />
              
              {/* High-value achievements summary */}
              <Achievements />
              
              {/* Client endorsements micro slider */}
              <Testimonials />
              
              {/* Contact direct transmission fields */}
              <Contact />

            </main>

            {/* Minimal luxury footer and trademarks */}
            <Footer />

          </div>
        )}
      </AnimatePresence>
    </>
  );
}
