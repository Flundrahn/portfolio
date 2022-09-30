import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import axios from 'axios';
import Project from './Project/Project';
import Home from './Home';
import './App.css';
import Header from './Header/Header';
import Navigation from './Navigation/Navigation';
import PageNotFound from './PageNotFound';
import { PROJECTS, API_URL } from './constants';

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [showTechstack, setShowTechstack] = useState(false);
  const [showBackbutton, setShowBackbutton] = useState(false);
  const [readmes, setReadmes] = useState([]);
  const location = useLocation();

  useEffect(() => {
    window.history.scrollRestoration = 'manual';

    PROJECTS.forEach(p => {
      axios
        .get(`${API_URL}/${p.title}/main/README.md`)
        .then(result => setReadmes(rms => [...rms, {
          projectId: p.id,
          markdown: result.data,
        }]))
        .catch(error => console.error(error));
    });
  }, []);

  return (
    <div className="app">
      <Header navOpen={navOpen} setNavOpen={setNavOpen} showBackbutton={showBackbutton} />
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
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Home showTechstack={showTechstack} />} />
          <Route path="projects/:id" element={<Project setShowBackbutton={setShowBackbutton} readmes={readmes} />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
