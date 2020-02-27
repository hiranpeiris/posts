import { call, put } from 'redux-saga/effects';
import { fetchPhotos } from '../api';
import { setPhotos, setPhotoLoadError } from '../actions';

function* handlePhotosLoad() {
    try {
        const photos = yield call(fetchPhotos, 1);
        yield put(setPhotos(photos));
    } catch (error) {
        yield put(setPhotoLoadError(error.toString()));
    }
}

export { handlePhotosLoad };
