import { POSTS } from '../../constants';

const currentReducer = (state = null, action) => {
  switch (action.type) {
    case POSTS.SELECT:
      return action.post;
    case POSTS.CLEAR:
      return null;
    default:
      return state;
  }
};

export default currentReducer;
