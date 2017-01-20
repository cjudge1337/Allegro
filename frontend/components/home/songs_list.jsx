import React from 'react';
import SongListItem from './song_list_item';

class SongsList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSongs();
  }

  shuffle(array) {
    let counter = array.length;
    while (counter > 0) {
        let index = Math.floor(Math.random() * counter);
        counter--;
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
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
    songItems = this.shuffle(songItems);
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
