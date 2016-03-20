'use strict';

// Declare app level module which depends on views, and components
angular.module('makersbnb', [
  'ngRoute',
  'makersbnb.viewspaces',
  'makersbnb.spacedetails',
  'makersbnb.createspace',
  'makersbnb.editspace',
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/views/spaces/index/'});
}]);
