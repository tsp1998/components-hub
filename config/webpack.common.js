const path = require('path')
const { ModuleFederationPlugin } = require('webpack').container;
const packageJson = require('../package.json');

const componentType = 'vanilla';
const components = ['Button'];

const exposes = components.reduce((acc, curr) => {
  const key = `./${curr}`;
  return {
    ...acc,
    [key]: `./src/${componentType}/components/${curr}/index.js`
  }
}, {})

console.log('exposes', exposes)

module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
      {
        test: /\.(s[ac]ss|css)$/i,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        exclude: /node_modules/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      },
      {
        test: /\.(html)$/,
        exclude: /node_modules/,
        loader: 'html-loader',
        options: {
          esModule: false,
        }
      }
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'ComponentLibraryAndUtils',
      filename: 'remoteEntry.js',
      exposes,
      shared: packageJson.dependencies,
    }),
  ]
};
