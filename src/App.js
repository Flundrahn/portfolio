import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Profile from './Profile/Profile';
import Project from './Project/Project';
import './App.css';

function App() {
  const [hideBackButton, setHideBackButton] = useState(true);
  const [shouldAnimate, setShouldAnimate] = useState(true);

  return (
    <BrowserRouter>
      <div className="app background">
        <Navbar hideBackButton={hideBackButton} />
        <div className="app__spacing" />
        <main className="app__main">
          <Routes>
            <Route path="/" element={<Profile shouldAnimate={shouldAnimate} />} />
            <Route path="project/:id" element={<Project setHideBackButton={setHideBackButton} setInitialAnimation={setShouldAnimate} />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
