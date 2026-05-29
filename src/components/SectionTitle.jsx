import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ children, align = 'left', className = '' }) => {
  const alignment = align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left';
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${alignment} ${className}`}
    >
      <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-muted inline-block">
        {children}
      </h2>
      <div className={`h-1 w-24 bg-gradient-to-r from-luxury to-transparent mt-4 ${align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''}`}></div>
    </motion.div>
  );
};

export default SectionTitle;
