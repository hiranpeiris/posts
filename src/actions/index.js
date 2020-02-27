import { POSTS } from '../constants';

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

export {
  loadPosts,
  setPosts,
  setError,
  setCurrentPost,
  clearCurrentPost,
  setPostsUsers,
};
