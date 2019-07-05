var express = require('express');
var app = express();
var child_process = require('child_process');
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
	});

	fs.writeFileSync(__dirname + "/public/input.txt", req.body.input, function(err) {
	    if(err) {
	        return console.log(err);
	    }
	});

	setTimeout(function(){
		child_process.execSync('time g++ public/code.cpp');
		child_process.execSync('./a.out < public/input.txt > public/output.txt');
		res.sendFile(__dirname + '/index.html');		
	}, 100);	
});

app.listen(3000, function() {
  	console.log('Server running at http://127.0.0.1:8080/');
});