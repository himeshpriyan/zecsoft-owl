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
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-black">
      {/* Cinematic Background Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40 scale-105"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-glowing-particles-in-the-dark-32631-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80" />
      </div>

      {/* Floating Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px] animate-pulse [animation-delay:1s]" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-orange-500/20 mb-8"
        >
          <Sparkles size={16} className="text-orange-500" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">Premium Creative Agency</span>
        </motion.div>

        <motion.h1 
          className="text-6xl md:text-9xl font-black mb-6 leading-tight tracking-tight text-white"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          The Owl <span className="text-orange-500 text-glow">Creations</span>
        </motion.h1>

        <motion.p 
          className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 font-medium leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          "Precision in Every Frame" — Crafting cinematic visual stories and 
          digital experiences that define premium brands worldwide.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <button 
            onClick={() => setQuoteModal(true)}
            className="btn-premium flex items-center gap-3 w-full sm:w-auto justify-center group"
          >
            Start Your Project <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button 
            onClick={() => scrollTo('#portfolio')}
            className="flex items-center gap-3 text-white font-bold hover:text-orange-500 transition-colors group px-6 py-3"
          >
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-orange-500/50 transition-all">
              <Play size={18} fill="currentColor" />
            </div>
            View Showreel
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        whileHover={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={() => scrollTo('#trust')}
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-orange-500 to-transparent" />
        <span className="text-[10px] uppercase tracking-widest font-bold text-white">Scroll to Explore</span>
      </motion.div>
    </section>
  );
};

export default Hero;
