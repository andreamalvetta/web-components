/* eslint-disable import/no-extraneous-dependencies */
const createDefaultConfig = require('@open-wc/testing-karma/default-config');
const merge = require('webpack-merge');

module.exports = config => {
  config.set(
    merge(createDefaultConfig(config), {
      frameworks: ['mocha', 'karma-typescript'],
      files: [
        // runs all files ending with .test in the test folder,
        // can be overwritten by passing a --grep flag. examples:
        //
        // npm run test -- --grep test/foo/bar.test.js
        // npm run test -- --grep test/bar/*
        './src/components/**/*.ts',
        config.grep ? config.grep : 'test/**/*.test.js'
      ],

      // you can overwrite/extend the config further
      exclude: ['./src/components/**/*.d.ts'],
      preprocessors: {
        './src/components/**/*.ts': ['karma-typescript']
      },
      reporters: ['karma-typescript'],
      karmaTypescriptConfig: {
        compilerOptions: {
          emitDecoratorMetadata: true,
          experimentalDecorators: true,
          module: 'commonjs',
          sourceMap: true,
          target: 'ES5'
        },
        bundlerOptions: {
          transforms: [
            require('karma-typescript-es6-transform')({
              presets: ['env']
            })
          ]
        },
        exclude: ['node_modules'],
        // tsconfig: './tsconfig.json',
        transformPath: function(path) {
          return path.replace(/\.ts$/, '.js');
        }
      },
      browsers: ['ChromeHeadless']
    })
  );
  return config;
};
