import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import SongsReducer from './song_reducer';
import NowPlayingReducer from './now_playing_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  songs: SongsReducer,
  nowPlaying: NowPlayingReducer
});

export default rootReducer;
