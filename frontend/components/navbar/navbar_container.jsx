import { connect } from 'react-redux';
import { createSong } from '../../actions/song_actions';
import { logout } from '../../actions/session_actions';
import Navbar from './navbar';

const mapStateToProps = ({ session, songs }) => (
  session,
  songs
);

const mapDispatchToProps = (dispatch) => ({
  createSong: song => dispatch(createSong(song)),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
