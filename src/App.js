/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './Navbar/Navbar';
import Project from './Project/Project';
import './App.css';
import Resume from './Resume/Resume';
import Timeline from './Timeline/Timeline';
import Profile from './Profile/Profile';
import Home from './Home';

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
            path="/projects"
            element={<Timeline shouldAnimate={shouldAnimate} />}
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
          <Route
            path="/resume"
            element={<Resume shouldAnimate={shouldAnimate} />}
          />
        </Routes>
      </AnimatePresence>
    </main>
  );
}

export default App;
