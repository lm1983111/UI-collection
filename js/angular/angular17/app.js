var animateApp = angular.module('animateApp', ['ngRoute', 'ngAnimate']);

animateApp.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'angular17-page-about.html',
			controller: 'mainController'
		})
		.when('/about', {
			templateUrl: 'angular17-page-about.html',
			controller: 'aboutController'
		})
		.when('/contact', {
			templateUrl: 'angular17-page-contact.html',
			controller: 'contactController'
		});

});

animateApp.controller('mainController', function($scope) {
	$scope.pageClass = 'page-home';
});

animateApp.controller('aboutController', function($scope) {
	$scope.pageClass = 'page-about';
});

animateApp.controller('contactController', function($scope) {
	$scope.pageClass = 'page-contact';
});