var myApp = angular.module('myApp', []);

myApp.controller('simpleController', ['$scope', function($scope) {
	$scope.title = "Trip application.";

	$scope.destination = [];

	$scope.newDestination = {
		city: undefined,
		country: undefined
	};

	$scope.addDestination = function() {
		$scope.destination.push({
			city: $scope.newDestination.city,
			country: $scope.newDestination.country
		});
	}
}]);