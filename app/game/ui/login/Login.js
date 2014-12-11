define([
	'jquery'
],function(jQuery){

	var Login = function(){
		this.render = function()  {
			jQuery("#game").append('<div id="login" style="width: 30%;height: 30%; position:absolute; z-index: 1; left:0;right:0;top:30%; margin-left:auto;margin-right:auto;" ></div>');
			jQuery("#login").load("game/ui/login/login.html");

			$('#login').show("fade");
		}
	}

	return new Login();

});
