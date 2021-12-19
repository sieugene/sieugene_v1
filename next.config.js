/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate");
const webpack = require("webpack");

module.exports = nextTranslate({
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    config.plugins.push(new webpack.EnvironmentPlugin(process.env));

    return config;
  },
});
