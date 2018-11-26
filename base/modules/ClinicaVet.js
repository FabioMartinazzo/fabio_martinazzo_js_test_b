define(['model', 
	'collection', 
	'./controls/ControlClinicaVet', 
	'./views/ClinicaVet/CabecList', 
	'./views/ClinicaVet/List', 
	'./views/ClinicaVet/Detail', 
	'configs'], 
	function(Model, Collection, ControlClinicaVet, ClinicaVetListCabecView, ClinicaVetListView, ClinicaVetDetailView, Configs) { 
		return function(myConfig) { 
			
			var modelName = 'clinicasveterinarias';
			var config = ((myConfig == undefined) ? new Configs() : myConfig);
			var fullUrlModelName = config.GetHost() + '/' + modelName;

			var modelClinicaVet = Model(fullUrlModelName);
			var collectionClinicaVet = Collection(modelClinicaVet, fullUrlModelName);
			var controlClinicaVet = new ControlClinicaVet(modelClinicaVet);

			var clinicaVetListCabecView;

			this.GetModel = function() {
				return modelClinicaVet;
			};

			this.GetCollection = function() {
				return collectionClinicaVet;
			};

			this.GetControl = function() {
				return controlClinicaVet;
			};

			this.GetFullUrlModelName = function() {
				return fullUrlModelName;
			};

			this.ShowListView = function(filter) {
				if (this.clinicaVetListCabecView == undefined)
					this.clinicaVetListCabecView = new ClinicaVetListCabecView();
				else
					this.clinicaVetListCabecView.render();

				this.ShowPartialListView(filter);
			};

			this.ShowPartialListView = function(filter) {
				var Collection = this.GetCollection();
				var collection = new Collection();

				var clinicaVetListView = new ClinicaVetListView(collection, filter);
				new clinicaVetListView();
			};

			this.ShowDetailView = function(id) {
				var Model = this.GetModel();
				new ClinicaVetDetailView({ model : new Model({ id : id }) });
			};
		};
	}
);
