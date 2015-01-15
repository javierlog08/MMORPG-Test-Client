define(function(require){

	'use strict';

	var jQuery  = require('jquery');
	var xml2json  = require('xml2json');

	var MessageDictionary = {};

	MessageDictionary.LOGIN_REQUEST  = 'A';
	MessageDictionary.LOGOUT_REQUEST = 'B';


	MessageDictionary.version = {};

	MessageDictionary.setVersion = function(v) {
		jQuery.get('/MMORPG-Test-Client/app/game/network/dictionary/version/'+v+'/dictionary.xml',function(xml){
			var data = xml2json.toJson(xml);
			MessageDictionary.version = data;
			console.log(JSON.stringify(MessageDictionary.version));
		})


	}

	MessageDictionary.getName = function(msgType){
		var messages = this.version.mmorpg.messages.message;

		for(i in messages)
		{
			if(messages[i].msgType = message.msgType)
				return messages[i].name;
		}
	}

	MessageDictionary.exists = function(message)
	{
		var messages = this.version.messages.message;

		for(i in messages)
		{
			if(messages[i].name = message.name)
				return true;
		}

		return false;
	}

	MessageDictionary.requires = function(message)
	{
		var messages = this.version.messages.message;

		for(i in messages)
		{
			if(messages[i].name = message.name)
			{
				for(var f in messages[i])
				{
					var field = messages[i][f];
					if(field.required == 'Y' && field.value == null && !field.value)
						return false
				}
			}
		}

		return true;
	}

	MessageDictionary.validate = function(message
	){
		if(this.exists(message))
		{
			if(this.requires(message))
				return true;
		}

		return false;
	}


	return MessageDictionary;

});
