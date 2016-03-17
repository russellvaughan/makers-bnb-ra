'use strict';

angular.module('makersbnb.index', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/spaces/index', {
    templateUrl: 'spaces/index.html',
    controller: 'SpacesCtrl'
  });
}])

.controller('SpacesCtrl', ["$scope", function($scope) {
  this.getSpace = function(){
    return [{id: 1, name: "lovely space"}, {id: 2, name: "horrid space"}]
  };
  $scope.spaces = this.getSpace()
}]);
