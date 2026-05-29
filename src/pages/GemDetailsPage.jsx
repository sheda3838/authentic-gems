import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { HiOutlineArrowNarrowLeft, HiOutlineShieldCheck, HiOutlineCheckCircle } from 'react-icons/hi';
import Container from '../components/Container';
import gemsData from '../data/gems.json';
import Navbar from '../components/Navbar';

const GemDetailsPage = () => {
  const { id } = useParams();
  const [gem, setGem] = useState(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when loading
    const foundGem = gemsData.find(g => g.id === parseInt(id));
    setGem(foundGem);

    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [id]);

  if (!gem) return <div className="min-h-screen bg-background flex items-center justify-center text-luxury">Loading...</div>;

  return (
    <>
      <Navbar />
      <div className="h-screen bg-background pt-28 pb-8 relative overflow-hidden flex flex-col">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[50vh] bg-luxury/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
        
        <Container className="relative z-10 flex flex-col h-full min-h-0">
          
          {/* Back button */}
          <Link to={isMobile ? `/#gem-${id}` : "/#what-we-offer"} className="inline-flex items-center gap-2 text-white/60 hover:text-luxury transition-colors duration-300 mb-6 text-sm font-medium uppercase tracking-widest flex-shrink-0">
            <HiOutlineArrowNarrowLeft className="text-lg" />
            Back to Collection
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch flex-grow min-h-0 pb-4">
            
            {/* Left: Image */}
            <div className="relative w-full h-[40vh] lg:h-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(212,175,55,0.05)] bg-black/40">
              <img src={gem.image} alt={gem.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
              
              {/* Overlay badge */}
              <div className="absolute bottom-6 left-6 flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full">
                <HiOutlineShieldCheck className="text-luxury text-lg" />
                <span className="text-white text-xs font-medium tracking-widest uppercase">Certified Authentic</span>
              </div>
            </div>

            {/* Right: Info */}
            <div className="flex flex-col justify-center h-full">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-luxury text-xs font-medium uppercase tracking-[0.2em]">{gem.type}</span>
                <span className="w-1 h-1 rounded-full bg-white/20"></span>
                <span className="text-white/60 text-xs font-medium uppercase tracking-[0.2em]">{gem.caratAmount}</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-medium mb-3 drop-shadow-md leading-tight">
                {gem.title}
              </h1>
              
              <p className="text-luxury text-xl font-medium tracking-wide mb-4">
                {gem.price}
              </p>

              <div className="w-full h-[1px] bg-white/10 mb-4 flex-shrink-0"></div>

              <p className="text-white/70 text-base leading-relaxed font-light mb-6">
                {gem.description}
              </p>

              {/* Feature List */}
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-3 text-white/80">
                  <HiOutlineCheckCircle className="text-luxury text-xl" />
                  <span>Independently verified and certified</span>
                </li>
                <li className="flex items-center gap-3 text-white/80">
                  <HiOutlineCheckCircle className="text-luxury text-xl" />
                  <span>Ethically sourced from Sri Lanka</span>
                </li>
                <li className="flex items-center gap-3 text-white/80">
                  <HiOutlineCheckCircle className="text-luxury text-xl" />
                  <span>Secure international shipping available</span>
                </li>
              </ul>

              {/* CTA */}
              <button className="w-full bg-luxury hover:bg-luxury-light text-black font-semibold uppercase tracking-widest py-3.5 px-8 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] flex-shrink-0 mt-auto">
                Inquire About This Gem
              </button>

            </div>

          </div>

        </Container>
      </div>
    </>
  );
};

export default GemDetailsPage;
