import React from 'react';

class SongShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSong(this.props.params.songid);
  }

  render() {
    let song = {};
    if (this.props.songs.showSong) {
      song = this.props.songs.showSong;
    }
    return (
      <div className="song-show-container">
        <h1 className="song-show-title">{song.title}</h1>
        <img src={song.song_img_url} className="song-show-image"></img>
        <div className="comments-container">
          Future comments box
        </div>
      </div>
    );
  }
}

export default SongShow;
