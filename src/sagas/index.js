import { takeEvery, take, fork } from 'redux-saga/effects';
import { POSTS } from '../constants';
import {
  handlePostsLoad,
  handleSetUserToPost,
} from './postsSaga';

function* rootSaga() {
  yield takeEvery(POSTS.LOAD, handlePostsLoad);
  while (true) {
    const { posts } = yield take(POSTS.LOAD_SUCCESS);
    for (let i = 0; i < posts.length; i++) {
      yield fork(handleSetUserToPost, posts[i]);
    }
  }
}

export default rootSaga;
