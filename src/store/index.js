import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from '../reducers';
import rootSaga from '../sagas';
import { loadPosts, setPosts } from '../actions';
import AsyncStorage from '@react-native-community/async-storage';

getCachedData = async store => {
  try {
    const posts = await AsyncStorage.getItem('POSTS')
    if(posts !== null) {
      console.log('Load from cached data');
      store.dispatch(setPosts(JSON.parse(posts)));
      return;
    }
  } catch(e) {
    console.log('Cache read error!');
  }

  console.log('Load from remote data');
  store.dispatch(loadPosts());
}

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    //applyMiddleware(sagaMiddleware),
    applyMiddleware(sagaMiddleware, logger),
  );
  sagaMiddleware.run(rootSaga);
  getCachedData(store);
  return store;
};

export default configureStore;
