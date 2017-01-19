import { connect } from 'react-redux';
import { fetchUser, updateUser } from '../../actions/user_actions';
import { fetchSong, playSong } from '../../actions/song_actions';
import UserPage from './user_page';

const mapStateToProps = ({ session, user }) => (
  session,
  user
);

const mapDispatchToProps = (dispatch) => ({
  fetchUser: id => dispatch(fetchUser(id)),
  updateUser: user => dispatch(updateUser(user)),
  fetchSong: id => dispatch(fetchSong(id)),
  playSong: song => dispatch(playSong(song))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
