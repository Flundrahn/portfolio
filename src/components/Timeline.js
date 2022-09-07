import React from 'react';
import { Link } from 'react-router-dom';
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
      <span className="item__prefix">{prefix}</span>
      <Bullet />
      <Link to={`project/${id}`} className="item__title">{title}</Link>
    </div>
  );
}

function Timeline() {
  return (
    <div className="timeline">
      <div className="timeline__text">My projects</div>
      <Bullet position="top" />
      {
        React.Children.toArray(
          PROJECTS.map(p => (
            <Item prefix={p.prefix} id={p.id} title={p.title} />
          )),
        )
      }
      <Bullet position="bottom" />
      <div className="timeline__text">Future</div>
    </div>
  );
}

export default Timeline;
