var ClinicaVetListDetailView = Backbone.View.extend({
	tagName: 'li',
	className: 'clinica-vet-list-detail',
	initialize: function() {
		this.template = _.template($('#clinica-vet-list-detail-template').html());
		this.render();
	},
	render: function() {
		this.$el.html(this.template({ item: this.model }));
		return this;
	}
});
