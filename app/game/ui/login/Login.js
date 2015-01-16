define(function(require){

	'use strict';

	var jQuery            = require('jquery');
	var NetworkEngine     = require('game/NetworkEngine');
	var MessageEngine     = require('game/MessageEngine');
	var MessageDictionary = require('game/network/MessageDictionary');
	var SessionEngine     = require('game/SessionEngine');

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

		var form = {};

		for (var i in data)
			form[data[i]['name']] = data[i]['value'];

		var message = MessageEngine.build(MessageDictionary.LOGIN_REQUEST,
		{
			username: form.username,
			password: form.password,
			uuid:     SessionEngine.UUID
		});

		NetworkEngine.send(message);

		return false;

	}


	return Login;

});
