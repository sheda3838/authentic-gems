import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const GemCard = ({ gem }) => {
  return (
    <Link 
      to={`/gems/${gem.id}`}
      className="group relative flex flex-col bg-white/[0.02] backdrop-blur-md border border-white/5 rounded-2xl overflow-hidden hover:bg-white/[0.04] hover:border-luxury/30 transition-all duration-500 hover:shadow-[0_10px_30px_rgba(212,175,55,0.08)] block"
    >
      
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-black/40">
        <img 
          src={gem.image} 
          alt={gem.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        {/* Subtle dark overlay for premium feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-80" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-6">
        <div className="flex justify-between items-start mb-2">
          <h4 className="text-white text-lg font-medium tracking-wide group-hover:text-luxury transition-colors duration-300">
            {gem.title}
          </h4>
        </div>
        
        <p className="text-luxury font-medium text-sm mb-4 tracking-widest">
          {gem.price}
        </p>

        <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2 text-white/70 group-hover:text-white text-sm font-medium uppercase tracking-widest transition-colors duration-300">
            Show More
            <HiOutlineArrowNarrowRight className="text-lg group-hover:translate-x-1 transition-transform duration-300 text-luxury" />
          </div>
        </div>
      </div>
      
    </Link>
  );
};

export default GemCard;
