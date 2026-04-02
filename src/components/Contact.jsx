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
    <section id="contact" className="py-32 bg-[#020203] relative overflow-hidden">
      {/* Cinematic Owl Watcher Eyes */}
      <div className="absolute top-[5%] right-[5%] w-[250px] h-[150px] bg-orange-600/10 blur-[80px] rounded-[100%] animate-pulse pointer-events-none" />
      <div className="absolute top-[5%] right-[25%] w-[250px] h-[150px] bg-orange-600/10 blur-[80px] rounded-[100%] animate-pulse [animation-delay:1s] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-orange-600/[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Info Side - Elite Branding */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-10 h-[2px] bg-orange-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-500">Contact Gateway</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black text-white mb-10 leading-[0.95] tracking-tighter"
            >
              Initiate Your <br />
              <span className="orange-text orange-glow">Visual Legacy.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed mb-12 max-w-lg"
            >
              Whether you're scaling an elite brand or architecting a cinematic masterpiece,
              our strategy masters are ready to define your path.
            </motion.p>

            <div className="grid gap-8">
              {[
                { icon: MapPin, label: "Global HQ", text: "Studio 42, Creative District, Chennai, India" },
                { icon: Mail, label: "Digital Intelligence", text: "visionaries@owlcreations.com" },
                { icon: Phone, label: "Elite Hotline", text: "+91 91234 56789" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 sm:gap-8 group cursor-pointer"
                >
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500 shadow-xl">
                    <item.icon size={22} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[9px] text-gray-600 uppercase font-black tracking-[0.3em] mb-1 truncate">{item.label}</p>
                    <span className="text-white font-black text-sm tracking-tight group-hover:text-orange-500 transition-colors uppercase leading-tight block break-words">{item.text}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Form Side - High-End Transmission */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass p-12 md:p-16 rounded-[4rem] border-white/5 relative z-10 overflow-hidden shadow-[0_50px_100px_-20px_rgba(255,107,0,0.1)]">
              <div className="absolute top-0 right-0 p-10">
                <Sparkles size={40} className="text-orange-500/10 animate-pulse" />
              </div>

              <AnimatePresence mode="wait">
                {formState === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <div className="w-24 h-24 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mx-auto mb-10 border border-green-500/20 shadow-[0_0_50px_rgba(34,197,94,0.2)]">
                      <CheckCircle size={48} className="animate-bounce" />
                    </div>
                    <h3 className="text-4xl font-[1000] text-white mb-6 uppercase tracking-tighter">Transmission Complete.</h3>
                    <p className="text-gray-500 text-[10px] uppercase tracking-[0.4em] font-black leading-relaxed px-6">Our Elite Strategist will initiate contact <br /> within the next 4-hour window.</p>
                    <button
                      onClick={() => setFormState('idle')}
                      className="mt-12 text-orange-500 font-black uppercase text-[10px] tracking-[0.4em] hover:text-white transition-colors flex items-center gap-2 mx-auto decoration-orange-500 underline underline-offset-8"
                    >
                      New Transmission
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-10"
                  >
                    <div className="space-y-3 group/field">
                      <label className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-600 px-1 group-focus-within/field:text-orange-500 transition-colors">Elite Identity</label>
                      <input
                        required
                        type="text"
                        placeholder="Enter your name"
                        className="w-full bg-transparent border-b-2 border-white/10 px-0 py-4 text-white placeholder:text-gray-800 outline-none focus:border-orange-500 transition-all font-black text-lg tracking-tight"
                      />
                    </div>
                    <div className="space-y-3 group/field">
                      <label className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-600 px-1 group-focus-within/field:text-orange-500 transition-colors">Coordinates (Email)</label>
                      <input
                        required
                        type="email"
                        placeholder="Enter email address"
                        className="w-full bg-transparent border-b-2 border-white/10 px-0 py-4 text-white placeholder:text-gray-800 outline-none focus:border-orange-500 transition-all font-black text-lg tracking-tight"
                      />
                    </div>
                    <div className="space-y-3 group/field">
                      <label className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-600 px-1 group-focus-within/field:text-orange-500 transition-colors">Strategic Objective</label>
                      <textarea
                        required
                        rows="3"
                        placeholder="Briefly describe your vision..."
                        className="w-full bg-transparent border-b-2 border-white/10 px-0 py-4 text-white placeholder:text-gray-800 outline-none focus:border-orange-500 transition-all font-black text-lg tracking-tight resize-none leading-relaxed"
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={formState === 'loading'}
                      type="submit"
                      className="btn-premium w-full flex items-center justify-center gap-6 py-6 shadow-2xl shadow-orange-500/30"
                    >
                      {formState === 'loading' ? (
                        <div className="w-6 h-6 border-[3px] border-white/20 border-t-white rounded-full animate-spin" />
                      ) : (
                        <span className="text-[11px] font-black uppercase tracking-[0.4em] flex items-center gap-4">Deploy Vision <ArrowRight size={22} /></span>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
