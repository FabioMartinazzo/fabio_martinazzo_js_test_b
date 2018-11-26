define(['libs/backbone', 'modules/ModulesObservable', 'text!templates/clinica-vet/list-cabec.html'], function(Backbone, ModulesObservable, ListCabec) {
	return Backbone.View.extend({
		events: {
			'keypress #btn-pesquisaFilter': function(event) {
				ModulesObservable.Get('moduleClinicaVet').GetControl().BtnPesquisaFilterClick(event);
			}
		},
		el: '#content',
		initialize: function() {
			this.template = _.template(ListCabec);
			this.render();
		},
		render: function() {
			this.$el.empty();

			this.$el.append(this.template({ filtro: ModulesObservable.Get('moduleClinicaVet').GetControl().GetLastFiltro() }));
			return this;
		}
	});
});
