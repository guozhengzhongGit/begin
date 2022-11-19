const Config = require("webpack-chain");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { getEntryNameArray, resolveAppSrc } = require("../tools");

const config = new Config();

// 遍历pages文件夹 生成页面入口
console.log('getEntryNameArray', getEntryNameArray());
getEntryNameArray().forEach((page) => {
  config
    .plugin(`html-${page}`)
    .use(HtmlWebpackPlugin, [
      {
        title: page,
        scriptLoading: "defer",
        template: resolveAppSrc(`./pages/${page}/index.html`),
        filename: `${page}.html`,
        // scriptSrcs:['https://lib.baomitu.com/mobx/6.6.1/mobx.umd.production.min.js'],
        chunks: [page, "vendor", "common"], // 代码分割 "vendor", "common"
      },
    ])
    .end();
});

module.exports = config.toConfig();
