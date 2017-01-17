import * as CommentApiUtil from '../util/comment_api_util';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const removeComment = comment => ({
  type: REMOVE_COMMENT,
  comment
});

export const fetchComments = songId => dispatch => (
  CommentApiUtil.fetchComments(songId)
  .then(comments => dispatch(receiveComments(comments)),
        errors => console.log(errors))
);

export const fetchComment = commentId => dispatch => (
  CommentApiUtil.fetchComment(commentId)
  .then(comment => dispatch(receiveComment(comment)),
        errors => console.log(errors))
);

export const createComment = comment => dispatch => (
  CommentApiUtil.createComment(comment)
  .then(commentResponse => dispatch(receiveComment(commentResponse)),
        errors => console.log(errors))
);

export const deleteComment = commentId => dispatch => (
  CommentApiUtil.deleteComment(commentId)
  .then(commentResponse => dispatch(removeComment(commentResponse)),
        errors => console.log(errors))
);
