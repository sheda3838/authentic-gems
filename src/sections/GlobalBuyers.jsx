import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/Container';
import Button from '../components/Button';
import { Link as ScrollLink } from 'react-scroll';

const nodes = [
  { id: 'usa', name: 'USA', cx: '23%', cy: '44%', delay: 0.2, labelClasses: 'bottom-4 -translate-x-1/2 left-1/2' },
  { id: 'europe', name: 'Europe', cx: '45%', cy: '36%', delay: 0.4, labelClasses: 'bottom-4 -translate-x-1/2 left-1/2' },
  { id: 'uae', name: 'UAE', cx: '55.5%', cy: '46.5%', delay: 0.6, labelClasses: 'bottom-4 -translate-x-1/2 left-1/2' },
  { id: 'thailand', name: 'Thailand', cx: '68%', cy: '53%', delay: 0.8, labelClasses: 'left-full ml-3 top-1/2 -translate-y-1/2' },
  { id: 'hk', name: 'Hong Kong', cx: '72%', cy: '48%', delay: 1.0, labelClasses: 'bottom-4 -translate-x-1/2 left-1/2' },
];

const sriLanka = { cx: '63%', cy: '56.5%' };

const MapNode = ({ name, cx, cy, delay, labelClasses }) => (
  <motion.div
    className="absolute flex flex-col items-center justify-center transform -translate-x-1/2 -translate-y-1/2 group z-20"
    style={{ left: cx, top: cy }}
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-10%" }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
  >
    {/* lil pulse glow effect */}
    <div className="absolute w-6 h-6 bg-luxury/40 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
    {/* the actual dot thing */}
    <div className="w-2 h-2 bg-luxury rounded-full shadow-[0_0_10px_rgba(212,175,55,1)] z-10 relative group-hover:scale-150 transition-transform duration-300"></div>
    {/* text name */}
    <div className={`absolute ${labelClasses} text-white font-medium text-[10px] md:text-xs uppercase tracking-widest opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]`}>
      {name}
    </div>
  </motion.div>
);

const GlobalBuyers = () => {
  return (
    <section id="global-buyers" className="relative min-h-screen flex items-center bg-transparent py-24 overflow-hidden border-t border-white/5">
      <Container className="w-full relative z-20 h-full flex flex-col justify-center">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center w-full h-full">
          
          {/* all the words go here */}
          <div className="lg:col-span-5 flex flex-col justify-center z-30">
            <motion.h2 
              initial={{ opacity: 0, letterSpacing: '0em' }}
              whileInView={{ opacity: 1, letterSpacing: '0.2em' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="text-luxury font-medium uppercase text-[10px] md:text-xs mb-4 tracking-[0.2em]"
            >
              Export & Global Buyers
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl text-white font-medium drop-shadow-lg mb-6 leading-tight"
            >
              International <br className="hidden lg:block"/> Reach
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-base md:text-lg text-muted/70 mb-4 max-w-lg leading-relaxed font-light"
            >
              We specialize in international gemstone trade with over 500+ successful export transactions.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-sm md:text-base text-white/80 mb-10 max-w-lg font-medium"
            >
              We serve buyers across key global markets.
            </motion.p>

            {/* list of places we ship to */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              {nodes.map(node => (
                <div key={node.id} className="flex items-center gap-2 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-full px-4 py-2 hover:bg-white/10 hover:border-luxury/50 hover:shadow-[0_0_15px_rgba(212,175,55,0.15)] transition-all duration-300 cursor-default">
                  <div className="w-1.5 h-1.5 bg-luxury rounded-full shadow-[0_0_5px_rgba(212,175,55,0.8)]"></div>
                  <span className="text-[10px] md:text-xs uppercase tracking-[0.1em] text-white/90 font-medium">{node.name}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-5 inline-flex"
            >
              <ScrollLink to="testimonials" smooth={true} duration={800} className="w-full sm:w-auto">
                <Button variant="primary" className="w-full sm:w-auto text-sm px-8 py-3 cursor-pointer">
                  View Client Testimonials
                </Button>
              </ScrollLink>
            </motion.div>
          </div>

          {/* map side */}
          <div className="lg:col-span-7 relative w-full h-[50vh] lg:h-[80vh] flex items-center justify-center scale-105 lg:scale-110 origin-center">
            
            {/* picture of the map */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
              className="absolute inset-0 bg-contain bg-center bg-no-repeat w-full h-full pointer-events-none"
              style={{ backgroundImage: 'url(/world-map-2.png)' }}
            ></motion.div>

            {/* lines conecting the hq to other places */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 drop-shadow-[0_0_8px_rgba(212,175,55,0.2)]">
              {nodes.map((node, i) => (
                <motion.line 
                  key={`line-${node.id}`}
                  x1={sriLanka.cx} 
                  y1={sriLanka.cy} 
                  x2={node.cx} 
                  y2={node.cy} 
                  stroke="#D4AF37" 
                  strokeWidth="1" 
                  strokeDasharray="4 6"
                  opacity="0.4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.4 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 2, delay: node.delay + 0.3, ease: "easeInOut" }}
                />
              ))}
            </svg>

            {/* home base sri lanka */}
            <motion.div
              className="absolute flex flex-col items-center justify-center transform -translate-x-1/2 -translate-y-1/2 group z-30"
              style={{ left: sriLanka.cx, top: sriLanka.cy }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="absolute w-8 h-8 bg-blue-500/30 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
              <div className="w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,1)] z-10 relative"></div>
              <div className="absolute top-5 text-blue-100 font-medium text-[10px] md:text-xs uppercase tracking-widest whitespace-nowrap drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                Sri Lanka (HQ)
              </div>
            </motion.div>

            {/* other dots around the globe */}
            {nodes.map(node => (
              <MapNode key={`node-${node.id}`} {...node} />
            ))}

          </div>
          
        </div>
      </Container>
    </section>
  );
};

export default GlobalBuyers;
