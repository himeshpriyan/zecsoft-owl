import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolio } from '../data/mockData';
import { Maximize2, Play, ArrowRight, ExternalLink, Sparkles, Filter } from 'lucide-react';
import { useApp } from '../context/AppContext';

const PortfolioModule = () => {
  const [filter, setFilter] = useState('all');
  const [hoveredId, setHoveredId] = useState(null);
  const { setPortfolioModal } = useApp();

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'wedding', label: 'Wedding' },
    { id: 'corporate', label: 'Corporate' },
    { id: 'product', label: 'Product' },
    { id: 'social', label: 'Social' },
    { id: 'event', label: 'Event' },
    { id: 'web', label: 'Web' }
  ];

  const filteredProjects = filter === 'all' 
    ? portfolio 
    : portfolio.filter(p => p.category.toLowerCase() === filter);

  return (
    <section id="portfolio" className="py-32 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <Sparkles size={16} className="text-orange-500" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">Featured Work</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-white"
            >
              Live <span className="text-orange-500">Portfolio</span>
            </motion.h2>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-2 bg-white/5 p-1.5 rounded-2xl border border-white/5 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
                  filter === cat.id 
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20' 
                    : 'text-gray-500 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                className="group relative h-[400px] rounded-[2rem] overflow-hidden cursor-pointer glass border-white/5"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setPortfolioModal(project)}
              >
                {/* Image / "Video" Preview Simulation */}
                <div className="absolute inset-0 z-0">
                  <motion.img
                    src={project.image}
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
                <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
                  <div className="flex items-start justify-between mb-4">
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 backdrop-blur-md"
                    >
                      <span className="text-[10px] font-bold text-orange-400 uppercase tracking-[0.1em]">{project.category}</span>
                    </motion.div>
                    
                    <motion.div
                      animate={{ 
                        scale: hoveredId === project.id ? 1 : 0.8,
                        opacity: hoveredId === project.id ? 1 : 0 
                      }}
                      className="w-12 h-12 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-white"
                    >
                      <Play size={18} fill="currentColor" />
                    </motion.div>
                  </div>

                  <h3 className="text-2xl font-black text-white mb-2 group-hover:text-orange-500 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-gray-400 line-clamp-2 mb-6 group-hover:text-gray-300 transition-colors">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-orange-500 hover:text-white transition-colors">
                      Explore Case <ArrowRight size={14} />
                    </button>
                    <div className="h-px flex-1 bg-white/10 group-hover:bg-orange-500/30 transition-colors" />
                  </div>
                </div>

                {/* Hover Play State Overlay */}
                <AnimatePresence>
                  {hoveredId === project.id && (
                    <motion.div 
                      className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="bg-black/20 backdrop-blur-[2px] w-full h-full flex items-center justify-center">
                         <div className="flex flex-col items-center gap-3">
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50 animate-pulse">Preview Loading</span>
                            <div className="flex gap-1">
                                <div className="w-1 h-1 bg-orange-500 rounded-full animate-bounce"></div>
                                <div className="w-1 h-1 bg-orange-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                                <div className="w-1 h-1 bg-orange-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                            </div>
                         </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        <div className="mt-16 text-center">
          <button className="btn-outline flex items-center gap-3 mx-auto group">
            All Masterpieces <ExternalLink size={18} className="group-hover:rotate-12 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioModule;
