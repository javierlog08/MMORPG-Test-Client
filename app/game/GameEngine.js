/**
 * Created By Javierlog08
 * Game Singleton.
 * This is where you put your Phaser Game Logic
 * Can include game component here and call it.
 */
define(function(require)
{

	'use strict';

	var Engine            = require("game/Engine");
	var Phaser            = require("phaser");
	var SessionEngine     = require("game/SessionEngine");


	var GameEngine = new Engine();


	GameEngine.game = null;

	GameEngine.init = function ()
	{

		SessionEngine.onEvent("login", onLogin);
		SessionEngine.onEvent("sessionTimeOut", onSessionTimeOut);

		// -- Init Phasergame instance
		GameEngine.game = new Phaser.Game(800, 600, Phaser.CANVAS, 'game', {create: create, update: update});

	}

	function onLogin()
	{
		GameEngine.game.stage.backgroundColor = '#0066CC';
	}

	function onSessionTimeOut()
	{

		GameEngine.game.destroy();

	}

	function create()
	{
	}

	function update()
	{
	}


	return GameEngine;

});
