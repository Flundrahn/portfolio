/* eslint-disable no-unused-vars */
import {
  faGithub, faLinkedin, faHtml5, faCss3, faJs, faNodeJs, faReact, faMicrosoft,
} from '@fortawesome/free-brands-svg-icons';

const PROJECTS = [
  {
    id: 0,
    title: 'section 1',
    prefix: 'prefix 1',
    description: 'description 1',
    url: 'www.github.com',
  },
  {
    id: 1,
    title: 'section 2',
    prefix: 'prefix 2',
    description: 'description 2',
    url: 'www.github.com',
  },
  {
    id: 2,
    title: 'section 3',
    prefix: 'prefix 3',
    description: 'description 3',
    url: 'www.github.com',
  },
];

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
];

export { PROJECTS, TECHSTACK };
