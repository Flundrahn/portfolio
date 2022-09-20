/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// import { useInView, useAnimation } from 'framer-motion';
import { PROJECTS, ANIMATION } from '../constants';
import './Timeline.css';

function End({ bulletPosition }) {
  return (
    <div className="timeline__end">
      <div className="timeline__line" />
      <div className={`bullet bullet--${bulletPosition}`} />
    </div>
  );
}

function Item({ prefix, id, title }) {
  return (
    <div className="item">
      {/* <motion.div variants={ANIMATION} className="item"> */}
      <div className="item__prefix">{prefix}</div>
      <div className="bullet" />
      <div className="item__title-container">
        <Link to={`projects/${id}`} className="item__title">{title}</Link>
      </div>
    </div>
  );
}

function Timeline() {
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

  // <motion.div
  //     className="timeline"
  //     id="timeline" // TODO Remove this if don't use
  //     variants={ANIMATION}
  //     initial="positionBelow"
  //     animate="center"
  //     exit="positionAbove"
  //     transition={ANIMATION.transition}
  //   ></motion.div>

  return (
    <section
      className="timeline"
      id="timeline" // TODO Remove this if don't use
    >
      <h1 className="timeline__title">My Projects</h1>
      <End bulletPosition="top" />
      <div className="timeline__body">
        <div className="timeline__line" />
        {React.Children.toArray(
          PROJECTS.map(p => (
            <Item prefix={p.prefix} id={p.id} title={p.title} />
          )),
        )}
      </div>
      <End bulletPosition="bottom" />
      <p className="title timeline__text">Future</p>
    </section>
  );
}

export default Timeline;
