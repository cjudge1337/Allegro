import React from 'react';
import CommentsListContainer from '../comments/comments_container';

class SongShow extends React.Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
  }

  componentDidMount() {
    this.props.fetchSong(this.props.params.songid);
    this.props.fetchComments(this.props.params.songid);
  }

  play(e) {
    e.preventDefault();
    this.props.playSong(this.props.songs.showSong);
  }

  render() {
    let song = {};
    if (this.props.songs.showSong) {
      song = this.props.songs.showSong;
    }
    
    return (
      <div className="song-show-container">
        <div className="song-show-panel-container">
          <div className="song-panel-left-side">
            <button type="button" className="song-show-play-button fa fa-play fa-3x" onClick={this.play}>
            </button>
            <h2 className="song-show-artist">{song.artist}</h2>
            <h1 className="song-show-title">{song.title}</h1>
          </div>
          <img src={song.song_img_url} className="song-show-image"></img>
        </div>
        { song.comments ? <CommentsListContainer songId={parseInt(this.props.params.songid)}/> : ""}
      </div>
    );
  }
}

export default SongShow;
