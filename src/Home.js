import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Profile from './Profile/Profile';
import Timeline from './Timeline/Timeline';
import Resume from './Resume/Resume';
import { ANIMATION } from './constants';

function Home({ shouldAnimate }) {
  const ref = useRef();

  return (
    // <AnimatePresence initial={false}>
    <motion.div
      variants={ANIMATION}
      initial="hidden"
      animate="show"
      exit="positionLeft"
      transition={ANIMATION.transition}
    >
      <Profile shouldAnimate={shouldAnimate} />
      <Timeline />
      <Resume myRef={ref} />
    </motion.div>
    // </AnimatePresence>
  );
}

export default Home;
