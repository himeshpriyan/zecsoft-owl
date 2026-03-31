import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Cinematic Workflows', value: '1,200+' },
  { label: 'Global Clients', value: '500+' },
  { label: 'Creative Excellence', value: '100%' },
  { label: 'Production Hours', value: '50k+' },
];

const TrustStrip = () => {
  return (
    <section id="trust" className="py-20 bg-black relative overflow-hidden">
      {/* Dynamic Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/10 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center group"
            >
              <h3 className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-orange-500 transition-colors">
                {stat.value}
              </h3>
              <div className="inline-block px-3 py-1 rounded-full bg-orange-500/5 border border-orange-500/10 mb-2">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 group-hover:text-orange-400 transition-colors">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
