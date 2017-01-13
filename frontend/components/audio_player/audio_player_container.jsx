import { connect } from 'react-redux';
import { fetchSong } from '../../actions/song_actions';
import Audio from './audio_player';

const mapStateToProps = ({ nowPlaying }) => (
  nowPlaying
);

const mapDispatchToProps = (dispatch) => ({
  fetchSong: id => dispatch(fetchSong(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Audio);
