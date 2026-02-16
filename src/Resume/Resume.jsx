import React, { useState } from 'react';
import NextSection from '../NextSection/NextSection';
import { CONFIG, CONTENT } from '../constants';
import './Resume.css';

function Resume() {
  const [showGreeting, setShowGreeting] = useState(false);

  return (
    <section className="resume" id="resume">
      <NextSection to="profile" direction="up" title={CONTENT.sections.backToTop} />
      <a
        className="resume__link"
        href={CONFIG.resumeUrl}
        download="Fredrik_Lundstrom_Resume.pdf"
        onClick={() => setShowGreeting(true)}
      >
        <i className="resume__icon fa-solid fa-file-pdf" />
        <p className="text-sheen">{CONTENT.resume.downloadLabel}</p>
      </a>
      {showGreeting && (
        <a
          className="resume__secret-greeting"
          href={CONFIG.secretGreetingUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {CONTENT.resume.secretGreeting}
        </a>
      )}
      <p className="resume__text">
        {CONTENT.resume.closingText}
      </p>
    </section>
  );
}

export default Resume;
