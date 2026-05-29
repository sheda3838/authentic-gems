import React from 'react';
import Navbar from './components/Navbar';
import GlobalGemstone from './components/GlobalGemstone';
import Hero from './sections/Hero';
import About from './sections/About';

function App() {
  return (
    <div className="relative font-sans text-text bg-background min-h-screen selection:bg-luxury/30 selection:text-white">
      <Navbar />
      <GlobalGemstone />
      
      <main>
        <Hero />
        <About />
        
        {/* Extra spacing at the bottom to allow scrolling past about if necessary, 
            or a simple footer for completeness */}
        <footer className="py-10 text-center text-muted text-sm border-t border-white/5">
          <p>&copy; {new Date().getFullYear()} Authentic Gems International. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
