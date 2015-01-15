/**
 * Created by javierlog08
 * This file is a boostrap file for the entire app.
 * You should initiate any app component from here.
 * Example: Network,GameCore, etc
 */
define([
	'require',
	'game/GameEngine',
	'game/GUIEngine',
	'game/NetworkEngine',
	'game/SessionEngine',
	'game/MessageEngine'
], function (require, GameEngine, GUIEngine, NetworkEngine, SessionEngine, MessageEngine) {

	'use strict';

	require(['domReady'], function (domReady) {
		domReady(function () {

			/**
			 * Game Engines Initialization.
			 * All Core is Running here
			 */
			GameEngine.init();
			GUIEngine.init();
			NetworkEngine.init();
			SessionEngine.init();
			MessageEngine.init();
		});
	});


});