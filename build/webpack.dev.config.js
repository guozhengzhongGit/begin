// 开发环境配置
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.config.js");
// const devServer = require("./devServer");
// const cache = require("./cache");

console.log("***********开发具体配置***********");

module.exports = merge(baseConfig);
