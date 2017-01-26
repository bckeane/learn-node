//require express
var express = require('express');
var path = require('path');


//create router object
var router = express.Router();

//export router
module.exports = router;

//route for main page
router.get('/', function (req,res) {
	//res.send('Hello World again');
	res.render('pages/index'); 
});

//route for about page
router.get('/about', function (req,res) {
	res.render('pages/about');
});

//route for contact page
router.get('/contact', function (req,res) {
	res.render('pages/contact');
});

router.post('/contact', function (req,res) {
});