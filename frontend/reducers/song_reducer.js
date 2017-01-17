import { RECEIVE_SONGS, RECEIVE_SONG, REMOVE_SONG, RECEIVE_ERRORS } from '../actions/song_actions';
import { RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';
import { merge, extend } from 'lodash';
import { asObject } from './selectors';

const SongsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SONGS:
      return {
        index: asObject(action.songs)
      };
    case RECEIVE_SONG:
      return {
        showSong: action.song
      };
    case REMOVE_SONG:
      let newState = merge({}, state);
      delete newState[action.song.id];
      return newState;
    case RECEIVE_ERRORS:
      return merge({}, state, {
        errors: action.errors
      });
    case RECEIVE_COMMENTS:
      return merge({}, state, { showSong: { comments: asObject(action.comments) } });
    case RECEIVE_COMMENT:
      return merge({}, state, { showSong: { comments: action.comment } });
    case REMOVE_COMMENT:
      let newComments = merge({}, state['showSong']['comments']);
      delete newComments[action.comment.id];
      return merge({}, state, { showSong: { comments: newComments } });
    default:
      return state;
  }
};

export default SongsReducer;
