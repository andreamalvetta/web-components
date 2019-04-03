const { commonConfig, polyfills, INDEX_TEMPLATE, OUTPUT_PATH } = require('./webpack.common');
const { resolve } = require('path');
const merge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const developmentConfig = merge([
  {
    devtool: 'cheap-module-source-map',
    plugins: [
      new CopyWebpackPlugin(polyfills),
      new HtmlWebpackPlugin({
        template: INDEX_TEMPLATE,
        filename: resolve(OUTPUT_PATH, 'index.html')
      })
    ],
    devServer: {
      contentBase: OUTPUT_PATH,
      compress: true,
      overlay: true,
      port: 5000,
      host: 'localhost',
      historyApiFallback: true,
      disableHostCheck: true,
      proxy: {
        '/api': 'http://localhost:8000'
      }
    }
  }
]);

module.exports = mode => {
  return merge(commonConfig, developmentConfig, { mode });
};
