enejApp.controller("registrationController", function()
{
	this.user = {};
	this.user.nome = 'Matheus';
	this.user.email = "dkdkd@gmail.com";
	this.user.cpf = "111.222.333.-44";

	this.enviarForm = function()
	{
		myFirebaseRef.set(this.user);
	}
});
