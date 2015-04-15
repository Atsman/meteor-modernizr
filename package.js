Package.describe({
  name: 'meteor-modernizr',
  version: '0.0.1',
  summary: '',
  git: 'https://github.com/Atsman/meteor-modernizr.git',
  documentation: 'README.md'
});

Package.registerBuildPlugin({
  name: 'meteor-modernizr',
  use: [],
  sources: [
    'build.js'
  ],
  npmDependencies: {
    'modernizr': '3.0.0-alpha.3'
  }
});