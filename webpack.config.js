const path = require('path');
const merge = require('webpack-merge');
const rimraf = require('rimraf');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SRC_DIR = path.resolve(__dirname, 'src/');
const OUT_DIR = path.resolve(__dirname, 'dist/');

// Clean output directory
rimraf.sync(OUT_DIR);

const config = {
  node: {
    __filename: false,
    __dirname: false,
  },
  devtool: 'eval-source-map',
  output: { path: OUT_DIR },
  module: {
    rules: [
      {
        test: /\.(png|ico)$/,
        use: 'file-loader',
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              injectType: 'linkTag',
            },
          },
          'file-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.tsx', '.ts'],
    alias: {
      '@main': path.resolve(SRC_DIR, 'main/'),
      '@renderer': path.resolve(SRC_DIR, 'renderer/'),
    },
  },
};

module.exports = [
  merge(config, {
    target: 'electron-renderer',
    entry: path.resolve(SRC_DIR, 'renderer/'),
    output: {
      filename: 'renderer.js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        template: require('html-webpack-template'),
        appMountId: 'root',
      }),
    ],
  }),
  merge(config, {
    target: 'electron-main',
    entry: path.resolve(SRC_DIR, 'main/'),
    output: {
      filename: 'index.js',
    },
  }),
];
