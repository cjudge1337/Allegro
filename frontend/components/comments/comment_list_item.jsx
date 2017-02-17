import React from 'react';
import { Link } from 'react-router';

class CommentListItem extends React.Component {
  constructor(props) {
    super(props);

    this.hiddenUnlessUser = this.hiddenUnlessUser.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  hiddenUnlessUser() {
    if (this.props.session.currentUser.username !== this.props.comment.user.username) {
      return "hidden";
    } else {
      return "";
    }
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteComment(this.props.comment.id);
  }

  render() {
    return (
      <li className="comment-list-item" key={this.props.comment.id}>
        <img src={this.props.comment.user.profile_pic_url} className="comment-list-item-pic" />
        <h5 className="comment-list-item-text">
          <Link to={`/user/${this.props.comment.user_id}`} className="comment-list-item-link">
            {this.props.comment.user.username}:
          </Link>
          <p className="comment-body">{this.props.comment.body}</p>
        </h5>
        <button type="button"
                className="comment-list-delete-button"
                id={this.hiddenUnlessUser()}
                onClick={this.handleDelete}>Delete</button>
      </li>
    );
  }
}

export default CommentListItem;
