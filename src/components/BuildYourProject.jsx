import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { services } from '../data/mockData';
import { useApp } from '../context/AppContext';
import { X } from 'lucide-react';

export default function BuildYourProject() {
  const { showNotification } = useApp();
  const [activeCategoryId, setActiveCategoryId] = useState(services[0].id);
  const [selectedServices, setSelectedServices] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(selectedServices.length === 0) {
        showNotification('⚠️ Please select at least one specific service.');
        return;
    }
    showNotification('🎉 Your request has been submitted! We\'ll contact you within 2 hours.');
    e.target.reset();
    setSelectedServices([]);
  };

  const toggleService = (serviceTitle) => {
    setSelectedServices(prev => 
      prev.includes(serviceTitle) ? prev.filter(s => s !== serviceTitle) : [...prev, serviceTitle]
    );
  };

  const activeCategory = services.find(cat => cat.id === activeCategoryId);

  return (
    <section id="quote" className="py-16 md:py-24 bg-[#0d0d0d]">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="text-orange-400 font-black uppercase tracking-widest text-[10px]">🏗️ Get a Custom Estimate</span>
          <h2 className="section-heading text-white mt-4 text-3xl md:text-5xl font-black">Let&apos;s Build Something <br className="md:hidden"/><span className="text-orange-500">Amazing Together 🚀</span></h2>
          <p className="text-gray-400 mt-4 text-base md:text-lg">Get a free consultation and start growing your business today.</p>
        </motion.div>

        <div className="glass rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-orange-600/[0.03] blur-[100px] rounded-full pointer-events-none" />
          
          <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
            
            {/* 1. Category Tabs */}
            <div>
              <label className="text-white text-sm font-black uppercase tracking-widest block mb-4">1. Choose a Category</label>
              <div className="flex overflow-x-auto pb-2 gap-3 no-scrollbar scroll-smooth">
                {services.map((cat) => {
                  const cleanTitle = cat.category.replace(/[^a-zA-Z\s&]/g, '').trim();
                  const isActive = activeCategoryId === cat.id;

                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setActiveCategoryId(cat.id)}
                      className={`whitespace-nowrap px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 border ${
                        isActive 
                          ? 'bg-orange-500 border-orange-500 text-white shadow-lg shadow-orange-500/25' 
                          : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:border-white/30'
                      }`}
                    >
                      {cleanTitle}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Specific Services Pills */}
            <div className="min-h-[160px]">
               <label className="text-white text-sm font-black uppercase tracking-widest block mb-4">
                 2. Select Specific Services
               </label>
               <AnimatePresence mode="wait">
                 <motion.div 
                   key={activeCategoryId}
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -10 }}
                   transition={{ duration: 0.2 }}
                   className="flex flex-wrap gap-3"
                 >
                   {activeCategory.items.map((item) => {
                     const isSelected = selectedServices.includes(item.title);
                     return (
                       <button
                         key={item.id}
                         type="button"
                         onClick={() => toggleService(item.title)}
                         className={`flex items-center gap-2 px-4 py-3 rounded-xl transition-all border text-left ${
                           isSelected
                             ? 'bg-orange-500/10 border-orange-500 text-white shadow-[0_0_15px_rgba(249,115,22,0.15)]'
                             : 'bg-black/30 border-white/10 text-gray-400 hover:bg-white/5 hover:border-orange-500/50'
                         }`}
                       >
                         <div className={`w-4 h-4 rounded-full flex items-center justify-center border transition-colors ${
                           isSelected ? 'bg-orange-500 border-orange-500' : 'border-gray-500'
                         }`}>
                           {isSelected && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                         </div>
                         <span className="text-xs font-bold tracking-wide">{item.title}</span>
                       </button>
                     );
                   })}
                 </motion.div>
               </AnimatePresence>
            </div>

            {/* 3. Your Selections */}
            {selectedServices.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="bg-orange-500/5 border border-orange-500/20 rounded-2xl p-5"
              >
                <div className="text-[10px] text-orange-400 font-black uppercase tracking-widest mb-3">Your Selections:</div>
                <div className="flex flex-wrap gap-2">
                  {selectedServices.map(service => (
                    <div key={service} className="flex items-center gap-2 bg-orange-500 text-white px-3 py-1.5 rounded-lg text-[10px] font-bold tracking-wider">
                      {service}
                      <button type="button" onClick={() => toggleService(service)} className="hover:text-black transition-colors rounded-full p-0.5 hover:bg-white/20">
                        <X size={12} />
                      </button>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            <div className="pt-6 border-t border-white/10" />

            {/* Form Fields */}
            <div>
              <label className="text-white text-sm font-black uppercase tracking-widest block mb-6">3. Your Details</label>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="text-gray-500 text-xs font-bold uppercase tracking-widest block mb-2">Your Name *</label>
                  <input required type="text" placeholder="e.g. Rahul Sharma"
                    className="w-full bg-black/50 border border-white/10 focus:border-orange-500 text-white rounded-xl px-4 py-3 outline-none transition-colors" />
                </div>
                <div>
                  <label className="text-gray-500 text-xs font-bold uppercase tracking-widest block mb-2">Phone Number *</label>
                  <input required type="tel" placeholder="+91 99999 99999"
                    className="w-full bg-black/50 border border-white/10 focus:border-orange-500 text-white rounded-xl px-4 py-3 outline-none transition-colors" />
                </div>
              </div>

              <div className="mb-6">
                <label className="text-gray-500 text-xs font-bold uppercase tracking-widest block mb-2">Project Details</label>
                <textarea rows={4} placeholder="Describe your project vision..."
                  className="w-full bg-black/50 border border-white/10 focus:border-orange-500 text-white rounded-xl px-4 py-3 outline-none transition-colors resize-none" />
              </div>
            </div>

            <div className="pt-2">
              <button type="submit" className="btn-premium w-full justify-center py-5 shadow-2xl">
                GET STARTED NOW
              </button>
            </div>
            
          </form>
        </div>
      </div>
    </section>
  );
}
