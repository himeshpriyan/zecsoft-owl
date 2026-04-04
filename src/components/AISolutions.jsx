import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Sparkles, Zap, Target } from 'lucide-react';

export default function AISolutions() {
  const features = [
    {
      icon: <Target size={24} />,
      title: 'Smart Recommendations',
      description: 'Our digital funnels use AI to predict user intent and recommend the perfect products or services instantly.',
    },
    {
      icon: <Zap size={24} />,
      title: 'Workflow Automation',
      description: 'We automate your lead capture and follow-ups, reducing manual work and ensuring zero leads are lost.',
    },
    {
      icon: <Bot size={24} />,
      title: 'Faster Results',
      description: 'Leveraging AI tools in our creative process means we deliver high-quality assets 3x faster than traditional agencies.',
    }
  ];

  return (
    <section className="py-24 bg-[#0d0d0d] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text */}
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-8 h-[2px] bg-orange-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-500 flex items-center gap-1">
                <Sparkles size={12} /> State of the Art
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tighter"
            >
              Smart <span className="text-orange-500">AI Solutions</span><br />
              For Your Business
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg leading-relaxed mb-10"
            >
              We use smart tools to speed up work and improve results. We help you connect with your audience faster using modern, efficient systems.
            </motion.p>
            
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.3 }}
            >
               <button className="btn-outline flex items-center gap-3 group">
                 Learn About Our Tech <Zap size={18} className="group-hover:text-orange-500 transition-colors" />
               </button>
            </motion.div>
          </div>

          {/* Right Features Grid */}
          <div className="grid gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-orange-500/30 hover:bg-white/[0.04] transition-all flex items-start gap-6 cursor-pointer shadow-lg hover:shadow-[0_10px_30px_rgba(255,107,0,0.1)]"
              >
                <div className="w-14 h-14 rounded-2xl bg-black border border-white/10 flex flex-shrink-0 items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500 shadow-xl">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">{feature.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
