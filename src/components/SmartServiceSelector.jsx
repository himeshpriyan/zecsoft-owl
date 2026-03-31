import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { serviceCategories, budgetMultipliers } from '../data/mockData';
import { useApp } from '../context/AppContext';
import { Sparkles, ArrowRight, Brain, Zap, Target, Search, Check, RotateCcw } from 'lucide-react';

const subServices = {
  Video: [
    { id: 'cinematography', label: 'Cinematography', price: 5000, desc: 'Cinematic visual storytelling' },
    { id: 'video-editing', label: 'Video Editing', price: 3000, desc: 'Professional post-production' },
    { id: 'short-film', label: 'Short Film', price: 15000, desc: 'Narrative filmmaking' },
    { id: 'sfx', label: 'SFX & VFX', price: 6000, desc: 'High-end visual effects' },
  ],
  Marketing: [
    { id: 'social-media', label: 'Social Media', price: 8000, desc: 'Brand growth & engagement' },
    { id: 'content-creation', label: 'Content Creation', price: 5000, desc: 'Viral-ready digital assets' },
    { id: 'ad-campaigns', label: 'Ad Campaigns', price: 10000, desc: 'Targeted ROI-driven ads' },
  ],
  Web: [
    { id: 'website-dev', label: 'Web Dev', price: 20000, desc: 'High-performance platforms' },
    { id: 'ui-ux', label: 'UI/UX Design', price: 12000, desc: 'User-centric interfaces' },
    { id: 'landing-page', label: 'Landing Page', price: 8000, desc: 'Conversion-optimized pages' },
  ],
  Event: [
    { id: 'wedding', label: 'Wedding', price: 25000, desc: 'Eternal cinematic memories' },
    { id: 'college-event', label: 'College Event', price: 5000, desc: 'Dynamic youth-focused media' },
    { id: 'birthday', label: 'Birthday', price: 6000, desc: 'Heartwarming celebrations' },
  ],
};

const budgets = [
  { id: 'Low', label: 'Value Focus', icon: Zap, desc: 'Essential quality, core features' },
  { id: 'Medium', label: 'Professional', icon: Target, desc: 'Best-in-class features & output' },
  { id: 'Premium', label: 'Luxury / Elite', icon: Sparkles, desc: 'Uncompromising quality & service' },
];

