(function(){
	"use strict";

	function CartController($rootScope, $scope, CartService){

		$scope.delProd = function(item){
			CartService.delProd(item);
		}

		$scope.moreProd = function(item){
			CartService.moreProd(item);
		}

		$scope.lessProd = function(item){
			CartService.lessProd(item);
		}

		$scope.saveOrder = function(){
			var orderObj = {};
			orderObj["kunde"] = this.kunde;
			orderObj["kurv"] = $rootScope.cart;
			CartService.saveOrder(orderObj);
		}
		
	}

	angular
		.module("Main.Cart", [])
		.controller("CartController", CartController);

})();