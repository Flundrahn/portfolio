import React, { useEffect, useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { TECHSTACK } from '../constants';
import profilePhoto from '../assets/profile-photo-600.webp';
import './Profile.css';
import NextSection from '../NextSection/NextSection';

function Item({ item, showTechstack }) {
  const controls = useAnimationControls();

  const animations = {
    hidden: {
      opacity: 0,
      x: 0,
      y: 0,
    },
    visible: {
      opacity: 1,
      x: item.x,
      y: item.y,
    },
    center: {
      x: item.x,
      y: item.y,
    },
    transition: {
      type: 'spring',
      duration: 1,
    },
  };

  useEffect(() => {
    if (showTechstack) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [showTechstack]);

  function handleDragEnd() {
    controls.start('center');
  }

  return (
    <motion.div
      className="profile__icon-container"
      variants={animations}
      animate={controls}
      initial="hidden"
      drag
      onDragEnd={handleDragEnd}
      layout
    >
      {item.icon}
      <p className="profile__icon-title">{item.title}</p>
    </motion.div>
  );
}

function ItemCircle({ relativeRadius, showTechstack, children }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    let angle = -Math.PI / 6;

    setItems(
      TECHSTACK.map(item => {
        const x = `${Math.round(relativeRadius * Math.cos(angle) * 100) / 100}%`;
        const y = `${Math.round(-relativeRadius * Math.sin(angle) * 100) / 100}%`;

        angle += ((4 / 3) * Math.PI) / (TECHSTACK.length - 1);

        return {
          ...item,
          x,
          y,
        };
      }),
    );
  }, []);

  return (
    <div className="techstack">
      {React.Children.toArray(
        items.map(item => <Item item={item} showTechstack={showTechstack} />),
      )}
      {children}
    </div>
  );
}

function Profile({ showTechstack }) {
  const saltString = ' </salt> ';

  return (
    <section className="profile" id="profile">
      <ItemCircle relativeRadius={75} showTechstack={showTechstack}>
        <div className="profile__photo-container">
          <img className="profile__photo" src={profilePhoto} alt="portrait" />
        </div>
      </ItemCircle>
      <div className="profile__description">
        <h1 className="text-sheen">Hello, world</h1>
        <h1 className="text-sheen">I???m Fredrik</h1>
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
