import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { TECHSTACK } from '../constants';
import profilePhoto from '../assets/profile-photo-600.png';
import './Profile.css';
import NextSection from '../NextSection/NextSection';

function Item({ item, showTechstack }) {
  const animations = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      x: item.x,
      y: item.y,
    },
    exit: {
      opacity: 0,
      x: 0,
      y: 0,
    },
  };

  return (
    <AnimatePresence>
      {showTechstack && (
        <motion.div
          className="profile__icon-container"
          variants={animations}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{
            type: 'spring',
            duration: 1,
          }}
        >
          {item.icon}
          <p className="profile__icon-title">{item.title}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ItemCircle({
  items, relativeRadius, showTechstack, children,
}) {
  function calculatePosition(angle) {
    return {
      x: `${Math.round(relativeRadius * Math.cos(angle) * 100) / 100}%`,
      y: `${Math.round(-relativeRadius * Math.sin(angle) * 100) / 100}%`,
    };
  }

  let angle = -Math.PI / 6;

  const itemsWithPosition = items.map(i => {
    const { x, y } = calculatePosition(angle);
    angle += ((4 / 3) * Math.PI) / (items.length - 1);

    return { ...i, x, y };
  });

  return (
    <div className="techstack">
      {React.Children.toArray(
        itemsWithPosition.map(item => <Item item={item} showTechstack={showTechstack} />),
      )}
      {children}
    </div>
  );
}

function Profile({ showTechstack }) {
  const saltString = ' <salt/> ';

  return (
    <section className="profile" id="profile">
      <ItemCircle items={TECHSTACK} relativeRadius={75} showTechstack={showTechstack}>
        <div className="profile__photo-container">
          <img className="profile__photo" src={profilePhoto} alt="portrait" />
        </div>
      </ItemCircle>
      <div className="profile__description">
        <h1 className="text-sheen">Hello, world</h1>
        <h1 className="text-sheen">I’m Fredrik</h1>
        <p className="profile__text">
          A driven .NET fullstack developer with a life long affection for tech and knowledge. My
          passion led me to code, to my employer
          <a className="text--a" href="https://www.salt.dev/">
            {saltString}
          </a>
          and now; a new career! I am so excited for the opportunity to create products I am
          passionate about together with a team that I love.
        </p>
      </div>
      <NextSection to="timeline" direction="down" title="Next section" />
    </section>
  );
}

export default Profile;
