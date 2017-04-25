 "use strict";

angular.module('health').factory('AuthFactory',function($firebaseAuth) {
	return $firebaseAuth();
});