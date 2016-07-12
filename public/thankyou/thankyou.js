angular.module('thankyou', ['ngRoute'])
 
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/thankyou', {
        templateUrl: 'public/thankyou/thankyou.html',
        controller: 'ThankyouCtrl'
    });
}])

.controller('ThankyouCtrl', ['$scope', function($scope) {
    // do nothing
}]);