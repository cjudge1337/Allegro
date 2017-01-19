import React from 'react';
import CommentListItem from './comment_list_item';
import CommentFormContainer from './comment_form_container';

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
    commentItems = Object.keys(comments).map((key, idx) => (
        <CommentListItem key={idx}
                      comment={comments[key]}
                      session={this.props.session}
                      fetchComment={this.props.fetchComment}
                      deleteComment={this.props.deleteComment} />
                  )
    ).reverse();
  }

    return (
      <div className="comments-list-container">
        <CommentFormContainer songId={this.props.songId}/>
        <ul className="comments-list">
          { commentItems }
        </ul>
      </div>
    );
  }
}

export default CommentList;
