import React from 'react';
import Timeline from './Timeline';
import ProfilePhoto from '../assets/profile-photo-600.png';

function Profile() {
  const description = 'I’m a driven .NET fullstack developer with a life long affection for tech and knowledge. This led me to code, to <salt\\> and now; a new career! I am so excited for the opportunity to create products I am passionate about together with a team that I love.';

  return (
    <>
      <div className="profile-photo__container">
        <img className="app__profile-photo" src={ProfilePhoto} alt="profile" />
      </div>
      <div className="app__description">
        <h1 className="app__title">Fredrik Lundström</h1>
        <p className="app__text">{description}</p>
      </div>
      <Timeline />
    </>
  );
}

export default Profile;
