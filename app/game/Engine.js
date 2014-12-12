/**
 * Created By Javierlog08
 * Base Engine Class.
 */
define(function () {

	var Engine = function () {

		this.events = {};

		this.onEvent = function (event, handler) {
			this._events[event].push(handler);
		}

		this.fireEvent = function (event) {
			for (var e in this._events[event]) {
				this._events[event][e]();
			}
		}
	}


	return Engine;

});
