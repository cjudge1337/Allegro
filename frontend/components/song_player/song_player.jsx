import React from 'react';
import Details from './elements/details';
import Player from './elements/player';
import Progress from './elements/progress';
import Sound from 'react-sound';

class SongPlayer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      song: {
        title: "Test",
        song_url: "http://res.cloudinary.com/diqwtxdmo/video/upload/v1484327350/hphouvhqwmmgfarmpxes.mp3",
        song_img_url: ""
      },
      playStatus: Sound.status.STOPPED,
      elapsed: '00:00',
      total: '00:00',
      position: 0,
      playFromPosition: 0,
      positionSeconds: 0,
    };

    this.handleSongPlaying = this.handleSongPlaying.bind(this);
    this.togglePlay = this.togglePlay.bind(this);
    this.stop = this.stop.bind(this);
    this.forward = this.forward.bind(this);
    this.backward = this.backward.bind(this);
    this.clickAdjust = this.clickAdjust.bind(this);
  }

  componentDidMount() {
    this.setState({$progressBar: $(".progress-bar")});
  }

  formatMilliseconds(milliseconds) {
    var hours = Math.floor(milliseconds / 3600000);
    milliseconds = milliseconds % 3600000;

    var minutes = Math.floor(milliseconds / 60000);
    milliseconds = milliseconds % 60000;

    var seconds = Math.floor(milliseconds / 1000);
    milliseconds = Math.floor(milliseconds % 1000);

    return (minutes < 10 ? '0' : '') + minutes + ':' +
    (seconds < 10 ? '0' : '') + seconds;
  }

  handleSongPlaying(audio) {
    console.log(audio.buffered);
    this.setState({ elapsed: this.formatMilliseconds(audio.position),
        total: this.formatMilliseconds(audio.duration),
        position: audio.position / audio.duration,
        totalSeconds: audio.duration,
        positionSeconds: audio.position
      });
  }

  handleSongFinished() {
    //Firgure out how to load next song
  }

  togglePlay() {
    if(this.state.playStatus === Sound.status.PLAYING){
      this.setState({playStatus: Sound.status.PAUSED});
    } else {
      this.setState({playStatus: Sound.status.PLAYING});
    }
  }

  stop() {
   this.setState({playStatus: Sound.status.STOPPED});
  }

  forward() {
    let newSeconds = this.state.positionSeconds + 10000;
    this.setState({ playFromPosition: newSeconds });
  }

  backward() {
    this.setState({playFromPosition: this.state.playFromPosition -= 1000 * 10});
  }

  clickAdjust(xPosition) {
    let barWidth = this.state.$progressBar.width();
    let leftOffset = this.state.$progressBar.offset().left;
    let ratio = (xPosition - leftOffset) / barWidth;
    let newPosition = this.state.totalSeconds * ratio;
    this.setState({playFromPosition: newPosition});
  }

   render() {

     return (
       <div className="song-player">
         <Details title={this.state.title} />

         <Player togglePlay={this.togglePlay.bind(this)}
                 stop={this.stop.bind(this)}
                 playStatus={this.state.playStatus}
                 forward={this.forward.bind(this)}
                 backward={this.backward.bind(this)} />

         <Progress position={this.state.position}
                   elapsed={this.state.elapsed}
                   total={this.state.total}
                   clickAdjust={this.clickAdjust.bind(this)}/>

         <Sound
               url={this.state.song.song_url}
               playStatus={this.state.playStatus}
               onPlaying={this.handleSongPlaying}
               playFromPosition={this.state.playFromPosition}
               onFinishedPlaying={this.handleSongFinished.bind(this)} />
       </div>
     );
   }
}

export default SongPlayer;
