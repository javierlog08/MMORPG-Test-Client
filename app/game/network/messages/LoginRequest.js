
define(function(require) {

	'use strict';

	return function(data)
	{

		var SessionEngine = require('game/SessionEngine');

		var form = {};

	;

		for (var i in data)
			form[data[i]['name']] = data[i]['value'];


		return {
			id: 1,
			uuid: SessionEngine.UUID,
			name: "LOGIN_REQUEST",
			username: form.username,
			password: form.password
		}

	}

});