var controllers = angular.module('myApp');
controllers.value('Server', 'https://api.nytimes.com/svc/books/v3/lists.json')

controllers.factory('API', ['$http', '$timeout', 'Server', function ($http, $timeout, Server) {
    var API = {};
    var loadTime = 1000;
    
    API.getEvents = function () {
      return $http.get(Server, {
        params: {
          'api-key': "362f4508e923486dbd28ee49cf4693b9",
          'list': "hardcover-fiction"
        }
      });
    }
    return API;
}])
