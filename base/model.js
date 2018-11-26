define(['libs/backbone'], function(Backbone) {
	return function(fullModelName) {
		return Backbone.Model.extend({
			urlRoot: fullModelName
		});
	};
});
