var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var db = require('../database/index.js');

var PORT = 3001;

var app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());

app.get('/', function(req, res){
	res.send('test!');
});

app.listen(PORT, function(){
	console.log(`Listening on http://localhost:${PORT}`);
})