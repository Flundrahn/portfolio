import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Navbar.css';

function IconLink({ href, icon, index }) {
  return (
    <a
      href={href}
      className="button button--icon"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i
        className={`${icon} fa-bounce animationDelay${index}`}
      />
    </a>
  );
}

function SectionLink({
  href, title,
}) {
  return (
    <Link
      to={href}
      className="button--section"
    >
      <p className="item__text text-sheen">{title}</p>
      <div className="item__line" />
    </Link>
  );
}

function Navbar({ hideBackButton }) {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar__button-container navbar__button-container--back">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className={`button navbar__back-button${hideBackButton ? ' display-none' : ''}`}
        >
          <i className="fa-solid fa-chevron-left fa-fw" title="Back" />
        </button>
      </div>
      <div className="navbar__button-container navbar__button-container--sections">
        <SectionLink href="/" title="About Me" />
        <SectionLink href="/" title="Techstack" />
        <SectionLink href="/projects" title="Projects" />
        <SectionLink href="/resume" title="Resume" />
      </div>
      <div className="navbar__button-container navbar__button-container--icons">
        <IconLink href="https://github.com/Flundrahn" icon="fa-brands fa-github" />
        <IconLink href="https://www.linkedin.com/in/fredrik-lundstrom/" icon="fa-brands fa-linkedin" index={1} />
        <IconLink href="mailto:fredrik.lundstrom@appliedtechnology.se" icon="fa-solid fa-envelope" index={2} />
      </div>
    </nav>
  );
}

export default Navbar;
