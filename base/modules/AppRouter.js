define(['libs/backbone', 'modules/ModulesObservable', 'modules/ClinicaVet'], function(Backbone, ModulesObservable, ModuleClinicaVet) {
	ModulesObservable.Add('moduleClinicaVet', new ModuleClinicaVet());
	return Backbone.Router.extend({
		routes: {
			'' : 'showIndex',
			'detail/:id' : 'showDetail'
		},
		showIndex: function () {
			ModulesObservable.Get('moduleClinicaVet').ShowListView();
		},
		showDetail: function (id) {
			ModulesObservable.Get('moduleClinicaVet').ShowDetailView(id);
		}
	});
});
