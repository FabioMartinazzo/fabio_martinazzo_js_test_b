var require = {
	baseUrl: 'base',
	paths: {
		'backbone' : 'libs/backbone',
		'underscore' : 'libs/underscore',
		'jquery' : 'libs/jquery',
		'text' : 'libs/require-plugins/text'
	}, 
	shim: {
		'backbone': {
			deps: ['jquery', 'underscore'], 
			exports: 'Backbone'
		},
		'underscore': {
			exports: '_'
		}
	}
};
