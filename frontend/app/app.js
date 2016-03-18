'use strict';

// Declare app level module which depends on views, and components
angular.module('makersbnb', [
  'ngRoute',
  'makersbnb.index',
  'makersbnb.createspace'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/spaces/index'});
}]);
