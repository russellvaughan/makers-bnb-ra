angular.module('makersbnb.createspace', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/views/forms', {
    templateUrl: 'views/forms.html',
    controller: 'CreateSpaceCtrl'
  });
}])

.controller('CreateSpaceCtrl', ["$scope", "$http", "$location", function($scope, $http, $location) {
  console.log("CreateSpaceCtrl")
  $scope.createSpace = function(field){
    var param = JSON.stringify({name: field});
    $http.post("http://localhost:3000/spaces.json",
  param ).success(function(data, status){
  $location.path('/spaces/index');
  });
  };
}]);
