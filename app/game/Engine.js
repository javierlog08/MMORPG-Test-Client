/**
 * Created By Javierlog08
 *
 * Base Engine Class.
 *
 * If you create a new Engine, extends from Engine
 * for event support.
 * Example: SessionEngine --> Extends Engine
 */
define(function () {

	var Engine = function ()
	{

		this._events = {};

	}

	Engine.prototype.onEvent = function (event, handler)
	{

		this._events[event].push(handler);

	}

	Engine.prototype.fireEvent = function (event)
	{

		for (var e in this._events[event])
			this._events[event][e]();

	}


	return Engine;

});
