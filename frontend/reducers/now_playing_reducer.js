import { PLAY_SONG, UPDATE_PLAYING_SONG } from '../actions/song_actions';
import { merge } from 'lodash';
import Sound from 'react-sound';

const nullState = {
    song: {
      id: 0,
      title: "",
      song_url: "",
      song_img_url: ""
    },
    playStatus: Sound.status.STOPPED,
    elapsed: '00:00',
    total: '00:00',
    position: 0,
    playFromPosition: 0,
    positionSeconds: 0
  };

const NowPlayingReducer = (state = nullState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case PLAY_SONG:
      return merge({}, state, {
        song: action.song,
        playStatus: Sound.status.PLAYING
      });
    case UPDATE_PLAYING_SONG:
      return merge({}, state, action.songData);
    default:
      return state;
  }
};

export default NowPlayingReducer;
