import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import Navbar from "../components/Navbar";
import GlobalGemstone from "../components/GlobalGemstone";
import Hero from "../sections/Hero";
import About from "../sections/About";
import WhatWeOffer from "../sections/WhatWeOffer";
import Certification from "../sections/Certification";
import GlobalBuyers from "../sections/GlobalBuyers";
import BuyerProtection from "../sections/BuyerProtection";
import Testimonials from "../sections/Testimonials";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = location.hash.replace("#", "");
      setTimeout(() => {
        scroller.scrollTo(section, {
          duration: 800,
          smooth: true,
          spy: true,
        });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <GlobalGemstone />
      <main>
        <Hero />
        <About />
        <Certification />
        <GlobalBuyers />
        <BuyerProtection />
        <WhatWeOffer />
        <Testimonials />
      </main>
    </>
  );
};

export default Home;
