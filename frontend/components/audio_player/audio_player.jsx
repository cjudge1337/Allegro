import React from 'react';
import AudioPlayer from 'react-responsive-audio-player';

class Audio extends React.Component {

  render() {
    return (
      <div className="audio-player-container">
        <AudioPlayer playlist={this.props.playlist} />
      </div>
    );
  }
}

export default Audio;
