import React from 'react';
import VideoComponent from 'videojs-react';

export default class Video extends React.Component {
  video = React.createRef();

  state = {};

  pause = () => {
    console.log('this behaves erratically')
    this.video.current.pause();
  };

  controls = {
    pause: () => {
      console.log('player has paused');
    },
    play: () => {
      console.log('player has proceeded');
    }
  };

  show = () => this.setState(state => ({ video: !state.video }));

  render() {
    console.log(this.video.current);
    return (]
      <VideoComponent controls={this.controls} innerRef={this.video} />
    );
  }
}
