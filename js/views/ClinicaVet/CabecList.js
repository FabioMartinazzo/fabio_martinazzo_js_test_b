var ClinicaVetListCabecView = Backbone.View.extend({
	el: '#content',
	initialize: function() {
		this.template = _.template($('#clinica-vet-list-cabec-template').html());
		this.render();
	},
	render: function() {
		this.$el.empty();

		this.$el.append(this.template({ filtro: controlClinicaVet.GetLastFiltro() }));
		return this;
	}
});
