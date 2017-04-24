angular.module('health').controller('HomeController', ['$scope','HomeService', function($scope,HomeService) {

	$scope.init = function () {
		getQuotesFromJson();
		getActivities();
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