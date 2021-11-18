const path = require('path')
const { ModuleFederationPlugin } = require('webpack').container;
const packageJson = require('../package.json');

const components = {
  react: ['Input'],
  vanilla: ['Button']
}

function getComponentPath(componentType, componentName) {
  switch(componentType) {
    case 'vanilla': {
      return `./src/${componentType}/components/${componentName}/index.js`;
    };
    case 'react': {
      return `./src/${componentType}/components/${componentName}/${componentName}.js`;
    };
  }
}

const exposes = Object.keys(components).reduce((acc, componentType) => {

  const componentsPaths = components[componentType].reduce((acc, componentName) => {
    const key = `./${componentName}`;
    return {
      ...acc,
      [key]: getComponentPath(componentType, componentName)
    }
  }, {})

  return {
    ...acc,
    ...componentsPaths
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
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
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
