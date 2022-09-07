import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PROJECTS } from '../constants';

function Project({ setHideBackButton }) {
  useEffect(() => {
    setHideBackButton(false);
    return () => setHideBackButton(true);
  }, []);

  let { id } = useParams();
  id = parseInt(id, 10);

  if (Number.isNaN(id)) {
    return (
      <p>Project is not a number</p>
    );
  }

  const project = PROJECTS.find(p => p.id === id);

  if (!project) {
    return (
      <p>Project not found</p>
    );
  }

  return (
    <section className="project">
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <p>{id}</p>
      <a href={project.url}>GitHub</a>
    </section>
  );
}

export default Project;
