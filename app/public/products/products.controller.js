(function(){
	"use strict";

	var ProductsController = function($scope, ProductsService, CartService){

		var modelProducts = function(data){
			$scope.products = data;
		}
		var modelCategories = function(data){
			$scope.categories = data;
		}
		var updateCategoriesSelected = function(){
			$scope.categoriesSelected = ProductsService.getCategoriesSelected();
		}



		$scope.productFilter = function(product){
			return ProductsService.productFilter(product);
		}

		$scope.categoryChange = function(category){
			ProductsService.categoryChange(category);
			updateCategoriesSelected();
		}



		ProductsService.getProducts()
			.then(modelProducts);
		ProductsService.getCategories()
			.then(modelCategories);



		updateCategoriesSelected();

	};



	angular
		.module("Main.Products", [])
		.controller("ProductsController", ProductsController);

})();