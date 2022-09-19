import React from 'react';
import { motion } from 'framer-motion';

// TODO delete this if use motion.div directly
function AnimatedSection({ animation, children }) {
  return (
    <motion.div animate={animation}>
      {children}
    </motion.div>
  );
}

export default AnimatedSection;
