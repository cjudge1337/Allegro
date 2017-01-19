import React from 'react';
import { withRouter } from 'react-router';
import UserPageSong from './user_page_song';

class UserPage extends React.Component {
  constructor(props) {
    super(props);

    this.uploadPanelPic = this.uploadPanelPic.bind(this);
    this.uploadProfilePic = this.uploadProfilePic.bind(this);
    this.uploadBio = this.uploadBio.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.params.userid);
  }

  uploadPanelPic(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(
      window.image_cloudinary_options,
      (error, results) => {
        if (!error) {
          const path = results[0].path;
          const url = "http://res.cloudinary.com/diqwtxdmo/image/upload/";
          let newUser = {
            id: this.props.id,
            username: this.props.username,
            panel_url: (url + path),
            profile_pic_url: this.props.profile_pic_url,
            bio: this.props.bio
          };

          this.props.updateUser(newUser);
        }
      }
    );
  }

  uploadProfilePic(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(
      window.image_cloudinary_options,
      (error, results) => {
        if (!error) {
          const path = results[0].path;
          const url = "http://res.cloudinary.com/diqwtxdmo/image/upload/";
          let newUser = {
            id: this.props.id,
            username: this.props.username,
            panel_url: this.props.panel_url,
            profile_pic_url: (url + path),
            bio: this.props.bio
          };

          this.props.updateUser(newUser);
        }
      }
    );
  }

  render() {
    let songItems;
    if (this.props.songs) {
      songItems = this.props.songs.map((song, idx) => (
          <UserPageSong key={idx}
                        song={song}
                        session={this.props.session}
                        fetchSong={this.props.fetchSong}
                        playSong={this.props.playSong} />
        )
      );
    }

    return (
      <div className="user-page-container">
        <img src={this.props.panel_url} className="user-page-panel" />
        <div>

          <h1 className="user-page-username">{this.props.username}</h1>
          <p className="user-page-bio">{this.props.bio}</p>
          <img src={this.props.profile_pic_url} className="user-profile-pic" />
        </div>
        <button className="user-page-panel-button" onClick={this.uploadPanelPic}>Update Panel Pic</button>
        <button className="user-page-profile-button" onClick={this.uploadProfilePic}>Update User Pic</button>
        <button className="user-page-bio-button" onClick={this.uploadBio}>Update Bio</button>
        <ul className="user-page-songs-list-container">
          {songItems}
        </ul>
      </div>
    );
  }
}

export default withRouter(UserPage);
