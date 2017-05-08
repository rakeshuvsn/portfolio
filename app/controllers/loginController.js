angular.module('health').controller('LoginController', ['$scope','HomeService','$firebaseAuth','UserService','$location',
 function($scope,HomeService,$firebaseAuth, UserService, $location) {

	var database = config.databaseURL;

	$scope.toggleSignUp = function () {
		$scope.isSignUp = !$scope.isSignUp;
	};

	var saveNewUserAndRedirect = function (email, userId) {
		var userData = {
			displayName : $scope.firstName + $scope.lastName,
			email: email,
			uid : userId
		};
		UserService.createUserIfNotExists(userData);
		UserService.setUserData(userData);
		$location.path('/userDashboard');
	};

	$scope.createNewUser = function () {
		UserService.createNewUserWithEmailPassword($scope.email, $scope.confirmPassword).then( function(success) {
			saveNewUserAndRedirect(success.email, success.uid);
		}).catch(function(error) {
			console.log(error);
		});
	};

	$scope.loginUser = function () {
		UserService.signInWithEmailAndPassword($scope.email, $scope.password).then( function(success) {
			console.log(success);
			//UserService.setUserData(userData);
			$location.path('/userDashboard');
		}).catch(function(error) {
			console.log(error);
		});
	};

}]);