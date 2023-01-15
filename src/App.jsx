import React, { useState, useEffect, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './Header/Header';
import Navigation from './Navigation/Navigation';
import Home from './Home';
import './App.css';

const Project = lazy(() => import('./Project/Project'));
const PageNotFound = lazy(() => import('./PageNotFound'));

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [showTechstack, setShowTechstack] = useState(false);
  const [showBackbutton, setShowBackbutton] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  return (
    <div className="app">
      <Header setNavOpen={setNavOpen} showBackbutton={showBackbutton} />
      <AnimatePresence>
        {navOpen && (
          <Navigation
            navOpen={navOpen}
            setNavOpen={setNavOpen}
            setShowTechstack={setShowTechstack}
          />
        )}
      </AnimatePresence>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Home showTechstack={showTechstack} />} />
          <Route path="projects/:id" element={<Project setShowBackbutton={setShowBackbutton} />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
