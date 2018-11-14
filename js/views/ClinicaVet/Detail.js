var ClinicaVetDetailView = Backbone.View.extend({
	el: '#content',
	initialize: function() {
		this.template = _.template($('#clinica-vet-detail-template').html());
		this.render();
	},
	render: function() {
		that = this;

		this.$el.empty();

		this.model.fetch({
			success: function(item) {
				that.$el.append(that.template({ model: item }));
			}
		})

		return this;
	}
});
