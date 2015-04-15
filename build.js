/**
 * Created by Aleh_Atsman on 4/15/2015.
 */
var modernizr = Npm.require('modernizr');

/**
 * Build modernize lib, using config.
 * @param config - modernizr config
 * @param callback - handles build result
 */
function build(config, callback) {
  try {
    buildModernizr(config, callback);
  } catch(err) {
    callback(err);
  }
}

function buildModernizr(config, callback) {
  if(!buildModernizr.cache) {
    modernizr.build(config, function (result) {
      buildModernizr.cache = result;
      console.log('=> Modernizr - building new file');
      callback(null, buildModernizr.cache);
    });
  } else {
    console.log('=> Modernizr - getting from cache');
    callback(null, buildModernizr.cache);
  }
}

/**
 Gets content of config file and parse it to json string.
 */
function processConfig(compileStep) {
  var content = compileStep.read().toString('utf8');
  return JSON.parse(content);
}

function sourceHandler(compileStep) {
  var config = processConfig(compileStep);
  build(config, function(err, content) {
    if(err) {
      compileStep.error({
        message: '=> Modernize, syntax error in ' + compileStep.inputPath,
        line: err.line,
        column: err.column
      });
    } else {
      compileStep.addJavaScript({
        path: compileStep.inputPath + '.js',
        sourcePath: compileStep.inputPath,
        data: content
      });
    }
  });
}

Plugin.registerSourceHandler('modernizr.json', sourceHandler);

