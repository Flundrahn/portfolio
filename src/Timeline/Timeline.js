import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';
import { useInView, useAnimation } from 'framer-motion';
import AnimateSection from '../AnimateSection';
import { PROJECTS } from '../constants';
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
    <div className="item">
      <div className="item__prefix">{prefix}</div>
      <Bullet />
      <div className="item__title-container">
        <Link to={`project/${id}`} className="item__title">{title}</Link>
      </div>
    </div>
  );
}

function Timeline() {
  const ref = useRef();
  const isInView = useInView(ref, { margin: '200% 0px -50% 0px' });
  const animation = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation.start({
        y: '0',
        transition: {
          type: 'spring',
          duration: 1.4,
          bounce: 0.2,
        },
      });
    }
    if (!isInView) {
      animation.start({
        y: '100vw',
      });
    }
  }, [isInView]);

  return (
    <Element name="timeline" className="timeline" id="timeline">
      <h1 className="timeline__title" ref={ref}>My Projects</h1>
      <AnimateSection animation={animation}>
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
      </AnimateSection>
      {/* <h3 className="title timeline__text">Future</h3> */}
    </Element>
  );
}

export default Timeline;
