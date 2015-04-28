var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productsSchema = new Schema({
	prodId		: 	Number, 
	prodTitle	: 	String,
	prodDesc	: 	String, 
	prodPct		: 	Number,
	prodVol		: 	Number,
	prodPrice	: 	Number,
	prodImg		: 	String,
	category	: 	String
});

var ProductsModel = mongoose.model("Products", productsSchema);

module.exports = ProductsModel;