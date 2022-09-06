import React from 'react';
import Navbar from './components/Navbar';
import Timeline from './components/Timeline';
import ProfilePhoto from './assets/profile-photo-600.png';
import './App.css';

const description = 'I’m a driven .NET fullstack developer with a life long affection for tech and knowledge. This led me to code, to <salt\\> and now; a new career! I am so excited for the opportunity to create products I am passionate about together with a team that I love.';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="app__main">
        <img className="app__profile-photo" src={ProfilePhoto} alt="profile" />
        <div className="app__description">
          <h1 className="app__title">Fredrik Lundström</h1>
          <p className="app__text">{description}</p>
        </div>
        <Timeline />
      </main>
    </div>
  );
}

export default App;
