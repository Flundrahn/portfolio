import React from 'react';
import { motion } from 'framer-motion';

// TODO delete this if use motion.div directly
function AnimatedProject({
  initial, animate, exit, children,
}) {
  const animation = {
    initial: {
      x: '100vw',
    },
    animate: {
      x: '0vw',
    },
    exit: {
      x: '100vw',
    },
  };

  return (
    <motion.div
      variants={animation}
      initial={initial}
      animate={animate}
      exit={exit}
      transition={{
        type: 'spring',
        duration: 1,
        bounce: 0.2,
      }}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedProject;
