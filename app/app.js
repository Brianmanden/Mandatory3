/* Init */
var bodyParser		= require('body-parser'),
	dbname 			= 'angular_mongodb',
	dbpassword		= 'Conky123',
	dbserver		= 'ds039301.mongolab.com:39301',
	dbuser			= 'eaatest',
	ejs 			= require('ejs'),
	express 	 	= require('express'),
	mongoose		= require('mongoose'),
	path			= require('path'),
	routes 			= require('./routes');



/* Express setup */
var app 			= express();
app.engine("html", ejs.renderFile);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
//app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));



/* Mongoose DB connection */
// connection localhost
mongoose.connect('mongodb://localhost/' + dbname);

// connection mongolab.com
//mongoose.connect('mongodb://' + dbuser + ':' + dbpassword + '@' + dbserver + '/' +dbname);

var db = mongoose.connection;
// DB events
db.on('error', console.error);
db.once('open', startServer)



/* Routes */
// Index page
app.get('/', routes.index);

/* Get categories */
app.get('/categories', routes.categories);

/* Get all products */
app.get('/products', routes.products);

/* CRUD for a product*/
// Create a product
app.post('/product/:id', routes.productCreate);

// Get (Read) a product by id
app.get('/product/:id', routes.productRead);

// Update a product
app.put('/product/:id', routes.productUpdate);

// Delete a product
app.delete('/product/:id', routes.productDelete);

app.post('/order', routes.orderSave);

/* Nodeserver */
// Start server
function startServer(){
	var server = app.listen(3000, function(){
		var port = server.address().port;
		console.log('Starting node server. Listening on port ' + port);
	})
}