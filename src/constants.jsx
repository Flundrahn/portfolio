import React from 'react';
import matlabIcon from './assets/matlab.svg';
import cSharpIcon from './assets/c-sharp.svg';
import azureIcon from './assets/azure.svg';
import fourierImage from './assets/fourier.gif';
import hanoiImage from './assets/hanoi.gif';
import salsaImage from './assets/salsa.gif';

const PROJECTS = [
  {
    title: 'manim-fourier-project',
    prefix: 'Hobby Project',
    image: { fourierImage },
    url: 'https://github.com/Flundrahn/manim-fourier-project',
  },
  {
    title: 'manim-hanoi-tower-project',
    prefix: 'Hobby Project',
    image: { hanoiImage },
    url: 'https://github.com/Flundrahn/manim-hanoi-tower-project',
  },
  {
    title: 'salsa',
    prefix: 'Salt Final Project',
    image: { salsaImage },
    url: 'https://github.com/Flundrahn/salsa',
  },
  {
    title: 'battleship',
    prefix: 'Kattis Problem',
    image: null,
    url: 'https://github.com/Flundrahn/battleship',
  },
  {
    title: 'heliocentric',
    prefix: 'Kattis Problem',
    image: null,
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
      className={`fa-brands fa-git-alt fa-fw + ${FaIconSize}`}
      title="Git"
      style={{ color: 'RGB(12, 36, 51)', zIndex: 0 }}
    />,
    title: 'Git',
  },
  {
    icon: <i
      className={`fa-brands fa-node-js fa-fw + ${FaIconSize}`}
      title="Node"
      style={{ color: 'RGB(133, 190, 71)', zIndex: 0 }}
    />,
    title: 'Node',
  },
  {
    icon: <i
      className={`fa-brands fa-microsoft fa-fw + ${FaIconSize}`}
      title="Node"
      style={{ color: 'RGB(0, 114, 201)', zIndex: 0 }}
    />,
    title: 'ASP.NET',
  },
  {
    icon: <i
      className={`fa-brands fa-html5 fa-fw + ${FaIconSize}`}
      title="HTML"
      style={{ color: 'RGB(242, 83, 32)', zIndex: 0 }}
    />,
    title: 'HTML',
  },
  {
    icon: <i
      className={`fa-brands fa-css3-alt fa-fw + ${FaIconSize}`}
      title="CSS"
      style={{ color: 'RGB(1, 108, 180)', zIndex: 0 }}
    />,
    title: 'CSS',
  },
  {
    icon: <i
      className={`fa-brands fa-js fa-fw + ${FaIconSize}`}
      title="JavaScript"
      style={{ color: 'RGB(247, 196, 39)', zIndex: 0 }}
    />,
    title: 'JavaScript',
  },
  {
    icon: <i
      className={`fa-brands fa-react fa-fw + ${FaIconSize}`}
      style={{ color: 'RGB(111, 191, 219)', zIndex: 0 }}
      title="React"
    />,
    title: 'React',
  },
  {
    icon: <i
      className={`fa-brands fa-python fa-fw + ${FaIconSize}`}
      style={{ color: 'RGB(247, 214, 81)', zIndex: 0 }}
      title="Python"
    />,
    title: 'Python',
  },
  {
    icon: <img
      src={matlabIcon}
      alt="Matlab icon"
      style={{ width: iconSize, zIndex: 0 }}
    />,
    title: 'MATLAB',
  },
  {
    icon: <img
      src={cSharpIcon}
      alt="C-sharp icon"
      style={{ width: iconSize, zIndex: 0 }}
    />,
    title: 'C#',
  },
  {
    icon: <img
      src={azureIcon}
      alt="Azure icon"
      style={{ width: iconSize, zIndex: 0 }}
    />,
    title: 'Azure',
  },
];

const ANIMATIONS = {
  right: {
    x: '100vw',
    y: 0,
  },
  center: {
    x: 0,
    y: 0,
  },
  left: {
    x: '-100vw',
    y: 0,
  },
  above: {
    x: 0,
    y: '-100vw',
  },
  below: {
    x: 0,
    y: '100vh',
  },
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
  transition: {
    type: 'spring',
    duration: 0.6,
    bounce: 0.2,
  },
};

const API_URL = 'https://raw.githubusercontent.com/Flundrahn';

export {
  PROJECTS, TECHSTACK, API_URL, ANIMATIONS,
};
