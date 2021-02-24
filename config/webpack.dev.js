const path = require('path')
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:3100/',
  },
  devServer: {
    port: 3100,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(s[ac])?ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'ComponentLibraryAndUtils',
      filename: 'remoteEntry.js',
      exposes: {
        './Button': path.resolve(__dirname, '..', 'src', 'components', 'button', 'Button'),
      },
      shared: packageJson.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', 'public', 'index.html'),
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
