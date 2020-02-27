import { POSTS, PHOTOS } from '../constants';

const loadPosts = () => ({
  type: POSTS.LOAD,
});

const setPosts = posts => ({
  type: POSTS.LOAD_SUCCESS,
  posts,
});

const setError = error => ({
  type: POSTS.LOAD_FAIL,
  error,
});

const setCurrentPost = post => ({
  type: POSTS.SELECT,
  post,
});

const clearCurrentPost = post => ({
  type: POSTS.CLEAR,
  post,
});

const setPostsUsers = postsWithUsers => ({
  type: POSTS.SET_USERS,
  postsWithUsers,
});

const loadPhotos = () => ({
  type: PHOTOS.LOAD,
});

const setPhotos = photos => ({
  type: PHOTOS.LOAD_SUCCESS,
  photos,
});

const setPhotoLoadError = error => ({
  type: PHOTOS.LOAD_FAIL,
  error,
});

export {
  loadPosts,
  setPosts,
  setError,
  setCurrentPost,
  clearCurrentPost,
  setPostsUsers,
  loadPhotos,
  setPhotos,
  setPhotoLoadError
};
