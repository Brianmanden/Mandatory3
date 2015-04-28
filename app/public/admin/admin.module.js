// admin.module.js
(function(){
	'use strict';

	angular
		.module(
			"Main",
			["ngRoute"]
		)
		.config(
			function($routeProvider) {
				$routeProvider
					.when("/prodCreate", {
						//console.log("prodCreate")
						templateUrl: "./products/prodCreate.html"
					})
					.when("/", {
						templateUrl: "./index.html"
						//,
						//controller: "ProductsController"
					})
					.otherwise({ redirectTo: "/	"});
			}
		)
		.run(function($rootScope){
			console.log("heps");
		});

})();