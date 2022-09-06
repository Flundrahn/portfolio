import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Project from './components/Project';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app background">
        <Navbar />
        <main className="app__main">
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="project/:id" element={<Project />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
