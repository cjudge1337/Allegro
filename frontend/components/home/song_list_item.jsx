import React from 'react';

class SongListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="song-list-item" key={this.props.song.id}>
        {this.props.song.title}
      </li>
    );
  }
}

export default SongListItem;
