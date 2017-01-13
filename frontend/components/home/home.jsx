import React from 'react';
import { Link, withRouter } from 'react-router';
import SongsListContainer from './songs_list_container';
import NavbarContainer from '../navbar/navbar_container';
var AudioPlayer = require('react-responsive-audio-player');

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const playlist = [ {url: "http://res.cloudinary.com/diqwtxdmo/video/upload/v1484327350/hphouvhqwmmgfarmpxes.mp3",
                        displayText: "Test One"},
                        { url: "http://res.cloudinary.com/diqwtxdmo/video/upload/v1484285637/f85n0oz7shole7ssnyrq.mp3",
                          displayText: "Test Two"}
                      ];
    return (
      <div className="home-container">
        <NavbarContainer session={this.props.session} />
        <SongsListContainer songs={this.props.songs}/>
        <AudioPlayer playlist={playlist} style={{ position: 'fixed', bottom: 0 }}/>
      </div>
    );
  }
}

export default withRouter(Home);
