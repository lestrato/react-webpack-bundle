const webpack = require("webpack");

const mainConfig = require('../config/webpack.config.js');

module.exports = async ({ config, mode }) => {
  config.module.rules = [...config.module.rules, ...mainConfig.module.rules];
  config.resolve.alias = {...config.resolve.alias, ...mainConfig.resolve.alias};
  config.plugins = [...config.plugins, ...mainConfig.plugins];
  return config;
};