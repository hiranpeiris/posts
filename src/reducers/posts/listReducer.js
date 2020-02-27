import { POSTS } from '../../constants';

const listReducer = (state = [], action) => {
  switch (action.type) {
    case POSTS.LOAD_SUCCESS:
      return action.posts;
    case POSTS.SET_USER:
      return state.map(t => {
        if (t.id === action.post.id) {
          return { ...action.post, user: action.user };
        }
        return t;
      });
    default:
      return state;
  }
};

export default listReducer;
