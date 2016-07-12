angular.module('checkout', ['ngRoute'])
 
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/checkout', {
        templateUrl: 'public/checkout/checkout.html',
        controller: 'CheckoutCtrl'
    });
}])
 
.controller('CheckoutCtrl', ['$scope', 'sharedproduct', function($scope, sharedproduct) {
    // load the bought items
	$scope.boughtItems = sharedproduct.loadItem();
	
	// count the total price 
	$scope.totalCost = sharedproduct.loadTotalPrice(); 
}]);