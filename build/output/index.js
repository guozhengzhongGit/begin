const Config = require("webpack-chain");
const { resolveApp } = require("../tools");
const env = require('../../config/env');


const config = new Config();

const { filename } = env[process.env.NODE_ENV];

// 配置
config.output
  .hashFunction("xxhash64")
  .path(resolveApp("./dist"))
  .filename(filename)
  .chunkFilename(filename)
  .crossOriginLoading("anonymous");

//导出配置
module.exports = config.toConfig();