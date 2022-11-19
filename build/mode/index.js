const Config = require("webpack-chain");


const config = new Config();
const mode = process.env.NODE_ENV=== 'test' ? 'production' : process.env.NODE_ENV
config.mode(mode);

//导出配置
module.exports = config.toConfig();