import React from 'react';
import { Link, withRouter } from 'react-router';

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
      <nav>
        <button type="button" onClick={this.handleLogout}>Logout</button>
      </nav>
    );
  }
}

export default withRouter(Home);
