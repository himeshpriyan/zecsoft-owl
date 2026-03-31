import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, MoveLeft, MoveRight, Layers, Camera } from 'lucide-react';

const comparisons = [
  {
    id: 1,
    label: 'Color Grading',
    before: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1200&q=80',
    after: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&q=80',
    beforeLabel: 'Raw LOG Footage',
    afterLabel: 'Cinematic Grade',
  },
  {
    id: 2,
    label: 'Post-Production',
    before: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&q=80',
    after: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200&q=80',
    beforeLabel: 'Standard Edit',
    afterLabel: 'Mastered Output',
  },
];

function ComparisonSlider({ item }) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPos((x / rect.width) * 100);
  }, []);

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const onTouchMove = (e) => {
    if (!isDragging.current) return;
    handleMove(e.touches[0].clientX);
  };

  return (
    <div className="relative aspect-video rounded-[2.5rem] overflow-hidden group border border-white/10 shadow-2xl">
      <div
        ref={containerRef}
        className="w-full h-full select-none cursor-ew-resize relative"
        onMouseDown={() => (isDragging.current = true)}
        onMouseUp={() => (isDragging.current = false)}
        onMouseLeave={() => (isDragging.current = false)}
        onMouseMove={onMouseMove}
        onTouchStart={() => (isDragging.current = true)}
        onTouchEnd={() => (isDragging.current = false)}
        onTouchMove={onTouchMove}
      >
        {/* After Image */}
        <img src={item.after} alt="after" className="absolute inset-0 w-full h-full object-cover" />
        
        {/* Before Image (Clipped) */}
        <div 
          className="absolute inset-0 overflow-hidden" 
          style={{ width: `${pos}%` }}
        >
          <img 
            src={item.before} 
            alt="before" 
            className="absolute inset-0 w-full h-full object-cover" 
            style={{ width: `${10000 / pos}%`, maxWidth: 'none' }} 
          />
        </div>

        {/* Labels */}
        <div className="absolute top-6 left-6 z-20 glass px-4 py-2 rounded-full border-white/10">
          <span className="text-[10px] font-black uppercase tracking-widest text-white/50">{item.beforeLabel}</span>
        </div>
        <div className="absolute top-6 right-6 z-20 glass px-4 py-2 rounded-full border-orange-500/30">
          <span className="text-[10px] font-black uppercase tracking-widest text-orange-500">{item.afterLabel}</span>
        </div>

        {/* Slider Handle */}
        <div 
          className="absolute inset-y-0 w-1 bg-white/50 backdrop-blur-sm z-30"
          style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
             <div className="flex gap-1">
                <MoveLeft size={14} />
                <MoveRight size={14} />
             </div>
          </div>
        </div>

        {/* Scanline Animation */}
        <motion.div 
            className="absolute inset-y-0 w-[2px] bg-orange-500/50 z-10"
            animate={{ left: ['0%', '100%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        />
      </div>
    </div>
  );
}

export default function BeforeAfterModule() {
  const [active, setActive] = useState(0);

  return (
    <section id="transformation" className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Layers size={16} className="text-orange-500" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">Visual Mastery</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white"
          >
            The <span className="text-orange-500">Magic</span> Touch
          </motion.h2>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Tab Selector */}
          <div className="flex justify-center gap-4 mb-10">
            {comparisons.map((c, i) => (
              <button
                key={c.id}
                onClick={() => setActive(i)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                  active === i 
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20' 
                    : 'bg-white/5 text-gray-500 hover:text-white hover:bg-white/10'
                }`}
              >
                <Camera size={14} />
                {c.label}
              </button>
            ))}
          </div>

          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <ComparisonSlider item={comparisons[active]} />
          </motion.div>
          
          <div className="mt-12 flex justify-center">
             <div className="flex items-center gap-4 px-6 py-3 rounded-full glass border-white/5 opacity-50">
                <MoveLeft size={16} className="text-orange-500" />
                <span className="text-[10px] font-black uppercase tracking-widest text-white">Drag to compare craftsmanship</span>
                <MoveRight size={16} className="text-orange-500" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
