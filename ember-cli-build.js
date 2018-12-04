'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
    fingerprint: {
      enabled: true,
      exclude: ['api/v2/**/*'],
      ignore: ['api/v2/**/*']
    },
    'ember-cli-uglify': {
      enabled: true,
      exclude: ['api/v2/**/*'],
        uglify: {
        compress: {
          sequences: 50,
        },
        output: {
          semicolons: true,
        },
      },
    },
    minifyCSS: {
      enabled: true,
      options: { }
    },
    minifyHTML: {
      enabled: true,
      htmlFiles: ['index.html'],
      minifierOptions: {
        collapseWhitespace: true,
        removeComments: true,
        minifyJS: true,
        minifyCSS: true
      }
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.
  app.import('vendor/GeoJSON.js');
  app.import('vendor/infobox.js');
  app.import('vendor/ix_map.js');
  app.import('node_modules/jquery-ui-dist/jquery-ui.css');
  app.import('node_modules/jquery-ui-dist/jquery-ui.js');
  return app.toTree();
};
