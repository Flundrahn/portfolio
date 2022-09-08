import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

function LinkIcon({ href, icon, index }) {
  return (
    <div className="button navbar__icon">
      <a
        href={href}
        className="navbar__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i
          className={`${icon} fa-bounce animationDelay${index}`}
        />
      </a>
    </div>
  );
}

function Navbar({ hideBackButton }) {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className={`button navbar__back-button${hideBackButton ? ' display-none' : ''}`}
      >
        <i className="fa-solid fa-chevron-left fa-fw" title="Back" />
      </button>
      <LinkIcon href="https://github.com/Flundrahn" icon="fa-brands fa-github" />
      <LinkIcon href="https://www.linkedin.com/in/fredrik-lundstrom/" icon="fa-brands fa-linkedin" index={1} />
      <LinkIcon href="mailto:fredrik.lundstrom@appliedtechnology.se" icon="fa-solid fa-envelope" index={2} />
    </nav>
  );
}

export default Navbar;
