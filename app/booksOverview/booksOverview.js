'use strict';

angular.module('myApp.booksOverview', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/booksOverview', {
    templateUrl: 'booksOverview/booksOverview.html',
    controller: 'booksOverviewCtrl'
  });
}])

.controller('booksOverviewCtrl', ['$scope', 'API', function($scope, API) {
  API.getEvents().then(function (data) {
    console.log(data);
    $scope.lastModified = data.data.last_modified;
    $scope.books = data.data.results;
    
  });
}]);