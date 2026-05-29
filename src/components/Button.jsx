import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', onClick }) => {
  const baseStyle = "px-8 py-3 rounded-full font-medium transition-colors duration-300 relative overflow-hidden group flex items-center justify-center";
  
  const variants = {
    primary: "bg-accent text-white hover:bg-blue-700 shadow-[0_0_15px_rgba(37,99,235,0.5)]",
    secondary: "bg-transparent border border-luxury text-luxury hover:bg-luxury/10"
  };

  return (
    <motion.button 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
      )}
    </motion.button>
  );
};

export default Button;
