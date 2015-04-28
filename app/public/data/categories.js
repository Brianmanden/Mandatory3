var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categoriesSchema = new Schema({
	category	: 	String
});

var CategoriesModel = mongoose.model("Categories", categoriesSchema);

module.exports = CategoriesModel;