/* eslint-disable import/no-extraneous-dependencies */
const createDefaultConfig = require('@open-wc/testing-karma/default-config');
const merge = require('webpack-merge');
const path = require('path');

module.exports = config => {
  config.set(
    merge(createDefaultConfig(config), {
      files: [config.grep ? config.grep : 'src/components/**/*.spec.ts'],
      colors: true,
      exclude: ['src/**/*.d.ts'],
      preprocessors: {
        '**/*.ts': ['webpack']
      },
      coverageIstanbulReporter: {
        reports: ['html', 'text-summary'],
        dir: path.join(__dirname, 'coverage'),
        fixWebpackSourcePaths: true,
        'report-config': {
          html: { outdir: 'html' }
        }
      },
      webpackMiddleware: {
        stats: 'errors-only'
      },
      webpack: {
        mode: 'development',
        devtool: 'inline-source-map',
        resolve: {
          extensions: ['.js', '.ts', '.tsx']
        },
        module: {
          rules: [
            {
              test: /\.ts$/,
              use: [
                {
                  loader: 'istanbul-instrumenter-loader'
                },
                {
                  loader: 'ts-loader',
                  options: {
                    transpileOnly: true,
                    compilerOptions: {
                      module: 'commonjs',
                      sourceMap: true
                    }
                  }
                }
              ]
            },
            {
              test: /\.(gif|png|jpe?g|svg)$/i,
              use: ['url-loader']
            }
          ]
        }
      }
    })
  );
  return config;
};
