angular.module('cart', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cart', {
    templateUrl: 'public/cart/cart.html',
    controller: 'CartCtrl'
  });
}])

.controller('CartCtrl', ['$scope', 'products', function($scope, products) {
	console.log("Cart controller...");
	products.success(function(data) {
		$scope.products = data;
		console.log("Success fetching products data...");
	});
}]);

