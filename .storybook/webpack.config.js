const path = require('path');

module.exports = async ({ config, mode }) => {
  config.resolve.extensions = ['.ts', '.js', '.json', '.css', '.scss', '.sass'];

  config.module.rules.push({
    test: /\.ts$/,
    use: ['ts-loader']
  });

  return config;
};
