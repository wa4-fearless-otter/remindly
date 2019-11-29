const path = require('path');
const merge = require('webpack-merge');
const rimraf = require('rimraf');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SRC_DIR = path.resolve(__dirname, 'src/');
const OUT_DIR = path.resolve(__dirname, 'dist/');

// Clean output directory
rimraf.sync(OUT_DIR);

const config = {
  devtool: 'eval-source-map',
  output: { path: OUT_DIR },
  module: {
    rules: [
      {
        test: /\.png$/,
        use: 'file-loader',
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
  },
};

module.exports = [
  merge(config, {
    target: 'electron-renderer',
    entry: path.resolve(SRC_DIR, 'renderer/'),
    output: {
      filename: 'renderer.js',
    },
    plugins: [new HtmlWebpackPlugin()],
  }),
  merge(config, {
    target: 'electron-main',
    entry: path.resolve(SRC_DIR, 'main/'),
    output: {
      filename: 'index.js',
    },
  }),
];
