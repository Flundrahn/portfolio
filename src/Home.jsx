import React, { lazy } from 'react';
import { motion } from 'framer-motion';
import Profile from './Profile/Profile';
import { CONFIG } from './constants';

const Timeline = lazy(() => import('./Timeline/Timeline'));
const Resume = lazy(() => import('./Resume/Resume'));

function Home({ showTechstack, hasTimelineAnimated, setHasTimelineAnimated }) {
  return (
    <motion.div
      variants={CONFIG.animations}
      animate="center"
      exit="left"
      transition={CONFIG.animations.transition}
    >
      <Profile showTechstack={showTechstack} />
      <Timeline
        hasTimelineAnimated={hasTimelineAnimated}
        setHasTimelineAnimated={setHasTimelineAnimated}
      />
      <Resume />
    </motion.div>
  );
}

export default Home;
