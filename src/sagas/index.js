import { takeEvery, take, fork } from 'redux-saga/effects';
import { POSTS } from '../constants';
import {
  handlePostsLoad,
  handleSetPostsUsers,
} from './postsSaga';

function* rootSaga() {
  yield takeEvery(POSTS.LOAD, handlePostsLoad);
  while (true) {
    const { posts } = yield take(POSTS.LOAD_SUCCESS);
    yield fork(handleSetPostsUsers, posts);
  }
}

export default rootSaga;
