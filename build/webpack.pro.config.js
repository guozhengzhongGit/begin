const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.config.js");

console.log("***********开发具体配置***********");

module.exports = merge(baseConfig);
