var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var Review = require("Review");

var beerSchema = new Schema({
	name: String,
	style: String,
	image_url: String,
	abv: Number,
	reviews:[]
})

var Beer = mongoose.model("Beer", beerSchema);
module.exports = Beer;