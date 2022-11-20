const { merge } = require('webpack-merge');

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const HtmlWebpackPlugin = require('./htmlWebpackPlugin');
const ProgressPlugin = require('./progressPlugin');
const MiniCssExtractPlugin = require('./miniCssExtraPlugin');

module.exports = merge(
  {
    plugins: [
      process.env.NODE_ENV === 'development' && new CaseSensitivePathsPlugin(),
      process.env.NODE_ENV === 'development' && new ReactRefreshWebpackPlugin(),
    ].filter(Boolean),
  },
  ProgressPlugin,
  HtmlWebpackPlugin,
  MiniCssExtractPlugin
);
