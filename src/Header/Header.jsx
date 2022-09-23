import React from 'react';
import IconLink from '../IconLink/IconLink';
import { MENUICON_PATH } from '../constants';
import './Header.css';

function Header({ navOpen, setNavOpen }) {
  return (
    <header className="header">
      <button className="button button--menu" type="button" onClick={() => setNavOpen(!navOpen)}>
        <svg className="svg-icon">
          <path d={MENUICON_PATH} />
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
