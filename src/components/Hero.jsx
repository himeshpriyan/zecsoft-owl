import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';

const Hero = () => {
  const { setQuoteModal } = useApp();

  const scrollTo = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-[#020203]">
      {/* Cinematic Owl Night Vision & Film Grain Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Watcher Eyes Overlay (Subtle Owl Motif) */}
        <div className="absolute top-[20%] left-[25%] w-[20%] h-[15%] rounded-[100%] bg-orange-600/10 blur-[60px] animate-pulse" />
        <div className="absolute top-[20%] right-[25%] w-[20%] h-[15%] rounded-[100%] bg-orange-600/10 blur-[60px] animate-pulse [animation-delay:1.5s]" />
        
        {/* Deep ambient glow */}
        <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[60%] h-[50%] rounded-full bg-orange-600/5 blur-[150px]" />
        
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-15 mix-blend-screen scale-105"
        >
          {/* Using a dust/film grain video to simulate the cinematic lens instead of abstract particles */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-dust-particles-floating-in-the-air-macro-shot-5222-large.mp4" type="video/mp4" />
        </video>
        
        {/* Lens vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020203] via-transparent to-[#020203]" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at center, transparent 30%, #020203 100%)', opacity: 0.8 }} />
      </div>

      {/* Focus Brackets (Camera Lens/Night Vision UI) */}
      <div className="absolute inset-12 border border-white/5 pointer-events-none hidden md:block z-0">
        <div className="absolute top-[-2px] left-[-2px] w-12 h-12 border-t-2 border-l-2 border-orange-500/50" />
        <div className="absolute top-[-2px] right-[-2px] w-12 h-12 border-t-2 border-r-2 border-orange-500/50" />
        <div className="absolute bottom-[-2px] left-[-2px] w-12 h-12 border-b-2 border-l-2 border-orange-500/50" />
        <div className="absolute bottom-[-2px] right-[-2px] w-12 h-12 border-b-2 border-r-2 border-orange-500/50" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="inline-flex items-center gap-3 px-6 py-2 rounded-2xl glass border-white/5 mb-10 group cursor-pointer"
        >
          <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse ring-[3px] ring-orange-500/20" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 group-hover:text-orange-400 transition-colors">Precision Focus Active</span>
          <Sparkles size={14} className="text-orange-500 group-hover:rotate-12 transition-transform" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
        >
          <h1 className="text-7xl md:text-[11rem] font-black mb-8 leading-[0.85] tracking-[-0.05em] text-white">
            THE OWL<br />
            <span className="orange-text orange-glow">CREATIONS</span>
          </h1>
        </motion.div>

        <motion.p 
          className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto mb-16 font-medium leading-relaxed opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          We don't just capture moments; we architect cinematic legacies through 
          unmatched focus and elite digital storytelling.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <button 
            onClick={() => setQuoteModal(true)}
            className="btn-premium flex items-center gap-4 group"
          >
            Open Aperture <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </button>
          
          <button 
            onClick={() => scrollTo('#portfolio')}
            className="group flex items-center gap-4 text-white font-black uppercase tracking-widest text-xs h-full py-4 relative z-10"
          >
            <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
              <Play size={20} fill="currentColor" />
            </div>
            Review Footage
          </button>
        </motion.div>
      </div>

      {/* Futuristic Scroll Indicator (Lens Shift) */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer group z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
        onClick={() => scrollTo('#about')}
      >
        <span className="text-[9px] uppercase tracking-[0.4em] font-black text-orange-500/50 group-hover:text-orange-500 transition-colors">Shift Focus</span>
        <div className="relative w-px h-16 bg-gradient-to-b from-orange-500/20 to-transparent overflow-hidden">
           <motion.div 
             className="absolute top-0 w-full h-4 bg-orange-500"
             animate={{ y: [0, 64] }}
             transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
           />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
