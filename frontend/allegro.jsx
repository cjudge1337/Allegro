import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchSongs, fetchSong, createSong, updateSong, deleteSong } from './actions/song_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser, errors: [] } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  window.fetchSongs = fetchSongs;
  window.fetchSong = fetchSong;
  window.createSong = createSong;
  window.updateSong = updateSong;
  window.deleteSong = deleteSong;


  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
