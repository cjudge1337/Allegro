import { connect } from 'react-redux';
import UserPage from './user_page';

const mapStateToProps = ({ session }) => (
  session
);

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
