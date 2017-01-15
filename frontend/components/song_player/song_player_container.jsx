import React from 'react';
import { connect } from 'react-redux';
import SongPlayer from './song_player.jsx';
import { updatePlayingSong } from '../../actions/song_actions';

const mapStateToProps = ({ nowPlaying }) => ({
  nowPlaying
});

const mapDispatchToProps = dispatch => ({
  updatePlayingSong: songData => dispatch(updatePlayingSong(songData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongPlayer);
