angular.module('enejApp')

.config(function($routeProvider) {
	$routeProvider.when('/quartos', {
		templateUrl: 'quartos/list.html',
		controller: 'quartoListController',
		controllerAs: 'ctrl'
	}).when('/quartos/add', {
		templateUrl: 'quartos/form.html',
		controller: 'quartoFormController',
		controllerAs: 'ctrl'
	}).when('/quartos/edit/:id', {
		templateUrl: 'quartos/form.html',
		controller: 'quartoFormController',
		controllerAs: 'ctrl'
	})
})

.controller('quartoListController', function($http) {
	var self = this;

	self.quartos = {};

	$http.get('https://amber-fire-952.firebaseio.com/quartos.json').success(function (data) {
		self.quartos = data;
	});

	self.removerQuarto = function(key) {
		$http.delete('https://amber-fire-952.firebaseio.com/quartos/'+key+'.json').success(function() {
			delete self.quartos[key];
		})
	}
})

.controller('quartoFormController', function($http, $location, $routeParams) {
	var self = this;

	self.quarto = {};
	self.hoteis = {};

	$http.get('https://amber-fire-952.firebaseio.com/hoteis/.json').success(function(data) {
		self.hoteis = data;
	});

	if($routeParams.id) {
		$http.get('https://amber-fire-952.firebaseio.com/quartos/'+$routeParams.id+'.json').success(function(data) {
			self.quarto = data;
		});
	}

	self.sendForm = function() {
		if($routeParams.id) {
			$http.put('https://amber-fire-952.firebaseio.com/quartos/'+$routeParams.id+'.json', self.quarto).success(function() {
				$location.path('/quartos');
			});
		}
		else {
			$http.post('https://amber-fire-952.firebaseio.com/quartos.json', self.quarto).success(function() {
				$location.path('/quartos');
			});
		}
	}
});