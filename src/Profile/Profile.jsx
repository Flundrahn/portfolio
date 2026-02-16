import React, { useEffect, useState } from 'react';
import { motion, useAnimationControls, AnimatePresence } from 'framer-motion';
import NextSection from '../NextSection/NextSection';
import profilePhoto from '../assets/profile-photo-600.webp';
import { SKILLS, CONTENT } from '../constants';

// TODO: evaluate if this belongs here or we can do in constants or whatever same as before
import matlabIcon from '../assets/matlab.svg';
import cSharpIcon from '../assets/c-sharp.svg';
import azureIcon from '../assets/azure.svg';

import './Profile.css';

// TODO: evaluate if need this or can do more similar to before
function IconRenderer({ skill }) {
  if (skill.isImage) {
    let src = '';
    if (skill.icon === 'matlab.svg') src = matlabIcon;
    else if (skill.icon === 'c-sharp.svg') src = cSharpIcon;
    else if (skill.icon === 'azure.svg') src = azureIcon;

    return <img src={src} alt={`${skill.title} icon`} className="profile__icon" />;
  }

  return (
    <i
      className={`${skill.icon} fa-fw profile__icon`}
      title={skill.title}
      style={{ color: skill.color }}
    />
  );
}

function Item({ item }) {
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

  function handleDragEnd() {
    controls.start('center');
  }

  return (
    <motion.div
      className="profile__icon-container"
      variants={animations}
      animate="visible"
      initial="hidden"
      drag
      onDragEnd={handleDragEnd}
      layout
      exit="hidden"
    >
      <IconRenderer skill={item} />
      <p className="profile__icon-title">{item.title}</p>
    </motion.div>
  );
}

function ItemCircle({ relativeRadius, showTechstack, children }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    let angle = -Math.PI / 6;

    setItems(
      SKILLS.map(item => {
        const x = `${Math.round(relativeRadius * Math.cos(angle) * 100) / 100}%`;
        const y = `${Math.round(-relativeRadius * Math.sin(angle) * 100) / 100}%`;

        angle += ((4 / 3) * Math.PI) / (SKILLS.length - 1);

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
      <AnimatePresence exitBeforeEnter>
        {showTechstack && React.Children.toArray(
          items.map(item => <Item item={item} />),
        )}
      </AnimatePresence>
      {children}
    </div>
  );
}

function Profile({ showTechstack }) {
  return (
    <section className="profile" id="profile">
      <ItemCircle relativeRadius={75} showTechstack={showTechstack}>
        <div className="profile__photo-container">
          <img
            className="profile__photo"
            src={profilePhoto}
            alt="portrait of author"
          />
        </div>
      </ItemCircle>
      <div className="profile__description">
        <h1 className="text-sheen">{CONTENT.profile.greeting}</h1>
        <h1 className="text-sheen">{CONTENT.profile.name}</h1>
        <p className="profile__text">
          {CONTENT.profile.bio}
        </p>
      </div>
      <NextSection to="timeline" direction="down" title={CONTENT.sections.nextSection} />
    </section>
  );
}

export default Profile;
