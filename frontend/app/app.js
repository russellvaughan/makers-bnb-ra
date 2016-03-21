'use strict';
angular
	.module('makersbnb', [
	'ngRoute',
	'ng-token-auth',
	'makersbnb.viewspaces',
	'makersbnb.spacedetails',
	'makersbnb.createspace',
	'makersbnb.editspace',
	'makersbnb.deletespace',
	])
	.config(function ($routeProvider) {
    $routeProvider
      .when('/sign_in', {
        templateUrl: 'views/user_sessions/new.html',
        controller: 'UserSessionsCtrl'
      })
      .otherwise({
        redirectTo: 'views/spaces/index'
      });
  });