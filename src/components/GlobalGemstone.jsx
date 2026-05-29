import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import GemScene from './3d/GemScene';

const GlobalGemstone = () => {
  const { scrollY } = useScroll();
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const [windowHeight, setWindowHeight] = useState(typeof window !== 'undefined' ? window.innerHeight : 800);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  const xOffsetDesktop = useTransform(scrollY, [0, 800], ['0vw', '-25vw']);
  const xOffsetTablet = useTransform(scrollY, [0, 800], ['0vw', '-20vw']);
  const xOffsetMobile = useTransform(scrollY, [0, 800], ['0vw', '0vw']);

  const yOffsetDesktop = useTransform(scrollY, [0, 800], ['-5vh', '0vh']);
  const yOffsetMobile = useTransform(scrollY, [0, 800], ['-10vh', '-25vh']);

  const scaleDesktop = useTransform(scrollY, [0, 800], [1, 0.75]);
  const scaleTablet = useTransform(scrollY, [0, 800], [0.85, 0.7]);
  const scaleMobile = useTransform(scrollY, [0, 800], [0.75, 0.6]);

  const xOffset = isMobile ? xOffsetMobile : (isTablet ? xOffsetTablet : xOffsetDesktop);
  const yOffset = isMobile ? yOffsetMobile : yOffsetDesktop;
  const scale = isMobile ? scaleMobile : (isTablet ? scaleTablet : scaleDesktop);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 flex items-center justify-center overflow-hidden">
      
      {/* 2D BACK LAYER (Background Glows & Back Orbital Rings) */}
      {/* Uses CSS transforms for buttery smooth 2D GPU acceleration */}
      <motion.div 
        style={{ x: xOffset, y: yOffset }}
        className="absolute inset-0 w-full h-full flex items-center justify-center will-change-transform z-0"
      >
        <motion.div 
          style={{ scale }} 
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-[400px] h-[400px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px] flex items-center justify-center will-change-transform"
        >
          {/* Layer 1: Background Glows */}
          <div className="absolute inset-0 flex items-center justify-center -z-20">
            <motion.div 
              animate={{ opacity: [0.15, 0.3, 0.15], scale: [1, 1.05, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-[50%] h-[50%] bg-accent/30 blur-[100px] rounded-full mix-blend-screen"
            ></motion.div>
            <motion.div 
              animate={{ opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute w-[45%] h-[45%] bg-luxury/20 blur-[100px] rounded-full mix-blend-screen translate-x-10"
            ></motion.div>
          </div>

          {/* Layer 2: BACK Orbital Curves (Behind Gemstone) */}
          <div className="absolute inset-0 z-0 flex items-center justify-center mix-blend-screen opacity-70">
            <svg viewBox="0 0 400 400" className="w-[80%] h-[80%] absolute">
              <defs>
                <linearGradient id="orbitGradBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
                  <stop offset="50%" stopColor="#2563EB" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="orbitGradGold" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
                  <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </linearGradient>
              </defs>
              
              <g transform="rotate(-35, 200, 200)">
                <motion.path d="M 30 200 A 170 60 0 0 1 370 200" fill="none" stroke="url(#orbitGradBlue)" strokeWidth="1" animate={{ opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />
                <motion.path d="M 30 200 A 170 60 0 0 1 370 200" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" initial={{ pathLength: 0.15, pathOffset: 0 }} animate={{ pathOffset: [0, 1] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} style={{ filter: 'blur(3px)' }} />
              </g>

              <g transform="rotate(35, 200, 200)">
                <motion.path d="M 30 200 A 170 60 0 0 1 370 200" fill="none" stroke="url(#orbitGradGold)" strokeWidth="1" animate={{ opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }} />
                <motion.path d="M 30 200 A 170 60 0 0 1 370 200" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" initial={{ pathLength: 0.15, pathOffset: 0 }} animate={{ pathOffset: [1, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} style={{ filter: 'blur(3px)' }} />
              </g>
            </svg>
          </div>
        </motion.div>
      </motion.div>

      {/* Layer 3: 3D GEMSTONE LAYER (Completely Decoupled from DOM layout) */}
      <div className="absolute inset-0 w-full h-full z-10" style={{ transform: 'translateZ(0)' }}>
        <GemScene scrollY={scrollY} isMobile={isMobile} isTablet={isTablet} />
      </div>

      {/* Layer 4: 2D FRONT LAYER (Front Orbital Rings) */}
      <motion.div 
        style={{ x: xOffset, y: yOffset }}
        className="absolute inset-0 w-full h-full flex items-center justify-center will-change-transform z-20"
      >
        <motion.div 
          style={{ scale }} 
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-[400px] h-[400px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px] flex items-center justify-center will-change-transform"
        >
          <div className="absolute inset-0 z-20 flex items-center justify-center mix-blend-screen opacity-90 pointer-events-none">
            <svg viewBox="0 0 400 400" className="w-[80%] h-[80%] absolute">
              <g transform="rotate(-35, 200, 200)">
                <motion.path d="M 370 200 A 170 60 0 0 1 30 200" fill="none" stroke="url(#orbitGradBlue)" strokeWidth="1" animate={{ opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />
                <motion.path d="M 370 200 A 170 60 0 0 1 30 200" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" initial={{ pathLength: 0.15, pathOffset: 0 }} animate={{ pathOffset: [0, 1] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} style={{ filter: 'blur(3px)' }} />
              </g>

              <g transform="rotate(35, 200, 200)">
                <motion.path d="M 370 200 A 170 60 0 0 1 30 200" fill="none" stroke="url(#orbitGradGold)" strokeWidth="1" animate={{ opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }} />
                <motion.path d="M 370 200 A 170 60 0 0 1 30 200" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" initial={{ pathLength: 0.15, pathOffset: 0 }} animate={{ pathOffset: [1, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} style={{ filter: 'blur(3px)' }} />
              </g>
            </svg>
          </div>
        </motion.div>
      </motion.div>

    </div>
  );
};

export default GlobalGemstone;
