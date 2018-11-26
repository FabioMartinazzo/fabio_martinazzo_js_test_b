define(['libs/backbone',
	'modules/views/ClinicaVet/DetailList', 
	'modules/ModulesObservable'], 
	function(Backbone, ClinicaVetListDetailView, ModulesObservable, ListTemplate) {
		return function(collection, filter) {
			return Backbone.View.extend({
				el: '#body',
				collection: collection,
				initialize: function() {
					this.render();
				},
				render: function() {
					var that = this;

					this.$el.empty();

					this.collection.fetch({
						success : function(vcollection) { 
							vcollection = (filter == undefined) ? vcollection : ModulesObservable.Get('moduleClinicaVet').GetControl().FilterByNomeFantasia(vcollection, filter);

							var clinicaVetListDetailView = new ClinicaVetListDetailView({ collection: vcollection });
							that.$el.append(clinicaVetListDetailView.render().el);
						}
					});

					return this;
				}
			});
		}
	}
);
