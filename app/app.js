var app = angular.module('health',['ngRoute','firebase']);

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
		controller: "DashboardController"
	})
	.when('/login', {
		templateUrl: '/app/views/login.html',
		controller: "LoginController"
	});

});