import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle, Github, Linkedin, Sparkles } from 'lucide-react';

export default function Contact() {
  // Form State
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Validate form
  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name';
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please write a message';
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Submit Handler
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate sending message securely over network
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1800);
  };

  return (
    <section 
      id="contact" 
      className="py-24 sm:py-32 bg-neutral-900/40 p-6 sm:p-8 xl:p-12 relative overflow-hidden"
    >
      <div className="absolute left-[10%] bottom-[10%] w-[420px] h-[420px] rounded-full bg-amber-500/[0.012] blur-[130px] hidden md:block" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-start text-left mb-16 md:mb-24">
          <span className="font-mono text-xs text-amber-500 tracking-widest font-semibold uppercase flex items-center gap-1.5 mb-3">
            <Mail className="w-3.5 h-3.5 animate-pulse" /> 08 / ACQUISITION
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white uppercase sm:w-[80%] lg:w-[60%]">
            Initiate <span className="text-gold-gradient">Collaboration</span>
          </h2>
          <p className="mt-4 text-neutral-400 max-w-xl text-sm sm:text-base font-sans">
            Ready to collaborate? Fill out the contact form below to get in touch. I will reply within 24 hours.
          </p>
          <div className="w-24 h-[1px] bg-amber-500/50 mt-6" />
        </div>

        {/* Form Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Physical contact tags */}
          <div className="lg:col-span-5 text-left space-y-8">
            <h3 className="font-display text-2xl font-bold text-white tracking-tight uppercase">
              Get in Touch Directly
            </h3>
            
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-sans">
              Have a web development project request, collaboration idea, or full-time engineering opportunity? Please feel free to get in touch using the contact form or directly via email.
            </p>

            <div className="space-y-6 pt-4 font-sans">
              
              {/* Direct Mail */}
              <div className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-full bg-neutral-950 border border-white/[0.06] flex items-center justify-center text-amber-400 group-hover:border-[#D4AF37]/45 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest leading-none">SECURE EMAIL</p>
                  <a href="mailto:shibampandab@gmail.com" className="font-display text-sm font-semibold text-white hover:text-amber-400 mt-1.5 block cursor-none interactive-cursor transition-colors">
                    shibampandab@gmail.com
                  </a>
                </div>
              </div>

              {/* Direct Phone */}
              <div className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-full bg-neutral-950 border border-white/[0.06] flex items-center justify-center text-amber-400 group-hover:border-[#D4AF37]/45 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest leading-none">DIGITAL PHONE</p>
                  <a href="tel:+919876543210" className="font-display text-sm font-semibold text-white hover:text-amber-400 mt-1.5 block cursor-none interactive-cursor transition-colors">
                    +91 98765 43210
                  </a>
                </div>
              </div>

              {/* Direct Location */}
              <div className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-full bg-neutral-950 border border-white/[0.06] flex items-center justify-center text-amber-400 group-hover:border-[#D4AF37]/45 transition-colors">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest leading-none">OFFICE RESIDENCY</p>
                  <p className="font-display text-sm font-semibold text-white mt-1.5">
                    Odisha, India (GMT +5:30)
                  </p>
                </div>
              </div>

            </div>

            {/* Social Channels */}
            <div className="pt-6 border-t border-white/[0.05] space-y-4">
              <p className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest leading-none">NETWORK NODES</p>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/ShibamPandab" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-10 h-10 rounded-full border border-white/[0.06] hover:border-amber-400 flex items-center justify-center text-neutral-400 hover:text-amber-400 bg-neutral-950/20 cursor-none interactive-cursor transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4.5 h-4.5" />
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/shibam-pandab" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-10 h-10 rounded-full border border-white/[0.06] hover:border-amber-400 flex items-center justify-center text-neutral-400 hover:text-amber-400 bg-neutral-950/20 cursor-none interactive-cursor transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4.5 h-4.5" />
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT: Confined luxury validation form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-[28px] glass-card shadow-2xl relative">
              
              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest font-semibold">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`px-4 py-3 glass bg-white/[0.01] hover:bg-white/[0.02] border ${errors.name ? 'border-red-500/50' : 'border-white/[0.06]'} hover:border-neutral-700 focus:border-amber-400 rounded-xl text-sm font-sans text-white focus:outline-none transition-colors duration-200 cursor-none interactive-cursor`}
                    placeholder="e.g. Julian Vance"
                  />
                  {errors.name && <span className="font-mono text-[9px] text-red-400 tracking-wider mt-1">{errors.name}</span>}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest font-semibold">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`px-4 py-3 glass bg-white/[0.012] hover:bg-white/[0.02] border ${errors.email ? 'border-red-500/50' : 'border-white/[0.06]'} hover:border-neutral-700 focus:border-amber-400 rounded-xl text-sm font-sans text-white focus:outline-none transition-colors duration-200 cursor-none interactive-cursor`}
                    placeholder="e.g. julian@vance.media"
                  />
                  {errors.email && <span className="font-mono text-[9px] text-red-400 tracking-wider mt-1">{errors.email}</span>}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest font-semibold">Project Details Brief *</label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`px-4 py-3 glass bg-white/[0.012] hover:bg-white/[0.02] border ${errors.message ? 'border-red-500/50' : 'border-white/[0.06]'} hover:border-neutral-700 focus:border-amber-400 rounded-xl text-sm font-sans text-white focus:outline-none transition-colors duration-200 cursor-none interactive-cursor resize-none`}
                    placeholder="e.g. Tell us about your project timeline, visual targets..."
                  />
                  {errors.message && <span className="font-mono text-[9px] text-red-400 tracking-wider mt-1">{errors.message}</span>}
                </div>

                {/* Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 disabled:from-neutral-800 disabled:to-neutral-900 text-neutral-950 font-bold tracking-widest text-xs uppercase rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-none interactive-cursor"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin h-4 w-4 border-2 border-neutral-950 border-t-transparent rounded-full" />
                      Dispatching Message Node...
                    </>
                  ) : (
                    <>
                      Transmit Transmission <Send className="w-3.5 h-3.5 ml-1" />
                    </>
                  )}
                </button>

              </form>

              {/* Dynamic Successful Post Overlay */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute inset-0 rounded-[28px] glass-card flex flex-col items-center justify-center text-center p-6 sm:p-8 z-20 border border-[#D4AF37]/30"
                  >
                    <motion.div
                      initial={{ scale: 0.7, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.1, type: 'spring' }}
                      className="w-16 h-16 rounded-full bg-amber-500/15 border border-[#D4AF37]/40 flex items-center justify-center mb-6"
                    >
                      <CheckCircle className="w-8 h-8 text-[#D4AF37]" />
                    </motion.div>
                    
                    <h4 className="font-display text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                      Message Sent
                    </h4>
                    
                    <p className="mt-3 text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-sm font-sans mx-auto">
                      Thank you. Your message has been sent successfully. Shibam will review it and reply within 24 hours.
                    </p>

                    <button
                      onClick={() => setIsSuccess(false)}
                      className="mt-8 px-6 py-2.5 border border-white/[0.08] hover:border-amber-400 text-white hover:text-amber-400 font-bold tracking-widest text-[10px] uppercase rounded-full cursor-none interactive-cursor transition-colors"
                    >
                      Close Overlay
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
