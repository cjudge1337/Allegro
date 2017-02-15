import React from 'react';

class InfoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username,
      bio: this.props.bio
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBioChange = this.handleBioChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let newUser = {
      id: this.props.id,
      username: this.state.username,
      panel_url: this.props.panel_url,
      profile_pic_url: this.props.profile_pic_url,
      bio: this.state.bio
    };

    this.props.updateUser(newUser);
    this.props.closeModal();
  }

  handleBioChange(e) {
    e.preventDefault();
    this.setState({ bio: e.target.value });
  }

  handleUsernameChange(e) {
    e.preventDefault();

    this.setState({ username: e.target.value });
  }

   render() {
     
     return (
       <form className="user-page-info-form" onSubmit={this.handleSubmit}>
         <label className="user-page-form-label"> Username:
             <input className="user-page-username-input"
                    onChange={this.handleUsernameChange}
                    placeholder="Username"
                    value={this.state.username}></input>
          </label>
          <label className="user-page-form-label"> Description:
             <textarea className="user-page-bio-input"
                     rows="5"
                     onChange={this.handleBioChange}
                     placeholder="Description"
                     value={this.state.bio}></textarea>
          </label>
         <input type="submit"
                className="user-page-info-submit"
                value="Submit"></input>
       </form>

     );
   }
}

export default InfoForm;
