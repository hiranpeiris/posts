import { BASE_URL } from '../constants';

export const fetchPosts = async () => {
  const response = await fetch(`${BASE_URL}/posts`);
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

export const fetchUserInfo = async userId => {
  const response = await fetch(`${BASE_URL}/users/${userId}`);
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

export const fetchPhotos = async albumId => {
  const response = await fetch(`${BASE_URL}/photos?album=${albumId}`);
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};
