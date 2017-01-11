import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Home from './home';

const mapStateToProps = ({ session }) => (
  session
);

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
