import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Sparkles, ArrowRight, Instagram, Youtube, Twitter } from 'lucide-react';

const footerLinks = {
  'Services': ['Cinematography', 'Digital Marketing', 'Web Development', 'Event Coverage', 'Product Shoots'],
  'Company': ['Our Story', 'Case Studies', 'Testimonials', 'Pricing', 'Blog'],
  'Legal': ['Privacy Policy', 'Terms of Use', 'Cookie Policy', 'Sitemap']
};

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

const Footer = () => {
  const scrollTo = (id) => {
     const el = document.querySelector(id);
     if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-white/5 pt-24 pb-12 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center text-white shadow-lg shadow-orange-500/20">
                <Sparkles size={20} />
              </div>
              <div>
                <h2 className="text-white font-black text-2xl tracking-tight uppercase">THE OWL <span className="text-orange-500">Creations</span></h2>
                <p className="text-gray-500 text-[10px] uppercase font-bold tracking-[0.3em] mt-1">Precision in Every Frame</p>
              </div>
            </div>
            
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              We define the cutting edge of visual storytelling, crafting 
              cinematic experiences that bridge the gap between vision and reality.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((s, i) => (
                <a key={i} href={s.href} className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-white hover:bg-orange-500 hover:border-orange-500 transition-all duration-300">
                  <s.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-7 grid md:grid-cols-3 gap-12">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-8 border-b border-orange-500/20 pb-4 inline-block">{title}</h4>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link}>
                      <button 
                        onClick={() => scrollTo('#services')}
                        className="text-gray-500 hover:text-orange-500 text-sm font-medium transition-colors flex items-center gap-2 group"
                      >
                        <ArrowRight size={12} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Strip */}
        <div className="grid md:grid-cols-3 gap-8 py-10 border-y border-white/5 mb-16">
           <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500"><Phone size={18} /></div>
              <div>
                 <p className="text-[10px] text-gray-500 uppercase font-black">Call Us</p>
                 <p className="text-white font-bold">+91 98765 43210</p>
              </div>
           </div>
           <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500"><Mail size={18} /></div>
              <div>
                 <p className="text-[10px] text-gray-500 uppercase font-black">Email Us</p>
                 <p className="text-white font-bold">hello@owlcreations.com</p>
              </div>
           </div>
           <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500"><MapPin size={18} /></div>
              <div>
                 <p className="text-[10px] text-gray-500 uppercase font-black">Location</p>
                 <p className="text-white font-bold">Chennai, TN, India</p>
              </div>
           </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
           <p className="text-gray-600 text-xs font-medium">
             © 2024 The Owl Creations. Architectural vision by <span className="text-gray-400">Antigravity</span>. All Rights Reserved.
           </p>
           <div className="flex items-center gap-2 text-[10px] font-bold text-gray-600 uppercase tracking-widest">
              Built with <Sparkles size={12} className="text-orange-500" /> in India
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
