angular.module('enejApp')

.config(function($routeProvider) {
	$routeProvider.when('/workshops', {
		templateUrl: 'workshops/list.html',
		controller: 'workshopListController',
		controllerAs: 'ctrl'
	}).when('/workshops/add', {
		templateUrl: 'workshops/form.html',
		controller: 'workshopFormController',
		controllerAs: 'ctrl'
	}).when('/workshops/edit/:id', {
		templateUrl: 'workshops/form.html',
		controller: 'workshopFormController',
		controllerAs: 'ctrl'
	})

})

.controller('workshopListController', function($http)
{
	var self = this;

	self.workshops = {};

	$http.get('https://amber-fire-952.firebaseio.com/workshops.json').success(function (data) {
		self.workshops = data;
	});

	self.removerWorkshop = function(key) {
		$http.delete('https://amber-fire-952.firebaseio.com/workshops/'+key+'.json').success(function() {
			delete self.workshops[key];
		})
	}
})

.controller('workshopFormController', function($http, $location, $routeParams) {
	var self = this;

	self.workshop = {};

	//se for edicao pega o workshop
	if($routeParams.id) {
		$http.get('https://amber-fire-952.firebaseio.com/workshops/'+$routeParams.id+'.json').success(function(data) {
			self.workshop = data;
		});
	}

	//envia o formulario
	self.sendForm = function() {
		if($routeParams.id) {
			$http.put('https://amber-fire-952.firebaseio.com/workshops/'+$routeParams.id+'.json', self.workshop).success(function () {
				$location.path('/workshops');
			});
		}
		else {
			$http.post('https://amber-fire-952.firebaseio.com/workshops.json', self.workshop).success(function () {
				$location.path('/workshops');
			});
		}
	};
});