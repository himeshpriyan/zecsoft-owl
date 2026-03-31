import { motion } from 'framer-motion';
import { services } from '../data/mockData';
import { useApp } from '../context/AppContext';

export default function BuildYourProject() {
  const { selectedServices, removeService, totalCost, showNotification } = useApp();

  const handleSubmit = (e) => {
    e.preventDefault();
    showNotification('🎉 Your project has been submitted! We\'ll contact you within 2 hours.');
    e.target.reset();
  };

  return (
    <section className="py-24 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="text-orange-400 font-semibold uppercase tracking-widest text-sm">🏗️ Build It Your Way</span>
          <h2 className="section-heading text-white mt-2">Build Your <span className="text-orange-400">Project</span></h2>
          <p className="text-gray-400 mt-3 text-lg">Add services from the Services section above, then submit your custom project</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Selected services */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-white font-bold text-lg mb-4">
              🛒 Your Project <span className="text-gray-500 text-sm font-normal">({selectedServices.length} services)</span>
            </h3>
            {selectedServices.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-4xl mb-3">📦</div>
                <p className="text-gray-500 mb-2">No services added yet</p>
                <p className="text-gray-600 text-sm">Browse the Services section and click "Add +" to build your project</p>
              </div>
            ) : (
              <div className="space-y-3">
                {selectedServices.map((s) => (
                  <div key={s.id} className="flex items-center justify-between bg-gray-900 rounded-xl px-4 py-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{s.icon}</span>
                      <div>
                        <p className="text-white font-semibold text-sm">{s.title}</p>
                        <p className="text-orange-400 text-xs">₹{s.price.toLocaleString()}</p>
                      </div>
                    </div>
                    <button onClick={() => removeService(s.id)}
                      className="text-gray-600 hover:text-red-400 transition-colors bg-transparent border-none cursor-pointer text-lg">✕</button>
                  </div>
                ))}
              </div>
            )}

            {selectedServices.length > 0 && (
              <div className="mt-6 pt-4 border-t border-gray-700">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 font-semibold">Estimated Total</span>
                  <span className="text-orange-400 text-2xl font-black">₹{totalCost.toLocaleString()}</span>
                </div>
                <p className="text-gray-600 text-xs mt-1">*Final pricing confirmed after consultation</p>
              </div>
            )}
          </div>

          {/* Submission form */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-white font-bold text-lg mb-6">📝 Submit Project</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-gray-400 text-sm font-semibold block mb-1.5">Your Name *</label>
                <input required type="text" placeholder="e.g. Rahul Sharma"
                  className="w-full bg-gray-900 border border-gray-700 focus:border-orange-500 text-white rounded-xl px-4 py-3 outline-none transition-colors placeholder-gray-600" />
              </div>
              <div>
                <label className="text-gray-400 text-sm font-semibold block mb-1.5">Phone Number *</label>
                <input required type="tel" placeholder="+91 99999 99999"
                  className="w-full bg-gray-900 border border-gray-700 focus:border-orange-500 text-white rounded-xl px-4 py-3 outline-none transition-colors placeholder-gray-600" />
              </div>
              <div>
                <label className="text-gray-400 text-sm font-semibold block mb-1.5">Project Details</label>
                <textarea rows={3} placeholder="Describe your project vision..."
                  className="w-full bg-gray-900 border border-gray-700 focus:border-orange-500 text-white rounded-xl px-4 py-3 outline-none transition-colors placeholder-gray-600 resize-none" />
              </div>
              <div>
                <label className="text-gray-400 text-sm font-semibold block mb-1.5">Expected Timeline</label>
                <select className="w-full bg-gray-900 border border-gray-700 text-white rounded-xl px-4 py-3 outline-none focus:border-orange-500 cursor-pointer">
                  <option>Within 1 week</option>
                  <option>2-3 weeks</option>
                  <option>1 month</option>
                  <option>Flexible</option>
                </select>
              </div>

              {totalCost > 0 && (
                <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400 text-sm">Selected Services</span>
                    <span className="text-orange-400 font-bold">₹{totalCost.toLocaleString()}</span>
                  </div>
                </div>
              )}

              <button type="submit" className="btn-primary w-full justify-center">
                🚀 Submit My Project
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
