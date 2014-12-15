define(function(require){

	'use strict';


	var MessageDictionary = {

		/**
		 * LOGIN MESSAGES
		 */
		LOGIN_REQUEST     : require('game/network/messages/LoginRequest'),
		LOGOUT_REQUEST    : {},
		LOGIN_ACCEPTED    : {},
		LOGIN_VALIDATION  : {}
	};


	return MessageDictionary;

});
