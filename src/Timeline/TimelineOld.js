import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// import { useInView, useAnimation } from 'framer-motion';
import { PROJECTS, ANIMATION } from '../constants';
import './Timeline.css';

function Bullet({ position = 'center' }) {
  return (
    <div className="bullet">
      <div className="bullet__line" />
      <div className={`bullet__circle bullet--${position}`} />
    </div>
  );
}

function Item({ prefix, id, title }) {
  return (
    <motion.div variants={ANIMATION} className="item">
      <div className="item__prefix">{prefix}</div>
      <Bullet />
      <div className="item__title-container">
        <Link to={`${id}`} className="item__title">{title}</Link>
      </div>
    </motion.div>
  );
}

function TimelineOld() {
  // const isInView = useInView(ref, { margin: '200% 0px -50% 0px' });
  // const animation = useAnimation();

  // useEffect(() => {
  //   if (isInView) {
  //     animation.start({
  //       y: '0',
  //       transition: {
  //         type: 'spring',
  //         duration: 1,
  //         bounce: 0.2,
  //       },
  //     });
  //   }
  //   if (!isInView) {
  //     animation.start({
  //       y: '100vw',
  //       transition: {
  //         duration: 1,
  //       },
  //     });
  //   }
  // }, [isInView]);

  // <motion.div
  //     variants={ANIMATION}
  //     initial="hidden"
  //     animate="show"
  //     exit="positionLeft"
  //     transition={ANIMATION.transition}
  //   ></motion.div>

  return (
    <motion.div
      className="timeline"
      id="timeline" // TODO Remove this if don't use
      variants={ANIMATION}
      initial="positionBelow"
      animate="center"
      exit="positionAbove"
      transition={ANIMATION.transition}
    >
      <h1 className="timeline__title">My Projects</h1>
      <div className="timeline__end">
        <Bullet position="top" />
      </div>
      {
        React.Children.toArray(
          PROJECTS.map(p => (
            <Item prefix={p.prefix} id={p.id} title={p.title} />
          )),
        )
      }
      <div className="timeline__end">
        <Bullet position="bottom" />
      </div>
      {/* <h3 className="title timeline__text">Future</h3> */}
    </motion.div>
  );
}

export default TimelineOld;
