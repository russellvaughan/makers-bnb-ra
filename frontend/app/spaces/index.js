'use strict';

angular.module('makersbnb.index', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/spaces/index', {
    templateUrl: 'spaces/index.html',
    controller: 'SpacesCtrl'
  });
  $routeProvider.when('/spaces/:spaceId', {
    templateUrl: 'spaces/spacedetails.html',
    controller: 'SpacesDetailsCtrl'
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

.controller('SpacesDetailsCtrl', ["$scope","$http","$routeParams", function($scope, $http, $routeParams) {
  $scope.whichItem = $routeParams.spaceId - 1;
  this.getSpace = function(){
      $http.get('http://localhost:3000/spaces.json').then(function(response){
      	  $scope.spaces = response.data
      });
  };
  $scope.spaces = this.getSpace()
  $scope.newSpace = {}
}]);
