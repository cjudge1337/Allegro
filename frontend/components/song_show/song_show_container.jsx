import React from 'react';
import { connect } from 'react-redux';
import { fetchSong, playSong } from '../../actions/song_actions';
import SongShow from './song_show.jsx';

const mapStateToProps = ({ songs, nowPlaying }) => ({
  songs,
  nowPlaying
});

const mapDispatchToProps = dispatch => ({
  fetchSong: id => dispatch(fetchSong(id)),
  playSong: song => dispatch(playSong(song))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongShow);
