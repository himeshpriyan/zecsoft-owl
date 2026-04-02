import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/mockData';
import { useApp } from '../context/AppContext';

export default function BuildYourProject() {
  const { showNotification } = useApp();
  const [selectedCats, setSelectedCats] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(selectedCats.length === 0) {
        showNotification('⚠️ Please select at least one service category.');
        return;
    }
    showNotification('🎉 Your request has been submitted! We\'ll contact you within 2 hours.');
    e.target.reset();
    setSelectedCats([]);
  };

  const toggleCategory = (catTitle) => {
    setSelectedCats(prev => 
      prev.includes(catTitle) ? prev.filter(c => c !== catTitle) : [...prev, catTitle]
    );
  };

  return (
    <section id="quote" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="text-orange-400 font-black uppercase tracking-widest text-[10px]">🏗️ Get an Estimate</span>
          <h2 className="section-heading text-white mt-4 text-4xl md:text-5xl font-black">Request a <span className="text-orange-500">Quote</span></h2>
          <p className="text-gray-400 mt-4 text-lg">Select the services you need and tell us about your project.</p>
        </motion.div>

        <div className="glass rounded-[2.5rem] p-8 md:p-12 border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-600/[0.03] blur-[100px] rounded-full pointer-events-none" />
          
          <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
            
            {/* Service Selection */}
            <div>
              <label className="text-white text-sm font-black uppercase tracking-widest block mb-4">1. What Services Do You Need?</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {services.map((cat) => {
                  const cleanTitle = cat.category.replace(/[^a-zA-Z\s&]/g, '').trim();
                  const isSelected = selectedCats.includes(cleanTitle);

                  return (
                    <div 
                      key={cat.id} 
                      onClick={() => toggleCategory(cleanTitle)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between group ${
                        isSelected 
                          ? 'bg-orange-500/10 border-orange-500 text-white' 
                          : 'bg-white/5 border-white/10 text-gray-400 hover:border-orange-500/50'
                      }`}
                    >
                      <span className="text-xs font-black uppercase tracking-wider">{cleanTitle}</span>
                      <div className={`w-5 h-5 rounded flex items-center justify-center border ${isSelected ? 'bg-orange-500 border-orange-500' : 'border-gray-600'}`}>
                        {isSelected && <span className="text-white text-[10px]">✔</span>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-8 border-t border-white/10" />

            {/* Form Fields */}
            <div>
              <label className="text-white text-sm font-black uppercase tracking-widest block mb-6">2. Your Details</label>
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

              <div>
                <label className="text-gray-500 text-xs font-bold uppercase tracking-widest block mb-2">Expected Timeline</label>
                <select className="w-full bg-black/50 border border-white/10 text-white rounded-xl px-4 py-3 outline-none focus:border-orange-500 cursor-pointer">
                  <option>Within 1 week</option>
                  <option>2-3 weeks</option>
                  <option>1 month</option>
                  <option>Flexible</option>
                </select>
              </div>
            </div>

            <div className="pt-4">
              <button type="submit" className="btn-premium w-full justify-center py-5 shadow-2xl">
                SUBMIT PROJECT REQUEST
              </button>
            </div>
            
          </form>
        </div>
      </div>
    </section>
  );
}
