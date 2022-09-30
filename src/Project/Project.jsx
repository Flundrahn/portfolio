import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeMathjax from 'rehype-mathjax';
import remarkMath from 'remark-math';
import ProgressiveImage from 'react-progressive-graceful-image';

import {
  PROJECTS, GITHUB_URL, API_URL, ANIMATIONS,
} from '../constants';
import PageNotFound from '../PageNotFound';
import './Project.css';

function Project({ setShowBackbutton, readmes }) {
  let { id } = useParams();
  id = parseInt(id, 10);
  const project = PROJECTS.find(p => p.id === id);
  const { markdown } = readmes.find(rm => rm.projectId === id);

  if (!project) {
    console.error('Project not found');
    return <PageNotFound />;
  }

  useEffect(() => {
    window.scrollTo(0, 0);

    setShowBackbutton(true);

    return () => setShowBackbutton(false);
  }, []);

  const transformImageUri = input => (input.toLowerCase().includes('screenshot') ? `${API_URL}/${project.title}/main${input}` : input);

  return (
    <motion.section
      variants={ANIMATIONS}
      initial="right"
      animate="center"
      exit="right"
      transition={ANIMATIONS.transition}
      className="project"
    >
      {project.img && (
        <ProgressiveImage
          src={Object.values(project.img)[0]}
          placeholder={Object.values(project.imgPlaceholder)[0]}
        >
          {(src, loadingImg) => (
            <img
              className={`project__image${loadingImg ? 'project__image--loading' : ''}`}
              src={src}
              alt="Display of project"
            />
          )}
        </ProgressiveImage>
      )}
      <div className="project__markdown">
        <p className="markdown__title">README*.md</p>
        <ReactMarkdown
          transformImageUri={transformImageUri}
          remarkPlugins={[[remarkGfm], [remarkMath]]}
          rehypePlugins={[[rehypeMathjax]]}
        >
          {markdown}
        </ReactMarkdown>
        <div className="project__button-container">
          <a className="project__link project__button" href={`${GITHUB_URL}${project.title}`}>
            Repo
            <i className="project__icon fa-brands fa-github" title="Github" />
          </a>
          {project.demo && (
            <a className="project__link project__button" href={project.demo}>
              Demo
              <i className="project__icon fa-solid fa-circle-play" title="Demo" />
            </a>
          )}
        </div>
        <p className="project__asterisk">
          *If the readme does not display properly here,
          try going straight to the source and check out the GitHub repo
        </p>
      </div>
    </motion.section>
  );
}

export default Project;
