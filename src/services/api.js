import { fakerMap } from './faker/faker';

const API = '';

export const fetchAPI = (URL, options) => {
  return fakerMap(URL, options);
}

