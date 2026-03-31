import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../context/AppContext';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { setQuoteModal } = useApp();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Quote', href: '#quote' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollTo = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 px-6 py-4 ${
        isScrolled ? 'md:py-4' : 'md:py-8'
      }`}
    >
      <div className={`container mx-auto px-6 py-3 rounded-2xl transition-all duration-500 flex items-center justify-between ${
        isScrolled ? 'glass border-orange-500/10 shadow-lg shadow-orange-500/5' : 'bg-transparent'
      }`}>
        {/* Logo */}
        <div 
          onClick={() => scrollTo('#hero')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-white shadow-lg shadow-orange-500/20 group-hover:rotate-12 transition-transform">
            <Sparkles size={18} />
          </div>
          <div className="hidden sm:block">
            <h1 className="text-white font-black text-lg leading-none tracking-tight">THE OWL</h1>
            <p className="text-orange-500 text-[10px] uppercase font-bold tracking-[0.2em] mt-1">Creations</p>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.href)}
              className="relative text-xs uppercase tracking-widest font-bold text-gray-400 hover:text-white transition-colors py-2 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
          
          <button 
            onClick={() => setQuoteModal(true)}
            className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-orange-500 text-white text-[10px] font-black uppercase tracking-widest hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20"
          >
            Get Expert Estimate <ArrowUpRight size={14} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-24 mx-6 p-8 glass rounded-3xl z-[999] border-orange-500/20 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className="text-lg font-black text-white hover:text-orange-500 text-left transition-colors uppercase tracking-widest"
                >
                  {link.name}
                </button>
              ))}
              <div className="h-px bg-white/10 my-2" />
              <button 
                onClick={() => { setIsMobileMenuOpen(false); setQuoteModal(true); }}
                className="btn-premium w-full flex items-center justify-center gap-3 text-sm"
              >
                Get Expert Estimate <ArrowUpRight size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
