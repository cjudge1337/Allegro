import React from 'react';

class SongListItem extends React.Component {
  constructor(props) {
    super(props);
    this.playPause = this.playPause.bind(this);
  }

  playPause(e) {
    e.preventDefault();
    this.props.playSong(this.props.song);
    $('#play_pause_button').trigger('click');
  }

  render() {
    return (
      <li className="song-list-item" key={this.props.song.id}>
        {this.props.song.title}
        <button type="button" onClick={this.playPause}></button>
      </li>
    );
  }
}

export default SongListItem;
