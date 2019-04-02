const {
  commonConfig,
  polyfills,
  helpers,
  assets,
  ROOT_DIR,
  INDEX_TEMPLATE,
  OUTPUT_PATH,
  ANALYZE
} = require('./webpack.common');
const { resolve } = require('path');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { InjectManifest } = require('workbox-webpack-plugin');

const analyzeConfig = ANALYZE ? [new BundleAnalyzerPlugin()] : [];

const productionConfig = merge([
  {
    devtool: 'nosources-source-map',
    optimization: {
      minimizer: [
        new TerserWebpackPlugin({
          terserOptions: {
            output: {
              comments: false
            }
          },
          sourceMap: true,
          parallel: true
        })
      ]
    },
    plugins: [
      new CleanWebpackPlugin({ verbose: true }),
      new CopyWebpackPlugin([...polyfills, ...helpers, ...assets]),
      new HtmlWebpackPlugin({
        template: INDEX_TEMPLATE,
        minify: {
          collapseWhitespace: true,
          removeComments: true,
          minifyCSS: true,
          minifyJS: true
        }
      }),
      new InjectManifest({
        swSrc: resolve(ROOT_DIR, 'src', 'service-worker.js'),
        swDest: resolve(OUTPUT_PATH, 'sw.js'),
        exclude: [/.*\.map$/, /.*\/webcomponents-(?!loader).*\.js$/, /.*\.es5\..*\.js$/]
      }),
      new CompressionPlugin({
        filename: '[path].gz[query]',
        test: /\.js(\.map)?$/i,
        algorithm: 'gzip',
        threshold: 20,
        minRatio: 0.8
      }),
      new CompressionPlugin({
        filename: '[path].br[query]',
        test: /\.js(\.map)?$/i,
        algorithm: 'brotliCompress',
        threshold: 20,
        minRatio: 0.8,
        deleteOriginalAssets: false
      }),
      ...analyzeConfig
    ]
  }
]);

module.exports = mode => {
  return merge(commonConfig, productionConfig, { mode });
};
