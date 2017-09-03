'use strict';

angular.module('myApp.homepage', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/homepage', {
    templateUrl: 'homepage/homepage.html',
    controller: 'homepageCtrl'
  });
}])

.controller('homepageCtrl', ['$scope', '$location', function($scope, $location) {
  
  /** function for navigation onClick*/
  $scope.go = function ( path ) {
    $location.path( path );
  };
}]);