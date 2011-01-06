// with thanks to: http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
// note that this function returns a different UID on each call so need to use the same call to set all instances in the page - GA and internal tracking
distilledUid = function() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    		var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
    		return v.toString(16);
	}).toUpperCase();
}

distilledSetUid = function(ga) {
	try {
		ga.push(['_setCustomVar',
				1,		// This custom var is set to slot #1.  Required parameter.
				'UID',		// The name of the custom variable.  Required parameter.
				distilledUid(),		// The value of the custom variable.  Required parameter.
				2		// Sets the scope to session-level.  Optional parameter.
		]); 
	} catch (err) {} //ensure that if anything goes wrong, we don't break the rest of the tracking code
}
