import { call, put } from 'redux-saga/effects';
import { fetchPosts, fetchUserInfo } from '../api';
import { setPosts, setPostUser, setError } from '../actions';

function* handlePostsLoad() {
  try {
    const posts = yield call(fetchPosts);
    yield put(setPosts(posts));
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

function* handleSetUserToPost(post) {
  try {
    const user = yield call(fetchUserInfo, post.userId);
    yield put(setPostUser(post, user));
  } catch (error) {
    console.log(`Cannot get user info for userId: ${post.userId}`);
  }
}

export { handlePostsLoad, handleSetUserToPost };
