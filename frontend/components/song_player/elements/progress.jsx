import React from 'react';

class Progress extends React.Component {

  getPercent() {
    return `${this.props.position * 100}%`;
  }

  handleClickAdjust(e) {
    let x = e.pageX;
    this.props.clickAdjust(x);
  }

  render() {
    return(
      <div className="progress">
        <span className="player-time-elapsed">{this.props.elapsed}</span>
        <progress className="progress-bar" onClick={this.handleClickAdjust.bind(this)}
           value={this.props.position}
           max="1"></progress>
         <span className="player-time-total">{this.props.total}</span>
      </div>
    );
  }

}

export default Progress;
