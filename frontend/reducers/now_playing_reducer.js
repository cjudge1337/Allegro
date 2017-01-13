import { PLAY_SONG } from '../actions/song_actions';
import { merge } from 'lodash';

const nullState = {
  playlist: [],
  playing: false
};

const NowPlayingReducer = (state = nullState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case PLAY_SONG:
    let newState = merge({}, state);
    let newSong = {
      url: action.song.song_url,
      displayText: action.song.title
    };
    newState['playlist'].unshift(newSong);
    newState['playing'] = true;
    return newState;
    default:
      return state;
  }
};

export default NowPlayingReducer;
