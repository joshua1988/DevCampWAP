// 1. HTTP Code
var http = require('http');

http.createServer(function (req, res) {
  res.write('Hello World! from HTTP');
  res.end();
  console.log("Server received the user request");
}).listen(8080); //the server object listens on port 8080

// 2. Express Code
// var express = require('express');
// var app = express();
//
// app.get('/', function (req, res) {
//   res.send('Hello World! from Express');
// });
//
// app.listen(3000, function () {
//   console.log('Simple web app listening on port 3000!');
// });
