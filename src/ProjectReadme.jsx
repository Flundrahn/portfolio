import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeMathjax from 'rehype-mathjax';
import remarkMath from 'remark-math';
import { API_URL } from './constants';

function ProjectReadme({ readme, title }) {
  const transformImageUri = input => (
    input.toLowerCase().includes('screenshot')
      ? `${API_URL}/${title}/main${input}`
      : input);

  return (
    <ReactMarkdown
      transformImageUri={transformImageUri}
      remarkPlugins={[[remarkGfm], [remarkMath]]}
      rehypePlugins={[[rehypeMathjax]]}
    >
      {readme}
    </ReactMarkdown>
  );
}

export default ProjectReadme;
