const { commonConfig, polyfills, helpers, assets, ROOT_DIR, INDEX_TEMPLATE, OUTPUT_PATH } = require('./webpack.common');
const { resolve } = require('path');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const { InjectManifest } = require('workbox-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const Critters = require('critters-webpack-plugin');

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
        }),
        new OptimizeCSSAssetsPlugin({})
      ]
    },
    plugins: [
      new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns: [resolve(OUTPUT_PATH)], verbose: true }),
      new CopyWebpackPlugin([...polyfills, ...helpers, ...assets]),
      new HtmlWebpackPlugin({
        template: INDEX_TEMPLATE,
        filename: resolve(OUTPUT_PATH, 'index.html'),
        inject: 'head',
        minify: {
          collapseWhitespace: true,
          removeComments: true,
          minifyCSS: true,
          minifyJS: true
        }
      }),
      new ScriptExtHtmlWebpackPlugin({
        defaultAttribute: 'defer'
      }),
      new InjectManifest({
        swSrc: resolve(ROOT_DIR, 'src', 'service-worker.js'),
        swDest: resolve(OUTPUT_PATH, 'sw.js'),
        exclude: [/.*\.map$/, /.*\/webcomponents-(?!loader).*\.js$/, /.*\.es5\..*\.js$/]
      }),
      new Critters({
        preload: 'swap',
        preloadFonts: true,
        noscriptFallback: true,
        inlineFonts: true
      }),
      new CompressionPlugin({
        filename: '[path].gz[query]',
        test: /\.(js|css|html|svg|map|ico)$/,
        algorithm: 'gzip',
        threshold: 20,
        minRatio: 0.8
      }),
      new CompressionPlugin({
        filename: '[path].br[query]',
        test: /\.(js|css|html|svg|map|ico)$/,
        compressionOptions: { level: 11 },
        algorithm: 'brotliCompress',
        threshold: 20,
        minRatio: 0.8,
        deleteOriginalAssets: false
      })
    ]
  }
]);

module.exports = mode => {
  return merge(commonConfig, productionConfig, { mode });
};
