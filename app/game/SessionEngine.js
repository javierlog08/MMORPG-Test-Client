/**
 * Created By Javierlog08
 * This Engine pretend to manage session for an user.
 * This Engine Runs on App init and keep tracking session
 * and authorization.
 */
define(function(require){

	'use strict';

	var Engine              = require('game/Engine');
	var NetworkEngine       = require('game/NetworkEngine');
	var uuid                = require('libs/node-uuid/uuid');
	var MessageDictionary   = require('game/network/MessageDictionary');


	var SessionEngine = new Engine();

	SessionEngine.session = null;

	SessionEngine.UUID; //use SessionStorage to set this


	SessionEngine._events = {
		login: [],          // OnLogin event
		sessionTimeOut: []  // OnSessionTime out event
	};

	SessionEngine.init = function ()
	{
		SessionEngine.UUID = uuid.v1({
		  node: [0x01, 0x23, 0x45, 0x67, 0x89, 0xab],
		  clockseq: 0x1234,
		  msecs: new Date().getTime(),
		  nsecs: 5678
		});

		NetworkEngine.onEvent("message",onMessage);

	}

	SessionEngine.isGuest = function ()
	{
		return (this.session == null) ? true : false;
	}


	SessionEngine.login = function (Session)
	{

		if(Session  != null)
			this.fireEvent("login");
		else
			alert("Login incorrercto");
	}


	function onMessage(message)
	{
		if(message.equals(MessageDictionary.LOGIN_REQUEST))
			SessionEngine.login(message);
	}

	return SessionEngine;

});
