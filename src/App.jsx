import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Project from './Project/Project';
import Home from './Home';
import './App.css';
import Header from './Header/Header';
import Navigation from './Navigation/Navigation';

function PageNotFound() {
  return (
    <div className="centered">
      <p>Page not found</p>
    </div>
  );
}

function App() {
  // const [hideBackButton, setHideBackButton] = useState(true);
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const [navOpen, setNavOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const location = useLocation();

  useEffect(() => {
    window.history.scrollRestoration = 'auto';
  }, []);

  useEffect(() => {
    if (location.state?.fromNavbar) {
      window.scroll(0, scrollPosition);
    }
  });

  return (
    <main className="app">
      <Header navOpen={navOpen} setNavOpen={setNavOpen} />
      <AnimatePresence>
        <Navigation navOpen={navOpen} />
      </AnimatePresence>
      {/* <AnimatePresence>{navOpen && <Navigation navOpen={navOpen} />}</AnimatePresence> */}
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route
            exact
            path="/"
            element={<Home shouldAnimate={shouldAnimate} setScrollPosition={setScrollPosition} />}
          />
          <Route path="projects/:id" element={<Project setInitialAnimation={setShouldAnimate} />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AnimatePresence>
    </main>
  );
}

export default App;
