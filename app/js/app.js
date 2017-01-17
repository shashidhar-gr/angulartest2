var myApp = angular.module('myApp', []);

myApp.controller('simpleController', ['$scope', function($scope) {
	$scope.title = "Testing angular js applications.";
}]);