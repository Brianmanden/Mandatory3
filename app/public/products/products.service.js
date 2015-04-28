(function(){
	"use strict";

	var ProductsService = function($http){
		//, CartService

		var categoriesSelected 	=	[],
			products			=	[];

		var categoryChange = function(category){
			var i = categoriesSelected.indexOf(category);
            if (i > -1) {
                categoriesSelected.splice(i, 1);
            } 
            else {
                categoriesSelected.push(category);
            }
        }

		var findProductInArray = function(data, prodId){
			return data.filter(function(elem){
				if(elem.prodId === prodId){
					return elem;
				}
			});
		}

		var getCategories = function(response){
			return $http.get("/categories")
					.then(function(response){
						return response.data;
					}, getError)
		};

		var getCategoriesSelected = function(){
      		return categoriesSelected;
      	}

		var getError = function(reason){
			console.log(reason);
		}

		var getProduct = function(id){
			return $http.get("/products")
					.then(function(response){
						return findProductInArray(response.data, parseInt(id));
					})
		}

		var getProducts = function(response){
			var data;
			return $http.get("/products")
						.then(function(response){
							setProducts(response.data);
							return response.data;
						}, getError)
		};

		var productFilter = function(product){
			if(categoriesSelected.length > 0){
				if(categoriesSelected.indexOf(product.category) < 0){
					return;
				}
			}
			return product;
		}

		var setProducts = function(data){
			products = data;
		}

		return{
			getProducts: 			getProducts,
			getProduct: 			getProduct,
			getCategories: 			getCategories,
			getCategoriesSelected: 	getCategoriesSelected,
			productFilter: 			productFilter,
			categoryChange: 		categoryChange
		}
	}

	angular
		.module('Main.Products')
		.factory('ProductsService', ProductsService);

})();