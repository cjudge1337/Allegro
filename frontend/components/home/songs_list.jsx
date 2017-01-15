import React from 'react';
import SongListItem from './song_list_item';

class SongsList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSongs();
  }

  render() {
    let songItems;
    let songs = this.props.songs.index;
    if (this.props.songs.index) {
    songItems = Object.keys(songs).map(key => (
        <SongListItem key={songs[key].id}
                      song={songs[key]}
                      fetchSong={this.props.fetchSong}
                      playSong={this.props.playSong} />
                  )
    );
  }

    return (
      <div className="songs-list-container">
        <ul className="songs-list">
          { songItems }
        </ul>
      </div>
    );
  }
}

export default SongsList;
