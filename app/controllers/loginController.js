angular.module('health').controller('LoginController', ['$scope','HomeService','$firebaseAuth', function($scope,HomeService,$firebaseAuth) {

	var database = firebase.database();
	console.log(database);

	$scope.toggleSignUp = function () {
		$scope.isSignUp = !$scope.isSignUp;
	};

	$scope.createNewUser = function () {

	};

	$scope.loginUser = function () {

	};

}]);