import React, { lazy } from 'react';
import { motion } from 'framer-motion';
import Profile from './Profile/Profile';
import { ANIMATIONS } from './constants';

const Timeline = lazy(() => import('./Timeline/Timeline'));
const Resume = lazy(() => import('./Resume/Resume'));

function Home({ showTechstack }) {
  return (
    <motion.div
      variants={ANIMATIONS}
      initial="left"
      animate="center"
      exit="left"
      transition={ANIMATIONS.transition}
    >
      <Profile showTechstack={showTechstack} />
      <Timeline />
      <Resume />
    </motion.div>
  );
}

export default Home;
