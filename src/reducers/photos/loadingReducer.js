import { PHOTOS } from '../../constants';

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case PHOTOS.LOAD:
      return true;
    case PHOTOS.LOAD_SUCCESS:
      return false;
    case PHOTOS.LOAD_FAIL:
      return false;
    default:
      return state;
  }
};

export default loadingReducer;
