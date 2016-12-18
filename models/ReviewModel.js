var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reviewSchema = new Schema({
	review: String,
	userName: String,
	date: Date
})

var Review = mongoose.model("Review", reviewSchema);
module.exports = Review;