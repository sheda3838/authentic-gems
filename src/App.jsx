import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GemDetailsPage from "./pages/GemDetailsPage";

function App() {
  return (
    <Router>
      <div className="relative font-sans text-text bg-background min-h-screen selection:bg-luxury/30 selection:text-white">
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/gems/:id" element={<GemDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
