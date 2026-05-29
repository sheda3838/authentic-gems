import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', onClick }) => {
  const baseStyle = "px-8 py-3.5 rounded-full font-semibold tracking-wide text-[13px] transition-all duration-300 relative overflow-hidden group flex items-center justify-center uppercase";
  
  const variants = {
    primary: "bg-gradient-to-r from-luxury to-[#e6c65d] text-[#050816] hover:from-[#b8952d] hover:to-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] border border-[#e6c65d]/30",
    secondary: "bg-white/[0.03] backdrop-blur-xl border border-white/15 text-white hover:bg-white/[0.08] hover:border-white/30 shadow-[0_0_15px_rgba(255,255,255,0.02)]"
  };

  return (
    <motion.button 
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
      )}
    </motion.button>
  );
};

export default Button;
