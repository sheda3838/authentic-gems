import React, { useState, useEffect } from 'react';
import Container from '../components/Container';
import TestimonialRow from '../components/testimonials/TestimonialRow';
import testimonialsData from '../data/testimonials.json';

const Testimonials = () => {
  const [row1, setRow1] = useState([]);
  const [row2, setRow2] = useState([]);

  useEffect(() => {
    // Split the 20 testimonials into two rows of 10
    const half = Math.ceil(testimonialsData.length / 2);
    setRow1(testimonialsData.slice(0, half));
    setRow2(testimonialsData.slice(half));
  }, []);

  return (
    <section id="testimonials" className="relative min-h-screen bg-background z-20 py-24 flex flex-col justify-center border-t border-white/5 overflow-hidden">
      <Container className="w-full flex flex-col items-center z-20 mb-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-luxury font-medium uppercase text-[10px] md:text-xs mb-4 tracking-[0.2em]">
            Global Recognition
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl text-white font-medium drop-shadow-lg mb-6 leading-tight">
            Testimonials
          </h3>
          <p className="text-base md:text-lg text-muted/70 font-light leading-relaxed">
            Trusted by gemstone buyers and collectors worldwide. Experience the authentic standard.
          </p>
        </div>
      </Container>

      {/* Marquee Rows Container */}
      <div className="w-full flex flex-col gap-2 relative z-20">
        <TestimonialRow testimonials={row1} direction="left" speed="60s" />
        <TestimonialRow testimonials={row2} direction="right" speed="50s" />
      </div>
    </section>
  );
};

export default Testimonials;
