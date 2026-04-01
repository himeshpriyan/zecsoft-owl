import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Sparkles, ArrowRight, Instagram, Youtube, Twitter } from 'lucide-react';

const footerLinks = {
  'Signature Services': ['Elite Cinematography', 'Flagship Platform Dev', 'Global Strategic Scale', 'Artistic Event Architecture', 'World-Class Product Vision'],
  'The Owl': ['Our Genesis', 'The Portfolio', 'Client Voice', 'Investment Matrix', 'Latest Vision'],
  'Operations': ['Privacy Protocol', 'Terms of Engagement', 'Cookie Policy', 'Global Sitemap']
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
    <footer className="bg-[#020203] border-t border-white/5 pt-32 pb-16 overflow-hidden relative">
      {/* Cinematic Background Decor */}
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-orange-600/[0.03] blur-[160px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-20 mb-32">
          {/* Brand Column - Elite Branding */}
          <div className="lg:col-span-5 space-y-12">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center text-white shadow-2xl shadow-orange-500/50">
                <Sparkles size={28} />
              </div>
              <div>
                <h2 className="text-white font-[1000] text-3xl tracking-tighter uppercase leading-none">THE OWL <br /><span className="text-orange-500">Creations</span></h2>
                <p className="text-gray-600 text-[9px] uppercase font-black tracking-[0.4em] mt-2 italic">Architecting the Visual Future</p>
              </div>
            </div>
            
            <p className="text-gray-500 text-xl leading-relaxed max-w-md font-medium">
              We define the cutting edge of global visual storytelling, crafting 
              cinematic ecosystems that bridge the gap between abstract vision and absolute reality.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((s, i) => (
                <motion.a 
                   key={i} 
                   href={s.href} 
                   whileHover={{ y: -5, backgroundColor: '#f97316' }}
                   className="w-14 h-14 rounded-[1.25rem] bg-white/[0.03] border border-white/5 flex items-center justify-center text-white transition-all duration-500 hover:shadow-[0_15px_30px_rgba(255,107,0,0.3)] shadow-xl"
                >
                  <s.icon size={22} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns - High-End Navigation */}
          <div className="lg:col-span-7 grid md:grid-cols-3 gap-12">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white mb-10 pb-4 border-b border-orange-500/20 inline-block">{title}</h4>
                <ul className="space-y-5">
                  {links.map((link) => (
                    <li key={link}>
                      <button 
                        onClick={() => scrollTo('#services')}
                        className="text-gray-500 hover:text-orange-500 text-sm font-black uppercase tracking-widest transition-all flex items-center gap-3 group text-left"
                      >
                        <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-orange-500" />
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Global Contact Strip - Elite Standard */}
        <div className="grid md:grid-cols-3 gap-12 py-16 border-y border-white/5 mb-24 bg-white/[0.01] rounded-[3rem] px-12">
           <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-14 h-14 rounded-2xl bg-orange-500/5 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500 shadow-xl border border-orange-500/10">
                 <Phone size={24} />
              </div>
              <div>
                 <p className="text-[9px] text-gray-600 uppercase font-black tracking-widest mb-1 leading-none">Global Direct</p>
                 <p className="text-white font-[1000] text-lg tracking-tight group-hover:text-orange-500 transition-colors uppercase">+91 91234 56789</p>
              </div>
           </div>
           <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-14 h-14 rounded-2xl bg-orange-500/5 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500 shadow-xl border border-orange-500/10">
                 <Mail size={24} />
              </div>
              <div>
                 <p className="text-[9px] text-gray-600 uppercase font-black tracking-widest mb-1 leading-none">Intelligence Hub</p>
                 <p className="text-white font-[1000] text-lg tracking-tight group-hover:text-orange-500 transition-colors uppercase">visionaries@owlcreations.com</p>
              </div>
           </div>
           <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-14 h-14 rounded-2xl bg-orange-500/5 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500 shadow-xl border border-orange-500/10">
                 <MapPin size={24} />
              </div>
              <div>
                 <p className="text-[9px] text-gray-600 uppercase font-black tracking-widest mb-1 leading-none">Strategic HQ</p>
                 <p className="text-white font-[1000] text-lg tracking-tight group-hover:text-orange-500 transition-colors uppercase">Chennai, TN, India</p>
              </div>
           </div>
        </div>

        {/* Global Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
           <p className="text-gray-700 text-[10px] font-black uppercase tracking-[0.3em] text-center md:text-left leading-relaxed">
             © 2024 The Owl Creations. Engineered architecture by <span className="text-orange-500">Antigravity</span>. <br className="md:hidden" /> All Rights Secured.
           </p>
           <div className="flex items-center gap-3 text-[9px] font-black text-gray-700 uppercase tracking-[0.4em] px-8 py-4 glass rounded-full border-white/5">
              Architecting in <Sparkles size={14} className="text-orange-500 animate-pulse" /> INDIA
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
