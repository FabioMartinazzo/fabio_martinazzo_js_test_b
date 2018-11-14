
var ModelClinicaVet = function(myConfig, newModelName) {
	var modelName = ((newModelName == undefined) ? 'clinicasveterinarias' : newModelName);

	var root = this;
	var config = ((myConfig == undefined) ? new Configs() : myConfig);

	var getClinVetModel = function() {
		return modelName;
	};

	var getFullUrlClinVetModel = function() {
		return config.GetHost() + "/" + getClinVetModel();
	};

	this.GetBackboneModel = function() { 
		return Backbone.Model.extend({
			urlRoot: getFullUrlClinVetModel()
		});
	};

	this.GetBackboneCollection = function() {
		return Backbone.Collection.extend({
			model: root.GetBackboneModel(), 
			url: getFullUrlClinVetModel()
		});
	};
};
