import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Video, Monitor, Globe, BarChart, Calendar, ChevronRight, Check, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';

const services = [
  { id: 'video', icon: Video, label: 'Cinematography', base: 25000 },
  { id: 'marketing', icon: BarChart, label: 'Digital Marketing', base: 15000 },
  { id: 'web', icon: Globe, label: 'Web Design', base: 20000 },
  { id: 'event', icon: Calendar, label: 'Event Coverage', base: 12000 },
  { id: 'product', icon: Camera, label: 'Product Shoot', base: 8000 },
];

const addons = [
  { id: 'drone', label: 'Drone Aerials', price: 5000 },
  { id: 'color', label: 'Pro Color Grading', price: 3000 },
  { id: 'reels', label: 'Social Reels Edit', price: 2500 },
  { id: 'rush', label: 'Express Delivery', price: 4000 },
];

const QuoteCalculator = () => {
  const [selectedService, setSelectedService] = useState(services[0]);
  const allServices = services.flatMap(cat => cat.items);
  const [duration, setDuration] = useState(1);
  const [activeAddons, setActiveAddons] = useState([]);
  const { setQuoteModal } = useApp();

  const calculateTotal = () => {
    const addonTotal = activeAddons.reduce((sum, id) => sum + addons.find(a => a.id === id).price, 0);
    const base = selectedService.base * duration;
    const total = base + addonTotal;
    return {
      min: Math.round(total * 0.9),
      max: Math.round(total * 1.3)
    };
  };

  const { min, max } = calculateTotal();

  const toggleAddon = (id) => {
    setActiveAddons(prev => prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]);
  };

  return (
    <section id="quote" className="py-32 bg-[#020203] relative overflow-hidden">
      {/* Cinematic Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-orange-600/[0.03] rounded-full blur-[180px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <div className="w-8 h-[2px] bg-orange-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-500">Investment Engine</span>
            <div className="w-8 h-[2px] bg-orange-500" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-white mb-10 leading-[0.95] tracking-tighter"
          >
            Architect Your <span className="orange-text orange-glow">Investment.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed"
          >
            Select your core objective and precision-tune the parameters to generate 
            an instant professional estimation for your cinematic vision.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Controls - Left Side */}
          <div className="lg:col-span-8 space-y-10">
            {/* 1. Objective Selection */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-10 rounded-[3rem] border-white/5 shadow-2xl"
            >
              <h3 className="text-white font-black mb-10 flex items-center gap-4 text-xl uppercase tracking-widest">
                <span className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center font-black text-sm shadow-[0_10px_20px_rgba(255,107,0,0.3)]">1</span>
                Primary Objective
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {services.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedService(s)}
                    className={`flex flex-col items-center gap-5 p-6 rounded-3xl transition-all duration-500 border group ${
                      selectedService.id === s.id 
                        ? 'bg-orange-500 border-orange-500 text-white shadow-[0_20px_40px_rgba(255,107,0,0.2)]' 
                        : 'bg-white/[0.03] border-white/5 text-gray-400 theme-hover-glow'
                    }`}
                  >
                    <s.icon size={28} className={selectedService.id === s.id ? 'white' : 'group-hover:text-orange-500 transition-colors'} />
                    <span className="text-[10px] font-black tracking-widest uppercase text-center">{s.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* 2. Temporal Parameter (Slider) */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass p-10 rounded-[3rem] border-white/5 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-10">
                <h3 className="text-white font-black flex items-center gap-4 text-xl uppercase tracking-widest">
                  <span className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center font-black text-sm shadow-[0_10px_20px_rgba(255,107,0,0.3)]">2</span>
                  Timeline Focus
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-orange-500">{duration}</span>
                  <span className="text-xs font-black text-gray-500 uppercase tracking-widest">Days</span>
                </div>
              </div>
              
              <div className="relative pt-6 pb-2">
                <input
                  type="range"
                  min="1"
                  max="14"
                  step="1"
                  value={duration}
                  onChange={(e) => setDuration(parseInt(e.target.value))}
                  className="w-full h-[6px] bg-white/10 rounded-full appearance-none cursor-pointer accent-orange-500 slider-thumb-premium"
                />
                <div className="flex justify-between mt-8 text-[9px] uppercase tracking-[0.3em] font-black text-gray-600">
                   {['Rapid Execute', 'Elite Focus', 'Architectural Depth'].map((label, i) => (
                     <span key={i}>{label}</span>
                   ))}
                </div>
              </div>
            </motion.div>

            {/* 3. Elite Enhancements (Addons) */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass p-10 rounded-[3rem] border-white/5 shadow-2xl"
            >
              <h3 className="text-white font-black mb-10 flex items-center gap-4 text-xl uppercase tracking-widest">
                <span className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center font-black text-sm shadow-[0_10px_20px_rgba(255,107,0,0.3)]">3</span>
                Elite Enhancements
              </h3>
              <div className="grid sm:grid-cols-2 gap-5">
                {addons.map((a) => (
                  <button
                    key={a.id}
                    onClick={() => toggleAddon(a.id)}
                    className={`flex items-center justify-between p-6 rounded-2xl border transition-all duration-500 group ${
                      activeAddons.includes(a.id) 
                        ? 'bg-orange-500/[0.08] border-orange-500/50 text-white shadow-lg shadow-orange-500/5' 
                        : 'bg-white/5 border-white/5 text-gray-500 theme-hover-glow'
                    }`}
                  >
                    <div className="flex items-center gap-5">
                      <div className={`w-6 h-6 rounded-md border flex items-center justify-center transition-all duration-300 ${
                        activeAddons.includes(a.id) ? 'bg-orange-500 border-orange-500 shadow-[0_0_15px_rgba(255,107,0,0.5)]' : 'border-white/10'
                      }`}>
                        {activeAddons.includes(a.id) && <Check size={14} className="text-white" />}
                      </div>
                      <span className="text-sm font-black uppercase tracking-widest">{a.label}</span>
                    </div>
                    <span className={`text-[11px] font-black ${activeAddons.includes(a.id) ? 'text-orange-500' : 'text-gray-600'}`}>
                      +₹{a.price.toLocaleString()}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* 4. Elite Estimation Result - Right Side Sticky */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass p-10 rounded-[3rem] border-orange-500/30 overflow-hidden relative shadow-[0_50px_100px_-20px_rgba(255,107,0,0.15)]"
            >
              <div className="absolute top-[-100px] right-[-100px] w-64 h-64 bg-orange-500/10 blur-[80px] rounded-full pointer-events-none" />
              
              <div className="flex flex-col items-center mb-10 text-center">
                <div className="w-12 h-[2px] bg-orange-500 mb-6" />
                <h4 className="text-white font-black text-[10px] uppercase tracking-[0.4em]">Investment Matrix</h4>
              </div>
              
              <div className="space-y-6 mb-12">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">Strategic Core</span>
                  <span className="text-white font-black tracking-tight">{selectedService.label}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">Temporal Focus</span>
                  <span className="text-orange-500 font-black tracking-tight">{duration} Days</span>
                </div>
                {activeAddons.length > 0 && (
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">Enhancements</span>
                    <span className="text-white font-black bg-white/5 py-1 px-3 rounded-full text-[10px] uppercase">{activeAddons.length} Applied</span>
                  </div>
                )}
                <div className="pt-8 border-t border-white/5" />
                <div className="text-center relative">
                  <p className="text-[9px] text-gray-500 uppercase tracking-[0.3em] font-black mb-4">Estimated Premium Value</p>
                  <div className="flex flex-col gap-2">
                    <AnimatePresence mode="wait">
                      <motion.span 
                        key={min}
                        initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        className="text-5xl md:text-6xl font-[1000] text-white tracking-tighter"
                      >
                         ₹{min.toLocaleString()}
                      </motion.span>
                    </AnimatePresence>
                    <span className="text-orange-500 text-xs font-black uppercase tracking-[0.3em] opacity-50">Estimated Maximum Range</span>
                    <AnimatePresence mode="wait">
                      <motion.span 
                        key={max}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-2xl font-black text-gray-600"
                      >
                        Up to ₹{max.toLocaleString()}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setQuoteModal(true)}
                className="btn-premium w-full flex items-center justify-center gap-4 text-[10px] py-6 shadow-2xl shadow-orange-500/30"
              >
                PROCEED TO ALLOCATION <ChevronRight size={18} />
              </motion.button>

              <p className="text-[8px] text-gray-700 text-center mt-8 uppercase tracking-[0.2em] font-black leading-relaxed px-6">
                Algorithmic projection based on current elite market standards.
              </p>
            </motion.div>

            {/* AI Advisor - Interaction */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.3 }}
               className="mt-8 p-8 rounded-[2.5rem] bg-orange-600/[0.03] border border-orange-500/10 flex items-center gap-6 group hover:bg-orange-500/5 transition-all cursor-pointer relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1.5s]" />
              <div className="w-14 h-14 rounded-2xl bg-orange-500 flex items-center justify-center text-white shadow-[0_15px_30px_rgba(255,107,0,0.3)] z-10">
                <Sparkles size={24} />
              </div>
              <div className="relative z-10">
                <p className="text-[10px] font-black text-orange-500 uppercase tracking-widest mb-1 italic">Professional Advisor</p>
                <p className="text-sm text-white font-black tracking-tight group-hover:text-orange-500 transition-colors">Consult with Elite Owl AI →</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteCalculator;
