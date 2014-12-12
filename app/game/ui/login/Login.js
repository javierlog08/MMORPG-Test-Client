define([
	'jquery',
	'libs/jquery-form/jquery.form',
	'game/SessionEngine'
],function(jQuery,jqf,SessionEngine){

	var Login = function(){

		this.show = function()  {
			jQuery("#game").append('<div id="login" style="width: 30%;height: 30%; position:absolute; z-index: 1; left:0;right:0;top:30%; margin-left:auto;margin-right:auto;" ></div>');
			jQuery("#login").load("game/ui/login/login.html",function(){
				$('#login-form').ajaxForm({

					dataType:  'json',

					success:   function(data) {
						SessionEngine.login(data);
					}

				});
			});
		}

		this.hide = function() {
			jQuery("#login").hide();
		}
	}

	return new Login();

});
