import React, { Component } from 'react';
import { Provider } from 'react-redux';
import PostsApp from './src/PostsApp';
import configureStore from './src/store';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PostsApp />
      </Provider>
    );
  }
}

export default App;
