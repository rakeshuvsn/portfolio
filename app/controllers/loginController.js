angular.module('health').controller('LoginController', ['$scope','HomeService', function($scope,HomeService) {

	$scope.toggleSignUp = function () {
		$scope.isSignUp = !$scope.isSignUp;
	};

	$scope.createNewUser = function () {

	};

	$scope.loginUser = function () {

	};

}]);