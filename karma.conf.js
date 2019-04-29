/* eslint-disable import/no-extraneous-dependencies */
const createDefaultConfig = require('@open-wc/testing-karma/default-config');
const merge = require('webpack-merge');

module.exports = config => {
  config.set(
    merge(createDefaultConfig(config), {
      files: [config.grep ? config.grep : 'src/components/**/*.spec.ts'],
      exclude: ['src/**/*.d.ts'],
      preprocessors: {
        '**/*.ts': ['webpack']
      },
      webpack: {
        mode: 'development',
        resolve: {
          extensions: ['.js', '.ts', '.tsx']
        },
        module: {
          rules: [
            {
              test: /\.ts$/,
              use: ['ts-loader']
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
