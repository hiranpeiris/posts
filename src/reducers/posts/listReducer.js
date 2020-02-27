import { POSTS } from '../../constants';

const listReducer = (state = [], action) => {
  switch (action.type) {
    case POSTS.LOAD_SUCCESS:
        return action.posts;
    default:
        return state;
  }
};

export default listReducer;
