import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolio } from '../data/mockData';
import { Maximize2, Play, ArrowRight, ExternalLink, Sparkles, Filter } from 'lucide-react';
import { useApp } from '../context/AppContext';

const PortfolioModule = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const { setPortfolioModal } = useApp();
  const filteredProjects = portfolio;

  return (
    <section id="portfolio" className="relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 text-center md:text-left">
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center md:justify-start gap-2 mb-4"
            >
              <Sparkles size={16} className="text-orange-500" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">Our Work</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-6xl font-black text-white"
            >
              Recent <span className="text-orange-500">Projects</span>
            </motion.h2>
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative aspect-square md:aspect-auto md:h-[450px] rounded-[2.5rem] overflow-hidden cursor-pointer glass border-white/5 shadow-2xl hover:shadow-[0_30px_60px_-15px_rgba(255,107,0,0.4)] hover:-translate-y-2 transition-all duration-500"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setPortfolioModal(project)}
              >
                {/* Image / "Video" Preview Simulation */}
                <div className="absolute inset-0 z-0">
                  <motion.img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    animate={{ scale: hoveredId === project.id ? 1.1 : 1 }}
                    transition={{ duration: 0.6 }}
                  />
                  {/* Scanning Glow Simulation */}
                  {hoveredId === project.id && (
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent w-full skew-x-12"
                      animate={{ left: ['-100%', '100%'] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-10 flex flex-col justify-end bg-gradient-to-t from-black via-black/40 to-transparent">
                  <div className="flex items-start justify-between mb-5">
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="px-4 py-1.5 rounded-xl bg-orange-500/10 border border-orange-500/20 backdrop-blur-xl"
                    >
                      <span className="text-[9px] font-black text-orange-500 uppercase tracking-[0.2em]">{project.category}</span>
                    </motion.div>
                    
                    <motion.div
                      animate={{ 
                        scale: hoveredId === project.id ? 1.1 : 1,
                        opacity: hoveredId === project.id ? 1 : 0.8 
                      }}
                      className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-2xl flex items-center justify-center text-white shadow-2xl transition-all duration-500 group-hover:bg-orange-500 group-hover:border-orange-500"
                    >
                      <Play size={20} fill="currentColor" />
                    </motion.div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 group-hover:text-orange-500 transition-all duration-500 tracking-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-gray-400 line-clamp-2 mb-8 group-hover:text-gray-200 transition-colors opacity-70">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-6">
                    <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.25em] text-white hover:text-orange-500 transition-all">
                      View Details <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <div className="h-px flex-1 bg-white/5 group-hover:bg-orange-500/20 transition-all duration-700" />
                  </div>
                </div>

                {/* Hover Reveal State Overlay */}
                <AnimatePresence>
                  {hoveredId === project.id && (
                    <motion.div 
                      className="absolute inset-0 z-20 pointer-events-none overflow-hidden"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="absolute inset-0 bg-orange-500/5 mix-blend-overlay" />
                      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
                      <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioModule;
