'use strict';

angular.module('myApp.booksOverview', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/booksOverview', {
    templateUrl: 'booksOverview/booksOverview.html',
    controller: 'booksOverviewCtrl'
  });
}])

.controller('booksOverviewCtrl', ['API', function(API) {
  API.getEvents().then(function (data) {
    console.log(data.data.results);
  });
}]);