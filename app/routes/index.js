exports.index = function(req, res){
  // render a view: /views/index.html
  // res.render('index'); 
  res.send(200);
};

exports.categories = function(req, res, next){
  var CategoriesModel = require('../public/data/categories');
  CategoriesModel.find(function(err, data){
    if(err){
      console.error;
    }
    res.json(data);
  })
}

exports.products = function(req, res, next){
  var ProductsModel = require('../public/data/products');
  ProductsModel.find(function(err, data){
    if(err){
      console.error;
    }
    res.json(data);
  });
}

exports.orderSave = function(req, res, next){
  var OrdersModel = require('../public/data/orders');
  // Insert sanity check on data here and/or on client side
  var kurv = req.body.kurv;

  // HERTIL
  // bør flyttes til en service !

  // build orderline
  var completeOrder = [];
  for(var item in kurv){
    var product   = kurv[item];
    var amount    = product["amount"];
    var price     = product["product"]["prodPrice"];
    var prodId    = product["prodId"];
    var title     = product["product"]["prodTitle"];
    var theProduct = { "prodId": prodId, "amount": amount, "price": price, "title": title };
    completeOrder.push(theProduct);
  }

  OrdersModel.create({
    "customer"    :   req.body.kunde,
    "order"       :   completeOrder
  });
   
  res.send("orderSave");
}

exports.productCreate = function(req, res, next){
  //res.render('./CRUDProd.ejs', { httpVerb: 'POST',  title: 'Create a new product', submitTxt: 'Create' });
  res.send("productCreate");
}

exports.productRead = function(req, res, next){
  console.log('productRead');
  //res.render('./CRUDProd.ejs', { httpVerb: 'GET',  title: 'Create a new product', submitTxt: 'Create' });
  //res.json({type: "Read", id: req.params.id});
}

exports.productUpdate = function(req, res, next){
  res.send("PUT " + req.body + " - " + req.params.id);
  //res.json({type: "Update", id: req.params.id, body: req.body });
}

exports.productDelete = function(req, res, next){
  res.send("DELETE " + req.body + " - " + req.params.id);
  //res.json({type: "Delete", id: req.params.id});
}