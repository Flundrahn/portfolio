import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Project from './components/Project';
import './App.css';

function App() {
  const [hideBackButton, setHideBackButton] = useState(true);

  return (
    <BrowserRouter>
      <div className="app background">
        <Navbar hideBackButton={hideBackButton} />
        <main className="app__main">
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="project/:id" element={<Project setHideBackButton={setHideBackButton} />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
