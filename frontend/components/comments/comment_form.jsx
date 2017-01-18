import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ body: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let comment = {
      body: this.state.body,
      song_id: this.props.songId
    };
    this.props.createComment(comment).then(() => this.setState({ body: ""}));
  }

  render() {
    return (
      <div className="comment-form-container">
        <form onSubmit={this.handleSubmit} className="comment-form">
          <input onChange={this.handleChange}
                className="comment-form-input"
                placeholder="Write a comment"
                value={this.state.body}></input>
          <input type="submit"
                value="Add comment"
                className="comment-form-button"></input>
        </form>
      </div>
    );
  }

}

export default CommentForm;
