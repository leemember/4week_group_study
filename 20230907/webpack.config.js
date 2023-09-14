const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
// ES5
// module.exports
// require('')

// ES6
// export, export default
// import

module.exports = {
  // 어떤 파일을 기준으로 번들링 할거냐
  entry: path.resolve(__dirname, './src'),
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html',
    }),
  ],
  devServer: {
    open: true,
    historyApiFallback: true,
  },
}
