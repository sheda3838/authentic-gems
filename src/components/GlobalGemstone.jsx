import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const GlobalGemstone = () => {
  const { scrollY } = useScroll();
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;

  const xOffsetDesktop = useTransform(scrollY, [0, 800], ['0vw', '-25vw']);
  const yOffsetDesktop = useTransform(scrollY, [0, 800], ['-10vh', '0vh']);
  
  const xOffsetMobile = useTransform(scrollY, [0, 800], ['0vw', '0vw']);
  const yOffsetMobile = useTransform(scrollY, [0, 800], ['-15vh', '-30vh']);

  const scaleDesktop = useTransform(scrollY, [0, 800], [1, 0.65]);
  const scaleMobile = useTransform(scrollY, [0, 800], [0.85, 0.6]);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 flex items-center justify-center overflow-hidden" style={{ perspective: '1200px' }}>
      <motion.div 
        style={{
          x: isMobile ? xOffsetMobile : xOffsetDesktop,
          y: isMobile ? yOffsetMobile : yOffsetDesktop,
          scale: isMobile ? scaleMobile : scaleDesktop,
          transformStyle: 'preserve-3d'
        }}
        className="relative"
      >
        <motion.div
          animate={{ 
            rotateY: [0, 360], 
          }}
          transition={{ 
            rotateY: { duration: 24, repeat: Infinity, ease: "linear" },
          }}
          style={{ transformStyle: 'preserve-3d' }}
          className="relative w-[350px] h-[350px] md:w-[550px] md:h-[550px]"
        >
          <motion.div
            animate={{ y: [-15, 15, -15] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full relative flex items-center justify-center"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Glow pulse effects positioned deeply */}
            <motion.div 
              animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.15, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-accent/20 blur-[130px] rounded-full mix-blend-screen"
              style={{ transform: 'translateZ(-50px) scale(1.3)' }}
            ></motion.div>
            
            <motion.div 
              animate={{ opacity: [0.1, 0.5, 0.1] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute inset-0 bg-luxury/15 blur-[100px] rounded-full mix-blend-screen"
              style={{ transform: 'translateZ(-100px) scale(1.1)' }}
            ></motion.div>
            
            <img 
              src="/white-gem.png" 
              alt="Authentic Gemstone" 
              className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(255,255,255,0.25)]"
              style={{ transform: 'translateZ(50px)' }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default GlobalGemstone;
