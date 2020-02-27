import { takeEvery, take, fork } from 'redux-saga/effects';
import { POSTS, PHOTOS } from '../constants';
import {
  handlePostsLoad,
  handleSetPostsUsers,
} from './postsSaga';
import { handlePhotosLoad } from './photosSaga';

function* rootSaga() {
  yield takeEvery(POSTS.LOAD, handlePostsLoad);
  yield takeEvery(PHOTOS.LOAD, handlePhotosLoad);

  while (true) {
    const { posts } = yield take(POSTS.LOAD_SUCCESS);
    yield fork(handleSetPostsUsers, posts);
  }
}

export default rootSaga;
