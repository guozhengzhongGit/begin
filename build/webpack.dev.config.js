// 开发环境配置
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');
const devServer = require("./devServer");
const cache = require('./cache');

module.exports = merge(baseConfig, cache, devServer);
