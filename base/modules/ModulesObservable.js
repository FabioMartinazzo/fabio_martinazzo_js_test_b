define(function() {	
	return {
		observers : [],

		Add : function(key, observer) {
			this.observers.push([key, observer]);
		},

		Remove : function(key) {
			this.observers = observers.filter(iobserver => iobserver[0] !== key);
		},

		Get : function(key) {
			return (this.observers.filter(iobserver => iobserver[0] == key)[0])[1];
		}
	}
});
