const { merge } = require('webpack-merge');
const webpack = require('webpack');

const entry = require('./entry');
const mode = require('./mode');
const output = require('./output');
const plugins = require('./plugins');
const resolve = require('./resolve');
const externals = require('./externals');
const experiments = require('./experiments');
const _module = require('./moduleRule');


const config = merge({
  target: 'web',
  plugins: [
    new webpack.EnvironmentPlugin({
      // 'REACT_APP_BASE_URL': env[process.env.NODE_ENV].REACT_APP_BASE_URL,
      'NODE_ENV':process.env.NODE_ENV
    }),
  ],
},
entry,
mode,
output,
plugins,
resolve,
externals,
experiments,
_module,
);

module.exports = config;

