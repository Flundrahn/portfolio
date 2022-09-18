import React from 'react';
import { motion } from 'framer-motion';

function AnimateSection({ animation, children }) {
  return (
    <motion.div animate={animation}>
      {children}
    </motion.div>
  );
}

export default AnimateSection;
