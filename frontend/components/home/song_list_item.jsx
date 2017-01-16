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
        <button type="button" className="song-list-item-button" onClick={this.play}><i className="fa fa-play fa-4x play-button"/></button>
        <Link to={`/song/${this.props.song.id}`} className="song-list-show-link">
          <h1 className="song-list-item-title">{this.props.song.title}</h1>
        </Link>
        <h2 className="song-list-item-artist">{this.props.song.artist}</h2>
      </li>
    );
  }
}

export default SongListItem;
