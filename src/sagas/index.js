import { takeEvery, take, fork } from 'redux-saga/effects';
import { POSTS } from '../constants';
import {
  handlePostsLoad,
  handlePhotosLoad,
} from './postsSaga';

function* rootSaga() {
  yield takeEvery(POSTS.LOAD, handlePostsLoad);
  //yield takeEvery(POSTS.LOAD, handlePhotosLoad);
}

export default rootSaga;
