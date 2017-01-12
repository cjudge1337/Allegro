import React from 'react';
import { Link } from 'react-router';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navbar-container">
        <button type="button" className="upload-button">
          <img src="/assets/upload-icon.png"></img>
        </button>
        <button type="button" onClick={this.handleLogout}>Logout</button>
      </div>
    );
  }
}

export default Navbar;
