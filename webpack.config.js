const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const S3Plugin = require('webpack-s3-plugin')
const SentryPlugin = require('@sentry/webpack-plugin')
const path = require('path')

const config = {
  context: path.join(__dirname, 'src'),
  entry: ['babel-polyfill', 'whatwg-fetch', './index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  watchOptions: {
    aggregateTimeout: 100,
    poll: 1000
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: /src/,
        exclude: /(node_modules|bower_components|dist|coverage|tests)/,
        use: [
          {
            loader: 'babel-loader',
            options: { cacheDirectory: true },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|ttf|woff|woff2|eot|otf)$/,
        loader: 'file-loader'
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({ template: './index.html', inject: 'body' }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        RELEASE: JSON.stringify(process.env.RELEASE),
      },
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    host: 'localhost',
    port: 9000,
    https: true,
  }
}

module.exports = config
