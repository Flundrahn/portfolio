import React, { useState } from 'react';
import NextSection from '../NextSection/NextSection';
import './Resume.css';

function Resume() {
  const [showGreeting, setShowGreeting] = useState(false);

  const saltString = ' </salt>';
  const meString = ' me ';

  return (
    <section className="resume" id="resume">
      <NextSection to="profile" direction="up" title="Back to top" />
      <a
        className="resume__link"
        href="https://drive.google.com/uc?export=download&id=1VI6YFNoCDeWq1c8951iMglTeUe74IM0d"
        onClick={() => setShowGreeting(true)}
      >
        <i className="resume__icon fa-solid fa-file-pdf" />
        <p className="text-sheen">Download my resume</p>
      </a>
      {showGreeting && (
        <a
          className="resume__secret-greeting"
          href="https://www.youtube.com/watch?v=c-MMb71NMvw"
          target="_blank"
          rel="noopener noreferrer"
        >
          I hope you like it ^^
        </a>
      )}
      <p className="resume__text">
        Congratulations friend, you made it to the end of my website. If you are interested in
        working with me, don&apos;t hesitate to reach out to
        <a className="text--a" href="mailto:fredrik.lundstrom@appliedtechnology.se">
          {meString}
        </a>
        or the able sales team at
        <a className="text--a" href="https://www.salt.dev/">
          {saltString}
        </a>
        , thank you!
      </p>
    </section>
  );
}

export default Resume;
