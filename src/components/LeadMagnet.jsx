import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ArrowRight, Sparkles, Send } from 'lucide-react';
import { useApp } from '../context/AppContext';

const LeadMagnet = () => {
  const { setQuoteModal } = useApp();

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="glass rounded-[3rem] p-12 md:p-20 border-orange-500/30 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 group">
          {/* Animated Background Orbs */}
          <div className="absolute top-0 left-0 w-full h-full bg-orange-500/5 -z-10 group-hover:bg-orange-500/10 transition-colors duration-700" />
          <motion.div 
             className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] bg-orange-500/10 blur-[120px] rounded-full"
             animate={{ scale: [1, 1.1, 1], x: [0, 20, 0] }}
             transition={{ duration: 10, repeat: Infinity }}
          />

          <div className="md:w-2/3">
             <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               className="flex items-center gap-2 mb-6"
             >
               <Zap size={16} className="text-orange-500 fill-orange-500" />
               <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">Limited Opportunity</span>
             </motion.div>
             
             <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                Ready to Scale Your <br />
                <span className="text-orange-500 text-glow">Visual Identity?</span>
             </h2>
             
             <p className="text-gray-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-medium">
                Join 500+ elite brands who trust The Owl Creations for 
                cinematic excellence. Get a free consultation today.
             </p>

             <motion.div 
               className="flex flex-wrap gap-4"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
             >
                <button 
                   onClick={() => setQuoteModal(true)}
                   className="btn-premium flex items-center gap-3"
                >
                   Secure My Strategy <ArrowRight size={20} />
                </button>
                <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest px-6 py-4">
                   <Sparkles size={14} className="text-orange-500" />
                   Only 3 slots left for April
                </div>
             </motion.div>
          </div>

          <div className="relative md:w-1/3">
             <div className="w-56 h-56 md:w-80 md:h-80 rounded-full border border-orange-500/20 flex items-center justify-center relative p-8">
                <div className="absolute inset-0 border border-orange-500/10 rounded-full animate-ping opacity-20" />
                <div className="w-full h-full rounded-full bg-orange-500/5 backdrop-blur-3xl flex flex-col items-center justify-center text-center p-6 border border-white/5">
                   <Send size={40} className="text-orange-500 mb-4 animate-bounce" />
                   <p className="text-white font-black text-xl mb-1">Instant Access</p>
                   <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Get Project Roadmap</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;
