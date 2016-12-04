var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


mongoose.connect('mongodb://localhost/beers');

var Beer = require("./BeerModel");

var app = express();


app.use(bodyParser.json());   // This is the type of body we're interested in
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('Public'));
app.use(express.static('node_modules'));

app.get('/', function (req, res) {
	// 
	res.sendFile(__dirname + "/index.html");
});

app.get('/beers', function (req, res) {
  Beer.find(function (error, beers) {
  	res.send(beers);
  })
});

app.post('/beers', function (req, res, next) {
  var beer = new Beer(req.body);

  beer.save(function(err, beer) {
  	if (err) { return next(err); }

  	res.json(beer);

  })
  
});



app.listen(8000);