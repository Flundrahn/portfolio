import React from 'react';
import './Timeline.css';

function Bullet({ position = 'center' }) {
  return (
    <div className="bullet">
      <div className="bullet__line" />
      <div className={`bullet__circle bullet--${position}`} />
    </div>
  );
}

function Item({ title, prefix }) {
  return (
    <div className="item">
      <span className="item__prefix">{prefix}</span>
      <Bullet />
      <span className="item__title">{title}</span>
    </div>
  );
}

function Timeline() {
  const sections = [
    {
      title: 'section 1',
      prefix: 'prefix 1',
    },
    {
      title: 'section 2',
      prefix: 'prefix 2',
    },
    {
      title: 'section 3',
      prefix: 'prefix 3',
    },
  ];
  return (
    <div className="timeline">
      <Bullet position="top" />
      {
        React.Children.toArray(
          sections.map(s => (
            <Item title={s.title} prefix={s.prefix} />
          )),
        )
      }
      <Bullet position="bottom" />
      <div className="timeline__end-text">Future</div>
    </div>
  );
}

export default Timeline;
