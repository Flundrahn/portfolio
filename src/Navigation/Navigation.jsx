import React, { useRef } from 'react';
import { HashLink } from 'react-router-hash-link';
import { motion } from 'framer-motion';
import useClickOutside from './useClickOutside';
import './Navigation.css';

function SectionLink({ to, title, onClick }) {
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
      <HashLink to={`/#${to}`} className="item__link" onClick={onClick}>
        <p className="item__text">{title}</p>
        <div className="item__line" />
      </HashLink>
    </motion.div>
  );
}

function Navigation({
  navOpen, setNavOpen, setShowTechstack,
}) {
  const ref = useRef();

  useClickOutside(
    ref,
    () => {
      setNavOpen(false);
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
    },
    closed: {
      x: -168,
      transition: {
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      },
    },
  };

  function handleDrag(event, info) {
    if (info.offset.x < -40) {
      setNavOpen(false);
    }
  }

  return (
    <motion.nav
      className="navbar"
      variants={parentAnimations}
      initial="closed"
      animate="open"
      exit="closed"
      layout="position"
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={{ left: 0.2, right: 0 }}
      onDragEnd={handleDrag}
      ref={ref}
    >
      <SectionLink to="profile" title="About Me" />
      <SectionLink
        to="profile"
        title="Techstack"
        onClick={() => setShowTechstack(current => !current)}
      />
      <SectionLink to="timeline" title="Projects" />
      <SectionLink to="resume" title="Resume" />
    </motion.nav>
  );
}

export default Navigation;
