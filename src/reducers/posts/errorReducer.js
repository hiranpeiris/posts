import { POSTS } from '../../constants';

const errorReducer = (state = null, action) => {
  switch (action.type) {
    case POSTS.LOAD_FAIL:
      return action.error;
    case POSTS.LOAD:
    case POSTS.LOAD_SUCCESS:
      return null;
    default:
      return state;
  }
};

export default errorReducer;
