import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import useFlubber from './useFlubber';
import { openMenu, closeMenu } from './paths';
import './Header.css';

const paths = [openMenu, closeMenu, openMenu];

function IconLink({ href, icon, index }) {
  return (
    <a href={href} className="button button--icon" target="_blank" rel="noopener noreferrer">
      <i className={`${icon} fa-bounce animationDelay${index}`} />
    </a>
  );
}

function Header({ navOpen, setNavOpen }) {
  const [pathIndex, setPathIndex] = useState(0);
  const progress = useMotionValue(pathIndex);
  const path = useFlubber(progress, paths);

  useEffect(() => {
    const animation = animate(progress, pathIndex, {
      duration: 0.3,
      ease: 'easeInOut',
    });

    setPathIndex((pathIndex + 1) % 2);

    return () => animation.stop();
  }, [navOpen]);

  return (
    <header className="header">
      <button className="button--menu" type="button" onClick={() => setNavOpen(!navOpen)}>
        <svg className="header__svg" height="100%" width="100%">
          <motion.path d={path} />
        </svg>
      </button>
      <div className="header__button-container">
        <IconLink href="https://github.com/Flundrahn" icon="fa-brands fa-github" />
        <IconLink
          href="https://www.linkedin.com/in/fredrik-lundstrom/"
          icon="fa-brands fa-linkedin"
          index={1}
        />
        <IconLink
          href="mailto:fredrik.lundstrom@appliedtechnology.se"
          icon="fa-solid fa-envelope"
          index={2}
        />
      </div>
    </header>
  );
}

export default Header;
