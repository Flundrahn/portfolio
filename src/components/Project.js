import React from 'react';
import { useParams } from 'react-router-dom';
import PROJECTS from '../constants';

function Project() {
  let { id } = useParams();
  id = parseInt(id, 10);

  if (Number.isNaN(id)) {
    return (
      <p>Project is not a number</p>
    );
  }

  const project = PROJECTS.find(p => p.id === id);
  console.log(PROJECTS);

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
