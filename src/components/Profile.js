import React from 'react';
// import React, { useRef, useState, useEffect } from 'react';
import { motion, useWillChange, AnimatePresence } from 'framer-motion';
import Timeline from './Timeline';
import { TECHSTACK } from '../constants';
import profilePhoto from '../assets/profile-photo-600.png';
import './Profile.css';

function TechStackCircle({ radius, initialAnimation }) {
  const willChange = useWillChange();
  const iconBoxSize = 32;

  function calculatePosition(angle) {
    // const x = radius + (radius + 14) * Math.cos(angle);
    // const y = radius + (radius + 14) * Math.sin(angle);

    const animation = {
      initial: {
        x: radius - iconBoxSize / 2,
        y: radius - iconBoxSize / 2,
      },
      animate: {
        x: (radius + 40) * Math.cos(angle),
        y: -(radius + 40) * Math.sin(angle),
      },
    };

    // NOTE number of pixels subtracted here must correspond to half icon size
    return animation;
    // x: `calc(${x}% - ${iconBoxSize / 2}px)`,
    // y: `calc(${y}% - ${iconBoxSize / 2}px)`,
  }

  for (let i = 0, angle = -Math.PI / 6;
    i < TECHSTACK.length;
    i += 1, angle += ((4 / 3) * Math.PI) / (TECHSTACK.length - 1)) {
    const animation = calculatePosition(angle);
    // TECHSTACK[i].x = x;
    // TECHSTACK[i].y = y;
    TECHSTACK[i].animation = animation;
  }

  return (
    <>
      {React.Children.toArray(
        TECHSTACK.map(icon => (
          <AnimatePresence initial={initialAnimation}>
            <motion.div
              variants={icon.animation}
            // initial="initial"
              animate="animate"
              transition={{ type: 'spring', duration: 1.8, delay: 0.2 }}
              style={{ willChange, zIndex: 0 }}
            >
              <div style={{
                position: 'absolute',
                left: 44,
                bottom: -76,
                height: `${iconBoxSize}px`,
                width: `${iconBoxSize}px`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 0,
              }}
              >
                {icon.icon}
                <p className="profile__icon-title">{icon.title}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        )),
      )}
    </>
  );
}

function Profile({ initialAnimation }) {
  // const [radius, setRadius] = useState();
  // const ref = useRef(null);

  // useEffect(() => {
  //   setRadius(ref.current.clientHeight / 2);
  // }, []);

  const description = 'I’m a driven .NET fullstack developer with a life long affection for tech and knowledge. This led me to code, to <salt\\> and now; a new career! I am so excited for the opportunity to create products I am passionate about together with a team that I love.';

  return (
    <>
      {/* <div className="profile__photo-container" ref={ref}> */}
      <div className="profile__photo-container">
        <TechStackCircle radius={60} initialAnimation={initialAnimation} />
        <img className="profile__photo" src={profilePhoto} alt="portrait" />
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
