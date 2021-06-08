'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])
    .controller('View1Ctrl', ['$scope', function ($scope) { //чтобы при минификации не поломалось пишем строку
      $scope.test = 'this is teeeeest!!';
    }])
    .controller('View1Ctrl1', [function () {
    }])
    .controller('View1Ctrl2', [function () {
    }]);
