import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import { HiOutlineGlobe, HiOutlineAcademicCap, HiOutlineClock } from 'react-icons/hi';

const features = [
  {
    icon: <HiOutlineClock className="text-4xl text-luxury mb-4" />,
    title: "10+ Years Experience",
    desc: "A decade of excellence in the international gemstone industry."
  },
  {
    icon: <HiOutlineAcademicCap className="text-4xl text-luxury mb-4" />,
    title: "Certified Gemologists",
    desc: "Our team includes professional gem degree holders ensuring authenticity."
  },
  {
    icon: <HiOutlineGlobe className="text-4xl text-luxury mb-4" />,
    title: "Global Export",
    desc: "Strong international export background with buyers worldwide."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const About = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center bg-card/20 py-20 overflow-hidden">
      <Container className="w-full relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[70vh]">
          
          {/* Left Placeholder for Gemstone (occupies 5 columns on desktop) */}
          <div className="hidden lg:block lg:col-span-5 h-[400px] pointer-events-none"></div>
          
          {/* Right Content (occupies 7 columns on desktop) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <SectionTitle>About Us</SectionTitle>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-muted mb-16 leading-relaxed font-light"
            >
              <strong className="text-white font-medium">Authentic Gems International</strong> is a Sri Lanka-based gemstone export company operating under Via Codos Private Limited. We are dedicated to providing the finest natural gemstones with uncompromised transparency and certification.
            </motion.p>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/[0.08] hover:border-luxury/30 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] transition-all duration-500 flex flex-col items-start h-full group"
                >
                  <div className="group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-500 ease-out">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-medium text-white mb-3 mt-auto">{feature.title}</h3>
                  <p className="text-muted/80 text-sm leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
        </div>
      </Container>
    </section>
  );
};

export default About;
