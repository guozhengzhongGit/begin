const Config = require("webpack-chain");


const config = new Config();
const mode = process.env.NODE_ENV=== 'test' ? 'production' : process.env.NODE_ENV
config.mode(mode);

const devTool = process.env.NODE_ENV === 'production' ? 'hidden-source-map' : 'cheap-module-source-map';
config.devtool(devTool);

//导出配置
module.exports = config.toConfig();
