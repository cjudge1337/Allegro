import React from 'react';
import { Link } from 'react-router';

class CommentListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="comment-list-item" key={this.props.comment.id}>
        <img src={this.props.comment.user.profile_pic_url} className="comment-list-item-pic" />
        <h5 className="comment-list-item-text">{this.props.comment.user.username} said: {this.props.comment.body}</h5>
      </li>
    );
  }
}

export default CommentListItem;
