import React from 'react';
import Details from './elements/details';
import Player from './elements/player';
import Progress from './elements/progress';
import Sound from 'react-sound';
import { fetchSongs } from '../../util/song_api_util';

class SongPlayer extends React.Component {

  constructor(props) {
    super(props);

    this.handleSongPlaying = this.handleSongPlaying.bind(this);
    this.togglePlay = this.togglePlay.bind(this);
    this.stop = this.stop.bind(this);
    this.forward = this.forward.bind(this);
    this.backward = this.backward.bind(this);
    this.clickAdjust = this.clickAdjust.bind(this);
  }

  componentDidMount() {
    this.setState({$progressBar: $(".progress-bar")});
    soundManager.setup({debugMode: false});
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
    this.props.updatePlayingSong({ elapsed: this.formatMilliseconds(audio.position),
      total: this.formatMilliseconds(audio.duration),
      position: audio.position / audio.duration,
      totalSeconds: audio.duration,
      positionSeconds: audio.position
    });
  }

  handleSongFinished() {
    // let songsResponse = fetchSongs();
    // let songs = songsResponse.success
    // let song = songs[Math.floor(Math.random() * songs.length)];
    // debugger
    // this.props.playSong(song);
  }

  togglePlay() {
    if(this.props.nowPlaying.playStatus === Sound.status.PLAYING){
      this.props.updatePlayingSong({playStatus: Sound.status.PAUSED});
    } else {
      this.props.updatePlayingSong({playStatus: Sound.status.PLAYING});
    }
  }

  stop() {
   this.props.updatePlayingSong({playStatus: Sound.status.STOPPED});
  }

  forward() {
    let newSeconds = this.props.nowPlaying.positionSeconds + 10000;
    this.props.updatePlayingSong({playFromPosition: newSeconds});
  }

  backward() {
    let newSeconds = this.props.nowPlaying.positionSeconds - 10000;
    this.props.updatePlayingSong({playFromPosition: newSeconds});
  }

  clickAdjust(xPosition) {
    let barWidth = this.state.$progressBar.width();
    let leftOffset = this.state.$progressBar.offset().left;
    let ratio = (xPosition - leftOffset) / barWidth;
    let newPosition = this.props.nowPlaying.totalSeconds * ratio;
    this.props.updatePlayingSong({playFromPosition: newPosition});
  }

   render() {
     let hidden = "";
     if (this.props.nowPlaying.playStatus === Sound.status.STOPPED) {
       hidden = "hidden";
     }

     return (
       <div className="song-player animated fadeInUp" id={hidden}>

         <Player togglePlay={this.togglePlay.bind(this)}
                 stop={this.stop.bind(this)}
                 playStatus={this.props.nowPlaying.playStatus}
                 forward={this.forward.bind(this)}
                 backward={this.backward.bind(this)}
                 className="song-player-player-container"/>

         <Progress position={this.props.nowPlaying.position}
                   elapsed={this.props.nowPlaying.elapsed}
                   total={this.props.nowPlaying.total}
                   clickAdjust={this.clickAdjust.bind(this)}
                   className="song-player-progress-container"/>

                 <Details nowPlaying={this.props.nowPlaying}
                  className="song-player-details-container"/>
         <Sound
               url={this.props.nowPlaying.song.song_url}
               playStatus={this.props.nowPlaying.playStatus}
               onPlaying={this.handleSongPlaying}
               playFromPosition={this.props.nowPlaying.playFromPosition}
               onFinishedPlaying={this.handleSongFinished.bind(this)} />
       </div>
     );
   }
}

export default SongPlayer;
