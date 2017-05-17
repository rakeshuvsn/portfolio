angular.module('health').controller('LoginController', ['$scope','HomeService','$firebaseAuth','UserService','$location','$window',
 function($scope,HomeService,$firebaseAuth, UserService, $location, $window) {

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
		$window.location.assign('#!/userDashboard');
	};

	$scope.createNewUser = function () {
		UserService.createNewUserWithEmailPassword($scope.email, $scope.confirmPassword).then( function(success) {
			saveNewUserAndRedirect(success.email, success.uid);
		}).catch(function(error) {
			console.log(error);
		});
	};

	$scope.loginUser = function () {
		var userData = {};
		UserService.signInWithEmailAndPassword($scope.email, $scope.password).then( function(success) {
			 userData.displayName = success.displayName;
			 userData.email = success.email;
			 userData.uid = success.uid;
			UserService.setUserData(userData);
			$window.location.assign('#!/userDashboard');
		}).catch(function(error) {
			console.log(error);
		});
	};

}]);