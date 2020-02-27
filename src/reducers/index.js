import { combineReducers } from 'redux';

// Posts reducers
import postsLoadingReducer from './posts/loadingReducer';
import postsListReducer from './posts/listReducer';
import postsErrorReducer from './posts/errorReducer';
import postsCurrentReducer from './posts/currentReducer';

// Photo reducers
import photosLoadingReducer from './photos/loadingReducer';
import photosListReducer from './photos/listReducer';

const rootReducer = combineReducers({
  isPostsLoading: postsLoadingReducer,
  posts: postsListReducer,
  postsError: postsErrorReducer,
  currentPost: postsCurrentReducer,
  isPhotosLoading: photosLoadingReducer,
  photos: photosListReducer,
});

export default rootReducer;
