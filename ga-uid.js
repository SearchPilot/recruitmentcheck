<!-- with thanks to: http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript -->
uid = function() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    		var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
    		return v.toString(16);
	}).toUpperCase();
}

setuid = function(ga) {
	ga.push(['_setCustomVar',
			1,		// This custom var is set to slot #1.  Required parameter.
			'UID',		// The name of the custom variable.  Required parameter.
			uid(),		// The value of the custom variable.  Required parameter.
			1		// Sets the scope to visitor-level.  Optional parameter.
	]); 
}
