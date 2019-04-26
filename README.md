# `videojs-youtube-react`

A single exportable component which sets up a video JS file which is capable of handling Youtube videos amongst all video js formats.

For most purposes please follow the documentation at:
https://videojs.com/
https://github.com/videojs/videojs-youtube

## Docs

Largely based off of https://github.com/videojs/videojs-youtube/issues/413, the implementation (which is very short) contains default props which should hopefully provide you with an idea of what to add on.

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
