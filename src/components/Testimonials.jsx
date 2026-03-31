import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../data/mockData';
import { Star, Quote, Sparkles, MessageCircle } from 'lucide-react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32 bg-black relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/5 blur-[140px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <MessageCircle size={16} className="text-orange-500" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">Social Proof</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white"
          >
            Client <span className="text-orange-500">Voices</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((test, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-10 rounded-[3rem] glass border-white/5 hover:border-orange-500/20 hover:bg-orange-500/5 transition-all duration-500 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-8 right-10 text-orange-500/10 group-hover:text-orange-500/20 transition-colors">
                <Quote size={64} />
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-orange-500 fill-orange-500" />
                ))}
              </div>

              <p className="text-lg text-white font-medium leading-relaxed mb-10 italic">
                "{test.text}"
              </p>

              <div className="flex items-center gap-4 border-t border-white/5 pt-8">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-500/20 to-orange-500/40 flex items-center justify-center text-orange-500 overflow-hidden border border-orange-500/30">
                  <span className="text-xl font-black">{test.name.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="text-white font-black uppercase tracking-widest text-xs mb-1">
                    {test.name}
                  </h4>
                  <div className="flex items-center gap-2">
                    <Sparkles size={10} className="text-orange-500" />
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                       Verified Client
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
