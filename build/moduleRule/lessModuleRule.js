const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');
const { isDevelopment } = require('../tools');
const isProd = !isDevelopment();
const lessRuleUse = [
    {
        loader: 'style-loader',
        options: {},
    },
    {
        loader: 'css-loader',
        options: {
            modules:{getLocalIdent:getCSSModuleLocalIdent}
        },
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
    {
        loader: 'less-loader',
        options: {},
    },
];
let res;
if (isProd) {
    const extractCssLoader = {
        loader: require('mini-css-extract-plugin').loader,
    };
    res = lessRuleUse.filter((rule) => rule.loader !== 'style-loader');
    res.unshift(extractCssLoader);
} else {
    res = lessRuleUse;
}

module.exports = res;
