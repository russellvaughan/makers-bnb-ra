angular.module('makersbnb.createspace', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/create/forms', {
    templateUrl: 'create/forms.html',
    controller: 'CreateSpaceCtrl'
  });
}])

.controller('CreateSpaceCtrl', ["$scope", "$http", "$location", function($scope, $http, $location) {
  $scope.createSpace = function(field){
    var param = JSON.stringify({name: "bob"});
    $http.post("http://localhost:3000/spaces.json",
  param ).success(function(data, status){
    console.log(data);
  });
    // $scope.newSpace = field
    // return $scope.newSpace
  };
}]);

// restauranteur.controller 'RestaurantIndexCtrl', ['$scope', '$location', '$http', ($scope, $location, $http) ->
// $scope.restaurants = []
//   $http.get('./restaurants.json').success((data) ->
//     $scope.restaurants = data
//   )
//   $scope.addRestaurant = (test) ->
//     $http({
//       url: '/restaurants#create',
//       method: "POST",
//       data: JSON.stringify({name:test}),
//       headers: {'Content-Type': 'application/json'}
//     })
//
// ]
