var controllers = angular.module('myApp');
controllers.value('Server', 'https://api.nytimes.com/svc/books/v3/lists.json')

controllers.factory('API', ['$http', 'Server', function ($http, Server) {
    var API = {};

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
