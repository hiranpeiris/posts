import { call, put } from 'redux-saga/effects';
import { fetchPosts, fetchUserInfo } from '../api';
import { setPosts, setPostsUsers, setError } from '../actions';

function* handlePostsLoad() {
  try {
    const posts = yield call(fetchPosts);
    yield put(setPosts(posts));
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

function* handleSetPostsUsers(posts) {
  try {
    let postsWithUsers = [];
    for (var i = 0; i < posts.length; i++) {
      const post = posts[i];
      const user = yield call(fetchUserInfo, post.userId);
      postsWithUsers.push({ ...post, user });
    }
    yield put(setPostsUsers(postsWithUsers));
  } catch (error) {
    console.log(`Cannot get user info`);
  }
}

export { handlePostsLoad, handleSetPostsUsers };
