/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Navbar.css';

function Icon({ href, icon, index }) {
  const size = '1x';

  return (
    <div className="navbar__icon">
      <a
        href={href}
        className="navbar__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={icon}
          size={size}
          className={`fa-bounce fa-bounce${index}`}
        />
      </a>
    </div>
  );
}

function Navbar() {
  return (
    // NOTE Can add styling shake, bounce etc to draw attention to icons
    <nav className="navbar">
      <Icon href="https://github.com/Flundrahn" icon={faGithub} />
      <Icon href="https://www.linkedin.com/in/fredrik-lundstrom/" icon={faLinkedin} index={1} />
      <Icon href="mailto:fredrik.lundstrom@appliedtechnology.se" icon={faEnvelope} index={2} />
    </nav>
  );
}

export default Navbar;
