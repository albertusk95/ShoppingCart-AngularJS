app.factory('products', ['$http', function($http) {
  return $http.get('https://raw.githubusercontent.com/albertusk95/ShoppingCart-AngularJS/master/products.json')
         .success(function(data) {
           return data;
         })
         .error(function(data) {
           return data;
         });
}]);
