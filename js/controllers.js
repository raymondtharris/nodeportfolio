var Portfolio = angular.module("Portfolio",[]);


Portfolio.controller('NavigationController',function($scope, $location){
	$scope.logo={'text':'Raymond Timothy Harris', 'link':''};

	$scope.navigation=[
	{'name':'Portfolio','link':'portfolio'}, 
	{'name':'In Development', 'link':'development'},
	{'name': 'Contact', 'link':'contact'},
	{'name': 'Resume', 'link': 'resume'}
	];
	$scope.linkTo = function(goto){
		//console.log(goto.nav.link);
		//var t = "/"+goto.nav.link;
		console.log(goto.linkto);
		$location.path('/'+goto.linkto);
		$location.path('/');
	}
	$scope.toHome = function(){
		$location.path('/');
	}
	$scope.toNav = function(){
		//console.log(this.nav.link);
		$location.path('/'+this.nav.link);
	}
	
	
});
Portfolio.controller('HomeController',function($scope){
	//var canvas = document.getElementById('myCanvas');
    //var context = canvas.getContext('2d');
});

Portfolio.controller('PortfolioController',function($scope){
	$scope.projectsNames=['node-BlogEditor', 'php-DataLib', 'Redditunes', 'SimplePlayer'];
	$scope.projects=[
	{
		'name':'SimplePlayer',
		'description':'HTML5 Video and Audio players.',
		'version':'0.8',
		'indev':true,
		'tags':['html5', 'js', 'css3','video', 'audio','web']
	},{
		'name':'Redditunes',
		'description': 'A social music web app.',
		'version':'0.6',
		'indev':false,
		'tags':['html5', 'js', 'css3','audio', 'php', 'jQuery','MySQL','web']
	},{
		'name':'BaseLib',
		'description': 'A set of data structures designed in PHP.',
		'version':'0.8',
		'indev':true,
		'tags':['php', 'data structures']
	},{
		'name':'BlogEditor',
		'description': 'A blog editor with a NoSQL backend',
		'version':'0.0.1',
		'indev':true,
		'tags':['html5', 'js', 'css3', 'AngularJS', 'Nodejs','ExpressJS', 'MongoDB','web', 'NoSQL']
	},{
		'name':'CoderPortfolio',
		'description': 'A portfolio connected to BlogEditor',
		'version':'0.1.2',
		'indev':true,
		'tags':['html5', 'js', 'css3', 'AngularJS', 'Nodejs','ExpressJS', 'MongoDB','web', 'NoSQL']
	}];
	
	$scope.cancelFilter = function(){
		$scope.searchFilter = "";
	}
});


Portfolio.controller('ContactController', function($scope){
});
