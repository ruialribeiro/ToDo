'use strict';

/* Controllers Mapping */
angular.module('todoApp', [
  'ngRoute',
  'todoApp.controllers'
]).
config(function($routeProvider, $locationProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'partials/index',
      controller: 'IndexCtrl'
    }).
    when('/todo/add', {
      templateUrl: 'partials/add',
      controller: 'AddCtrl'
    }).
    when('/todo/:id/edit', {
      templateUrl: 'partials/edit',
      controller: 'EditCtrl'
    }).
    when('/todo/:id/delete', {
      templateUrl: 'partials/delete',
      controller: 'DeleteCtrl'
    }).
    otherwise({
      redirectTo: '/'
    });
  $locationProvider.html5Mode(true);
});
