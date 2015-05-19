/**
 * Created by Javierlog08
 * GUIEngine:
 * Manage all actions to fire and show Game UI on events.
 */
define(function(require) {

	'use strict';

	var Engine            = require('game/Engine');
	var Login             = require('game/ui/login/Login');
	var SessionEngine     = require('game/SessionEngine');



	var GUIEngine = new Engine();


	GUIEngine.init = function ()
	{
		if (SessionEngine.isGuest())
			Login.show();

		SessionEngine.onEvent("login", onLogin);
		SessionEngine.onEvent("sessionTimeOut", onSessionTimeOut);
	}


	function onLogin()
	{
		Login.hide();
	}

	function onSessionTimeOut()
	{
		Login.show();
	}


	return GUIEngine;


});
