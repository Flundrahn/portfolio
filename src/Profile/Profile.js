import React from 'react';
import Timeline from '../Timeline/Timeline';
import { TECHSTACK } from '../constants';
import profilePhoto from '../assets/profile-photo-600.png';
import './Profile.css';
import ItemCircle from './ItemCircle';

function Profile({ shouldAnimate }) {
  const description = 'I’m a driven .NET fullstack developer with a life long affection for tech and knowledge. This led me to code, to <salt\\> and now; a new career! I am so excited for the opportunity to create products I am passionate about together with a team that I love.';

  return (
    <>
      <ItemCircle
        items={TECHSTACK}
        relativeRadius={70}
        shouldAnimate={shouldAnimate}
      >
        <div className="profile__photo-container">
          <img className="profile__photo" src={profilePhoto} alt="portrait" />
        </div>
      </ItemCircle>
      <div className="profile__description">
        <h1 className="profile__title">Fredrik Lundström</h1>
        <p className="profile__text">{description}</p>
      </div>
      <Timeline />
    </>
  );
}

export default Profile;