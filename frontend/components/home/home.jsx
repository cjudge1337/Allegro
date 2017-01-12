import React from 'react';
import { Link, withRouter } from 'react-router';
import SongsListContainer from './songs_list_container';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout().then(() => this.props.router.push("/sign-in"));
  }

  render() {
    return (
      <div className="home-container">
        <nav>
          <button type="button" onClick={this.handleLogout}>Logout</button>
        </nav>
        <SongsListContainer songs={this.props.songs}/>
      </div>
    );
  }
}

export default withRouter(Home);
