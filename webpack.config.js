const path = require("path");
const { spawn } = require("child_process");
const merge = require("webpack-merge");
const { CheckerPlugin } = require("awesome-typescript-loader");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackShellPlugin = require("webpack-shell-plugin");

const OUT_DIR = path.resolve(__dirname, "dist");

const config = {
  mode: "development",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(OUT_DIR, {
      verbose: false
    }),
    new CheckerPlugin(),
    new HardSourceWebpackPlugin({
      info: {
        level: "info",
      }
    }),
    new WebpackShellPlugin({ onBuildEnd: ["electron " + OUT_DIR] })
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  node: {
    __dirname: false,
    __filename: false
  }
};

module.exports = [
  merge(config, {
    target: "electron-main",
    entry: "./src",
    output: {
      path: OUT_DIR,
      filename: "index.js"
    }
  }),
  merge(config, {
    ...config,
    target: "electron-renderer",
    entry: "./src/renderer",
    output: {
      path: path.resolve(OUT_DIR, "renderer/"),
      filename: "renderer.js"
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/renderer/index.html"
      })
    ]
  })
]
