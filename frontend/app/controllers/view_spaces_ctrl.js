'use strict';

angular.module('makersbnb.viewspaces', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/views/spaces/index', {
    templateUrl: 'views/spaces/index.html',
    controller: 'SpacesCtrl'
  });
}])

.factory('ViewSpaceService', function($http) {
   return {
     getSpace: function() {
       return $http.get('http://localhost:3000/spaces.json').then(function(result) {
           return result.data;

});
}  
}       
})


.controller('SpacesCtrl', ["$scope","$http","ViewSpaceService", function($scope, $http, ViewSpaceService) {
 
  ViewSpaceService.getSpace().then(function(data) {
       $scope.spaces = data;
       console.log(data);
   });
  
  console.log($scope.spaces)
  $scope.newSpace = {}


}]);

