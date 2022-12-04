const Config = require("webpack-chain");
const { resolveAppSrc, getEntryNameArray } = require("../tools");

const config = new Config();
config.resolve.alias
  .set("@", resolveAppSrc("./"))
  .set("@components", resolveAppSrc("./components"))
  .set("@common", resolveAppSrc("./common"))
  .set("@assets", resolveAppSrc("./assets"));

// 页面别名
getEntryNameArray().forEach((page) => {
  const pageDir = resolveAppSrc(`./projects/${page}`);
  config.resolve.alias.set(`@${page}`, pageDir);
});

config.resolve.extensions
  .add('.tsx')
  .add('.ts')
  .add('.jsx')
  .add('.js')
  .add('.mjs')
  .add('.json')
  .add('.wasm')
  .end();

module.exports = config.toConfig();
