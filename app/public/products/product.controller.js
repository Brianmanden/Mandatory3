(function(){

	function ProductController($scope, ProductsService, CartService, $routeParams){

		var modelProduct = function(productArray){
			$scope.product = productArray[0];
		}



		ProductsService.getProduct($routeParams.id)
			.then(modelProduct);



		$scope.addToCart = function(product, amount){
			CartService.addToCart(product, amount);
		}

	}

	angular
	.module("Main.Product", [])
	.controller("ProductController", ProductController);
})();