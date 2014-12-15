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
	'game/SessionEngine'
],function(require,GameEngine,GUIEngine,NetworkEngine,SessionEngine){

	'use strict';

	require(['domReady'], function (domReady) {
	  domReady(function () {

	    /**
			 * Game Engine initiation.
			 * All Game Logic is on GameEngine Class.
			 */
			GameEngine.init();
			GUIEngine.init();
		  NetworkEngine.init();
		  SessionEngine.init();

	  });
	});


});