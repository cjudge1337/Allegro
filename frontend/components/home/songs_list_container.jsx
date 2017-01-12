import { connect } from 'react-redux';
import { fetchSongs, fetchSong } from '../../actions/song_actions';
import SongsList from './songs_list';

const mapStateToProps = ({ songs }) => ({
  songs
});

const mapDispatchToProps = (dispatch) => ({
  fetchSongs: () => dispatch(fetchSongs()),
  fetchSong: id => dispatch(fetchSong(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongsList);
