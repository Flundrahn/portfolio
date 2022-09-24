import React from 'react';
import matlabIcon from './assets/matlab.svg';
import cSharpIcon from './assets/c-sharp.svg';
import azureIcon from './assets/azure.svg';
import fourierImage from './assets/fourier.gif';
import fourierPlaceholder from './assets/fourier_thumbnail.png';
import hanoiImage from './assets/hanoi.gif';
import hanoiPlaceholder from './assets/hanoi_thumbnail.png';
import salsaImage from './assets/salsa.gif';
import salsaPlaceholder from './assets/salsa_thumbnail.png';

const PROJECTS = [
  {
    title: 'manim-fourier-project',
    prefix: 'Hobby Project',
    img: { fourierImage },
    imgPlaceholder: { fourierPlaceholder },
    demo: 'https://www.youtube.com/watch?v=c-MMb71NMvw',
  },
  {
    title: 'manim-hanoi-tower-project',
    prefix: 'Hobby Project',
    img: { hanoiImage },
    imgPlaceholder: { hanoiPlaceholder },
    demo: 'https://www.youtube.com/watch?v=8XQmuPKOgy8',
  },
  {
    title: 'salsa',
    prefix: 'Salt Final Project',
    img: { salsaImage },
    imgPlaceholder: { salsaPlaceholder },
  },
  {
    title: 'battleship',
    prefix: 'Kattis Problem',
    img: null,
  },
  {
    title: 'heliocentric',
    prefix: 'Kattis Problem',
  },
  {
    title: 'portfolio',
    prefix: 'Salt PGP',
  },
];

for (let i = 0; i < PROJECTS.length; i += 1) {
  PROJECTS[i].id = i;
}

const TECHSTACK = [
  {
    icon: (
      <i
        className="fa-brands fa-git-alt fa-fw profile__icon"
        title="Git"
        style={{ color: 'RGB(12, 36, 51)' }}
      />
    ),
    title: 'Git',
  },
  {
    icon: (
      <i
        className="fa-brands fa-node-js fa-fw profile__icon"
        title="Node"
        style={{ color: 'RGB(133, 190, 71)' }}
      />
    ),
    title: 'Node',
  },
  {
    icon: (
      <i
        className="fa-brands fa-microsoft fa-fw profile__icon"
        title="Node"
        style={{ color: 'RGB(0, 114, 201)' }}
      />
    ),
    title: 'ASP.NET',
  },
  {
    icon: (
      <i
        className="fa-brands fa-html5 fa-fw profile__icon"
        title="HTML"
        style={{ color: 'RGB(242, 83, 32)' }}
      />
    ),
    title: 'HTML',
  },
  {
    icon: (
      <i
        className="fa-brands fa-css3-alt fa-fw profile__icon"
        title="CSS"
        style={{ color: 'RGB(1, 108, 180)' }}
      />
    ),
    title: 'CSS',
  },
  {
    icon: (
      <i
        className="fa-brands fa-js fa-fw profile__icon"
        title="JavaScript"
        style={{ color: 'RGB(247, 196, 39)' }}
      />
    ),
    title: 'JavaScript',
  },
  {
    icon: (
      <i
        className="fa-brands fa-react fa-fw profile__icon"
        style={{ color: 'RGB(111, 191, 219)' }}
        title="React"
      />
    ),
    title: 'React',
  },
  {
    icon: (
      <i
        className="fa-brands fa-python fa-fw profile__icon"
        style={{ color: 'RGB(247, 214, 81)' }}
        title="Python"
      />
    ),
    title: 'Python',
  },
  {
    icon: (
      <div>
        <i className="fa-solid fa-t" title="Type" style={{ color: 'RGB(0, 0, 0)' }} />
        <i className="fa-solid fa-s" title="Script" style={{ color: 'RGB(0, 0, 0)' }} />
      </div>
    ),
    title: 'TypeScript',
  },
  {
    icon: <img src={matlabIcon} alt="Matlab icon" className="profile__icon" />,
    title: 'MATLAB',
  },
  {
    icon: <img src={cSharpIcon} alt="C-sharp icon" className="profile__icon" />,
    title: 'C#',
  },
  {
    icon: <img src={azureIcon} alt="Azure icon" className="profile__icon" />,
    title: 'Azure',
  },
];

const MENUICON_PATH = 'M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z';

const ANIMATIONS = {
  right: {
    x: '100vw',
  },
  center: {
    x: 0,
    y: 0,
  },
  left: {
    x: '-100vw',
  },
  above: {
    y: '-100vw',
  },
  below: {
    y: '100vh',
  },
  transition: {
    type: 'spring',
    duration: 0.6,
    bounce: 0.2,
  },
};

const API_URL = 'https://raw.githubusercontent.com/Flundrahn';
const GITHUB_URL = 'https://github.com/Flundrahn/';

export {
  PROJECTS, TECHSTACK, API_URL, GITHUB_URL, ANIMATIONS, MENUICON_PATH,
};
