#Meteor-modernizr#

Use modernizr in your Meteor app.
Plugin gives you ability to generate custom Modernizr builds.

To use it just add, a config.modernizr.json to your project.
Example:

```
  {
    "feature-detects": [
      "video",
      "video/autoplay",
      "video/loop",
      "video/preload",
      "webrtc/datachannel",
      "webrtc/getusermedia",
      "webrtc/peerconnection"
    ]
  }
```

See [lib/config-all.json](www.github.com) for all available options.

The main difference from similiar plugins 
is that it not just wrap modernizr js file, it generate it using your config file.
