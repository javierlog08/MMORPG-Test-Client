define(function(require){

	'use strict';

	var Engine              = require('game/Engine');
	var MessageDictionary   = require('game/network/MessageDictionary');
	var jQuery              = require('jquery');


	var MessageEngine = new Engine();


	MessageEngine.init = function()
	{
		MessageDictionary.setVersion('1.0');
	}

	MessageEngine.build = function(msgtype,data)
	{
		var msg = {};

		msg.name    = MessageDictionary.getName(msgtype);
		msg.msgtype = msgtype;

		for(var i in data)
			msg[i] = data[i];

		return msg;
	}

	MessageEngine.process = function(pkt)
	{
		var message = jQuery.parseJSON(pkt.data);
		if(MessageDictionary.validate(message))
			return message;
		else
			throw "Invalid Message Received. Is not in the dictionary !";
	}

	return MessageEngine;

});