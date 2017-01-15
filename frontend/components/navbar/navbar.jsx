import React from 'react';
import { Link, withRouter } from 'react-router';
import { createSong } from '../../util/song_api_util';

class Navbar extends React.Component {
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
      <div className="navbar-container" id={this.props.hiddenOnSignup}>
        <Link to="/upload">
          <img src="/assets/upload-icon.png" className="upload-img"></img>
        </Link>
        <button type="button" onClick={this.handleLogout}>Logout</button>
      </div>
    );
  }
}

export default withRouter(Navbar);
