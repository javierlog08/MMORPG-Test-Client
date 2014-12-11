define([
	'game/ui/login/Login'
],function(Login){

	var GUIEngine = function() {

		this.init = function(){
			Login.render();
		}

	}

	return new GUIEngine();


});
