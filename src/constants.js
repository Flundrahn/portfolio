/* eslint-disable no-unused-vars */
import {
  faGithub, faHtml5, faCss3, faJs, faNodeJs, faReact, faMicrosoft,
} from '@fortawesome/free-brands-svg-icons';

const PROJECTS = [
  {
    title: 'manim-fourier-project',
    prefix: 'Hobby Project',
    url: 'https://github.com/Flundrahn/manim-fourier-project',
  },
  {
    title: 'manim-hanoi_tower_project',
    prefix: 'Hobby Project',
    url: 'https://github.com/Flundrahn/manim-hanoi_tower_project',
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

const TECHSTACK = [
  {
    icon: faGithub,
    title: 'Github',
    position: { x: null, y: null },
  },
  {
    icon: faNodeJs,
    title: 'Node',
    position: { x: null, y: null },
  },
  {
    icon: faMicrosoft,
    title: 'ASP.NET',
    position: { x: null, y: null },
  },
  {
    icon: faHtml5,
    title: 'ASP.NET',
    position: { x: null, y: null },
  },
  {
    icon: faCss3,
    title: 'ASP.NET',
    position: { x: null, y: null },
  },
  {
    icon: faJs,
    title: 'ASP.NET',
    position: { x: null, y: null },
  },
  {
    icon: faReact,
    title: 'ASP.NET',
    position: { x: null, y: null },
  },
];

const API_URL = 'https://raw.githubusercontent.com/Flundrahn';

export { PROJECTS, TECHSTACK, API_URL };
