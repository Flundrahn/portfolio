import React from 'react';

function IconLink({
  href,
  icon,
  index,
  label,
}) {
  return (
    <a
      href={href}
      className="button button--icon"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
    >
      <i className={`${icon} fa-bounce animationDelay${index}`} />
    </a>
  );
}

export default IconLink;
