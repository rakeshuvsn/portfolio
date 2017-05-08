"use strict";

angular.module('health').service('UserService',['$http','AuthFactory','$firebaseAuth', function($http, AuthFactory,$firebaseAuth) {
	var self = this;
	var userObject = {};
	self.setUserData = function (data) {
		userObject = data;
	};

	self.getUserData = function () {
		return userObject;
	};

	self.createUserIfNotExists = function (userData) {
		firebase.database().ref().child('users/'+ userData.uid).once('value', function(snapshot) {
			var exists = (snapshot.val() !== null);
		   if(!exists){
		   		createUserInDataBase(userData);
		   }else{
		   		alert('userAlreadyExists');
		   }
		});
		
	};

	self.createNewUserWithEmailPassword = function (email, password) {
		return firebase.auth().createUserWithEmailAndPassword(email, password);
	};

	self.signInWithEmailAndPassword = function(email, password) {
		return firebase.auth().signInWithEmailAndPassword(email, password);
	};


	var createUserInDataBase = function (userData) {
		firebase.database().ref('users/'+ userData.uid).set({
			userName: userData.displayName,
			email: userData.email,
			photoUrl: userData.photoURL || ""
		});
	};
}]);