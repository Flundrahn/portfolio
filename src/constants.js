import React from 'react';
import MatlabIcon from './assets/matlab.svg';
import CSharpIcon from './assets/c-sharp.svg';
import AzureIcon from './assets/azure.svg';

// import {
//   faGithub, faHtml5, faCss3, faJs, faNodeJs, faReact, faMicrosoft,
// } from '@fortawesome/free-brands-svg-icons';

const PROJECTS = [
  {
    title: 'manim-fourier-project',
    prefix: 'Hobby Project',
    url: 'https://github.com/Flundrahn/manim-fourier-project',
  },
  {
    title: 'manim-hanoi-tower-project',
    prefix: 'Hobby Project',
    url: 'https://github.com/Flundrahn/manim-hanoi-tower-project',
  },
  {
    title: 'salsa',
    prefix: 'Salt Final Project',
    url: 'https://github.com/Flundrahn/salsa',
  },
  {
    title: 'battleship',
    prefix: 'Kattis Problem',
    url: 'https://github.com/Flundrahn/battleship',
  },
  {
    title: 'heliocentric',
    prefix: 'Kattis Problem',
    url: 'https://github.com/Flundrahn/heliocentric',
  },
];

for (let i = 0; i < PROJECTS.length; i += 1) {
  PROJECTS[i].id = i;
}

const FaIconSize = ' fa-xl'; // NOTE sync this with offset value in profile, xl = 1.5em
const iconSize = '1.5em';

const TECHSTACK = [
  {
    icon: <i
      className={`fa-brands fa-github fa-fw + ${FaIconSize}`}
      title="Github"
      style={{ color: 'RGB(12, 36, 51)' }}
    />,
    title: 'Github',
    position: { x: null, y: null },
  },
  {
    icon: <i
      className={`fa-brands fa-node-js fa-fw + ${FaIconSize}`}
      title="Node"
      style={{ color: 'RGB(133, 190, 71)' }}
    />,
    title: 'Node',
    position: { x: null, y: null },
  },
  {
    icon: <i
      className={`fa-brands fa-microsoft fa-fw + ${FaIconSize}`}
      title="Node"
      style={{ color: 'RGB(0, 114, 201)' }}
    />,
    title: 'ASP.NET',
    position: { x: null, y: null },
  },
  {
    icon: <i
      className={`fa-brands fa-html5 fa-fw + ${FaIconSize}`}
      title="HTML"
      style={{ color: 'RGB(242, 83, 32)' }}
    />,
    title: 'HTML',
    position: { x: null, y: null },
  },
  {
    icon: <i
      className={`fa-brands fa-css3-alt fa-fw + ${FaIconSize}`}
      title="CSS"
      style={{ color: 'RGB(1, 108, 180)' }}
    />,
    title: 'CSS',
    position: { x: null, y: null },
  },
  {
    icon: <i
      className={`fa-brands fa-js fa-fw + ${FaIconSize}`}
      title="JavaScript"
      style={{ color: 'RGB(247, 196, 39)' }}
    />,
    title: 'JavaScript',
    position: { x: null, y: null },
  },
  {
    icon: <i
      className={`fa-brands fa-react fa-fw + ${FaIconSize}`}
      style={{ color: 'RGB(111, 191, 219)' }}
      title="React"
    />,
    title: 'React',
    position: { x: null, y: null },
  },
  {
    icon: <i
      className={`fa-brands fa-python fa-fw + ${FaIconSize}`}
      style={{ color: 'RGB(247, 214, 81)' }}
      title="Python"
    />,
    title: 'Python',
    position: { x: null, y: null },
  },
  {
    icon: <img
      src={MatlabIcon}
      alt="Matlab icon"
      style={{ width: iconSize }}
    />,
    title: 'MATLAB',
    position: { x: null, y: null },
  },
  {
    icon: <img
      src={CSharpIcon}
      alt="C-sharp icon"
      style={{ width: iconSize }}
    />,
    title: 'C#',
    position: { x: null, y: null },
  },
  {
    icon: <img
      src={AzureIcon}
      alt="Azure icon"
      style={{ width: iconSize }}
    />,
    title: 'Azure',
    position: { x: null, y: null },
  },
];

const API_URL = 'https://raw.githubusercontent.com/Flundrahn';

export { PROJECTS, TECHSTACK, API_URL };
