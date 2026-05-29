import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/Container';
import { HiOutlineLocationMarker, HiOutlineVideoCamera, HiOutlineShieldCheck, HiOutlineCheckCircle } from 'react-icons/hi';

const steps = [
  {
    id: 1,
    title: "Visit Sri Lanka",
    description: "Inspect gemstones in person directly at our Sri Lanka headquarters.",
    icon: HiOutlineLocationMarker,
  },
  {
    id: 2,
    title: "Live Video Inspection",
    description: "Confirm purchases remotely through high-definition live video gemstone inspections.",
    icon: HiOutlineVideoCamera,
  },
  {
    id: 3,
    title: "Certification Approval",
    description: "Full independent certification is shared and verified before any payment confirmation.",
    icon: HiOutlineShieldCheck,
  },
  {
    id: 4,
    title: "Buyer Protection",
    description: "Guaranteed return available if the item does not precisely match the agreed certification or inspection.",
    icon: HiOutlineCheckCircle,
  }
];

const BuyerProtection = () => {
  return (
    <section id="buyer-protection" className="relative min-h-screen flex items-center bg-transparent py-24 overflow-hidden border-t border-white/5">
      <Container className="w-full relative z-20 h-full flex flex-col justify-center">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center w-full">
          
          {/* Left Text Column */}
          <div className="lg:col-span-5 flex flex-col justify-center z-30">
            <motion.h2 
              initial={{ opacity: 0, letterSpacing: '0em' }}
              whileInView={{ opacity: 1, letterSpacing: '0.2em' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="text-luxury font-medium uppercase text-[10px] md:text-xs mb-4 tracking-[0.2em]"
            >
              How International Buying Works
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl text-white font-medium drop-shadow-lg mb-6 leading-tight"
            >
              Safe & Transparent <br className="hidden lg:block"/> Buying
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-base md:text-lg text-muted/70 mb-8 max-w-lg leading-relaxed font-light"
            >
              We ensure every international transaction is secure, fully transparent, and built on trust. Whether you visit us in person or buy remotely, your investment is fully protected.
            </motion.p>

            {/* Optional Note */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              className="bg-white/[0.02] border border-luxury/20 rounded-xl p-5 backdrop-blur-sm max-w-sm"
            >
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-white/80">
                  <div className="w-1.5 h-1.5 bg-luxury rounded-full shadow-[0_0_5px_rgba(212,175,55,0.8)]"></div>
                  Transparent pre-shipment approval
                </li>
                <li className="flex items-center gap-3 text-sm text-white/80">
                  <div className="w-1.5 h-1.5 bg-luxury rounded-full shadow-[0_0_5px_rgba(212,175,55,0.8)]"></div>
                  Secure international handling
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Right Process Column */}
          <div className="lg:col-span-7 relative flex justify-center lg:justify-end">
            
            <div className="relative w-full max-w-lg">
              {/* Vertical Connecting Line */}
              <div className="absolute left-[19px] top-8 bottom-8 w-[1px] bg-gradient-to-b from-luxury/0 via-luxury/30 to-luxury/0 hidden sm:block pointer-events-none"></div>
              
              <div className="flex flex-col gap-4">
                {steps.map((step, index) => (
                  <motion.div 
                    key={step.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.6, delay: 0.2 + (index * 0.15), ease: "easeOut" }}
                    className="group relative flex items-start gap-4 bg-white/[0.02] backdrop-blur-xl border border-white/5 rounded-2xl px-5 py-4 hover:bg-white/[0.04] hover:border-luxury/30 transition-all duration-500 hover:shadow-[0_10px_30px_rgba(212,175,55,0.08)]"
                  >
                    <div className="flex-shrink-0 relative z-10 w-10 h-10 rounded-full bg-background border border-white/10 flex items-center justify-center group-hover:border-luxury/50 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all duration-500">
                      <step.icon className="text-[18px] text-luxury drop-shadow-[0_0_5px_rgba(212,175,55,0.5)] group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="flex flex-col pt-0.5">
                      <h4 className="text-white text-base font-medium mb-1 group-hover:text-luxury transition-colors duration-300">{step.title}</h4>
                      <p className="text-white/60 text-[13px] leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
          
        </div>
      </Container>
    </section>
  );
};

export default BuyerProtection;
