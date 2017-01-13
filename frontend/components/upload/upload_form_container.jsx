import React from 'react';
import { connect } from 'react-redux';
import UploadForm from './upload_form';
import { createSong } from '../../actions/song_actions';

const mapStateToProps = ({ session }) => ({
  session
});

const mapDispatchToProps = dispatch => ({
  createSong: song => dispatch(createSong(song))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadForm);
