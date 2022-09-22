import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './NextSection.css';

function NextSection({ to, direction, title }) {
  return (
    <HashLink to={`/#${to}`} className={`button--next-section translate--${direction}`}>
      <i className={`next-section__icon fa-solid fa-chevron-${direction} fa-fw`} title={title} />
    </HashLink>
  );
}

export default NextSection;
