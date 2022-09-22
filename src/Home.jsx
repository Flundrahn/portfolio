import React from 'react';
import { motion } from 'framer-motion';
import Profile from './Profile/Profile';
import Timeline from './Timeline/Timeline';
import Resume from './Resume/Resume';
import { ANIMATIONS } from './constants';

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
