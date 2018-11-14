
var ControlClinicaVet = function(ClinicaVetModel) {
	var model = ClinicaVetModel;

	var root = this;

	var getClinVetModel = function() {
		return model;
	};

	this.FilterByNomeFantasia = function(collection, filter) { 
		localStorage.lastFiltro = filter;
		var newCollection = getClinVetModel().GetBackboneCollection();
		return new newCollection(collection.filter(function(item) {
			return item.attributes.nomefantasia.toLowerCase().indexOf(filter.toLowerCase()) >= 0;
		}));
	};

	this.GetLastFiltro = function() {
		return localStorage.lastFiltro;
	};
};
