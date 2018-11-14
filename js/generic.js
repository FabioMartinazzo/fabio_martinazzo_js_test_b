
var Generic = function() {
	this.callPesquisa = function(e, callback) {
		var key = e.which || e.keyCode;
		if (key == 13) 
			callback();
	};
}
