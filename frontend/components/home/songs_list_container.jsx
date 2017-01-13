import { connect } from 'react-redux';
import { fetchSongs, fetchSong, playSong } from '../../actions/song_actions';
import SongsList from './songs_list';

const mapStateToProps = ({ songs }) => ({
  songs
});

const mapDispatchToProps = (dispatch) => ({
  fetchSongs: () => dispatch(fetchSongs()),
  fetchSong: id => dispatch(fetchSong(id)),
  playSong: song => dispatch(playSong(song))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongsList);
