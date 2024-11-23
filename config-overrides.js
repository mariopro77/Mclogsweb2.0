const path = require('path');

module.exports = function override(config, env) {
  config.resolve.alias = {
    ...config.resolve.alias,
    "tinyqueue": path.join(__dirname, 'node_modules', 'tinyqueue', 'tinyqueue.js')
  };
  return config;
};
