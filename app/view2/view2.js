'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', '$http', function($scope, $http) {

  let BASE_URL = "https://openlibrary.org/search.json?q=";

  $scope.myItems = ['1','2','3','4','5'];
  $scope.showMess = function(q)  {
      BASE_URL = BASE_URL+q+'&page=1';

      console.log(BASE_URL);
 $http({method:'GET', url:BASE_URL}).then(

     function success(responce) {
       $scope.result = responce.data.start;
         console.log( $scope.result)
     }
 )



  };


}]);
