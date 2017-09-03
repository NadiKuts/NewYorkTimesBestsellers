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
    $scope.lastModified = data.data.last_modified.substr(0, 10);
    // $scope.books = data.data.results;
    $scope.books = [];
    for (var i = 0; i < data.data.results.length; i++) {
      var book = {
        title: data.data.results[i].book_details[0].title,
        author: data.data.results[i].book_details[0].author,
        rank: data.data.results[i].rank,
        rank_last_week: data.data.results[i].rank_last_week,
      };
      if (book.rank == book.rank_last_week) {
        book.up = false;
        book.down = false;
        book.same = true;
      } else if (book.rank > book.rank_last_week) {
        book.up = true;
        book.down = false;
        book.same = false;
      } else {
        book.up = false;
        book.down = true;
        book.same = false;
      }
      $scope.books.push(book);
    }
  });
}]);