app.factory('products', ['$http', function($http) {
  return $http.get('products.json')
         .success(function(data) {
           return data;
         })
         .error(function(data) {
           return data;
         });
}]);
