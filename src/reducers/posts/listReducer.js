import { POSTS } from '../../constants';

const listReducer = (state = [], action) => {
  switch (action.type) {
    case POSTS.LOAD_SUCCESS:
      return action.posts;
    case POSTS.SET_USERS:
      return action.postsWithUsers
    default:
      return state;
  }
};

export default listReducer;
