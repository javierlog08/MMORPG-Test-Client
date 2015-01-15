define(function(require){

	'use strict';

	var Engine              = require('game/Engine');
	var MessageDictionary   = require('game/network/MessageDictionary');


	var MessageEngine = new Engine();


	MessageEngine.init = function()
	{
		MessageDictionary.setVersion('1.0');
	}

	MessageEngine.build = function(msgType,data)
	{
		var msg = {};

		msg.name    = MessageDictionary.getName(msgType);
		msg.msgType = msgType;

		for(i in data)
			msg[i] = data[i];

		return msg;
	}

	MessageEngine.process = function(message)
	{

		if(MessageDictionary.validate(message))
			return MessageDictionary.create(message);
		else
			throw "Invalid Message Received. \n Is not in the dictionary !";

	}

	return MessageEngine;

});