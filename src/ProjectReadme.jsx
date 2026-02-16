import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import 'katex/dist/katex.min.css';
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
      rehypePlugins={[[rehypeKatex]]}
    >
      {readme}
    </ReactMarkdown>
  );
}

export default ProjectReadme;
