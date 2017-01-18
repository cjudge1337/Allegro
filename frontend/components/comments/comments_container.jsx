import { connect } from 'react-redux';
import { fetchComments, fetchComment, deleteComment, createComment } from '../../actions/comment_actions';
import CommentsList from './comments_list';

const mapStateToProps = ({ songs, session }) => ({
  songs,
  session
});

const mapDispatchToProps = (dispatch) => ({
  fetchComments: songId => dispatch(fetchComments(songId)),
  fetchComment: commentId => dispatch(fetchComment(commentId)),
  deleteComment: commentId => dispatch(deleteComment(commentId)),
  createComment: comment => dispatch(createComment(comment))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsList);
