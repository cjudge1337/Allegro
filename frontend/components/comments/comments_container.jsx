import { connect } from 'react-redux';
import { fetchComments, fetchComment, deleteComment } from '../../actions/comment_actions';
import CommentsList from './comments_list';

const mapStateToProps = ({ songs }) => ({
  songs
});

const mapDispatchToProps = (dispatch) => ({
  fetchComments: songId => dispatch(fetchComments(songId)),
  fetchComment: commentId => dispatch(fetchComment(commentId)),
  deleteComment: song => dispatch(deleteComment(song))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsList);
