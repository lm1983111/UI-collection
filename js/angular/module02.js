var app2 = angular.module("myApp2",[]);
app2.controller('secondController',function($scope){
	$scope.name = '李四';
});
app2.controller('threeController',function($scope){
	$scope.name = '王五';
})