import React from 'react';
import { Link, withRouter } from 'react-router';
import { createSong } from '../../actions/song_actions';

class UploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      song_url: "",
      song_img_url: "http://res.cloudinary.com/diqwtxdmo/image/upload/v1484181396/arm-sound-retro-audio-19951_asrlr6.jpg"
    };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.uploadAudio = this.uploadAudio.bind(this);
      this.uploadImage = this.uploadImage.bind(this);
    }

  handleChange (e) {
    e.preventDefault();
    this.setState({ title: e.target.value });
  }

  handleSubmit (e) {
    e.preventDefault();
    debugger
    let song = this.state;
    this.props.createSong(song).then(res => {
      this.props.router.push(`/song/${res.song.id}`);
    });

  }

  uploadAudio (e) {
    e.preventDefault();
    cloudinary.openUploadWidget(
      window.audio_cloudinary_options,
      (error, results) => {
        if (!error) {
          this.setState({song_url: results[0].url});
        }
      }
    );
  }

  uploadImage (e) {
    e.preventDefault();
    cloudinary.openUploadWidget(
      window.image_cloudinary_options,
      (error, results) => {
        if (!error) {
          const path = results[0].path;
          const url =
          "http://res.cloudinary.com/diqwtxdmo/image/upload/";
          this.setState({ song_img_url: url + path });
        }
      }
    );
  }

  render () {
     return (
     <div className="upload-form-container">
       <form onSubmit={this.handleSubmit} className="upload-form">
         <h1 className="upload-form-title">Upload A Song</h1>
         <input onChange={this.handleChange} placeholder="Title" className="upload-input"></input>
         <button type="button" onClick={this.uploadImage} className="upload-button">Album Art</button>
         <button type="button" onClick={this.uploadAudio} className="upload-button">Song File</button>
         <input type="submit" value="Upload Song" className="form-submit"/>
       </form>
   </div>
     );
  }
}

export default withRouter(UploadForm);
