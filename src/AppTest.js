/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Navbar/Navbar';
import Project from './Project/Project';
import './App.css';
import Resume from './Resume/Resume';
import Timeline from './Timeline/Timeline';
import Profile from './Profile/Profile';

function Page({ toggle, text }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 1,
      }}
      className="testdiv"
    >
      {toggle && <p>{text}</p>}
    </motion.div>
  );
}

function OtherPage({ toggle, text }) {
  const array = [1, 2, 3, 4, 5];

  const list = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
      transition: {
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div
      variants={list}
      initial="hidden"
      animate="visible"
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 2.5,
        // delayChildren: 0.8,
        staggerChildren: 0.1,
      }}
      className="testdiv"
    >
      {
        React.Children.toArray(
          array.map(el => (
            <motion.p variants={list}>{el}</motion.p>
          )),
        )
      }
    </motion.div>
  );
}

function AppTest() {
  const [hideBackButton, setHideBackButton] = useState(true);
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const [toggle, setToggle] = useState(true);
  const location = useLocation();

  return (
    <main className="app" key="test">
      <Navbar hideBackButton={hideBackButton} />
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        height: 300,
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >
        <button type="button" onClick={() => setToggle(!toggle)}>Flip test page</button>
      </div>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Page toggle={toggle} text="My home page" />} />
          <Route path="/projects" element={<Page toggle={toggle} text="My projects page" />} />
          <Route path="/resume" element={<OtherPage toggle={toggle} text="My resume page" />} />
        </Routes>
      </AnimatePresence>

    </main>
  );
}

export default AppTest;
