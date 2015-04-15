#Meteor-modernizr#

Use modernizr in your Meteor app.
This plugin, build modernizr using your config on build stage.

To use just add, a config.modernizr.json to your project.
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

For more information about modernizr configuration [visit!](www.github.com) 

Build plugin, which search for .modernizr.json config file
and build custom version of modernize.

The main difference from similiar plugins 
is that it not just wrap modernizr, it build it dynamicly.
