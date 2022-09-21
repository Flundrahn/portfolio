import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { TECHSTACK } from '../constants';
import profilePhoto from '../assets/profile-photo-600.png';
import './Profile.css';
import NextSection from '../NextSection/NextSection';

function ItemCircle({
  items, relativeRadius, shouldAnimate, children,
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
      <AnimatePresence initial={shouldAnimate}>
        {React.Children.toArray(
          itemsWithPosition.map(item => (
            <motion.div
              className="profile__icon-container"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                x: item.x,
                y: item.y,
              }}
              transition={{
                type: 'spring',
                duration: 1.8,
                delay: 0.2,
              }}
            >
              {item.icon}
              <p className="profile__icon-title">{item.title}</p>
            </motion.div>
          )),
        )}
      </AnimatePresence>
      {children}
    </div>
  );
}

function Profile({ shouldAnimate }) {
  const description = 'A driven .NET fullstack developer with a life long affection for tech and knowledge. This led me to code, to <salt/> and now; a new career! I am so excited for the opportunity to create products I am passionate about together with a team that I love.';

  return (
    <section className="profile" id="profile">
      <ItemCircle items={TECHSTACK} relativeRadius={75} shouldAnimate={shouldAnimate}>
        <div className="profile__photo-container">
          <img className="profile__photo" src={profilePhoto} alt="portrait" />
        </div>
      </ItemCircle>
      <div className="profile__description">
        <h1 className="text-sheen">I’m Fredrik Lundström</h1>
        <p className="profile__text text-sheen">{description}</p>
      </div>
      <NextSection to="timeline" direction="down" />
    </section>
  );
}

export default Profile;
