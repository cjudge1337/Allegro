import React from 'react';
import { withRouter } from 'react-router';
import UserPageSong from './user_page_song';
import Modal from 'react-modal';
import { style } from '../../../app/assets/stylesheets/modal_style';
import InfoForm from './info_form';

class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false };

    this.hiddenUnlessUser = this.hiddenUnlessUser.bind(this);
    this.uploadPanelPic = this.uploadPanelPic.bind(this);
    this.uploadProfilePic = this.uploadProfilePic.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
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
            id: this.props.user.id,
            username: this.props.user.username,
            panel_url: (url + path),
            profile_pic_url: this.props.user.profile_pic_url,
            bio: this.props.user.bio
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
            id: this.props.user.id,
            username: this.props.user.username,
            panel_url: this.props.user.panel_url,
            profile_pic_url: (url + path),
            bio: this.props.user.bio
          };

          this.props.updateUser(newUser);
        }
      }
    );
  }

  hiddenUnlessUser() {
    if (this.props.session.currentUser.username !== this.props.user.username) {
      return "hidden";
    } else {
      return "";
    }
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ modalOpen: true});
  }

  onModalClose() {
    this.setState({ modalOpen: false });
    style.content.opacity = 0;
  }

  onModalOpen() {
    style.content.opacity = 100;
  }

  render() {
    let songItems;
    if (this.props.user.songs) {
      songItems = this.props.user.songs.map((song, idx) => (
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
        <img src={this.props.user.panel_url} className="user-page-panel" />
        <div className="user-page-details">
          <img src={this.props.user.profile_pic_url} className="user-profile-pic" />
          <h1 className="user-page-username">{this.props.user.username}</h1>
        </div>
        <div className="user-page-buttons">
          <button id={this.hiddenUnlessUser()} className="user-page-button" onClick={this.uploadProfilePic}>Update User Pic</button>
          <button id={this.hiddenUnlessUser()} className="user-page-button" onClick={this.uploadPanelPic}>Update Panel Pic</button>
          <button id={this.hiddenUnlessUser()} className="user-page-button" onClick={this.handleClick}>Update Info</button>
        </div>
        <h3 className="user-page-songs-title">Songs</h3>
        <div className="user-page-lower-container">
          <ul className="user-page-songs-list">
            {songItems}
          </ul>
          <div className="user-page-bio-container">
            <p className="user-page-bio-title">Bio:</p>
            <p className="user-page-bio">{this.props.user.bio}</p>
          </div>
        </div>

        <Modal
              isOpen={this.state.modalOpen}
              onRequestClose={this.onModalClose}
              style={style}
              onAfterOpen={this.onModalOpen}
              contentLabel={"Modal"}>
                <button className="modal-close" onClick={this.onModalClose}>X</button>
                <InfoForm bio={this.props.user.bio}
                          username={this.props.user.username}
                          id={this.props.user.id}
                          panel_url={this.props.user.panel_url}
                          profile_pic_url={this.props.user.profile_pic_url}
                          updateUser={this.props.updateUser}
                          closeModal={this.onModalClose}></InfoForm>
        </Modal>
      </div>
    );
  }
}

export default withRouter(UserPage);
