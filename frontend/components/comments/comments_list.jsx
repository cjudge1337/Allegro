import React from 'react';
import CommentListItem from './comment_list_item';

class CommentList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchComments(this.props.songs.showSong.id);
  }

  render() {
    let commentItems;
    let comments = this.props.songs.showSong.comments;
    if (this.props.songs.showSong.comments) {
    commentItems = Object.keys(comments).map(key => (
        <CommentListItem key={comments[key].id}
                      comment={comments[key]}
                      fetchComment={this.props.fetchComment}
                      deleteComment={this.props.deleteComment} />
                  )
    );
  }

    return (
      <div className="comments-list-container">
        <ul className="comments-list">
          { commentItems }
        </ul>
      </div>
    );
  }
}

export default CommentList;
