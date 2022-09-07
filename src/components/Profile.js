import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Timeline from './Timeline';
import { TECHSTACK } from '../constants';
import ProfilePhoto from '../assets/profile-photo-600.png';
import './Profile.css';

function TechStackCircle({ children }) {
  const techStackContainer = useRef(null);

  function calculatePosition(angle) {
    const RADIUS = 50;

    const x = RADIUS + (RADIUS + 5) * Math.cos(angle);
    const y = RADIUS + (RADIUS + 5) * Math.sin(angle);

    // NOTE number of pixels subtracted here must correspond to half icon size
    return { x: `calc(${x}% - 16px)`, y: `calc(${y}% - 16px)` };
  }

  for (let i = 0, angle = 0;
    i < TECHSTACK.length;
    i += 1, angle += (2 * Math.PI) / TECHSTACK.length) {
    TECHSTACK[i].position = calculatePosition(angle);
  }

  return (
    <div className="profile__tech-stack" ref={techStackContainer}>
      {React.Children.toArray(
        TECHSTACK.map(r => (
          <FontAwesomeIcon
            icon={r.icon}
            size="2x"
            style={{
              display: 'block',
              position: 'absolute',
              left: r.position.x,
              bottom: r.position.y,
            }}
          />
        )),
      )}
      {children}
    </div>
  );
}

function Profile() {
  const description = 'I’m a driven .NET fullstack developer with a life long affection for tech and knowledge. This led me to code, to <salt\\> and now; a new career! I am so excited for the opportunity to create products I am passionate about together with a team that I love.';

  return (
    <>
      <TechStackCircle>
        <div className="profile__photo-container">
          <img className="profile__photo" src={ProfilePhoto} alt="portrait" />
        </div>
      </TechStackCircle>
      <div className="profile__description">
        <h1 className="profile__title">Fredrik Lundström</h1>
        <p className="profile__text">{description}</p>
      </div>
      <Timeline />
    </>
  );
}

export default Profile;
