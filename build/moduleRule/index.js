const cssRuleUse = require('./cssRule');
const lessRuleUse = require('./lessRule');
const lessModuleRuleUse = require('./lessModuleRule');


const webpackConfig = () => {
  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: cssRuleUse,
        },
        {
          test: /\.less$/,
          exclude: /\.module\.less$/,
          use: lessRuleUse,
        },
        {
          test: /\.module\.less$/,
          use: lessModuleRuleUse,
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
