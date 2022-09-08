import React from 'react';
import Timeline from './Timeline';
import { TECHSTACK } from '../constants';
import ProfilePhoto from '../assets/profile-photo-600.png';
import './Profile.css';

function TechStackCircle() {
  const iconBoxSize = 32;

  function calculatePosition(angle) {
    const RADIUS = 50;

    const x = RADIUS + (RADIUS + 14) * Math.cos(angle);
    const y = RADIUS + (RADIUS + 14) * Math.sin(angle);

    // NOTE number of pixels subtracted here must correspond to half icon size
    return {
      x: `calc(${x}% - ${iconBoxSize / 2}px)`,
      y: `calc(${y}% - ${iconBoxSize / 2}px)`,
    };
  }

  for (let i = 0, angle = -Math.PI / 6;
    i < TECHSTACK.length;
    i += 1, angle += ((4 / 3) * Math.PI) / (TECHSTACK.length - 1)) {
    TECHSTACK[i].position = calculatePosition(angle);
  }

  return (
    <>
      {React.Children.toArray(
        TECHSTACK.map(r => (
          <div style={{
            position: 'absolute',
            left: r.position.x,
            bottom: r.position.y,
            height: `${iconBoxSize}px`,
            width: `${iconBoxSize}px`,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          >
            {r.icon}
            <p className="profile__icon-title">{r.title}</p>
          </div>
        )),
      )}
    </>
  );
}

function Profile() {
  const description = 'I’m a driven .NET fullstack developer with a life long affection for tech and knowledge. This led me to code, to <salt\\> and now; a new career! I am so excited for the opportunity to create products I am passionate about together with a team that I love.';

  return (
    <>
      <div className="profile__photo-container">
        <TechStackCircle />
        <img className="profile__photo" src={ProfilePhoto} alt="portrait" />
      </div>
      <div className="profile__description">
        <h1 className="profile__title">Fredrik Lundström</h1>
        <p className="profile__text">{description}</p>
      </div>
      <Timeline />
    </>
  );
}

export default Profile;
