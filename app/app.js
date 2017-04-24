var app = angular.module('health',['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: '/app/views/home.html',
		controller: "HomeController"
	})
	.when('/contactUs', {
		templateUrl: '/app/views/contactUs.html'
	});

});