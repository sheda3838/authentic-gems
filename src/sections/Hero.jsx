import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/Container';
import Button from '../components/Button';
import { HiOutlinePlay, HiStar } from 'react-icons/hi';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen w-full flex flex-col justify-end pb-12 md:pb-20 overflow-hidden pt-32">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[20%] w-[50%] h-[50%] rounded-full bg-accent/10 blur-[180px]"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-luxury/10 blur-[150px]"></div>
      </div>

      <Container className="w-full relative z-20 h-full flex flex-col justify-end">
        
        {/* Layout grid pushing content to bottom-left and bottom-right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-end w-full pb-4">
          
          {/* Left Content (Title & CTA) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="lg:col-span-6 xl:col-span-5 flex flex-col items-start text-left z-30"
          >
            <motion.h2 
              initial={{ opacity: 0, letterSpacing: '0em' }}
              animate={{ opacity: 1, letterSpacing: '0.15em' }}
              transition={{ duration: 1.5, delay: 0.8 }}
              className="text-luxury font-medium uppercase text-[10px] md:text-xs mb-4 md:mb-6 tracking-[0.15em]"
            >
              Certified Natural Ceylon Gemstones
            </motion.h2>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1 }}
              className="text-5xl md:text-6xl xl:text-7xl font-medium mb-6 leading-[1.05] text-white drop-shadow-2xl"
            >
              Authentic Gems <br />
              <span className="text-[32px] md:text-5xl xl:text-6xl text-muted/90 font-light italic mt-2 block">International</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="text-base md:text-lg text-muted/80 mb-8 md:mb-10 max-w-md leading-relaxed font-light"
            >
              Trusted Sri Lankan gemstone export company specializing in premium natural sapphires and rare gems.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Button variant="primary" className="w-full sm:w-auto text-sm px-6 py-3">Explore Gems</Button>
              <Button variant="secondary" className="gap-2 w-full sm:w-auto text-sm px-6 py-3">
                <HiOutlinePlay className="text-lg" />
                Request Video
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Center spacing explicitly reserved for 3D Gemstone via GlobalGemstone */}
          <div className="hidden lg:block lg:col-span-1 xl:col-span-3 pointer-events-none"></div>

          {/* Right Content (Floating Review Card) */}
          <motion.div
            initial={{ opacity: 0, y: 30, x: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 1.2, delay: 1.6 }}
            className="lg:col-span-5 xl:col-span-4 flex justify-start lg:justify-end w-full z-30"
          >
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[28px] p-3 w-full max-w-[260px] relative overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.5)] group transition-all duration-500 flex flex-col gap-4 ml-auto"
            >
              {/* Subtle top border glow on hover */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-luxury/50 to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Top Image */}
              <div className="w-full h-[130px] rounded-2xl overflow-hidden relative shadow-inner">
                <img src="/gem-card.jpg" alt="Premium Gemstone" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
              </div>
              
              <div className="flex flex-col gap-4 px-2 mt-1">
                {/* Stars & Trust Text */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <HiStar key={i} className="text-luxury text-sm" />
                    ))}
                  </div>
                  <span className="text-white/80 text-[11px] font-medium tracking-wide">Trusted by 10K+ Buyers</span>
                </div>
                
                {/* User Avatars */}
                <div className="flex items-center -space-x-2">
                  <img src="https://i.pravatar.cc/100?img=33" alt="User" className="w-8 h-8 rounded-full border-[1.5px] border-[#0a0f1c] shadow-sm relative z-40" />
                  <img src="https://i.pravatar.cc/100?img=47" alt="User" className="w-8 h-8 rounded-full border-[1.5px] border-[#0a0f1c] shadow-sm relative z-30" />
                  <img src="https://i.pravatar.cc/100?img=12" alt="User" className="w-8 h-8 rounded-full border-[1.5px] border-[#0a0f1c] shadow-sm relative z-20" />
                  <img src="https://i.pravatar.cc/100?img=5" alt="User" className="w-8 h-8 rounded-full border-[1.5px] border-[#0a0f1c] shadow-sm relative z-10" />
                </div>
              </div>
              
              {/* Bottom Button */}
              <button className="w-full mt-1 bg-gradient-to-r from-luxury to-[#e6c65d] hover:from-[#b8952d] hover:to-[#d4af37] text-[#050816] font-bold text-xs py-3.5 rounded-[14px] transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.25)] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)]">
                View all reviews...
              </button>
            </motion.div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};

export default Hero;
