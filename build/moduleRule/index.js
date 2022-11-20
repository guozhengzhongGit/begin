// const { isDevelopment } = require('../tools');
const cssRuleUse = require('./cssRule');
// const isProd = !isDevelopment();

const webpackConfig = () => {
  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: cssRuleUse,
        },
        {
          test: /\.t|jsx?$/,
          use: {
            loader: 'babel-loader',
          },
          exclude: /(node_modules)/,
        },
        {
          test: /\.txt$/i,
          use: 'raw-loader',
        },
        {
          test: /\.(jpe?g|png|gif)$/i,
          type: 'asset',
        },
        {
          test: /\.svg$/i,
          use: 'file-loader',
        },
      ],
    },
  };
};
module.exports = webpackConfig();
