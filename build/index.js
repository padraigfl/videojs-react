(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
  typeof define === 'function' && define.amd ? define(['react'], factory) :
  (global = global || self, global['videojs-react'] = factory(global.React));
}(this, function (React) { 'use strict';

  React = React && React.hasOwnProperty('default') ? React['default'] : React;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  var VideoPlayer =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(VideoPlayer, _React$Component);

    function VideoPlayer() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, VideoPlayer);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(VideoPlayer)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "videoNode", _this.props.innerRef);

      _defineProperty(_assertThisInitialized(_this), "actions", {});

      _defineProperty(_assertThisInitialized(_this), "needsYoutube", function () {
        return _this.props.youtube || _this.props.setup.techOrder.find(function (tech) {
          return tech.toLowerCase === 'youtube';
        });
      });

      _defineProperty(_assertThisInitialized(_this), "hasYoutube", function () {
        return videojs && videojs.getTech('youtube');
      });

      _defineProperty(_assertThisInitialized(_this), "instantiate", function () {
        _this.player = videojs(_this.videoNode.current, _this.props.setup, _this.props.onReadyCheck ? function () {
          return _this.props.onReadyCheck(_assertThisInitialized(_this));
        } : undefined);

        _this.mapControls();
      });

      _defineProperty(_assertThisInitialized(_this), "mapControls", function () {
        Object.keys(_this.props.controls).forEach(function (key) {
          _this.player.on([key], _this.props.controls[key]);
        });
      });

      return _this;
    }

    _createClass(VideoPlayer, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        if (!videojs) {
          this.setState({
            noVideoJs: 'videojs'
          });
        } else if (this.needsYoutube() && !this.hasYoutube()) {
          this.setState({
            noVideoJs: 'youtube'
          });
        } else {
          this.instantiate();
        }
      } // destroy player on unmount

    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (this.player) {
          this.player.dispose();
        }
      }
    }, {
      key: "render",
      // wrap the player in a div with a `data-vjs-player` attribute
      // so videojs won't create additional wrapper in the DOM
      // see https://github.com/videojs/video.js/pull/3856
      value: function render() {
        var _this$props = this.props,
            setup = _this$props.setup,
            onReadyCheck = _this$props.onReadyCheck,
            innerRef = _this$props.innerRef,
            controls = _this$props.controls,
            rest = _objectWithoutProperties(_this$props, ["setup", "onReadyCheck", "innerRef", "controls"]);

        return React.createElement("div", {
          "data-vjs-player": true
        }, React.createElement("video", _extends({
          className: "video-js",
          controls: true,
          preload: "auto"
        }, rest, {
          ref: this.videoNode
        })));
      }
    }]);

    return VideoPlayer;
  }(React.Component);

  _defineProperty(VideoPlayer, "defaultProps", {
    id: 'vid1',
    className: 'video-js vjs-default-skin',
    width: '640',
    height: '360',
    setup: {
      techOrder: ['youtube'],
      sources: [{
        type: 'video/youtube',
        src: 'https://www.youtube.com/watch?v=TeccAtqd5K8'
      }]
    },
    innerRef: React.createRef()
  });

  return VideoPlayer;

}));
//# sourceMappingURL=index.js.map
