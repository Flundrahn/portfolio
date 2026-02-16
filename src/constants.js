import contentData from './data/content.json';
import configData from './data/config.json';
import projectsData from './data/projects.json';
import skillsData from './data/skills.json';

// Dynamically import all images from assets folder
// This uses webpack's require.context to automatically bundle all matching files
const imageAssets = require.context('./assets', false, /\.(webp|gif|png|jpg|jpeg|svg)$/);
const imageAssetsMap = imageAssets.keys().reduce((acc, path) => {
  const filename = path.replace('./', '');
  acc[filename] = imageAssets(path);
  return acc;
}, {});

export const CONTENT = contentData;
export const CONFIG = configData;
export const PROJECTS = projectsData.map(project => ({
  ...project,
  img: project.img
    ? imageAssetsMap[project.img]
    : undefined,
  imgPlaceholder: project.imgPlaceholder
    ? imageAssetsMap[project.imgPlaceholder]
    : undefined,
}));
export const SKILLS = skillsData.map(skill => ({
  ...skill,
  imageSource: skill.imageSource
    ? imageAssetsMap[skill.imageSource]
    : undefined,
}));
