import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/Container';
import Button from '../components/Button';
import { HiOutlinePlay } from 'react-icons/hi';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen w-full flex flex-col justify-end pb-12 md:pb-20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[20%] w-[50%] h-[50%] rounded-full bg-accent/10 blur-[180px]"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-luxury/10 blur-[150px]"></div>
      </div>

      <Container className="w-full relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="flex flex-col items-center text-center max-w-4xl mx-auto mt-auto"
        >
          <motion.h2 
            initial={{ opacity: 0, letterSpacing: '0em' }}
            animate={{ opacity: 1, letterSpacing: '0.25em' }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="text-luxury font-medium uppercase text-xs md:text-sm mb-6 tracking-[0.25em]"
          >
            Certified Natural Ceylon Gemstones
          </motion.h2>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-medium mb-8 leading-tight text-white drop-shadow-2xl"
          >
            Authentic Gems <br className="hidden md:block" />
            <span className="text-4xl md:text-6xl lg:text-7xl text-muted font-light italic">International</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-lg md:text-2xl text-muted/80 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Trusted Sri Lankan gemstone export company specializing in premium natural sapphires and rare gems.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center w-full sm:w-auto"
          >
            <Button variant="primary" className="w-full sm:w-auto">Explore Gems</Button>
            <Button variant="secondary" className="gap-3 w-full sm:w-auto">
              <HiOutlinePlay className="text-xl" />
              Request Video Inspection
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;
