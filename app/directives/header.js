angular.module('health').directive('headerNav',function() {
	return {
		restrict: 'E',
		templateUrl: '/app/views/headerDirective.html',
		controller: ['$scope','$firebaseAuth','$location', function ($scope, $firebaseAuth, $location) {
			$scope.logout = function() {
				firebase.auth().signOut().then(function() {
					console.log('signout');
				  $location.path('/');
				}).catch(function(error) {
				  // An error happened.
				});
			}
		}]
	}
});