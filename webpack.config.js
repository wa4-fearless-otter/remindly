const path = require("path");
const merge = require("webpack-merge");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const WebpackShellPlugin = require("webpack-shell-plugin");

const OUT_DIR = path.resolve(__dirname, "dist");

const config = {
  mode: "development",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        options: {
          appendTsSuffixTo: [/\.vue$/],
        }
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.png$/,
        loader: "file-loader"
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HardSourceWebpackPlugin({
      info: {
        level: "info",
      }
    }),
    new VueLoaderPlugin(),
    new WebpackShellPlugin({ onBuildEnd: ["electron " + OUT_DIR] })
  ],
  resolve: {
    extensions: [".ts", ".js"],
    alias: {
      vue$: "vue/dist/vue.esm.js"
    }
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
