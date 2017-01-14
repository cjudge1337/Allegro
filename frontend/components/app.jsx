import React from 'react';
import NavbarContainer from './navbar/navbar_container';
// import AudioPlayerContainer from './audio_player/audio_player_container';
import SongPlayerContainer from './song_player/song_player_container';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {

    return (
      <div className="app-container">
        <div className="app">
          <NavbarContainer session={this.props.session}/>
          { this.props.children }
          <SongPlayerContainer />
        </div>
      </div>
    );
  }
}

// <AudioPlayerContainer />
export default App;
