import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="relative bg-[#02040A] border-t border-white/5 pt-16 pb-8 z-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full flex flex-col items-center">
        
        {/* Logo and Name */}
        <div className="flex flex-col items-center mb-10">
          <img src="/logo.png" alt="Authentic Gems" className="w-12 h-12 object-contain rounded-xl mb-4 opacity-90" />
          <h2 className="text-white tracking-[0.2em] font-medium text-lg uppercase">Authentic Gems</h2>
          <p className="text-luxury text-xs tracking-widest uppercase mt-2">International</p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12">
          {['Hero', 'About', 'Certification', 'Global Buyers', 'What We Offer', 'Contact'].map((item) => (
            <ScrollLink 
              key={item}
              to={item.toLowerCase().replace(/ /g, '-')}
              smooth={true}
              duration={800}
              className="text-white/50 hover:text-luxury text-[10px] md:text-xs uppercase tracking-[0.15em] transition-colors cursor-pointer"
            >
              {item === 'Hero' ? 'Home' : item === 'What We Offer' ? 'Collection' : item}
            </ScrollLink>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between w-full items-center gap-4 text-[10px] text-white/40 tracking-widest uppercase">
          <p>&copy; {new Date().getFullYear()} Authentic Gems. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
