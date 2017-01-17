import { connect } from 'react-redux';
import { fetchComments, fetchComment, deleteComment, createComment } from '../../actions/comment_actions';
import CommentsList from './comments_list';

const mapStateToProps = ({ songs }) => ({
  songs
});

const mapDispatchToProps = (dispatch) => ({
  fetchComments: songId => dispatch(fetchComments(songId)),
  fetchComment: commentId => dispatch(fetchComment(commentId)),
  deleteComment: comment => dispatch(deleteComment(comment)),
  createComment: comment => dispatch(createComment(comment))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsList);
