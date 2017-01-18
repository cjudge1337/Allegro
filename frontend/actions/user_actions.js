import * as UserApiUtil from './util/song_api_util';

export const RECEIVE_USER = "RECEIVE_USER";

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const fetchUser = id => dispatch => (
  UserApiUtil.fetchUser(id)
  .then(user => dispatch(receiveUser(user)),
        error => dispatch(console.log(error)))
);

export const updateUser = user => dispatch => (
  UserApiUtil.updateUser(user)
  .then(userResponse => dispatch(receiveUser(userResponse)),
        error => dispatch(console.log(error)))
);
