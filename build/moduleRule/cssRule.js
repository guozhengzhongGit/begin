const { isDevelopment } = require('../tools');
const isProd = !isDevelopment();
const cssRuleUse = [
  {
    loader: 'style-loader',
    options: {},
  },
  {
    loader: 'css-loader',
    options: {},
  },
  {
    loader: 'postcss-loader',
    options: {
      sourceMap: true,
      postcssOptions: {
        plugins: ['autoprefixer'],
      },
    },
  },
];
let res;
if (isProd) {
  const extractCssLoader = {
    loader: require('mini-css-extract-plugin').loader,
  };
  res = cssRuleUse.filter((rule) => rule.loader !== 'style-loader');
  res.unshift(extractCssLoader);
} else {
  res = cssRuleUse;
}

module.exports = res;
