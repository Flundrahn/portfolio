import React from 'react';
import NextSection from '../NextSection/NextSection';
import './Resume.css';

function Resume() {
  return (
    <section className="resume" id="resume">
      <NextSection to="profile" direction="up" />
      <a
        className="resume__title"
        href="https://drive.google.com/uc?export=download&id=1VI6YFNoCDeWq1c8951iMglTeUe74IM0d"
      >
        Download my resume
      </a>
    </section>
  );
}

export default Resume;
