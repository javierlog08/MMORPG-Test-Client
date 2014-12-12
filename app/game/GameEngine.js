/**
 * Created By Javierlog08
 * Game Singleton.
 * This is where you put your Phaser Game Logic
 * Can include game component here and call it.
 */
define([
	'game/Engine',
	'phaser',
	'game/SessionEngine'
], function (Engine,Phaser, SessionEngine) {

	'use strict';

	var GameEngine = function () {

		this.game;

		/**
		 * Set Phaser game instance and Game components
		 */
		this.init = function () {


			SessionEngine.onEvent("login", onLogin);
			SessionEngine.onEvent("sessionTimeOut", onSessionTimeOut);


		}

		function onLogin() {
			// -- Init Phasergame instance
			this.game = new Phaser.Game(800, 600, Phaser.CANVAS, 'game', {create: create, update: update});

			// -- Put under, initiation for all yours Phaser Components
		}

		function onSessionTimeOut() {
			this.game.destroy();
		}

		function create() {
		}

		function update() {
		}

	}

	GameEngine.prototype = new Engine();

	return new GameEngine();

});
