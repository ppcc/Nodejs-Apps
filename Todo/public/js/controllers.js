'use strict';

/* Controllers */
var todoApp = angular.module('todoApp',[]);

todoApp.controller('TodoCtrl',['$scope','$http',
	function ($scope,$http) {
		// body...
		$http.get('/api/items').success(
			function(data,status,headers,config){
				$scope.items = data.items;
				$scope.title = data.title;
			});

		$scope.newItem = {};
		$scope.addItem = function(){
			$http.post('/api/addItem',$scope.newItem).
			success(function(data){
				$scope.feedback = "success";
			}).error(function(data){
				$scope.feedback = "error!";
			});
		};

		$scope.delItem = function(_id){
			alert("ID: "+_id);
			$http.get('/api/delItem/'+_id).
			success(function(data){
				$scope.feedback = "delete success";
			}).error(function(data){
				$scope.feedback = "delete error!";
			});
		};

}]);

