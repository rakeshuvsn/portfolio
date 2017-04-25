
"use strict";

angular.module('health').service('AuthService',['$http','AuthFactory','$firebaseAuth','UserService', 
	function($http, AuthFactory,$firebaseAuth, UserService) {
	var self = this;

	self.signInWithFacebook = function () {
		return AuthFactory.$signInWithPopup('facebook');
	};


}]);