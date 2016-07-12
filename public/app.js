var app = angular.module('shoppingcart', [
    'ngRoute',
    'cart',
	'checkout',
	'thankyou'
])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({
        redirectTo: '/cart'
    });
}]);