define(function(require){

	'use strict';

	var Engine    = require('game/Engine');
	var MessageDictionary  = require('game/network/MessageDictionary');


	var MessageEngine = new Engine();


	MessageEngine.init = function()
	{

	}

	MessageEngine.process = function(name,data)
	{

		if(MessageDictionary[name])
			return MessageDictionary[name](data);
		else
			throw "Invalid Message Received. \n Is not in the dictionary !";

	}

	return MessageEngine;

});