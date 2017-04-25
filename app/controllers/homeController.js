angular.module('health').controller('HomeController', ['$scope','HomeService','AuthService','UserService','$location',
	function($scope,HomeService, AuthService, UserService, $location) {

	$scope.init = function () {
		getQuotesFromJson();
		getActivities();
	};

	$scope.signInWithFacebook = function() {
		AuthService.signInWithFacebook().then(function(authData) {
            console.log(authData);
            UserService.setUserData(authData.user);
            $location.path('/userDashboard');
        }).catch(function(error) {
            console.error(error)
        })
	};

	var getQuotesFromJson = function() {
		HomeService.readQuotesLocalFromJSON().then(function(success) {
			
			$scope.quotes = success.data.inspirationalQuotes;
		});
	};

	$scope.showInspirationQuote = function() {
		return !!($scope.quotes);
	};

	var getActivities = function () {
		HomeService.getActivitiesFromJson().then(function(success) {
			$scope.activities = success.data.activities;
		});
	};

	$scope.init();
}]);