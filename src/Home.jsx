import React from 'react';
import { motion } from 'framer-motion';
// import { ScrollRestoration } from 'react-router-dom';
import Profile from './Profile/Profile';
import Timeline from './Timeline/Timeline';
import Resume from './Resume/Resume';
import { ANIMATIONS } from './constants';

function Home({ shouldAnimate, setScrollPosition }) {
  return (
    <>
      {/* <ScrollRestoration /> */}
      <motion.div
        variants={ANIMATIONS}
        initial="left"
        animate="center"
        exit="left"
        transition={ANIMATIONS.transition}
      >
        <Profile shouldAnimate={shouldAnimate} />
        {/* TODO remove if don't use */}
        {/* <div className="navbar-spacing" /> */}
        <Timeline setScrollPosition={setScrollPosition} />
        <Resume />
      </motion.div>
    </>
  );
}

export default Home;
