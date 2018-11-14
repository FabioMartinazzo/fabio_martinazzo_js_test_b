var ClinicaVetListView = Backbone.View.extend({
	el: '#body',
	initialize: function() {
		this.template = _.template($('#clinica-vet-list-template').html());
		this.render();
	},
	render: function() {
		that = this;
		model = that.model;

		this.$el.empty();
		this.$el.append(this.template());

		this.collection.fetch({
			success : function(vcollection) { 
				var subcollection = ((that.model != undefined) ? controlClinicaVet.FilterByNomeFantasia(vcollection, that.model) : vcollection);
				subcollection.each(function(model){
					that.$el.find('ul').append(new ClinicaVetListDetailView({ model: model }).render().el);
				});
			}
		});
		
		return this;
	}
});
