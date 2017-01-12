import { RECEIVE_SONGS, RECEIVE_SONG, REMOVE_SONG, RECEIVE_ERRORS } from '../actions/song_actions';
import merge from 'lodash';
import { asObject } from './selectors';

const SongsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SONGS:
      let newSongs = asObject(action.songs);
      return merge({}, state, newSongs);
    case RECEIVE_SONG:
      return merge({}, state, {
        [action.song.id]: action.song
      });
    case REMOVE_SONG:
      let newState = merge({}, state);
      delete newState[action.song.id];
      return newState;
    case RECEIVE_ERRORS:
      return merge({}, state, {
        errors: action.errors
      });
    default:
      return state;
  }
};

export default SongsReducer;
