import React from 'react';
import TestimonialCard from './TestimonialCard';

const TestimonialRow = ({ testimonials, direction = 'left', speed = '50s' }) => {
  // Triplicate the array to ensure smooth continuous scrolling 
  // (-33.33% transform matches exactly one set of cards)
  const duped = [...testimonials, ...testimonials, ...testimonials];

  return (
    <div className="relative w-full flex overflow-hidden group py-4">
      {/* Left/Right Gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div 
        className={`flex gap-6 w-max ${direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'}`}
        style={{ animationDuration: speed }}
      >
        {duped.map((t, i) => (
          <TestimonialCard key={`${t.id}-${i}`} testimonial={t} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialRow;
