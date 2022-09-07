/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Navbar.css';

function LinkIcon({ href, icon, index }) {
  const size = '1x';

  return (
    <div className="navbar__icon">
      <a
        href={href}
        className="navbar__link hover-button"
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

function Navbar({ hideBackButton }) {
  const navigate = useNavigate();

  return (
    // NOTE Can add styling shake, bounce etc to draw attention to icons
    <nav className="navbar">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className={`navbar__back-button hover-button${hideBackButton ? ' navbar__back-button--display' : ''}`}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <LinkIcon href="https://github.com/Flundrahn" icon={faGithub} />
      <LinkIcon href="https://www.linkedin.com/in/fredrik-lundstrom/" icon={faLinkedin} index={1} />
      <LinkIcon href="mailto:fredrik.lundstrom@appliedtechnology.se" icon={faEnvelope} index={2} />
    </nav>
  );
}

export default Navbar;
