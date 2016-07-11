var app = angular.module('shoppingcart', [
    'ngRoute',
    'cart',
	'checkout'
])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({
        redirectTo: '/cart'
    });
}]);