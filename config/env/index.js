const fs = require('fs');
const dotenv = require('dotenv');
const path = require('path');


const devEnv = dotenv.parse(fs.readFileSync(path.resolve(__dirname, '../../.env.development'), {
  encoding: 'utf8'
}))

const productionEnv = dotenv.parse(
  fs.readFileSync(path.resolve(__dirname, '../../.env.production'), {
    encoding: 'utf8'
  })
);

const jsFilename = 'static/js/[name].[contenthash:8].bundle.js';
const cssFilename = 'static/css/[name].[contenthash:8].bundle.css';

module.exports = {
  development: {
    filename: '[name].bundle.js',
    cssFilename: '[name].bundle.css',
    ...devEnv,
  },
  production: {
    filename: jsFilename,
    cssFilename: cssFilename,
    ...productionEnv,
  }
}
