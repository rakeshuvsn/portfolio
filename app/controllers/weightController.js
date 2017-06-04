angular.module('health').controller('WeightController', ['$scope','$location','AuthFactory','$firebaseAuth', function ($scope, $location, AuthFactory, $firebaseAuth) {

	var user = firebase.auth().currentUser;

	if(user) {
		console.log(user);
	} else {
		console.log('noUser');
	}
}]);