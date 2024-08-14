import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import Footer from './Footer';
import Pricing from './Pricing';
import Portfolio from './Portfolio';
import Solutions from './Solutions';

function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/solutions" element={<Solutions />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
