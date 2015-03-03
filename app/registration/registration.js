angular.module('enejApp')

.config(function($routeProvider) {
	$routeProvider.when('/registration', {
		templateUrl: 'registration/registration.html',
		controller: 'registrationController'
	})
	.when('/registration-success', {
		templateUrl: 'registration/success.html',
		controller: 'registrationController'
	});
})

.controller("registrationController", function($location)
{
	this.user = {};
	this.user.nome;
	this.user.email;
	this.user.cpf;

	this.enviarForm = function()
	{
		//myFirebaseRef.set(this.user);
		$location.path('registration-success');
	}
});
