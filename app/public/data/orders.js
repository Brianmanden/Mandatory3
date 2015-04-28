var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ordersSchema = new Schema({
	orderCreated	:  	{ type: Date, default: Date.now },
	customer 		: 	{}, 
	order 			: 	{}
});

var OrdersModel = mongoose.model("Orders", ordersSchema);

module.exports = OrdersModel;