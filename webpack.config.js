const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    app: './src/app.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }]
      },
      {
        test: /\.(png|gif|jpg|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 50000
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx'],
    modules: ['node_modules']
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: './dist/',
    filename: 'app.js',
    libraryTarget: 'umd'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin([{ from: './node_modules/@webcomponents', to: './vendor/@webcomponents' }])
  ]
};
