const Config = require('webpack-chain');
const config = new Config();

config.devServer
  .hot(true)
  .allowedHosts.add('all')
  .end()
  .port(7878)
  .open('http://localhost:7878')
  .compress(false)
  .historyApiFallback({
    rewrites: [
      // { from: /^\/viewer/, to: '/viewer.html' },
      { from: /\.*/, to: '/viewer.html' },
    ]
  })
  .headers({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Headers': '*'
  })


module.exports = config.toConfig();


