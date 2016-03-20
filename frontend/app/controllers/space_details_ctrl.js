angular.module('makersbnb.spacedetails', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/views/spaces/:spaceId', {
    templateUrl: 'views/spaces/spacedetails.html',
    controller: 'SpacesDetailsCtrl'
  });
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
