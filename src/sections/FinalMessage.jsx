import React from 'react';
import { motion } from 'framer-motion';

const FinalMessage = () => {
  return (
    <section className="relative py-16 bg-[#040610] border-t border-white/5 z-20 flex items-center justify-center overflow-hidden">
      
      {/* Subtle background glows */}
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-96 h-96 bg-luxury/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4"
      >
        <p className="text-luxury text-base md:text-xl font-medium tracking-widest uppercase leading-loose">
          Authentic Gems International <br className="md:hidden" />
          <span className="hidden md:inline"> — </span>
          <br/>
          <span className="text-white/70 font-light normal-case tracking-wide md:text-lg">Where Ceylon authenticity meets global trust.</span>
        </p>
      </motion.div>
    </section>
  );
};

export default FinalMessage;
