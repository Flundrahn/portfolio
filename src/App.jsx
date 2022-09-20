import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './Navbar/Navbar';
import Project from './Project/Project';
import Home from './Home';
import './App.css';

function App() {
  const [hideBackButton, setHideBackButton] = useState(true);
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const location = useLocation();

  return (
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
  );
}

export default App;
