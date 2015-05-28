var express = require('express');
var app = express();

app.use(express.static(__dirname + '/html'));
app.use(express.static(__dirname + '/js'));
app.use(express.static(__dirname + '/css'));

app.get('/', function(req, res){
	console.log('Listening on port here');

	res.sendfile('index.html');
	
});
app.get('/#/not-here', function(req, res){
	res.send("hey");
});

app.listen(8000);
console.log('Listening on port 8000');