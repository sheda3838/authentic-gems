import React from 'react';
import Navbar from './components/Navbar';
import GlobalGemstone from './components/GlobalGemstone';
import Hero from './sections/Hero';
import About from './sections/About';
import Certification from './sections/Certification';
import GlobalBuyers from './sections/GlobalBuyers';
import BuyerProtection from './sections/BuyerProtection';

function App() {
  return (
    <div className="relative font-sans text-text bg-background min-h-screen selection:bg-luxury/30 selection:text-white">
      <Navbar />
      <GlobalGemstone />
      
      <main>
        <Hero />
        <About />
        <Certification />
        <GlobalBuyers />
        <BuyerProtection />
      </main>
    </div>
  );
}

export default App;
