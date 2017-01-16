import React from 'react';
import { Link } from 'react-router';

class SongListItem extends React.Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
  }

  play(e) {
    e.preventDefault();
    this.props.playSong(this.props.song);
  }

  render() {
    return (
      <li className="song-list-item" key={this.props.song.id}>
        <img src={this.props.song.song_img_url} className="song-list-image"></img>
        <Link to={`/song/${this.props.song.id}`} className="song-list-show-link">
          {this.props.song.title}
        </Link>
        <button type="button" onClick={this.play}><i className="fa fa-play"/></button>
      </li>
    );
  }
}

export default SongListItem;
