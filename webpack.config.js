var webpack = require('webpack');
var path = require('path');

var loaders = [{
  test: /\.jsx?$/,
  exclude: /node_modules/,
  loader: "babel-loader"
}, {
  test: /\.css$/,
  loader: "style-loader!css-loader"
}, { 
  test: /\.(png|jpg|woff2|eot|ttf|svg)$/, 
  loader: 'url-loader?limit=100000' 
},{ 
  test: /\.jpeg$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/, 
  loader: "file-loader"
}];


module.exports = {
  entry: [
    './dev/index.jsx'
  ],
  output: {
    publicPath: './',
    path: path.join(__dirname),
    filename: 'app.min.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders
  },
  watch: true,
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        drop_console: false,
        drop_debugger: true
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
  ]
};
