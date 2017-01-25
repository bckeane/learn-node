////import the http module
//var http = require('http');

//handle sendng requests and returning responses
//function handleRequests(req,res) {
//	res.end('Hello World');  //return string
//}

//create server
//var server = http.createServer(handleRequests);

//start server and listen on port x
//server.listen(8080,function(){
//	console.log('Listening on port 8080');
//});

/////////////////////express

var express = require('express');
var app = express();
var port = 8080;

app.listen(port, function(){
	console.log('app started');
});

//route the app
app.get('/', function (req,res) {
	res.send('Hello World again');
});