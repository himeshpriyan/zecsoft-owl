import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, Calendar, Plus, X } from 'lucide-react';

export default function FloatingActionBar() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollRef = useRef(null);

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const actions = [
    {
      label: 'Call Now',
      icon: <Phone size={20} />,
      color: 'bg-emerald-500',
      action: () => window.open('tel:+919999999999'),
    },
    {
      label: 'WhatsApp',
      icon: <MessageCircle size={20} />,
      color: 'bg-green-500',
      action: () => window.open('https://wa.me/919999999999?text=Hi! I want to enquire about your services.', '_blank'),
    },
    {
      label: 'Contact Us',
      icon: <Calendar size={20} />,
      color: 'bg-orange-500',
      action: () => scrollTo('#contact'),
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[2000] flex flex-col items-end gap-4">
      {/* Action Buttons */}
      <AnimatePresence>
        {isOpen && (
          <div className="flex flex-col items-end gap-3 mb-2">
            {actions.map((action, index) => (
              <motion.button
                key={action.label}
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.5, y: 20 }}
                transition={{ delay: (actions.length - index) * 0.05 }}
                onClick={action.action}
                className={`group flex items-center gap-3 pr-2`}
              >
                <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-white text-[10px] uppercase font-black tracking-widest px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-md">
                  {action.label}
                </span>
                <div className={`w-12 h-12 ${action.color} text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform`}>
                  {action.icon}
                </div>
              </motion.button>
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-3xl flex items-center justify-center shadow-2xl transition-all duration-500 ${
          isOpen ? 'bg-white text-black rotate-0' : 'bg-orange-500 text-white'
        }`}
      >
        {isOpen ? <X size={28} /> : <Plus size={28} />}
        
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-lg">
            <span className="w-2.5 h-2.5 bg-orange-500 rounded-full animate-ping"></span>
          </span>
        )}
      </motion.button>

      {/* Backdrop for closing */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-[-1]"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
