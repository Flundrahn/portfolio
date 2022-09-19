import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

import { PROJECTS, API_URL, ANIMATION } from '../constants';
import './Project.css';

function Project({ setHideBackButton, setInitialAnimation }) {
  const [markdown, setMarkdown] = useState(null);
  const [loading, setLoading] = useState(true);

  let { id } = useParams();
  id = parseInt(id, 10);
  const project = PROJECTS.find(p => p.id === id);

  useEffect(() => {
    setHideBackButton(false);
    setInitialAnimation(false);

    axios.get(`${API_URL}/${project.title}/main/README.md`)
      .then(result => setMarkdown(result.data))
      .then(() => setLoading(false))
      .catch(error => console.error(error));

    // sync this with rest of animations, start Home without animation,
    //  or fade in then go left for exit
    window.scrollTo(0, 0);

    return () => setHideBackButton(true);
  }, []);

  if (Number.isNaN(id)) {
    return (
      <p>Something went wrong, project-id is not a number</p>
    );
  }

  if (!project) {
    return (
      <p>Something went wrong, project not found</p>
    );
  }

  if (loading) {
    return (
      <p>Loading...</p>
    );
  }

  const transformImageUri = input => (
    input.toLowerCase().includes('screenshot')
      ? `${API_URL}/${project.title}/main${input}`
      : input
  );

  return (
    // <AnimatePresence>
    <motion.div
      variants={ANIMATION}
      initial="positionRight"
      animate="center"
      exit="positionRight"
      transition={ANIMATION.transition}
      className="project"
    >
      <img src={project.image ? Object.values(project.image)[0] : ''} alt="" className="project__image" />
      <div className="project__markdown">
        <p className="markdown__title">README.md</p>
        <ReactMarkdown
          transformImageUri={transformImageUri}
        >
          {markdown}
        </ReactMarkdown>
        <h2><a href={project.url}>GitHub Repository Here</a></h2>
      </div>
    </motion.div>
    // </AnimatePresence>
  );
}

export default Project;
