import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/mockData';
import { Zap, Check, ArrowRight } from 'lucide-react';
import ServiceDetailsPanel from './ServiceDetailsPanel';
import { useApp } from '../context/AppContext';

const ServicesModule = ({ interactive = false }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const { setQuoteModal } = useApp();

  return (
    <section id="services" className="py-24 bg-[#020203] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-600/[0.02] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-600/[0.02] blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="w-8 h-[2px] bg-orange-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-500">Our Capabilities</span>
            <div className="w-8 h-[2px] bg-orange-500" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tighter"
          >
            Complete <span className="text-orange-500">Service Coverage.</span>
          </motion.h2>
          <motion.p
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 1, delay: 0.2 }}
             className="text-gray-400 mt-8 text-lg font-medium"
          >
            Everything you need under one roof. We streamline elite production and digital architecture so you can focus on scale.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((cat, index) => {
            // Remove the hardcoded emoji from the category string for a cleaner look
            const cleanCategoryName = cat.category.replace(/[^a-zA-Z\s&]/g, '').trim();
            // Use the first item's emoji as the card's main icon
            const mainIcon = cat.items[0]?.icon || '🎥';

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col p-8 md:p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/5 hover:border-orange-500/40 hover:bg-white/[0.05] transition-all duration-500 group relative shadow-2xl h-full hover:-translate-y-2 hover:shadow-[0_20px_50px_-15px_rgba(255,107,0,0.4)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem]" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-5 mb-8">
                    <div className="w-16 h-16 shrink-0 rounded-2xl bg-white/5 text-3xl flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-all duration-500 shadow-xl group-hover:scale-110">
                      {mainIcon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-[1000] text-white uppercase tracking-tighter group-hover:text-orange-500 transition-colors">
                      {cleanCategoryName}
                    </h3>
                  </div>

                  <div className="flex flex-col flex-1">
                    <div className="space-y-4">
                      {cat.items.map((item) => (
                      <div 
                        key={item.id} 
                        className={`flex items-start gap-4 p-5 rounded-2xl relative border border-white/5 bg-black/40 hover:bg-orange-500/10 hover:border-orange-500/40 hover:scale-[1.02] hover:shadow-[0_10px_30px_-10px_rgba(255,107,0,0.3)] transition-all duration-300 group/item ${interactive ? 'cursor-pointer' : ''}`}
                        onClick={() => interactive && setSelectedItem(item)}
                      >
                        <div className={`mt-0.5 w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 bg-white/5 text-gray-400 group-hover/item:bg-orange-500/20 group-hover/item:text-orange-500 group-hover/item:scale-110`}>
                           <span className="text-xs">{item.icon || '✨'}</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-2">
                             <p className={`text-white font-[900] text-[14px] uppercase tracking-wider leading-tight transition-colors group-hover/item:text-orange-400`}>{item.title}</p>
                             {interactive && <ArrowRight size={14} className="text-orange-500 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all" />}
                          </div>
                          <p className={`text-gray-400 text-[12px] leading-relaxed transition-colors group-hover/item:text-gray-300 mb-4`}>{item.description}</p>
                          <button 
                            onClick={(e) => { e.stopPropagation(); setQuoteModal(true); }}
                            className="bg-white/5 hover:bg-orange-500 text-[9px] text-white uppercase font-black tracking-[0.2em] px-4 py-2 rounded-lg transition-colors border border-white/10 hover:border-orange-500 shadow-xl flex items-center gap-2 group/btn"
                          >
                            Get Quote <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-24 flex justify-center">
            <button 
              onClick={() => setQuoteModal(true)} 
              className="btn-premium flex items-center text-sm gap-4 px-12 py-5 shadow-[0_20px_50px_rgba(255,107,0,0.3)] hover:scale-105 transition-transform duration-300"
            >
                DISCUSS YOUR REQUIREMENTS <ArrowRight size={20} />
            </button>
        </div>
      </div>

      {interactive && (
        <ServiceDetailsPanel 
          item={selectedItem} 
          isOpen={!!selectedItem} 
          onClose={() => setSelectedItem(null)} 
        />
      )}
    </section>
  );
};

export default ServicesModule;
