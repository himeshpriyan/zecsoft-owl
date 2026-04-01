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
      {/* Dynamic Mesh Gradient Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-orange-600/20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-orange-500/10 blur-[150px] animate-pulse [animation-delay:2s]" />
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-violet-600/10 blur-[100px] animate-pulse [animation-delay:4s]" />
        
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30 mix-blend-screen scale-110"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-glowing-particles-in-the-dark-32631-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#020203] via-transparent to-[#020203]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="inline-flex items-center gap-3 px-6 py-2 rounded-2xl glass border-white/5 mb-10 group cursor-pointer"
        >
          <div className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 group-hover:text-orange-400 transition-colors">Premium Creative Experience</span>
          <Sparkles size={14} className="text-orange-500 group-hover:rotate-12 transition-transform" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
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
          next-generation visual storytelling and elite digital design.
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
            Initiate Project <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </button>
          
          <button 
            onClick={() => scrollTo('#portfolio')}
            className="group flex items-center gap-4 text-white font-black uppercase tracking-widest text-xs h-full py-4"
          >
            <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
              <Play size={20} fill="currentColor" />
            </div>
            Explore Portfolio
          </button>
        </motion.div>
      </div>

      {/* Futuristic Scroll Indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer group"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
        onClick={() => scrollTo('#trust')}
      >
        <span className="text-[9px] uppercase tracking-[0.4em] font-black text-orange-500/50 group-hover:text-orange-500 transition-colors">Dive In</span>
        <div className="w-px h-16 bg-gradient-to-b from-orange-500 to-transparent opacity-30 group-hover:opacity-100 transition-all" />
      </motion.div>
    </section>
  );
};

export default Hero;
