Portfolio.directive("linkto", function(){
	return {
		restrict: 'A',
		link: function(scope, element, attrs){
			element.bind("click", function(){
				scope.linkTo(attrs);
			});
		}		
	}
});

Portfolio.directive("twitter", function(){
	return{
		restrict: 'E',
		template: '<div class="twitterBlock socialBlocks">Twitter</div>'
	}
});
Portfolio.directive("linkedin", function(){
	return{
		restrict: 'E',
		template: '<div class="linkedinBlock socialBlocks">Linkedin</div>'
	}
});
Portfolio.directive("github", function(){
	return{
		restrict: 'E',
		template: '<div class="githubBlock socialBlocks">GitHub</div>'
	}
});