import React from 'react';
import { Link, withRouter } from 'react-router';
import SongsListContainer from './songs_list_container';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home-container">
        <SongsListContainer songs={this.props.songs}/>
      </div>
    );
  }
}

export default withRouter(Home);
