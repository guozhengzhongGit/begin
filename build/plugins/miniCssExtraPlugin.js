const Config = require('webpack-chain');
const { isDevelopment } = require('../tools');
const env = require('../../config/env');

const config = new Config();

// 生产环境提取css
const { cssFilename } = env[process.env.NODE_ENV];
console.log('[ isDevelopment ] >', isDevelopment());
config.when(!isDevelopment(), (config) =>
  config.plugin('extract-css').use(require('mini-css-extract-plugin'), [
    {
      filename: cssFilename,
      chunkFilename: cssFilename
    }
  ])
);

module.exports = config.toConfig();
