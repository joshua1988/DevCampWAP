var path = require('path');

module.exports = {
    // mode: "development",
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};