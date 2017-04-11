
var app = angular.module('myJourney', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/main', {
			controller:  'simpleCtrl',
			templateUrl:  'main.html'
		})
		.when('/pathway', {
			controller:  'simpleCtrl',
			templateUrl:  'pathway.html'
		})
		.when('/spring', {
			controller:  'simpleCtrl',
			templateUrl:  'spring.html'
		})
		.when('/blossom', {
			controller:  'simpleCtrl',
			templateUrl:  'blossom.html'
		})
		.when('/live', {
			controller:  'simpleCtrl',
			templateUrl:  'live.html'
		});
});

app.controller('simpleCtrl', function() {

});

