import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, X, IndianRupee } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function ServiceDetailsPanel({ item, isOpen, onClose }) {
  const { setQuoteModal } = useApp();
  if (!item) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 cursor-pointer"
          />

          {/* Slide-Over Panel */}
          <motion.div
            initial={{ x: '100%', opacity: 0.5 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0.5 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-[#0a0a0c] border-l border-white/5 shadow-[-30px_0_100px_rgba(255,107,0,0.15)] z-50 overflow-y-auto"
          >
            {/* Header Area */}
            <div className="relative h-64 bg-white/5 border-b border-white/5 flex flex-col justify-end p-8 overflow-hidden">
               <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/[0.15] blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/4" />
               
               <button 
                  onClick={onClose}
                  className="absolute top-6 right-6 w-10 h-10 bg-black/40 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-colors shadow-2xl border border-white/10"
               >
                  <X size={20} />
               </button>

               <div className="relative z-10 flex items-center gap-6">
                 <div className="w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center text-4xl shadow-[0_15px_30px_rgba(255,107,0,0.3)] shrink-0">
                    {item.icon || '✨'}
                 </div>
                 <h2 className="text-3xl font-black text-white uppercase tracking-tighter leading-none">
                    {item.title}
                 </h2>
               </div>
            </div>

            {/* Content Area */}
            <div className="p-8 space-y-10">
               <div>
                  <h4 className="text-[10px] text-orange-500 font-black uppercase tracking-[0.3em] mb-3">Service Overview</h4>
                  <p className="text-gray-300 text-base leading-relaxed font-medium">
                     {item.description}
                  </p>
               </div>

               <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-500/[0.08] to-transparent border border-orange-500/20 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <h4 className="text-[10px] text-orange-400 font-black uppercase tracking-[0.3em] mb-2 relative z-10 flex flex-row items-center gap-2">
                     <Check size={14} /> Core Benefit
                  </h4>
                  <p className="text-white font-[900] text-sm leading-relaxed tracking-wider relative z-10">
                     {item.benefit || "Delivers outstanding premium quality results instantly."}
                  </p>
               </div>

               <div>
                 <h4 className="text-[10px] text-gray-500 font-black uppercase tracking-[0.3em] mb-3">Estimated Investment</h4>
                 <div className="flex items-baseline gap-1 relative">
                    <span className="text-white text-5xl font-black tracking-tighter flex items-center">
                       <IndianRupee size={36} className="text-orange-500 mr-2" />
                       {item.price ? item.price.toLocaleString() : '15,000'}
                    </span>
                    <span className="text-gray-600 text-xs font-bold uppercase tracking-widest ml-2">/ Start</span>
                 </div>
               </div>

               <div className="pt-8 pt-4">
                 <button 
                   onClick={() => {
                     onClose();
                     setTimeout(() => setQuoteModal(true), 300);
                   }}
                   className="btn-premium w-full flex items-center justify-center gap-4 text-sm py-5 shadow-2xl hover:scale-[1.02] transition-transform"
                 >
                    REQUEST THIS SERVICE <ArrowRight size={20} />
                 </button>
               </div>
            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
