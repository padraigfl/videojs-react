import React from 'react';

class VideoPlayer extends React.Component {
  static defaultProps = {
    id: 'vid1',
    className: 'video-js vjs-default-skin',
    width: '640',
    height: '360',
    setup: {
      techOrder: ['youtube'],
      sources: [
        {
          type: 'video/youtube',
          src: 'https://www.youtube.com/watch?v=TeccAtqd5K8'
        }
      ]
    },
    innerRef: React.createRef()
  };

  videoNode = this.props.innerRef;

  actions = {};

  /* TODO
   * Fallbacks do not currently work
   * videojs-youtube defaults to a different version of video.js than imported
   */
  componentDidMount() {
    if (videojs) {
      this.instantiate();
    } else if (!videojs.getTech('youtube')) {
      this.youtubeFallback();
    } else {
      this.videoJsFallback();
    }
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  videoJsFallback = () => import('video.js').then(this.youtubeFallback);

  youtubeFallback = () => {
    if (this.props.youtube || this.props.setup.techOrder.find(tech => tech.toLowerCase === 'youtube')) {
      import('videojs-youtube').then(() => {
        this.instantiate();
      });
    }
  };

  instantiate = () => {
    this.player = videojs(
      this.videoNode.current,
      this.props.setup,
      this.props.onReadyCheck ? () => this.props.onReadyCheck(this) : undefined
    );
    Object.keys(this.props.controls).forEach(key => {
      this.player.on([key], this.props.controls[key]);
    });
  };

  // wrap the player in a div with a `data-vjs-player` attribute
  // so videojs won't create additional wrapper in the DOM
  // see https://github.com/videojs/video.js/pull/3856
  render() {
    const { setup, onReadyCheck, innerRef, controls, ...rest } = this.props;
    return (
      <div data-vjs-player>
        <video
          className="video-js"
          controls
          preload="auto"
          {...rest}
          ref={this.videoNode}
        />
      </div>
    );
  }
}

export default VideoPlayer;
