import React, { useRef } from 'react';
import { HashLink } from 'react-router-hash-link';
import { motion } from 'framer-motion';
// import { motion, useAnimationControls } from 'framer-motion';
import useClickOutside from './useClickOutside';
import './Navigation.css';

function SectionLink({ to, title }) {
  const childAnimations = {
    closed: {
      x: -128,
    },
    open: {
      x: 0,
      transition: {
        type: 'spring',
        bounce: 0.2,
      },
    },
  };

  return (
    <motion.div className="button--section" variants={childAnimations}>
      <HashLink to={`/#${to}`} className="item__link">
        <p className="item__text">{title}</p>
        <div className="item__line" />
      </HashLink>
    </motion.div>
  );
}

function Navigation({ navOpen, setNavOpen }) {
  // const controls = useAnimationControls();
  const ref = useRef();

  useClickOutside(
    ref,
    () => {
      if (navOpen) setNavOpen(false);
    },
    [navOpen],
  );

  const parentAnimations = {
    open: {
      x: 0,
      transition: {
        type: 'spring',
        bounce: 0,
        duration: 0.2,
        staggerChildren: 0.03,
      },
      // position: 'fixed', // NOTE Remove if already fixed
    },
    closed: {
      x: -128,
      transition: {
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      },
    },
  };

  // useEffect(() => {
  //   if (navOpen) {
  //     controls.start('open');
  //   } else {
  //     controls.start('closed');
  //   }
  // }, [navOpen]);

  return (
    <motion.nav
      className="navbar"
      variants={parentAnimations}
      initial="closed"
      animate="open"
      exit="closed"
      layout="position"
      // animate={controls}
      ref={ref}
    >
      <SectionLink to="profile" title="About Me" />
      <SectionLink to="profile" title="Techstack" />
      <SectionLink to="timeline" title="Projects" />
      <SectionLink to="resume" title="Resume" />
    </motion.nav>
  );
}

export default Navigation;
