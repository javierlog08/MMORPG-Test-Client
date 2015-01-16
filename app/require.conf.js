/**
 * Created by Javier on 1/23/2014.
 * Require configuration. This is a good point to include libraries.
 * Please refer to requirejs docs.
 * @refer: http://requirejs.org/docs/api.html#config
 */

require.config({

	// alias libraries paths
	paths: {
		'domReady':  'libs/requirejs-domready/domReady',
		'phaser':    'libs/phaser/build/phaser.min',
		'bootstrap': 'libs/bootstrap/dist/js/bootstrap',
		'jquery':    'libs/jquery/dist/jquery',
		'xml2json':  'libs/xml2json/jquery.xml2json'
	},

	// angular does not support AMD out of the box, put it in a shim
	/**
	 * for libs that either do not support AMD(scripts that do not already call define().)
	 * out of the box, or require some fine tuning to dependency mgt'
	 */
	shim: {
		'phaser': {
			exports: 'Phaser'
		},
		'jquery': {
			exports: 'jQuery'
		},
		'bootstrap': {
			deps:['jquery']
		},
		'xml2json': {
			deps:['jquery']
		}
	},

	// kick start application
	deps: ['./app']
});