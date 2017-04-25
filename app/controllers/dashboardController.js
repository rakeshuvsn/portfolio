angular.module('health').controller('DashboardController',['$scope','UserService', function($scope, UserService) {

	$scope.init = function () {
		$scope.user = UserService.getUserData();
	};

	$scope.init();
}]);