/**
 * Created by Javierlog08
 * GUIEngine:
 * Manage all actions to fire and show Game UI on events.
 */
define([
	'game/Engine',
	'game/ui/login/Login',
	'game/SessionEngine'
],function(Engine,Login,SessionEngine){

	'use strict';

	var GUIEngine = function() {

		this.init = function(){

			if(SessionEngine.isGuest())
				Login.show();


			SessionEngine.onEvent("login",onLogin);
			SessionEngine.onEvent("sessionTimeOut",onSessionTimeOut);


		}


		function onLogin() {
			Login.hide();
		}

		function onSessionTimeOut() {
			Login.show();
		}

	}

	GUIEngine.prototype = new Engine();

	return new GUIEngine();


});
