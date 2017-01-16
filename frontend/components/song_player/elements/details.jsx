import React from 'react';

class Details extends React.Component {

  render(){
    return(
      <div className="details">
        <h3 className="song-player-title">{this.props.title}</h3>
        <h2 className="song-player-artist">{this.props.artist}</h2>
      </div>
    );
  }

}

export default Details;
