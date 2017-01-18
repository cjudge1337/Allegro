import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import SongPlayerContainer from './song_player/song_player_container';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  hiddenOnSignup() {
    if (this.props.location.pathname.slice(1) === 'sign-up' ||
        this.props.location.pathname.slice(1) === 'sign-in') {
          return "hidden";
        } else {
          return "";
        }
  }

  render () {

    return (
      <div className="app">
        <NavbarContainer session={this.props.session} hiddenOnSignup={this.hiddenOnSignup()}/>
        { this.props.children }
        <SongPlayerContainer hiddenOnSignup={this.hiddenOnSignup()}/>
      </div>
    );
  }
}

export default App;
