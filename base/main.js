(function() {
	require(['modules/ModulesObservable', 'modules/AppRouter', 'libs/backbone'], function(ModulesObservable, AppRouter, Backbone) {
		ModulesObservable.Add('approuter', new AppRouter());
		Backbone.history.start();
	});
})(); 
