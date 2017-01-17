import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchComments, fetchComment, createComment, deleteComment } from './util/comment_api_util';
import { asObject } from './reducers/selectors';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser, errors: [] } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  window.fetchComments = fetchComments;
  window.fetchComment = fetchComment;
  window.createComment = createComment;
  window.deleteComment = deleteComment;

  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
