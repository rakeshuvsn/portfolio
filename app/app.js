var app = angular.module('health',['ngRoute','firebase','ui.bootstrap','chart.js']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: '/app/views/home.html',
		controller: "HomeController"
	})
	.when('/contactUs', {
		templateUrl: '/app/views/contactUs.html'
	})
	.when('/userDashboard', {
		templateUrl: '/app/views/dashboard.html',
		controller: "DashboardController",
		resolve: {
			userData: function ($firebaseAuth) {
				var userData = {};
				userData.displayName = firebase.auth().currentUser.displayName;
				userData.email = firebase.auth().currentUser.email;
				userData.uid = firebase.auth().currentUser.uid;
				return userData;
			}
		}
	})
	.when('/login', {
		templateUrl: '/app/views/login.html',
		controller: "LoginController"
	});

});

app.run(['UserService','$firebaseAuth','$window',function(UserService, $firebaseAuth, $window) {



	var user = firebase.auth().currentUser;
	console.log(firebase.auth().currentUser);
	if(user) {
		console.log(user);
	} else {
		console.log('noUser');
	}
}]);