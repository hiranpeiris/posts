import { call, put } from 'redux-saga/effects';
import { fetchPosts, fetchPhotos } from '../api';
import { setPosts, setError } from '../actions';

function* handlePostsLoad() {
  try {
    const posts = yield call(fetchPosts);
    yield put(setPosts(posts));
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

function* handlePhotosLoad() {
  try {
    const posts = yield call(fetchPosts);
    yield put(setPosts(posts));
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

export { handlePostsLoad, handlePhotosLoad };
