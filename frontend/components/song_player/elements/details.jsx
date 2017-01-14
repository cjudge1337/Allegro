import React from 'react';

class Details extends React.Component {

  render(){
    return(
      <div className="song-player-details">
        <h3>{this.props.title}</h3>
      </div>
    );
  }

}

export default Details;
