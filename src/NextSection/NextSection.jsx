import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './NextSection.css';

function NextSection({ to, direction }) {
  return (
    <HashLink to={`/#${to}`} className={`button--next-section translate--${direction}`}>
      <i className={`next-section__icon fa-solid fa-chevron-${direction} fa-fw`} title="Back" />
    </HashLink>
  );
}

export default NextSection;
