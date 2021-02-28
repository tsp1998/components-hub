const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

const DOMAIN = 'https://component-lib-and-utils.netlify.app';

const componentType = 'vanilla';

const prodConfig = {
  entry: {
    main: path.resolve(__dirname, '..', 'src', componentType, 'index.js')
  },
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: DOMAIN,
  }
};

module.exports = merge(commonConfig, prodConfig);
