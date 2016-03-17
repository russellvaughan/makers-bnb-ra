angular.module('makersbnb.createspace', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/create/forms', {
    templateUrl: 'create/forms.html',
    controller: 'CreateSpaceCtrl'
  });
}])

.controller('CreateSpaceCtrl', [function() {

}]);
