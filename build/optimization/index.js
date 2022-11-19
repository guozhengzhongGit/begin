const Config = require('webpack-chain');
const { isDevelopment, hasMultipleCores } = require('../tools');

const config = new Config();

const isProd = !isDevelopment();
config.when(!isProd, (config) => config.optimization.minimize(false));
config.when(isProd, (config) => config.optimization.minimize(true));


config.optimization
  // 代码分割
  .splitChunks({
    chunks: 'all',
    // 缓存分组
    cacheGroups: {
      // 第三方模块
      vendor: {
        name: 'vendor', // chunk 名称
        priority: 1, // 权限更高，优先抽离，重要！！！
        test: /node_modules/,
        minSize: 0, // 大小限制
        minChunks: 1 // 最少复用过几次
      },
      // 公共的模块
      common: {
        name: 'common', // chunk 名称
        priority: 0, // 优先级
        minSize: 0, // 公共模块的大小限制
        minChunks: 2 // 公共模块最少复用过几次
      }
    }
  })
  .end();

// 生产环境压缩css
// 压缩提取的代码
const parallel = hasMultipleCores();
config.when(isProd, (config) => {
  config.optimization
    .minimizer('css')
    .use(require('css-minimizer-webpack-plugin'), [
      {
        parallel,
        minimizerOptions: {
          preset: [
            'default',
            {
              mergeLonghand: false,
              cssDeclarationSorter: false,
              map: { inline: false }
            }
          ]
        }
      }
    ]);
});
//导出配置
module.exports = config.toConfig();