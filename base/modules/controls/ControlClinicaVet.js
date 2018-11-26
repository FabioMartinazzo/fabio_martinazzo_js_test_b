define(['libs/backbone', 'modules/ModulesObservable'], function(Backbone, ModulesObservable) {
	return function() {
		this.BtnDetailClick = function(event) {
			ModulesObservable.Get('approuter').navigate('detail/' + $(event.target).attr('data'), { trigger : true });
		};

		this.BtnVoltarClick = function(event) {
			ModulesObservable.Get('approuter').navigate('');
			ModulesObservable.Get('moduleClinicaVet').ShowListView(this.GetLastFiltro());
		};
	
		this.BtnPesquisaFilterClick = function(event) {
			this.callPesquisa(event, function() { 
				ModulesObservable.Get('moduleClinicaVet').ShowPartialListView($(event.target).val());
			});
		};

		this.callPesquisa = function(event, callback) {
			var key = event.which || event.keyCode;
			if (key == 13) 
				callback();
		};

		this.FilterByNomeFantasia = function(collection, filter) { 
			localStorage.lastFiltro = filter;

			var ClinicaVetColection = ModulesObservable.Get('moduleClinicaVet').GetCollection();
			return new ClinicaVetColection(collection.filter(function(item) {
				return item.get('nomefantasia').toLowerCase().indexOf(filter.toLowerCase()) >= 0;
			}));
		};

		this.GetLastFiltro = function() {
			return localStorage.lastFiltro;
		};
	};
});
