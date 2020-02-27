import { combineReducers } from 'redux';

// Posts reducers
import postsLoadingReducer from './posts/loadingReducer';
import postsListReducer from './posts/listReducer';
import postsErrorReducer from './posts/errorReducer';
import postsCurrentReducer from './posts/currentReducer';

const rootReducer = combineReducers({
  isPostsLoading: postsLoadingReducer,
  posts: postsListReducer,
  postsError: postsErrorReducer,
  currentPost: postsCurrentReducer,
});

export default rootReducer;
