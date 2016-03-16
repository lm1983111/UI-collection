var app = angular.module("myApp", []);
app.controller('customersCtrl', function($scope, $http) {
	$http.get('json-names.json').success(function(response) {
		$scope.names = response.records;
	});
})