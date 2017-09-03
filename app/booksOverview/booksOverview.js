'use strict';

angular.module('myApp.booksOverview', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/booksOverview', {
    templateUrl: 'booksOverview/booksOverview.html',
    controller: 'booksOverviewCtrl'
  });
}])

.controller('booksOverviewCtrl', ['$scope', 'API', function($scope, API) {
  /*
    Don't show the cards which have last week rank 0
    if sorting criteria is the "last_week_rank"
  */
  $scope.filterFunction = function(element) {
    return element.rank_last_week == 0 && $scope.selected == 'rank_last_week' ? false : true;
  };

  // Fetch the data from the server
  API.getEvents().then(function (response) {
    // HTTP Response header == 200

    // Active sorting criteria. By default sorted by rank
    $scope.selected = 'rank';

    $scope.lastModified = response.data.last_modified.substr(0, 10);
    $scope.books = [];
    for (var i = 0; i < response.data.results.length; i++) {
      var book = {
        title: response.data.results[i].book_details[0].title,
        author: response.data.results[i].book_details[0].author,
        rank: response.data.results[i].rank,
        rank_last_week: response.data.results[i].rank_last_week,
      };
      if (book.rank_last_week == 0){
        book.up = false;
        book.down = false;
        book.same = true;
      } else {
        if (book.rank == book.rank_last_week) {
          book.up = false;
          book.down = false;
          book.same = true;
        } else if (book.rank < book.rank_last_week) {
          book.up = true;
          book.down = false;
          book.same = false;
        } else {
          book.up = false;
          book.down = true;
          book.same = false;
        }
      }
      $scope.books.push(book);
    }
  }, function(response){
    // callback on http error code
    $scope.ishttperror = true;
  });
}]);
