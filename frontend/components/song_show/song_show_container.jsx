import React from 'react';
import { connect } from 'react-redux';
import { fetchSong } from '../../actions/song_actions';
import SongShow from './song_show.jsx';

const mapStateToProps = ({ songs, nowPlaying }) => ({
  songs,
  nowPlaying
});

const mapDispatchToProps = dispatch => ({
  fetchSong: id => dispatch(fetchSong(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongShow);
