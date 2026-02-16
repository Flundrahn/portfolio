import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { motion, AnimatePresence } from 'framer-motion';
import IconLink from '../IconLink/IconLink';
import { CONFIG } from '../constants';
import './Header.css';

function Header({ setNavOpen, showBackbutton }) {
  return (
    <header className="header">
      <div className="header__button-container">
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="button button--menu"
          type="button"
          onClick={() => setNavOpen(current => !current)}
        >
          <svg className="svg-icon">
            <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z" />
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
        <IconLink
          href={CONFIG.githubUrl}
          icon="fa-brands fa-github"
          label="GitHub"
        />
        <IconLink
          href={CONFIG.linkedinUrl}
          icon="fa-brands fa-linkedin"
          index={1}
          label="LinkedIn"
        />
        <IconLink
          href={`mailto:${CONFIG.email}`}
          icon="fa-solid fa-envelope"
          // TODO: remind self why use index, seems is not necessary
          index={2}
          label="Email"
        />
      </div>
    </header>
  );
}

export default Header;
