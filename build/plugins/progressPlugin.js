const Config = require("webpack-chain");

const config = new Config();

config
  .plugin("process")
  .use(require("webpack").ProgressPlugin)
  .end();

module.exports = config.toConfig();
