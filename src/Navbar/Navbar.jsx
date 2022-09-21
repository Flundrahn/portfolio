import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Navbar.css';

function IconLink({ href, icon, index }) {
  return (
    <a href={href} className="button button--icon" target="_blank" rel="noopener noreferrer">
      <i className={`${icon} fa-bounce animationDelay${index}`} />
    </a>
  );
}

function SectionLink({ to, title }) {
  return (
    <HashLink
      to={`/#${to}`}
      scroll={el => el.scrollIntoView({ behavior: 'auto', block: 'center' })}
      className="button--section"
    >
      <p className="item__text text-sheen">{title}</p>
      <div className="item__line" />
    </HashLink>
  );
}

function Navbar({ hideBackButton }) {
  return (
    <nav className="navbar">
      <div className="navbar__button-container navbar__button-container--back">
        <Link
          to="/"
          state={{ fromNavbar: true }}
          preventScrollReset
          className={`button navbar__back-button${hideBackButton ? ' display-none' : ''}`}
        >
          <i className="fa-solid fa-chevron-left fa-fw" title="Back" />
        </Link>
      </div>
      <div className="navbar__button-container navbar__button-container--sections">
        <SectionLink to="profile" title="About Me" />
        <SectionLink to="profile" title="Techstack" />
        <SectionLink to="timeline" title="Projects" />
        <SectionLink to="resume" title="Resume" />
      </div>
      <div className="navbar__button-container navbar__button-container--icons">
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
    </nav>
  );
}

export default Navbar;
