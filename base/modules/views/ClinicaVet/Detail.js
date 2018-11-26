define(['text!templates/clinica-vet/detail.html', 'modules/ModulesObservable'], function(DetailTemplate, ModulesObservable) {
	return Backbone.View.extend({
		events: {
			'click #btn-voltar': function(event) {
				ModulesObservable.Get('moduleClinicaVet').GetControl().BtnVoltarClick(event);
			}
		},
		el: '#content',
		initialize: function() {
			this.template = _.template(DetailTemplate);
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
});
