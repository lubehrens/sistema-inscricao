angular.module('enejApp')

.directive('mask', function() {
	return {
		restrict: 'A', 
		link: function(scope, element, attrs) {
			element.mask(attrs.mask);
		}
	}
});