import React, { useEffect, useState } from 'react';
import {
  Routes, Route, useLocation,
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './Navbar/Navbar';
import Project from './Project/Project';
import './App.css';
import Home from './Home';

function App() {
  const [hideBackButton, setHideBackButton] = useState(true);
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      // Back off, browser, I got this...
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <>
      {/* <ScrollRestoration /> */}
      <main className="app" key="test">
        <Navbar hideBackButton={hideBackButton} />
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={<Home shouldAnimate={shouldAnimate} />}
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
          </Routes>
        </AnimatePresence>
      </main>
    </>
  );
}

export default App;
