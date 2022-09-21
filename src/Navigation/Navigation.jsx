import React, { useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import './Navigation.css';
import { motion, useAnimationControls } from 'framer-motion';

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
    <motion.div className="nav__item" variants={childAnimations}>
      <HashLink
        to={`/#${to}`}
        scroll={el => el.scrollIntoView({ behavior: 'auto', block: 'center' })}
        className="button--section"
      >
        <p className="item__text text-sheen">{title}</p>
        <div className="item__line" />
      </HashLink>
    </motion.div>
  );
}

function Navigation({ navOpen }) {
  const controls = useAnimationControls();

  const parentAnimations = {
    open: {
      x: 0,
      transition: {
        type: 'spring',
        bounce: 0,
        duration: 0.3,
        staggerChildren: 0.05,
      },
      position: 'fixed',
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

  useEffect(() => {
    if (navOpen) {
      controls.start(parentAnimations.open);
    } else {
      controls.start(parentAnimations.closed);
    }
  }, [navOpen]);

  return (
    <motion.nav
      className="navbar navbar__button-container navbar__button-container--sections"
      // variants={parentAnimations}
      // initial="closed"
      // animate="open"
      // exit="closed"
      // layout="position"
      animate={controls}
    >
      <SectionLink to="profile" title="About Me" />
      <SectionLink to="profile" title="Techstack" />
      <SectionLink to="timeline" title="Projects" />
      <SectionLink to="resume" title="Resume" />
    </motion.nav>
  );
}

export default Navigation;
