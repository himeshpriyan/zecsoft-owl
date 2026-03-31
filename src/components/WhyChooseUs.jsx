import React from 'react';
import { motion } from 'framer-motion';
import { whyChooseUs } from '../data/mockData';
import { Sparkles, Zap, Shield, Clock, Award, Star } from 'lucide-react';

const icons = [Award, Zap, Shield, Clock, Star, Sparkles];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-32 bg-black relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Award size={16} className="text-orange-500" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">The Owl Edge</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white"
          >
            Why <span className="text-orange-500 text-glow">Partner with Us?</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-[2.5rem] glass border-white/5 hover:border-orange-500/30 hover:bg-orange-500/5 transition-all duration-500 relative overflow-hidden"
              >
                {/* ID Badge */}
                <div className="absolute top-6 right-6 text-[40px] font-black text-white/5 group-hover:text-orange-500/10 transition-colors">
                  0{i + 1}
                </div>

                <div className="w-16 h-16 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center mb-8 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500 shadow-lg shadow-orange-500/0 group-hover:shadow-orange-500/20">
                  <Icon size={28} />
                </div>

                <div className="inline-block px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-4">
                   <p className="text-[10px] font-bold text-orange-400 uppercase tracking-widest">{item.highlight || 'Premium'}</p>
                </div>

                <h3 className="text-2xl font-black text-white mb-4 group-hover:text-orange-500 transition-colors tracking-tight">
                  {item.title}
                </h3>
                
                <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">
                  {item.description}
                </p>

                {/* Decorative scanning line */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
