const path = require('path');

module.exports =  {
  entry: [
    './source/js/data.js',
    './source/js/pin.js',
    './source/js/visited.js',
    './source/js/newsFeed.js',
    './source/js/script.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'source/js'),
    iife: true
  },
  devtool: false
}
