angular.module('enejApp')

.controller("profileController", function()
{
	this.user = {};
	this.user.nomeUsuario;
	this.user.email;
	this.user.senha;
	this.user.nome;
	this.user.sobrenome;
	this.user.nomeCracha;
	this.user.cpf;
	this.user.rg;
	this.user.sexo;
	this.user.cep;
	this.user.pais;
	this.user.estado;
	this.user.cidade;
	this.user.bairro;
	this.user.endereco;
	this.user.numero;
	this.user.complemento;
	this.user.nascimento;
	this.user.universidade;
	this.user.curso;
	this.user.periodo;
	this.user.federacao;
	this.user.ej;
	this.user.cargo;
	this.user.camisa;
	this.user.pne;
	this.user.necessidades;
	this.user.dieta;
	this.user.alergia;
	this.user.submitted = false;
	
	this.enviarForm = function()
	{
		myFirebaseRef.set(this.user);
	}
});
