define(['libs/backbone', 
	'modules/ModulesObservable', 
	'text!templates/clinica-vet/list-detail.html'], 
	function(Backbone, ModulesObservable, DetailList) {
		return Backbone.View.extend({
			events: {
				'click .btn-detail': function(event) {
					ModulesObservable.Get('moduleClinicaVet').GetControl().BtnDetailClick(event);
				}
			},
			initialize: function() {
				this.template = _.template(DetailList);
				this.render();
			},
			render: function() {
				this.$el.html(this.template({ collection : this.collection }));
				return this;
			}
		});
	}
);
