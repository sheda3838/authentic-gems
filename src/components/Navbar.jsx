import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Certification', to: 'certification' },
    { name: 'Global Buyers', to: 'global-buyers' },
    { name: 'Safe Buying', to: 'buyer-protection' },
  ];

  return (
    <div className="fixed top-0 w-full z-50 flex justify-center pt-6 px-4 pointer-events-none">
      <nav className={`pointer-events-auto transition-all duration-500 rounded-full w-full max-w-3xl ${
        scrolled 
        ? 'bg-background/40 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] py-3 px-6' 
        : 'bg-white/[0.03] backdrop-blur-md border border-white/5 py-4 px-8 shadow-[0_4px_24px_rgba(0,0,0,0.2)]'
      }`}>
        <div className="flex justify-between items-center w-full">
          {/* Logo */}
          <Link to="hero" smooth={true} duration={800} onSetActive={() => setActiveSection('hero')} spy={true} className="cursor-pointer flex items-center gap-3 group">
            <img src="/logo.png" alt="Logo" className="w-7 h-7 object-contain rounded-lg" />
            <span className="text-xs md:text-sm font-medium tracking-[0.15em] text-white/90 group-hover:text-white transition-colors duration-300">AUTHENTIC GEMS</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={800}
                spy={true}
                onSetActive={() => setActiveSection(link.to)}
                className="relative text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium cursor-pointer py-2 group"
              >
                <span className={`transition-colors duration-300 ${activeSection === link.to ? 'text-white' : 'text-muted/60 group-hover:text-white'}`}>
                  {link.name}
                </span>
                {/* Active Indicator Glow */}
                {activeSection === link.to && (
                  <motion.div 
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-luxury rounded-full shadow-[0_0_10px_rgba(212,175,55,1)]"
                  ></motion.div>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white/80 hover:text-white p-1 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <HiX className="text-xl" /> : <HiMenu className="text-xl" />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 15, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute top-20 left-4 right-4 pointer-events-auto md:hidden bg-card/90 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col p-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={800}
                  spy={true}
                  onSetActive={() => setActiveSection(link.to)}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-xs uppercase tracking-[0.2em] font-medium block w-full text-center py-4 rounded-xl transition-colors ${activeSection === link.to ? 'bg-white/5 text-luxury' : 'text-muted/70 hover:text-white hover:bg-white/[0.02]'}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
