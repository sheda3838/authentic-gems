import React from 'react';
import Container from '../components/Container';
import GemGrid from '../components/gems/GemGrid';

const WhatWeOffer = () => {
  return (
    <section id="what-we-offer" className="relative py-24 bg-background z-20">
      <Container className="w-full flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-luxury font-medium uppercase text-[10px] md:text-xs mb-4 tracking-[0.2em]">
            Premium Collection
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl text-white font-medium drop-shadow-lg mb-6 leading-tight">
            What We Offer
          </h3>
          <p className="text-base md:text-lg text-muted/70 font-light leading-relaxed">
            Showcase premium certified gemstones available for global buyers. Explore our meticulously curated collection of rare Sri Lankan treasures.
          </p>
        </div>

        {/* Gem Grid */}
        <GemGrid />

      </Container>
    </section>
  );
};

export default WhatWeOffer;
