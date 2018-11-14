
var Configs = function(newHost){
 
	var host = ((newHost == undefined) ? 'http://localhost:3000' : newHost);
 
	var root = this;

	this.GetHost = function(){
		return host;
	};
};
