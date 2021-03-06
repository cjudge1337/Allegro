import * as APIUtil from '../util/session_api_util';

const demoUser = {
    username: "Guest",
    password: 123456
  };

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const login = user => dispatch => (
  APIUtil.login(user)
  .then(userResponse => dispatch(receiveCurrentUser(userResponse)),
        error => dispatch(receiveErrors(error.responseJSON)))
);

export const logout = () => dispatch => (
  APIUtil.logout()
  .then(dispatch(receiveCurrentUser(null)))
);

export const signup = user => dispatch => (
  APIUtil.signup(user)
  .then(userResponse => dispatch(receiveCurrentUser(userResponse)),
        error => dispatch(receiveErrors(error.responseJSON)))
);

export const demoLogin = dispatch => (login(demoUser));
