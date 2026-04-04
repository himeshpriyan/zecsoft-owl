import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../data/mockData';
import { Star, Quote, Sparkles, MessageCircle } from 'lucide-react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32 bg-[#020203] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-600/[0.03] blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-[-10%] w-[600px] h-[600px] bg-orange-600/[0.02] blur-[140px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <div className="w-8 h-[2px] bg-orange-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-500">Client Feedback</span>
            <div className="w-8 h-[2px] bg-orange-500" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-white mb-10 leading-[0.95] tracking-tighter"
          >
            What People <span className="orange-text orange-glow">Say.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed"
          >
            Don't just take our word for it. Here is what our recent clients 
            have to say about working with our team.
          </motion.p>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-12 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide items-stretch">
          {testimonials.map((test, i) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="group flex flex-col min-w-[320px] md:min-w-[420px] max-w-[450px] shrink-0 snap-center p-12 rounded-[3.5rem] glass border-white/5 hover:border-orange-500/30 hover:bg-orange-500/[0.05] transition-all duration-700 relative overflow-hidden h-auto shadow-2xl hover:-translate-y-2 hover:shadow-[0_20px_50px_-15px_rgba(255,107,0,0.3)]"
            >
              {/* Cinematic Quote Icon */}
              <div className="absolute top-10 right-12 text-orange-500/5 group-hover:text-orange-500/10 transition-all duration-700 -rotate-12 group-hover:scale-110">
                <Quote size={80} />
              </div>

              {/* Star Premium Rating */}
              <div className="flex gap-1.5 mb-10">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-orange-500 fill-orange-500 shadow-glow-orange" />
                ))}
              </div>

              <p className="text-xl text-white font-medium leading-[1.6] mb-12 italic relative z-10 tracking-tight group-hover:text-white transition-colors duration-500 flex-1">
                "{test.review}"
              </p>

              <div className="flex items-center gap-6 border-t border-white/5 pt-10 mt-auto">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-orange-500/30 group-hover:border-orange-500 transition-colors duration-500 p-1 bg-black">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-orange-500/10 to-orange-500/40 flex items-center justify-center text-white overflow-hidden shadow-xl">
                       <img src={test.avatar} alt={test.name} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center border-2 border-[#020203] shadow-lg">
                    <Sparkles size={10} className="text-white" />
                  </div>
                </div>
                
                <div>
                  <h4 className="text-white font-black uppercase tracking-[0.2em] text-[11px] mb-1 group-hover:text-orange-500 transition-colors">
                    {test.name}
                  </h4>
                  <div className="flex flex-col">
                    <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest leading-none mb-1">
                       {test.role}
                    </p>
                    <p className="text-[9px] text-orange-500/60 font-black uppercase tracking-[0.3em]">
                       {test.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Sparkle */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <Sparkles size={16} className="text-orange-500/30" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
