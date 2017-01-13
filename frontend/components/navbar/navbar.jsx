import React from 'react';
import { Link, withRouter } from 'react-router';
import { createSong } from '../../util/song_api_util';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleUpload(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(
      window.cloudinary_options,
      function(error, results) {
        if (!error) {
          this.props.saveSong(results[0]);
        }
      }.bind(this));
  }

  saveSong(results) {

  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout().then(() => this.props.router.push("/sign-in"));
  }

  render() {
    return (
      <div className="navbar-container">
        <img src="/assets/upload-icon.png" onClick={this.handleUpload} className="upload-img"></img>
        <button type="button" onClick={this.handleLogout}>Logout</button>
      </div>
    );
  }
}

export default withRouter(Navbar);
