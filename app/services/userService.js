"use strict";

angular.module('health').service('UserService',['$http','AuthFactory','$firebaseAuth', function($http, AuthFactory,$firebaseAuth) {
	var self = this;
	var userObject = {};
	self.setUserData = function (data) {
		userObject = data;
	};

	self.getUserData = function () {
		return userObject;
	}

}]);