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
      <nav className="navbar-container" id={this.props.hiddenOnSignup}>
        <Link to="/home">
          <div className="stream-button">Stream</div>
        </Link>
        <Link to="/upload">
          <img src="/assets/upload-icon.png" className="upload-img"></img>
        </Link>
        <button type="button" onClick={this.handleLogout}>Logout</button>
      </nav>
    );
  }
}

export default withRouter(Navbar);
