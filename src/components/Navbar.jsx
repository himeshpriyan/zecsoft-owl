import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { setQuoteModal } = useApp();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Quote', href: '/quote' },
    { name: 'Reviews', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-700 px-4 py-4 md:px-6 md:py-6 ${
        isScrolled ? 'md:py-4' : 'md:py-8'
      }`}
    >
      <div className={`container mx-auto px-5 py-3 md:px-8 md:py-4 rounded-[2rem] transition-all duration-700 flex items-center justify-between ${
        isScrolled ? 'glass border-white/10 shadow-2xl' : 'bg-transparent'
      }`}>
        {/* Logo */}
        <Link 
          to="/"
          className="flex items-center gap-4 cursor-pointer group"
        >
          <div className="w-12 h-12 rounded-2xl bg-orange-500 flex items-center justify-center text-white shadow-2xl shadow-orange-500/40 group-hover:rotate-[15deg] group-hover:scale-110 transition-all duration-500">
            <Sparkles size={22} />
          </div>
          <div className="hidden sm:block">
            <h1 className="text-white font-black text-xl leading-none tracking-tighter">THE OWL</h1>
            <p className="text-orange-500 text-[10px] uppercase font-black tracking-[0.4em] mt-1.5 opacity-80">Creations</p>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.name}
                to={link.href}
                className={`relative text-[10px] uppercase tracking-[0.2em] font-black transition-all py-2 group ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-orange-500 transition-all duration-500 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>
            );
          })}
          
          <button 
            onClick={() => setQuoteModal(true)}
            className="flex items-center gap-3 px-8 py-3 rounded-xl bg-white text-black text-[10px] font-black uppercase tracking-[0.2em] hover:bg-orange-500 hover:text-white transition-all shadow-xl hover:scale-105 active:scale-95"
          >
            Get Expert Estimate <ArrowUpRight size={16} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white w-12 h-12 flex items-center justify-center hover:bg-white/5 rounded-xl transition-all"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="fixed inset-x-0 top-24 mx-4 p-6 md:p-10 glass rounded-[2rem] z-[999] border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] md:hidden overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent pointer-events-none" />
            <div className="flex flex-col gap-5 relative z-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block text-xl font-black text-left transition-colors uppercase tracking-widest ${
                      location.pathname === link.href ? 'text-orange-500' : 'text-white hover:text-orange-500'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <div className="h-px bg-white/5 my-4" />
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => { setIsMobileMenuOpen(false); setQuoteModal(true); }}
                className="btn-premium w-full flex items-center justify-center gap-4 text-sm py-5"
              >
                Get Expert Estimate <ArrowUpRight size={22} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
