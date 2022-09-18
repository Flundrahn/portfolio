import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Profile from './Profile/Profile';
import Project from './Project/Project';
import Timeline from './Timeline/Timeline';
import './App.css';
import Resume from './Resume/Resume';

function App() {
  const [hideBackButton, setHideBackButton] = useState(true);
  const [shouldAnimate, setShouldAnimate] = useState(true);

  return (
    <BrowserRouter>
      <main className="app">
        <Navbar hideBackButton={hideBackButton} />
        <Routes>
          <Route
            path="/"
            element={(
              <>
                <Profile shouldAnimate={shouldAnimate} />
                <Timeline />
                <Resume />
              </>
            )}
          />
          <Route
            path="project/:id"
            element={(
              <Project
                setHideBackButton={setHideBackButton}
                setInitialAnimation={setShouldAnimate}
              />
            )}
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
