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
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit (e) {
    e.preventDefault();
    let song = this.state;
    this.props.createSong(song);
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
          "http://res.cloudinary.com/diqwtxdmo/image/upload/w_200,h_200,c_fit/";
          this.setState({ song_img_url: url + path });
        }
      }
    );
  }

  render () {
     return (
     <div className="form-container">
       <form onSubmit={this.handleSubmit}>
         <h1>Upload Track</h1>
         <label>Title
           <input onChange={this.handleChange} name="title"></input>
         </label>
         <button type="button" onClick={this.uploadImage} className="upload-button">Upload Image</button>
         <button type="button" onClick={this.uploadAudio} className="upload-button">Upload Song</button>
         <input type="submit" value="Upload Track" className="form-submit"/>
       </form>
   </div>
     );
  }
}

export default withRouter(UploadForm);
