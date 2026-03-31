import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../context/AppContext';

export default function QuoteModal() {
  const { quoteModal, setQuoteModal, showNotification } = useApp();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    showNotification('🎉 Quote request sent! We\'ll contact you within 2 hours.');
    setTimeout(() => { setQuoteModal(false); setSubmitted(false); }, 3000);
  };

  return (
    <AnimatePresence>
      {quoteModal && (
        <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={() => setQuoteModal(false)}>
          <motion.div initial={{ scale: 0.85, opacity: 0, y: 30 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gray-950 rounded-2xl max-w-lg w-full border border-orange-500/30 overflow-hidden shadow-2xl"
            onClick={e => e.stopPropagation()}>
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-600 to-orange-500 p-6 relative">
              <button onClick={() => setQuoteModal(false)}
                className="absolute top-4 right-4 w-8 h-8 bg-black/30 hover:bg-black/50 rounded-full border-none cursor-pointer text-white flex items-center justify-center">✕</button>
              <h3 className="text-white text-2xl font-black" style={{ fontFamily: 'Space Grotesk' }}>Get a Free Quote</h3>
              <p className="text-orange-200 text-sm mt-1">Fill in the details and we'll respond within 2 hours</p>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-400 text-xs font-semibold block mb-1.5">Name *</label>
                    <input required type="text" placeholder="Your name"
                      className="w-full bg-gray-900 border border-gray-700 focus:border-orange-500 text-white rounded-xl px-3 py-2.5 outline-none text-sm placeholder-gray-600" />
                  </div>
                  <div>
                    <label className="text-gray-400 text-xs font-semibold block mb-1.5">Phone *</label>
                    <input required type="tel" placeholder="+91 99999 99999"
                      className="w-full bg-gray-900 border border-gray-700 focus:border-orange-500 text-white rounded-xl px-3 py-2.5 outline-none text-sm placeholder-gray-600" />
                  </div>
                </div>
                <div>
                  <label className="text-gray-400 text-xs font-semibold block mb-1.5">Email</label>
                  <input type="email" placeholder="your@email.com"
                    className="w-full bg-gray-900 border border-gray-700 focus:border-orange-500 text-white rounded-xl px-3 py-2.5 outline-none text-sm placeholder-gray-600" />
                </div>
                <div>
                  <label className="text-gray-400 text-xs font-semibold block mb-1.5">Service Needed</label>
                  <select className="w-full bg-gray-900 border border-gray-700 text-white rounded-xl px-3 py-2.5 outline-none focus:border-orange-500 text-sm cursor-pointer">
                    <option>Cinematography / Videography</option>
                    <option>Digital Marketing</option>
                    <option>Website Development</option>
                    <option>Event Coverage</option>
                    <option>Product Shoot</option>
                    <option>Multiple Services</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-gray-400 text-xs font-semibold block mb-1.5">Budget Range</label>
                  <select className="w-full bg-gray-900 border border-gray-700 text-white rounded-xl px-3 py-2.5 outline-none focus:border-orange-500 text-sm cursor-pointer">
                    <option>Under ₹10,000</option>
                    <option>₹10,000 – ₹30,000</option>
                    <option>₹30,000 – ₹1,00,000</option>
                    <option>₹1,00,000+</option>
                    <option>Let's discuss</option>
                  </select>
                </div>
                <div>
                  <label className="text-gray-400 text-xs font-semibold block mb-1.5">Project Details</label>
                  <textarea rows={3} placeholder="Tell us about your project..."
                    className="w-full bg-gray-900 border border-gray-700 focus:border-orange-500 text-white rounded-xl px-3 py-2.5 outline-none text-sm placeholder-gray-600 resize-none" />
                </div>
                <button type="submit" className="btn-primary w-full justify-center">
                  🚀 Request Free Quote
                </button>
              </form>
            ) : (
              <div className="p-12 text-center">
                <div className="text-5xl mb-4">🎉</div>
                <h4 className="text-white text-xl font-bold mb-2">Quote Submitted!</h4>
                <p className="text-gray-400 text-sm">We'll contact you within 2 hours. Closing...</p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
