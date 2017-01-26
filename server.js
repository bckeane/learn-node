//require
var express = require('express');
var expressLayouts = require('express-ejs-layouts')

//setups
var app = express();
var port = 8080;

//use ejs layouts
app.set('view engine','ejs');
app.use(expressLayouts);

//route the app
var router = require('./app/routes.js');
app.use('/',router);


//static folder setup for img and css
app.use(express.static(__dirname + '/public'));


app.listen(port, function(){
	console.log('app started');
});