export default function SmartServiceSelector() {
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [selections, setSelections] = useState({ category: null, subService: null, budget: null });
  const [result, setResult] = useState(null);
  const { setQuoteModal } = useApp();

  const handleNext = (key, value) => {
    setSelections(prev => ({ ...prev, [key]: value }));
    setIsProcessing(true);
    
    // Simulate AI Processing
    setTimeout(() => {
      setIsProcessing(false);
      setStep(prev => prev + 1);
      
      if (key === 'budget') {
        const price = Math.round(selections.subService.price * budgetMultipliers[value]);
        setResult({ ...selections, budget: value, price });
      }
    }, 1200);
  };

  const reset = () => {
    setStep(1);
    setIsProcessing(false);
    setSelections({ category: null, subService: null, budget: null });
    setResult(null);
  };

  const currentSteps = ['Concept', 'Precision', 'Scale', 'Blueprint'];

  return (
    <section id="smart-selector" className="py-32 bg-black relative">
       {/* Background Grid */}
       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
       
       <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="flex items-center justify-center gap-2 mb-4"
            >
               <Brain size={16} className="text-orange-500" />
               <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">Decision Engine v2.0</span>
            </motion.div>
            <motion.h2 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-4xl md:text-6xl font-black text-white"
            >
               Service <span className="text-orange-500">Discovery</span>
            </motion.h2>
          </div>

          <div className="max-w-4xl mx-auto">
             {/* Progress Bar */}
             <div className="flex items-center justify-between mb-12 relative">
                <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 -translate-y-1/2" />
                <motion.div 
                   className="absolute top-1/2 left-0 h-[2px] bg-orange-500 -translate-y-1/2 shadow-[0_0_15px_rgba(249,115,22,0.5)]"
                   initial={{ width: '0%' }}
                   animate={{ width: `${(step - 1) * 33.33}%` }}
                />
                
                {currentSteps.map((s, i) => (
                  <div key={i} className="relative z-10 flex flex-col items-center gap-2">
                     <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold border transition-all duration-500 ${
                        step > i + 1 ? 'bg-orange-500 border-orange-500 text-white' :
                        step === i + 1 ? 'bg-black border-orange-500 text-orange-500 shadow-glow' :
                        'bg-black border-white/5 text-gray-700'
                     }`}>
                        {step > i + 1 ? <Check size={16} /> : i + 1}
                     </div>
                     <span className={`text-[8px] uppercase tracking-widest font-black transition-colors ${
                        step >= i + 1 ? 'text-white' : 'text-gray-800'
                     }`}>{s}</span>
                  </div>
                ))}
             </div>

             {/* Interface Container */}
             <div className="glass rounded-[3rem] p-8 md:p-12 min-h-[450px] relative overflow-hidden flex flex-col justify-center">
                <AnimatePresence mode="wait">
                   {isProcessing ? (
                      <motion.div 
                        key="processing"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center justify-center text-center py-20"
                      >
                         <div className="relative w-24 h-24 mb-8">
                            <motion.div 
                               className="absolute inset-0 border-4 border-orange-500/20 rounded-full"
                               animate={{ rotate: 360 }}
                               transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                            />
                            <motion.div 
                               className="absolute inset-0 border-t-4 border-orange-500 rounded-full"
                               animate={{ rotate: 360 }}
                               transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                            />
                            <div className="absolute inset-0 flex items-center justify-center text-orange-500">
                               <Search size={32} />
                            </div>
                         </div>
                         <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-widest">Optimizing Choice...</h3>
                         <p className="text-gray-500 text-sm italic">Calculating potential impact and alignment</p>
                      </motion.div>
                   ) : (
                      <>
                        {/* Step 1: Category */}
                        {step === 1 && (
                          <motion.div 
                            key="step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                          >
                             <h3 className="text-2xl md:text-3xl font-black text-white mb-8 text-center">
                                What is your primary <span className="text-orange-500">Vision?</span>
                             </h3>
                             <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                                {Object.keys(serviceCategories).map((cat) => (
                                   <button
                                      key={cat}
                                      onClick={() => handleNext('category', cat)}
                                      className="group p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-orange-500/50 hover:bg-orange-500/10 transition-all flex flex-col items-center gap-4"
                                   >
                                      <div className="text-4xl group-hover:scale-110 transition-transform duration-500">
                                         {cat === 'Video' ? '🎬' : cat === 'Marketing' ? '📱' : cat === 'Web' ? '💻' : '🎉'}
                                      </div>
                                      <span className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors">{cat}</span>
                                   </button>
                                ))}
                             </div>
                          </motion.div>
                        )}

                        {/* Step 2: Sub-service */}
                        {step === 2 && (
                          <motion.div 
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                          >
                             <div className="flex items-center gap-4 mb-8">
                                <button onClick={() => setStep(1)} className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-500 hover:text-white transition-all"><RotateCcw size={16} /></button>
                                <h3 className="text-2xl font-black text-white">Select specific <span className="text-orange-500">Craftsmanship:</span></h3>
                             </div>
                             <div className="grid md:grid-cols-2 gap-4">
                                {subServices[selections.category]?.map((sub) => (
                                   <button
                                      key={sub.id}
                                      onClick={() => handleNext('subService', sub)}
                                      className="group p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-orange-500/30 hover:bg-orange-500/5 text-left transition-all flex justify-between items-center"
                                   >
                                      <div>
                                         <p className="text-white font-bold mb-1">{sub.label}</p>
                                         <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">{sub.desc}</p>
                                      </div>
                                      <div className="w-8 h-8 rounded-lg bg-orange-500/0 group-hover:bg-orange-500/20 text-orange-500/0 group-hover:text-orange-500 flex items-center justify-center transition-all">
                                         <ArrowRight size={16} />
                                      </div>
                                   </button>
                                ))}
                             </div>
                          </motion.div>
                        )}

                        {/* Step 3: Budget */}
                        {step === 3 && (
                          <motion.div 
                            key="step3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                          >
                             <h3 className="text-2xl font-black text-white mb-8 text-center">Set your <span className="text-orange-500">Production Scale:</span></h3>
                             <div className="grid md:grid-cols-3 gap-6">
                                {budgets.map((b) => (
                                   <button
                                      key={b.id}
                                      onClick={() => handleNext('budget', b.id)}
                                      className={`p-8 rounded-3xl border transition-all text-center group flex flex-col items-center gap-4 ${
                                         b.id === 'Medium' ? 'bg-orange-500 border-orange-500 shadow-lg shadow-orange-500/20' : 'bg-white/5 border-white/5 hover:border-orange-500/50'
                                      }`}
                                   >
                                      <div className={`p-4 rounded-2xl transition-colors ${
                                         b.id === 'Medium' ? 'bg-white text-orange-500' : 'bg-white/10 text-orange-500 group-hover:bg-orange-500 group-hover:text-white'
                                      }`}>
                                         <b.icon size={24} />
                                      </div>
                                      <div>
                                         <p className={`font-black text-lg mb-1 ${b.id === 'Medium' ? 'text-white' : 'text-white group-hover:text-orange-500'}`}>{b.id}</p>
                                         <p className={`text-[9px] uppercase font-bold tracking-widest leading-relaxed ${b.id === 'Medium' ? 'text-white/80' : 'text-gray-600 group-hover:text-gray-400'}`}>{b.desc}</p>
                                      </div>
                                   </button>
                                ))}
                             </div>
                          </motion.div>
                        )}

                        {/* Step 4: Result */}
                        {step === 4 && result && (
                          <motion.div 
                            key="step4"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center"
                          >
                             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-orange-500/20 mb-6 mx-auto">
                                <Check size={16} className="text-green-500" />
                                <span className="text-[10px] font-bold uppercase tracking-wider text-white">Perfect Blueprint Compiled</span>
                             </div>
                             
                             <h3 className="text-3xl md:text-5xl font-black text-white mb-10">Your Project <span className="text-orange-500">Awaits</span></h3>
                             
                             <div className="glass p-8 rounded-3xl max-w-lg mx-auto mb-10 overflow-hidden relative border-orange-500/30">
                                <div className="absolute top-0 right-0 p-4">
                                   <Zap size={24} className="text-orange-500/30" />
                                </div>
                                
                                <div className="grid grid-cols-2 gap-y-6 text-left relative z-10">
                                   <div>
                                      <p className="text-[9px] text-gray-500 uppercase font-black tracking-widest mb-1">Architecture</p>
                                      <p className="text-white font-bold">{result.category}</p>
                                   </div>
                                   <div>
                                      <p className="text-[9px] text-gray-500 uppercase font-black tracking-widest mb-1">Service</p>
                                      <p className="text-white font-bold">{result.subService.label}</p>
                                   </div>
                                   <div className="col-span-2 border-t border-white/10 pt-4">
                                      <p className="text-[9px] text-gray-500 uppercase font-black tracking-widest mb-2">Estimated Investment</p>
                                      <div className="flex items-end gap-2">
                                         <span className="text-4xl font-black text-orange-500">₹{result.price.toLocaleString()}</span>
                                         <span className="text-gray-600 font-bold mb-1 uppercase text-[10px] tracking-widest">Base Plan</span>
                                      </div>
                                   </div>
                                </div>
                             </div>

                             <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <button 
                                   onClick={() => setQuoteModal(true)}
                                   className="btn-premium w-full sm:w-auto"
                                >
                                   Deploy Project Now <ArrowRight size={20} className="ml-2" />
                                </button>
                                <button 
                                   onClick={reset}
                                   className="text-gray-500 hover:text-white font-bold text-xs uppercase tracking-widest transition-colors flex items-center gap-2 p-4"
                                >
                                   <RotateCcw size={14} /> Refine Architecture
                                </button>
                             </div>
                          </motion.div>
                        )}
                      </>
                   )}
                </AnimatePresence>
             </div>
          </div>
       </div>
    </section>
  );
}
