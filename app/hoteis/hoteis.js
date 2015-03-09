angular.module('enejApp')

.config(function($routeProvider) {
	$routeProvider.when('/hoteis', {
		templateUrl: 'hoteis/list.html',
		controller: 'hotelListController',
		controllerAs: 'ctrl'
	}).when('/hoteis/add', {
		templateUrl: 'hoteis/form.html',
		controller: 'hotelFormController',
		controllerAs: 'ctrl'
	}).when('/hoteis/edit/:id', {
		templateUrl: 'hoteis/form.html',
		controller: 'hotelFormController',
		controllerAs: 'ctrl'
	})
})

.controller('hotelListController', function($http) {
	var self = this;

	self.hoteis = {};

	$http.get('https://amber-fire-952.firebaseio.com/hoteis.json').success(function (data) {
		self.hoteis = data;
	});

	self.removerHotel = function(key) {
		$http.delete('https://amber-fire-952.firebaseio.com/hoteis/'+key+'.json').success(function() {
			delete self.hoteis[key];
		})
	}
})

.controller('hotelFormController', function($http, $location, $routeParams) {
	var self = this;

	self.hotel = {};

	if($routeParams.id) {
		$http.get('https://amber-fire-952.firebaseio.com/hoteis/'+$routeParams.id+'.json').success(function(data) {
			self.hotel = data;
		});
	}

	self.sendForm = function() {
		if($routeParams.id) {
			$http.put('https://amber-fire-952.firebaseio.com/hoteis/'+$routeParams.id+'.json', self.hotel).success(function() {
				$location.path('/hoteis');
			});
		}
		else {
			$http.post('https://amber-fire-952.firebaseio.com/hoteis.json', self.hotel).success(function() {
				$location.path('/hoteis');
			});
		}
	}
});