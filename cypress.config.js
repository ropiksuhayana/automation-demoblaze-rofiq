const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

// const { defineConfig } = require('cypress');
// const webpack = require('@cypress/webpack-preprocessor');
// const webpackConfig = require('./webpack.config');

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       on('file:preprocessor', webpack({ webpackOptions: webpackConfig }));
//     },
//   },
// });

