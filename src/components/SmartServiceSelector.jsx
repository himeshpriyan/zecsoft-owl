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
    <section id="smart-selector" className="py-32 bg-[#020203] relative overflow-hidden">
      {/* Background Cinematic Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-orange-600/[0.03] blur-[200px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
       
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <div className="w-8 h-[2px] bg-orange-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-500">Elite Discovery Engine</span>
            <div className="w-8 h-[2px] bg-orange-500" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-white mb-10 leading-[0.95] tracking-tighter"
          >
            Define Your <span className="orange-text orange-glow">Architectural Vision.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed"
          >
            Our intelligent decision engine analyzes your core objectives to 
            structure the perfect blueprint for your cinematic journey.
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto">
           {/* Cinematic Progress Stepper - Fully Interactive */}
           <div className="flex items-center justify-between mb-20 relative px-4 md:px-10">
              <div className="absolute top-[34%] left-0 w-full h-[2px] bg-white/[0.03] -translate-y-1/2" />
              <motion.div 
                 className="absolute top-[34%] left-0 h-[2px] bg-orange-500 -translate-y-1/2 shadow-[0_0_20px_rgba(255,107,0,0.4)]"
                 initial={{ width: '0%' }}
                 animate={{ width: `${(step - 1) * 33.33}%` }}
                 transition={{ duration: 0.8, ease: "circOut" }}
              />
              
              {currentSteps.map((s, i) => (
                <button 
                  key={i} 
                  onClick={() => step > i + 1 && setStep(i + 1)}
                  disabled={step === i + 1}
                  className={`relative z-10 flex flex-col items-center gap-4 transition-all duration-500 group ${step > i + 1 ? 'cursor-pointer' : 'cursor-default'}`}
                >
                   <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-sm font-black border transition-all duration-700 ${
                      step > i + 1 ? 'bg-orange-500 border-orange-500 text-white shadow-[0_10px_30px_rgba(255,107,0,0.3)]' :
                      step === i + 1 ? 'bg-[#020203] border-orange-500 text-orange-500 shadow-[0_0_20px_rgba(255,107,0,0.2)]' :
                      'bg-[#020203] border-white/10 text-gray-800'
                   } ${step > i + 1 ? 'group-hover:scale-110' : ''}`}>
                      {step > i + 1 ? <Check size={24} strokeWidth={3} /> : i + 1}
                   </div>
                   <div className="text-center">
                     <p className={`text-[10px] uppercase tracking-[0.3em] font-black leading-none mb-1 transition-colors ${
                        step >= i + 1 ? 'text-white' : 'text-gray-800'
                     }`}>{s}</p>
                     {step === i + 1 && (
                       <motion.div layoutId="stepIndicator" className="h-[2px] bg-orange-500 w-full mt-2" />
                     )}
                   </div>
                </button>
              ))}
           </div>

           {/* Interface Cinematic Container */}
           <div className="glass rounded-[4rem] p-10 md:p-16 min-h-[550px] relative overflow-hidden flex flex-col justify-center border-white/5 shadow-[0_100px_150px_-50px_rgba(0,0,0,0.8)]">
              {/* Background Glows for the Container */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/[0.02] blur-[100px] rounded-full" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/[0.02] blur-[100px] rounded-full" />

              <AnimatePresence mode="wait">
                 {isProcessing ? (
                    <motion.div 
                      key="processing"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      className="flex flex-col items-center justify-center text-center py-24"
                    >
                       <div className="relative w-32 h-32 mb-12">
                          <motion.div 
                             className="absolute inset-0 border-[6px] border-orange-500/10 rounded-[2.5rem]"
                             animate={{ rotate: 360 }}
                             transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                          />
                          <motion.div 
                             className="absolute inset-0 border-t-[6px] border-orange-500 rounded-[2.5rem]"
                             animate={{ rotate: 360 }}
                             transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
                          />
                          <div className="absolute inset-0 flex items-center justify-center text-orange-500">
                             <Brain size={48} className="animate-pulse" />
                          </div>
                       </div>
                       <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-[0.4em]">Calibrating...</h3>
                       <p className="text-gray-500 text-[11px] font-black uppercase tracking-widest italic opacity-60">Architecting global precision & visual impact</p>
                    </motion.div>
                 ) : (
                    <>
                      {/* Step 1: Category */}
                      {step === 1 && (
                        <motion.div 
                          key="step1"
                          initial={{ opacity: 0, x: 50, filter: 'blur(20px)' }}
                          animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                          exit={{ opacity: 0, x: -50, filter: 'blur(20px)' }}
                          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                        >
                           <div className="text-center mb-16">
                             <h3 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter">
                                Choose Your <span className="orange-text orange-glow">Genesis.</span>
                             </h3>
                             <p className="text-gray-500 text-[11px] uppercase tracking-[0.3em] font-black">Define the core objective of your masterpiece</p>
                           </div>
                           <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                              {Object.keys(serviceCategories).map((cat) => (
                                 <motion.button
                                    key={cat}
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => handleNext('category', cat)}
                                    className="group p-10 rounded-[3rem] bg-white/[0.03] border border-white/5 hover:border-orange-500/40 hover:bg-orange-500/[0.05] transition-all flex flex-col items-center gap-6 shadow-2xl relative overflow-hidden"
                                 >
                                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="text-5xl group-hover:scale-110 transition-transform duration-700 relative z-10">
                                       {cat === 'Video' ? '🎬' : cat === 'Marketing' ? '📱' : cat === 'Web' ? '💻' : '🎉'}
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 group-hover:text-white transition-colors relative z-10">{cat}</span>
                                 </motion.button>
                              ))}
                           </div>
                        </motion.div>
                      )}

                      {/* Step 2: Sub-service */}
                      {step === 2 && (
                        <motion.div 
                          key="step2"
                          initial={{ opacity: 0, x: 50, filter: 'blur(20px)' }}
                          animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                          exit={{ opacity: 0, x: -50, filter: 'blur(20px)' }}
                          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                        >
                           <div className="flex items-center justify-between mb-16 px-4">
                              <div>
                                <h3 className="text-3xl md:text-5xl font-black text-white mb-2 tracking-tighter">Precision <span className="text-orange-500">Focus.</span></h3>
                                <p className="text-gray-500 text-[11px] uppercase tracking-[0.3em] font-black">Select the specific elite craft</p>
                              </div>
                              <button onClick={() => setStep(1)} className="w-14 h-14 rounded-2xl bg-white/5 hover:bg-orange-500 text-gray-500 hover:text-white transition-all flex items-center justify-center border border-white/5 shadow-xl"><RotateCcw size={24} /></button>
                           </div>
                           <div className="grid md:grid-cols-2 gap-6">
                              {subServices[selections.category]?.map((sub, i) => (
                                 <motion.button
                                    key={sub.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    onClick={() => handleNext('subService', sub)}
                                    className="group p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/5 hover:border-orange-500/40 hover:bg-orange-500/[0.05] text-left transition-all flex justify-between items-center relative overflow-hidden shadow-2xl"
                                 >
                                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="relative z-10">
                                       <p className="text-white font-[1000] text-xl mb-2 uppercase tracking-tighter group-hover:text-orange-500 transition-colors">{sub.label}</p>
                                       <p className="text-[10px] text-gray-600 font-black uppercase tracking-[0.2em]">{sub.desc}</p>
                                    </div>
                                    <div className="w-12 h-12 rounded-[1.25rem] bg-white/5 group-hover:bg-orange-500 text-transparent group-hover:text-white flex items-center justify-center transition-all shadow-xl group-hover:shadow-orange-500/30">
                                       <ArrowRight size={24} />
                                    </div>
                                 </motion.button>
                              ))}
                           </div>
                        </motion.div>
                      )}

                      {/* Step 3: Budget */}
                      {step === 3 && (
                        <motion.div 
                          key="step3"
                          initial={{ opacity: 0, x: 50, filter: 'blur(20px)' }}
                          animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                          exit={{ opacity: 0, x: -50, filter: 'blur(20px)' }}
                          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                        >
                           <div className="text-center mb-16">
                             <h3 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter">Production <span className="text-orange-500">Amplitude.</span></h3>
                             <p className="text-gray-500 text-[11px] uppercase tracking-[0.3em] font-black">Structure the scale of your investment</p>
                           </div>
                           <div className="grid md:grid-cols-3 gap-8">
                              {budgets.map((b, i) => (
                                 <motion.button
                                    key={b.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    onClick={() => handleNext('budget', b.id)}
                                    className={`relative p-12 rounded-[3.5rem] border transition-all duration-700 text-center group flex flex-col items-center gap-8 shadow-2xl ${
                                       b.id === 'Medium' ? 'bg-orange-500 border-orange-500 shadow-[0_30px_60px_-15px_rgba(255,107,0,0.3)]' : 'bg-white/[0.03] border-white/5 hover:border-orange-500/40 hover:bg-orange-500/[0.05]'
                                    }`}
                                 >
                                    <div className={`w-20 h-20 rounded-[1.5rem] transition-all duration-500 flex items-center justify-center ${
                                       b.id === 'Medium' ? 'bg-white text-orange-500 shadow-2xl' : 'bg-white/5 text-orange-500 group-hover:bg-orange-500 group-hover:text-white group-hover:shadow-orange-500/40'
                                    }`}>
                                       <b.icon size={36} />
                                    </div>
                                    <div>
                                       <p className={`font-[1000] text-2xl mb-2 uppercase tracking-tighter ${b.id === 'Medium' ? 'text-white' : 'text-white group-hover:text-orange-500'}`}>{b.label.split(' ')[0]}</p>
                                       <p className={`text-[9px] uppercase font-black tracking-[0.25em] leading-relaxed ${b.id === 'Medium' ? 'text-white/70' : 'text-gray-600 group-hover:text-gray-400'}`}>{b.desc}</p>
                                    </div>
                                 </motion.button>
                              ))}
                           </div>
                        </motion.div>
                      )}

                      {/* Step 4: Result */}
                      {step === 4 && result && (
                        <motion.div 
                          key="step4"
                          initial={{ opacity: 0, scale: 0.95, filter: 'blur(20px)' }}
                          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                          className="text-center"
                        >
                           <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass border-orange-500/30 mb-8 mx-auto shadow-2xl">
                              <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Elite Blueprint Finalized</span>
                           </div>
                           
                           <h3 className="text-4xl md:text-6xl font-[1000] text-white mb-12 tracking-tighter">Your Masterpiece <br /> <span className="orange-text orange-glow">is Synthesized.</span></h3>
                           
                           <div className="glass p-12 md:p-16 rounded-[4rem] max-w-2xl mx-auto mb-16 overflow-hidden relative border-orange-500/40 shadow-[0_50px_100px_-20px_rgba(255,107,0,0.2)]">
                              <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-orange-500/10 blur-[80px] rounded-full pointer-events-none" />
                              <div className="absolute bottom-[-50px] left-[-50px] w-64 h-64 bg-white/5 blur-[80px] rounded-full pointer-events-none" />
                              
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left relative z-10">
                                 <div>
                                    <p className="text-[9px] text-gray-600 uppercase font-black tracking-[0.4em] mb-3">Architectural Genesis</p>
                                    <p className="text-white font-[1000] text-2xl uppercase tracking-tighter">{result.category}</p>
                                 </div>
                                 <div>
                                    <p className="text-[9px] text-gray-600 uppercase font-black tracking-[0.4em] mb-3">Strategic Craft</p>
                                    <p className="text-white font-[1000] text-2xl uppercase tracking-tighter">{result.subService.label}</p>
                                 </div>
                                 <div className="md:col-span-2 pt-10 border-t border-white/10">
                                    <p className="text-[10px] text-gray-600 uppercase font-black tracking-[0.4em] mb-4">Precision Investment Estimate</p>
                                    <div className="flex flex-col md:flex-row md:items-end gap-4">
                                       <span className="text-6xl md:text-7xl font-[1000] text-orange-500 tracking-tighter leading-none">₹{result.price.toLocaleString()}</span>
                                       <span className="text-gray-500 font-black uppercase text-[10px] tracking-[0.3em] mb-2 italic">Standard Initialization Plan</span>
                                    </div>
                                    <p className="text-[9px] text-gray-700 font-black uppercase tracking-[0.3em] mt-8 leading-relaxed">Generated by Owl Decision Architecture v2.0 - Global Standards Applied.</p>
                                 </div>
                              </div>
                           </div>

                           <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                              <motion.button 
                                 whileHover={{ scale: 1.05 }}
                                 whileTap={{ scale: 0.95 }}
                                 onClick={() => setQuoteModal(true)}
                                 className="btn-premium w-full sm:w-auto px-12 py-7 shadow-2xl shadow-orange-500/40"
                              >
                                 DEPLOY PROJECT NOW <ArrowRight size={24} className="ml-4" />
                              </motion.button>
                              <motion.button 
                                 whileHover={{ x: -10 }}
                                 onClick={reset}
                                 className="text-gray-500 hover:text-white font-black text-[11px] uppercase tracking-[0.4em] transition-all flex items-center gap-3 p-6 group"
                              >
                                 <RotateCcw size={18} className="group-hover:rotate-[-180deg] transition-transform duration-700" /> RE-ARCHITECT VISION
                              </motion.button>
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
