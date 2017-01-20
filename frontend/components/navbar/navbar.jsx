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
    let user = {};
    if (this.props.currentUser) {
      user = this.props.currentUser;
    }

    // let songsList;
    // if (this.props.songs) {
    //
    // }

    return (
      <nav className="navbar-container" id={this.props.hiddenOnSignup}>
        <div className="navbar-left">
          <Link to="/home">
            <img src="/assets/logo.png" className="navbar-logo"/>
          </Link>
        </div>
        <div className="navbar-right">
          <Link to="/upload">
            <img src="/assets/upload-icon.png" className="upload-img"></img>
          </Link>
          <Link to={`/user/${user.id}`} className="navbar-profile-link">
            <h1>{user.username}</h1>
          </Link>
          <img src={user.profile_pic_url} className="navbar-profile-pic"/>
          <button type="button" onClick={this.handleLogout} className="logout-button">Logout</button>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
