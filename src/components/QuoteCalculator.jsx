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
    <section id="quote" className="py-32 bg-black relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Sparkles size={16} className="text-orange-500" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">Interactive Estimator</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white mb-6"
          >
            Tailor Your <span className="text-orange-500">Experience</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Select your core service and requirements to receive an instant, 
            transparent price estimation for your next project.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Controls */}
          <div className="lg:col-span-8 space-y-8">
            {/* Service Selection */}
            <div className="glass p-8 rounded-3xl">
              <h3 className="text-white font-bold mb-6 flex items-center gap-2 text-lg">
                <span className="w-8 h-8 rounded-lg bg-orange-500/20 text-orange-500 flex items-center justify-center font-bold text-sm">1</span>
                Choose your service:
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {services.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedService(s)}
                    className={`flex flex-col items-center gap-4 p-5 rounded-2xl transition-all duration-300 border ${
                      selectedService.id === s.id 
                        ? 'bg-orange-500 border-orange-500 text-white shadow-lg shadow-orange-500/20' 
                        : 'bg-white/5 border-white/5 text-gray-400 hover:border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <s.icon size={24} />
                    <span className="text-xs font-bold text-center">{s.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Duration Slider */}
            <div className="glass p-8 rounded-3xl">
              <h3 className="text-white font-bold mb-8 flex items-center gap-2 text-lg">
                <span className="w-8 h-8 rounded-lg bg-orange-500/20 text-orange-500 flex items-center justify-center font-bold text-sm">2</span>
                Project duration (Days): <span className="text-orange-500 ml-auto bg-orange-500/10 px-4 py-1 rounded-lg text-2xl">{duration}</span>
              </h3>
              <input
                type="range"
                min="1"
                max="14"
                step="1"
                value={duration}
                onChange={(e) => setDuration(parseInt(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-orange-500"
              />
              <div className="flex justify-between mt-4 text-[10px] uppercase tracking-widest font-bold text-gray-600">
                <span>Short Term</span>
                <span>Production</span>
                <span>Long Term</span>
              </div>
            </div>

            {/* Addons Selection */}
            <div className="glass p-8 rounded-3xl">
              <h3 className="text-white font-bold mb-6 flex items-center gap-2 text-lg">
                <span className="w-8 h-8 rounded-lg bg-orange-500/20 text-orange-500 flex items-center justify-center font-bold text-sm">3</span>
                Enhance your project:
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {addons.map((a) => (
                  <button
                    key={a.id}
                    onClick={() => toggleAddon(a.id)}
                    className={`flex items-center justify-between p-4 rounded-xl border transition-all duration-300 ${
                      activeAddons.includes(a.id) 
                        ? 'bg-orange-500/10 border-orange-500/50 text-white' 
                        : 'bg-white/5 border-white/5 text-gray-400 hover:border-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${
                        activeAddons.includes(a.id) ? 'bg-orange-500 border-orange-500' : 'border-white/20'
                      }`}>
                        {activeAddons.includes(a.id) && <Check size={12} className="text-white" />}
                      </div>
                      <span className="text-sm font-semibold">{a.label}</span>
                    </div>
                    <span className={`text-xs ${activeAddons.includes(a.id) ? 'text-orange-400' : 'text-gray-600'}`}>
                      +₹{a.price.toLocaleString()}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Result Card */}
          <div className="lg:col-span-4 sticky top-24">
            <div className="glass p-8 rounded-3xl border-orange-500/30 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-[60px] rounded-full" />
              
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest text-center">Estimation Summary</h4>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">{selectedService.label}</span>
                  <span className="text-white font-bold">₹{selectedService.base.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Duration ({duration} {duration === 1 ? 'Day' : 'Days'})</span>
                  <span className="text-orange-400 font-bold">x {duration}</span>
                </div>
                {activeAddons.length > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Addons ({activeAddons.length})</span>
                    <span className="text-white font-bold">Included</span>
                  </div>
                )}
                <div className="border-t border-white/10 pt-4" />
                <div className="text-center">
                  <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold mb-2">Estimated Investment Range</p>
                  <div className="flex items-center justify-center gap-2">
                    <AnimatePresence mode="wait">
                      <motion.span 
                        key={min}
                        initial={{ opacity: 0, filter: 'blur(5px)' }}
                        animate={{ opacity: 1, filter: 'blur(0px)' }}
                        className="text-4xl md:text-5xl font-black text-white"
                      >
                        ₹{min.toLocaleString()}
                      </motion.span>
                    </AnimatePresence>
                    <span className="text-orange-500 font-bold opacity-50">-</span>
                    <AnimatePresence mode="wait">
                      <motion.span 
                        key={max}
                        initial={{ opacity: 0, filter: 'blur(5px)' }}
                        animate={{ opacity: 1, filter: 'blur(0px)' }}
                        className="text-2xl font-bold text-gray-400"
                      >
                        ₹{max.toLocaleString()}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => setQuoteModal(true)}
                className="btn-premium w-full flex items-center justify-center gap-3 text-sm py-4"
              >
                Confirm Interest <ChevronRight size={18} />
              </button>

              <p className="text-[9px] text-gray-600 text-center mt-6 uppercase tracking-wider font-bold leading-relaxed px-4">
                This is an automated estimate. Final pricing is confirmed after consultation.
              </p>
            </div>

            {/* Expert Help Card */}
            <div className="mt-8 p-6 rounded-3xl bg-orange-500/5 border border-orange-500/10 flex items-center gap-4 group hover:bg-orange-500/10 transition-colors cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white shadow-lg shadow-orange-500/20">
                <Sparkles size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-orange-400 uppercase tracking-wider">Need assistance?</p>
                <p className="text-sm text-white font-medium group-hover:text-orange-500 transition-colors">Chat with our AI Owl →</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteCalculator;
