import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/Container';
import { HiOutlineSparkles, HiOutlineAcademicCap, HiOutlineShieldCheck, HiOutlineMap } from 'react-icons/hi';

const certs = [
  { id: 1, text: "100% natural and verified", icon: HiOutlineSparkles, delay: 0.2, posClasses: "lg:right-[calc(50%+200px)] lg:bottom-[calc(50%+100px)]" },
  { id: 2, text: "Professionally evaluated by experts", icon: HiOutlineAcademicCap, delay: 0.3, posClasses: "lg:left-[calc(50%+200px)] lg:bottom-[calc(50%+100px)]" },
  { id: 3, text: "Provided with official certification", icon: HiOutlineShieldCheck, delay: 0.4, posClasses: "lg:right-[calc(50%+200px)] lg:top-[calc(50%+60px)]" },
  { id: 4, text: "Fully transparent in treatment and origin", icon: HiOutlineMap, delay: 0.5, posClasses: "lg:left-[calc(50%+200px)] lg:top-[calc(50%+60px)]" }
];

const Card = ({ text, icon: Icon, delay, posClasses }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10%" }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    whileHover={{ y: -5 }}
    className={`bg-white/[0.02] backdrop-blur-2xl border border-white/5 rounded-[20px] p-4 lg:p-5 hover:bg-white/[0.04] hover:border-luxury/30 shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.15)] transition-all duration-500 flex flex-row items-center gap-4 relative overflow-hidden group w-full lg:w-[320px] pointer-events-auto ${posClasses} lg:absolute`}
  >
    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-luxury/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <Icon className="text-[28px] text-luxury flex-shrink-0 drop-shadow-[0_0_8px_rgba(212,175,55,0.4)] group-hover:scale-110 transition-transform duration-500" />
    <p className="text-white/90 text-[13px] md:text-[14px] font-medium leading-tight m-0">{text}</p>
  </motion.div>
);

const ConnectionLines = () => (
  <div className="absolute inset-0 z-0 hidden lg:block pointer-events-none opacity-40 translate-y-[10vh]">
    <svg className="w-full h-full">
      <defs>
        <linearGradient id="lineGradLeft" x1="100%" y1="50%" x2="0%" y2="50%">
          <stop offset="0%" stopColor="#2563EB" stopOpacity="0" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="lineGradRight" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
        </linearGradient>
      </defs>
      
      {/* Top Left Line */}
      <motion.line x1="50%" y1="50%" x2="calc(50% - 220px)" y2="calc(50% - 130px)" stroke="url(#lineGradLeft)" strokeWidth="1" strokeDasharray="4 4" 
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, ease: "easeOut" }} />
        
      {/* Top Right Line */}
      <motion.line x1="50%" y1="50%" x2="calc(50% + 220px)" y2="calc(50% - 130px)" stroke="url(#lineGradRight)" strokeWidth="1" strokeDasharray="4 4" 
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, ease: "easeOut", delay: 0.1 }} />
        
      {/* Bottom Left Line */}
      <motion.line x1="50%" y1="50%" x2="calc(50% - 220px)" y2="calc(50% + 80px)" stroke="url(#lineGradLeft)" strokeWidth="1" strokeDasharray="4 4" 
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }} />
        
      {/* Bottom Right Line */}
      <motion.line x1="50%" y1="50%" x2="calc(50% + 220px)" y2="calc(50% + 80px)" stroke="url(#lineGradRight)" strokeWidth="1" strokeDasharray="4 4" 
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }} />
    </svg>
  </div>
);

const Certification = () => {
  return (
    <section id="certification" className="relative min-h-screen lg:h-screen flex flex-col items-center justify-center bg-transparent pt-32 pb-12 overflow-hidden">
      <ConnectionLines />
      
      {/* Container provides max-width */}
      <Container className="w-full relative z-20 h-full flex flex-col justify-center pointer-events-none">
        
        {/* Title area (Top centered on Desktop and Mobile) */}
        <div className="w-full pointer-events-auto text-center lg:absolute lg:top-4 lg:left-1/2 lg:-translate-x-1/2 z-30 mt-[22vh] lg:mt-0">
          <motion.h2 
            initial={{ opacity: 0, letterSpacing: '0em' }}
            whileInView={{ opacity: 1, letterSpacing: '0.2em' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="text-luxury font-medium uppercase text-[10px] md:text-xs mb-3 tracking-[0.2em] drop-shadow-[0_2px_8px_rgba(0,0,0,1)] lg:drop-shadow-none"
          >
            Proof of Authenticity
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl text-white font-medium drop-shadow-[0_4px_12px_rgba(0,0,0,1)] lg:drop-shadow-lg leading-tight"
          >
            Verified & Certified
          </motion.h3>
        </div>

        {/* Mobile Layout for Cards (Hidden on Desktop) */}
        <div className="flex flex-col gap-4 lg:hidden pointer-events-auto z-10 w-full mt-10">
          {certs.map(cert => (
            <Card key={cert.id} {...cert} />
          ))}
        </div>

        {/* Desktop Absolute Layout for Cards directly around the Center 3D Gem */}
        <div className="hidden lg:block absolute inset-0 z-10 pointer-events-none translate-y-[10vh]">
          {certs.map(cert => (
            <Card key={cert.id} {...cert} />
          ))}
        </div>

      </Container>
    </section>
  );
};

export default Certification;
