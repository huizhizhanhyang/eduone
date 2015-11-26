var app = app || {};

app.controller('UserController', function($scope, $http)
{
	$scope.users = [];

	$scope.exists = [];

	$scope.search = '';

	$scope.queue = [];

	$scope.isLoading = false;

	$scope.role_id = null;

	$scope.init = function() 
	{
		if (typeof window.exists != 'undefined')
			$scope.exists = window.exists;

		if (typeof window.role_id != 'undefined' && window.role_id > 0)
			$scope.role_id = window.role_id;
	};

	$scope.$watch('search', function()
	{
		var params = {
			search: $scope.search,
			role_id: $scope.role_id
		};

		if ( ! $scope.isLoading) {

			$scope.isLoading = true;

			$http.get('/users/search/', {
				params: params
			}).
			success(function(data, status, headers, config) {	
		    	$scope.users = data;
		  	}).
		  	error(function(data, status, headers, config) {
		    	//
			});

			$scope.isLoading = false;
	  	}
	});

	$scope.addUser = function($index)
	{
		var isDuplicated = false;

		angular.forEach($scope.queue, function(user) {
			if (user.id === $scope.users[$index].id) {
				isDuplicated = true;
				return;
			}
		});

		if (isDuplicated)
			return;

		$scope.queue.push($scope.users[$index]);

		$scope.users.splice($index, 1);
	};

	$scope.removeQueueUser = function($index)
	{
		$scope.queue.splice($index, 1);
	};

});