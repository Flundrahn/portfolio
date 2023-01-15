import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProjectReadme from '../ProjectReadme';
import PortfolioImage from '../PortfolioImage';
import {
  PROJECTS, GITHUB_URL, ANIMATIONS,
} from '../constants';
import PageNotFound from '../PageNotFound';
import './Project.css';
import getAndSetProjectReadme from '../Utils/getAndSetProjectReadme';

function Project({ setShowBackbutton }) {
  const [readme, setReadme] = React.useState('');
  const id = parseInt(useParams().id, 10);
  const project = PROJECTS.find(p => p.id === id);

  useEffect(() => {
    getAndSetProjectReadme(project.title, project.id)
      .then(result => setReadme(result))
      .catch(() => setReadme('Something went wrong'));

    setShowBackbutton(true);

    return () => setShowBackbutton(false);
  }, []);

  if (!project) {
    console.error('Project not found');
    return <PageNotFound />;
  }

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
        <div className="project__image-container">
          <PortfolioImage
            className="project__image"
            src={Object.values(project.img)[0]}
            placeholder={Object.values(project.imgPlaceholder)[0]}
            alt={`Display of the project ${project.title}`}
          />
        </div>
      )}
      <div className="project__markdown">
        <p className="markdown__title">README*.md</p>
        <ProjectReadme title={project.title} readme={readme} />
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
