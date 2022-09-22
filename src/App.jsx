import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Project from './Project/Project';
import Home from './Home';
import './App.css';
import Header from './Header/Header';
import Navigation from './Navigation/Navigation';
import PageNotFound from './PageNotFound';

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [showTechstack, setShowTechstack] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  return (
    <main className="app">
      <Header navOpen={navOpen} setNavOpen={setNavOpen} />
      <AnimatePresence>
        {navOpen && (
          <Navigation
            navOpen={navOpen}
            setNavOpen={setNavOpen}
            showTechstack={showTechstack}
            setShowTechstack={setShowTechstack}
          />
        )}
      </AnimatePresence>
      {/* initial={false} */}
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Home showTechstack={showTechstack} />} />
          <Route path="projects/:id" element={<Project />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AnimatePresence>
    </main>
  );
}

export default App;
