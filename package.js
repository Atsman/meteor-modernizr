Package.describe({
  name: 'atsman:modernizr',
  version: '0.0.5',
  summary: 'Use modernizr in your meteor project',
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