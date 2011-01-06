// with thanks to: http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
// note that this function returns a different UID on each call so need to use the same call to set all instances in the page - GA and internal tracking
distilledUid = function() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    		var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
    		return v.toString(16);
	}).toUpperCase();
}

distilledSetUid = function(ga) {
	//need to add try / catch statement here
	if (distilledCheckAnalyticsCookie === 0) {
		ga.push(['_setCustomVar',
				1,		// This custom var is set to slot #1.  Required parameter.
				'UID',		// The name of the custom variable.  Required parameter.
				distilledUid(),		// The value of the custom variable.  Required parameter.
				1		// Sets the scope to visitor-level.  Optional parameter.
		]); 
	}
}

// With thanks to http://www.quirksmode.org/js/cookies.html
function distilledCheckAnalyticsCookie() {
        var cookiename = "__utma";
        var cookiecheck = 0;
        var cookies = document.cookie.split(';');
        for (var i=0;i<cookies.length;i++){
                while (cookies[i].charAt(0)==' ') cookies[i] = cookies[i].substring(1,cookies[i].length);
                if (cookies[i].indexOf(cookiename+'=') == 0){
                        cookiecheck = 1;
                } //if
        } //for
        return cookiecheck;
}
