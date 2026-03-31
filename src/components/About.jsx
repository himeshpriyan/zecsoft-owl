import React from 'react';
import { motion } from 'framer-motion';
import { Award, Zap, Shield, Clock, Users, Building, Target, ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-32 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Visual Side */}
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-orange-500/10 blur-[60px] rounded-full animate-pulse" />
            <div className="relative rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl glass p-2 group">
              <img 
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80" 
                alt="The Owl Creations Team"
                className="w-full h-[600px] object-cover rounded-[2.5rem] group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              
              {/* Stats Overlay */}
              <div className="absolute bottom-8 left-8 right-8 grid grid-cols-2 gap-4">
                 <div className="glass p-6 rounded-2xl border-white/10 backdrop-blur-xl">
                    <p className="text-3xl font-black text-orange-500 mb-1">10+</p>
                    <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest leading-relaxed">Years of Artistic <br /> Excellence</p>
                 </div>
                 <div className="glass p-6 rounded-2xl border-white/10 backdrop-blur-xl">
                    <p className="text-3xl font-black text-white mb-1">500+</p>
                    <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest leading-relaxed">Premium Brands <br /> Transformed</p>
                 </div>
              </div>
            </div>

            {/* Floating Achievement */}
            <motion.div 
               animate={{ y: [0, -15, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
               className="absolute -top-6 -right-6 p-6 glass rounded-[2rem] border-orange-500/30 backdrop-blur-2xl shadow-xl z-20"
            >
               <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center text-white shadow-lg">
                     <Award size={24} />
                  </div>
                  <div>
                     <p className="text-white font-black text-sm uppercase tracking-tight">Top Agency 2024</p>
                     <p className="text-orange-500 text-[10px] font-bold uppercase tracking-widest">Award Winning Vision</p>
                  </div>
               </div>
            </motion.div>
          </div>

          {/* Text Side */}
          <div>
            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="flex items-center gap-2 mb-6"
            >
               <Target size={16} className="text-orange-500" />
               <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">The Owl Story</span>
            </motion.div>
            
            <motion.h2 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tight"
            >
               Architecting the <br />
               <span className="text-orange-500 text-glow">Visual Future.</span>
            </motion.h2>

            <motion.p 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               className="text-gray-400 text-lg mb-8 leading-relaxed font-medium"
            >
               Born from a desire to redefine storytelling through a cinematic lens, 
               The Owl Creations has evolved into India's premier creative agency. 
               We bridge the gap between technical precision and artistic soul.
            </motion.p>

            <div className="space-y-6 mb-12">
               {[
                 { icon: Users, title: "Elite Collective", desc: "A curated team of world-class cinematographers & engineers." },
                 { icon: Building, title: "Industry agnostic", desc: "Crafting narratives for tech, luxury, real-estate, and lifestyle." }
               ].map((item, i) => (
                 <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-orange-500">
                       <item.icon size={20} />
                    </div>
                    <div>
                       <h4 className="text-white font-black uppercase text-sm tracking-tight mb-1">{item.title}</h4>
                       <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                 </div>
               ))}
            </div>

            <button className="btn-premium group flex items-center gap-3">
               Explore Our Vision <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
