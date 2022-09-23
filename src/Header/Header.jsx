import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { motion, AnimatePresence } from 'framer-motion';
import IconLink from '../IconLink/IconLink';
import { MENUICON_PATH } from '../constants';
import './Header.css';

function Header({ navOpen, setNavOpen, showBackbutton }) {
  return (
    <header className="header">
      <div className="header__button-container">
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="button button--menu"
          type="button"
          onClick={() => setNavOpen(!navOpen)}
        >
          <svg className="svg-icon">
            <path d={MENUICON_PATH} />
          </svg>
        </motion.button>
        <AnimatePresence>
          {showBackbutton && (
            <motion.button
              initial={{ y: -100 }}
              animate={{
                y: 0,
                transition: {
                  type: 'spring',
                  bounce: 2,
                  duration: 0.2,
                },
              }}
              exit={{
                y: -100,
                transition: {
                  type: 'spring',
                  bounce: 10,
                  duration: 0.2,
                },
              }}
              layout="position"
              type="button"
              className="button button--back"
            >
              <HashLink className="button button--back__link" to="/#timeline">
                <i className="fa-solid fa-chevron-left fa-fw" title="Back" />
              </HashLink>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
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
