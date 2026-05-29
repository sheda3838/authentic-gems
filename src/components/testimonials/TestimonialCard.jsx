import React from 'react';
import { HiStar } from 'react-icons/hi';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="w-[300px] md:w-[350px] flex-shrink-0 flex flex-col p-6 rounded-2xl bg-white/[0.02] backdrop-blur-md border border-white/5 hover:bg-white/[0.04] hover:border-luxury/30 transition-all duration-300 group/card cursor-pointer">
      
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <img 
          src={testimonial.avatar} 
          alt={testimonial.name} 
          className="w-12 h-12 rounded-full object-cover border border-luxury/30 shadow-[0_0_10px_rgba(212,175,55,0.2)] group-hover/card:border-luxury/70 transition-colors duration-300"
        />
        <div className="flex flex-col">
          <h4 className="text-white text-base font-medium group-hover/card:text-luxury transition-colors duration-300">{testimonial.name}</h4>
          <div className="flex items-center gap-1 mt-1">
            {[...Array(5)].map((_, i) => (
              <HiStar key={i} className={`text-sm drop-shadow-[0_0_5px_rgba(212,175,55,0.5)] ${i < testimonial.rating ? 'text-luxury' : 'text-white/20'}`} />
            ))}
          </div>
        </div>
      </div>

      {/* Comment */}
      <p className="text-white/70 text-sm leading-relaxed font-light italic">
        "{testimonial.comment}"
      </p>
      
    </div>
  );
};

export default TestimonialCard;
