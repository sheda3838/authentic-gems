import React from "react";
import { motion } from "framer-motion";
import Container from "../components/Container";
import Button from "../components/Button";
import { Link as ScrollLink } from "react-scroll";
import {
  HiOutlineGlobe,
  HiOutlineAcademicCap,
  HiOutlineClock,
} from "react-icons/hi";

const features = [
  {
    icon: (
      <HiOutlineClock className="text-[26px] text-luxury mb-4 drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]" />
    ),
    title: "10+ Years Industry Experience",
  },
  {
    icon: (
      <HiOutlineAcademicCap className="text-[26px] text-luxury mb-4 drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]" />
    ),
    title: "Certified Gemologists & Degree Holders",
  },
  {
    icon: (
      <HiOutlineGlobe className="text-[26px] text-luxury mb-4 drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]" />
    ),
    title: "Strong International Export Background",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.4 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen lg:h-screen flex items-center bg-transparent pt-24 pb-8 lg:pb-12 overflow-hidden"
    >
      <Container className="w-full relative z-20 h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center w-full">
          {/* Left space reserved for the 3D Gemstone sliding in from GlobalGemstone */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-5 h-full pointer-events-none"></div>

          {/* Right Content */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center">
            <motion.h2
              initial={{ opacity: 0, letterSpacing: "0em" }}
              whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.5 }}
              className="text-luxury font-medium uppercase text-[10px] md:text-xs mb-5 tracking-[0.2em]"
            >
              The Brand Story
            </motion.h2>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 text-white leading-[1.1] drop-shadow-lg"
            >
              Authentic Gems <br />
              <span className="text-3xl md:text-4xl lg:text-5xl text-muted/80 font-light italic mt-2 block">
                International
              </span>
            </motion.h3>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-base md:text-lg text-muted/70 mb-12 max-w-2xl leading-relaxed font-light"
            >
              Based in Sri Lanka under Via Codos Private Limited, we are
              dedicated to providing the finest natural gemstones with
              uncompromised transparency and certification.
            </motion.p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-5"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  className="bg-white/[0.02] backdrop-blur-2xl border border-white/[0.05] rounded-[24px] p-6 hover:bg-white/[0.04] hover:border-luxury/30 shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.15)] transition-all duration-500 flex flex-col items-start group relative overflow-hidden h-full"
                >
                  {/* Subtle top border luxury glow on hover */}
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-luxury/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-500 ease-out">
                    {feature.icon}
                  </div>
                  <h4 className="text-white/90 text-sm md:text-[15px] font-medium leading-snug tracking-wide group-hover:text-white transition-colors mt-auto">
                    {feature.title}
                  </h4>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto"
            >
              <ScrollLink to="what-we-offer" smooth={true} duration={800} className="w-full sm:w-auto">
                <Button variant="primary" className="w-full h-full text-sm px-6 py-3 cursor-pointer">Our Collection</Button>
              </ScrollLink>
              <ScrollLink to="buyer-protection" smooth={true} duration={800} className="w-full sm:w-auto">
                <Button variant="secondary" className="w-full h-full text-sm px-6 py-3 cursor-pointer">Safe Buying Guide</Button>
              </ScrollLink>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
