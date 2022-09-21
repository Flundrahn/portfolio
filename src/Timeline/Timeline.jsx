import React from 'react';
import { Link } from 'react-router-dom';
// import { Link,  } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import './Timeline.css';
import NextSection from '../NextSection/NextSection';

function Item({
  prefix, id, title, setScrollPosition,
}) {
  const childAnimations = {
    closed: {
      rotateY: -90,
    },
    open: {
      rotateY: 0,
      transition: {
        type: 'spring',
        bounce: 0,
      },
    },
  };

  const handleClick = () => {
    setScrollPosition(window.scrollY);
  };

  return (
    <motion.div variants={childAnimations} className="item">
      <div className="item__prefix">{prefix}</div>
      <div className="bullet" />
      <div className="item__title-container">
        <Link to={`projects/${id}`} onClick={handleClick} className="item__title">
          {title}
        </Link>
      </div>
    </motion.div>
  );
}

function Timeline({ setScrollPosition }) {
  const parentAnimations = {
    open: {
      clipPath: 'inset(0% 0% 0% 0%)',
      transition: {
        type: 'spring',
        bounce: 0,
        delay: 0.2,
        duration: 0.6,
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
    closed: {
      clipPath: 'inset(50% 0% 50% 0%)',
    },
  };

  return (
    <section className="timeline" id="timeline">
      <h1 className="timeline__title">My Projects</h1>
      <motion.div
        className="timeline__body"
        variants={parentAnimations}
        initial="closed"
        whileInView="open"
        viewport={{ once: true }}
      >
        <div className="bullet bullet--top" />
        <div className="timeline__line" />
        {React.Children.toArray(
          PROJECTS.map(p => (
            <Item
              prefix={p.prefix}
              id={p.id}
              title={p.title}
              setScrollPosition={setScrollPosition}
            />
          )),
        )}
        <div className="bullet bullet--bottom" />
      </motion.div>
      <p className="title timeline__text">Future</p>
      <NextSection to="resume" direction="down" />
    </section>
  );
}

export default Timeline;
