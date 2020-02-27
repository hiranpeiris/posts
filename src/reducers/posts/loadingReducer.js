import { POSTS } from '../../constants';

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case POSTS.LOAD:
      return true;
    case POSTS.LOAD_SUCCESS:
      return false;
    case POSTS.LOAD_FAIL:
      return false;
    default:
      return state;
  }
};

export default loadingReducer;
