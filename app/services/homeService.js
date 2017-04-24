angular.module('health').service('HomeService',['$http','$q', function($http, $q) {
	var self = this;

	self.readQuotesLocalFromJSON = function() { 
       return $http.get('/assets/json/inspirationalQuotes.json');  
    };

    self.getActivitiesFromJson = function() {
    	return $http.get('/assets/json/activities.json');
    };


}]);