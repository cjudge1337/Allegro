import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchSongs } from '../../actions/song_actions';
import SongsList from './songs_list';
import Home from './home';

const mapStateToProps = ({ session, songs }) => (
  session,
  songs
);

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  fetchSongs: () => dispatch(fetchSongs())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
