# `videojs-react`

A single exportable component which sets up a video JS file which is capable of handling Youtube videos amongst all video js formats. Youtube video support is an optional inclusion but erratic.

For most purposes please follow the documentation at:
https://videojs.com/
https://github.com/videojs/videojs-youtube

## Docs

Largely based off of https://github.com/videojs/videojs-youtube/issues/413, the implementation (which is very short) contains default props which should hopefully provide you with an idea of what to add on.

### Setup

**CDN FALLBACKS MEAN THIS IS AN ESMODULES PACKAGE AND REQUIRES DYNAMIC LOADING**

Currently the CDN fallbacks for video.js and videojs-youtube appear to be erratic as the latter may not use the same version of video.js automatically. I'll hopefully get back to this, or at least set it up so it works okay as a fallback if non-youtube videos are used.

Place the following into the head of your html

```
  <script src="https://vjs.zencdn.net/7.5.4/video.js"></script>
  <script
    src="https://cdnjs.cloudflare.com/ajax/libs/videojs-youtube/2.6.0/Youtube.min.js"
    integrity="sha256-YJbYbf82My5W9mjSfNyUOnnhafQPNI/3b0wt3rFL/es="
    crossorigin="anonymous"
  ></script>
```

...and you should hopefully have something!


As far as controlling the videojs component is concerned, you should be able to do this via the ref value you pass in as a prop following the standard videojs API.

The props I've so far taken note of are:

```
    id
    className
    width
    height
    ref
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

All props without comments are passed directly into the videojs tag

To use default videojs styles you must still import their CSS files.

## Todo

Handle videojs importing as a fallback
