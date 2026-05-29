import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineMail, HiOutlinePhone, HiOutlineVideoCamera, HiCheckCircle } from 'react-icons/hi';
import Container from '../components/Container';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="relative h-screen flex items-center pt-28 pb-8 bg-background z-20 border-t border-white/5 overflow-hidden">
      {/* glowing blurs in the bg */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-luxury/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 translate-x-1/4 translate-y-1/4 w-[600px] h-[600px] bg-accent/5 blur-[150px] rounded-full pointer-events-none" />

      <Container className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-center">
          
          {/* left side with all the contact deets */}
          <div className="flex flex-col">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl text-white font-medium drop-shadow-md mb-4 leading-tight"
            >
              Start Your Gemstone Investment With Confidence
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-sm md:text-base text-white/60 leading-relaxed font-light mb-6 max-w-lg"
            >
              Authentic Gems International specializes in trusted international gemstone transactions with complete transparency and certification assurance.
            </motion.p>

            <div className="flex flex-col gap-6 mb-2 lg:mb-10">
              {[
                { icon: HiOutlinePhone, title: 'WhatsApp', subtitle: 'Instant response for global buyers' },
                { icon: HiOutlineMail, title: 'Email', subtitle: 'Global gemstone inquiries' },
                { icon: HiOutlineVideoCamera, title: 'Video Call', subtitle: 'Book a live gemstone inspection session' }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                  className="flex items-start gap-5 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:border-luxury/50 group-hover:bg-luxury/10 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all duration-300 flex-shrink-0">
                    <item.icon className="text-xl text-luxury" />
                  </div>
                  <div className="flex flex-col pt-1">
                    <h4 className="text-white text-lg font-medium tracking-wide mb-1 group-hover:text-luxury transition-colors duration-300">{item.title}</h4>
                    <p className="text-white/50 text-sm font-light">{item.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* right side with the form block */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* slanted bg just for looks */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent rounded-3xl transform rotate-1 scale-[1.02] pointer-events-none border border-white/5" />
            
            <div className="relative bg-[#080B14]/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    onSubmit={handleSubmit} 
                    className="flex flex-col gap-6"
                  >
                    <h3 className="text-2xl text-white font-medium mb-2">Request an Inquiry</h3>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-white/60 text-[10px] uppercase tracking-widest font-medium pl-1">Full Name</label>
                      <input required type="text" className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-luxury/50 focus:bg-white/[0.05] transition-colors" placeholder="Your Name" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-white/60 text-[10px] uppercase tracking-widest font-medium pl-1">Email Address</label>
                      <input required type="email" className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-luxury/50 focus:bg-white/[0.05] transition-colors" placeholder="your@email.com" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-white/60 text-[10px] uppercase tracking-widest font-medium pl-1">Message / Requirements</label>
                      <textarea required rows="3" className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-luxury/50 focus:bg-white/[0.05] transition-colors resize-none custom-scrollbar" placeholder="I am interested in acquiring..." />
                    </div>
                    <button type="submit" className="w-full mt-2 bg-luxury hover:bg-luxury-light text-black font-semibold uppercase tracking-widest py-3 rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                      Submit Inquiry
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-8 h-full min-h-[380px]"
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
                      className="w-20 h-20 rounded-full bg-luxury/10 border border-luxury/30 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(212,175,55,0.2)]"
                    >
                      <HiCheckCircle className="text-5xl text-luxury" />
                    </motion.div>
                    <h3 className="text-2xl text-white font-medium mb-4">Inquiry Received</h3>
                    <p className="text-white/60 leading-relaxed max-w-sm">
                      Your inquiry has been received successfully. Our premium client team will contact you shortly to discuss your requirements.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};

export default Contact;
