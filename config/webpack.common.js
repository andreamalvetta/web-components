const { resolve, join } = require('path');
const merge = require('webpack-merge');
const { BabelMultiTargetPlugin } = require('webpack-babel-multi-target-plugin');
const helperWhitelist = require('../src/utils/helper-whitelist');
const helperWhitelistModern = require('../src/utils/helper-whitelist-modern');

const ROOT_DIR = resolve(__dirname, '../');
const ENV = process.argv.find(arg => arg.includes('production')) ? 'production' : 'development';
const ANALYZE = process.argv.find(arg => arg.includes('--analyze'));
const OUTPUT_PATH = ENV === 'production' ? resolve(ROOT_DIR, 'dist') : resolve(ROOT_DIR, 'src');
const INDEX_TEMPLATE = resolve(ROOT_DIR, 'src/index.html');

const webcomponentsjs = 'node_modules/@webcomponents/webcomponentsjs';

const polyfills = [
  {
    from: resolve(ROOT_DIR, `${webcomponentsjs}/webcomponents-*.{js,map}`),
    to: join(OUTPUT_PATH, 'vendor'),
    flatten: true
  },
  {
    from: resolve(ROOT_DIR, `${webcomponentsjs}/bundles/*.{js,map}`),
    to: join(OUTPUT_PATH, 'vendor', 'bundles'),
    flatten: true
  }
];

const helpers = [
  {
    from: resolve(ROOT_DIR, 'src/vendor/*.js'),
    to: join(OUTPUT_PATH, 'vendor'),
    flatten: true
  }
];

const assets = [
  {
    from: resolve(ROOT_DIR, 'src/assets'),
    to: join(OUTPUT_PATH, 'assets')
  },
  {
    from: resolve(ROOT_DIR, 'src/favicon.ico'),
    to: OUTPUT_PATH
  },
  {
    from: resolve(ROOT_DIR, 'src/manifest.json'),
    to: OUTPUT_PATH
  }
];

const commonConfig = merge([
  {
    entry: resolve(ROOT_DIR, 'src/app.js'),
    output: {
      path: OUTPUT_PATH,
      filename: '[name].[chunkhash:8].js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: [BabelMultiTargetPlugin.loader()]
        }
      ]
    },
    plugins: [
      // Babel configuration for multiple output bundles targeting different sets
      // of browsers
      new BabelMultiTargetPlugin({
        babel: {
          plugins: [
            [
              require('@babel/plugin-external-helpers'),
              {
                whitelist: [...helperWhitelist, ...helperWhitelistModern]
              }
            ],

            // Minify HTML and CSS in tagged template literals
            [
              require('babel-plugin-template-html-minifier'),
              {
                modules: {
                  'lit-html': ['html'],
                  'lit-element': ['html', { name: 'css', encapsulation: 'style' }],
                  'choo/html': [null],
                  hyperhtml: [{ name: 'bind', type: 'factory' }],
                  'hyperhtml-element': [{ name: null, member: 'html' }]
                },
                htmlMinifier: {
                  collapseWhitespace: true,
                  minifyCSS: true
                }
              }
            ]
          ],

          // @babel/preset-env options common for all bundles
          presetOptions: {
            // Don’t add polyfills, they are provided from webcomponents-loader.js
            useBuiltIns: false,
            debug: true
          }
        },

        // Modules excluded from targeting into different bundles
        doNotTarget: [
          // Array of RegExp patterns
        ],

        // Modules that should not be transpiled
        exclude: [
          // Array of RegExp patterns
        ],

        // Fix for `nomodule` attribute to work correctly in Safari 10.1
        safari10NoModuleFix: 'inline-data-base64',

        // Target browsers with and without ES modules support
        targets: {
          es6: {
            browsers: ['Chrome >= 60', 'Safari >= 10.1', 'iOS >= 10.3', 'Firefox >= 54', 'Edge >= 15'],
            tagAssetsWithKey: false, // don’t append a suffix to the file name
            esModule: true // marks the bundle used with <script type="module">
          },
          es5: {
            browsers: [
              'defaults' // > 0.5%, last 2 versions, Firefox ESR, not dead
            ],
            tagAssetsWithKey: true, // append a suffix to the file name
            noModule: true // marks the bundle included without `type="module"`
          }
        }
      })
    ]
  }
]);

module.exports = {
  commonConfig,
  polyfills,
  helpers,
  assets,
  ROOT_DIR,
  ANALYZE,
  OUTPUT_PATH,
  INDEX_TEMPLATE
};
