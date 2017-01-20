import React from 'react';
import { connect } from 'react-redux';
import SongPlayer from './song_player.jsx';
import { updatePlayingSong, playSong } from '../../actions/song_actions';
import { fetchSongs } from '../../util/song_api_util';

const mapStateToProps = ({ nowPlaying }) => ({
  nowPlaying
});

const mapDispatchToProps = dispatch => ({
  updatePlayingSong: songData => dispatch(updatePlayingSong(songData)),
  playSong: song => dispatch(playSong(song))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongPlayer);
