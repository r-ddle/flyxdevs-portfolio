import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import Footer from './Footer';
import Pricing from './Pricing';
import Portfolio from './Portfolio';
import Solutions from './Solutions';
import { motion as m, AnimatePresence } from 'framer-motion';

console.log('%c Gojo is Gay', 'font-size: 200px; color: red');

function Page() {
  const location = useLocation();

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <m.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
              >
                <About />
              </m.div>
            }
          />
          <Route
            path="/pricing"
            element={
              <m.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
              >
                <Pricing />
              </m.div>
            }
          />
          <Route
            path="/portfolio"
            element={
              <m.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
              >
                <Portfolio />
              </m.div>
            }
          />
          <Route
            path="/solutions"
            element={
              <m.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
              >
                <Solutions />
              </m.div>
            }
          />
        </Routes>
      </AnimatePresence>
      <Footer />
    </m.div>
  );
}

export default Page;
