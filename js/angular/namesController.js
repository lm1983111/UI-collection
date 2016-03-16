var app = angular.module("myApp",[]);
app.controller('namesController',function($scope){
	$scope.names = [
	    {name:'Jim',country:'United States'},
	    {name:'Tom',country:'United Kingdom'},
	    {name:'LiLei',country:'China'}
	];
});
