import React from 'react';
import { Element } from 'react-scroll';
import './Resume.css';

function Resume() {
  return (
    <Element name="resume" className="resume">
      <a className="resume__title" href="https://drive.google.com/uc?export=download&id=1VI6YFNoCDeWq1c8951iMglTeUe74IM0d">Download my resume</a>
    </Element>
  );
}

export default Resume;
