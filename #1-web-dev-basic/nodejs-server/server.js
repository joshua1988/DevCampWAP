// var http = require('http');

// http.createServer(function(request, response){
//     console.log("server running")
//     response.write("hello world!")
//     response.end();
// }).listen(8080);

var express = require('express')
var app = express();

app.get('/', function(request, response){
    response.send("hello world express")
})

app.listen(8080, function(){
    console.log("server running")
})