import { PLAY_SONG } from '../actions/song_actions';
import { merge } from 'lodash';
import Sound from 'react-sound';

const nullState = {
    song: {
      title: "Test",
      song_url: "http://res.cloudinary.com/diqwtxdmo/video/upload/v1484327350/hphouvhqwmmgfarmpxes.mp3",
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
    debugger
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
