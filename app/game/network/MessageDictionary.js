define(function(require){

	'use strict';

	var jQuery  = require('jquery');
	var xml2json  = require('xml2json');

	var MessageDictionary = {};

	MessageDictionary.LOGIN_REQUEST  = 'A';
	MessageDictionary.LOGIN_RESPONSE = 'B';
	MessageDictionary.LOGOUT_REQUEST = 'C';


	MessageDictionary.version = {};

	MessageDictionary.setVersion = function(v)
	{
		jQuery.get('/MMORPG-Test-Client/app/game/network/dictionary/version/'+v+'/dictionary.xml',function(xml){
			MessageDictionary.version = jQuery.xml2json(xml);
		},'xml')

	}

	MessageDictionary.getName = function(msgtype)
	{
		var messages = this.version.messages.message;

		for(var i in messages)
		{
			if(messages[i].msgtype = msgtype)
				return messages[i].name;
		}
	}

	MessageDictionary.exists = function(message)
	{
		var messages = this.version.messages.message;

		for(var i in messages)
		{
			if(messages[i].name == message.name && messages[i].msgtype == message.msgtype)
				return true;
		}

		return false;
	}

	MessageDictionary.requires = function(message)
	{
		var messages = this.version.messages.message;

		for(var i in messages)
		{
			if(messages[i].name == message.name)
			{
				for(var f in messages[i].field)
				{
					var field = messages[i].field[f];
					if(field.required == 'Y' && !message[field.name])
						return false
				}
			}
		}

		return true;
	}

	MessageDictionary.validate = function(message)
	{
		if(this.exists(message))
		{
			if(this.requires(message))
				return true;
		}

		return false;
	}


	return MessageDictionary;

});
