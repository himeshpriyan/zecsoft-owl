import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { services } from '../data/mockData';
import { Plus, Check, ArrowRight, Zap, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';

const ServicesModule = () => {
  const [activeTab, setActiveTab] = useState(services[0]?.id || 'media');
  const [hoveredId, setHoveredId] = useState(null);
  const { addService, selectedServices } = useApp();

  const currentCategory = services.find(cat => cat.id === activeTab);
  const currentServices = currentCategory ? currentCategory.items : [];

  return (
    <section id="services" className="py-32 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <Zap size={16} className="text-orange-500 fill-orange-500" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">Our Expertise</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-white"
            >
              Tailored <span className="text-orange-500">Solutions</span>
            </motion.h2>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {services.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${
                  activeTab === cat.id 
                    ? 'bg-orange-500 border-orange-500 text-white shadow-lg shadow-orange-500/20' 
                    : 'bg-white/5 border-white/5 text-gray-500 hover:text-white hover:border-white/10'
                }`}
              >
                {cat.category.split(' ')[1] || cat.category}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {currentServices.map((service, index) => {
              const isAdded = selectedServices.some(s => s.id === service.id);
              const isHovered = hoveredId === service.id;

              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onMouseEnter={() => setHoveredId(service.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={`group relative p-8 rounded-3xl border transition-all duration-500 overflow-hidden cursor-pointer ${
                    isHovered 
                      ? 'bg-orange-500/10 border-orange-500/40 shadow-2xl shadow-orange-500/10' 
                      : 'bg-white/5 border-white/5'
                  }`}
                >
                  {/* Background Accents */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-[60px] rounded-full transition-opacity duration-500 ${
                    isHovered ? 'opacity-100Scale-110' : 'opacity-0'
                  }`} />

                  {/* Icon & Label */}
                  <div className="relative z-10 flex items-start justify-between mb-8">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      isHovered ? 'bg-orange-500 text-white shadow-glow' : 'bg-white/10 text-orange-500'
                    }`}>
                      <span className="text-2xl">{service.icon}</span>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-1">Starting From</p>
                      <p className="text-xl font-black text-white">₹{service.price.toLocaleString()}+</p>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 relative z-10 group-hover:text-orange-400 transition-colors">
                    {service.label}
                  </h3>
                  
                  <p className="text-sm text-gray-500 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>

                  {/* Hover Expansion Content */}
                  <motion.div
                    initial={false}
                    animate={{ height: isHovered ? 'auto' : 0, opacity: isHovered ? 1 : 0 }}
                    className="overflow-hidden relative z-10"
                  >
                    <div className="pt-4 border-t border-white/10 space-y-3 mb-6">
                      <p className="text-[10px] font-bold text-orange-500 uppercase tracking-widest">Key Benefits</p>
                      {['Premium Quality', 'Fast Turnaround', 'Expert Direction'].map((b, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-gray-400">
                          <Check size={12} className="text-orange-500" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Action Button */}
                  <div className="relative z-10 flex items-center gap-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        addService(service);
                      }}
                      disabled={isAdded}
                      className={`flex-1 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${
                        isAdded 
                          ? 'bg-green-500/20 text-green-500 border border-green-500/20' 
                          : 'bg-white/10 text-white hover:bg-orange-500 border border-white/10 hover:border-orange-500'
                      }`}
                    >
                      {isAdded ? <><Check size={14} /> Added</> : <><Plus size={14} /> Add to Project</>}
                    </button>
                    
                    <button className="w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all border border-white/10">
                      <ArrowRight size={18} />
                    </button>
                  </div>

                  {/* Floating Sparkle for active cards */}
                  {isHovered && (
                    <motion.div 
                      layoutId="sparkle"
                      className="absolute top-4 left-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <Sparkles size={14} className="text-orange-500 animate-pulse" />
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesModule;
