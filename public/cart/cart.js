var cost = 0;

angular.module('cart', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/cart', {
		templateUrl: 'public/cart/cart.html',
		controller: 'CartCtrl'
	});
}])

.controller('CartCtrl', ['$scope', 'products', 'sharedproduct', function($scope, products, sharedproduct) {
	console.log("Cart controller...");
	
	// Fetch products data from server
	products.success(function(data) {
		$scope.products = data;
		console.log("Success fetching products data...");
	});
	
	// save the chosen item
	$scope.saveItem = function(itemObj) { 
	
		// save item 
		sharedproduct.saveItem(itemObj);
		console.log("Saved item: " + itemObj.name + " " + itemObj.price);
		
		// update total price 
		cost = cost + itemObj.price;
		$scope.totalPrice = cost;
	};
	
	$scope.finalize = function() {
		sharedproduct.finalizedItems();
	}
	
}]);

