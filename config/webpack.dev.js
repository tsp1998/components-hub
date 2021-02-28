const path = require('path')
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common');

const componentType = 'vanilla';

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:3100/',
  },
  devServer: {
    port: 3100,
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', 'public', 'index.html'),
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
