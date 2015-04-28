var mongoose		= require('mongoose'),
	dbname 			= "angular_mongodb";

// Schemas
var Product = mongoose.model("Product", {
	prodId		: 	Number, 
	prodTitle	: 	String,
	prodDesc	: 	String, 
	prodPct		: 	Number,
	prodVol		: 	Number,
	prodPrice	: 	Number,
	prodImg		: 	String,
	category	: 	String
});

var Category = mongoose.model("Category", {
	category 	:  	String 
});

var Order = mongoose.model("Order", {
	orderCreated	:  	{ type: Date, default: Date.now },
	customer 		: 	{}, 
	order 			: 	{} 
});

// Connect Mongoose to MongoDB
mongoose.connect('mongodb://localhost/' + dbname);
var db = mongoose.connection;

db.on('error', logError);
db.once('open', initCollections);

function logError(){
	console.log("Ohh noes ErRoR :)");
}

function initCollections(){
	console.log("Deleting products");
	Product.remove({}, function(err){
		if(err){
			console.log(err);
		}
		insertProducts();
	});

	console.log("Deleting categories");
	Category.remove({}, function(err){
		if(err){
			console.log(err);
		}
		insertCategories();
	});

	console.log("Deleting orders");
	Order.remove({}, function(err){
		if(err){
			console.log(err);
		}
		insertOrders();
	});
}

function insertProducts(){
	console.log("Inserting demo-products");
	Product.create(
		{
			"prodId": 1,
			"prodTitle": "ALE NO 16",
			"prodDesc": "Ale No 16 er en mørk, overgæret guldøl, brygget på vand, malt, humle og original engelsk gær. Øllet har en maltet smag med et strejf af nødder, en let ristet aroma og en tilpas sødme. Ale No 16 er brygget af Refsvindinge Bryggeri siden 1995 og har vundet flere priser. Bl.a. er Ale No 16 blev kåret som Danmarks bedste øl i både 1997 og 2000. I år 2000 fik den tilmed en flot 3. plads blandt verdens bedste øl. Ale No 16 kan fx nydes sammen med friskbagte kerneboller, goudaost med valnødder eller lagret spegepølse. 2001 blev der som følge af kraftigt stigende efterspørgsel indgået tappeaftale mellem Bryggeriet Vestfyen og Refsvindinge Bryggeri.",
			"prodPct": "5.7",
			"prodVol": "50",
			"prodPrice": 4,
			"prodImg": "AleNo16.png",
			"category": "ale"
		},
		{
			"prodId": 2,
			"prodTitle": "Harboe Guldøl",
			"prodDesc": "Harboe Guldøl 5,7% er en stærkøl brygget af mørke malttyper, som giver øllen en god kraftig maltsmag med en afrundet sødme, som sammen med bitterheden fra humlen gør Harboe Guldøl til en god smagsoplevelse.",
			"prodPct": "5.7",
			"prodVol": "33",
			"prodPrice": 7,
			"prodImg": "HarboeGuldøl.png",
			"category": "lager"
		},
		{
			"prodId": 3,
			"prodTitle": "Guld Tuborg",
			"prodDesc": "Fyldt med elegance og brygget med respekt for historien. Den gyldne dame er en elegant luksusøl med smag og kraft til både gården og gaden. Kompleks og raffineret, som alle dejlige damer er. ",
			"prodPct": "5.6",
			"prodVol": "33",
			"prodPrice": 9,
			"prodImg": "guld_tuborg.png",
			"category": "lager"
		}
		, function(err, data){
			if(err){
				console.log(err);
			}
		}
	);
}

function insertCategories(){
	console.log("Inserting demo-categories");
	Category.create(
		{
			"category": "ale"
		},
		{
			"category": "lager"
		}
		, function(err, data){
			if(err){
				console.log(err);
			}
		}
	);
}

function insertOrders(){
	console.log("Inserting demo-orders");
	Order.create(
		{
			"customer": "some customer",
			"order": "some products and quantity"
		},
		{
			"customer": "some other customer",
			"order": "some other products and quantity"
		},
		{
			"customer": "yet another customer",
			"order": "even more products and quantity"
		}
		, function(err, data){
			if(err){
				console.log(err);
			}
		}
	);
}