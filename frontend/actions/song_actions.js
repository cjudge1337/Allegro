import * as SongApiUtil from '../util/song_api_util';

export const RECEIVE_SONGS = "RECEIVE_SONGS";
export const RECEIVE_SONG = "RECEIVE_SONG";
export const REMOVE_SONG = "REMOVE_SONG";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const PLAY_SONG = "PLAY_SONG";
export const PAUSE_SONG = "PAUSE_SONG";

export const receiveSongs = songs => ({
  type: RECEIVE_SONGS,
  songs
});

export const receiveSong = song => ({
  type: RECEIVE_SONG,
  song
});

export const removeSong = song => ({
  type: REMOVE_SONG,
  song
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const playSong = song => ({
  type: PLAY_SONG,
  song
});

export const pauseSong = () => ({
  type: PAUSE_SONG
});

export const fetchSongs = () => dispatch => (
  SongApiUtil.fetchSongs()
  .then(songs => dispatch(receiveSongs(songs)),
        error => dispatch(receiveErrors(error.responseJSON)))
);


export const fetchSong = id => dispatch => (
  SongApiUtil.fetchSong(id)
  .then(song => dispatch(receiveSong(song)),
        error => dispatch(receiveErrors(error.responseJSON)))
);

export const createSong = song => dispatch => (
  SongApiUtil.createSong(song)
  .then(songResponse => dispatch(receiveSong(songResponse)),
        error => dispatch(receiveErrors(error.responseJSON)))
);

export const updateSong = song => dispatch => (
  SongApiUtil.updateSong(song)
  .then(songResponse => dispatch(receiveSong(songResponse)),
        error => dispatch(receiveErrors(error.responseJSON)))
);

export const deleteSong = id => dispatch => (
  SongApiUtil.deleteSong(id)
  .then(songResponse => dispatch(removeSong(songResponse)),
        error => dispatch(receiveErrors(error.responseJSON)))
);
