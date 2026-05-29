import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

const navLinks = [
  { name: 'Home', to: 'hero' },
  { name: 'About', to: 'about' },
  { name: 'Certification', to: 'certification' },
  { name: 'Buyers', to: 'global-buyers' },
  { name: 'Safe Buying', to: 'buyer-protection' },
  { name: 'Collection', to: 'what-we-offer' },
  { name: 'Testimonials', to: 'testimonials' },
  { name: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Run once to set initial state
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 w-full z-50 flex justify-center pt-6 px-4 pointer-events-none">
      <nav className={`pointer-events-auto transition-all duration-500 rounded-full w-full max-w-7xl ${
        scrolled 
        ? 'bg-background/40 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] py-3 px-6' 
        : 'bg-white/[0.03] backdrop-blur-md border border-white/5 py-4 px-8 shadow-[0_4px_24px_rgba(0,0,0,0.2)]'
      }`}>
        <div className="flex justify-between items-center w-full">
          {/* Logo */}
          {isHomePage ? (
            <ScrollLink to="hero" smooth={true} duration={800} className="cursor-pointer flex items-center gap-3 group">
              <img src="/logo.png" alt="Logo" className="w-7 h-7 object-contain rounded-lg" />
              <span className="text-xs md:text-sm font-medium tracking-[0.15em] text-white/90 group-hover:text-white transition-colors duration-300">AUTHENTIC GEMS</span>
            </ScrollLink>
          ) : (
            <RouterLink to="/" className="cursor-pointer flex items-center gap-3 group">
              <img src="/logo.png" alt="Logo" className="w-7 h-7 object-contain rounded-lg" />
              <span className="text-xs md:text-sm font-medium tracking-[0.15em] text-white/90 group-hover:text-white transition-colors duration-300">AUTHENTIC GEMS</span>
            </RouterLink>
          )}

          {/* Desktop Nav */}
          {isHomePage && (
            <div className="hidden lg:flex items-center gap-4 xl:gap-8">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={800}
                  className="relative text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium cursor-pointer py-2 group text-muted/60 hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </ScrollLink>
              ))}
            </div>
          )}

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white/80 hover:text-white p-1 transition-colors"
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
            className="absolute top-20 left-4 right-4 pointer-events-auto lg:hidden bg-card/90 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col items-center justify-center h-full gap-5 p-6">
              {isHomePage ? (
                navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <ScrollLink
                      to={link.to}
                      smooth={true}
                      duration={800}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-sm font-medium tracking-[0.2em] uppercase text-white/80 hover:text-luxury transition-colors duration-300 cursor-pointer"
                    >
                      {link.name}
                    </ScrollLink>
                  </motion.div>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <RouterLink
                    to="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm font-medium tracking-[0.2em] uppercase text-white/80 hover:text-luxury transition-colors duration-300 cursor-pointer"
                  >
                    Back to Home
                  </RouterLink>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
