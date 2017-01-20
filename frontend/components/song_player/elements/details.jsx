import React from 'react';

class Details extends React.Component {

  render(){
    return(
      <div className="details">
        <a className="song-player-title" href={`/#/song/${this.props.nowPlaying.song.id}`}>
          {this.props.nowPlaying.song.title}
        </a>
        <a className="song-player-artist" href={`/#/user/${this.props.nowPlaying.song.user_id}`}>
          {this.props.nowPlaying.song.artist}
        </a>
      </div>
    );
  }

}

// <h3 className="song-player-title">{this.props.title}</h3>
// <h2 className="song-player-artist">{this.props.artist}</h2>
export default Details;
