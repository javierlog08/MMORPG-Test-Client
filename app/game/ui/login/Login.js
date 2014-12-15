define(function(require){

	'use strict';

	var jQuery          = require('jquery');
	var NetworkEngine   = require('game/NetworkEngine');
	var MessageEngine   = require('game/MessageEngine');

	var Login = {};

	Login.view = 'game/ui/login/login.html';

	Login.form = null;


	/**
	 * Class Construct
	 */
	jQuery.get(Login.view, function (ui){

		jQuery("#game").append(ui);

		Login.form = jQuery("#game-login");

		Login.form.submit(onSubmit);

	});


	Login.show = function ()
	{
		Login.form.show();
	}

	Login.hide = function ()
	{
		Login.form.hide();
	}

	function onSubmit()
	{

		var data =  Login.form.serializeArray();

		var message = MessageEngine.process("LOGIN_REQUEST", data);

		NetworkEngine.send(message);

    return false;

	}


	return Login;

});
