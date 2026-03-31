import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, User, Tag, ArrowRight, Play, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';

const PortfolioModal = () => {
  const { portfolioModal, setPortfolioModal } = useApp();

  if (!portfolioModal) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[2000] flex items-center justify-center p-4 md:p-8"
      >
        <div 
          className="absolute inset-0 bg-black/95 backdrop-blur-xl" 
          onClick={() => setPortfolioModal(null)} 
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 50 }}
          className="relative w-full max-w-6xl max-h-[90vh] glass rounded-[3rem] overflow-hidden border-orange-500/20 flex flex-col md:flex-row shadow-[0_0_100px_rgba(249,115,22,0.15)]"
        >
          {/* Close Button */}
          <button 
            onClick={() => setPortfolioModal(null)}
            className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-black/50 text-white flex items-center justify-center border border-white/10 hover:bg-orange-500 hover:border-orange-500 transition-all"
          >
            <X size={24} />
          </button>

          {/* Media Section */}
          <div className="md:w-3/5 h-[300px] md:h-full relative bg-gray-900 group">
            <img 
              src={portfolioModal.image} 
              alt={portfolioModal.title}
              className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-20 h-20 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-2xl shadow-orange-500/40 glow-orange"
              >
                <Play size={32} fill="currentColor" />
              </motion.button>
            </div>
            {/* Lens Info Overlay */}
            <div className="absolute bottom-6 left-6 p-4 glass rounded-2xl border-white/10 flex items-center gap-4">
              <div className="p-2 rounded-lg bg-orange-500/20 text-orange-400">
                 <Sparkles size={16} />
              </div>
              <div className="text-[10px] font-bold text-white uppercase tracking-widest">
                Shot on RED V-Raptor 8K
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div className="md:w-2/5 p-8 md:p-12 overflow-y-auto bg-black/40 backdrop-blur-md">
            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <Tag size={14} className="text-orange-500" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">{portfolioModal.category}</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                {portfolioModal.title}
              </h2>

              <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                {portfolioModal.description}
              </p>

              {/* Project Stats */}
              <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                  <p className="text-[10px] text-gray-500 uppercase font-black mb-1">Duration</p>
                  <p className="text-white font-bold">4 Week Production</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                  <p className="text-[10px] text-gray-500 uppercase font-black mb-1">Client</p>
                  <p className="text-white font-bold">Global Enterprise</p>
                </div>
              </div>

              {/* Details List */}
              <div className="space-y-4 mb-12">
                 {[
                   { icon: User, label: "Directed by", value: "The Owl Team" },
                   { icon: Calendar, label: "Released", value: "March 2024" },
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-4 text-sm">
                      <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center">
                         <item.icon size={18} />
                      </div>
                      <div>
                         <p className="text-[10px] text-gray-500 uppercase font-black">{item.label}</p>
                         <p className="text-white font-bold">{item.value}</p>
                      </div>
                   </div>
                 ))}
              </div>

              <div className="flex flex-col gap-4">
                <button className="btn-premium w-full flex items-center justify-center gap-3">
                  Start Similar Project <ArrowRight size={20} />
                </button>
                <button className="w-full py-4 rounded-2xl border border-white/10 text-white font-bold text-sm uppercase tracking-widest hover:bg-white/5 transition-all">
                  Request Case Study
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PortfolioModal;
