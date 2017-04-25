angular.module('health').controller('LoginController', ['$scope','HomeService','$firebaseAuth', function($scope,HomeService,$firebaseAuth) {

	var database = config.databaseURL;
	console.log(database);

	$scope.toggleSignUp = function () {
		$scope.isSignUp = !$scope.isSignUp;
	};

	$scope.createNewUser = function () {

	};

	$scope.loginUser = function () {

	};

}]);