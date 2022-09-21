import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './Navbar/Navbar';
import Project from './Project/Project';
import Home from './Home';
import './App.css';

function PageNotFound() {
  return (
    <div className="centered">
      <p>Page not found</p>
    </div>
  );
}

function App() {
  const [hideBackButton, setHideBackButton] = useState(true);
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const location = useLocation();

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  useEffect(() => {
    if (location.state?.fromNavbar) {
      window.scroll(0, scrollPosition);
    }
  });

  return (
    <main className="app" key="test">
      <Navbar hideBackButton={hideBackButton} />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route
            exact
            path="/"
            element={<Home shouldAnimate={shouldAnimate} setScrollPosition={setScrollPosition} />}
          />
          <Route
            path="projects/:id"
            element={(
              <Project
                setHideBackButton={setHideBackButton}
                setInitialAnimation={setShouldAnimate}
              />
            )}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AnimatePresence>
    </main>
  );
}

export default App;
