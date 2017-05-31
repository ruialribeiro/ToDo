'use strict';

/* Controllers */
angular.module('todoApp.controllers', []).
  controller('IndexCtrl', ['$scope', '$http', '$location',
    function($scope, $http, $location) {
      $scope.todos = {};
      $http.get('/todos')
.        success(function(data) {
          $scope.todos = data.todos;
        });
    }
  ]).
  controller('AddCtrl', ['$scope', '$http', '$location',
    function($scope, $http, $location) {
      $scope.form = {};
      $scope.add = function() {
      $http.post('/todo', $scope.form).
          success(function() {
            $location.path('/');
          });
      };
      $scope.cancel =  function() {
        $location.url('/');
      };
    }     
  ]).
  controller('EditCtrl', ['$scope', '$http', '$location', '$routeParams',
    function($scope, $http, $location, $routeParams) {
      $scope.form = {};
      $http.get('/todo/' + $routeParams.id).
        success(function(data) {
          $scope.form = data.todo;
        });
        $scope.edit = function() {
          $http.put('/todo/' + $routeParams.id, $scope.form).
            success(function() {
              $location.url('/');
            });
        };
        $scope.cancel =  function() {
            $location.url('/');
        };
    }
  ]).
  controller('DeleteCtrl', ['$scope', '$http', '$location', '$routeParams',
    function($scope, $http, $location, $routeParams) {
      $scope.form = {};
      $http.get('/todo/' + $routeParams.id).
        success(function(data) {
          $scope.form = data.todo;
        });

      $scope.delete = function() {
        $http.delete('/todo/' + $routeParams.id).
          success(function() {
            $location.url('/');
          });
      };
      
      $scope.cancel =  function() {
        $location.url('/');
      };
    }
  ]);
