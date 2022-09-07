import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';

import { PROJECTS, API_URL } from '../constants';
import './Project.css';

function Project({ setHideBackButton }) {
  const [markdown, setMarkdown] = useState(null);
  const [loading, setLoading] = useState(true);

  let { id } = useParams();
  id = parseInt(id, 10);
  const project = PROJECTS.find(p => p.id === id);

  useEffect(() => {
    setHideBackButton(false);

    axios.get(`${API_URL}/${project.title}/main/README.md`)
      .then(result => setMarkdown(result.data))
      .catch(error => console.error(error));

    setLoading(false);

    return () => setHideBackButton(true);
  }, []);

  // NOTE Can remove stuff from markdown like links etc
  // NOTE Might be possible to remove, if never reach
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

  return (
    <div className="project__markdown">
      <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
        {markdown}
      </ReactMarkdown>
      <h2><a href={project.url}>GitHub Repository Here</a></h2>
    </div>
  );
}

export default Project;
