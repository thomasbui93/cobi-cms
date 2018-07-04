import { fetchAPI } from './api';

export const getCategories = (query) => {
  return fetchAPI('categories', query)
}

export const getCategoryDetail = (categoryKey) => {
  return fetchAPI('categories', categoryKey)
}