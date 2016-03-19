'use strict';

angular.module('makersbnb.viewspaces', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/views/spaces/index', {
    templateUrl: 'views/spaces/index.html',
    controller: 'SpacesCtrl'
  });
}])

.controller('SpacesCtrl', ["$scope","$http", function($scope, $http) {
  this.getSpace = function(){
      $http.get('http://localhost:3000/spaces.json').then(function(response){
      	  $scope.spaces = response.data
      });
  };

  $scope.spaces = this.getSpace()

  $scope.newSpace = {}

}])
