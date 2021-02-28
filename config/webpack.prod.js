const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

const DOMAIN = 'https://component-lib-and-utils.netlify.app';

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: DOMAIN,
  }
};

module.exports = merge(commonConfig, prodConfig);
