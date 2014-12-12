/**
 * Created By Javierlog08
 * This Engine pretend to manage session for an user.
 * This Engine Runs on App init and keep tracking session
 * and authorization.
 */
define(['game/Engine'],function(Engine){

	var SessionEngine = function() {

		this.session = null;

		this.init = function() {

		}

		this._events = {
			login:[],
			sessionTimeOut:[]

		};

		this.isGuest = function() {
			return (this.session == null) ? true : false;
		}

		/**
		 * Validate a session and create it based
		 * on data received from the server.
		 * @param Session
		 */
		this.login = function(Session) {
			this.fireEvent("login");
		}

	}

	SessionEngine.prototype = new Engine();

	return new SessionEngine();

});
