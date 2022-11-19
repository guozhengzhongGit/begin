const Config = require("webpack-chain");

// 初始化config
const config = new Config();

// config
  // 开发环境&生产环境
  // .externals(["mobx"])
module.exports = config.toConfig();
