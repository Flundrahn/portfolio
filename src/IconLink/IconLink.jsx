import React from 'react';

function IconLink({ href, icon, index }) {
  return (
    <a href={href} className="button button--icon" target="_blank" rel="noopener noreferrer">
      <i className={`${icon} fa-bounce animationDelay${index}`} />
    </a>
  );
}

export default IconLink;
