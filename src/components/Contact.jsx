import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, MapPin, Mail, Phone, Clock, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState('idle'); // idle, loading, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('loading');
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => setFormState('idle'), 5000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-32 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-stretch">
          
          {/* Info Side */}
          <div className="flex flex-col justify-center">
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="flex items-center gap-2 mb-6"
            >
               <Send size={16} className="text-orange-500" />
               <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">Collaborate</span>
            </motion.div>
            
            <motion.h2 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tight"
            >
               Let's Launch Your <br />
               <span className="text-orange-500 text-glow">Next Masterpiece.</span>
            </motion.h2>

            <p className="text-gray-400 text-lg mb-12 leading-relaxed max-w-md">
              Whether you're looking for a cinematic film, an elite web platform, 
              or a strategic marketing scale — we are architecting the path.
            </p>

            <div className="space-y-8">
               {[
                 { icon: MapPin, text: "Studio 42, Creative District, Chennai, India" },
                 { icon: Mail, text: "visionaries@owlcreations.com" },
                 { icon: Phone, text: "+91 91234 56789" },
                 { icon: Clock, text: "24/7 Digital Operations" },
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-6 group">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all shadow-glow">
                       <item.icon size={20} />
                    </div>
                    <span className="text-white font-bold text-sm tracking-tight group-hover:text-orange-500 transition-colors uppercase">{item.text}</span>
                 </div>
               ))}
            </div>
          </div>

          {/* Form Side */}
          <div className="relative">
             <div className="glass p-10 md:p-14 rounded-[3rem] border-white/5 relative z-10 overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-8">
                   <Sparkles size={32} className="text-orange-500/10" />
                </div>

                <AnimatePresence mode="wait">
                  {formState === 'success' ? (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-20"
                    >
                      <div className="w-24 h-24 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mx-auto mb-8 shadow-glow">
                        <CheckCircle size={48} />
                      </div>
                      <h3 className="text-3xl font-black text-white mb-4">Transmission Recieved.</h3>
                      <p className="text-gray-400 text-sm uppercase tracking-widest font-bold">Our Strategist will reach out in 4hrs.</p>
                      <button 
                        onClick={() => setFormState('idle')}
                        className="mt-10 text-orange-400 font-black uppercase text-[10px] tracking-[0.3em] hover:text-white transition-colors"
                      >
                         ← Send another transmission
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form 
                      key="form"
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 px-1">Identity</label>
                        <input 
                          required
                          type="text" 
                          placeholder="Your Premium Name"
                          className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 text-white placeholder:text-gray-700 outline-none focus:border-orange-500/50 transition-all font-bold"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 px-1">Coordinates</label>
                        <input 
                          required
                          type="email" 
                          placeholder="Email Address"
                          className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 text-white placeholder:text-gray-700 outline-none focus:border-orange-500/50 transition-all font-bold"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 px-1">Objective</label>
                        <textarea 
                          required
                          rows="4"
                          placeholder="Describe your vision..."
                          className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 text-white placeholder:text-gray-700 outline-none focus:border-orange-500/50 transition-all font-bold resize-none"
                        />
                      </div>
                      
                      <button 
                        disabled={formState === 'loading'}
                        type="submit"
                        className="btn-premium w-full flex items-center justify-center gap-4 py-5"
                      >
                        {formState === 'loading' ? (
                          <div className="w-6 h-6 border-4 border-white/20 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>Deploy Strategy <ArrowRight size={20} /></>
                        )}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
