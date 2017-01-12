import React from 'react';
import { Link, withRouter } from 'react-router';
import SongsListContainer from './songs_list_container';
import NavbarContainer from '../navbar/navbar_container';

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
        <NavbarContainer session={this.props.session} />
        <SongsListContainer songs={this.props.songs}/>
      </div>
    );
  }
}

export default withRouter(Home);
