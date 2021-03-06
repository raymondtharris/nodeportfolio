Portfolio.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl:'home.html',
		controller:'HomeController'
	})
	.when('/portfolio',{
		templateUrl:'portfolio.html',
		controller:'PortfolioController'
	})
	.when('/development',{
		templateUrl:'indev.html',
		controller:'PortfolioController'
	})
	.when('/contact',{
		templateUrl:'contact.html',
		controller:'ContactController'
	})
	.when('/not-here',{
		templateUrl:'404.html',
		controller:'HomeController'
	})
	.otherwise({redirectTo: '/not-here'});
});