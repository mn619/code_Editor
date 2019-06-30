var express = require('express');
var app = express();
var exec = require('child_process').exec;
var fs = require('fs');

app.use('/', express.static('public'));

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });
 

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post('/submit', urlencodedParser, function (req, res){
	
	fs.writeFileSync(__dirname + "/public/code.cpp", req.body.code, function(err) {
	    if(err) {
	        return console.log(err);
	    }
	    console.log("The code was saved!");
	}); 
	
	fs.writeFileSync(__dirname + "/public/input.txt", req.body.input, function(err) {
	    if(err) {
	        return console.log(err);
	    }
	    console.log("The input was saved!");
	}); 

	exec('g++ public/code.cpp')
    console.log('1');
	setTimeout(function() {
		exec('time ./a.out < public/input.txt > public/output.txt');
		console.log('2');
	}, 3000);

	res.sendFile(__dirname + '/index.html');
});


app.listen(3000, function() {
  console.log('Server running at http://127.0.0.1:8080/');
});