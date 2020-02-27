import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from '../reducers';
import rootSaga from '../sagas';
import { loadPosts } from '../actions';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware),
    //applyMiddleware(sagaMiddleware, logger),
  );
  sagaMiddleware.run(rootSaga);
  store.dispatch(loadPosts());
  return store;
};

export default configureStore;
