import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { HashLink } from 'react-router-hash-link';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

import { PROJECTS, API_URL, ANIMATIONS } from '../constants';
import PageNotFound from '../PageNotFound';
import './Project.css';

function Project({ setInitialAnimation }) {
  const [markdown, setMarkdown] = useState(null);
  const [loading, setLoading] = useState(true);

  let { id } = useParams();
  id = parseInt(id, 10);
  const project = PROJECTS.find(p => p.id === id);

  if (!project) {
    console.error('Project not found');
    return <PageNotFound />;
  }

  useEffect(() => {
    setInitialAnimation(false); // NOTE remove if change this by click on link

    axios
      .get(`${API_URL}/${project.title}/main/README.md`)
      .then(result => setMarkdown(result.data))
      .then(() => setLoading(false))
      .catch(error => console.error(error));
  }, []);

  if (loading) {
    return <p className="centered">loading...</p>;
  }

  const transformImageUri = input => (input.toLowerCase().includes('screenshot') ? `${API_URL}/${project.title}/main${input}` : input);

  return (
    <>
      <motion.div
        className="button--back"
        variants={ANIMATIONS}
        initial="right"
        animate="center"
        exit="right"
        transition={ANIMATIONS.transition}
      >
        <HashLink className="button--back__link" to="/#timeline">
          <i className="fa-solid fa-chevron-left fa-fw" title="Back" />
        </HashLink>
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
