const Config  = require('webpack-chain');
const { getEntryNameArray, resolveAppSrc } = require('../tools');
const config = new Config;

getEntryNameArray().forEach(pageName => {
  config.entry(pageName).add(resolveAppSrc(`./projects/${pageName}/main.tsx`)).end()

})

module.exports = config.toConfig();
