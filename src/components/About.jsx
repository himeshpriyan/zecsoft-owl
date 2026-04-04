import React from 'react';
import { motion } from 'framer-motion';
import { Award, Zap, Shield, Clock, Users, Building, Target, ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-orange-600/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Cinematic Visual Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            className="relative"
          >
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-orange-500/10 blur-[100px] rounded-full animate-pulse" />
            
            <div className="relative rounded-[3.5rem] overflow-hidden border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.9)] glass p-3 group">
              <div className="relative rounded-[3rem] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1497215842964-222b430dc094?q=90&w=1200&auto=format&fit=crop" 
                  alt="Zecsoft Owl Creative Lab"
                  className="w-full h-[350px] sm:h-[500px] md:h-[700px] object-cover group-hover:scale-110 transition-transform duration-[2s] ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020203] via-transparent to-transparent opacity-90" />
                
                {/* Stats Overlay - Optimized for Mobile */}
                <div className="absolute bottom-10 left-8 right-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                   <motion.div 
                     whileHover={{ y: -5 }}
                     className="glass p-8 rounded-3xl border-white/10 backdrop-blur-2xl shadow-2xl relative overflow-hidden group/card"
                   >
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity" />
                      <p className="text-4xl font-black text-orange-500 mb-2 relative z-10">100%</p>
                      <p className="text-[10px] text-gray-400 uppercase font-black tracking-[0.25em] leading-relaxed relative z-10">Dedication to <br /> Artistic Vision</p>
                   </motion.div>
                   <motion.div 
                     whileHover={{ y: -5 }}
                     className="glass p-8 rounded-3xl border-white/10 backdrop-blur-2xl shadow-2xl relative overflow-hidden group/card"
                   >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity" />
                      <p className="text-4xl font-black text-white mb-2 relative z-10">∞</p>
                      <p className="text-[10px] text-gray-400 uppercase font-black tracking-[0.25em] leading-relaxed relative z-10">Boundless <br /> Creative Potential</p>
                   </motion.div>
                </div>
              </div>
            </div>

            {/* Floating Achievement Badge */}
            <motion.div 
               animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }}
               transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
               className="absolute -top-8 -right-8 p-8 glass rounded-[2.5rem] border-orange-500/40 backdrop-blur-3xl shadow-[0_20px_50px_rgba(255,107,0,0.2)] z-20 hidden md:block"
            >
               <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-orange-500 flex items-center justify-center text-white shadow-2xl shadow-orange-500/50">
                     <Target size={28} />
                  </div>
                  <div>
                     <p className="text-white font-black text-base uppercase tracking-tighter">Committed to Quality</p>
                     <p className="text-orange-500 text-[9px] font-black uppercase tracking-[0.3em]">Precision output</p>
                  </div>
               </div>
            </motion.div>
          </motion.div>

          {/* Elite Text Side */}
          <div className="flex flex-col justify-center">
            <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="flex items-center gap-3 mb-8"
            >
               <div className="w-8 h-px bg-orange-500" />
               <span className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-500">The Owl Genesis</span>
            </motion.div>
            
            <motion.h2 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-10 leading-[1.1] tracking-tighter"
            >
               A New Standard of <br />
               <span className="orange-text orange-glow">Visual Precision.</span>
            </motion.h2>

            <motion.p 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1, delay: 0.4 }}
               className="text-gray-400 text-lg md:text-xl mb-12 leading-relaxed font-medium opacity-80"
            >
               We are an ambitious and passionate team of creators dedicated to engineering high-quality digital experiences. The Owl Creations was built on the core belief that elite visual storytelling and IT solutions should be accessible to all. Every project we touch is treated as our flagship masterpiece.
            </motion.p>

            <div className="grid gap-8 mb-16">
               {[
                 { icon: Users, title: "Passionate Visionaries", desc: "A tightly-knit ensemble of highly skilled cinematographers, developers, and design engineers." },
                 { icon: Zap, title: "Driven by Impact", desc: "We focus heavily on creating meaningful, robust digital ecosystems that fuel massive growth." }
               ].map((item, i) => (
                 <motion.div 
                   key={i} 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.5 + (i * 0.1) }}
                   className="flex gap-6 group"
                 >
                    <div className="w-16 h-16 shrink-0 rounded-[1.25rem] bg-white/5 border border-white/5 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500 shadow-xl">
                       <item.icon size={24} />
                    </div>
                    <div>
                       <h4 className="text-white font-black uppercase text-sm tracking-widest mb-2 group-hover:text-orange-500 transition-colors">{item.title}</h4>
                       <p className="text-gray-500 text-sm md:text-base leading-relaxed">{item.desc}</p>
                    </div>
                 </motion.div>
               ))}
            </div>

            <motion.button 
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               className="btn-premium w-fit group flex items-center gap-4 py-5"
            >
               Our Cinematic Vision <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
