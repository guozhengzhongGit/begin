const path = require("path");
const Config = require("webpack-chain");
const config = new Config();

// 配置
config.cache({
  type: "filesystem",
  cacheDirectory: path.resolve(__dirname, '../../', '.cache'),
  allowCollectingMemory: true,
});

//导出配置
module.exports = config.toConfig();
