import React from 'react';
import { motion } from 'framer-motion';
import { ANIMATION } from '../constants';
import './Resume.css';

function Resume() {
  return (
    <motion.div
      className="resume"
      id="resume"
      variants={ANIMATION}
      initial="positionLeft"
      animate="center"
      exit="positionLeft"
      transition={ANIMATION.transition}
    >
      <a className="resume__title" href="https://drive.google.com/uc?export=download&id=1VI6YFNoCDeWq1c8951iMglTeUe74IM0d">Download my resume</a>
    </motion.div>
  );
}

export default Resume;
