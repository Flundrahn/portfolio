import React, { useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import Profile from './Profile/Profile';
import Timeline from './Timeline/Timeline';
import Resume from './Resume/Resume';
import { ANIMATION } from './constants';

function Home({ shouldAnimate }) {
  // const ref = useRef();
  const { scrollY } = useScroll();

  return (
    <motion.div
      variants={ANIMATION}
      initial="positionLeft"
      animate="center"
      exit="positionLeft"
      transition={ANIMATION.transition}
    >
      <Profile shouldAnimate={shouldAnimate} />
      <Timeline />
      <Resume />
    </motion.div>
  );
}

export default Home;
