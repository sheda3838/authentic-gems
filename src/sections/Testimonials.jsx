import React, { useState, useEffect } from 'react';
import Container from '../components/Container';
import TestimonialRow from '../components/testimonials/TestimonialRow';
import testimonialsData from '../data/testimonials.json';

const Testimonials = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const calculateRows = () => {
      const isMobile = window.innerWidth < 768;
      const numRows = isMobile ? 3 : 2;
      const newRows = [];
      const itemsPerRow = Math.ceil(testimonialsData.length / numRows);

      for (let i = 0; i < numRows; i++) {
        newRows.push(testimonialsData.slice(i * itemsPerRow, (i + 1) * itemsPerRow));
      }
      setRows(newRows);
    };

    calculateRows();
    window.addEventListener('resize', calculateRows);
    return () => window.removeEventListener('resize', calculateRows);
  }, []);

  return (
    <section id="testimonials" className="relative h-screen bg-background z-20 pt-28 pb-4 flex flex-col justify-center border-t border-white/5 overflow-hidden">
      <Container className="w-full flex flex-col items-center z-20 mb-6">
        {/* section header stuff */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-luxury font-medium uppercase text-[10px] md:text-xs mb-4 tracking-[0.2em]">
            Global Recognition
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl text-white font-medium drop-shadow-lg mb-4 leading-tight">
            Testimonials
          </h3>
          <p className="text-base md:text-lg text-muted/70 font-light leading-relaxed">
            Trusted by gemstone buyers and collectors worldwide. Experience the authentic standard.
          </p>
        </div>
      </Container>

      {/* rows that slide sideways */}
      <div className="w-full flex flex-col gap-2 relative z-20 mt-4 md:mt-0">
        {rows.map((row, index) => (
          <TestimonialRow 
            key={index}
            testimonials={row} 
            direction={index % 2 === 0 ? "left" : "right"} 
            speed={index % 2 === 0 ? "60s" : "50s"} 
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
