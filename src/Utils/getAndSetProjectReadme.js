import axios from 'axios';
import { API_URL } from '../constants';

async function getProjectReadmeSession(id) {
  const readmeData = sessionStorage.getItem(id);

  if (!readmeData) {
    return null;
  }

  return JSON.parse(readmeData);
}

async function getProjectReadmeApi(title) {
  const result = await axios.get(`${API_URL}/${title}/main/README.md`);

  if (result.status >= 300) {
    throw new Error('Something went wrong');
  }

  return result.data;
}

async function setProjectReadme(id, readme) {
  sessionStorage.setItem(id, JSON.stringify(readme));
}

async function getAndSetProjectReadme(title, id) {
  const readmeSession = await getProjectReadmeSession(id);

  if (readmeSession) {
    return readmeSession;
  }

  const readmeApi = await getProjectReadmeApi(title);
  setProjectReadme(id, readmeApi);

  return readmeApi;
}

export default getAndSetProjectReadme;
