# `videojs-react`

A single exportable component which sets up a video JS file which is capable of handling Youtube videos amongst all video js formats. Youtube video support is an optional inclusion via videojs-youtube but erratic.

For most purposes please follow the documentation at:
https://videojs.com/
https://github.com/videojs/videojs-youtube

## Docs

Largely based off of https://github.com/videojs/videojs-youtube/issues/413, the implementation (which is very short) contains default props which should hopefully provide you with an idea of what to add on.

I designed this package to work with [this project](https://github.com/padraigfl/videojs-react-course-assistant) so some implementation example work can be derived from it.

### Setup

Rather than forcing you to include the full videojs code in your bundle, I've ommitted it entirely here and the inclusion of it (cdn or as node module) is up to you, once the component can pick up a videojs global on mount.

#### CDN

Place the following into the head of your html

```
  <script src="https://vjs.zencdn.net/7.5.4/video.js"></script>
  <script
    src="https://cdnjs.cloudflare.com/ajax/libs/videojs-youtube/2.6.0/Youtube.min.js"
    integrity="sha256-YJbYbf82My5W9mjSfNyUOnnhafQPNI/3b0wt3rFL/es="
    crossorigin="anonymous"
  ></script>
```

To use default videojs styles you must still import their CSS files.

...and you should hopefully have something! There is a check built in to make sure but it is quite primitive.

#### Node Module

`npm install --save video.js` or `npm install --save videojs-youtube` will hopefully work. Installing both leads to a versions clash as the youtube package includes videojs as a dependency.

As far as controlling the videojs component is concerned, you should be able to do this via the ref value you pass in as a prop following the standard videojs API.

The props I've so far taken note of are:

```
  id
  className
  width
  height
  setup: { // same as the data-setup on in documentation (but a JS object), only used on mount
    techOrder
    sources: [
      {
        type
        src
      }
    ]
  }
  onReadyCheck // function to call following successful mount, accepts `this`, only used on mount
```

Extra ones I've added in away from any existing documentation I've seen are

```
  innerRef // to allow access to the DOM for the component from the outside
  accessVideo // passes the video object out to wherever for manipulation
  youtube // boolean to let the component know if youtube compatibility is to be assured
```

All props without comments (including unspecified ones) are passed directly into the videojs tag

## Example

See example implementation in the https://github.com/padraigfl/videojs-react-course-assistant and play around with it
