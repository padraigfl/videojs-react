import React from 'react';
import videojs from 'video.js';
import 'videojs-youtube';

class VideoPlayer extends React.Component {
  static defaultProps = {
    id: 'vid1',
    className: 'video-js vjs-default-skin',
    width: '640',
    height: '264',
    videoRef: React.createRef(),
    setup: {
      techOrder: ['youtube'],
      sources: [
        {
          type: 'video/youtube',
          src: 'https://www.youtube.com/watch?v=TeccAtqd5K8'
        }
      ]
    }
  };

  videoNode = this.videoNode || React.createRef();

  componentDidMount() {
    // instantiate Video.js
    this.player = videojs(
      this.videoNode.current,
      this.props.dataSetup,
      this.props.onReadyCheck ? () => this.props.onReadyCheck(this) : undefined
    );
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  // wrap the player in a div with a `data-vjs-player` attribute
  // so videojs won't create additional wrapper in the DOM
  // see https://github.com/videojs/video.js/pull/3856
  render() {
    const { setup, onReadyCheck, innerRef, ...rest } = this.props;
    return (
      <div data-vjs-player>
        <video {...rest} ref={this.videoNode} />
      </div>
    );
  }
}

const Video = React.forwardRef((props, ref) => (
  <VideoPlayer innerRef={ref} {...props} />
));

export default Video;
