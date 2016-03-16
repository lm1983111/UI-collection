var app = angular.module('myApp', []);
app.controller("personCtrl", function($scope) {
	$scope.firstName = "Jim";
	$scope.lastName = "Cat";
	$scope.fullName = function() {
		return $scope.firstName + " " + $scope.lastName;
	}
})