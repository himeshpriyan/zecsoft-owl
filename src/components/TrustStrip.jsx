import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { label: 'Projects Completed', value: 100, suffix: '+' },
  { label: 'Happy Clients', value: 50, suffix: '+' },
  { label: 'Years Experience', value: 5, suffix: '+' },
];

const CountUpNumber = ({ target, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const startTime = performance.now();
      
      const animateCount = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        // Easing function: easeOutExpo
        const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        setCount(Math.floor(easeOutExpo * target));
        
        if (progress < 1) {
          requestAnimationFrame(animateCount);
        } else {
          setCount(target);
        }
      };
      
      requestAnimationFrame(animateCount);
    }
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const TrustStrip = () => {
  return (
    <section id="trust" className="py-24 bg-black relative overflow-hidden">
      {/* Dynamic Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/10 to-transparent" />
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 text-center items-center justify-center">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center group flex flex-col items-center"
            >
              <h3 className="text-5xl md:text-7xl font-[1000] text-white mb-4 group-hover:text-orange-500 transition-colors drop-shadow-xl tracking-tighter">
                <CountUpNumber target={stat.value} suffix={stat.suffix} />
              </h3>
              <div className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 group-hover:border-orange-500/30 group-hover:bg-orange-500/10 transition-all duration-300">
                <p className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400 group-hover:text-orange-400 transition-colors">
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
