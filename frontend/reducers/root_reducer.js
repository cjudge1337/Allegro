import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import SongsReducer from './song_reducer';
import NowPlayingReducer from './now_playing_reducer';
import UserReducer from './user_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  songs: SongsReducer,
  nowPlaying: NowPlayingReducer,
  user: UserReducer
});

export default rootReducer;
