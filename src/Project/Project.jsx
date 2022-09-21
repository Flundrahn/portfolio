import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

import { PROJECTS, API_URL, ANIMATIONS } from '../constants';
import './Project.css';

function Project({ setInitialAnimation }) {
  const [markdown, setMarkdown] = useState(null);
  const [loading, setLoading] = useState(true);

  let { id } = useParams();
  id = parseInt(id, 10);
  const project = PROJECTS.find(p => p.id === id);

  useEffect(() => {
    setInitialAnimation(false);

    axios
      .get(`${API_URL}/${project.title}/main/README.md`)
      .then(result => setMarkdown(result.data))
      .then(() => setLoading(false))
      .catch(error => console.error(error));
  }, []);

  if (Number.isNaN(id)) {
    return <p>Something went wrong, project-id is not a number</p>;
  }

  if (!project) {
    return <p>Something went wrong, project not found</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  const transformImageUri = input => (input.toLowerCase().includes('screenshot') ? `${API_URL}/${project.title}/main${input}` : input);

  return (
    <>
      <motion.div
        className="button--back"
        initial={{
          x: 0,
          y: -100,
        }}
        animate={{
          x: 0,
          y: 0,
          position: 'fixed',
        }}
        exit={{
          x: 0,
          y: -100,
        }}
        transition={{
          type: 'spring',
          duration: 0.6,
        }}
      >
        <Link className="button--back__link" to="/" state={{ fromNavbar: true }}>
          <i className="fa-solid fa-chevron-left fa-fw" title="Back" />
        </Link>
      </motion.div>
      <motion.div
        variants={ANIMATIONS}
        initial="right"
        animate="center"
        exit="right"
        transition={ANIMATIONS.transition}
        className="project"
      >
        <img
          src={project.image ? Object.values(project.image)[0] : ''}
          alt=""
          className="project__image"
        />
        <div className="project__markdown">
          <p className="markdown__title">README.md</p>
          <ReactMarkdown transformImageUri={transformImageUri}>{markdown}</ReactMarkdown>
          <h2>
            <a href={project.url}>GitHub Repository Here</a>
          </h2>
        </div>
      </motion.div>
    </>
  );
}

export default Project;
