define(['libs/backbone'], function(Backbone) {
	return function(model, fullurl) {
		return Backbone.Collection.extend({
			model: model, 
			url: fullurl
		});
	}
});
