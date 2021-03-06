import { connect } from 'react-redux';
import { login, logout, signup, demoLogin } from '../../actions/session_actions';
import AuthForm from './auth_form';


const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'sign-in') ? login : signup;
  return {
    processForm: user => dispatch(processForm(user)),
    demoLogin: () => dispatch(demoLogin()),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthForm);
