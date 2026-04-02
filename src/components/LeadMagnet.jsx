import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ArrowRight, Sparkles } from 'lucide-react';
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

          <div className="md:w-3/4">
             <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               className="flex items-center gap-2 mb-6"
             >
               <Zap size={16} className="text-orange-500 fill-orange-500" />
               <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">Let's Get Started</span>
             </motion.div>
             
             <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                Ready to Scale Your <br />
                <span className="text-orange-500 text-glow">Visual Identity?</span>
             </h2>
             
             <p className="text-gray-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-medium">
                Ready to bring your next big idea to life? Reach out to us and 
                get a free consultation today.
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
                   Request a Quote <ArrowRight size={20} />
                </button>
                <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest px-6 py-4">
                   <Sparkles size={14} className="text-orange-500" />
                   Fast & Reliable Delivery
                </div>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;
