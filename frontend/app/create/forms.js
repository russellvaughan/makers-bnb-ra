angular.module('makersbnb.createspace', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/create/forms', {
    templateUrl: 'create/forms.html',
    controller: 'CreateSpaceCtrl'
  });
}])

.controller('CreateSpaceCtrl', ["$scope", function($scope) {
  $scope.createSpace = function(field){
    $scope.newSpace = field
    return $scope.newSpace
  };
}]);
